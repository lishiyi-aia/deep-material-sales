import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'
import resumeSnapshot from '../data/resumeSnapshot.json'

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  "zh": {
    "title": "Resume 简历",
    "entries": [
      {
        "period": "2021.09–2024.10",
        "place": "马来西亚国立大学（QS130）",
        "role": "本科（工商管理专业）",
        "points": [
          "主修课程：营销管理、经济与商业数学、商业统计、组织行为、国际商务、商务沟通、运营管理"
        ]
      },
      {
        "period": "2023.12–2024.06",
        "place": "Zuspresso (M) Sdn. Bhd.",
        "role": "海外新媒体运营实习生",
        "points": [
          "市场调研与卖点提炼：参与ZUS Coffee新品推广调研，结合目标用户偏好、社媒反馈及竞品内容，提炼产品卖点，为新品推广与渠道触达提供依据。",
          "英文内容与推广执行：协助发布50条Instagram内容，参与选题、拍摄、剪辑及英文文案，将新品卖点融入推广素材。",
          "渠道协同与效果复盘：配合新品线上首发及FamilyMart线下渠道推广，协助整理宣传素材、门店信息与发布排期；按周跟踪传播数据，累计输出15+次内容复盘，调整后续推广内容，协同带动账号粉丝增长1.1w+。"
        ]
      },
      {
        "period": "2024.10–2025.05",
        "place": "北京领知玄华智能科技有限公司",
        "role": "商务助理实习生",
        "points": [
          "高校客户与合作跟进：通过邮件和会议跟进高校及东南亚AI教育产品的合作反馈，记录沟通要点与待办事项，维护客户台账；协助确认需求、试用安排及合作条件，准备产品介绍与合作方案，支持后续商务洽谈。",
          "合作协议与签署支持：参与国内及东南亚合作协议流转，协助业务、财务跟进审批、盖章和归档，配合签署及项目交接；检查中英文合同中的合作主体、服务内容、双方职责与付款安排，整理修改意见并持续跟踪版本确认。",
          "产品演示与试点推进：协助组织高校产品演示、试点及合作会议，提前落实参会人员、演示账号与培训资料；会后整理沟通纪要及后续行动，明确负责人与完成时间，协调产品团队处理使用问题，按周跟进进度，支持合作项目推进。",
          "AI提效与流程沉淀：利用AI辅助梳理客户跟进和商务资料准备中的重复工作，形成SOP、检查清单及常用模板。"
        ]
      },
      {
        "period": "2025.08–至今（2027.02毕业）",
        "place": "悉尼大学(QS28)",
        "role": "硕士（市场营销专业）",
        "points": [
          "主修课程：营销分析、消费者行为、市场研究、客户分析与CRM、B2B营销、新产品营销"
        ]
      },
      {
        "period": "2025.12–2026.02",
        "place": "北京搜狐新媒体信息有限公司",
        "role": "AI产品运营实习生",
        "points": [
          "客户洞察与产品触达：参与线下科技活动宣传准备、产品推广及执行，独立设计部分线上拉新活动；通过整理用户反馈与价格问卷，了解产品需求、付费意愿和价格接受区间，按使用阶段制定触达策略，为产品推广提供用户依据。",
          "AI辅助分析：运用AI搭建轻量级运营看板，跟踪核心指标，识别用户流失节点，支持推广策略优化。",
          "产品价值表达与合作推广：围绕产品功能、应用案例及高频问题，累计制作100+条公众号、小红书与社群内容，将功能转化为用户可理解的场景说明；结合受众画像与互动表现筛选金融、AI垂类博主，协助准备合作推广内容并跟进上线。",
          "获客执行与转化复盘：投放期新增注册较前一周提升50%，首次专题创建率相对提升约15%；参与小红书、公众号、科技活动及社群渠道推广，通过标题、首图和内容A/B测试比较触达效果，按投放效率优化预算及后续推广。"
        ]
      }
    ]
  },
  "en": {
    "title": "Resume 简历",
    "entries": [
      {
        "period": "2021.09–2024.10",
        "place": "Universiti Kebangsaan Malaysia (QS130)",
        "role": "Bachelor of Business Administration",
        "points": [
          "Coursework: Marketing Management, Economics and Business Mathematics, Business Statistics, Organizational Behaviour, International Business, Business Communication and Operations Management."
        ]
      },
      {
        "period": "2023.12–2024.06",
        "place": "Zuspresso (M) Sdn. Bhd.",
        "role": "Overseas Social Media Operations Intern",
        "points": [
          "Market research and messaging: Supported ZUS Coffee launch research, combining audience preferences, social feedback and competitor content to identify selling points for product and channel promotion.",
          "English content and promotion: Contributed to 50 Instagram posts through planning, shooting, editing and English copy, incorporating product messages into promotional assets.",
          "Channel coordination and review: Supported online launches and FamilyMart communication by organizing assets, store information and schedules. Completed 15+ reviews and refined later content; the account gained 11k+ followers through team efforts."
        ]
      },
      {
        "period": "2024.10–2025.05",
        "place": "Beijing Lingzhi Xuanhua Intelligent Technology Co., Ltd.",
        "role": "Business Assistant Intern",
        "points": [
          "Customer follow-up: Tracked university and Southeast Asia AI education partnership feedback by email and meetings, maintained client records and next steps, and supported needs confirmation, trials, product introductions and proposals.",
          "Agreement and signing support: Helped move domestic and Southeast Asia agreements through approval, stamping, filing and handoff. Checked bilingual party details, scope, responsibilities and payment arrangements, then tracked revisions and version confirmation.",
          "Demos and pilot coordination: Helped arrange university demos, pilots and meetings, including accounts and training materials. Recorded actions, owners and deadlines, coordinated product-team responses to usage issues and reviewed progress weekly.",
          "AI-assisted workflows: Used AI to organize recurring client follow-up and document preparation into SOPs, checklists and reusable templates."
        ]
      },
      {
        "period": "2025.08–Present (Graduating Feb 2027)",
        "place": "University of Sydney (QS28)",
        "role": "Master of Marketing",
        "points": [
          "Coursework: Marketing Analytics, Consumer Behaviour, Marketing Research, Customer Analytics and CRM, B2B Marketing and New Product Marketing."
        ]
      },
      {
        "period": "2025.12–2026.02",
        "place": "Beijing Sohu New Media Information Co., Ltd.",
        "role": "AI Product Operations Intern",
        "points": [
          "Customer insight and outreach: Supported promotion at offline technology events and independently designed selected acquisition campaigns. Used feedback and pricing surveys to understand product needs, willingness to pay and price acceptance, informing outreach by usage stage.",
          "AI-assisted analysis: Built a lightweight operations dashboard with AI, monitored core metrics and identified user drop-off to guide promotion changes.",
          "Product communication and creator partnerships: Produced 100+ WeChat, Xiaohongshu and community posts covering features, use cases and common questions. Screened finance and AI creators by audience and engagement, supporting content preparation and launch follow-up.",
          "Acquisition and conversion review: Registrations during promotion increased 50% versus the prior week, and first-topic creation rate rose about 15% relatively. Supported promotion through social channels and technology events, tested titles, covers and content, and adjusted budgets by performance."
        ]
      }
    ]
  }
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
      <div className="profile-summary">
        <h3>{lang === 'zh' ? '综合评价' : 'Professional Profile'}</h3>
        <ul>{(lang === 'zh' ? resumeSnapshot.summary : [
          'Profile: Master of Marketing candidate with AI product operations, university client communication and partnership experience; English is a working language. Targeting B2B and research sales.',
          'Customer communication: Understand needs and use cases, prepare product and partnership materials, and follow up on trial feedback and progress.',
          'Business coordination: Support demos, discussions and agreement workflows; track project milestones with product, business and finance teams.',
          'AI tools: Use AI-assisted dashboards and data analysis; organize recurring follow-up and document work into SOPs, checklists and templates.',
          'Data tools: Excel, SPSS and basic SQL.',
          'Market support: English content, Xiaohongshu, WeChat and Instagram; Canva, Jianying and basic Figma.'
        ]).map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
    </section>
  )
}
