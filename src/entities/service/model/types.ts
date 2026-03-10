import type { StaticImageData } from "next/image";

export interface Service {
  id: number
  title: string
  description: string
  features: string[]
  tags: string[]
}

export interface ServiceLink {
  label: string
  href?: string
  type: 'github' | 'website' | 'article'
}

export interface ServiceImage {
  src: string | StaticImageData
  alt: string
}

export interface ServiceShowcase {
  id: string
  title: string
  headline: string
  description: string
  note?: string
  features: string[]
  links: ServiceLink[]
  image: ServiceImage
}
