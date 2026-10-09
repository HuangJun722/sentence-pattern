// 种子语料：5 个高频话题 × 6 问题 × 2 长句 = 60 句
// tier: A = 母语者原句（未改动） / B = 有真实出处，为口语化做了轻微改编 / C = AI 仿写（非真实出处，仅结构练习）
window.SEED = {
  version: 1,
  topics: [
    {
      id: "t_city",
      name: "城市与居住地",
      nameEn: "City & where you live",
      questions: [
        {
          id: "t_city_q1",
          text: "What do you like most about the city you live in?",
          sentences: [
            {
              id: "t_city_q1_s1",
              tier: "B",
              en: "I was in love with the city, the way you love the first person who ever touches you, and you never love anyone quite that way again.",
              zh: "我那时候是爱上了这座城市，就像你爱上第一个触碰你的人，之后你再也不会用同样的方式去爱任何人。",
              chunks: ["be in love with the city 爱上这座城市", "the way you love 就像你爱……那样", "never love anyone quite that way again 再也不会那样去爱"],
              source: "Joan Didion《Slouching Towards Bethlehem》(1968)｜改编：截取后半句，New York 改为 the city"
            },
            {
              id: "t_city_q1_s2",
              tier: "B",
              en: "I thrive on the hustle and bustle of the crowds and the traffic, because to me this city means street-smart people who always seem to know all the angles.",
              zh: "我就是靠人群和车流的那种喧闹劲儿活着的，因为对我来说，这座城市意味着一群机灵的、好像永远都知道门道的人。",
              chunks: ["thrive on 靠……而如鱼得水", "hustle and bustle 熙熙攘攘", "street-smart 机灵的、有街头智慧的", "know all the angles 摸清所有门道"],
              source: "电影《曼哈顿》Manhattan (1979)｜改编：原为第三人称两句，合并并改为第一人称"
            }
          ]
        },
        {
          id: "t_city_q2",
          text: "Is there anything you would change about your city?",
          sentences: [
            {
              id: "t_city_q2_s1",
              tier: "B",
              en: "How hard it is to exist in a society desensitized by drugs, loud music, television, crime and garbage — that's honestly my biggest complaint about living downtown.",
              zh: "活在一个被毒品、吵闹的音乐、电视、犯罪和垃圾搞得麻木的社会里有多难——说实话，这是我对住在市中心最大的抱怨。",
              chunks: ["how hard it is to 做……有多难", "a society desensitized by 被……弄得麻木的社会", "my biggest complaint 我最大的不满", "live downtown 住在市中心"],
              source: "电影《曼哈顿》Manhattan (1979)｜改编：过去时改现在时，补一句收尾"
            },
            {
              id: "t_city_q2_s2",
              tier: "B",
              en: "I adore this city, but if I'm being honest, sometimes it feels like a metaphor for the decay of contemporary culture.",
              zh: "我很爱这座城市，但说实话，有时候它给人的感觉就像是当代文化衰落的一个隐喻。",
              chunks: ["adore this city 深爱这座城市", "if I'm being honest 说实话", "feel like 感觉像", "a metaphor for ……的隐喻"],
              source: "电影《曼哈顿》Manhattan (1979)｜改编：原为两句，合并为第一人称一句"
            }
          ]
        },
        {
          id: "t_city_q3",
          text: "Do you prefer living in a big city or a small town?",
          sentences: [
            {
              id: "t_city_q3_s1",
              tier: "B",
              en: "This is my town, and it always will be, even though I complain about it almost every single day.",
              zh: "这是我的城市，而且永远都会是，尽管我几乎每天都在抱怨它。",
              chunks: ["this is my town 这是我的城市", "it always will be 永远都会是", "even though 尽管", "complain about 抱怨"],
              source: "电影《曼哈顿》Manhattan (1979)｜改编：原句 New York was his town，改第一人称并补从句"
            },
            {
              id: "t_city_q3_s2",
              tier: "C",
              en: "I'm the kind of person who needs a bit of noise and traffic around me, because total silence makes me feel like nothing is ever going to happen.",
              zh: "我是那种身边得有点噪音和车流的人，因为彻底的安静会让我觉得什么事都不会发生了。",
              chunks: ["the kind of person who 那种……的人", "a bit of noise 一点噪音", "total silence 彻底的安静", "nothing is ever going to happen 什么都不会发生"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_city_q4",
          text: "What's your neighborhood like?",
          sentences: [
            {
              id: "t_city_q4_s1",
              tier: "B",
              en: "The fancy part of town is a million million miles from the world I live in, which is here, my favorite bit of the city.",
              zh: "城里那些光鲜的地方离我生活的世界差了十万八千里，而我生活的地方就是这儿，这座城市我最喜欢的一小块地方。",
              chunks: ["the fancy part of town 城里光鲜的地段", "a million million miles from 与……相差十万八千里", "the world I live in 我生活的圈子", "my favorite bit of the city 这座城市我最喜欢的一角"],
              source: "电影《诺丁山》Notting Hill (1999)｜改编：替换具体地名使其通用"
            },
            {
              id: "t_city_q4_s2",
              tier: "C",
              en: "I know the guy at the corner shop and the woman who runs the noodle place, and that's the part of city life I'd never trade for anything.",
              zh: "我认识街角小店的老板和开面馆的那位大姐，这种城市生活是我拿什么都不换的。",
              chunks: ["the guy at the corner shop 街角小店老板", "run a place 经营一家店", "I'd never trade for anything 我绝不拿它换任何东西", "trade A for B 用 A 换 B"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_city_q5",
          text: "Is your city a good place for young people?",
          sentences: [
            {
              id: "t_city_q5_s1",
              tier: "B",
              en: "They say this city is only for the very rich and the very poor, but for those of us who came from somewhere else, it's a city only for the very young.",
              zh: "人们说这座城市只属于极富的人和极穷的人，但对我们这些从别处来的人来说，它是一座只属于非常年轻的人的城市。",
              chunks: ["the very rich and the very poor 极富与极穷的人", "they say 人们说、据说", "those of us who came from somewhere else 我们这些外来的", "a city only for the very young 只属于年轻人的城市"],
              source: "Joan Didion《Slouching Towards Bethlehem》(1968)｜改编：原为三句，压缩为一句"
            },
            {
              id: "t_city_q5_s2",
              tier: "B",
              en: "The people here are as tough and romantic as the city they live in, and that's exactly what I love about this place.",
              zh: "这里的人和这座城市一样既硬朗又浪漫，而这正是我最喜欢这个地方的地方。",
              chunks: ["as tough and romantic as 和……一样硬朗又浪漫", "the city they live in 他们居住的城市", "that's exactly what I love about 这正是我喜欢……的地方"],
              source: "电影《曼哈顿》Manhattan (1979)｜改编：原句 He was as tough and romantic as the city he loved，扩展为复合句"
            }
          ]
        },
        {
          id: "t_city_q6",
          text: "Have you always lived in the same place?",
          sentences: [
            {
              id: "t_city_q6_s1",
              tier: "B",
              en: "I told him I'd stay in this city for just six months, but as it turned out, I stayed eight years and I'm still here.",
              zh: "我告诉过他，我只在这座城市待六个月，但结果呢，我待了八年，而且现在还在这儿。",
              chunks: ["stay for just six months 只待六个月", "as it turned out 结果、事实证明", "I'm still here 我还在这儿"],
              source: "Joan Didion《Slouching Towards Bethlehem》(1968)｜改编：合并两句并替换地名"
            },
            {
              id: "t_city_q6_s2",
              tier: "C",
              en: "I've moved three times in the last five years, and every time I tell myself it's the last move, even though I know it probably isn't.",
              zh: "过去五年我搬了三次家，每次我都告诉自己这是最后一次搬家，尽管我心里知道大概不是。",
              chunks: ["move three times 搬三次家", "in the last five years 过去五年里", "every time I tell myself 每次我告诉自己", "it's the last move 这是最后一次搬家"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_food",
      name: "食物与饮食",
      nameEn: "Food & eating out",
      questions: [
        {
          id: "t_food_q1",
          text: "Do you like cooking?",
          sentences: [
            {
              id: "t_food_q1_s1",
              tier: "A",
              en: "I may not do everything great in my life, but I'm good at this. I manage to touch people's lives with what I do, and I want to share this with you.",
              zh: "我这辈子可能不是什么都做得好，但这件事我擅长。我用手里做的事触碰到别人的生活，而且我想把这份东西分享给你。",
              chunks: ["may not do everything great 不是什么都做得好", "be good at this 擅长这个", "touch people's lives 触动别人的生活", "share this with you 和你分享这个"],
              source: "电影《落魄大厨》Chef (2014)，Carl Casper 台词｜原句"
            },
            {
              id: "t_food_q1_s2",
              tier: "B",
              en: "I'm probably the only person I know in this city who thinks shopping for food is as much fun as buying a dress.",
              zh: "我大概是我在这座城市认识的人里，唯一一个觉得买菜和买裙子一样好玩的人。",
              chunks: ["the only person I know who 我认识的唯一一个……的人", "shopping for food 买菜、采购食材", "as much fun as 和……一样好玩", "buy a dress 买条裙子"],
              source: "电影《朱莉与朱莉娅》Julie & Julia (2009)｜改编：替换地点使其通用"
            }
          ]
        },
        {
          id: "t_food_q2",
          text: "Do you prefer eating out or cooking at home?",
          sentences: [
            {
              id: "t_food_q2_s1",
              tier: "B",
              en: "The world is often unkind to new talent and new creations, so I always root for the new place that just opened around the corner.",
              zh: "这个世界对新人和新东西往往不太友善，所以我总是力挺刚在街角开张的那家新店。",
              chunks: ["be unkind to 对……不友善", "new talent and new creations 新人与新作品", "root for 支持、力挺", "around the corner 在街角、就在附近"],
              source: "电影《美食总动员》Ratatouille (2007)，Anton Ego 独白｜改编：接一句口语化延伸"
            },
            {
              id: "t_food_q2_s2",
              tier: "C",
              en: "I eat out most nights because I'm too tired to cook, but I always feel a bit guilty about how much I spend on it.",
              zh: "我大多数晚上都在外面吃，因为我累得不想做饭，但我总是对在这上面花的钱有点心虚。",
              chunks: ["eat out 在外面吃", "too tired to cook 累得不想做饭", "most nights 大多数晚上", "feel guilty about 对……感到心虚"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_food_q3",
          text: "Is there any food you could never give up?",
          sentences: [
            {
              id: "t_food_q3_s1",
              tier: "A",
              en: "The day there's a meteorite heading toward the earth and we have thirty days to live, I am going to spend it eating butter.",
              zh: "如果有一天陨石飞向地球、我们还剩三十天可活，我要把这段时间花在吃黄油上。",
              chunks: ["a meteorite heading toward the earth 飞向地球的陨石", "have thirty days to live 还剩三十天可活", "spend it doing 把这段时间花在做……", "could never give up 永远戒不掉"],
              source: "电影《朱莉与朱莉娅》Julie & Julia (2009)，Julie Powell 台词｜原句"
            },
            {
              id: "t_food_q3_s2",
              tier: "B",
              en: "My rule is simple: don't eat anything your great-grandmother wouldn't recognize as food, because there are way too many food-like items in the supermarket.",
              zh: "我的原则很简单：别吃你曾祖母认不出是食物的东西，因为超市里“像食物的东西”实在太多了。",
              chunks: ["my rule is simple 我的原则很简单", "wouldn't recognize as food 认不出是食物", "food-like items 像食物的东西", "way too many 实在太多了"],
              source: "Michael Pollan《In Defense of Food》(2008)｜改编：原为两句，压缩为一句并口语化"
            }
          ]
        },
        {
          id: "t_food_q4",
          text: "Do you care about eating healthy?",
          sentences: [
            {
              id: "t_food_q4_s1",
              tier: "B",
              en: "Eat food, not too much, mostly plants — that's the whole philosophy, and it's short enough for me to actually remember.",
              zh: "吃真正的食物，别吃太多， mostly 吃植物——这就是全部的理念，而且短到我确实记得住。",
              chunks: ["eat food, not too much, mostly plants 吃真食物、别太多、多为植物", "the whole philosophy 全部的理念", "short enough to 短到足以……", "actually remember 真的记得住"],
              source: "Michael Pollan《In Defense of Food》(2008)｜改编：原口号为三短句，加一句口语收尾"
            },
            {
              id: "t_food_q4_s2",
              tier: "B",
              en: "Your body is not a temple, it's an amusement park, and I'd rather enjoy the ride than count every single calorie.",
              zh: "你的身体不是神庙，是游乐园，我宁愿好好享受这一趟，也不想去数每一卡路里。",
              chunks: ["not a temple, an amusement park 不是神庙，是游乐园", "enjoy the ride 享受这一程", "would rather ... than 宁愿……也不", "count calories 数卡路里"],
              source: "Anthony Bourdain（美食作家、主持人，多次公开表述）｜改编：前两句为原句，后接一句口语补充"
            }
          ]
        },
        {
          id: "t_food_q5",
          text: "Do you like trying new or unfamiliar food?",
          sentences: [
            {
              id: "t_food_q5_s1",
              tier: "B",
              en: "Not everyone can become a great artist, but a great artist can come from anywhere, and that's why I'll eat anywhere once.",
              zh: "不是每个人都能成为伟大的艺术家，但伟大的艺术家可能来自任何地方，所以我任何馆子都愿意试一次。",
              chunks: ["come from anywhere 来自任何地方", "I'll eat anywhere once 哪儿我都愿意试一次", "that's why 这就是为什么"],
              source: "电影《美食总动员》Ratatouille (2007)，Anton Ego 独白｜改编：补一句口语收尾"
            },
            {
              id: "t_food_q5_s2",
              tier: "C",
              en: "I'll try anything once as long as it doesn't move, and honestly some of the best meals I've had were places I almost walked past.",
              zh: "只要它不会动，我什么都愿意试一次，说实话我吃过最棒的几顿饭，都是在那些我差点走过头的店里。",
              chunks: ["try anything once 什么都试一次", "as long as 只要", "some of the best meals I've had 我吃过最棒的几顿", "walk past 走过、错过"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_food_q6",
          text: "What makes a meal memorable for you?",
          sentences: [
            {
              id: "t_food_q6_s1",
              tier: "B",
              en: "Last night I experienced something new: an extraordinary meal from a singularly unexpected source, and it rocked me to my core.",
              zh: "昨晚我体验到了某种全新的东西：一顿来自极其意想不到之人的非凡饭菜，它把我的内心彻底撼动了。",
              chunks: ["experience something new 体验到新东西", "an extraordinary meal 一顿非凡的饭", "a singularly unexpected source 极其意想不到的出处", "rock me to my core 深深震撼我"],
              source: "电影《美食总动员》Ratatouille (2007)，Anton Ego 独白｜改编：原为多句，合并为一句"
            },
            {
              id: "t_food_q6_s2",
              tier: "C",
              en: "For me a meal is memorable when the people at the table are in no hurry to leave, and nobody looks at their phone once.",
              zh: "对我来说，一顿饭之所以难忘，是因为桌边的人都不急着走，而且没有一个人看手机。",
              chunks: ["be memorable 令人难忘", "the people at the table 桌边的人", "in no hurry to leave 不着急走", "look at one's phone 看手机"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_work",
      name: "工作与职场",
      nameEn: "Work & career",
      questions: [
        {
          id: "t_work_q1",
          text: "Do you enjoy your job?",
          sentences: [
            {
              id: "t_work_q1_s1",
              tier: "B",
              en: "The thing is, it's not that I'm lazy, it's that I just don't care, because even if I work my ass off, I don't see another dime.",
              zh: "问题是，我不是懒，我是真的不在乎，因为就算我拼死拼活地干，我也多拿不到一毛钱。",
              chunks: ["the thing is 问题是", "it's not that ... it's that ... 不是……而是……", "work my ass off 拼死拼活地干", "not see another dime 多拿不到一分钱"],
              source: "电影《上班一条虫》Office Space (1999)，Peter Gibbons 台词｜改编：删去人名与公司名，合并为一句"
            },
            {
              id: "t_work_q1_s2",
              tier: "A",
              en: "Let me know when your whole life goes up in smoke — that means it's time for a promotion.",
              zh: "等你的整个生活都烧成灰的时候记得告诉我——那就意味着你该升职了。",
              chunks: ["let me know when ……的时候告诉我", "go up in smoke 化为乌有、彻底完蛋", "that means 那意味着", "it's time for a promotion 该升职了"],
              source: "电影《穿普拉达的女王》The Devil Wears Prada (2006)｜原句"
            }
          ]
        },
        {
          id: "t_work_q2",
          text: "What matters most to you when choosing a job?",
          sentences: [
            {
              id: "t_work_q2_s1",
              tier: "B",
              en: "Our guidance counselor used to ask what you would do if you had a million dollars and didn't have to work, and whatever you'd say was supposed to be your career.",
              zh: "我们的升学指导老师以前总问，如果你有一百万、又不用工作，你会做什么，而你随口说的那个答案，就被当成是你该从事的职业。",
              chunks: ["used to ask 以前总问", "if you had a million dollars 如果你有一百万", "didn't have to work 不用工作", "be supposed to be your career 本该是你的职业"],
              source: "电影《上班一条虫》Office Space (1999)｜改编：原为两句，合并为复合句"
            },
            {
              id: "t_work_q2_s2",
              tier: "C",
              en: "I'd take a lower salary for a job I actually care about, because I've seen what doing something meaningless for money does to people.",
              zh: "如果是我真正在乎的工作，我愿意拿更低的薪水，因为我见过为了钱做毫无意义的事会把人变成什么样。",
              chunks: ["take a lower salary 接受更低的薪水", "a job I actually care about 我真正在乎的工作", "doing something meaningless 做毫无意义的事", "what it does to people 它会把人变成什么样"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_work_q3",
          text: "How do you deal with pressure or a difficult boss at work?",
          sentences: [
            {
              id: "t_work_q3_s1",
              tier: "B",
              en: "I have eight different bosses right now, which means that when I make a mistake, eight different people come by to tell me about it.",
              zh: "我现在有八个不同的老板，也就是说，我一犯错，就会有八个不同的人过来跟我说这件事。",
              chunks: ["which means that 也就是说", "make a mistake 犯错", "come by 过来、顺路来访", "tell me about it 跟我说这件事"],
              source: "电影《上班一条虫》Office Space (1999)｜改编：原句改为 which means 从句"
            },
            {
              id: "t_work_q3_s2",
              tier: "C",
              en: "I've learned to write everything down after a meeting, because otherwise people remember the conversation completely differently the next day.",
              zh: "我学会了开完会就把所有东西记下来，不然第二天大家记得的版本会完全不同。",
              chunks: ["write everything down 把一切都记下来", "after a meeting 开完会后", "otherwise 不然", "remember it completely differently 记得完全不同"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_work_q4",
          text: "Have you ever thought about changing careers or starting your own thing?",
          sentences: [
            {
              id: "t_work_q4_s1",
              tier: "B",
              en: "You have a dream, you got to protect it, because people can't do something themselves, so they wanna tell you you can't do it.",
              zh: "你有梦想，就得去守护它，因为有些人自己做不到，所以他们就想告诉你，你也做不到。",
              chunks: ["have a dream 有梦想", "protect it 守护它", "can't do something themselves 他们自己办不到", "tell you you can't do it 告诉你说你不行"],
              source: "电影《当幸福来敲门》The Pursuit of Happyness (2006)｜改编：原为两句，合并为一句"
            },
            {
              id: "t_work_q4_s2",
              tier: "B",
              en: "We don't have a lot of time on this earth, and I don't think we were meant to spend it this way.",
              zh: "我们在这世上的时间本来就不多，而且我不认为我们是注定要这样度过它的。",
              chunks: ["a lot of time on this earth 在世上的很多时间", "be meant to 注定要、本该", "spend it this way 这样度过", "I don't think 我认为……不"],
              source: "电影《上班一条虫》Office Space (1999)｜改编：删去人名并合并"
            }
          ]
        },
        {
          id: "t_work_q5",
          text: "What matters more at work, talent or persistence?",
          sentences: [
            {
              id: "t_work_q5_s1",
              tier: "A",
              en: "Nothing in this world can take the place of good old persistence — talent won't, and nothing is more common than unsuccessful men with talent.",
              zh: "这世上没有什么东西能取代那种老派的坚持——天赋不行，而且最常见不过的，就是那些有天赋却一事无成的人。",
              chunks: ["take the place of 取代", "good old persistence 老派的坚持、死磕", "talent won't 天赋不行", "unsuccessful men with talent 有天赋却没成事的人"],
              source: "电影《大创业家》The Founder (2016)，Ray Kroc 念出 Calvin Coolidge 名言｜原句"
            },
            {
              id: "t_work_q5_s2",
              tier: "C",
              en: "I've watched people with half the talent outwork everyone else in the room, and in the long run they're the ones who end up leading.",
              zh: "我见过天赋只有别人一半的人比屋里所有人都更拼，而到头来，最后带队的往往是他们。",
              chunks: ["people with half the talent 天赋只有一半的人", "outwork everyone else 比谁都拼", "in the long run 到头来、从长远看", "end up leading 最后成为带队的"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_work_q6",
          text: "What advice would you give someone starting their first job?",
          sentences: [
            {
              id: "t_work_q6_s1",
              tier: "B",
              en: "Welcome to the real world — it sucks, but you're gonna love it, so give yourself a year before you decide.",
              zh: "欢迎来到现实世界——它糟透了，但你会爱上它的，所以给自己一年时间再做决定。",
              chunks: ["the real world 现实世界", "it sucks 它糟透了", "you're gonna love it 你会爱上它的", "give yourself a year 给自己一年时间"],
              source: "美剧《老友记》Friends S1E1 (1994)，Monica 台词｜改编：补 so 从句"
            },
            {
              id: "t_work_q6_s2",
              tier: "C",
              en: "Nobody expects you to know everything in your first year, so ask the stupid questions now while asking them is still free.",
              zh: "没人在你第一年就指望你什么都知道，所以趁现在问蠢问题还不花钱，赶紧问。",
              chunks: ["expect you to know everything 指望你什么都知道", "in your first year 在你的第一年", "ask the stupid questions 问那些蠢问题", "while it's still free 趁它还不要代价"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_movie",
      name: "电影与娱乐",
      nameEn: "Movies & entertainment",
      questions: [
        {
          id: "t_movie_q1",
          text: "Are you a movie person? Do you watch a lot of films?",
          sentences: [
            {
              id: "t_movie_q1_s1",
              tier: "B",
              en: "Whatever you end up doing, love it the way you loved the projection booth when you were a little squirt.",
              zh: "不管你最后去做什么，都要用你小时候爱那间放映室的方式去爱它。",
              chunks: ["whatever you end up doing 不管你最后做什么", "love it the way you loved 像当初爱……那样去爱", "a little squirt 小屁孩（亲昵）", "end up doing 最终做了"],
              source: "《天堂电影院》Cinema Paradiso (1988)，Alfredo 台词｜改编：原为两句，合并为一句"
            },
            {
              id: "t_movie_q1_s2",
              tier: "C",
              en: "I'd never call myself a film buff, but a good movie at the end of a hard day works better for me than anything else.",
              zh: "我可不敢自称影迷，但辛苦一天结束时，一部好片子对我比什么都管用。",
              chunks: ["call oneself a film buff 自称影迷", "at the end of a hard day 辛苦一天结束时", "works better for me than 对我比……更管用", "anything else 别的任何东西"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_movie_q2",
          text: "Why do you think people keep going to the movies?",
          sentences: [
            {
              id: "t_movie_q2_s1",
              tier: "A",
              en: "If you've ever wondered where your dreams come from, you look around... this is where they're made.",
              zh: "你要是好奇过梦是从哪儿来的，看看周围——它们就是在这儿被造出来的。",
              chunks: ["if you've ever wondered 如果你曾好奇过", "where your dreams come from 梦从哪儿来", "look around 看看四周", "this is where they're made 它们就是在这里诞生的"],
              source: "《雨果》Hugo (2011)，Georges Méliès 台词｜原句"
            },
            {
              id: "t_movie_q2_s2",
              tier: "A",
              en: "Of all the arts, movies are the most powerful aid to empathy, and good ones make us into better people.",
              zh: "在所有艺术里，电影最能帮人长出同理心，而好电影会把我们变成更好的人。",
              chunks: ["of all the arts 在所有艺术中", "the most powerful aid to 对……最有力的助推", "aid to empathy 同理心的助力", "make us into better people 让我们成为更好的人"],
              source: "Roger Ebert（影评人，公开表述）｜原句"
            }
          ]
        },
        {
          id: "t_movie_q3",
          text: "Do you prefer watching movies at home or in a cinema?",
          sentences: [
            {
              id: "t_movie_q3_s1",
              tier: "B",
              en: "I just met a wonderful new man, and he's fictional, but you can't have everything.",
              zh: "我刚认识了一个特别好的新男人，他虽然是虚构的，但人嘛，不可能什么都占全。",
              chunks: ["a wonderful new man 一个特别好的新男人", "he's fictional 他是虚构的", "you can't have everything 人不能什么都占全", "just met 刚认识"],
              source: "《开罗紫玫瑰》The Purple Rose of Cairo (1985)，Cecilia 台词｜改编：原为感叹号断句，改为逗号连接"
            },
            {
              id: "t_movie_q3_s2",
              tier: "C",
              en: "I still think a cinema beats my couch every time, because nobody pauses the movie to check their phone in the dark.",
              zh: "我还是觉得电影院每次都胜过我家沙发，因为在黑灯里没人会暂停电影去看手机。",
              chunks: ["beat my couch 胜过我窝在沙发上", "every time 每次都", "pause the movie 暂停电影", "check their phone 看手机"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_movie_q4",
          text: "What kind of movies do you usually go for?",
          sentences: [
            {
              id: "t_movie_q4_s1",
              tier: "A",
              en: "People will want to go to it because you're passionate about it, and people love what other people are passionate about.",
              zh: "人们会想去看，因为你对它上心，而人就是会被别人的热情感染。",
              chunks: ["want to go to it 想去看它", "be passionate about 对……充满热情", "people love what other people are passionate about 人会爱上别人的热情所在"],
              source: "《爱乐之城》La La Land (2016)，Mia 台词｜原句"
            },
            {
              id: "t_movie_q4_s2",
              tier: "A",
              en: "The only true currency in this bankrupt world is what you share with someone else when you're uncool.",
              zh: "在这个早已破产的世界里，唯一真正值钱的货币，是你卸下防备时和别人交换的那点真心。",
              chunks: ["the only true currency 唯一真正的通货", "in this bankrupt world 在这个破产的世界里", "share with someone else 与他人分享", "when you're uncool 当你不那么体面的时候"],
              source: "《几乎成名》Almost Famous (2000)，Lester Bangs 台词｜原句"
            }
          ]
        },
        {
          id: "t_movie_q5",
          text: "Has a movie ever really moved you or changed something for you?",
          sentences: [
            {
              id: "t_movie_q5_s1",
              tier: "A",
              en: "We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars.",
              zh: "我们都是被电视喂大的，被教着相信有一天我们都会成为百万富翁、银幕之神和摇滚明星。",
              chunks: ["be raised on television 被电视喂养长大", "to believe that 相信……", "one day we'd all be 有天我们都会成为", "movie gods and rock stars 银幕之神与摇滚明星"],
              source: "《搏击俱乐部》Fight Club (1999)，Tyler Durden 台词｜原句"
            },
            {
              id: "t_movie_q5_s2",
              tier: "C",
              en: "There are maybe three movies that changed how I see my own family, and I still rewatch one of them every couple of years.",
              zh: "大概有三部电影改变了我看自家人的方式，其中一部我每隔几年还会重看一遍。",
              chunks: ["change how I see 改变我看待……的方式", "my own family 我自己的家人", "rewatch 重看", "every couple of years 每隔几年"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_movie_q6",
          text: "Do you think movies and TV shape how people see real life?",
          sentences: [
            {
              id: "t_movie_q6_s1",
              tier: "A",
              en: "We accept the reality of the world with which we're presented. It's as simple as that.",
              zh: "我们接受呈现在我们面前的那个世界，就这么简单。",
              chunks: ["accept the reality 接受现实", "the world with which we're presented 被呈现在我们面前的世界", "as simple as that 就这么简单", "be presented with 被呈现"],
              source: "《楚门的世界》The Truman Show (1998)，Christof 台词｜原句"
            },
            {
              id: "t_movie_q6_s2",
              tier: "C",
              en: "I don't think a movie turns anyone into a bad person, but it definitely tells you what a normal life is supposed to look like.",
              zh: "我不觉得一部电影能把人变坏，但它确实在告诉你，所谓正常人生应该长什么样。",
              chunks: ["turn someone into 把某人变成", "it definitely tells you 它确实在告诉你", "what a normal life is supposed to look like 正常生活该是什么样子"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    },
    {
      id: "t_people",
      name: "人际关系与朋友",
      nameEn: "People & relationships",
      questions: [
        {
          id: "t_people_q1",
          text: "What do you look for in a partner or a close friend?",
          sentences: [
            {
              id: "t_people_q1_s1",
              tier: "A",
              en: "You're not perfect, sport, and let me save you the suspense: this girl you met, she isn't perfect either, but the question is whether or not you're perfect for each other.",
              zh: "你不完美，小子，我直接剧透：你遇上的那个姑娘也不完美。真正的问题是，你们俩合不合。",
              chunks: ["you're not perfect 你并不完美", "let me save you the suspense 我就不卖关子了", "she isn't perfect either 她也不完美", "whether or not you're perfect for each other 你们到底合不合适"],
              source: "《心灵捕手》Good Will Hunting (1997)，Sean Maguire 台词｜原句"
            },
            {
              id: "t_people_q1_s2",
              tier: "A",
              en: "I believe if there's any kind of God it wouldn't be in any of us, not you or me, but just this little space in between.",
              zh: "我相信如果有某种神，它不在我们任何一个人身上，不在你也不在我，而在我们之间那一小块空间里。",
              chunks: ["if there's any kind of God 如果有某种神明", "not you or me 不在你也不在我", "this little space in between 中间那一小块空间", "I believe 我相信"],
              source: "《爱在黎明破晓前》Before Sunrise (1995)，Céline 台词｜原句"
            }
          ]
        },
        {
          id: "t_people_q2",
          text: "Do you think long-term relationships take a lot of work?",
          sentences: [
            {
              id: "t_people_q2_s1",
              tier: "B",
              en: "So it's not gonna be easy. It's gonna be really hard. We're gonna have to work at this every day, but I want to do that because I want you.",
              zh: "所以这不会轻松，会非常难。我们得每天都在这件事上下功夫，但我愿意，因为我要的是你。",
              chunks: ["it's not gonna be easy 这不会容易", "it's gonna be really hard 会非常艰难", "work at this every day 每天都在这上面下功夫", "because I want you 因为我想要你"],
              source: "《恋恋笔记本》The Notebook (2004)，Noah 台词｜改编：统一为口语版"
            },
            {
              id: "t_people_q2_s2",
              tier: "C",
              en: "The couples I admire aren't the ones who never fight; they're the ones who keep showing up the morning after a fight.",
              zh: "我佩服的伴侣不是从不吵架的那种，而是吵完第二天早上还照样出现的那种。",
              chunks: ["the couples I admire 我佩服的伴侣", "the ones who never fight 从不吵架的那些人", "keep showing up 一直出现、一直在", "the morning after 之后的那个清晨"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_people_q3",
          text: "Is it hard for you to open up to people?",
          sentences: [
            {
              id: "t_people_q3_s1",
              tier: "A",
              en: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
              zh: "示弱不是输赢的问题，而是在你完全掌控不了结果时，仍然敢出现、敢被看见。",
              chunks: ["vulnerability is not winning or losing 示弱不是输赢", "have the courage to 有勇气去", "show up and be seen 出现并被看见", "have no control over the outcome 对结果毫无掌控"],
              source: "Brené Brown《Daring Greatly》｜原句"
            },
            {
              id: "t_people_q3_s2",
              tier: "A",
              en: "There will always be a part of me that is sloppy and dirty, but I like that, with all the other parts of myself.",
              zh: "我身上永远有那么一块又脏又乱，但我喜欢它，就像喜欢我身上其余所有部分一样。",
              chunks: ["there will always be a part of me 我永远有那么一部分", "sloppy and dirty 又乱又脏", "I like that 我喜欢那样", "all the other parts of myself 我身上其余的所有部分"],
              source: "《乌云背后的幸福线》Silver Linings Playbook (2012)，Tiffany 台词｜原句"
            }
          ]
        },
        {
          id: "t_people_q4",
          text: "Why do you think connection with other people matters so much?",
          sentences: [
            {
              id: "t_people_q4_s1",
              tier: "A",
              en: "Connection is why we're here; it is what gives purpose and meaning to our lives.",
              zh: "连接就是我们存在于此的原因，正是它赋予了我们人生的目的和意义。",
              chunks: ["connection is why we're here 连接是我们存在的理由", "it is what gives 正是它给予了", "purpose and meaning 目的与意义", "to our lives 给我们的人生"],
              source: "Brené Brown《Daring Greatly》｜原句"
            },
            {
              id: "t_people_q4_s2",
              tier: "A",
              en: "You'll have bad times, but it'll always wake you up to the good stuff you weren't paying attention to.",
              zh: "你会有难受的时候，但它总会把你叫醒，让你看见那些你一直没留意的好东西。",
              chunks: ["you'll have bad times 你会有难熬的时候", "wake you up 把你叫醒", "the good stuff 那些好东西", "you weren't paying attention to 你之前没在意的"],
              source: "《心灵捕手》Good Will Hunting (1997)，Sean Maguire 台词｜原句"
            }
          ]
        },
        {
          id: "t_people_q5",
          text: "Why do people drift apart?",
          sentences: [
            {
              id: "t_people_q5_s1",
              tier: "A",
              en: "I think that you might be so sure that you're one in a million, that sometimes you forget that out there, you're just one in 11.",
              zh: "我觉得你可能太确信自己是万里挑一了，以至于有时候忘了，在外面你不过是十一分之一。",
              chunks: ["be so sure that 太确信", "one in a million 万里挑一", "sometimes you forget 有时你会忘记", "out there 在外面、在场上"],
              source: "《足球教练》Ted Lasso (2020)，Ted 对 Jamie 台词｜原句"
            },
            {
              id: "t_people_q5_s2",
              tier: "C",
              en: "Nobody really decides to drift apart; you just stop replying for a few weeks, and then a few weeks turn into a year.",
              zh: "没人真的决定要走散，你只是几周没回消息，然后那几周就变成了一整年。",
              chunks: ["nobody really decides to 没人真的决定要", "drift apart 渐行渐远", "stop replying 不再回复", "turn into a year 变成一整年"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        },
        {
          id: "t_people_q6",
          text: "What's your idea of romance?",
          sentences: [
            {
              id: "t_people_q6_s1",
              tier: "A",
              en: "I came here tonight because when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
              zh: "我今晚来这儿是因为，当你意识到想和一个人共度余生，你就会希望余生立刻开始。",
              chunks: ["I came here tonight 我今晚来这儿", "spend the rest of your life with somebody 和某人共度余生", "the rest of your life 你的余生", "as soon as possible 越快越好"],
              source: "《当哈利遇上莎莉》When Harry Met Sally (1989)，Harry 台词｜原句"
            },
            {
              id: "t_people_q6_s2",
              tier: "C",
              en: "I don't believe in love at first sight, but I do believe you can feel within an hour whether someone is easy to be around.",
              zh: "我不信一见钟情，但我相信一个小时之内你就能感觉到，一个人是不是好相处。",
              chunks: ["believe in 相信", "love at first sight 一见钟情", "within an hour 一小时之内", "easy to be around 好相处"],
              source: "AI 仿写（非真实出处）"
            }
          ]
        }
      ]
    }
  ]
};

// 合并扩充语料（seed2/3/4 在 seed.js 之前加载）
["SEED2", "SEED3", "SEED4"].forEach(function (k) {
  if (window[k] && window[k].topics) {
    window.SEED.topics = window.SEED.topics.concat(window[k].topics);
  }
});
