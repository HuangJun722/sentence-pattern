// 种子语料 2：5 个话题 × 6 问题 × 2 句 = 60 句
// tier: A = 原句 / B = 轻微改编 / C = AI 仿写
window.SEED2 = {
  "topics": [
    {
      "id": "t_learn",
      "name": "学习与自我提升",
      "nameEn": "Learning & self-improvement",
      "questions": [
        {
          "id": "t_learn_q1",
          "text": "Why do you want to keep learning?",
          "sentences": [
            {
              "id": "t_learn_q1_s1",
              "tier": "B",
              "en": "We don't read and write poetry because it's cute; we read and write poetry because we are members of the human race, and the human race is filled with passion.",
              "zh": "我们读诗写诗不是因为它好玩，我们读诗写诗是因为我们是人类的一员，而人类是充满激情的。",
              "chunks": [
                "because it's cute 因为它好玩/讨巧",
                "members of the human race 人类的一员",
                "be filled with passion 充满激情",
                "read and write 读写"
              ],
              "source": "电影《死亡诗社》Dead Poets Society (1989)，John Keating 台词（轻微改编：原为三句，合并为复合句）"
            },
            {
              "id": "t_learn_q1_s2",
              "tier": "B",
              "en": "Medicine, law, business, engineering — these are noble pursuits and necessary to sustain life, but poetry, beauty, romance, love, these are what we stay alive for.",
              "zh": "医学、法律、商业、工程——这些都是高尚的追求，也是维持生活所必需的，但诗歌、美、浪漫、爱，这些才是我们活着的意义。",
              "chunks": [
                "noble pursuits 高尚的追求",
                "necessary to sustain life 维持生活所必需的",
                "what we stay alive for 我们活着是为了什么",
                "beauty, romance, love 美、浪漫、爱"
              ],
              "source": "电影《死亡诗社》Dead Poets Society (1989)，John Keating 台词（轻微改编：原句分段，合并为一句）"
            }
          ]
        },
        {
          "id": "t_learn_q2",
          "text": "How do you build a new habit or stick to learning?",
          "sentences": [
            {
              "id": "t_learn_q2_s1",
              "tier": "B",
              "en": "You do not rise to the level of your goals; you fall to the level of your systems, so I focus on the system, not the goal.",
              "zh": "你不会上升到目标的高度，只会落到系统的高度，所以我盯的是系统，而不是目标。",
              "chunks": [
                "rise to the level of 上升到……的高度",
                "fall to the level of 落到……的水平",
                "your systems 你的系统/流程",
                "focus on 专注于"
              ],
              "source": "James Clear《Atomic Habits》(2018)（轻微改编：原句 \"You do not rise to the level of your goals. You fall to the level of your systems.\"，补一句口语结论）"
            },
            {
              "id": "t_learn_q2_s2",
              "tier": "B",
              "en": "Every action you take is a vote for the type of person you wish to become, and that's why I try to show up every single day.",
              "zh": "你做的每一个动作，都是在为你想成为的那种人投票，这就是为什么我尽量每天都出现、每天都做一点。",
              "chunks": [
                "every action you take 你做的每一个动作",
                "a vote for 为……投一票",
                "the type of person you wish to become 你想成为的那种人",
                "show up every day 每天都出现、到场"
              ],
              "source": "James Clear《Atomic Habits》(2018)（轻微改编：原句 \"Every action you take is a vote for the type of person you wish to become.\"，补一句口语延伸）"
            }
          ]
        },
        {
          "id": "t_learn_q3",
          "text": "Do you learn better from books or from real experience?",
          "sentences": [
            {
              "id": "t_learn_q3_s1",
              "tier": "B",
              "en": "The sad thing is, in fifty years you're gonna start doing some thinking on your own, and you'll realize you paid a fortune for an education you could've got at the public library.",
              "zh": "可悲的是，五十年后你才会开始真正自己思考，然后你会发现，你为一顿在公共图书馆就能拿到的教育花了一大笔钱。",
              "chunks": [
                "the sad thing is 可悲的是",
                "start doing some thinking on your own 开始自己思考",
                "pay a fortune for 为……花一大笔钱",
                "an education you could've got 你本可以得到的教育",
                "the public library 公共图书馆"
              ],
              "source": "电影《心灵捕手》Good Will Hunting (1997)，Will Hunting 台词（轻微改编：原句含粗口并指对方，去粗口、改为第二人称泛用）"
            },
            {
              "id": "t_learn_q3_s2",
              "tier": "B",
              "en": "When you read, don't just consider what the author thinks — consider what you think, because your own reaction is the whole point.",
              "zh": "你读书的时候，不要只想着作者在想什么——想想你在想什么，因为你自己的反应才是重点。",
              "chunks": [
                "when you read 当你读书时",
                "consider what the author thinks 思考作者怎么想",
                "your own reaction 你自己的反应",
                "the whole point 重点所在"
              ],
              "source": "电影《死亡诗社》Dead Poets Society (1989)，John Keating 台词（轻微改编：原句 \"When you read, don't just consider what the author thinks, consider what you think.\"，补 because 从句）"
            }
          ]
        },
        {
          "id": "t_learn_q4",
          "text": "What do you do when you feel stuck and stop improving?",
          "sentences": [
            {
              "id": "t_learn_q4_s1",
              "tier": "A",
              "en": "Just when you think you know something, you have to look at it in another way, even though it may seem silly or wrong — you must try.",
              "zh": "就在你以为自己已经懂了什么的时候，你得换个角度看它，哪怕这个角度看起来很傻或者不对——你必须试。",
              "chunks": [
                "just when you think 就在你以为……的时候",
                "look at it in another way 换个角度看它",
                "seem silly or wrong 看起来很傻或不对",
                "you must try 你必须试"
              ],
              "source": "电影《死亡诗社》Dead Poets Society (1989)，John Keating 台词（原句）"
            },
            {
              "id": "t_learn_q4_s2",
              "tier": "C",
              "en": "When I stop improving at something, I usually find I've been practising the easy parts and quietly avoiding the hard ones.",
              "zh": "当我在某件事上不再进步的时候，我通常会发现，我一直在练容易的部分，然后悄悄躲开难的那部分。",
              "chunks": [
                "stop improving at something 在某件事上不再进步",
                "I usually find 我通常会发现",
                "practise the easy parts 练容易的部分",
                "quietly avoid 悄悄避开"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_learn_q5",
          "text": "How do you feel about feedback and praise?",
          "sentences": [
            {
              "id": "t_learn_q5_s1",
              "tier": "B",
              "en": "There are no two words in the English language more harmful than \"good job\", and I actually think that's true once you're serious about getting better.",
              "zh": "英语里没有比\"干得好\"更害人的两个字了，而且我真的觉得，一旦你认真想变强，这话就是对的。",
              "chunks": [
                "no two words more harmful than 没有比……更害人的话",
                "good job 干得好",
                "be serious about 对……是认真的",
                "get better 变得更好"
              ],
              "source": "电影《爆裂鼓手》Whiplash (2014)，Terence Fletcher 台词（轻微改编：原句 \"There are no two words in the English language more harmful than 'good job.'\"，补一句口语延伸）"
            },
            {
              "id": "t_learn_q5_s2",
              "tier": "C",
              "en": "I'd rather have someone tell me exactly what I did wrong than clap for me, because applause doesn't tell me what to fix.",
              "zh": "我宁愿有人直接告诉我哪里做错了，也不想听人给我鼓掌，因为掌声并不会告诉我该改什么。",
              "chunks": [
                "I'd rather... than 我宁愿……也不",
                "tell me exactly what I did wrong 直接告诉我哪里错了",
                "clap for me 为我鼓掌",
                "what to fix 该修什么"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_learn_q6",
          "text": "What's your attitude towards failure and mistakes?",
          "sentences": [
            {
              "id": "t_learn_q6_s1",
              "tier": "B",
              "en": "Habits are the compound interest of self-improvement, and getting one percent better every day counts for a lot in the long run.",
              "zh": "习惯是自我提升的复利，每天进步百分之一，从长远来看会累积成很大的东西。",
              "chunks": [
                "the compound interest of self-improvement 自我提升的复利",
                "one percent better every day 每天好百分之一",
                "count for a lot 很重要、分量很重",
                "in the long run 从长远看"
              ],
              "source": "James Clear《Atomic Habits》(2018)（轻微改编：原句 \"Habits are the compound interest of self-improvement. Getting 1 percent better every day counts for a lot in the long run.\"，合并为一句）"
            },
            {
              "id": "t_learn_q6_s2",
              "tier": "B",
              "en": "Carpe diem — seize the day and make your life extraordinary, because we're food for worms one day and none of this lasts.",
              "zh": "及时行乐——抓住今天，把你的人生过得不凡，因为有一天我们都会成为虫子的食物，这些都不长久。",
              "chunks": [
                "carpe diem 及时行乐、把握当下",
                "seize the day 抓住今天",
                "make your life extraordinary 让你的人生不凡",
                "none of this lasts 这些都长不了"
              ],
              "source": "电影《死亡诗社》Dead Poets Society (1989)，John Keating 台词（轻微改编：原句 \"Carpe diem. Seize the day, boys. Make your lives extraordinary.\" 与另一句 \"we're food for worms\" 合并）"
            }
          ]
        }
      ]
    },
    {
      "id": "t_travel",
      "name": "旅行与假期",
      "nameEn": "Travel & holidays",
      "questions": [
        {
          "id": "t_travel_q1",
          "text": "Why do you like travelling?",
          "sentences": [
            {
              "id": "t_travel_q1_s1",
              "tier": "B",
              "en": "We travel, initially, to lose ourselves, and we travel, next, to find ourselves, and I think that's exactly why a bad trip can still be worth it.",
              "zh": "我们旅行，一开始是为了把自己弄丢，接下来是为了把自己找回来，我觉得这正是为什么一趟糟糕的旅行也可能值得。",
              "chunks": [
                "travel to lose ourselves 旅行是为了迷失自我",
                "find ourselves 找到自己",
                "a bad trip 一趟糟糕的旅行",
                "still be worth it 依然值得"
              ],
              "source": "Pico Iyer 散文 \"Why We Travel\" (2000)（轻微改编：原句 \"We travel, initially, to lose ourselves; and we travel, next, to find ourselves.\"，补一句口语延伸）"
            },
            {
              "id": "t_travel_q1_s2",
              "tier": "A",
              "en": "To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time.",
              "zh": "在我看来，旅行最大的回报和奢侈，就是能像第一次那样去体验那些最日常的东西。",
              "chunks": [
                "to my mind 在我看来",
                "the greatest reward of travel 旅行最大的回报",
                "experience everyday things 体验日常事物",
                "as if for the first time 就像第一次一样"
              ],
              "source": "Bill Bryson《Neither Here Nor There》(1991)（原句）"
            }
          ]
        },
        {
          "id": "t_travel_q2",
          "text": "What kind of traveller are you — do you plan everything or go with the flow?",
          "sentences": [
            {
              "id": "t_travel_q2_s1",
              "tier": "A",
              "en": "Never refuse an invitation, never resist the unfamiliar, never fail to be polite and never outstay your welcome — just keep your mind open and suck in the experience.",
              "zh": "永远别拒绝邀请，别抗拒不熟悉的东西，别失礼，也别待到人嫌——只要保持开放，把体验吸进去就行。",
              "chunks": [
                "never refuse an invitation 别拒绝邀请",
                "resist the unfamiliar 抗拒不熟悉的东西",
                "outstay your welcome 待得太久惹人嫌",
                "keep your mind open 保持开放",
                "suck in the experience 把体验吸收进去"
              ],
              "source": "电影《海滩》The Beach (2000)，Richard 旁白（原句）"
            },
            {
              "id": "t_travel_q2_s2",
              "tier": "B",
              "en": "I was just like everybody else: scared to death of the great unknown and desperate to take a little piece of home with me.",
              "zh": "我跟所有人一模一样：被那个巨大的未知吓得要死，还拼命想随身带上一小片家乡。",
              "chunks": [
                "just like everybody else 跟所有人一样",
                "scared to death of 被……吓死",
                "the great unknown 巨大的未知",
                "be desperate to 拼命想",
                "a little piece of home 一小片家乡"
              ],
              "source": "电影《海滩》The Beach (2000)，Richard 旁白（轻微改编：原句含粗口 \"shit-scared\"，改为 scared to death）"
            }
          ]
        },
        {
          "id": "t_travel_q3",
          "text": "Do you prefer travelling alone or with other people?",
          "sentences": [
            {
              "id": "t_travel_q3_s1",
              "tier": "B",
              "en": "I think you're wrong if you think the joy of life comes principally from the joy of human relationships — travelling alone taught me that.",
              "zh": "如果你觉得人生的乐趣主要来自人际关系的乐趣，那我觉得你错了——是独自旅行教会我这件事的。",
              "chunks": [
                "the joy of life 人生的乐趣",
                "come principally from 主要来自",
                "human relationships 人际关系",
                "travelling alone 独自旅行"
              ],
              "source": "电影《荒野生存》Into the Wild (2007)，Christopher McCandless 台词（轻微改编：原句 \"You are wrong if you think that the joy of life comes principally from the joy of human relationships.\"，补一句收尾）"
            },
            {
              "id": "t_travel_q3_s2",
              "tier": "C",
              "en": "Travelling with people you love is great until day four, and then everybody needs two hours alone or the trip falls apart.",
              "zh": "跟爱的人一起旅行在第四天之前都很棒，之后每个人都得独处两小时，不然这趟旅行就要散架。",
              "chunks": [
                "people you love 你爱的人",
                "until day four 直到第四天",
                "two hours alone 独处两小时",
                "fall apart 散架、崩掉"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_travel_q4",
          "text": "Have you ever been disappointed by a trip?",
          "sentences": [
            {
              "id": "t_travel_q4_s1",
              "tier": "A",
              "en": "The only downer is, everyone's got the same idea: we all travel thousands of miles just to watch TV and check into somewhere with all the comforts of home.",
              "zh": "唯一扫兴的是，大家的想法都一样：我们飞了几千公里，就为了看电视、住进一个跟家里一样舒服的地方。",
              "chunks": [
                "the only downer is 唯一扫兴的是",
                "everyone's got the same idea 大家的想法都一样",
                "travel thousands of miles 飞几千公里",
                "check into 入住",
                "the comforts of home 家里的舒适"
              ],
              "source": "电影《海滩》The Beach (2000)，Richard 旁白（原句）"
            },
            {
              "id": "t_travel_q4_s2",
              "tier": "C",
              "en": "I've learned to keep my expectations low on purpose, because the trips I over-planned were always the ones that let me down.",
              "zh": "我学会了故意把期待放低，因为那些我做过头计划行程的旅行，往往是最让我失望的。",
              "chunks": [
                "keep my expectations low 把期待放低",
                "on purpose 故意地",
                "over-plan 计划过头",
                "let me down 让我失望"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_travel_q5",
          "text": "What does travel change about you?",
          "sentences": [
            {
              "id": "t_travel_q5_s1",
              "tier": "A",
              "en": "Travel changes you: as you move through this life and this world, you change things slightly and you leave marks behind, however small.",
              "zh": "旅行会改变你：当你走过这一生、这个世界，你也会让一些东西发生微小的改变，并且留下印记，哪怕很小。",
              "chunks": [
                "travel changes you 旅行改变你",
                "move through this world 走过这个世界",
                "change things slightly 让事物发生细微改变",
                "leave marks behind 留下印记",
                "however small 不管多小"
              ],
              "source": "Anthony Bourdain《Parts Unknown》片头独白（原句）"
            },
            {
              "id": "t_travel_q5_s2",
              "tier": "A",
              "en": "I still believe in paradise, but now at least I know it's not where you go — it's how you feel for a moment in your life.",
              "zh": "我依然相信有天堂存在，但至少现在我知道，它不是你去的地方，而是你生命中某一刻的感受。",
              "chunks": [
                "believe in paradise 相信天堂存在",
                "at least I know 至少我知道",
                "it's not where you go 不是你去的地方",
                "how you feel 你的感受",
                "for a moment in your life 生命中的某一刻"
              ],
              "source": "电影《海滩》The Beach (2000)，Richard 结尾旁白（原句）"
            }
          ]
        },
        {
          "id": "t_travel_q6",
          "text": "What's your dream destination — would you rather relax or explore?",
          "sentences": [
            {
              "id": "t_travel_q6_s1",
              "tier": "A",
              "en": "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other and to feel — that's the purpose of life.",
              "zh": "去看这个世界，去看那些危险之地，去看墙后面的东西，走近一点，去找到彼此、去感受——这才是人生的目的。",
              "chunks": [
                "see the world 看世界",
                "things dangerous to come to 危险之地",
                "see behind walls 看见墙后的东西",
                "draw closer 走近",
                "the purpose of life 人生的目的"
              ],
              "source": "电影《白日梦想家》The Secret Life of Walter Mitty (2013)，《Life》杂志座右铭（原句）"
            },
            {
              "id": "t_travel_q6_s2",
              "tier": "B",
              "en": "Ruin is a gift, and ruin is the road to transformation, so I've stopped being afraid of plans falling apart while I'm away.",
              "zh": "崩塌是一份礼物，崩塌是通往转变的路，所以我不再害怕出门在外时计划被彻底打乱。",
              "chunks": [
                "ruin is a gift 崩塌是一份礼物",
                "the road to transformation 通往转变的路",
                "stop being afraid of 不再害怕",
                "plans falling apart 计划泡汤"
              ],
              "source": "Elizabeth Gilbert《Eat, Pray, Love》(2006)（轻微改编：原句 \"Ruin is a gift. Ruin is the road to transformation.\"，补一句口语延伸）"
            }
          ]
        }
      ]
    },
    {
      "id": "t_health",
      "name": "健康与运动",
      "nameEn": "Health & exercise",
      "questions": [
        {
          "id": "t_health_q1",
          "text": "Do you exercise regularly?",
          "sentences": [
            {
              "id": "t_health_q1_s1",
              "tier": "A",
              "en": "You do not rise to the level of your goals. You fall to the level of your systems.",
              "zh": "你不会自动升到目标的高度，你只会掉到你自己那套系统的水平。",
              "chunks": [
                "rise to the level of 上升到…的水平",
                "your goals 你的目标",
                "fall to the level of 掉到…的水平",
                "your systems 你日常那套系统"
              ],
              "source": "James Clear《原子习惯》Atomic Habits（2018）（原句）"
            },
            {
              "id": "t_health_q1_s2",
              "tier": "C",
              "en": "I'm not the person who runs at six in the morning, but I do walk forty minutes every single day, rain or shine.",
              "zh": "我不是那种早上六点去跑步的人，但我确实每天都走四十分钟，风雨无阻。",
              "chunks": [
                "the person who runs 会去跑步的那种人",
                "at six in the morning 早上六点",
                "every single day 每一天",
                "rain or shine 风雨无阻"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_health_q2",
          "text": "Why do so many people quit their workout routine?",
          "sentences": [
            {
              "id": "t_health_q2_s1",
              "tier": "A",
              "en": "The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game.",
              "zh": "定目标是为了赢下这一局，建系统是为了能一直玩下去。",
              "chunks": [
                "the purpose of setting goals 定目标的意义",
                "win the game 赢下这一局",
                "building systems 搭建系统",
                "continue playing the game 继续玩下去"
              ],
              "source": "James Clear《原子习惯》Atomic Habits（2018）（原句）"
            },
            {
              "id": "t_health_q2_s2",
              "tier": "C",
              "en": "Most people quit because they picked a plan that only works when life is calm, and life is almost never calm.",
              "zh": "大多数人放弃，是因为他们挑的那套计划只有在生活风平浪静时才管用，而生活几乎从不风平浪静。",
              "chunks": [
                "most people quit 大多数人放弃",
                "picked a plan 挑了一套计划",
                "only works when 只在…时才管用",
                "life is almost never calm 生活几乎从不安稳"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_health_q3",
          "text": "What keeps you going when training gets really hard?",
          "sentences": [
            {
              "id": "t_health_q3_s1",
              "tier": "B",
              "en": "You, me, or nobody is gonna hit as hard as life, but it ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
              "zh": "你、我、任何人，都不会出手比生活更重，但重点不是你能打多重，而是你能挨多重还继续往前走。",
              "chunks": [
                "hit as hard as life 打得跟生活一样狠",
                "it ain't about how hard you hit 关键不在你打得多狠",
                "get hit 挨打、受挫",
                "keep moving forward 继续往前走"
              ],
              "source": "《洛奇 6：永远的拳王》Rocky Balboa（2006），Rocky 对儿子的台词（轻微改编：原为多句，删去末尾重复句 \"How much you can take and keep moving forward\"，并把前两句用 but 连为一句）"
            },
            {
              "id": "t_health_q3_s2",
              "tier": "A",
              "en": "It's supposed to be hard. If it wasn't hard, everyone would do it. The hard is what makes it great.",
              "zh": "它本来就该难。要是不难，人人都能干。正是这份难，才让它了不起。",
              "chunks": [
                "it's supposed to be hard 它本来就該难",
                "if it wasn't hard 要是不难",
                "everyone would do it 人人都会去做",
                "the hard is what makes it great 正是难成就了它"
              ],
              "source": "《红粉联盟》A League of Their Own（1992），Jimmy Dugan 台词（原句）"
            }
          ]
        },
        {
          "id": "t_health_q4",
          "text": "Do you pay attention to what you eat?",
          "sentences": [
            {
              "id": "t_health_q4_s1",
              "tier": "A",
              "en": "Every action you take is a vote for the type of person you wish to become.",
              "zh": "你做的每一件事，都是在给你想成为的那种人投一票。",
              "chunks": [
                "every action you take 你做的每一个动作",
                "a vote for 给…投的一票",
                "the type of person 那一类人",
                "wish to become 想成为"
              ],
              "source": "James Clear《原子习惯》Atomic Habits（2018）（原句）"
            },
            {
              "id": "t_health_q4_s2",
              "tier": "C",
              "en": "I stopped trying to follow any diet plan and just started cooking at home five nights a week, which changed everything.",
              "zh": "我不再追什么减肥食谱，改成一周五晚在家做饭，然后一切都变了。",
              "chunks": [
                "follow a diet plan 追随减肥食谱",
                "stop trying to 不再试图",
                "cooking at home 在家做饭",
                "five nights a week 一周五晚"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_health_q5",
          "text": "How do you deal with stress and bad weeks?",
          "sentences": [
            {
              "id": "t_health_q5_s1",
              "tier": "A",
              "en": "You have to do everything you can, you have to work your hardest, and if you do, if you stay positive, you have a shot at a silver lining.",
              "zh": "你得竭尽全力，你得拼到最狠，只要你做到了、只要你保持积极，你就有机会等到那道乌云的金边。",
              "chunks": [
                "do everything you can 竭尽所能",
                "work your hardest 拼到最狠",
                "stay positive 保持积极",
                "have a shot at 有…的机会"
              ],
              "source": "《乌云背后的幸福线》Silver Linings Playbook（2012），Pat Solitano 台词（原句）"
            },
            {
              "id": "t_health_q5_s2",
              "tier": "C",
              "en": "On bad weeks I don't try to fix my whole life; I just sleep enough, move my body, and call one friend.",
              "zh": "状态差的那一周，我不会试图修好整个人生，我只是睡够、动一动、给一个朋友打电话。",
              "chunks": [
                "on bad weeks 在不顺的那一周",
                "fix my whole life 修好我整个人生",
                "sleep enough 睡够",
                "move my body 活动下身体"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_health_q6",
          "text": "Do you play any sports? What do you get out of them?",
          "sentences": [
            {
              "id": "t_health_q6_s1",
              "tier": "A",
              "en": "Taking on a challenge is a lot like riding a horse, isn't it? If you're comfortable while you're doing it, you're probably doing it wrong.",
              "zh": "接受挑战很像骑马，对吧？要是你做的时候一直很舒服，那你多半是做错了。",
              "chunks": [
                "taking on a challenge 接下一个挑战",
                "a lot like riding a horse 很像骑马",
                "comfortable while you're doing it 做的时候很舒服",
                "you're probably doing it wrong 你多半做错了"
              ],
              "source": "《足球教练》Ted Lasso（Apple TV+，2020），Ted Lasso 台词（原句）"
            },
            {
              "id": "t_health_q6_s2",
              "tier": "A",
              "en": "You got a dream, you gotta protect it. People can't do something themselves, they wanna tell you you can't do it.",
              "zh": "你有梦想，就得护着它。有些人自己办不到，就非要告诉你说你也办不到。",
              "chunks": [
                "you got a dream 你有个梦想",
                "you gotta protect it 你得护着它",
                "people can't do something themselves 有些人自己做不到",
                "tell you you can't do it 告诉你你不行"
              ],
              "source": "《当幸福来敲门》The Pursuit of Happyness（2006），Chris Gardner 台词（原句）"
            }
          ]
        }
      ]
    },
    {
      "id": "t_tech",
      "name": "科技与互联网",
      "nameEn": "Technology & the internet",
      "questions": [
        {
          "id": "t_tech_q1",
          "text": "How much time do you spend online?",
          "sentences": [
            {
              "id": "t_tech_q1_s1",
              "tier": "A",
              "en": "We lived on farms, then we lived in cities, and now we're going to live on the internet!",
              "zh": "我们曾经住在农场上，后来住进城市，而现在我们要住到互联网上去了。",
              "chunks": [
                "we lived on farms 我们住在农场",
                "then we lived in cities 后来住进城市",
                "now we're going to 现在我们要",
                "live on the internet 生活在国际互联网上"
              ],
              "source": "《社交网络》The Social Network（2010），Sean Parker 台词（原句）"
            },
            {
              "id": "t_tech_q1_s2",
              "tier": "C",
              "en": "I'm not proud of it, but my phone is the first thing I touch in the morning and the last thing I put down at night.",
              "zh": "这事我挺不好意思的，但我的手机是早上第一个摸的东西，也是晚上最后一个放下的东西。",
              "chunks": [
                "I'm not proud of it 这事我挺不好意思",
                "the first thing I touch 我第一个摸的东西",
                "put down 放下",
                "at night 在夜里"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_tech_q2",
          "text": "Do you think social media is changing the way we think?",
          "sentences": [
            {
              "id": "t_tech_q2_s1",
              "tier": "A",
              "en": "What Orwell feared were those who would ban books. What Huxley feared was that there would be no reason to ban a book, for there would be no one who wanted to read one.",
              "zh": "奥威尔害怕的是那些禁书的人；赫胥黎害怕的则是没人再需要禁书，因为根本没人想读。",
              "chunks": [
                "what Orwell feared were 奥威尔所惧怕的是",
                "those who would ban books 那些要禁书的人",
                "there would be no reason to 根本没有理由去…",
                "no one who wanted to read one 没人想读一本"
              ],
              "source": "Neil Postman《娱乐至死》Amusing Ourselves to Death（1985）（原句）"
            },
            {
              "id": "t_tech_q2_s2",
              "tier": "A",
              "en": "We accept the reality of the world with which we're presented. It's as simple as that.",
              "zh": "我们接受呈现在我们面前的那个世界，就这么简单。",
              "chunks": [
                "accept the reality 接受现实",
                "the world with which we're presented 被呈现在我们面前的世界",
                "as simple as that 就这么简单",
                "be presented with 被呈现"
              ],
              "source": "《楚门的世界》The Truman Show（1998），Christof 台词（原句）"
            }
          ]
        },
        {
          "id": "t_tech_q3",
          "text": "Are free apps really free?",
          "sentences": [
            {
              "id": "t_tech_q3_s1",
              "tier": "A",
              "en": "There are only two industries that refer to their customers as users: illegal drugs and software.",
              "zh": "只有两个行业管自己的客户叫\"使用者\"：违禁药品和软件。",
              "chunks": [
                "there are only two industries 只有两个行业",
                "refer to their customers as 把客户称作",
                "users 使用者",
                "illegal drugs and software 违禁药品与软件"
              ],
              "source": "Edward Tufte（统计学家、信息设计学者，纪录片《The Social Dilemma》引用）（原句）"
            },
            {
              "id": "t_tech_q3_s2",
              "tier": "A",
              "en": "It's the gradual, slight, imperceptible change in your own behavior and perception that is the product.",
              "zh": "真正被当成产品卖掉的，是你自身行为和感知里那种渐进的、细微的、察觉不到的改变。",
              "chunks": [
                "gradual, slight, imperceptible change 渐进、细微、不易察觉的改变",
                "in your own behavior 在你自己的行为里",
                "perception 感知、看法",
                "that is the product 那才是产品"
              ],
              "source": "Jaron Lanier（计算机科学家），纪录片《The Social Dilemma》（2020）（原句）"
            }
          ]
        },
        {
          "id": "t_tech_q4",
          "text": "Is your phone a tool or something more dangerous?",
          "sentences": [
            {
              "id": "t_tech_q4_s1",
              "tier": "B",
              "en": "If something is a tool, it genuinely is just sitting there waiting patiently. If something is not a tool, it's demanding things from you, seducing you, manipulating you.",
              "zh": "如果一样东西是工具，它就只是安安静静待在那儿等你用；如果它不是工具，它就会向你索要、引诱你、操纵你。",
              "chunks": [
                "if something is a tool 如果它是工具",
                "just sitting there waiting patiently 只是安静地等着",
                "demanding things from you 向你索要",
                "seducing you, manipulating you 引诱你、操纵你"
              ],
              "source": "Tristan Harris，《The Social Dilemma》（2020）（轻微改编：删去原句末句 \"It wants things from you.\"，并把 \"It's seducing you. It's manipulating you.\" 合并为并列结构）"
            },
            {
              "id": "t_tech_q4_s2",
              "tier": "C",
              "en": "A phone stopped being a tool the moment it started buzzing before I decided to pick it up.",
              "zh": "从它在我决定拿起来之前就开始震动那一刻起，手机就不再是工具了。",
              "chunks": [
                "stopped being a tool 不再是一个工具",
                "the moment 就在…的那一刻",
                "start buzzing 开始震动",
                "pick it up 把它拿起来"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_tech_q5",
          "text": "Have you ever tried to cut down your screen time?",
          "sentences": [
            {
              "id": "t_tech_q5_s1",
              "tier": "B",
              "en": "Digital minimalism is a philosophy of technology use in which you focus your online time on a small number of carefully selected activities, and happily miss out on everything else.",
              "zh": "数字极简主义是这样一种技术使用哲学：把上网时间集中在少数精心挑选的活动上，并且乐呵呵地错过其余一切。",
              "chunks": [
                "digital minimalism 数字极简主义",
                "a philosophy of technology use 一种技术使用哲学",
                "a small number of carefully selected activities 少数精心挑选的活动",
                "happily miss out on everything else 愉快地错过其他一切"
              ],
              "source": "Cal Newport《数字极简主义》Digital Minimalism（2019），书中对 digital minimalism 的定义（轻微改编：删去原文中 \"that strongly support things you value, and then\" 等成分以压缩词数）"
            },
            {
              "id": "t_tech_q5_s2",
              "tier": "C",
              "en": "I deleted two apps and left my phone in another room at dinner, and my evenings got about an hour longer.",
              "zh": "我删了两个应用，吃饭时把手机放在另一个房间，然后我的晚上就多出了一个小时。",
              "chunks": [
                "delete apps 删应用",
                "leave my phone in another room 把手机放在别的房间",
                "at dinner 吃饭时",
                "my evenings got an hour longer 我的晚上多了一小时"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_tech_q6",
          "text": "What makes a piece of technology worth your time?",
          "sentences": [
            {
              "id": "t_tech_q6_s1",
              "tier": "A",
              "en": "Design is not just what it looks like and feels like. Design is how it works.",
              "zh": "设计不只是它长什么样、摸起来怎么样，设计是它怎么运作。",
              "chunks": [
                "design is not just 设计不只是",
                "what it looks like 它看起来的样子",
                "what it feels like 它摸起来的感觉",
                "how it works 它如何运作"
              ],
              "source": "Steve Jobs（2003 年《纽约时报》访谈中提出的表述）（原句）"
            },
            {
              "id": "t_tech_q6_s2",
              "tier": "C",
              "en": "I don't care how many features a gadget has if the thing I need takes four taps to find.",
              "zh": "一个设备有多少功能我根本不在乎，如果我要的那个东西得点四下才找得到。",
              "chunks": [
                "I don't care how many 我不在乎有多少",
                "features 功能",
                "a gadget 一个小设备",
                "take four taps to find 点四下才找得到"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      "id": "t_money",
      "name": "金钱与消费",
      "nameEn": "Money & shopping",
      "questions": [
        {
          "id": "t_money_q1",
          "text": "Do you think you handle money well?",
          "sentences": [
            {
              "id": "t_money_q1_s1",
              "tier": "A",
              "en": "Doing well with money has a little to do with how smart you are and a lot to do with how you behave.",
              "zh": "把钱管好这件事，跟你有多聪明关系不大，跟你怎么行事关系很大。",
              "chunks": [
                "doing well with money 把钱处理好",
                "has a little to do with 与…关系不大",
                "how smart you are 你有多聪明",
                "how you behave 你如何行事"
              ],
              "source": "Morgan Housel《金钱心理学》The Psychology of Money（2020）（原句）"
            },
            {
              "id": "t_money_q1_s2",
              "tier": "A",
              "en": "A budget is telling your money where to go instead of wondering where it went.",
              "zh": "做预算就是告诉你的钱该去哪儿，而不是月底纳闷它到底去哪儿了。",
              "chunks": [
                "a budget is 预算就是",
                "telling your money where to go 告诉你的钱该去哪里",
                "instead of 而不是",
                "wondering where it went 纳闷它去了哪儿"
              ],
              "source": "Dave Ramsey（理财作家、主持人）（原句）"
            }
          ]
        },
        {
          "id": "t_money_q2",
          "text": "Do people spend money to impress others?",
          "sentences": [
            {
              "id": "t_money_q2_s1",
              "tier": "A",
              "en": "Spending money to show people how much money you have is the fastest way to have less money.",
              "zh": "花钱向别人展示你多有钱，是让你变得没钱的最快方式。",
              "chunks": [
                "spending money to show people 花钱向别人展示",
                "how much money you have 你手上有多少钱",
                "the fastest way to 最快的…方式",
                "have less money 拥有更少的钱"
              ],
              "source": "Morgan Housel《金钱心理学》The Psychology of Money（2020）（原句）"
            },
            {
              "id": "t_money_q2_s2",
              "tier": "B",
              "en": "The things you own end up owning you, and it's only after you've lost everything that you're free to do anything.",
              "zh": "你拥有的东西最终会拥有你，而且只有当你失去一切之后，你才自由地去做任何事。",
              "chunks": [
                "the things you own 你拥有的东西",
                "end up owning you 最终反过来占有你",
                "after you've lost everything 在你失去一切之后",
                "be free to do anything 自由地做任何事"
              ],
              "source": "《搏击俱乐部》Fight Club（1999），Tyler Durden 台词（轻微改编：原为两句，用 and 连为一句）"
            }
          ]
        },
        {
          "id": "t_money_q3",
          "text": "Do you enjoy shopping?",
          "sentences": [
            {
              "id": "t_money_q3_s1",
              "tier": "A",
              "en": "When I shop, the world gets better, and the world is better, but then it's not, and I need to do it again.",
              "zh": "我一买东西，世界就变好了，世界确实变好了，可接着又不那么好了，于是我得再买一次。",
              "chunks": [
                "when I shop 当我购物时",
                "the world gets better 世界变好了",
                "but then it's not 但接着又不是了",
                "I need to do it again 我得再来一次"
              ],
              "source": "《一个购物狂的自白》Confessions of a Shopaholic（2009），Rebecca Bloomwood 台词（原句）"
            },
            {
              "id": "t_money_q3_s2",
              "tier": "C",
              "en": "I used to shop when I was bored, and now I wait two days before buying anything that isn't groceries.",
              "zh": "我以前无聊就逛街，现在除了买菜，别的任何东西我都会先等两天再说。",
              "chunks": [
                "I used to 我过去常常",
                "shop when I was bored 无聊时购物",
                "wait two days 等两天",
                "anything that isn't groceries 除了日用食材以外的任何东西"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_money_q4",
          "text": "What would you do with more money?",
          "sentences": [
            {
              "id": "t_money_q4_s1",
              "tier": "A",
              "en": "Money's greatest intrinsic value — and this can't be overstated — is its ability to give you control over your time.",
              "zh": "金钱最大的内在价值——这点怎么强调都不过分——在于它能让你掌控自己的时间。",
              "chunks": [
                "money's greatest intrinsic value 金钱最大的内在价值",
                "this can't be overstated 这点怎么强调都不过分",
                "its ability to 它…的能力",
                "control over your time 对自己时间的掌控"
              ],
              "source": "Morgan Housel《金钱心理学》The Psychology of Money（2020）（原句）"
            },
            {
              "id": "t_money_q4_s2",
              "tier": "C",
              "en": "If I had more money I'd buy back my mornings, because the thing I actually want is time, not stuff.",
              "zh": "如果我有更多钱，我会把我的早晨买回来，因为我真正想要的是时间，不是东西。",
              "chunks": [
                "if I had more money 如果我有更多钱",
                "buy back my mornings 把我的早晨买回来",
                "the thing I actually want 我真正想要的东西",
                "time, not stuff 是时间，不是物件"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_money_q5",
          "text": "Do you save or invest your money?",
          "sentences": [
            {
              "id": "t_money_q5_s1",
              "tier": "A",
              "en": "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
              "zh": "重要的不是你赚多少钱，而是你留下多少钱、它替你多卖力地工作、以及你能把它守住几代人。",
              "chunks": [
                "it's not how much money you make 重要的不是你赚多少",
                "how much you keep 你留下多少",
                "how hard it works for you 它替你工作得多卖力",
                "how many generations 多少代人"
              ],
              "source": "Robert Kiyosaki《富爸爸穷爸爸》Rich Dad Poor Dad（1997）（原句）"
            },
            {
              "id": "t_money_q5_s2",
              "tier": "C",
              "en": "I don't try to pick winners; I just move a fixed amount into savings the day my salary lands, before I can talk myself out of it.",
              "zh": "我不去挑什么赢家股票，我只是工资一到账就把固定一笔钱转进储蓄，赶在我劝退自己之前。",
              "chunks": [
                "pick winners 挑赢家",
                "a fixed amount 一笔固定的金额",
                "the day my salary lands 工资到账那天",
                "talk myself out of it 把自己劝退"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          "id": "t_money_q6",
          "text": "Do you think more money makes people happier?",
          "sentences": [
            {
              "id": "t_money_q6_s1",
              "tier": "A",
              "en": "It is not the man who has too little, but the man who craves more, that is poor.",
              "zh": "贫穷的不是拥有太少的人，而是贪求更多的人。",
              "chunks": [
                "the man who has too little 拥有太少的人",
                "but the man who craves more 而是贪求更多的人",
                "crave more 渴求更多",
                "that is poor 那才是贫穷"
              ],
              "source": "塞内卡 Seneca（《道德书简》，古罗马）（原句）"
            },
            {
              "id": "t_money_q6_s2",
              "tier": "C",
              "en": "More money fixes money problems, and I think that's where it stops; it won't fix the way you treat people.",
              "zh": "更多的钱能解决钱的问题，我觉得也就到此为止了；它修不好你对待别人的方式。",
              "chunks": [
                "more money fixes money problems 钱能解决钱的问题",
                "that's where it stops 到此为止",
                "it won't fix 它修不好",
                "the way you treat people 你对待他人的方式"
              ],
              "source": "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    }
  ]
};
