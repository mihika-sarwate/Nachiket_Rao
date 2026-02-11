export interface Settings {
  websiteName: string
  tagline: string
  consultationCharge: string
  welcomeTitle: string
  welcomeContent: any[]
  logo?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  primaryColor: string
  backgroundGradient?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
  calendlyLink?: string
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
}

export interface MythFact {
  _id: string
  myth: string
  fact: string
}

export interface Package {
  _id: string
  name: string
  duration: string
  price: string
  description?: any[]
  includes: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}
