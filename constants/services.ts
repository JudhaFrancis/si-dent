export interface ServiceData {
  title: string;
  subtitle: string;
  content: string[];
  heroImage: string;
  slug: string;
  stats: { label: string; value: string }[];
}

export const services: Record<string, ServiceData> = {
  "dental-implants": {
    title: "Dental Implants",
    subtitle: "Precise & Permanent Tooth Replacement",
    slug: "dental-implants",
    heroImage: "/dental_implants_hero_1774948346692.png",
    content: [
      "Dental implants are the most advanced and reliable solution for replacing missing teeth, offering a permanent, natural-looking, and long-lasting alternative to dentures and bridges. At SI-DENT Dental Clinic, we provide advanced dental implants in Nagercoil using guided implant surgery and 100% digital planning, ensuring precision, safety, and superior outcomes.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, a renowned prosthodontist and implantologist with over 12+ years of experience, our clinic follows a prosthetically driven implantology approach—focusing on both function and aesthetics. Using cutting-edge technologies like 3D imaging, intraoral scanning, and CAD-CAM workflows, we perform flapless, minimally invasive implant procedures that reduce pain, shorten healing time, and improve long-term success rates.",
      "We specialize in single tooth implants, multiple implants, full mouth rehabilitation, All-on-4 and All-on-6 dental implants in Nagercoil, delivering customized solutions tailored to each patient’s needs. Whether you have missing teeth, loose dentures, or difficulty chewing, our implant treatments restore confidence, comfort, and oral function effectively.",
      "If you are searching for the best dental implants in Nagercoil, implantologist near me, full mouth dental implants in Tamil Nadu, or painless implant treatment, SI-DENT Dental Clinic offers world-class care with advanced technology, precision, and proven results."
    ],
    stats: [
      { label: "Experience", value: "12+ Years" },
      { label: "Accuracy", value: "100% Digital" },
      { label: "Approach", value: "Minimally Invasive" }
    ]
  },
  "invisalign": {
    title: "Invisalign Clear Aligners",
    subtitle: "Diamond Provider in Tamil Nadu",
    slug: "invisalign",
    heroImage: "/invisalign_hero_1774948363337.png",
    content: [
      "At SI-DENT Dental Clinic, we are proud to be a Diamond Invisalign Provider in Tamil Nadu, recognized for delivering a high volume of successful clear aligner treatments with exceptional clinical outcomes. We offer advanced Invisalign clear aligners in Nagercoil, providing a discreet, comfortable, and highly effective alternative to traditional braces.",
      "Our Invisalign treatments are led by expert orthodontists Dr. Veera Shankar and Dr. Leevan Paul, along with Prof. Dr. S.I. Joephin Soundar, MDS, ensuring a specialist-driven, multidisciplinary approach to smile correction. Using AI driven 3D treatment planning and advanced intraoral scanning, we deliver customized aligner solutions with high precision, faster results, and predictable outcomes.",
      "Invisalign aligners are virtually invisible, removable, and designed to fit seamlessly into your lifestyle while effectively correcting crowding, spacing, and bite issues. If you are searching for the best Invisalign Diamond Provider in Tamil Nadu, clear aligners in Nagercoil, or invisible braces near me, SI-DENT Dental Clinic offers world-class orthodontic care with expertise, technology, and proven results."
    ],
    stats: [
      { label: "Provider Level", value: "Diamond" },
      { label: "Technology", value: "AI-Driven" },
      { label: "Vibe", value: "Virtually Invisible" }
    ]
  },
  "digital-smile-design": {
    title: "Digital Smile Design (DSD)",
    subtitle: "Revolutionary Smile Transformation",
    slug: "digital-smile-design",
    heroImage: "/dsd_indian.png",
    content: [
      "Digital Smile Design (DSD) at SI-DENT Dental Clinic offers a revolutionary approach to smile transformation using advanced digital dentistry, facial analysis, and AI-driven smile planning. This technology allows patients to preview their new smile before treatment begins, ensuring complete confidence and highly personalized results. By integrating intraoral scanning, CAD-CAM technology, and 3D digital workflows, we deliver precise, minimally invasive, and aesthetically superior smile makeovers tailored to each patient’s facial profile.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, a renowned digital dentistry expert in Nagercoil, the clinic stands out for its excellence in smile design and innovation. Dr. Joephin is a mentor, international speaker in Digital Smile Design, and a Key Opinion Leader (KOL) in digital dentistry, with extensive experience in advanced platforms like NemoSmile 3D and IVOCLAR. His prosthetically driven, evidence based approach ensures predictable, natural-looking, and long-lasting results, making SI-DENT a leading DSD clinic in Tamil Nadu, India.",
      "If you are searching for the best Digital Smile Design clinic in Nagercoil, smile makeover specialist, or cosmetic dentist in Tamil Nadu, SI-DENT Dental Clinic offers world-class expertise, advanced technology, and truly customized smile transformations."
    ],
    stats: [
      { label: "Expert", value: "DSD Mentor" },
      { label: "Planning", value: "AI-Driven" },
      { label: "Outcome", value: "Predictable" }
    ]
  },
  "laser-dentistry": {
    title: "Laser Dentistry",
    subtitle: "Painless & Minimally Invasive Care",
    slug: "laser-dentistry",
    heroImage: "/laser_dentistry_indian.png",
    content: [
      "Laser dentistry at SI-DENT Dental Clinic offers a modern, painless approach to dental treatments using advanced soft tissue and hard tissue laser technology. This minimally invasive technique ensures reduced pain, minimal bleeding, faster healing, and greater patient comfort, making it an ideal choice for patients who fear conventional dental procedures.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, an expert in digital and advanced dentistry, our clinic integrates laser technology into various treatments including gum contouring, periodontal therapy, cavity management, soft tissue procedures, and cosmetic smile corrections. Laser dentistry allows for high precision, preservation of healthy tissues, and improved treatment outcomes, enhancing both function and aesthetics.",
      "If you are searching for laser dentistry in Nagercoil, painless dental treatment near me, advanced gum treatment in Tamil Nadu, or minimally invasive dental procedures, SI-DENT Dental Clinic provides world-class laser care with precision, safety, and comfort."
    ],
    stats: [
      { label: "Pain Level", value: "Zero/Minimal" },
      { label: "Healing", value: "Fast-Track" },
      { label: "Precision", value: "Micron-Level" }
    ]
  },
  "root-canal-treatment": {
    title: "Root Canal Treatment",
    subtitle: "Advanced Painless Endodontics",
    slug: "root-canal-treatment",
    heroImage: "/root_canal_hero_1774948415180.png",
    content: [
      "Root Canal Treatment (RCT) at SI-DENT Dental Clinic is an advanced, painless procedure designed to save infected or severely damaged teeth, eliminating pain while preserving your natural tooth structure. Using modern endodontic techniques, digital diagnostics, and precision-driven protocols, we ensure complete removal of infection with long-lasting and reliable results.",
      "Our root canal treatments are led by Prof. Mano Christaine Angelo, ensuring specialist-driven endodontic care with high clinical precision and success rates. Supported by Prof. Dr. S.I. Joephin Soundar, MDS, our clinic follows a minimally invasive and patient-friendly approach, reducing discomfort and treatment time. With the integration of advanced imaging, modern instrumentation, and strict sterilization protocols, we deliver safe, efficient, and highly predictable RCT procedures.",
      "If you are searching for the best root canal treatment in Nagercoil, painless RCT near me, or expert endodontist in Tamil Nadu, SI-DENT Dental Clinic offers world-class care with precision, comfort, and long-term results."
    ],
    stats: [
      { label: "Specialist", value: "Endodontist" },
      { label: "Comfort", value: "Painless RCT" },
      { label: "Reliability", value: "Proven Success" }
    ]
  },
  "teeth-whitening": {
    title: "Teeth Whitening / Bleaching",
    subtitle: "Radiant & Confident Smile Instantly",
    slug: "teeth-whitening",
    heroImage: "/teeth_whitening_indian.png",
    content: [
      "Teeth whitening at SI-DENT Dental Clinic is a safe, effective, and advanced cosmetic procedure designed to give you a brighter, whiter, and more confident smile instantly. Using professional-grade bleaching systems and digital shade analysis, we remove stains caused by coffee, tea, smoking, and aging, delivering visible results in a single visit.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, an expert in cosmetic and digital dentistry, our clinic ensures customized whitening treatments tailored to your smile and sensitivity levels. With a focus on aesthetic precision and enamel safety, we provide long-lasting, natural-looking whitening results in a comfortable and controlled clinical environment.",
      "If you are searching for the best teeth whitening in Nagercoil, dental bleaching near me, or professional smile whitening in Tamil Nadu, SI-DENT Dental Clinic offers advanced solutions for a radiant and confident smile."
    ],
    stats: [
      { label: "Vibe", value: "Instant White" },
      { label: "Safety", value: "Enamel-Safe" },
      { label: "Expertise", value: "Cosmetic Spec." }
    ]
  },
  "veneers-smile-makeover": {
    title: "Veneers & Smile Makeover",
    subtitle: "Precision-Driven Aesthetic Perfection",
    slug: "veneers-smile-makeover",
    heroImage: "/veneers_hero_1774948469663.png",
    content: [
      "Veneers and smile makeover treatments at SI-DENT Dental Clinic are designed to create natural, aesthetic, and confident smiles using advanced digital dentistry and precision-driven techniques. Dental veneers are ultra-thin, custom-made restorations that correct discoloration, gaps, chipped, misaligned, or uneven teeth, delivering a flawless smile with minimal tooth preparation.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, a specialist in prosthodontics and digital smile designing, our clinic follows a prosthetically driven and digitally planned approach to ensure highly predictable and long-lasting results. Using Digital Smile Design (DSD), intraoral scanning, and CAD-CAM technology, we create personalized smile makeovers that harmonize with your facial features and enhance both aesthetics and function.",
      "If you are searching for the best veneers in Nagercoil, smile makeover specialist, cosmetic dentist near me, or aesthetic dental clinic in Tamil Nadu, SI-DENT Dental Clinic offers world-class expertise for a perfect smile transformation."
    ],
    stats: [
      { label: "Design", value: "Digital Mockup" },
      { label: "Material", value: "Porcelain/Zirconia" },
      { label: "Focus", value: "Facial Harmony" }
    ]
  },
  "cad-cam-restorations": {
    title: "CAD-CAM Restorations",
    subtitle: "Next-Generation Digital Restorations",
    slug: "cad-cam-restorations",
    heroImage: "/cad_cam_hero_1774948487010.png",
    content: [
      "SI-DENT Dental Clinic is at the forefront of CAD-CAM dentistry in Nagercoil, delivering highly precise, durable, and aesthetic dental restorations using advanced digital technology. With the upcoming launch of our in-house CAD-CAM lab, SI-DENT will be among the few clinics in India (less than 1%) equipped with complete in-house digital manufacturing, ensuring unmatched speed, accuracy, and quality control.",
      "Already equipped with advanced 3D printing technology and in-house aligner fabrication, our clinic follows a fully digital workflow—from intraoral scanning to design and final restoration. Under the expertise of Prof. Dr. S.I. Joephin Soundar, MDS, we provide same-day or faster turnaround for crowns, bridges, veneers, inlays, and onlays, ensuring superior fit, strength, and aesthetics with minimal patient visits.",
      "If you are searching for CAD-CAM dental clinic in Nagercoil, same-day crowns near me, digital dentistry in Tamil Nadu, or advanced dental restorations in India, SI-DENT Dental Clinic offers next-generation solutions with precision, innovation, and excellence."
    ],
    stats: [
      { label: "Accuracy", value: "Micron-Level" },
      { label: "Manufacturing", value: "In-House" },
      { label: "Speed", value: "Same-Day Ready" }
    ]
  },
  "inhouse-aligners": {
    title: "Inhouse Aligners & 3D Printing",
    subtitle: "Modern Digital Orthodontic Solutions",
    slug: "inhouse-aligners",
    heroImage: "/inhouse_aligners_hero_1774948505308.png",
    content: [
      "SI-DENT Dental Clinic is a leader in in-house aligners and 3D printing in Nagercoil, delivering advanced orthodontic and digital dental solutions with unmatched precision and speed. By integrating intraoral scanning, AI-based treatment planning, and high-resolution 3D printing, we design and fabricate custom clear aligners and dental appliances within the clinic, ensuring faster treatment initiation and superior quality control.",
      "Our aligner treatments are managed by a specialized orthodontic team including Dr. Veera Shankar and Dr. Leevan Paul, along with Prof. Dr. S.I. Joephin Soundar, MDS, ensuring a multidisciplinary, expert-driven approach for accurate and predictable smile correction. This in-house workflow reduces dependency on external labs, minimizes delays, and enhances treatment efficiency for every patient.",
      "If you are searching for in-house aligners in Nagercoil, clear aligners near me, 3D printing dental clinic in Tamil Nadu, or advanced digital orthodontic solutions, SI-DENT Dental Clinic offers cutting-edge care with precision, speed, and expertise."
    ],
    stats: [
      { label: "Speed", value: "Immediate Start" },
      { label: "Printing", value: "3D High-Res" },
      { label: "Expertise", value: "Orthodontic Team" }
    ]
  },
  "full-mouth-rehabilitation": {
    title: "Full Mouth Rehabilitation",
    subtitle: "Complete Jaw Reconstruction",
    slug: "full-mouth-rehabilitation",
    heroImage: "/rehab_hero_1774948522432.png",
    content: [
      "Full mouth rehabilitation at SI-DENT Dental Clinic is a comprehensive restorative procedure designed to rebuild and restore all of the teeth in both the upper and lower jaws. This advanced multidisciplinary approach integrates various treatments such as dental implants, crowns, bridges, and veneers to restore oral function, aesthetics, and overall health.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, our clinic follows a precision-driven, digitally planned workflow, ensuring customized solutions for patients with severe tooth loss, decay, or wear. If you are searching for the best full mouth rehabilitation in Nagercoil, complete smile reconstruction in Tamil Nadu, or advanced restorative dentistry, SI-DENT Dental Clinic offers world-class care with expertise and innovation."
    ],
    stats: [
      { label: "Scope", value: "Total Rebuild" },
      { label: "Specialty", value: "Prosthodontics" },
      { label: "Focus", value: "Function & Beauty" }
    ]
  },
  "digital-dentures": {
    title: "Digital Dentures",
    subtitle: "Patient-Specific Denture Solutions",
    slug: "digital-dentures",
    heroImage: "/digital_dentures_indian.png",
    content: [
      "Digital dentures at SI-DENT Dental Clinic offer a next-generation solution for replacing missing teeth with superior fit, comfort, and aesthetics using advanced digital dentistry workflows. By utilizing intraoral scanning, CAD-CAM design, and precision manufacturing, we create highly accurate dentures that provide improved stability, function, and natural appearance compared to conventional methods.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, a specialist in prosthodontics and digital dentistry, our clinic ensures customized, patient-specific denture solutions with minimal appointments and enhanced precision. Digital dentures reduce errors, improve retention, and allow for faster fabrication, making them an ideal choice for modern, comfortable tooth replacement.",
      "If you are searching for the best digital dentures in Nagercoil, advanced denture clinic near me, or CAD-CAM dentures in Tamil Nadu, SI-DENT Dental Clinic provides innovative, precise, and patient-friendly denture solutions."
    ],
    stats: [
      { label: "Fit", value: "Superior Grip" },
      { label: "Method", value: "CAD-CAM Design" },
      { label: "Aesthetics", value: "Natural Look" }
    ]
  },
  "crown-bridge": {
    title: "Crown & Bridge",
    subtitle: "High-Quality Zirconia Restorations",
    slug: "crown-bridge",
    heroImage: "/crown_bridge_hero_1774948568287.png",
    content: [
      "Crown and bridge treatment at SI-DENT Dental Clinic offers a reliable and aesthetic solution for restoring damaged, decayed, or missing teeth with advanced digital dentistry and CAD-CAM technology. We specialize in high-quality zirconia crowns and bridges, known for their exceptional strength, durability, and natural tooth-like appearance, making them the ideal choice for long-lasting restorations.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, a prosthodontist and digital dentistry expert, our clinic follows a precision-driven, prosthetically planned approach to ensure perfect fit, optimal function, and superior aesthetics. Using intraoral scanning and digital workflows, we deliver highly accurate restorations with minimal adjustments and maximum comfort.",
      "If you are searching for the best zirconia crowns in Nagercoil, dental crowns and bridges near me, or CAD-CAM crown treatment in Tamil Nadu, SI-DENT Dental Clinic provides world-class restorative solutions with strength, aesthetics, and long-term success."
    ],
    stats: [
      { label: "Material", value: "Zirconia" },
      { label: "Accuracy", value: "Digital Fit" },
      { label: "Longevity", value: "Maximum Durability" }
    ]
  },
  "general-dentistry": {
    title: "General & Preventive Dentistry",
    subtitle: "Trusted Comprehensive Oral Care",
    slug: "general-dentistry",
    heroImage: "/dental_implants_hero_1774948346692.png", // Temporarily reusing implants/generic
    content: [
      "General and preventive dentistry at SI-DENT Dental Clinic focuses on maintaining optimal oral health, early diagnosis, and long-term prevention of dental problems. Our comprehensive services include routine dental check-ups, professional teeth cleaning (scaling), fillings, gum care, and preventive treatments, all delivered using advanced diagnostic tools and digital workflows for accurate and efficient care.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, our clinic emphasizes a preventive and patient-centered approach, helping you avoid complex treatments through timely intervention and proper oral hygiene guidance. With strict sterilization protocols and modern techniques, we ensure safe, comfortable, and effective dental care for patients of all ages.",
      "If you are searching for the best dental clinic for cleaning in Nagercoil, preventive dentistry near me, or routine dental check-up in Tamil Nadu, SI-DENT Dental Clinic offers trusted, comprehensive care for a healthy and confident smile."
    ],
    stats: [
      { label: "Focus", value: "Prevention" },
      { label: "Patients", value: "All Ages" },
      { label: "Care", value: "Holistic" }
    ]
  },
  "sleep-dentistry": {
    title: "Anti-snoring Devices (Sleep Dentistry)",
    subtitle: "Medically Guided Sleep Solutions",
    slug: "sleep-dentistry",
    heroImage: "/anti_snoring_indian.png",
    content: [
      "SI-DENT Dental Clinic offers advanced anti-snoring devices and sleep dentistry solutions in Nagercoil to effectively manage snoring and mild to moderate sleep apnea. Using custom-made oral appliances, we help maintain an open airway during sleep, improving breathing, reducing snoring, and enhancing overall sleep quality and health.",
      "Led by Prof. Dr. S.I. Joephin Soundar, MDS, our clinic follows a multidisciplinary approach and works closely with cardiologists in the town, ensuring comprehensive evaluation and safe management of sleep-related breathing disorders. Each appliance is digitally designed and customized for maximum comfort, precision fit, and long-term effectiveness.",
      "If you are searching for anti-snoring treatment in Nagercoil, sleep apnea dental device near me, or sleep dentistry solutions in Tamil Nadu, SI-DENT Dental Clinic provides advanced, comfortable, and medically guided care for better sleep and improved overall health."
    ],
    stats: [
      { label: "Target", value: "Snoring/Apnea" },
      { label: "Accuracy", value: "Custom Fit" },
      { label: "Health", value: "Improved Sleep" }
    ]
  }
};
