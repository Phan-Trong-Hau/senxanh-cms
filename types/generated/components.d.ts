import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonIcon extends Struct.ComponentSchema {
  collectionName: 'components_common_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    description: '';
    displayName: 'Widget';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_us_sections';
  info: {
    displayName: 'About Us Section';
  };
  attributes: {
    title: Schema.Attribute.String;
    widgets: Schema.Attribute.Component<'homepage.about-us', true>;
  };
}

export interface HomepageCourses extends Struct.ComponentSchema {
  collectionName: 'components_homepage_courses';
  info: {
    displayName: 'Courses';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta', false>;
    description: Schema.Attribute.RichText;
    heroShot: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroShotInMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCoursesSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_courses_sections';
  info: {
    displayName: 'Courses Section';
  };
  attributes: {
    courses: Schema.Attribute.Component<'homepage.courses', true>;
    highlightTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cta_section_s';
  info: {
    displayName: 'CTA Section ';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFaQsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_fa_qs_sections';
  info: {
    displayName: 'FAQs Section';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundInMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.RichText;
    highlightTitle: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.cta': CommonCta;
      'common.icon': CommonIcon;
      'homepage.about-us': HomepageAboutUs;
      'homepage.about-us-section': HomepageAboutUsSection;
      'homepage.courses': HomepageCourses;
      'homepage.courses-section': HomepageCoursesSection;
      'homepage.cta-section': HomepageCtaSection;
      'homepage.fa-qs-section': HomepageFaQsSection;
      'homepage.hero-banner': HomepageHeroBanner;
    }
  }
}
