export interface Settings {
  websiteName?: string
  tagline?: string
  consultationCharge?: string
  consultationPrice?: string
  consultationPaymentUrl?: string
  calendlyLink?: string
  welcomeTitle?: string
  welcomeContent?: any
  logo?: any
  primaryColor?: string
  backgroundGradient?: string
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  mainMenu?: Array<{
    title: string
    link: string
  }>
}

export interface About {
  title: string
  content: any[]
  mission: string
  profileImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface Approach {
  title: string
  content: any[]
}

export interface WhyChoose {
  title: string
  content: any[]
}

export interface Service {
  _id: string
  title: string
  description: any[]
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  icon?: string
  duration?: string
  price?: string
  displayOrder?: number
}

export interface MythFact {
  _id: string
  myth: string
  fact: any[]
}

export interface Package {
  _id: string
  name: string
  duration: string
  price: string
  description?: any[]
  includes: string[]
  displayOrder?: number
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

export interface Newsletter {
  title: string
  description: string
  emailPlaceholder: string
  buttonText: string
}

export interface Testimonial {
  _id: string
  name: string
  text: any[]
  video?: {
    asset: {
      _ref: string
      url: string
    }
  }
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  order?: number
}

export interface IndividualHealing {
  _id: string
  name: string
  duration: string
  price: string
  description?: any[]
  displayOrder?: number
}
