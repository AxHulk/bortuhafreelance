import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'NataliFursa.ru'

interface NewContactFormProps {
  name?: string
  phone?: string
  message?: string
  createdAt?: string
  referrer?: string
  userAgent?: string
  submissionId?: string
}

const NewContactFormEmail = ({
  name = '—',
  phone = '—',
  message = '',
  createdAt = '',
  referrer = '',
  userAgent = '',
  submissionId = '',
}: NewContactFormProps) => (
  <Html lang="ru" dir="ltr">
    <Head />
    <Preview>Новая заявка с формы контактов: {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Новая заявка с сайта</Heading>
        <Text style={subtitle}>{SITE_NAME} — форма «Контакты»</Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Контакт</Heading>
          <Text style={row}><span style={label}>Имя:</span> {name}</Text>
          <Text style={row}><span style={label}>Телефон:</span> {phone}</Text>
          {createdAt && <Text style={row}><span style={label}>Время:</span> {createdAt}</Text>}
        </Section>

        {message && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Сообщение</Heading>
            <Text style={msgText}>{message}</Text>
          </Section>
        )}

        <Hr style={hr} />
        <Text style={meta}>
          {submissionId && <>ID заявки: {submissionId}<br /></>}
          {referrer && <>Источник: {referrer}<br /></>}
          {userAgent && <>User-Agent: {userAgent}</>}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewContactFormEmail,
  subject: (data: Record<string, any>) =>
    `Новая заявка с контактов: ${data?.name || 'клиент'}`,
  displayName: 'Новая заявка с формы контактов',
  to: 'bortnik.n.n@yandex.ru',
  previewData: {
    name: 'Анна Иванова',
    phone: '+7 (999) 123-45-67',
    message: 'Здравствуйте! Хочу обсудить дизайн квартиры 75 м² в Симферополе.',
    createdAt: '25.04.2026, 14:32',
    referrer: 'https://designfursa.ru/contacts',
    submissionId: 'demo-1234',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 4px' }
const h2 = { fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 12px' }
const subtitle = { fontSize: '13px', color: '#888', margin: '0 0 24px' }
const card = {
  backgroundColor: '#f7f5f2',
  border: '1px solid #e8e4dd',
  borderRadius: '4px',
  padding: '20px',
  margin: '0 0 16px',
}
const row = { fontSize: '14px', color: '#333', margin: '0 0 8px', lineHeight: '1.5' }
const label = { color: '#888', display: 'inline-block', minWidth: '90px' as const }
const msgText = { fontSize: '14px', color: '#1a1a1a', margin: '0', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const }
const hr = { border: 'none', borderTop: '1px solid #e8e4dd', margin: '24px 0' }
const meta = { fontSize: '11px', color: '#999', lineHeight: '1.6', margin: '0' }
