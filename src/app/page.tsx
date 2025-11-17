"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Star, Crown, Award, MapPin, Sparkles, Concierge, MessageSquare, HelpCircle, Newspaper, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.grandvistahotel.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Experience Luxury Redefined"
          description="Discover exceptional hospitality at Grand Vista Hotel, where elegant accommodations meet world-class service in the heart of the city"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.grandvistahotel.com"
            },
            {
              text: "Explore Amenities",
              href: "services"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373312428-gzaax7wy.jpg",
              imageAlt: "Grand Vista Hotel luxury lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373315270-1cbybnv9.jpg",
              imageAlt: "Luxury suite bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373314624-oqp8jatg.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373313845-q59ut6t8.jpg",
              imageAlt: "Spa wellness center"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373315956-65wgc6sx.jpg",
              imageAlt: "Swimming pool area"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Unparalleled Hospitality Since 1985"
          description="For nearly four decades, Grand Vista Hotel has set the standard for luxury accommodations and exceptional service. Our commitment to excellence ensures every guest experiences the finest in comfort and sophistication."
          tag="Our Heritage"
          tagIcon={Crown}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized globally for our exceptional guest experience and attention to detail",
              icon: Award
            },
            {
              title: "Prime Location",
              description: "Located in the city's most prestigious district with easy access to attractions",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "World-class facilities including spa, fine dining, and exclusive concierge services",
              icon: Sparkles
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373313097-rqkeb318.jpg"
          imageAlt="Grand Vista Hotel reception and concierge"
          imagePosition="right"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Exceptional Services & Amenities"
          description="Discover our comprehensive range of premium services designed to exceed your expectations"
          tag="Services"
          tagIcon={Concierge}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body at our award-winning spa featuring therapeutic treatments, steam rooms, and relaxation areas",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373313845-q59ut6t8.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our signature restaurant, where world-renowned chefs create unforgettable gastronomic journeys",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373314624-oqp8jatg.jpg",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              id: 3,
              title: "Luxury Accommodations",
              description: "Indulge in our meticulously designed suites featuring premium amenities, stunning city views, and personalized service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373315270-1cbybnv9.jpg",
              imageAlt: "Luxury hotel suite"
            },
            {
              id: 4,
              title: "Recreation & Pool",
              description: "Unwind in our stunning rooftop pool area with panoramic city views, private cabanas, and poolside service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373315956-65wgc6sx.jpg",
              imageAlt: "Rooftop swimming pool"
            },
            {
              id: 5,
              title: "Events & Conferences",
              description: "Host your special events in our elegant ballrooms and meeting spaces equipped with state-of-the-art technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373316872-7k4pm95q.jpg",
              imageAlt: "Elegant hotel ballroom"
            },
            {
              id: 6,
              title: "Concierge Services",
              description: "Our dedicated concierge team provides personalized assistance to ensure your stay exceeds expectations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373317541-82jx78z5.jpg",
              imageAlt: "Professional concierge service"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Grand Vista Hotel for their luxury stays"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Richardson",
              role: "CEO",
              company: "Richardson & Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373318219-qcu1u70n.png",
              imageAlt: "Sarah Richardson portrait"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Travel Director",
              company: "Elite Travel Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373318888-bf58yqkr.jpg",
              imageAlt: "Michael Thompson portrait"
            },
            {
              id: "3",
              name: "Isabella Martinez",
              role: "Event Planner",
              company: "Luxury Events Co.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373319589-9hp8j2e9.jpg",
              imageAlt: "Isabella Martinez portrait"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Managing Partner",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373320280-hd482cft.jpg",
              imageAlt: "David Chen portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373320806-9h7a23py.jpg"
          imageAlt="Grand Vista Hotel front desk"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transportation service. Please contact our concierge team to arrange pickup and drop-off at least 24 hours in advance."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature a signature fine dining restaurant, casual café, rooftop bar, and 24-hour room service. Our culinary team offers both international and local cuisine."
            },
            {
              id: "4",
              title: "Do you have spa and fitness facilities?",
              content: "Yes, our full-service spa offers therapeutic treatments, and our fitness center is equipped with state-of-the-art equipment. Both are available to all hotel guests."
            },
            {
              id: "5",
              title: "Can I host events at the hotel?",
              content: "Absolutely! We have elegant event spaces for weddings, corporate meetings, and special celebrations. Our events team will help plan every detail."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Travel Insights"
          description="Stay updated with the latest news, travel tips, and exclusive offers from Grand Vista Hotel"
          tag="Latest Updates"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Travel Guide",
              title: "Top 10 Must-Visit Attractions Near Our Hotel",
              excerpt: "Discover the best attractions, museums, and experiences within walking distance of Grand Vista Hotel",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373321520-jrmqkhgg.jpg",
              imageAlt: "City attractions guide",
              authorName: "Emma Wilson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373318219-qcu1u70n.png",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Culinary",
              title: "Chef's Special: Winter Seasonal Menu",
              excerpt: "Explore our executive chef's new seasonal menu featuring locally-sourced ingredients and innovative flavors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373322342-kut5qfnk.jpg",
              imageAlt: "Gourmet cuisine presentation",
              authorName: "James Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373318888-bf58yqkr.jpg",
              date: "12 Dec 2024"
            },
            {
              id: "3",
              category: "Business Travel",
              title: "Executive Services for Business Travelers",
              excerpt: "Learn about our enhanced business amenities, meeting facilities, and executive lounge services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373323073-k6y8gd11.jpg",
              imageAlt: "Business travel facilities",
              authorName: "Lisa Thompson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373319589-9hp8j2e9.jpg",
              date: "08 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Experience Luxury?"
          description="Contact our reservations team or subscribe to our newsletter for exclusive offers and updates about Grand Vista Hotel"
          tagIcon={Phone}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763373323798-ge4bkich.jpg"
          imageAlt="Grand Vista Hotel exterior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grand Vista Hotel"
          copyrightText="© 2024 Grand Vista Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" },
                { label: "Business Center", href: "business" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Local Attractions", href: "attractions" },
                { label: "City Guide", href: "guide" },
                { label: "Special Offers", href: "offers" },
                { label: "Travel Blog", href: "blog" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "reservations" },
                { label: "Guest Services", href: "services" },
                { label: "Feedback", href: "feedback" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/grandvistahotel",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/grandvistahotel",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandvistahotel",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}