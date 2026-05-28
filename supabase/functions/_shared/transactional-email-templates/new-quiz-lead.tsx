import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'NataliFursa.ru'

interface QuizAnswerItem {
  label: string
  value: string
}

interface NewQuizLeadProps {
  trackLabel?: string
  contactName?: string
  contactType?: string
  contactValue?: string
  createdAt?: string
  referrer?: string
  userAgent?: string
  answers?: QuizAnswerItem[]
  files?: string[]
  leadId?: string
}

const NewQuizLeadEmail = ({
  trackLabel = 'Не указан',
  contactName = '—',
  contactType = '—',
  contactValue = '—',
  createdAt = '',
  referrer = '',
  userAgent = '',
  answers = [],
  files = [],
  leadId = '',
}: NewQuizLeadProps) => (
  <Html lang="ru" dir="ltr">
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <Preview>Новая заявка с опросника: {contactName} ({trackLabel})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Новая заявка с сайта</Heading>
        <Text style={subtitle}>{SITE_NAME} — опросник «Бросьте вызов»</Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Контакт</Heading>
          <Text style={row}><span style={label}>Имя:</span> {contactName}</Text>
          <Text style={row}><span style={label}>Канал:</span> {contactType}</Text>
          <Text style={row}><span style={label}>Значение:</span> {contactValue}</Text>
          <Text style={row}><span style={label}>Тип объекта:</span> {trackLabel}</Text>
          {createdAt && <Text style={row}><span style={label}>Время:</span> {createdAt}</Text>}
        </Section>

        {answers.length > 0 && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Бриф ({answers.length} ответов)</Heading>
            {answers.map((item, idx) => (
              <div key={idx} style={qaItem}>
                <Text style={qLabel}>{item.label}</Text>
                <Text style={qValue}>{item.value}</Text>
              </div>
            ))}
          </Section>
        )}

        {files.length > 0 && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Загруженные файлы ({files.length})</Heading>
            {files.map((url, idx) => (
              <Text key={idx} style={row}>
                <Link href={url} style={linkStyle}>📎 Файл {idx + 1}</Link>
              </Text>
            ))}
            <Text style={hint}>Ссылки действительны 7 дней.</Text>
          </Section>
        )}

        <Hr style={hr} />
        <Text style={meta}>
          {leadId && <>ID заявки: {leadId}<br /></>}
          {referrer && <>Источник: {referrer}<br /></>}
          {userAgent && <>User-Agent: {userAgent}</>}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewQuizLeadEmail,
  subject: (data: Record<string, any>) =>
    `Новая заявка: ${data?.contactName || 'клиент'} (${data?.trackLabel || 'опрос'})`,
  displayName: 'Новая заявка с опросника',
  to: 'bortnik.n.n@yandex.ru',
  previewData: {
    trackLabel: 'Жилое помещение',
    contactName: 'Анна Иванова',
    contactType: 'phone',
    contactValue: '+7 (999) 123-45-67',
    createdAt: '25.04.2026, 14:32',
    referrer: 'https://designfursa.ru/',
    answers: [
      { label: 'Город', value: 'Москва' },
      { label: 'Площадь', value: '85 м²' },
      { label: 'Бюджет', value: '2-3 млн ₽' },
    ],
    files: ['https://example.com/plan.pdf'],
    leadId: 'demo-1234',
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
const label = { color: '#888', display: 'inline-block', minWidth: '110px' as const }
const qaItem = { marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e8e4dd' }
const qLabel = { fontSize: '12px', color: '#888', margin: '0 0 4px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
const qValue = { fontSize: '14px', color: '#1a1a1a', margin: '0', lineHeight: '1.5' }
const linkStyle = { color: '#8b6f47', textDecoration: 'underline' }
const hint = { fontSize: '12px', color: '#888', margin: '8px 0 0', fontStyle: 'italic' as const }
const hr = { border: 'none', borderTop: '1px solid #e8e4dd', margin: '24px 0' }
const meta = { fontSize: '11px', color: '#999', lineHeight: '1.6', margin: '0' }