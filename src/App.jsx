import { useEffect, useRef } from 'react';
import GlareHover from './components/GlareHover.jsx';
import { useState } from 'react';
import TiltedCard from './components/TiltedCard.jsx';
import TiltedPanel from './components/TiltedPanel.jsx';

const asset = (path) => `assets/${path}`;

const navItems = [
  { label: '工作经历', href: '#about' },
  { label: '能力分类', href: '#capabilities' },
  { label: '精选作品', href: '#work' },
  { label: '个人优势', href: '#strengths' },
];

const stats = [
  { value: '27+', label: 'AIGC视觉作品' },
  { value: '16+', label: '电商视觉项目' },
  { value: '04', label: '核心内容模块' },
  { value: '1500px', label: 'PC端展示版心' },
];

const heroCarouselImages = Array.from({ length: 9 }, (_, index) => ({
  src: asset(`nav-carousel/nav-${String(index + 1).padStart(2, '0')}.jpg`),
  alt: `导航作品 ${index + 1}`,
}));

const projects = [
  {
    title: 'AI Product Key Visual',
    category: 'AIGC视觉',
    image: asset('works/aigc-cosmetic.jpg'),
    description: '以生成式视觉构建产品氛围，适用于美妆、消费品与品牌主视觉。',
  },
  {
    title: 'Coffee Machine Campaign',
    category: 'AIGC视觉',
    image: asset('works/aigc-coffee.jpg'),
    description: '将产品质感、空间光影与商业陈列合成到统一画面中。',
  },
  {
    title: 'Portable Fan Visual',
    category: 'AIGC视觉',
    image: asset('works/aigc-fan.jpg'),
    description: '面向社媒与电商场景的轻科技产品视觉表达。',
  },
  {
    title: 'Qixi Festival Poster',
    category: '节日营销',
    image: asset('works/aigc-qixi.jpg'),
    description: '结合节日情绪、产品露出与视觉叙事的营销海报。',
  },
  {
    title: 'E-commerce KV System',
    category: '电商视觉',
    image: asset('works/ecommerce-kv.jpg'),
    description: '面向大促与商品转化的主视觉系统，强调信息层级与记忆点。',
  },
  {
    title: 'Detail Page Design',
    category: '电商详情页',
    image: asset('works/work-card-04.jpg'),
    description: '从线稿、视觉扩展到详情页落地的整套产品表达。',
  },
];

const featuredWorks = [
  {
    title: '欧莱雅小蜜罐详情视觉',
    category: 'AIGC视觉 / 卖点表达',
    image: asset('works/work-card-01.jpg'),
    description: '',
  },
  {
    title: '信息层级 /线稿表达',
    category: '',
    image: asset('works/work-card-02.jpg'),
    description: '',
  },
  {
    title: '美的电饭煲详情视觉',
    category: 'AIGC视觉 / 卖点表达',
    image: asset('works/work-card-04.jpg'),
    description: '',
  },
  {
    title: '信息层级 /线稿表达',
    category: '',
    image: asset('works/work-card-03.jpg'),
    description: '',
  },
];

const galleryWorks = [
  { title: '净化器场景', meta: '悬浮纯净/呼吸异界', image: asset('gallery/gallery-01.png') },
  { title: '扫地机器人场景', meta: '无尘边界 / 窗纳自然', image: asset('gallery/gallery-02.png') },
  { title: '蒟蒻果冻场景', meta: '清润多汁 / 沁凉爽口', image: asset('gallery/gallery-03.png') },
  { title: '牛乳炖蛋糕场景', meta: '云柔蛋奶/晴空嫩滑', image: asset('gallery/gallery-04.png') },
  { title: '美妆场景', meta: '晶透肽润 / 虫草沁水', image: asset('gallery/gallery-05.png') },
  { title: '手机场景', meta: '超广掌镜 / 仰拍动势', image: asset('gallery/gallery-06.png') },
  { title: '挂脖风扇场景', meta: '雪颈凉涡 / 卧冰扇爽', image: asset('gallery/gallery-07.png') },
  { title: '蓝牙音箱场景', meta: '沙地枯木 / 复古音箱', image: asset('gallery/gallery-08.png') },
  { title: '果冻场景', meta: 'Q弹冰爽 / 冻爽多汁', image: asset('gallery/gallery-09.png') },
];

const ipBrandWorks = [
  { title: 'IP基础设定页', meta: '品牌核心形象 & 世界观设定', image: asset('ip-brand/ip-brand-01.jpg') },
  { title: 'IP人物档案', meta: '角色人设档案 & 情绪表情库', image: asset('ip-brand/ip-brand-02.jpg') },
  { title: 'IP 标准规范', meta: '三视图 & 动态动作设计', image: asset('ip-brand/ip-brand-03.jpg') },
  { title: 'IP形象拓展', meta: '换装 & 多元场景延展', image: asset('ip-brand/ip-brand-04.jpg') },
  { title: 'IP全家福', meta: '全系列衍生&周边集合', image: asset('ip-brand/ip-brand-05.png') },
];

const capabilities = [
  {
    number: '01',
    title: '电商全案视觉',
    text: '首页、详情页、运营KV海报、线下物料，策划到落地，0-1全案搭建',
  },
  {
    number: '02',
    title: 'AIGC视觉创造',
    text: '使用MJ、SD、Nano Banana 2、GPT Image 2等AI工具生成主视觉及系列延展，高效创意产出',
  },
  {
    number: '03',
    title: 'AI视频/动态内容',
    text: '脚本策划 + AI视频生成，脚本→成片全闭环，匹配产品与品牌需求。',
  },
  {
    number: '04',
    title: 'LoRA训练 / AI Skill封装',
    text: 'LoRA模型训练+AI skill 流程优化，提升素材生产与批处理效率。',
  },
];

const strengths = [
  {
    title: '完整项目主导能力',
    label: 'CORE',
    tone: 'dark',
    hoverButtons: ['需求拆解与项目节奏规划', '推进视觉落地', '把控质量与交付'],
  },
  {
    title: '品牌视觉体系搭建',
    label: 'CORE',
    tone: 'dark',
    hoverButtons: ['沉淀识别系统', '延展视觉模板'],
  },
  {
    title: 'AI 设计提效',
    label: 'SYSTEM',
    tone: 'dark',
    hoverButtons: ['AIGC 创意探索', '建立可复用skill', '多版本验证筛选'],
  },
  {
    title: '跨部门协同',
    label: 'SYSTEM',
    tone: 'dark',
    hoverButtons: ['连接产品、运营、品牌方', '推动设计项目落地'],
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回首页">
        <img className="brand-avatar" src={asset('portrait-avatar.jpg')} alt="张连娣头像" width="34" height="34" />
        <span className="brand-name">Zhang Liandi</span>
      </a>
      <nav aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">
        联系我
      </a>
    </header>
  );
}

function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return undefined;
    }

    const sets = carousel.querySelectorAll('.hero-carousel-set');
    if (sets.length < 3) {
      return undefined;
    }

    const desktopQuery = window.matchMedia('(min-width: 761px)');
    const speed = 0.045;
    let cleanupCarousel = () => {};

    const resetSets = () => {
      carousel.scrollLeft = 0;
      sets.forEach((set) => {
        set.style.transform = '';
      });
    };

    const setupDesktopCarousel = () => {
      const [firstSet, secondSet] = sets;
      let trackWidth = 0;
      let rafId = 0;
      let resizeRafId = 0;
      let readyRafId = 0;
      let lastTime = 0;
      let firstX = 0;
      let secondX = 0;

      const applyTransform = () => {
        firstSet.style.transform = `translate3d(${firstX}px, 0, 0)`;
        secondSet.style.transform = `translate3d(${secondX}px, 0, 0)`;
      };

      const measureTrack = (resetPosition = false) => {
        const nextTrackWidth = firstSet.getBoundingClientRect().width;
        if (!nextTrackWidth) {
          return false;
        }

        trackWidth = nextTrackWidth;
        if (resetPosition) {
          firstX = 0;
          secondX = trackWidth;
          applyTransform();
        }

        return true;
      };

      const waitForLayoutReady = (attempt = 0) => {
        if (measureTrack(attempt === 0)) {
          return;
        }

        if (attempt >= 24) {
          return;
        }

        readyRafId = window.requestAnimationFrame(() => {
          waitForLayoutReady(attempt + 1);
        });
      };

      const tick = (time) => {
        if (!lastTime) {
          lastTime = time;
        }

        const delta = Math.min(time - lastTime, 64);
        lastTime = time;

        if (trackWidth) {
          const distance = delta * speed;
          firstX -= distance;
          secondX -= distance;

          if (firstX <= -trackWidth) {
            firstX = secondX + trackWidth;
          }

          if (secondX <= -trackWidth) {
            secondX = firstX + trackWidth;
          }

          applyTransform();
        }

        rafId = window.requestAnimationFrame(tick);
      };

      const handleResize = () => {
        if (resizeRafId) {
          window.cancelAnimationFrame(resizeRafId);
        }

        resizeRafId = window.requestAnimationFrame(() => {
          measureTrack(true);
          lastTime = 0;
        });
      };

      resetSets();
      waitForLayoutReady();
      rafId = window.requestAnimationFrame(tick);
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.cancelAnimationFrame(rafId);
        window.cancelAnimationFrame(resizeRafId);
        window.cancelAnimationFrame(readyRafId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
        resetSets();
      };
    };

    const setupMobileCarousel = () => {
      let loopWidth = 0;
      let rafId = 0;
      let resizeRafId = 0;
      let readyRafId = 0;
      let lastTime = 0;

      const normalizePosition = () => {
        if (!loopWidth) {
          return;
        }

        while (carousel.scrollLeft >= loopWidth * 2) {
          carousel.scrollLeft -= loopWidth;
        }

        while (carousel.scrollLeft < loopWidth) {
          carousel.scrollLeft += loopWidth;
        }
      };

      const measureLoopWidth = (resetPosition = false) => {
        const nextLoopWidth = sets[0].getBoundingClientRect().width;
        if (!nextLoopWidth) {
          return false;
        }

        loopWidth = nextLoopWidth;
        if (resetPosition || carousel.scrollLeft < 1) {
          carousel.scrollLeft = loopWidth;
        }

        normalizePosition();
        return true;
      };

      const waitForLayoutReady = (attempt = 0) => {
        if (measureLoopWidth(attempt === 0)) {
          return;
        }

        if (attempt >= 24) {
          return;
        }

        readyRafId = window.requestAnimationFrame(() => {
          waitForLayoutReady(attempt + 1);
        });
      };

      const tick = (time) => {
        if (!lastTime) {
          lastTime = time;
        }

        const delta = Math.min(time - lastTime, 64);
        lastTime = time;

        if (loopWidth) {
          carousel.scrollLeft += delta * speed;
          normalizePosition();
        }

        rafId = window.requestAnimationFrame(tick);
      };

      const handleResize = () => {
        if (resizeRafId) {
          window.cancelAnimationFrame(resizeRafId);
        }

        resizeRafId = window.requestAnimationFrame(() => {
          measureLoopWidth(true);
          lastTime = 0;
        });
      };

      resetSets();
      waitForLayoutReady();
      rafId = window.requestAnimationFrame(tick);
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.cancelAnimationFrame(rafId);
        window.cancelAnimationFrame(resizeRafId);
        window.cancelAnimationFrame(readyRafId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
        resetSets();
      };
    };

    const setupCarousel = () => {
      cleanupCarousel();
      cleanupCarousel = desktopQuery.matches ? setupDesktopCarousel() : setupMobileCarousel();
    };

    setupCarousel();
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', setupCarousel);
    } else {
      desktopQuery.addListener(setupCarousel);
    }

    return () => {
      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener('change', setupCarousel);
      } else {
        desktopQuery.removeListener(setupCarousel);
      }
      cleanupCarousel();
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <video
        className="hero-video"
        src={asset('hero-video.mp4')}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero-scrim" />
      <div className="container hero-content hero-cover-layout">
        <h1 id="hero-title">
          <span className="hero-name english-display-title">ZHANG LIANDI</span>
          <span className="hero-title-line english-display-title">
            PORTFOLIO
            <em>AI Designer</em>
          </span>
        </h1>
        <div className="hero-sparkles" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="hero-copy">
          AI 视觉创作与 Skill 技术
          <br />
          让视觉内容更快、更准、更有质感
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            查看作品
          </a>
          <a className="secondary-action" href="#contact">
            获取联系信息
          </a>
        </div>
      </div>
      <div className="hero-carousel" aria-label="首屏作品轮播" ref={carouselRef}>
        <div className="hero-carousel-track">
          {[0, 1, 2].map((group) => (
            <div className="hero-carousel-set" aria-hidden={group === 1 ? undefined : 'true'} key={group}>
              {heroCarouselImages.map((image, index) => (
                <a className="hero-carousel-card" draggable="false" href="#work" tabIndex={group === 1 ? undefined : -1} key={`${image.src}-${group}`}>
                  <img
                    draggable="false"
                    src={image.src}
                    alt={image.alt}
                    loading={group === 1 && index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={group === 1 && index === 0 ? 'high' : 'auto'}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const [activeCareerIndex, setActiveCareerIndex] = useState(null);

  const metrics = [
    { value: '6+', label: '设计经验' },
    { value: '30+', label: '项目落地' },
    { value: '500+', label: '单品设计' },
  ];

  const buildingTags = ['IP/品牌视觉', 'AIGC 视觉创造', 'AI短视频', '电商营销视觉'];

  const careerItems = [
    {
      time: '2024-至今',
      title: '北京某信息技术有限公司',
      tags: ['AI 设计师'],
      tagDetail: {
        keywords: '主视觉 / 卖点层级 / 转化',
        output: '平台视觉、文化墙、转化素材',
      },
      hideText: true,
      text: 'AI赋能设计，负责平台主视觉、运营营销图的设计落地。对接品牌方搭建素材库，落地企业文化墙。',
    },
    {
      time: '2019-2024',
      title: '北京某贸易有限公司',
      tags: ['视觉设计师'],
      tagDetail: {
        keywords: 'AI创意发散 / 品牌视觉',
        output: '首页、详情页、KV海报、全链路视觉',
      },
      hideText: true,
      text: '将AI工具应用于创意发散，电商营销素材生成，对接品牌方，把控视觉。负责平台全链路视觉设计落地。',
    },
    {
      time: '2017-2019',
      title: '北京某商贸有限公司',
      tags: ['电商设计师'],
      tagDetail: {
        keywords: '0到1搭建 / 转化提升',
        output: '视觉体系落地、图效优化',
      },
      hideText: true,
      text: '首位店铺设计负责人，从0到1搭建视觉体系，聚焦主图、钻展、车图优化，协同运营团队驱动转化率提升。',
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container experience-layout">
        <div className="experience-heading">
          <div>
            <h2 className="english-display-title">WORK EXPERIENCE</h2>
            <p>个人经历</p>
          </div>
          <span aria-hidden="true">↘</span>
        </div>

        <div className="experience-main">
          <div className="portrait-panel">
            <TiltedCard
              imageSrc={asset('portrait.png')}
              altText="张连娣人物形象"
              captionText="Zhang Liandi / AIGC Designer"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>

          <div className="about-copy">
            <p className="section-kicker">ABOUT ME</p>
            <h2>Hi, I am Zhang Liandi!</h2>
            <p>
              视觉 × AI 技能
              <br />
              电商全品类设计 · LoRA模型训练 / AIGC 视频。从 0 到 1 构建风格，让产品 · 电商 · 内容视觉，更具记忆点与转化力
            </p>

            <div className="profile-table" aria-label="个人信息">
              <div>
                <span>当前身份</span>
                <strong>AIGC设计师</strong>
              </div>
              <div>
                <span>服务方向</span>
                <strong>AIGC视觉 / 电商平面视觉</strong>
              </div>
              <div>
                <span>手机</span>
                <strong>18713010663</strong>
              </div>
              <div>
                <span>邮箱</span>
                <strong>893299894@qq.com</strong>
              </div>
            </div>

            <div className="about-metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="building-block">
              <span>NOW BUILDING</span>
              <div>
                {buildingTags.map((tag) => (
                  <strong key={tag}>{tag}</strong>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="career-block">
          <p>CAREER PATH</p>
          <div className="career-timeline">
            {careerItems.map((item, index) => (
              <article className="career-item" key={item.title}>
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <div>
                  {item.tags.map((tag) => (
                    item.tagDetail ? (
                      <span className={`career-tag-card${activeCareerIndex === index ? ' is-mobile-open' : ''}`} key={tag}>
                        <strong
                          className={`career-tag-trigger${activeCareerIndex === index ? ' is-active' : ''}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={activeCareerIndex === index}
                          onClick={() => setActiveCareerIndex((current) => (current === index ? null : index))}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              setActiveCareerIndex((current) => (current === index ? null : index));
                            }
                          }}
                        >
                          {tag}
                        </strong>
                        <span className="career-tag-popover" aria-hidden={activeCareerIndex === index ? undefined : true}>
                          <span>
                            <em>关键词</em>
                            <b>{item.tagDetail.keywords}</b>
                          </span>
                          <span>
                            <em>产出</em>
                            <b>{item.tagDetail.output}</b>
                          </span>
                        </span>
                      </span>
                    ) : (
                      <strong key={tag}>{tag}</strong>
                    )
                  ))}
                </div>
                {!item.hideText && <p>{item.text}</p>}
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container capabilities-layout">
        <div className="capability-grid" aria-label="能力分类">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="work-heading">
          <div>
            <h2 className="english-display-title">SELECTED WORKS</h2>
            <p>创意视觉</p>
          </div>
          <span aria-hidden="true">↘</span>
        </div>
        <div className="work-bg-word" aria-hidden="true">ZHANG</div>
        <div className="project-grid">
          {featuredWorks.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              <div className="project-info">
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                {project.category && <span>{project.category}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-grid" aria-label="延展作品展示">
          {galleryWorks.map((item) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-image">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              </div>
              <div className="gallery-meta">
                <h3>{item.title}</h3>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotionVideo() {
  return (
    <section className="section motion-section" id="motion">
      <div className="container">
        <div className="motion-heading">
          <div>
            <h2 className="english-display-title">AI Motion Visual</h2>
            <p>AI 动态视觉</p>
          </div>
          <span aria-hidden="true">↘</span>
        </div>
        <p className="motion-summary">
          以产品画面、场景情绪与镜头运动为入口，将静态视觉转化为可播放的 AI 动态内容。
        </p>
        <div className="motion-video-frame">
          <video
            className="motion-video"
            src={asset('videos/motion-visual.mp4')}
            poster={asset('videos/motion-visual-poster.jpg')}
            controls
            preload="metadata"
          >
            当前浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>
  );
}

function IpBrand() {
  return (
    <section className="section ip-brand-section" id="ip-brand">
      <div className="container">
        <div className="ip-brand-heading">
          <div>
            <h2 className="english-display-title">Brand visual identity</h2>
            <p>IP视觉</p>
          </div>
          <span aria-hidden="true">↘</span>
        </div>
        <p className="ip-brand-summary">
          围绕角色设定、表情延展、文创与场景化应用，展示 IP / 品牌的内容方向。
        </p>
        <div className="ip-brand-showcase">
          <article className="ip-brand-video-card" aria-label="IP与品牌视频展示">
            <div className="ip-brand-video-frame">
              <video
                className="ip-brand-video"
                src={asset('videos/ip-brand-motion.mp4')}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                poster={asset('ip-brand/ip-brand-hero.png')}
              />
            </div>
          </article>
          <article className="ip-brand-hero-card" aria-label="IP与品牌主视觉">
            <div className="ip-brand-hero-image">
              <img
                src={asset('ip-brand/ip-brand-hero.png')}
                alt="IP与品牌主视觉"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="ip-brand-meta">
              <h3>IP视觉总览</h3>
              <span>角色集合 / 品牌延展</span>
            </div>
          </article>
        </div>
        <div className="ip-brand-grid" aria-label="IP与品牌展示">
          {ipBrandWorks.map((item) => (
            <article className="ip-brand-card" key={item.title}>
              <div className="ip-brand-image">
                <img src={item.image} alt={item.title} loading="eager" decoding="async" />
              </div>
              <div className="ip-brand-meta">
                <h3>{item.title}</h3>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="container">
        <div className="strength-heading">
          <div>
            <h2 className="english-display-title">CORE STRENGTHS</h2>
            <p>个人优势</p>
          </div>
          <span aria-hidden="true">↘</span>
        </div>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <TiltedPanel captionText={item.title} key={item.title}>
              <article className={`strength-card strength-card-${item.tone} strength-card-index-${index + 1}`}>
                <div className="strength-card-top">
                  <small>{item.label}</small>
                </div>
                <div className="strength-card-copy">
                  <h3>{item.title}<em>•</em></h3>
                  {item.hoverButtons && (
                    <div className="strength-hover-buttons" aria-hidden="true">
                      {item.hoverButtons.map((button) => (
                        <span key={button}>{button}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="strength-visual" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </article>
            </TiltedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const glareProps = {
    glareColor: '#b7ff2a',
    glareOpacity: 0.28,
    glareAngle: -30,
    glareSize: 220,
    transitionDuration: 680,
    playOnce: false,
    className: 'contact-glare',
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-content">
        <div className="contact-layout">
          <div className="contact-hero-copy">
            <p>联系方式</p>
            <h2 className="english-display-title">
              LET&apos;S BUILD
              <br />
              BETTER VISUAL
              <br />
              <span>S</span>YSTEMS <em>↘</em>
            </h2>
            <a className="contact-signature" href="#top" aria-label="返回首页">
              Zhang Liandi
            </a>
          </div>

          <aside className="contact-card" aria-label="联系信息">
            <h3>CONTACT</h3>
            <div className="contact-list">
              <div>
                <span>手机</span>
                <GlareHover {...glareProps}>
                  <a href="tel:18713010663">18713010663</a>
                </GlareHover>
              </div>
              <div>
                <span>微信</span>
                <GlareHover {...glareProps}>
                  <strong>18713010663</strong>
                </GlareHover>
              </div>
              <div>
                <span>邮箱</span>
                <GlareHover {...glareProps}>
                  <a href="mailto:893299894@qq.com">893299894@qq.com</a>
                </GlareHover>
              </div>
            </div>
            <GlareHover {...glareProps} className="contact-glare contact-glare-note">
              <p>Visual, Brand & AI Design</p>
            </GlareHover>
            <div className="contact-qr" aria-label="小红书二维码">
              <img src={asset('xiaohongshu-qr.jpg')} alt="小红书二维码" />
              <span>小红书</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const root = appRef.current;
    if (!root) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('motion-ready');

    if (prefersReducedMotion) {
      root.classList.add('motion-reduced', 'opening-played');
      root.querySelectorAll('.section, .contact-section').forEach((section) => {
        section.classList.add('is-inview');
      });
      return undefined;
    }

    const revealSections = root.querySelectorAll(
      '.about-section, .capabilities-section, .work-section, .gallery-section, .motion-section, .ip-brand-section, .strengths-section, .contact-section',
    );

    revealSections.forEach((section) => {
      section
        .querySelectorAll(
          '.career-item, .capability-card, .project-card, .gallery-card, .ip-brand-card, .strength-grid > *, .contact-card, .contact-signature',
        )
        .forEach((item, index) => {
          item.style.setProperty('--reveal-index', index);
        });
    });

    const openingTimer = window.setTimeout(() => {
      root.classList.add('opening-played');
    }, 120);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    revealSections.forEach((section) => observer.observe(section));

    const parallaxTargets = [...root.querySelectorAll('.project-card img, .gallery-image img, .motion-video, .ip-brand-hero-image img, .ip-brand-image img')];
    const activeParallaxTargets = new Set();
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      activeParallaxTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          return;
        }

        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        target.style.setProperty('--parallax-y', `${Math.max(-1, Math.min(1, progress)) * -18}px`);
      });

      ticking = false;
    };

    const requestParallax = () => {
      if (!activeParallaxTargets.size) {
        return;
      }

      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeParallaxTargets.add(entry.target);
          } else {
            activeParallaxTargets.delete(entry.target);
            entry.target.style.setProperty('--parallax-y', '0px');
          }
        });
        requestParallax();
      },
      {
        threshold: 0,
        rootMargin: '20% 0px 20% 0px',
      },
    );

    parallaxTargets.forEach((target) => parallaxObserver.observe(target));
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);

    return () => {
      window.clearTimeout(openingTimer);
      observer.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener('scroll', requestParallax);
      window.removeEventListener('resize', requestParallax);
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const scrollToHash = () => {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView({ block: 'start' });
    };

    requestAnimationFrame(scrollToHash);
    const settleTimer = window.setTimeout(scrollToHash, 700);

    return () => window.clearTimeout(settleTimer);
  }, []);

  return (
    <>
      <Header />
      <main ref={appRef}>
        <Hero />
        <About />
        <Capabilities />
        <Work />
        <Gallery />
        <MotionVideo />
        <IpBrand />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}
