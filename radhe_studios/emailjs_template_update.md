# EmailJS Template Update — Add Photos

Go to: https://dashboard.emailjs.com/admin/templates
Open template: template_kzb0j0e

## Update the SUBJECT to:
New Creator Registration — {{from_name}}

## Replace the BODY content with this HTML:

<h2>New Creator Registration from Radhe Studios</h2>

<p><strong>Full Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Instagram Handle:</strong> {{instagramHandle}}</p>
<p><strong>City:</strong> {{city}}</p>
<p><strong>Instagram Followers:</strong> {{instagramFollowers}}</p>
<p><strong>Monthly Views:</strong> {{monthlyViews}}</p>
<p><strong>Instagram Link:</strong> {{instagramLink}}</p>
<p><strong>Open for Collabs:</strong> {{openForCollabs}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Creator Niche:</strong> {{creator_niche}}</p>
<p><strong>Collaboration Types:</strong> {{collaboration_types}}</p>
<p><strong>Consent Given:</strong> {{creator_consent}}</p>
<p><strong>Total Photos Submitted:</strong> {{total_photos}}</p>

<hr/>
<h3>Creator Photos</h3>

<p><strong>Photo 1:</strong></p>
<img src="{{photo_1}}" style="max-width:300px; border-radius:8px; margin-bottom:12px;" />

<p><strong>Photo 2:</strong></p>
<img src="{{photo_2}}" style="max-width:300px; border-radius:8px; margin-bottom:12px;" />

<p><strong>Photo 3:</strong> {{photo_3}}</p>
<p><strong>Photo 4:</strong> {{photo_4}}</p>
<p><strong>Photo 5:</strong> {{photo_5}}</p>

## Set Reply To:
{{from_email}}
