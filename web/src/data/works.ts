export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  zh: {
  "title": "项目经历",
  "closeLabel": "返回",
  "openLabel": "展开作品",
  "hint": "继续下滑",
  "awardsLabel": "项目成果",
  "visitLabel": "查看完整项目",
  "detailPlaceholder": "项目详情",
  "phImageLabel": "项目预览",
  "phButtonLabel": "打开项目",
  "sections": [
    {
      "id": "project-2",
      "no": "01",
      "title": "高校客户合作与试点推进",
      "tagline": "需求确认｜产品演示｜协议跟进｜AI SOP",
      "items": [
        {
          "name": "AI 教育产品客户合作与试点推进",
          "meta": "从需求确认、产品演示到协议跟进与项目交接。",
          "slug": "ai-education-partnership",
          "link": "projects/ai-education-partnership/case_study.html",
          "tags": [
            "客户跟进：维护需求与试用台账，准备产品介绍和合作资料",
            "演示试点：落实账号、培训资料及责任人，跟进使用问题",
            "协议支持：核对合作条款及付款节点，协助审批、签署与交接",
            "AI 与 SOP：整理客户跟进、资料准备清单及常用模板"
          ]
        }
      ]
    },
    {
      "id": "project-1",
      "no": "02",
      "title": "AI 产品需求洞察与渠道获客",
      "tagline": "需求洞察｜价值表达｜渠道触达｜AI 复盘",
      "items": [
        {
          "name": "AI 产品需求洞察与渠道获客",
          "meta": "以用户洞察组织产品表达，连接触达、注册与首次使用。",
          "slug": "ai-news-dashboard",
          "link": "projects/ai-news-dashboard/case_study.html",
          "tags": [
            "需求洞察：价格问卷与用户反馈，判断需求和付费意愿",
            "价值表达：100+产品内容，配合金融、AI博主与科技活动推广",
            "渠道获客：测试标题、首图及内容，依据效果调整预算",
            "复盘与结果：AI看板定位流失；注册较前周+50%、创建率相对+15%"
          ]
        }
      ]
    },
    {
      "id": "project-4",
      "no": "03",
      "title": "新品卖点与渠道推广",
      "tagline": "市场调研｜卖点提炼｜英文内容｜渠道协同",
      "items": [
        {
          "name": "ZUS Coffee 新品卖点与渠道推广",
          "meta": "将用户与竞品调研转成卖点、英文内容及渠道推广。",
          "slug": "zus-everywhere",
          "link": "projects/zus-everywhere/case_study.html",
          "tags": [
            "市场调研：结合目标用户偏好及竞品内容，提炼新品卖点",
            "英文内容：参与50条Instagram发布，支持拍摄、剪辑与文案",
            "渠道协同：配合线上首发及FamilyMart传播，整理素材和排期",
            "推广复盘：完成15+次复盘；账号粉丝增长1.1w+"
          ]
        }
      ]
    }
  ]
,
  countLabel: (n: number) => `${n} 个项目`
},
  en: {
  "title": "Project Experience",
  "closeLabel": "Back",
  "openLabel": "Open case",
  "hint": "Scroll to continue",
  "awardsLabel": "Outcomes",
  "visitLabel": "View full case",
  "detailPlaceholder": "Project details",
  "phImageLabel": "Project preview",
  "phButtonLabel": "Open project",
  "sections": [
    {
      "id": "project-2",
      "no": "01",
      "title": "University Clients & Pilot Follow-up",
      "tagline": "Needs · Demos · Agreements · AI SOPs",
      "items": [
        {
          "name": "AI Education Client Partnerships & Pilot Follow-up",
          "meta": "Connecting needs, product demos, agreement support and handoff.",
          "slug": "ai-education-partnership",
          "link": "projects/ai-education-partnership/case_study.html",
          "tags": [
            "Client follow-up: Maintained needs and trial records and prepared product and partnership materials",
            "Pilot coordination: Organized accounts and training materials; tracked owners and usage issues",
            "Agreement support: Checked terms and payment milestones and supported approvals, signing and handoff",
            "AI SOPs: Organized follow-up and preparation into checklists and reusable templates"
          ]
        }
      ]
    },
    {
      "id": "project-1",
      "no": "02",
      "title": "AI Product Insight & Customer Acquisition",
      "tagline": "Insight · Product Value · Outreach · AI Review",
      "items": [
        {
          "name": "AI Product Insight & Customer Acquisition",
          "meta": "From customer insight and product communication to registration and first use.",
          "slug": "ai-news-dashboard",
          "link": "projects/ai-news-dashboard/case_study.html",
          "tags": [
            "Research: Used pricing surveys and feedback to understand needs and willingness to pay",
            "Product value: Produced 100+ posts and supported finance/AI creator and event promotion",
            "Acquisition: Tested titles, covers and content and adjusted channel budgets by performance",
            "AI review: Identified drop-off; registrations +50% versus prior week, first-topic creation rate +15% relatively"
          ]
        }
      ]
    },
    {
      "id": "project-4",
      "no": "03",
      "title": "Product Messaging & Channel Promotion",
      "tagline": "Research · Selling Points · English Content · Channels",
      "items": [
        {
          "name": "ZUS Coffee Product Messaging & Channel Promotion",
          "meta": "Turning audience and competitor research into messaging, English content and channel support.",
          "slug": "zus-everywhere",
          "link": "projects/zus-everywhere/case_study.html",
          "tags": [
            "Research: Combined audience preferences and competitor content to develop product messages",
            "English content: Contributed to 50 Instagram posts through production, editing and copy",
            "Channel support: Organized materials and schedules for online launches and FamilyMart promotion",
            "Reviews: Completed 15+ reviews; the account gained 11k+ followers"
          ]
        }
      ]
    }
  ]
,
  countLabel: (n: number) => `${n} projects`
},
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/ai-partnership.jpg`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
