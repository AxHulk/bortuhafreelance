/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as newQuizLead } from './new-quiz-lead.tsx'
import { template as newContactForm } from './new-contact-form.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'new-quiz-lead': newQuizLead,
  'new-contact-form': newContactForm,
}