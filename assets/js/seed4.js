// 种子语料 4：5 个高频话题 × 6 问题 × 2 长句 = 60 句
// tier: A = 母语者原句（未改动） / B = 有真实出处，为口语化或凑足长度做了轻微改编 / C = AI 仿写（非真实出处，仅结构练习）
// 绝大多数句子经 IMDb Quotes / Wikiquote / American Rhetoric / 演讲原文 / Goodreads 等来源查证
window.SEED4 = {
  version: 1,
  topics: [
    {
      id: "t_holiday",
      name: "节日与庆祝",
      nameEn: "Holidays & celebrations",
      questions: [
        {
          id: "t_holiday_q1",
          text: "What is your favourite holiday, and how do you usually celebrate it?",
          sentences: [
            {
              id: "t_holiday_q1_s1",
              tier: "B",
              en: "The best way to spread Christmas cheer is singing loud for all to hear, so the music goes on the first of December.",
              zh: "传播节日气氛最好的办法就是放声唱给所有人听，所以十二月一号我就把音乐打开。",
              chunks: ["spread Christmas cheer 传播节日气氛", "singing loud for all to hear 放声唱给所有人听", "the first of December 十二月一号"],
              source: "电影《精灵总动员》Elf (2003)｜改编：原句 The best way to spread Christmas cheer is singing loud for all to hear，后接 so 从句补全"
            },
            {
              id: "t_holiday_q1_s2",
              tier: "A",
              en: "The more you praise and celebrate your life, the more there is in life to celebrate.",
              zh: "你越是赞美和庆祝自己的生活，生活里值得庆祝的事就越多。",
              chunks: ["the more ... the more ... 越……越……", "praise and celebrate your life 赞美并庆祝自己的生活", "there is in life to celebrate 生活里值得庆祝的东西"],
              source: "Oprah Winfrey｜原句（BrainyQuote 收录）"
            }
          ]
        },
        {
          id: "t_holiday_q2",
          text: "Do you prefer a big family gathering or a quiet holiday at home?",
          sentences: [
            {
              id: "t_holiday_q2_s1",
              tier: "B",
              en: "Christmas is the time to be with the people you love, so I will take a noisy crowded house over a quiet one any day.",
              zh: "节日就是该和你爱的人待在一起，所以再吵再挤的房子，我也比一个人清静强。",
              chunks: ["the time to be with ... 和……在一起的时候", "the people you love 你爱的人", "take A over B 宁要 A 也不要 B", "any day 无论如何都"],
              source: "电影《真爱至上》Love Actually (2003)｜改编：原句 I realized that Christmas is the time to be with the people you love，后半句补全"
            },
            {
              id: "t_holiday_q2_s2",
              tier: "B",
              en: "I will honour Christmas in my heart and try to keep it all the year, and I honestly do not need a big party to do that.",
              zh: "我把这个节日放在心里，并试着把它留一整年，说真的，我不需要一场大派对才能做到。",
              chunks: ["honour Christmas in my heart 把节日放在心里", "keep it all the year 把它保留一整年", "do not need a big party 不需要大派对"],
              source: "Charles Dickens《A Christmas Carol》(1843)｜改编：原句 I will honour Christmas in my heart, and try to keep it all the year，后接补全从句"
            }
          ]
        },
        {
          id: "t_holiday_q3",
          text: "Do holidays leave you feeling relaxed, or more stressed than usual?",
          sentences: [
            {
              id: "t_holiday_q3_s1",
              tier: "B",
              en: "I do not know what to say about this year, except it is Christmas and we are all in misery.",
              zh: "今年我真不知道说什么好，只知道：过节呢，全家一块受罪。",
              chunks: ["I do not know what to say 我不知道说什么好", "except ... 除了……之外", "we are all in misery 我们全都在受罪"],
              source: "电影《疯狂圣诞假期》National Lampoon's Christmas Vacation (1989)｜改编：加入 about this year，原句为 Ellen Griswold 台词"
            },
            {
              id: "t_holiday_q3_s2",
              tier: "A",
              en: "I think there must be something wrong with me, Linus. Christmas is coming, but I am not happy. I do not feel the way I am supposed to feel.",
              zh: "我觉得我肯定哪儿不对劲，莱纳斯。节日要到了，可我一点都不开心——我没有那种「应该有的」感觉。",
              chunks: ["there must be something wrong with me 我肯定哪儿不对劲", "Christmas is coming 节日要到了", "the way I am supposed to feel 我应该有的那种感觉"],
              source: "动画片《查理·布朗的圣诞节》A Charlie Brown Christmas (1965)｜原句（IMDb / Wikiquote）"
            }
          ]
        },
        {
          id: "t_holiday_q4",
          text: "Do you think holidays have become too commercial?",
          sentences: [
            {
              id: "t_holiday_q4_s1",
              tier: "A",
              en: "Maybe Christmas doesn't come from a store. Maybe Christmas, perhaps, means a little bit more.",
              zh: "也许节日不是从商店里买来的。也许，它大概，意味着再多一点的东西。",
              chunks: ["come from a store 从商店里买来的", "maybe ... perhaps 也许……大概", "mean a little bit more 意味着再多一点"],
              source: "Dr. Seuss《How the Grinch Stole Christmas!》(1957)｜原句（1966 动画版同样出现）"
            },
            {
              id: "t_holiday_q4_s2",
              tier: "C",
              en: "I have stopped trying to buy the perfect gift, because the price tag never says the thing I actually want to say.",
              zh: "我已经不追求买到「完美的礼物」了，因为价签上永远不会写着我真正想说的那句话。",
              chunks: ["buy the perfect gift 买到完美的礼物", "price tag 价签", "the thing I actually want to say 我真正想说的那句话"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_holiday_q5",
          text: "Is there a holiday memory from childhood that you still think about?",
          sentences: [
            {
              id: "t_holiday_q5_s1",
              tier: "B",
              en: "This is Christmas, the season of perpetual hope — and I do not care if I have to get out on your runway and hitchhike!",
              zh: "这是圣诞节，是永远给人希望的时节——哪怕我得跑到你的跑道上搭顺风车，我也不在乎！",
              chunks: ["the season of perpetual hope 永远给人希望的时节", "I do not care if ... 哪怕……我也不在乎", "get out on your runway 跑到跑道上去", "hitchhike 搭顺风车"],
              source: "电影《小鬼当家》Home Alone (1990)｜改编：合并 Kate McCallister 原句两段（IMDb）"
            },
            {
              id: "t_holiday_q5_s2",
              tier: "C",
              en: "When I was a kid the magic was in the presents; now I realise it was just everyone being in the same room at the same time.",
              zh: "小时候我觉得魔力在礼物里；现在我明白了，魔力只是所有人在同一时间待在同一个屋子里。",
              chunks: ["the magic was in the presents 魔力在礼物里", "I realise ... 我意识到……", "everyone being in the same room 所有人待在同一个屋子里", "at the same time 同时"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_holiday_q6",
          text: "What does a holiday really mean to you?",
          sentences: [
            {
              id: "t_holiday_q6_s1",
              tier: "B",
              en: "Strange, isn't it? Each man's life touches so many other lives, and when he isn't around, he leaves an awful hole.",
              zh: "很奇妙吧？每个人的一生都会牵动那么多别人的人生，而他不在的时候，就会留下一个可怕的空洞。",
              chunks: ["Strange, isn't it? 很奇妙吧", "each man's life touches ... 每个人的一生牵动着……", "when he isn't around 他不在的时候", "leave an awful hole 留下一个可怕的空洞"],
              source: "电影《生活多美好》It's a Wonderful Life (1946)｜改编：合并 Clarence 原句两处（IMDb / Quotes.net）"
            },
            {
              id: "t_holiday_q6_s2",
              tier: "A",
              en: "Reflect upon your present blessings, of which every man has many — not on your past misfortunes, of which all men have some.",
              zh: "多想想你现在拥有的恩赐——每个人都有很多——少想过去的不幸——谁都有一点。",
              chunks: ["reflect upon 反复思量", "present blessings 现在拥有的恩赐", "past misfortunes 过去的不幸", "of which all men have some 谁都有一点"],
              source: "Charles Dickens｜原句（Wikiquote 收录）"
            }
          ]
        }
      ]
    },
    {
      id: "t_social",
      name: "社交媒体与信息",
      nameEn: "Social media & news",
      questions: [
        {
          id: "t_social_q1",
          text: "How do you usually get your news these days?",
          sentences: [
            {
              id: "t_social_q1_s1",
              tier: "B",
              en: "We are drowning in information while starving for wisdom, so I have stopped chasing every headline that flies past me.",
              zh: "我们淹没在信息里，却渴死在智慧上，所以我不再追着每一条从眼前飘过的头条跑。",
              chunks: ["drown in information 淹没在信息里", "starve for wisdom 渴求智慧而不得", "chase every headline 追着每条头条跑", "fly past me 从我眼前飘过"],
              source: "E. O. Wilson｜改编：原句 We are drowning in information, while starving for wisdom，后接 so 从句补全（Wikiquote）"
            },
            {
              id: "t_social_q1_s2",
              tier: "B",
              en: "The press was to serve the governed, not the governors — that is the test I use when I pick what to read.",
              zh: "媒体要服务的是被治理的人，而不是治理者——这就是我挑东西看时用的一把尺子。",
              chunks: ["serve the governed 服务被治理的人", "not the governors 而不是治理者", "the test I use 我用的一把尺子", "pick what to read 挑读什么"],
              source: "电影《华盛顿邮报》The Post (2017)｜改编：原句出自片中引述的判决书意见，后接补全从句（IMDb）"
            }
          ]
        },
        {
          id: "t_social_q2",
          text: "Do you trust what you read on social media?",
          sentences: [
            {
              id: "t_social_q2_s1",
              tier: "B",
              en: "Everyone is entitled to their own opinion, but not their own facts — and that is what I tell myself before I share anything.",
              zh: "人人都可以有自己的看法，但不能有自己的事实——这是我在转发任何东西之前都会提醒自己的话。",
              chunks: ["be entitled to 有权拥有", "their own opinion 他们自己的看法", "their own facts 他们自己的事实", "before I share anything 在我转发任何东西之前"],
              source: "Daniel Patrick Moynihan｜改编：原句 Everyone is entitled to his own opinion, but not his own facts，改为 their 并补全后半句（Wikiquote）"
            },
            {
              id: "t_social_q2_s2",
              tier: "B",
              en: "On the internet, nobody knows you are a dog, so I always check who is actually behind a post.",
              zh: "在网上没人知道你是一条狗，所以我总会先看看一条帖子背后到底是谁。",
              chunks: ["nobody knows you are a dog 没人知道你是一条狗", "behind a post 一条帖子背后", "check who is ... 先确认是谁"],
              source: "Peter Steiner 漫画《On the Internet, nobody knows you are a dog》(The New Yorker, 1993)｜改编：原句为漫画对白，后接 so 从句补全"
            }
          ]
        },
        {
          id: "t_social_q3",
          text: "Does social media bring people closer together or pull them apart?",
          sentences: [
            {
              id: "t_social_q3_s1",
              tier: "B",
              en: "We expect more from technology and less from each other, and I think that is exactly what is making us lonely.",
              zh: "我们对技术的期待越来越多，对彼此的期待越来越少，而我觉得，这正是让我们孤独的原因。",
              chunks: ["expect more from technology 对技术期待更多", "less from each other 对彼此期待更少", "that is exactly what ... 这正是……的东西", "make us lonely 让我们孤独"],
              source: "Sherry Turkle《Alone Together》(2011)｜改编：原句为副标题 Why we expect more from technology and less from each other，改为陈述句并补全"
            },
            {
              id: "t_social_q3_s2",
              tier: "B",
              en: "The short-term, dopamine-driven feedback loops that we have created are destroying how society works: no civil discourse, no cooperation, just misinformation.",
              zh: "我们亲手造出来的这种短期的、靠多巴胺驱动的反馈循环，正在毁掉社会运转的方式：没有理性的对话，没有合作，只剩错误信息。",
              chunks: ["short-term feedback loops 短期反馈循环", "dopamine-driven 由多巴胺驱动的", "destroy how society works 毁掉社会运转的方式", "civil discourse 理性的公共对话", "misinformation 错误信息"],
              source: "Chamath Palihapitiya 斯坦福商学院讲座 (2017)｜改编：原句末为 misinformation, mistruth，改为 just misinformation"
            }
          ]
        },
        {
          id: "t_social_q4",
          text: "Have you ever taken a break from social media?",
          sentences: [
            {
              id: "t_social_q4_s1",
              tier: "B",
              en: "There are only two industries that call their customers 'users': illegal drugs and software, and that is honestly why I log off.",
              zh: "只有两个行业会把自己的顾客叫「用户」：违禁药品和软件，说真的，这就是我偶尔退出登录的原因。",
              chunks: ["call their customers users 把顾客叫作用户", "illegal drugs 违禁药品", "and that is why ... 这就是我……的原因", "log off 退出登录、下线"],
              source: "Edward Tufte｜改编：原句 There are only two industries that call their customers 'users': illegal drugs and software，后接补全从句"
            },
            {
              id: "t_social_q4_s2",
              tier: "C",
              en: "Every time I delete the apps for a week, I notice I reach for my phone out of boredom, not out of curiosity.",
              zh: "每次我把那些 app 删掉一周，我就会发现：我伸手去拿手机是出于无聊，而不是出于好奇。",
              chunks: ["delete the apps 把 app 删掉", "for a week 一周", "reach for my phone 伸手去拿手机", "out of boredom 出于无聊", "out of curiosity 出于好奇"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_social_q5",
          text: "Is social media harmful to young people?",
          sentences: [
            {
              id: "t_social_q5_s1",
              tier: "A",
              en: "We lived on farms, then we lived in cities, and now we are going to live on the internet!",
              zh: "我们曾经住在农场上，后来住在城市里，而现在我们要住进互联网里！",
              chunks: ["live on farms 住在农场上", "live in cities 住在城市里", "live on the internet 生活、住在互联网上"],
              source: "电影《社交网络》The Social Network (2010)｜原句（IMDb），Sean Parker 台词"
            },
            {
              id: "t_social_q5_s2",
              tier: "B",
              en: "Could I interest you in everything, all of the time? That is the promise, and kids have no defence against it.",
              zh: "能不能让我用「一切」来吸引你，而且一刻不停？这就是它的承诺，而孩子对此毫无招架之力。",
              chunks: ["interest you in everything 用一切来吸引你", "all of the time 一刻不停地", "that is the promise 这就是它的承诺", "have no defence against 对……毫无招架之力"],
              source: "Bo Burnham《Welcome to the Internet》(INSIDE, 2021)｜改编：合并两句歌词并补全（AZLyrics）"
            }
          ]
        },
        {
          id: "t_social_q6",
          text: "Do you think the news has become too negative?",
          sentences: [
            {
              id: "t_social_q6_s1",
              tier: "B",
              en: "The news business runs on one old rule — if it bleeds, it leads — so of course my feed looks depressing.",
              zh: "新闻这行当靠一条老规矩活着——见血就上头条——所以我的信息流当然看起来很丧。",
              chunks: ["run on a rule 靠一条规矩运转", "if it bleeds, it leads 见血就上头条", "my feed 我的信息流", "look depressing 看起来很丧"],
              source: "英语新闻业行话 If it bleeds, it leads（20 世纪小报传统）｜改编：加前后语境使其成为完整句"
            },
            {
              id: "t_social_q6_s2",
              tier: "C",
              en: "I do not think the world is getting worse; I think we just carry a camera and a megaphone everywhere we go now.",
              zh: "我不觉得世界变得更糟了；我觉得只是我们走到哪儿都带着一台摄像机和一个大喇叭。",
              chunks: ["the world is getting worse 世界在变得更糟", "I think we just ... 我觉得我们只是……", "carry a camera 带着一台摄像机", "a megaphone 一个大喇叭", "everywhere we go 我们走到哪儿"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_env",
      name: "环境与自然",
      nameEn: "Environment & nature",
      questions: [
        {
          id: "t_env_q1",
          text: "How worried are you about climate change?",
          sentences: [
            {
              id: "t_env_q1_s1",
              tier: "B",
              en: "We will not have a society if we destroy the environment, and I think we forget that almost every single day.",
              zh: "如果我们把环境毁了，社会也就不复存在了，而我觉得我们几乎每天都忘了这一点。",
              chunks: ["will not have a society 就不会再有社会", "destroy the environment 毁掉环境", "forget that 忘了这一点", "almost every single day 几乎每一天"],
              source: "Margaret Mead｜改编：原句 We won't have a society if we destroy the environment，后接补全从句"
            },
            {
              id: "t_env_q1_s2",
              tier: "B",
              en: "How dare you — you have stolen my dreams and my childhood with your empty words, and I am supposed to stay calm.",
              zh: "你们怎么敢——你们用空洞的言辞偷走了我的梦想和童年，而我还要保持冷静。",
              chunks: ["How dare you 你们怎么敢", "steal my dreams and my childhood 偷走我的梦想和童年", "empty words 空洞的言辞", "I am supposed to stay calm 我还得保持冷静"],
              source: "Greta Thunberg 联合国气候行动峰会演讲 (2019)｜改编：合并 How dare you 与原句，后接补全（NPR 全文）"
            }
          ]
        },
        {
          id: "t_env_q2",
          text: "What can ordinary people actually do to help?",
          sentences: [
            {
              id: "t_env_q2_s1",
              tier: "A",
              en: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
              zh: "你做的每件事都有影响，而你得决定的是：你想带来哪一种影响。",
              chunks: ["what you do makes a difference 你做的事是有影响的", "make a difference 带来改变", "decide what kind of ... 决定是哪一种……", "want to make 想带来的"],
              source: "Jane Goodall｜原句（Jane Goodall Institute 官网收录）"
            },
            {
              id: "t_env_q2_s2",
              tier: "A",
              en: "In the end we will conserve only what we love; we will love only what we understand; and we will understand only what we are taught.",
              zh: "到头来，我们只会保护自己所爱的，只会爱自己所理解的，而只会理解别人教给我们的东西。",
              chunks: ["in the end 到头来", "conserve only what we love 只保护我们所爱的", "love only what we understand 只爱我们所理解的", "understand only what we are taught 只理解被教给我们的"],
              source: "Baba Dioum 新德里演讲 (1968)｜原句"
            }
          ]
        },
        {
          id: "t_env_q3",
          text: "Do you enjoy spending time in nature?",
          sentences: [
            {
              id: "t_env_q3_s1",
              tier: "B",
              en: "In every walk with nature one receives far more than he seeks, and that is why I go out even when I am tired.",
              zh: "每一次走进自然，你得到的都远多于你想找的，所以就算累了我也还是要出门走走。",
              chunks: ["every walk with nature 每一次走进自然", "receive far more than he seeks 得到的远多于所求", "that is why I ... 这就是我……的原因", "even when I am tired 就算我累了"],
              source: "John Muir｜改编：原句 In every walk with nature one receives far more than he seeks，后接补全从句"
            },
            {
              id: "t_env_q3_s2",
              tier: "A",
              en: "The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere where they can be quiet, alone with the heavens, nature and God.",
              zh: "对害怕、孤独或者不开心的人来说，最好的药方就是走到户外，去一个能安静下来的地方，独自和天空、自然、还有造物主待在一起。",
              chunks: ["the best remedy for ... 对……最好的药方", "those who are afraid, lonely or unhappy 害怕、孤独或不开心的人", "go outside 走到户外", "somewhere where they can be quiet 一个能安静下来的地方"],
              source: "Anne Frank《安妮日记》(1947)｜原句"
            }
          ]
        },
        {
          id: "t_env_q4",
          text: "Is it already too late to fix the problem?",
          sentences: [
            {
              id: "t_env_q4_s1",
              tier: "B",
              en: "We do not inherit the earth from our ancestors; we borrow it from our children, so 'too late' is not an answer I accept.",
              zh: "我们不是从祖先那里继承地球，而是向子孙借来的，所以「太晚了」不是我能接受的答案。",
              chunks: ["inherit the earth from our ancestors 从祖先那里继承地球", "borrow it from our children 向子孙借来的", "too late is not an answer 太晚了不是个答案", "I accept 我能接受的"],
              source: "英语谚语（常称美洲原住民谚语，实际出处存疑，见 Quote Investigator）｜改编：后接补全从句"
            },
            {
              id: "t_env_q4_s2",
              tier: "B",
              en: "No one will protect what they do not care about, and no one will care about what they have never experienced — so I take people outdoors.",
              zh: "没人会保护自己不在乎的东西，而没人会去在乎自己从未体验过的东西——所以我带人去户外。",
              chunks: ["protect what they do not care about 保护自己不在乎的东西", "care about 在乎", "have never experienced 从未体验过", "take people outdoors 带人去户外"],
              source: "David Attenborough｜改编：原句 No one will protect what they don't care about, and no one will care about what they have never experienced，后接补全从句"
            }
          ]
        },
        {
          id: "t_env_q5",
          text: "Whose job is it to fix this — governments, companies, or ordinary people?",
          sentences: [
            {
              id: "t_env_q5_s1",
              tier: "A",
              en: "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share.",
              zh: "环境是我们所有人相遇的地方，是我们都有共同利益的地方，它是我们唯一共享的东西。",
              chunks: ["where we all meet 我们所有人相遇的地方", "a mutual interest 共同的利益", "the one thing all of us share 我们唯一共享的东西"],
              source: "Lady Bird Johnson｜原句（ladybirdjohnson.org 官方引语页）"
            },
            {
              id: "t_env_q5_s2",
              tier: "B",
              en: "The earth is what we all have in common, so I do not buy the idea that only governments have to act.",
              zh: "地球是我们唯一的共同点，所以「只有政府才需要行动」这种说法我并不买账。",
              chunks: ["what we all have in common 我们唯一的共同点", "I do not buy the idea 我不买账这种说法", "only governments have to act 只有政府才需要行动"],
              source: "Wendell Berry《The Unsettling of America》(1977)｜改编：原句 The earth is what we all have in common，后接补全从句"
            }
          ]
        },
        {
          id: "t_env_q6",
          text: "Have you changed any daily habits for environmental reasons?",
          sentences: [
            {
              id: "t_env_q6_s1",
              tier: "A",
              en: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
              zh: "我们越能把注意力放在身边这个世界的奇妙与真实上，就越不会对破坏产生兴趣。",
              chunks: ["focus our attention on 把注意力放在……上", "the wonders and realities of the universe 这个世界的奇妙与真实", "about us 我们身边的", "have less taste for destruction 对破坏更没有兴趣"],
              source: "Rachel Carson《Silent Spring》(1962)｜原句（Wikiquote 收录）"
            },
            {
              id: "t_env_q6_s2",
              tier: "C",
              en: "I am not going to pretend I am perfect — I just stopped buying things I will throw away within a year, and that alone felt huge.",
              zh: "我不会假装自己做得完美——我只是不再买那些一年内就会扔掉的东西，光这一点就已经很了不起了。",
              chunks: ["I am not going to pretend 我不会假装", "stop buying things 不再买东西", "throw away 扔掉", "within a year 一年之内", "that alone felt huge 光这一点就很了不起"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_fail",
      name: "失败与挫折",
      nameEn: "Failure & setbacks",
      questions: [
        {
          id: "t_fail_q1",
          text: "How do you usually deal with failure?",
          sentences: [
            {
              id: "t_fail_q1_s1",
              tier: "B",
              en: "It ain't about how hard you hit; it is about how hard you can get hit and keep moving forward — that is how winning is done.",
              zh: "重点不是你能打得多狠，而是你能扛住多狠的打击还继续往前走——赢，就是这么赢的。",
              chunks: ["it ain't about ... 重点不是……", "how hard you hit 你打得多狠", "get hit 挨打", "keep moving forward 继续往前走", "that is how winning is done 赢就是这么赢的"],
              source: "电影《洛奇6：永远的拳王》Rocky Balboa (2006)｜改编：合并原句数段（IMDb / Wikiquote）"
            },
            {
              id: "t_fail_q1_s2",
              tier: "B",
              en: "You may encounter many defeats, but you must not be defeated — the defeats are how you find out who you are.",
              zh: "你可能会遭遇很多次失败，但你不能被打败——正是那些失败让你弄清楚自己是谁。",
              chunks: ["encounter many defeats 遭遇很多次失败", "must not be defeated 不能被打败", "find out who you are 弄清楚自己是谁"],
              source: "Maya Angelou｜改编：原句 You may encounter many defeats, but you must not be defeated，后接补全从句（Quote Investigator 考据）"
            }
          ]
        },
        {
          id: "t_fail_q2",
          text: "Can you tell me about a time you failed badly?",
          sentences: [
            {
              id: "t_fail_q2_s1",
              tier: "A",
              en: "I didn't see it then, but it turned out that getting fired from Apple was the best thing that could have ever happened to me.",
              zh: "当时我看不出来，但后来才发现，被苹果开除这件事是我这辈子遇到的最好的事。",
              chunks: ["I didn't see it then 当时我看不出来", "it turned out that 后来发现……", "get fired from Apple 被苹果开除", "the best thing that could have ever happened to me 我遇到的最好的事"],
              source: "Steve Jobs 斯坦福毕业演讲 (2005)｜原句（American Rhetoric / Stanford News 全文）"
            },
            {
              id: "t_fail_q2_s2",
              tier: "B",
              en: "I have missed more than 9,000 shots and lost almost 300 games in my career, and that is exactly why I succeed.",
              zh: "我职业生涯投丢了九千多个球，输掉了快三百场比赛，而这正是我成功的原因。",
              chunks: ["miss more than 9,000 shots 投丢九千多个球", "lose almost 300 games 输掉快三百场", "in my career 在我的职业生涯里", "that is exactly why I succeed 这正是我成功的原因"],
              source: "Michael Jordan（Nike 广告及公开发言）｜改编：原句更长（含 26 次绝杀失手等细节），截取核心部分"
            }
          ]
        },
        {
          id: "t_fail_q3",
          text: "Has failure ever taught you something important?",
          sentences: [
            {
              id: "t_fail_q3_s1",
              tier: "B",
              en: "Failure meant a stripping away of the inessential, and I stopped pretending to myself that I was anything other than what I was.",
              zh: "失败意味着把那些不重要的东西一层层剥掉，我也不再对自己假装自己是别的什么人。",
              chunks: ["a stripping away of 把……一层层剥掉", "the inessential 那些不重要的东西", "stop pretending to myself 不再对自己假装", "anything other than what I was 别的什么人"],
              source: "J.K. Rowling 哈佛毕业演讲 (2008)｜改编：原为两句，合并为一句（Harvard Gazette 全文）"
            },
            {
              id: "t_fail_q3_s2",
              tier: "A",
              en: "It is fine to celebrate success, but it is more important to heed the lessons of failure.",
              zh: "庆祝成功当然没问题，但更重要的是听进去失败教给你的东西。",
              chunks: ["It is fine to ... 做……没问题", "celebrate success 庆祝成功", "it is more important to 更重要的是", "heed the lessons of failure 听进去失败的教训"],
              source: "Bill Gates｜原句（BrainyQuote 收录）"
            }
          ]
        },
        {
          id: "t_fail_q4",
          text: "Do you think failure is necessary for success?",
          sentences: [
            {
              id: "t_fail_q4_s1",
              tier: "B",
              en: "Ever tried, ever failed — no matter. Try again, fail again, and fail a little better every single time.",
              zh: "试过，失败过——没关系。再试，再失败，每一次都败得比上一次好一点。",
              chunks: ["ever tried, ever failed 试过，也失败过", "no matter 没关系", "try again 再试一次", "fail a little better 败得更好一点", "every single time 每一次"],
              source: "Samuel Beckett《Worstward Ho》(1983)｜改编：原句 Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.，改为连贯句并补全"
            },
            {
              id: "t_fail_q4_s2",
              tier: "A",
              en: "Failure is an option here. If things are not failing, you are not innovating enough.",
              zh: "在这里，失败是一个选项。如果什么都没在失败，说明你还不够创新。",
              chunks: ["failure is an option 失败是一个选项", "if things are not failing 如果什么都没在失败", "innovate enough 足够创新"],
              source: "Elon Musk｜原句（多家媒体访谈引述）"
            }
          ]
        },
        {
          id: "t_fail_q5",
          text: "How do you get back on your feet after a setback?",
          sentences: [
            {
              id: "t_fail_q5_s1",
              tier: "A",
              en: "You may have a fresh start any moment you choose, for this thing we call 'failure' is not the falling down, but the staying down.",
              zh: "你随时可以选择重新开始，因为我们称作「失败」的这个东西，不是摔倒，而是赖在地上不起来。",
              chunks: ["have a fresh start 重新开始", "any moment you choose 你选择的任何时候", "this thing we call failure 我们称作失败的东西", "the falling down 摔倒", "the staying down 赖着不起来"],
              source: "Mary Pickford｜原句（BrainyQuote / AZQuotes 收录）"
            },
            {
              id: "t_fail_q5_s2",
              tier: "B",
              en: "When you fall throughout life — and maybe even tonight after a few too many glasses of champagne — fall forward.",
              zh: "当你在人生中摔倒的时候——也许就在今晚，多喝了几杯香槟之后——往前摔。",
              chunks: ["fall throughout life 在人生中摔倒", "a few too many glasses of champagne 多喝了几杯香槟", "fall forward 往前摔"],
              source: "Denzel Washington 宾夕法尼亚大学毕业演讲 (2011)｜改编：删去原句开头的 And（Penn Almanac 全文）"
            }
          ]
        },
        {
          id: "t_fail_q6",
          text: "Are you afraid of failing?",
          sentences: [
            {
              id: "t_fail_q6_s1",
              tier: "B",
              en: "Only those who dare to fail greatly can ever achieve greatly, so I would rather risk it than play it safe.",
              zh: "只有敢冒大失败的人，才可能成就大事，所以我宁可冒险，也不愿求稳。",
              chunks: ["dare to fail greatly 敢冒大的失败", "achieve greatly 成就大事", "I would rather ... than ... 我宁可……也不愿……", "play it safe 求稳"],
              source: "Robert F. Kennedy 开普敦大学 Day of Affirmation 演讲 (1966)｜改编：原句 Only those who dare to fail greatly can ever achieve greatly，后接补全从句"
            },
            {
              id: "t_fail_q6_s2",
              tier: "B",
              en: "I have not failed — I have just found 10,000 ways that won't work yet, and I am still counting.",
              zh: "我没有失败——我只是找到了一万种暂时行不通的办法，而且我还在继续数。",
              chunks: ["I have not failed 我没有失败", "find 10,000 ways 找到一万种办法", "won't work yet 暂时行不通", "I am still counting 我还在继续数"],
              source: "Thomas Edison｜改编：流传版本 I have not failed. I've just found 10,000 ways that won't work. 实为改写（Quote Investigator 考据），此处补全为完整句"
            }
          ]
        }
      ]
    },
    {
      id: "t_goal",
      name: "目标与未来",
      nameEn: "Goals & the future",
      questions: [
        {
          id: "t_goal_q1",
          text: "What is a goal you are working towards right now?",
          sentences: [
            {
              id: "t_goal_q1_s1",
              tier: "B",
              en: "You can't connect the dots looking forward; you can only connect them looking backwards, so I just keep trusting the process.",
              zh: "你没法向前看时把这些点连起来，只能回头看时才能连上，所以我只是一直相信这个过程。",
              chunks: ["connect the dots 把点点连起来", "looking forward 向前看", "looking backwards 回头看", "trust the process 相信这个过程"],
              source: "Steve Jobs 斯坦福毕业演讲 (2005)｜改编：原句 You can't connect the dots looking forward; you can only connect them looking backwards，后接补全从句"
            },
            {
              id: "t_goal_q1_s2",
              tier: "B",
              en: "Do or do not, there is no try — so I have stopped saying 'I will try' about the things I actually want.",
              zh: "做，或者不做，没有「试试看」这回事——所以我不再对我真正想要的东西说「我试试」。",
              chunks: ["do or do not 做或者不做", "there is no try 没有试试看这回事", "stop saying ... 不再说……", "the things I actually want 我真正想要的东西"],
              source: "电影《星球大战：帝国反击战》The Empire Strikes Back (1980)｜改编：原句 Do. Or do not. There is no try.，改为连贯句并补全"
            }
          ]
        },
        {
          id: "t_goal_q2",
          text: "Do you plan far ahead, or do you take life as it comes?",
          sentences: [
            {
              id: "t_goal_q2_s1",
              tier: "B",
              en: "The best way to predict the future is to invent it, so I would rather build something than sit around and wait.",
              zh: "预测未来最好的办法就是把它造出来，所以我宁可动手做点什么，也不愿坐着干等。",
              chunks: ["predict the future 预测未来", "invent it 把它造出来", "I would rather ... than ... 我宁可……也不愿……", "sit around and wait 坐着干等"],
              source: "Alan Kay (1971, Xerox PARC)｜改编：原句 The best way to predict the future is to invent it，后接补全从句（Quote Investigator 考据）"
            },
            {
              id: "t_goal_q2_s2",
              tier: "B",
              en: "The future is not some place we are going to, but one we are creating — the paths are not found, they are made.",
              zh: "未来不是一个我们要去的地方，而是一个我们正在创造的地方——路不是被找到的，是被走出来的。",
              chunks: ["some place we are going to 一个我们要去的地方", "one we are creating 我们正在创造的东西", "the paths are not found 路不是被找到的", "they are made 是被走出来的"],
              source: "John Schaar｜改编：原句 The future is not some place we are going to, but one we are creating. The paths are not to be found, but made，合并并简化"
            }
          ]
        },
        {
          id: "t_goal_q3",
          text: "What do you want to be doing ten years from now?",
          sentences: [
            {
              id: "t_goal_q3_s1",
              tier: "C",
              en: "I do not have a five-year plan, but I know the kind of problem I want to be solving, and that is enough to steer by.",
              zh: "我没有五年计划，但我知道我想解决的是哪一类问题，这就足够给我指方向了。",
              chunks: ["a five-year plan 五年计划", "the kind of problem I want to be solving 我想解决的那一类问题", "that is enough 这就够了", "steer by 用来把握方向"],
              source: "AI 仿写（非真实出处）"
            },
            {
              id: "t_goal_q3_s2",
              tier: "B",
              en: "You can fail at what you don't want, so you might as well take a chance on doing what you love.",
              zh: "做自己不想做的事，你也一样可能失败，所以不如赌一把去做你真正热爱的事。",
              chunks: ["fail at what you don't want 在不想做的事上失败", "might as well 不如、干脆", "take a chance on 赌一把", "do what you love 做你热爱的事"],
              source: "Jim Carrey｜改编：截取自完整句 I learned many great lessons from my father, not the least of which was that ...（Wikiquote）"
            }
          ]
        },
        {
          id: "t_goal_q4",
          text: "How do you stay motivated when progress feels slow?",
          sentences: [
            {
              id: "t_goal_q4_s1",
              tier: "B",
              en: "When life gets you down, do you know what you've gotta do? Just keep swimming, and sooner or later the current turns.",
              zh: "生活把你打趴下的时候，你知道该做什么吗？就一直往前游，迟早水流会转向的。",
              chunks: ["when life gets you down 生活把你打趴下的时候", "what you've gotta do 你得做的事", "just keep swimming 就一直往前游", "sooner or later 迟早", "the current turns 水流会转向"],
              source: "电影《海底总动员》Finding Nemo (2003)｜改编：合并 Dory 原句两段并补全（IMDb）"
            },
            {
              id: "t_goal_q4_s2",
              tier: "B",
              en: "I hope you will make mistakes, because if you are making mistakes, it means you are out there doing something.",
              zh: "我希望你会犯错，因为如果你在犯错，说明你是真的在外面做事，而不是原地不动。",
              chunks: ["make mistakes 犯错", "if you are making mistakes 如果你在犯错", "it means ... 这说明……", "out there doing something 真的在外面做事"],
              source: "Neil Gaiman 费城艺术大学毕业演讲《Make Good Art》(2012)｜改编：原为两句，合并为一句"
            }
          ]
        },
        {
          id: "t_goal_q5",
          text: "Do you ever worry about the future?",
          sentences: [
            {
              id: "t_goal_q5_s1",
              tier: "B",
              en: "The future belongs to those who believe in the beauty of their dreams, and I would rather believe than lie awake worrying.",
              zh: "未来属于那些相信自己梦想之美的人，而我宁可去相信，也不愿躺着睡不着地担心。",
              chunks: ["the future belongs to ... 未来属于……", "believe in the beauty of their dreams 相信自己梦想之美", "I would rather ... than ... 我宁可……也不愿……", "lie awake worrying 躺着睡不着地担心"],
              source: "Eleanor Roosevelt｜改编：原句 The future belongs to those who believe in the beauty of their dreams，后接补全从句（Quote Investigator 考据）"
            },
            {
              id: "t_goal_q5_s2",
              tier: "C",
              en: "I used to lie awake running worst-case scenarios in my head, until I realised worrying never changed a single one of them.",
              zh: "我以前会躺着睡不着，在脑子里一遍遍演最坏的情况，直到我明白：担心从来没有改变过其中任何一种。",
              chunks: ["lie awake 躺着睡不着", "run worst-case scenarios 推演最坏的情况", "in my head 在我脑子里", "until I realised 直到我明白", "change a single one of them 改变其中任何一种"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_goal_q6",
          text: "Is it better to have a big dream or a realistic plan?",
          sentences: [
            {
              id: "t_goal_q6_s1",
              tier: "B",
              en: "We choose to go to the moon, not because it is easy, but because it is hard — that is the kind of goal worth having.",
              zh: "我们选择登月，不是因为它容易，而是因为它难——值得拥有的目标就是这种。",
              chunks: ["choose to go to the moon 选择登月", "not because it is easy, but because it is hard 不是因为它容易，而是因为它难", "the kind of goal worth having 值得拥有的那类目标"],
              source: "John F. Kennedy 莱斯大学演讲 (1962)｜改编：原句 We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard，简化并补全"
            },
            {
              id: "t_goal_q6_s2",
              tier: "B",
              en: "Your time is limited, so do not waste it living someone else's life — I would rather chase my own dream than a sensible plan.",
              zh: "你的时间有限，所以别浪费在过别人的人生上——我宁可追自己的梦，也不要一份「稳妥」的计划。",
              chunks: ["your time is limited 你的时间有限", "waste it living someone else's life 把它浪费在过别人的人生上", "I would rather ... than ... 我宁可……也不要……", "chase my own dream 追逐自己的梦想", "a sensible plan 一份稳妥的计划"],
              source: "Steve Jobs 斯坦福毕业演讲 (2005)｜改编：原句 Your time is limited, so don't waste it living someone else's life，后接补全从句"
            }
          ]
        }
      ]
    }
  ]
};
