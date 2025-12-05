import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContentCard extends Struct.ComponentSchema {
  collectionName: 'components_common_content_cards';
  info: {
    displayName: 'Content Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

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

export interface CommonFigure extends Struct.ComponentSchema {
  collectionName: 'components_common_figures';
  info: {
    displayName: 'Figure';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    title: Schema.Attribute.String;
  };
}

export interface CoursesBenefits extends Struct.ComponentSchema {
  collectionName: 'components_courses_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    bubbles: Schema.Attribute.Component<'common.figure', true>;
    highlightTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CoursesBlockEditor extends Struct.ComponentSchema {
  collectionName: 'components_courses_block_editors';
  info: {
    description: '';
    displayName: 'Block Editor';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isImageLeft: Schema.Attribute.Boolean;
  };
}

export interface CoursesCourses extends Struct.ComponentSchema {
  collectionName: 'components_courses_courses';
  info: {
    description: '';
    displayName: 'Courses';
  };
  attributes: {
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CoursesHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_courses_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlightTitle: Schema.Attribute.String;
    infoBubbles: Schema.Attribute.Component<'common.content-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    description: '';
    displayName: 'Widget';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    key: Schema.Attribute.String;
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

export interface HomepageArticles extends Struct.ComponentSchema {
  collectionName: 'components_homepage_articles';
  info: {
    displayName: 'Articles';
  };
  attributes: {
    highlightTitle: Schema.Attribute.String;
    newspapers: Schema.Attribute.Relation<
      'oneToMany',
      'api::newspaper.newspaper'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCourses extends Struct.ComponentSchema {
  collectionName: 'components_homepage_courses';
  info: {
    description: '';
    displayName: 'Courses';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
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
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
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
    clouds: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    heroShot: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    highlightTitle: Schema.Attribute.String;
    icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface IntroduceBanner extends Struct.ComponentSchema {
  collectionName: 'components_introduce_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    highlightTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageInMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface IntroduceHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_introduce_hero_banners';
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
    description: Schema.Attribute.Text;
    heroShot: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    highlightTitle: Schema.Attribute.String;
    icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface IntroduceOverview extends Struct.ComponentSchema {
  collectionName: 'components_introduce_overview_s';
  info: {
    displayName: 'Overview ';
  };
  attributes: {
    figures: Schema.Attribute.Component<'common.figure', true>;
    highlightTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IntroducePartner extends Struct.ComponentSchema {
  collectionName: 'components_introduce_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    partners: Schema.Attribute.Component<'common.icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface KnowledgeTabs extends Struct.ComponentSchema {
  collectionName: 'components_knowledge_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::newspaper.newspaper'
    >;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    highlightArticles: Schema.Attribute.Relation<
      'oneToMany',
      'api::newspaper.newspaper'
    >;
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    titleArticles: Schema.Attribute.String;
    titleCourses: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.content-card': CommonContentCard;
      'common.cta': CommonCta;
      'common.figure': CommonFigure;
      'common.icon': CommonIcon;
      'courses.benefits': CoursesBenefits;
      'courses.block-editor': CoursesBlockEditor;
      'courses.courses': CoursesCourses;
      'courses.hero-banner': CoursesHeroBanner;
      'homepage.about-us': HomepageAboutUs;
      'homepage.about-us-section': HomepageAboutUsSection;
      'homepage.articles': HomepageArticles;
      'homepage.courses': HomepageCourses;
      'homepage.courses-section': HomepageCoursesSection;
      'homepage.cta-section': HomepageCtaSection;
      'homepage.fa-qs-section': HomepageFaQsSection;
      'homepage.hero-banner': HomepageHeroBanner;
      'introduce.banner': IntroduceBanner;
      'introduce.hero-banner': IntroduceHeroBanner;
      'introduce.overview': IntroduceOverview;
      'introduce.partner': IntroducePartner;
      'knowledge.tabs': KnowledgeTabs;
    }
  }
}
