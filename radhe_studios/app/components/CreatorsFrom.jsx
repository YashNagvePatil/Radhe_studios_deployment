'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '../../Config';

const formatInstagramUrl = (urlStr) => {
  if (!urlStr) return '';
  let trimmed = urlStr.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (trimmed.startsWith('@')) {
    trimmed = trimmed.substring(1);
  }
  if (trimmed.startsWith('instagram.com/')) {
    return `https://${trimmed}`;
  }
  if (trimmed.startsWith('www.instagram.com/')) {
    return `https://${trimmed}`;
  }
  return `https://instagram.com/${trimmed}`;
};

// Convert file to base64 data URL
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

// Upload image to ImgBB and return public URL
const uploadToImgBB = async (file, apiKey) => {
  const base64Full = await toBase64(file);
  const base64Data = base64Full.split(',')[1]; // strip data:image/...;base64,
  const body = new FormData();
  body.append('key', apiKey);
  body.append('image', base64Data);
  const response = await fetch('https://api.imgbb.com/1/upload', {
    method: 'POST',
    body,
  });
  if (!response.ok) throw new Error(`ImgBB HTTP error ${response.status}`);
  const json = await response.json();
  if (json.success) return json.data.url;
  throw new Error(json.error?.message || 'ImgBB upload failed');
};

// Compress image for upload (high resolution & top visual quality for ImgBB)
const compressImage = (file, maxDim = 2048, maxKBytes = 3072, initialQuality = 0.90) => {
  return new Promise((resolve) => {
    if (!file) { resolve(file); return; }
    // If file is already under 3MB and is an image, preserve original file completely
    if (file.size <= maxKBytes * 1024 && file.type.startsWith('image/')) {
      resolve(file);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const attemptCompress = (currentMaxDim, quality) => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          if (width > currentMaxDim || height > currentMaxDim) {
            if (width > height) {
              height = Math.round((height * currentMaxDim) / width);
              width = currentMaxDim;
            } else {
              width = Math.round((width * currentMaxDim) / height);
              height = currentMaxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob && blob.size > maxKBytes * 1024 && currentMaxDim > 800) {
                attemptCompress(Math.round(currentMaxDim * 0.85), Math.max(0.75, quality - 0.05));
              } else if (blob) {
                const compressedFile = new File(
                  [blob],
                  file.name.replace(/\.[^/.]+$/, '') + '.jpg',
                  { type: 'image/jpeg', lastModified: Date.now() }
                );
                resolve(compressedFile);
              } else {
                resolve(file);
              }
            },
            'image/jpeg',
            quality
          );
        };
        attemptCompress(maxDim, initialQuality);
      };
      img.onerror = () => resolve(file);
    };
    reader.onerror = () => resolve(file);
  });
};

const MIN_PHOTOS = 2;
const MAX_PHOTOS = 5;

const CreatorsFrom = () => {
  const formRef = useRef();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    instagramHandle: '',
    city: '',
    instagramFollowers: '',
    monthlyViews: '',
    instagramLink: '',
    openForCollabs: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [selectedNiches, setSelectedNiches] = useState([]);
  const [selectedCollabTypes, setSelectedCollabTypes] = useState([]);

  // Multi-photo state
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photoPreviews, setPhotoPreviews] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Options lists
  const nicheOptions = [
    'Fashion', 'Beauty', 'Skincare', 'Makeup', 'Haircare', 'Lifestyle',
    'Fitness', 'Food', 'Travel', 'Technology', 'Gaming', 'Finance',
    'Education', 'Comedy', 'Entertainment', 'Photography', 'Parenting',
    'Automobile', 'Jewellery', 'Luxury', 'Business', 'Other'
  ];

  const collabTypeOptions = [
    'UGC Content', 'Instagram Reels', 'Instagram Stories', 'Product Promotion',
    'Product Reviews', 'Brand Collaborations', 'Influencer Campaigns', 'Product Shoot',
    'Event Coverage', 'Brand Events', 'Travel Collaborations', 'Lifestyle Campaigns',
    'Long-term Brand Partnerships', 'Content Creation for Brand Ads', 'Other'
  ];

  const openForCollabOptions = [
    'Yes',
    'Yes, depending on the brand',
    'Not currently'
  ];

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNicheToggle = (niche) => {
    setSelectedNiches(prev =>
      prev.includes(niche)
        ? prev.filter(item => item !== niche)
        : [...prev, niche]
    );
  };

  const handleCollabTypeToggle = (type) => {
    setSelectedCollabTypes(prev =>
      prev.includes(type)
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const remaining = MAX_PHOTOS - photoFiles.length;
    const toProcess = files.slice(0, remaining);

    for (const file of toProcess) {
      const previewUrl = URL.createObjectURL(file);
      setPhotoFiles(prev => [...prev, file]);
      setPhotoPreviews(prev => [...prev, previewUrl]);
    }
    // Reset input so the same file can be re-selected if needed
    e.target.value = '';
  };

  const handleRemovePhoto = (index) => {
    setPhotoFiles(prev => prev.filter((_, i) => i !== index));
    setPhotoPreviews(prev => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleConsentChange = (e) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitMessage('');

    // Format Instagram Link
    const formattedInstagramLink = formatInstagramUrl(formData.instagramLink);

    // Validations
    if (selectedNiches.length === 0) {
      setErrorMessage('Please select at least one Creator Niche.');
      return;
    }
    if (selectedCollabTypes.length === 0) {
      setErrorMessage('Please select at least one type of collaboration.');
      return;
    }
    if (!formData.openForCollabs) {
      setErrorMessage('Please indicate if you are open to brand collaborations.');
      return;
    }
    if (photoFiles.length < MIN_PHOTOS) {
      setErrorMessage(`Please upload at least ${MIN_PHOTOS} profile photos (you have ${photoFiles.length}).`);
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please accept the Creator Consent & Permission to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Upload each photo to ImgBB with high resolution & quality
      const imgbbKey = config.IMGBB_API_KEY;
      if (!imgbbKey) throw new Error('ImgBB API key is missing. Please add NEXT_PUBLIC_IMGBB_API_KEY to your .env file.');

      const photoUrls = [];
      for (let i = 0; i < photoFiles.length; i++) {
        const compressed = await compressImage(photoFiles[i], 2048, 3072, 0.90);
        const url = await uploadToImgBB(compressed, imgbbKey);
        photoUrls.push(url);
      }

      // Step 2: Build template params with ImgBB URLs
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        instagramHandle: formData.instagramHandle,
        city: formData.city,
        instagramFollowers: formData.instagramFollowers,
        monthlyViews: formData.monthlyViews,
        instagramLink: formattedInstagramLink,
        openForCollabs: formData.openForCollabs,
        phone: formData.phone || 'Not provided',
        creator_niche: selectedNiches.join(', '),
        collaboration_types: selectedCollabTypes.join(', '),
        creator_consent: formData.consent ? 'YES — Approved' : 'NO',
        total_photos: `${photoFiles.length} photo(s) submitted`,
        photo_1_url: photoUrls[0] || 'Not submitted',
        photo_2_url: photoUrls[1] || 'Not submitted',
        photo_3_url: photoUrls[2] || 'Not submitted',
        photo_4_url: photoUrls[3] || 'Not submitted',
        photo_5_url: photoUrls[4] || 'Not submitted',
      };

      await emailjs.send(
        config.EMAIL_SERVICE_ID,
        config.EMAIL_TEMPLETE_ID,
        templateParams,
        { publicKey: config.EMAIL_PUBLICE_KEY }
      );

      setSubmitMessage('Thank you for registering! Your creator profile has been submitted to Radhe Talent / Radhe Studios.');

      // Reset all form state
      setFormData({
        fullName: '',
        instagramHandle: '',
        city: '',
        instagramFollowers: '',
        monthlyViews: '',
        instagramLink: '',
        openForCollabs: '',
        email: '',
        phone: '',
        consent: false,
      });
      setSelectedNiches([]);
      setSelectedCollabTypes([]);
      setPhotoFiles([]);
      setPhotoPreviews([]);
      if (formRef.current) formRef.current.reset();

    } catch (error) {
      const errDetails = error?.text || error?.message || (typeof error === 'object' ? JSON.stringify(error) : String(error));
      console.error('EmailJS submission error:', error?.status, errDetails, error);
      setErrorMessage(`Submission failed (${error?.status || 'Error'}): ${errDetails}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">

      {/* SECTION 1 — Creator Details */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl space-y-6">
        <div className="border-b border-amber-400/30 pb-3">
          <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wider text-amber-400">
            SECTION 1 — Creator Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Full Name */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              1. Full Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
          </div>

          {/* 2. Instagram Handle */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              2. Instagram Handle <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="instagramHandle"
              value={formData.instagramHandle}
              onChange={handleInputChange}
              required
              placeholder="@yourusername"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
          </div>
        </div>

        {/* 3. City */}
        <div className="space-y-2">
          <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
            3. City <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            placeholder="Your current city"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
          />
        </div>

        {/* 4. Creator Niche */}
        <div className="space-y-3 pt-2">
          <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
            4. Creator Niche <span className="text-amber-400">*</span>
            <span className="block text-xs text-white/40 normal-case mt-0.5">Select all that apply</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-1">
            {nicheOptions.map((niche) => {
              const isChecked = selectedNiches.includes(niche);
              return (
                <button
                  type="button"
                  key={niche}
                  onClick={() => handleNicheToggle(niche)}
                  className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border text-left transition-all duration-200 flex items-center justify-between ${isChecked
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-white/5 border-white/15 text-white/70 hover:border-amber-400/40 hover:text-white'
                    }`}
                >
                  <span>{niche}</span>
                  <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${isChecked ? 'bg-amber-400 border-amber-400 text-slate-950 font-bold' : 'border-white/30'
                    }`}>
                    {isChecked ? '✓' : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2 — Social Media & Audience */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl space-y-6">
        <div className="border-b border-amber-400/30 pb-3">
          <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wider text-amber-400">
            SECTION 2 — Social Media &amp; Audience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 5. Instagram Followers */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              5. Instagram Followers <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="instagramFollowers"
              value={formData.instagramFollowers}
              onChange={handleInputChange}
              required
              placeholder="Example: 25K"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
          </div>

          {/* 6. Monthly Average Instagram Views */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              6. Monthly Average Views <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              name="monthlyViews"
              value={formData.monthlyViews}
              onChange={handleInputChange}
              required
              placeholder="Example: 500K / month"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
          </div>
        </div>

        {/* 7. Instagram Profile Link */}
        <div className="space-y-2">
          <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
            7. Instagram Profile Link <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
            onBlur={() => {
              if (formData.instagramLink) {
                setFormData(prev => ({
                  ...prev,
                  instagramLink: formatInstagramUrl(prev.instagramLink)
                }));
              }
            }}
            required
            placeholder="https://instagram.com/yourusername or @yourusername"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
          />
          <p className="text-xs text-white/40 font-light">
            Accepts full URL (https://instagram.com/...), instagram.com/username, or @username.
          </p>
        </div>
      </div>

      {/* SECTION 3 — Collaboration Opportunities */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl space-y-6">
        <div className="border-b border-amber-400/30 pb-3">
          <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wider text-amber-400">
            SECTION 3 — Collaboration Opportunities
          </h3>
        </div>

        {/* 8. Collaboration Types */}
        <div className="space-y-3">
          <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
            8. What type of collaborations are you interested in? <span className="text-amber-400">*</span>
            <span className="block text-xs text-white/40 normal-case mt-0.5">Select all that apply</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
            {collabTypeOptions.map((type) => {
              const isChecked = selectedCollabTypes.includes(type);
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => handleCollabTypeToggle(type)}
                  className={`px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium border text-left transition-all duration-200 flex items-center justify-between ${isChecked
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-white/5 border-white/15 text-white/70 hover:border-amber-400/40 hover:text-white'
                    }`}
                >
                  <span>{type}</span>
                  <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0 ml-2 ${isChecked ? 'bg-amber-400 border-amber-400 text-slate-950 font-bold' : 'border-white/30'
                    }`}>
                    {isChecked ? '✓' : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 9. Open to Brand Collaborations */}
        <div className="space-y-3 pt-2">
          <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
            9. Are you currently open to brand collaborations? <span className="text-amber-400">*</span>
          </label>
          <div className="space-y-2 pt-1">
            {openForCollabOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${formData.openForCollabs === option
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                    : 'bg-white/5 border-white/15 text-white/70 hover:border-amber-400/40 hover:text-white'
                  }`}
              >
                <input
                  type="radio"
                  name="openForCollabs"
                  value={option}
                  checked={formData.openForCollabs === option}
                  onChange={handleInputChange}
                  required
                  className="accent-amber-400 w-4 h-4"
                />
                <span className="text-sm font-light">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4 — Contact Details */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl space-y-6">
        <div className="border-b border-amber-400/30 pb-3">
          <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wider text-amber-400">
            SECTION 4 — Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 10. Email Address */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              10. Email Address <span className="text-amber-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="yourname@gmail.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
          </div>

          {/* 11. Mobile / WhatsApp Number */}
          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              11. Mobile / WhatsApp Number <span className="text-white/40 text-xs font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all font-light"
            />
            <p className="text-xs text-white/40 font-light">
              We may use this to contact you regarding relevant creator opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 5 — Creator Photos */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl space-y-6">
        <div className="border-b border-amber-400/30 pb-3 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bebas uppercase tracking-wider text-amber-400">
            SECTION 5 — Creator Photos
          </h3>
          {/* Photo count badge */}
          <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-all ${
            photoFiles.length >= MIN_PHOTOS
              ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
              : 'bg-white/10 text-white/40 border border-white/20'
          }`}>
            {photoFiles.length} / {MAX_PHOTOS}
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm uppercase tracking-widest text-white/70 font-inter">
              12. Upload Your Profile Photos <span className="text-amber-400">*</span>
            </label>
            <p className="text-xs text-white/40 normal-case mt-1">
              Minimum {MIN_PHOTOS} photos required · Maximum {MAX_PHOTOS} photos · High-quality portrait / profile photos
            </p>
          </div>

          {/* Uploaded Photos Grid */}
          {photoPreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {photoPreviews.map((preview, index) => (
                <div key={index} className="relative group aspect-square">
                  <img
                    src={preview}
                    alt={`Creator photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl border-2 border-amber-400/50 shadow-lg shadow-amber-500/10"
                  />
                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-400 text-white rounded-full flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg z-10 leading-none"
                    title="Remove photo"
                  >
                    ×
                  </button>
                  {/* Index badge */}
                  <div className="absolute bottom-1.5 left-1.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-md font-semibold">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Photo Upload Area — only visible if under MAX */}
          {photoFiles.length < MAX_PHOTOS && (
            <div className="relative border-2 border-dashed border-white/20 hover:border-amber-400/50 rounded-xl p-6 sm:p-8 text-center transition-all duration-300 bg-white/5 hover:bg-white/[0.07] group cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-amber-500/15 group-hover:bg-amber-500/25 border border-amber-400/30 flex items-center justify-center transition-all duration-300">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80 font-medium">
                    {photoFiles.length === 0
                      ? 'Click to upload your photos'
                      : `Add more photos (${MAX_PHOTOS - photoFiles.length} slot${MAX_PHOTOS - photoFiles.length !== 1 ? 's' : ''} remaining)`}
                  </p>
                  <p className="text-xs text-white/40 mt-1 font-light">
                    JPG, PNG, WEBP · You can select multiple at once · Ultra high-resolution photos preserved for portfolio &amp; brand proposals
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Status messages */}
          {photoFiles.length > 0 && photoFiles.length < MIN_PHOTOS && (
            <div className="flex items-center gap-2 text-xs text-amber-400/90 bg-amber-500/10 border border-amber-400/20 rounded-lg px-4 py-3">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                Please upload {MIN_PHOTOS - photoFiles.length} more photo{MIN_PHOTOS - photoFiles.length > 1 ? 's' : ''} to meet the minimum requirement.
              </span>
            </div>
          )}
          {photoFiles.length >= MIN_PHOTOS && (
            <div className="flex items-center gap-2 text-xs text-green-400/90 bg-green-500/10 border border-green-400/20 rounded-lg px-4 py-3">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                {photoFiles.length} photo{photoFiles.length > 1 ? 's' : ''} ready to submit.
                {photoFiles.length < MAX_PHOTOS ? ` You can add up to ${MAX_PHOTOS - photoFiles.length} more.` : ''}
              </span>
            </div>
          )}

          {/* Photo Usage Notice */}
          <div className="p-4 bg-amber-500/10 border border-amber-400/20 rounded-lg">
            <p className="text-xs text-white/70 leading-relaxed font-light">
              <span className="font-semibold text-amber-400 uppercase tracking-wide">Photo Usage Notice:</span>{' '}
              By uploading these photos, you consent to Radhe Talent / Radhe Studios using them for creator profiles, brand proposals, campaign presentations and promotional content on our official social media handles, including Instagram, for the purpose of promoting your creator profile and securing brand collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CONSENT */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-400/40 rounded-xl space-y-4">
        <h3 className="text-xl font-bebas uppercase tracking-wider text-amber-400">
          FINAL CONSENT &amp; PERMISSION
        </h3>

        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={handleConsentChange}
            required
            className="mt-1 accent-amber-400 w-5 h-5 shrink-0"
          />
          <span className="text-xs sm:text-sm text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
            <span className="font-medium text-amber-300"> Creator Consent &amp; Permission:</span> I confirm that the information and photos submitted by me are accurate and that I have the right to provide the submitted photos. I give Radhe Talent / Radhe Studios permission to use my submitted creator details and profile photos in creator portfolios, brand proposals, campaign presentations and promotional content on Radhe Talent/Radhe Studios social media handles, including Instagram, for the purpose of promoting my creator profile and securing brand collaborations. I understand that my profile may be shared with relevant brands for potential collaboration opportunities.
          </span>
        </label>
      </div>

      {/* Error & Feedback Messages */}
      {errorMessage && (
        <div className="p-4 sm:p-5 bg-red-500/20 border border-red-400/50 rounded-lg text-red-300 text-sm">
          {errorMessage}
        </div>
      )}

      {submitMessage && (
        <div className="p-4 sm:p-5 bg-amber-500/20 border border-amber-400/50 rounded-lg text-amber-300 text-sm">
          {submitMessage}
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 sm:px-14 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
        >
          {isSubmitting ? 'Submitting Creator Profile...' : 'Submit Creator Registration'}
        </button>
      </div>

    </form>
  );
};

export default CreatorsFrom;
