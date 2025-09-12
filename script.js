// 直接把 JSON 数据嵌入
const data = {
    "years": {
        "1988": [{ id: 1, date: "1988年4月", issue: "NO.77", name: "通俗歌曲", title: "青年歌手：王菲", cover: "1988年4月_NO.77_通俗歌曲_青年歌手：王菲.jpg" }],
        "1990": [{ id: 2, date: "1990年2月", issue: "NO.2", name: "姿采", title: "封面人物：王靖雯", cover: "1990年2月_NO.2_姿采_封面人物：王靖雯.jpg" },
            { id: 3, date: "1990年4月29日至5月12日", issue: "NO.2", name: "No.1", title: "BeyondVS王靖雯對碰火花無限情趣", cover: "1990年4月29日至5月12日_NO.2_No.1_BeyondVS王靖雯對碰火花無限情趣.jpg" },
            { id: 4, date: "1990年7月12日", issue: "NO.151", name: "青春", title: "封面人物：王靖雯", cover: "1990年7月12日_NO.151_青春_封面人物：王靖雯.jpg" },
            { id: 5, date: "1990年", issue: "NO.12", name: "双周刊-AlR-WAVE", title: "王靖雯的北京故事", cover: "1990年_NO.12_双周刊-AlR-WAVE_王靖雯的北京故事.jpg" }
        ],
        "1991": [{ id: 6, date: "1991年1月10日", issue: "NO.164", name: "青春", title: "封面人物：王靖雯", cover: "1991年1月10日_NO.164_青春_封面人物：王靖雯.jpg" },
            { id: 7, date: "1991年1月11日", issue: "NO.192", name: "音樂通信", title: "封面人物：王靖雯-Shirley", cover: "1991年1月11日_NO.192_音樂通信_封面人物：王靖雯-Shirley.jpg" },
            { id: 8, date: "1991年4月", issue: "NO.76", name: "中外電視", title: "封面人物：王靖雯", cover: "1991年4月_NO.76_中外電視_封面人物：王靖雯.jpg" },
            { id: 9, date: "1991年8月10日", issue: "NO.32", name: "100分", title: "Bryong+王靖雯绅士淑女的化身", cover: "1991年8月10日_NO.32_100分_Bryong+王靖雯绅士淑女的化身.jpg" }
        ],
        "1992": [{ id: 10, date: "1992年11月", issue: "NO.195", name: "號外", title: "憑感覺·王靖雯", cover: "1992年11月_NO.195_號外_憑感覺·王靖雯.jpg" },
            { id: 11, date: "1992年12月8日至14日", issue: "NO.985", name: "新電視", title: "王靖雯的真我個性", cover: "1992年12月8日至14日_NO.985_新電視_王靖雯的真我個性.jpg" },
            { id: 12, date: "1992年8月20日", issue: "NO.206", name: "青春", title: "封面人物：王靖雯", cover: "1992年8月20日_NO.206_青春_封面人物：王靖雯.jpg" },
            { id: 13, date: "1992年8月8日", issue: "NO.158", name: "100分", title: "王靖雯浪漫风暴", cover: "1992年8月8日_NO.158_100分_王靖雯浪漫风暴.jpg" }
        ],
        "1993": [{ id: 14, date: "1993年10月1日", issue: "NO.60", name: "音樂雜誌", title: "菲飛非", cover: "1993年10月1日_NO.60_音樂雜誌_菲飛非.jpg" },
            { id: 15, date: "1993年10月7日至15日", issue: "NO.1353", name: "香港電視", title: "FAYE王靖雯難相處？", cover: "1993年10月7日至15日_NO.1353_香港電視_FAYE王靖雯難相處？.jpg" },
            { id: 16, date: "1993年11月20日至26日", issue: "NO.969", name: "大衆電視", title: "王靖雯", cover: "1993年11月20日至26日_NO.969_大衆電視_王靖雯.jpg" },
            { id: 17, date: "1993年11月30日至12月6日", issue: "NO.955", name: "金電視", title: "王靖雯極端的愛情", cover: "1993年11月30日至12月6日_NO.955_金電視_王靖雯極端的愛情.jpg" },
            { id: 18, date: "1993年12月25日", issue: "NO.795", name: "100分", title: "王靖雯：忘掉你像忘掉我？", cover: "1993年12月25日_NO.795_100分_王靖雯：忘掉你像忘掉我？.jpg" },
            { id: 19, date: "1993年3月11日", issue: "NO.20", name: "東周刊", title: "王靖雯都市神秘女郎", cover: "1993年3月11日_NO.20_東周刊_王靖雯都市神秘女郎.jpg" },
            { id: 20, date: "1993年3月16日至22日", issue: "NO.918", name: "金電視", title: "王靖雯刻意營造不經意美", cover: "1993年3月16日至22日_NO.918_金電視_王靖雯刻意營造不經意美.jpg" },
            { id: 21, date: "1993年3月27日至4月2日", issue: "NO.935", name: "大衆電視", title: "王靖雯：自信女天王！", cover: "1993年3月27日至4月2日_NO.935_大衆電視_王靖雯：自信女天王！.jpg" },
            { id: 22, date: "1993年5月4日至10日", issue: "NO.925", name: "金電視", title: "王靖雯勸歌迷珍惜光陰", cover: "1993年5月4日至10日_NO.925_金電視_王靖雯勸歌迷珍惜光陰.jpg" },
            { id: 23, date: "1993年6月8日至14日", issue: "NO.930", name: "金電視", title: "王靖雯自認蠢鈍派", cover: "1993年6月8日至14日_NO.930_金電視_王靖雯自認蠢鈍派.jpg" },
            { id: 24, date: "1993年7月27日至8月2日", issue: "NO.937", name: "金電視", title: "王靖雯飘忽的世界", cover: "1993年7月27日至8月2日_NO.937_金電視_王靖雯飘忽的世界.jpg" },
            { id: 25, date: "1993年7月", issue: "NO.7", name: "电影世界", title: "封底明星：王靖雯", cover: "1993年7月_NO.7_电影世界_封底明星：王靖雯.jpg" },
            { id: 26, date: "1993年8月16日", issue: "NO.202", name: "選擇", title: "王靖雯", cover: "1993年8月16日_NO.202_選擇_王靖雯.jpg" },
            { id: 27, date: "1993年", issue: "NO.16", name: "流行极品", title: "封底人物：王菲", cover: "1993年_NO.16_流行极品_封底人物：王菲.jpg" },
            { id: 28, date: "1993年", issue: "NO.42", name: "娛樂天下", title: "王靖雯拒拍寫真", cover: "1993年_NO.42_娛樂天下_王靖雯拒拍寫真.jpg" }
        ],
        "1994": [{ id: 29, date: "1994年10月", issue: "NO.498", name: "姊妹", title: "王靖雯我行我素", cover: "1994年10月_NO.498_姊妹_王靖雯我行我素.jpg" },
            { id: 30, date: "1994年12月19日", issue: "NO.66", name: "香港风情", title: "王靖雯", cover: "1994年12月19日_NO.66_香港风情_王靖雯.jpg" },
            { id: 31, date: "1994年12月31日", issue: "NO.65", name: "大公周刊", title: "王菲演唱會直擊報道", cover: "1994年12月31日_NO.65_大公周刊_王菲演唱會直擊報道.jpg" },
            { id: 32, date: "1994年12月", issue: "NO.219", name: "號外", title: "真人真事菲感覺", cover: "1994年12月_NO.219_號外_真人真事菲感覺.jpg" },
            { id: 33, date: "1994年1月23日", issue: "NO.487", name: "生活電視", title: "王靖雯大露底褲給歌迷看", cover: "1994年1月23日_NO.487_生活電視_王靖雯大露底褲給歌迷看.jpg" },
            { id: 34, date: "1994年1月8日至14日", issue: "NO.976", name: "大衆電視", title: "王菲：望派出位成績表！！", cover: "1994年1月8日至14日_NO.976_大衆電視_王菲：望派出位成績表！！.jpg" },
            { id: 35, date: "1994年1月", issue: "NO.116", name: "良友", title: "王靖雯", cover: "1994年1月_NO.116_良友_王靖雯.jpg" },
            { id: 36, date: "1994年2月4日", issue: "NO.69", name: "音樂雜誌", title: "感覺王菲", cover: "1994年2月4日_NO.69_音樂雜誌_感覺王菲.jpg" },
            { id: 37, date: "1994年3月18日", issue: "NO.72", name: "音樂雜誌", title: "王菲藍色的天空", cover: "1994年3月18日_NO.72_音樂雜誌_王菲藍色的天空.jpg" },
            { id: 38, date: "1994年3月1日", issue: "NO.3", name: "当代歌坛", title: "封面人物：王靖雯", cover: "1994年3月1日_NO.3_当代歌坛_封面人物：王靖雯.jpg" },
            { id: 39, date: "1994年3月5日", issue: "NO.200", name: "100分", title: "王菲+軟硬", cover: "1994年3月5日_NO.200_100分_王菲+軟硬.jpg" },
            { id: 40, date: "1994年4月16日", issue: "NO.203", name: "100分", title: "Faye-Wong", cover: "1994年4月16日_NO.203_100分_Faye-Wong.jpg" },
            { id: 41, date: "1994年4月22日", issue: "NO.157", name: "少女", title: "封面人物：王菲", cover: "1994年4月22日_NO.157_少女_封面人物：王菲.jpg" },
            { id: 42, date: "1994年5月", issue: "NO.5", name: "ELLE-TAIWAN", title: "王靖雯距離", cover: "1994年5月_NO.5_ELLE-TAIWAN_王靖雯距離.jpg" },
            { id: 43, date: "1994年8月19日", issue: "NO.83", name: "音樂雜誌", title: "菲一人感受", cover: "1994年8月19日_NO.83_音樂雜誌_菲一人感受.jpg" },
            { id: 44, date: "1994年8月27日", issue: "NO.565", name: "城市周刊", title: "王靖雯隨時推出樂壇", cover: "1994年8月27日_NO.565_城市周刊_王靖雯隨時推出樂壇.jpg" },
            { id: 45, date: "1994年8月6日", issue: "NO.211", name: "100分", title: "劉德華·王靖雯的睡衣派對", cover: "1994年8月6日_NO.211_100分_劉德華·王靖雯的睡衣派對.jpg" },
            { id: 46, date: "1994年8月", issue: "NO.117", name: "COSMOPPLITAN", title: "我走我路：王靖雯", cover: "1994年8月_NO.117_COSMOPPLITAN_我走我路：王靖雯.jpg" },
            { id: 47, date: "1994年9月11日至17日", issue: "NO.298", name: "廣東電視周刊", title: "王靖雯公开恋情", cover: "1994年9月11日至17日_NO.298_廣東電視周刊_王靖雯公开恋情.jpg" },
            { id: 48, date: "1994年9月7日", issue: "NO.70", name: "娛樂天下", title: "王菲論盡樂壇得失", cover: "1994年9月7日_NO.70_娛樂天下_王菲論盡樂壇得失.jpg" },
            { id: 49, date: "1994年", issue: "NO.10", name: "SNAPPP-照玩雜誌", title: "封面人物：王菲", cover: "1994年_NO.10_SNAPPP-照玩雜誌_封面人物：王菲.jpg" },
            { id: 50, date: "1994年", issue: "VOL.36", name: "FAN-CLUB", title: "只因妳是Faye", cover: "1994年_VOL.36_FAN-CLUB_只因妳是Faye.jpg" }
        ],
        "1995": [{ id: 51, date: "1995年10月11日", issue: "NO.355", name: "廣東電視周刊", title: "封底人物：王靖雯", cover: "1995年10月11日_NO.355_廣東電視周刊_封底人物：王靖雯.jpg" },
            { id: 52, date: "1995年11月19日", issue: "NO.582", name: "生活电视", title: "這次菲常好笑容，全拜大馬人生性", cover: "1995年11月19日_NO.582_生活电视_這次菲常好笑容，全拜大馬人生性.jpg" },
            { id: 53, date: "1995年11月5日", issue: "NO.580", name: "生活电视", title: "封面人物：王菲", cover: "1995年11月5日_NO.580_生活电视_封面人物：王菲.jpg" },
            { id: 54, date: "1995年1月14日至21日", issue: "NO.223", name: "8eightdays", title: "Faye-Wong", cover: "1995年1月14日至21日_NO.223_8eightdays_Faye-Wong.jpg" },
            { id: 55, date: "1995年1月19日至27日", issue: "NO.1420", name: "香港電視", title: "王靖雯劉德華樂壇大豐收", cover: "1995年1月19日至27日_NO.1420_香港電視_王靖雯劉德華樂壇大豐收.jpg" },
            { id: 56, date: "1995年1月7日至14日", issue: "NO.730", name: "电视广播周刊", title: "王靖雯拒绝再玩", cover: "1995年1月7日至14日_NO.730_电视广播周刊_王靖雯拒绝再玩.jpg" },
            { id: 57, date: "1995年2月18日", issue: "NO.85", name: "Young-Express-偶像快報", title: "王菲志不在香港", cover: "1995年2月18日_NO.85_Young-Express-偶像快報_王菲志不在香港.jpg" },
            { id: 58, date: "1995年2月1日", issue: "NO.701", name: "清新周刊", title: "王菲追求真愛，未必嫁給竇唯", cover: "1995年2月1日_NO.701_清新周刊_王菲追求真愛，未必嫁給竇唯.jpg" },
            { id: 59, date: "1995年2月20日至26日", issue: "NO.1", name: "TV家庭", title: "王靖雯熱度竄升", cover: "1995年2月20日至26日_NO.1_TV家庭_王靖雯熱度竄升.jpg" },
            { id: 60, date: "1995年2月", issue: "NO.96", name: "缤纷人生", title: "王菲", cover: "1995年2月_NO.96_缤纷人生_王菲.jpg" },
            { id: 61, date: "1995年3月19日至25日", issue: "NO.325", name: "廣東電視周刊", title: "王靖雯成张艺谋的新焦点", cover: "1995年3月19日至25日_NO.325_廣東電視周刊_王靖雯成张艺谋的新焦点.jpg" },
            { id: 62, date: "1995年3月9日至22日", issue: "NO.415", name: "電影双周刊", title: "王靖雯既平凡又脱俗", cover: "1995年3月9日至22日_NO.415_電影双周刊_王靖雯既平凡又脱俗.jpg" },
            { id: 63, date: "1995年3月", issue: "NO.89", name: "音像世界", title: "封面人物：王菲", cover: "1995年3月_NO.89_音像世界_封面人物：王菲.jpg" },
            { id: 64, date: "1995年3月", issue: "VOL.3", name: "IDOL-Express", title: "王菲", cover: "1995年3月_VOL.3_IDOL-Express_王菲.jpg" },
            { id: 65, date: "1995年4月11日至17日", issue: "NO.1026", name: "金電視", title: "王菲頻道與衆不同", cover: "1995年4月11日至17日_NO.1026_金電視_王菲頻道與衆不同.jpg" },
            { id: 66, date: "1995年5月", issue: "NO.2", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "1995年5月_NO.2_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 67, date: "1995年6月", issue: "NO.506", name: "姊妹", title: "王靖雯奇裝異服肯定", cover: "1995年6月_NO.506_姊妹_王靖雯奇裝異服肯定.jpg" },
            { id: 68, date: "1995年7月15日至22日", issue: "NO.757", name: "电视广播周刊", title: "邓丽君·王靖雯心灵相通", cover: "1995年7月15日至22日_NO.757_电视广播周刊_邓丽君·王靖雯心灵相通.jpg" },
            { id: 69, date: "1995年7月1日", issue: "NO.7", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "1995年7月1日_NO.7_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 70, date: "1995年9月", issue: "NO.129", name: "中外電視", title: "封底人物：王菲", cover: "1995年9月_NO.129_中外電視_封底人物：王菲.jpg" }
        ],
        "1996": [{ id: 71, date: "1996年10月14日", issue: "NO.148", name: "TIME", title: "The-Divas-of-Pop", cover: "1996年10月14日_NO.148_TIME_The-Divas-of-Pop.jpg" },
            { id: 72, date: "1996年11月22日", issue: "NO.230", name: "錄影偶像", title: "王菲", cover: "1996年11月22日_NO.230_錄影偶像_王菲.jpg" },
            { id: 73, date: "1996年12月", issue: "NO.110", name: "中國銀幕", title: "王菲：爱在北京", cover: "1996年12月_NO.110_中國銀幕_王菲：爱在北京.jpg" },
            { id: 74, date: "1996年12月", issue: "NO.12", name: "TIME", title: "迷樣的王菲", cover: "1996年12月_NO.12_TIME_迷樣的王菲.jpg" },
            { id: 75, date: "1996年1月17日", issue: "NO.6", name: "7天华讯", title: "北京来的灰姑娘：王菲", cover: "1996年1月17日_NO.6_7天华讯_北京来的灰姑娘：王菲.jpg" },
            { id: 76, date: "1996年1月", issue: "NO.3", name: "上海电视", title: "王靖雯再登香港歌后座", cover: "1996年1月_NO.3_上海电视_王靖雯再登香港歌后座.jpg" },
            { id: 77, date: "1996年2月17日", issue: "NO.X", name: "M-magazine-音樂雜誌", title: "Faye", cover: "1996年2月17日_NO.X_M-magazine-音樂雜誌_Faye.jpg" },
            { id: 78, date: "1996年2月", issue: "NO.100", name: "音像世界", title: "封面人物：王菲", cover: "1996年2月_NO.100_音像世界_封面人物：王菲.jpg" },
            { id: 79, date: "1996年4月10日", issue: "NO.271", name: "風采", title: "封面人物：王菲", cover: "1996年4月10日_NO.271_風采_封面人物：王菲.jpg" },
            { id: 80, date: "1996年5月1日", issue: "NO.12", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "1996年5月1日_NO.12_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 81, date: "1996年6月12日", issue: "NO.1493", name: "香港電視", title: "王菲九月天裏高人浮躁", cover: "1996年6月12日_NO.1493_香港電視_王菲九月天裏高人浮躁.jpg" }
        ],
        "1997": [{ id: 82, date: "1997年10月", issue: "NO.10", name: "Enterainment", title: "「菲」常幸運", cover: "1997年10月_NO.10_Enterainment_「菲」常幸運.jpg" },
            { id: 83, date: "1997年10月", issue: "NO.10", name: "Marie-Claire-瑪利嘉兒-HONGKONG", title: "親密戰友話王菲", cover: "1997年10月_NO.10_Marie-Claire-瑪利嘉兒-HONGKONG_親密戰友話王菲.jpg" },
            { id: 84, date: "1997年10月", issue: "NO.155", name: "COSMOPOLITAN", title: "驚鴻一瞥：王菲", cover: "1997年10月_NO.155_COSMOPOLITAN_驚鴻一瞥：王菲.jpg" },
            { id: 85, date: "1997年10月", issue: "NO.45", name: "amoeba-变型虫", title: "打開王菲", cover: "1997年10月_NO.45_amoeba-变型虫_打開王菲.jpg" },
            { id: 86, date: "1997年10月", issue: "NO.73", name: "ELLE-TAIWAN", title: "真·實·記錄王菲", cover: "1997年10月_NO.73_ELLE-TAIWAN_真·實·記錄王菲.jpg" },
            { id: 87, date: "1997年10月", issue: "NO.84", name: "青春快遞", title: "紅眼妝帶領流行新魅影：王菲產後復出歌壇", cover: "1997年10月_NO.84_青春快遞_紅眼妝帶領流行新魅影：王菲產後復出歌壇.jpg" },
            { id: 88, date: "1997年11月13日至26日", issue: "NO.485", name: "電影双周刊", title: "王家衛·王菲MOTOROLA電話廣告", cover: "1997年11月13日至26日_NO.485_電影双周刊_王家衛·王菲MOTOROLA電話廣告.jpg" },
            { id: 89, date: "1997年11月17日至23日", issue: "NO.96", name: "DAY＆NIGHT", title: "Faye-Wong", cover: "1997年11月17日至23日_NO.96_DAY＆NIGHT_Faye-Wong.jpg" },
            { id: 90, date: "1997年11月", issue: "NO.10", name: "SWITCH", title: "フェイ·ウォン", cover: "1997年11月_NO.10_SWITCH_フェイ·ウォン.jpg" },
            { id: 91, date: "1997年12月31日", issue: "NO.15", name: "popAsia", title: "Faye-Wong", cover: "1997年12月31日_NO.15_popAsia_Faye-Wong.jpg" },
            { id: 92, date: "1997年1月22日", issue: "NO.422", name: "廣東電視周刊", title: "王菲生女引发香港传媒混战", cover: "1997年1月22日_NO.422_廣東電視周刊_王菲生女引发香港传媒混战.jpg" },
            { id: 93, date: "1997年3月", issue: "NO.3", name: "新现代画报", title: "新焦点：王菲", cover: "1997年3月_NO.3_新现代画报_新焦点：王菲.jpg" },
            { id: 94, date: "1997年8月", issue: "NO.8", name: "中外電視", title: "封底人物：王靖雯", cover: "1997年8月_NO.8_中外電視_封底人物：王靖雯.jpg" },
            { id: 95, date: "1997年9月1日", issue: "NO.3", name: "她", title: "王菲：演绎真我风采", cover: "1997年9月1日_NO.3_她_王菲：演绎真我风采.jpg" },
            { id: 96, date: "1997年9月30日", issue: "NO.122", name: "東Touch", title: "獨家專訪——王菲出山宣言：「我冇變！」", cover: "1997年9月30日_NO.122_東Touch_獨家專訪——王菲出山宣言：「我冇變！」.jpg" }
        ],
        "1998": [{ id: 97, date: "1998年10月10日至17日", issue: "NO.418", name: "8-magazine", title: "Faye-Wong", cover: "1998年10月10日至17日_NO.418_8-magazine_Faye-Wong.jpg" },
            { id: 98, date: "1998年10月10日至17日", issue: "NO.49", name: "i-weekly-i周刊", title: "Faye-Wong", cover: "1998年10月10日至17日_NO.49_i-weekly-i周刊_Faye-Wong.jpg" },
            { id: 99, date: "1998年10月13日", issue: "NO.74", name: "TVB周刊", title: "王菲新碟報捷，力壓張惠妹", cover: "1998年10月13日_NO.74_TVB周刊_王菲新碟報捷，力壓張惠妹.jpg" },
            { id: 100, date: "1998年10月18日", issue: "NO.734", name: "生活电视", title: "非一般演出，菲一般專輯", cover: "1998年10月18日_NO.734_生活电视_非一般演出，菲一般專輯.jpg" },
            { id: 101, date: "1998年10月24日至11月22日", issue: "NO.X", name: "M-zone", title: "王菲：唱遊", cover: "1998年10月24日至11月22日_NO.X_M-zone_王菲：唱遊.jpg" },
            { id: 102, date: "1998年10月3日至9日", issue: "NO.48", name: "TVBS周刊", title: "揭開王菲的感情世界", cover: "1998年10月3日至9日_NO.48_TVBS周刊_揭開王菲的感情世界.jpg" },
            { id: 103, date: "1998年10月", issue: "NO.10", name: "錢櫃雜誌", title: "王菲：我也是人！", cover: "1998年10月_NO.10_錢櫃雜誌_王菲：我也是人！.jpg" },
            { id: 104, date: "1998年10月", issue: "NO.68", name: "Marie-Claire-美麗佳人-TAIWAN", title: "這，就是王菲", cover: "1998年10月_NO.68_Marie-Claire-美麗佳人-TAIWAN_這，就是王菲.jpg" },
            { id: 105, date: "1998年11月", issue: "NO.11", name: "女友", title: "王菲：童眼看世界", cover: "1998年11月_NO.11_女友_王菲：童眼看世界.jpg" },
            { id: 106, date: "1998年11月", issue: "NO.133", name: "音像世界", title: "王菲是个传统的人", cover: "1998年11月_NO.133_音像世界_王菲是个传统的人.jpg" },
            { id: 107, date: "1998年11月", issue: "NO.140", name: "缤纷人生", title: "王菲VS郑惠玉双封面", cover: "1998年11月_NO.140_缤纷人生_王菲VS郑惠玉双封面.jpg" },
            { id: 108, date: "1998年11月", issue: "NO.266", name: "號外", title: "遠距離近接觸：王菲自白書", cover: "1998年11月_NO.266_號外_遠距離近接觸：王菲自白書.jpg" },
            { id: 109, date: "1998年11月", issue: "NO.58", name: "amoeba-变型虫", title: "假如王菲是一樣商品……", cover: "1998年11月_NO.58_amoeba-变型虫_假如王菲是一樣商品…….jpg" },
            { id: 110, date: "1998年11月", issue: "vol.7", name: "Play", title: "暢遊唱遊——王菲", cover: "1998年11月_vol.7_Play_暢遊唱遊——王菲.jpg" },
            { id: 111, date: "1998年12月21日", issue: "NO.52", name: "AERA", title: "フェイ·ウォン", cover: "1998年12月21日_NO.52_AERA_フェイ·ウォン.jpg" },
            { id: 112, date: "1998年12月25日", issue: "NO.630", name: "姊妹", title: "王菲唱遊大行動", cover: "1998年12月25日_NO.630_姊妹_王菲唱遊大行動.jpg" },
            { id: 113, date: "1998年12月26日", issue: "NO.10", name: "姊妹", title: "王菲個唱前最後心情", cover: "1998年12月26日_NO.10_情書_王菲個唱前最後心情.jpg" },
            { id: 114, date: "1998年12月", issue: "NO.12B", name: "上海电视", title: "王菲：唱游上海", cover: "1998年12月_NO.12B_上海电视_王菲：唱游上海.jpg" },
            { id: 115, date: "1998年1月", issue: "NO.1", name: "乐迷回音壁", title: "王菲", cover: "1998年1月_NO.1_乐迷回音壁_王菲.jpg" },
            { id: 116, date: "1998年1月", issue: "NO.5", name: "上海电视", title: "中央台春节晚会歌星：王菲·王靖雯", cover: "1998年1月_NO.5_上海电视_中央台春节晚会歌星：王菲·王靖雯.jpg" },
            { id: 117, date: "1998年9月", issue: "NO.36", name: "上海电视", title: "王菲：爱心之星", cover: "1998年9月_NO.36_上海电视_王菲：爱心之星.jpg" },
            { id: 118, date: "1998年", issue: "NO.162", name: "YES！IDOL", title: "王菲終於哭了", cover: "1998年_NO.162_YES！IDOL_王菲終於哭了.jpg" },
            { id: 119, date: "1998年", issue: "NO.5", name: "当代歌坛别册：当代歌霸", title: "那英、王菲《相约一九九八》", cover: "1998年_NO.5_当代歌坛别册：当代歌霸_那英、王菲《相约一九九八》.jpg" }
        ],
        "1999": [{ id: 120, date: "1999年10月15日", issue: "NO.94", name: "当代歌坛", title: "封面人物：王菲", cover: "1999年10月15日_NO.94_当代歌坛_封面人物：王菲.jpg" },
            { id: 121, date: "1999年10月15日", issue: "NO.94", name: "当代歌坛", title: "王菲：爱在思念蔓延时", cover: "1999年10月15日_NO.94_当代歌坛_王菲：爱在思念蔓延时.jpg" },
            { id: 122, date: "1999年10月29日", issue: "NO.3", name: "The-Ichiban-Asia", title: "王菲", cover: "1999年10月29日_NO.3_The-Ichiban-Asia_王菲.jpg" },
            { id: 123, date: "1999年10月", issue: "NO.144", name: "ELLE-HONGKONG", title: "獨家王菲", cover: "1999年10月_NO.144_ELLE-HONGKONG_獨家王菲.jpg" },
            { id: 124, date: "1999年10月", issue: "NO.65", name: "錢櫃雜誌", title: "王菲失婚後首度專訪，這次關你的事！", cover: "1999年10月_NO.65_錢櫃雜誌_王菲失婚後首度專訪，這次關你的事！.jpg" },
            { id: 125, date: "1999年10月", issue: "NO.69", name: "amoeba-变型虫", title: "王菲語錄", cover: "1999年10月_NO.69_amoeba-变型虫_王菲語錄.jpg" },
            { id: 126, date: "1999年10月", issue: "NO.8", name: "Amy", title: "王菲：我信天長地久", cover: "1999年10月_NO.8_Amy_王菲：我信天長地久.jpg" },
            { id: 127, date: "1999年10月", issue: "NO.97", name: "ELLE-TAIWAN", title: "獨家王菲：我不酷，只是害羞", cover: "1999年10月_NO.97_ELLE-TAIWAN_獨家王菲：我不酷，只是害羞.jpg" },
            { id: 128, date: "1999年11月", issue: "NO.11", name: "CITTA-BELLA-都会佳人", title: "王菲：谈谈性感", cover: "1999年11月_NO.11_CITTA-BELLA-都会佳人_王菲：谈谈性感.jpg" },
            { id: 129, date: "1999年11月", issue: "NO.11", name: "中国音像", title: "王菲“菲”常精彩", cover: "1999年11月_NO.11_中国音像_王菲“菲”常精彩.jpg" },
            { id: 130, date: "1999年11月", issue: "NO.488", name: "新潮", title: "解構王菲", cover: "1999年11月_NO.488_新潮_解構王菲.jpg" },
            { id: 131, date: "1999年12月", issue: "NO.8", name: "最美人儿", title: "王菲只愛陌生人", cover: "1999年12月_NO.8_最美人儿_王菲只愛陌生人.jpg" },
            { id: 132, date: "1999年1月", issue: "NO.28", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "1999年1月_NO.28_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 133, date: "1999年1月", issue: "VOL.1", name: "叻-magazine", title: "獨家披露：FAYE日本真情流露", cover: "1999年1月_VOL.1_叻-magazine_獨家披露：FAYE日本真情流露.jpg" },
            { id: 134, date: "1999年2月", issue: "NO.2", name: "菲", title: "另眼相看王菲", cover: "1999年2月_NO.2_菲_另眼相看王菲.jpg" },
            { id: 135, date: "1999年5月5日至14日", issue: "NO.10", name: "当代歌坛", title: "封面人物：王菲", cover: "1999年5月5日至14日_NO.10_当代歌坛_封面人物：王菲.jpg" },
            { id: 136, date: "1999年7月", issue: "NO.32", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "1999年7月_NO.32_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 137, date: "1999年8月1日至7日", issue: "NO.1243", name: "百花", title: "王菲卸下婚變枷鎖", cover: "1999年8月1日至7日_NO.1243_百花_王菲卸下婚變枷鎖.jpg" },
            { id: 138, date: "1999年", issue: "NO.129", name: "安少女", title: "封面人物：王菲", cover: "1999年_NO.129_安少女_封面人物：王菲.jpg" },
            { id: 139, date: "1999年", issue: "NO.131", name: "安少女", title: "封底人物：王菲", cover: "1999年_NO.131_安少女_封底人物：王菲.jpg" },
            { id: 140, date: "1999年", issue: "NO.174", name: "YES！IDOL", title: "王菲：貪心的普通願望", cover: "1999年_NO.174_YES！IDOL_王菲：貪心的普通願望.jpg" },
            { id: 141, date: "1999年第11期", issue: "NO.25", name: "青春之星", title: "婚变之后，王菲只爱陌生人", cover: "1999年第11期_NO.25_青春之星_婚变之后，王菲只爱陌生人.jpg" }
        ],
        "2000": [{ id: 142, date: "2000年10月21日至28日", issue: "NO.155", name: "i-weekly-i周刊", title: "王菲：百毒不侵", cover: "2000年10月21日至28日_NO.155_i-weekly-i周刊_王菲：百毒不侵.jpg" },
            { id: 143, date: "2000年10月24日", issue: "NO.180", name: "TVB周刊", title: "王菲開聲，要求情信", cover: "2000年10月24日_NO.180_TVB周刊_王菲開聲，要求情信.jpg" },
            { id: 144, date: "2000年10月28日至11月03日", issue: "NO.156", name: "TVBS周刊", title: "王菲預言人氣旺", cover: "2000年10月28日至11月03日_NO.156_TVBS周刊_王菲預言人氣旺.jpg" },
            { id: 145, date: "2000年10月", issue: "NO.109", name: "ELLE-TAIPEI", title: "王菲：愛情是一種「降頭」", cover: "2000年10月_NO.109_ELLE-TAIPEI_王菲：愛情是一種「降頭」.jpg" },
            { id: 146, date: "2000年10月", issue: "NO.109", name: "ELLE-TAIWAN", title: "王菲：愛情是一種「降頭」", cover: "2000年10月_NO.109_ELLE-TAIWAN_王菲：愛情是一種「降頭」.jpg" },
            { id: 147, date: "2000年10月", issue: "NO.21", name: "Amy", title: "王菲：謊言太痛苦", cover: "2000年10月_NO.21_Amy_王菲：謊言太痛苦.jpg" },
            { id: 148, date: "2000年11月15日", issue: "NO.133", name: "当代歌坛", title: "单身一枝花菲你莫属", cover: "2000年11月15日_NO.133_当代歌坛_单身一枝花菲你莫属.jpg" },
            { id: 149, date: "2000年11月26日至12月2日", issue: "NO.1187", name: "時報周刊", title: "王菲宣稱要閉關，熬不住，演唱會前溜到PUB廝混", cover: "2000年11月26日至12月2日_NO.1187_時報周刊_王菲宣稱要閉關，熬不住，演唱會前溜到PUB廝混.jpg" },
            { id: 150, date: "2000年11月", issue: "NO.11", name: "amoeba-变型虫", title: "王菲常美麗", cover: "2000年11月_NO.11_amoeba-变型虫_王菲常美麗.jpg" },
            { id: 151, date: "2000年11月", issue: "NO.11", name: "JESSICA", title: "王菲：Faye's-Way", cover: "2000年11月_NO.11_JESSICA_王菲：Faye's-Way.jpg" },
            { id: 152, date: "2000年11月", issue: "NO.192", name: "COSMOPPLITAN", title: "王菲慵懶背後", cover: "2000年11月_NO.192_COSMOPPLITAN_王菲慵懶背後.jpg" },
            { id: 153, date: "2000年11月", issue: "NO.2", name: "上海电视", title: "王菲：换新发说【寓言】", cover: "2000年11月_NO.2_上海电视_王菲：换新发说【寓言】.jpg" },
            { id: 154, date: "2000年12月", issue: "NO.12", name: "FHM", title: "封面人物：王菲", cover: "2000年12月_NO.12_FHM_封面人物：王菲.jpg" },
            { id: 155, date: "2000年12月", issue: "NO.12", name: "Marie-Claire-瑪利嘉兒-HONGKONG", title: "王菲：讓我自白", cover: "2000年12月_NO.12_Marie-Claire-瑪利嘉兒-HONGKONG_王菲：讓我自白.jpg" },
            { id: 156, date: "2000年12月", issue: "NO.291", name: "號外", title: "王菲：音樂寓言", cover: "2000年12月_NO.291_號外_王菲：音樂寓言.jpg" },
            { id: 157, date: "2000年1月", issue: "NO.1", name: "nüyou女友", title: "王菲关我什么事？", cover: "2000年1月_NO.1_nüyou女友_王菲关我什么事？.jpg" },
            { id: 158, date: "2000年6月9日", issue: "NO.23", name: "东方文化周刊", title: "王菲十八般武艺", cover: "2000年6月9日_NO.23_东方文化周刊_王菲十八般武艺.jpg" },
            { id: 159, date: "2000年7月20日至8月2日", issue: "NO.555", name: "電影双周刊", title: "王菲專訪：逃離重慶·戀戰沖繩", cover: "2000年7月20日至8月2日_NO.555_電影双周刊_王菲專訪：逃離重慶·戀戰沖繩.jpg" },
            { id: 160, date: "2000年8月", issue: "NO.154", name: "ELLE-HONGKONG", title: "王菲説男人", cover: "2000年8月_NO.154_ELLE-HONGKONG_王菲説男人.jpg" },
            { id: 161, date: "2000年9月", issue: "NO.9", name: "ELLE-SINGAPORE", title: "Faye-Wong", cover: "2000年9月_NO.9_ELLE-SINGAPORE_Faye-Wong.jpg" },
            { id: 162, date: "2000年", issue: "NO.32", name: "POPASIA", title: "Faye-Wong", cover: "2000年_NO.32_POPASIA_Faye-Wong.jpg" }
        ],
        "2001": [{ id: 163, date: "2001年08月22日至28日", issue: "NO.16", name: "YOU优周刊", title: "王菲驾到", cover: "2001年08月22日至28日_NO.16_YOU优周刊_王菲驾到.jpg" },
            { id: 164, date: "2001年10月21日", issue: "NO.334", name: "東Touch", title: "王菲我唔鍾意霆鋒……首歌！！", cover: "2001年10月21日_NO.334_東Touch_王菲我唔鍾意霆鋒……首歌！！.jpg" },
            { id: 165, date: "2001年10月28日至11月3日", issue: "NO.892", name: "LIFE-TV-生活电视", title: "王菲收到订情密码原形毕露", cover: "2001年10月28日至11月3日_NO.892_LIFE-TV-生活电视_王菲收到订情密码原形毕露.jpg" },
            { id: 166, date: "2001年10月7日", issue: "NO.X", name: "Yomiuri-Weekly", title: "フェイ·ウォン", cover: "2001年10月7日_NO.X_Yomiuri-Weekly_フェイ·ウォン.jpg" },
            { id: 167, date: "2001年10月", issue: "NO.121", name: "ELLE-TAIWAN", title: "王菲：就憑感覺", cover: "2001年10月_NO.121_ELLE-TAIWAN_王菲：就憑感覺.jpg" },
            { id: 168, date: "2001年10月", issue: "NO.133", name: "Marie-Claire-瑪利嘉兒-HONGKONG", title: "王菲：無夢人生", cover: "2001年10月_NO.133_Marie-Claire-瑪利嘉兒-HONGKONG_王菲：無夢人生.jpg" },
            { id: 169, date: "2001年10月", issue: "NO.168", name: "ELLE-HONGKONG", title: "專訪王菲", cover: "2001年10月_NO.168_ELLE-HONGKONG_專訪王菲.jpg" },
            { id: 170, date: "2001年10月", issue: "NO.32", name: "Amy", title: "王菲：東京感性日記", cover: "2001年10月_NO.32_Amy_王菲：東京感性日記.jpg" },
            { id: 171, date: "2001年11月6日", issue: "NO.234", name: "TVB周刊", title: "王菲篤信大乘佛學會起底！！", cover: "2001年11月6日_NO.234_TVB周刊_王菲篤信大乘佛學會起底！！.jpg" },
            { id: 172, date: "2001年11月", issue: "NO.512", name: "新潮", title: "Faye-Wong-歷久常新", cover: "2001年11月_NO.512_新潮_Faye-Wong-歷久常新.jpg" },
            { id: 173, date: "2001年12月", issue: "NO.3", name: "e-smart", title: "封面人物：王菲", cover: "2001年12月_NO.3_e-smart_封面人物：王菲.jpg" },
            { id: 174, date: "2001年1月14日", issue: "NO.1692", name: "明周", title: "獨家專訪：王菲自剖兩段震撼感情", cover: "2001年1月14日_NO.1692_明周_獨家專訪：王菲自剖兩段震撼感情.jpg" },
            { id: 175, date: "2001年2月14日至27日", issue: "NO.596", name: "電影双周刊", title: "王菲·趙薇·無雙話", cover: "2001年2月14日至27日_NO.596_電影双周刊_王菲·趙薇·無雙話.jpg" },
            { id: 176, date: "2001年3月", issue: "NO.237", name: "FRaU", title: "Faye-Wong", cover: "2001年3月_NO.237_FRaU_Faye-Wong.jpg" },
            { id: 177, date: "2001年3月", issue: "NO.3", name: "Harper's-BAZAAR-HONGKONG", title: "自思自想的菲言菲語", cover: "2001年3月_NO.3_Harper's-BAZAAR-HONGKONG_自思自想的菲言菲語.jpg" },
            { id: 178, date: "2001年3月", issue: "NO.3", name: "iLOOK-世界都市", title: "王菲：坦白交代，任你评说", cover: "2001年3月_NO.3_iLOOK-世界都市_王菲：坦白交代，任你评说.jpg" },
            { id: 179, date: "2001年4月", issue: "NO.4", name: "CITTA-BELLA-都会佳人", title: "王菲", cover: "2001年4月_NO.4_CITTA-BELLA-都会佳人_王菲.jpg" },
            { id: 180, date: "2001年4月", issue: "NO.4", name: "Female", title: "My-Faye-Lady", cover: "2001年4月_NO.4_Female_My-Faye-Lady.jpg" },
            { id: 181, date: "2001年4月", issue: "NO.4", name: "nüyou女友", title: "独家专访：王菲并不冷", cover: "2001年4月_NO.4_nüyou女友_独家专访：王菲并不冷.jpg" },
            { id: 182, date: "2001年6月", issue: "Vol.007", name: "Ongaku-to-Hito-音樂と人", title: "Faye-Wong", cover: "2001年6月_Vol.007_Ongaku-to-Hito-音樂と人_Faye-Wong.jpg" },
            { id: 183, date: "2001年9月1日", issue: "NO.44", name: "ASIAN-POPS-MAGAZINE", title: "_フェイ·ウォン", cover: "2001年9月1日_NO.44_ASIAN-POPS-MAGAZINE__フェイ·ウォン.jpg" },
            { id: 184, date: "2001年9月", issue: "NO.9", name: "COSMOPPLITAN", title: "FayeWong的紅色世界", cover: "2001年9月_NO.9_COSMOPPLITAN_FayeWong的紅色世界.jpg" },
            { id: 185, date: "2001年", issue: "NO.1", name: "Madame-Figaro-费加洛", title: "這，就是王菲", cover: "2001年_NO.1_Madame-Figaro-费加洛_這，就是王菲.jpg" },
            { id: 186, date: "2001年", issue: "NO.7", name: "BeneBene", title: "Faye-Wong", cover: "2001年_NO.7_BeneBene_Faye-Wong.jpg" }
        ],
        "2002": [{ id: 187, date: "2002年1月30日", issue: "NO.348", name: "東Touch", title: "王菲：反串《無雙》男生", cover: "2002年1月30日_NO.348_東Touch_王菲：反串《無雙》男生.jpg" },
            { id: 188, date: "2002年2月1日", issue: "NO.002", name: "新Touch", title: "王菲：自認好tough！", cover: "2002年2月1日_NO.002_新Touch_王菲：自認好tough！.jpg" },
            { id: 189, date: "2002年2月4日", issue: "VOL.126", name: "新假期", title: "王菲至爱上海肥猪肉", cover: "2002年2月4日_VOL.126_新假期_王菲至爱上海肥猪肉.jpg" },
            { id: 190, date: "2002年3月30日", issue: "NO.47", name: "ASIAN-POPS-MAGAZINE", title: "Faye-Wong", cover: "2002年3月30日_NO.47_ASIAN-POPS-MAGAZINE_Faye-Wong.jpg" },
            { id: 191, date: "2002年4月25日至5月1日", issue: "NO.X", name: "东方周末", title: "王菲伤心事", cover: "2002年4月25日至5月1日_NO.X_东方周末_王菲伤心事.jpg" },
            { id: 192, date: "2002年4月", issue: "NO.150-151", name: "现代服装", title: "王菲：我不是偶像，别崇拜我", cover: "2002年4月_NO.150-151_现代服装_王菲：我不是偶像，别崇拜我.jpg" },
            { id: 193, date: "2002年4月", issue: "NO.4", name: "VOGUE-TAIWAN", title: "天下無雙：王菲V.S.梁朝偉", cover: "2002年4月_NO.4_VOGUE-TAIWAN_天下無雙：王菲V.S.梁朝偉.jpg" },
            { id: 194, date: "2002年5月", issue: "NO.271", name: "花溪", title: "你所不知道的王菲", cover: "2002年5月_NO.271_花溪_你所不知道的王菲.jpg" },
            { id: 195, date: "2002年6月", issue: "NO.293", name: "大众电视", title: "王菲不得安宁", cover: "2002年6月_NO.293_大众电视_王菲不得安宁.jpg" }
        ],
        "2003": [{ id: 196, date: "2003年10月", issue: "NO.145", name: "ELLE-TAIWAN", title: "王菲：溫柔尚在，寂寞永生", cover: "2003年10月_NO.145_ELLE-TAIWAN_王菲：溫柔尚在，寂寞永生.jpg" },
            { id: 197, date: "2003年11月", issue: "NO.11", name: "ELLE-世界时装之苑", title: "王菲：爱情圣斗士", cover: "2003年11月_NO.11_ELLE-世界时装之苑_王菲：爱情圣斗士.jpg" },
            { id: 198, date: "2003年11月", issue: "NO.193", name: "ELLE-HONGKONG", title: "王菲：唱好愛情", cover: "2003年11月_NO.193_ELLE-HONGKONG_王菲：唱好愛情.jpg" },
            { id: 199, date: "2003年12月2日", issue: "NO.756", name: "SISTERS-姊妹", title: "王菲：爱得起", cover: "2003年12月2日_NO.756_SISTERS-姊妹_王菲：爱得起.jpg" },
            { id: 200, date: "2003年12月5日", issue: "NO.760", name: "SISTERS-姊妹", title: "王菲：爱得起", cover: "2003年12月5日_NO.760_SISTERS-姊妹_王菲：爱得起.jpg" },
            { id: 201, date: "2003年12月", issue: "NO.12", name: "Amy", title: "王菲：愛不用回報", cover: "2003年12月_NO.12_Amy_王菲：愛不用回報.jpg" },
            { id: 202, date: "2003年5月1日", issue: "NO.434", name: "大周刊", title: "封面人物：王菲", cover: "2003年5月1日_NO.434_大周刊_封面人物：王菲.jpg" }
        ],
        "2004": [{ id: 203, date: "2004年10月7日至20日", issue: "NO.665", name: "電影双周刊", title: "2046", cover: "2004年10月7日至20日_NO.665_電影双周刊_2046.jpg" },
            { id: 204, date: "2004年10月", issue: "NO.10", name: "COSMOPOLITAN-HONGKONG", title: "Faye-Wong", cover: "2004年10月_NO.10_COSMOPOLITAN-HONGKONG_Faye-Wong.jpg" },
            { id: 205, date: "2004年10月", issue: "NO.10", name: "＠live", title: "王菲·梁朝偉", cover: "2004年10月_NO.10_＠live_王菲·梁朝偉.jpg" },
            { id: 206, date: "2004年10月", issue: "NO.17", name: "Man's-Style", title: "王菲×木村拓哉×2046", cover: "2004年10月_NO.17_Man's-Style_王菲×木村拓哉×2046.jpg" },
            { id: 207, date: "2004年10月", issue: "NO.4", name: "COOL酷！", title: "相約2046", cover: "2004年10月_NO.4_COOL酷！_相約2046.jpg" },
            { id: 208, date: "2004年10月", issue: "Vol.26", name: "JET", title: "王菲·木村拓哉：2046", cover: "2004年10月_Vol.26_JET_王菲·木村拓哉：2046.jpg" },
            { id: 209, date: "2004年11月", issue: "NO.11", name: "新闻人物", title: "王菲VS李亚鹏：年底分手？", cover: "2004年11月_NO.11_新闻人物_王菲VS李亚鹏：年底分手？.jpg" },
            { id: 210, date: "2004年11月", issue: "NO.172", name: "Cut", title: "2046", cover: "2004年11月_NO.172_Cut_2046.jpg" },
            { id: 211, date: "2004年12月", issue: "NO.12", name: "Madame-Figaro-費加洛", title: "封面人物：王菲", cover: "2004年12月_NO.12_Madame-Figaro-費加洛_封面人物：王菲.jpg" },
            { id: 212, date: "2004年12月", issue: "NO.206", name: "ELLE-HONGKONG", title: "王菲：愛的感覺", cover: "2004年12月_NO.206_ELLE-HONGKONG_王菲：愛的感覺.jpg" },
            { id: 213, date: "2004年1月15日", issue: "NO.247", name: "当代歌坛", title: "王菲华丽转身", cover: "2004年1月15日_NO.247_当代歌坛_王菲华丽转身.jpg" },
            { id: 214, date: "2004年1月", issue: "NO.180", name: "ORANGE-时尚橘子", title: "王菲：“将爱”进行到底", cover: "2004年1月_NO.180_ORANGE-时尚橘子_王菲：“将爱”进行到底.jpg" },
            { id: 215, date: "2004年2月12日至25日", issue: "NO.648", name: "電影双周刊", title: "大城小事愛情物語", cover: "2004年2月12日至25日_NO.648_電影双周刊_大城小事愛情物語.jpg" },
            { id: 216, date: "2004年2月16日", issue: "NO.364", name: "北京电视周刊", title: "王菲：天后回家诉乡情", cover: "2004年2月16日_NO.364_北京电视周刊_王菲：天后回家诉乡情.jpg" },
            { id: 217, date: "2004年2月1日至10日", issue: "NO.144", name: "YOU优周刊", title: "王菲感情剖白：爱要快乐！", cover: "2004年2月1日至10日_NO.144_YOU优周刊_王菲感情剖白：爱要快乐！.jpg" },
            { id: 218, date: "2004年2月20日", issue: "NO.524", name: "大周刊", title: "王菲·黎明：甜蜜共度情人节", cover: "2004年2月20日_NO.524_大周刊_王菲·黎明：甜蜜共度情人节.jpg" },
            { id: 219, date: "2004年2月", issue: "NO.271", name: "电影评介", title: "大城小事", cover: "2004年2月_NO.271_电影评介_大城小事.jpg" },
            { id: 220, date: "2004年2月", issue: "NO.37", name: "新电影", title: "大城小事：王菲黎明银幕初恋", cover: "2004年2月_NO.37_新电影_大城小事：王菲黎明银幕初恋.jpg" },
            { id: 221, date: "2004年3月", issue: "NO.3", name: "Madame-Figaro-虹", title: "王菲：菲再起时", cover: "2004年3月_NO.3_Madame-Figaro-虹_王菲：菲再起时.jpg" },
            { id: 222, date: "2004年5月", issue: "NO.727", name: "上海电视", title: "大牌王菲，今菲昔比", cover: "2004年5月_NO.727_上海电视_大牌王菲，今菲昔比.jpg" },
            { id: 223, date: "2004年7月15日", issue: "NO.324", name: "V-magzine-音乐时空", title: "潮流王菲天", cover: "2004年7月15日_NO.324_V-magzine-音乐时空_潮流王菲天.jpg" },
            { id: 224, date: "2004年7月", issue: "NO.7", name: "VOGUE-TAIWAN", title: "王菲·張震", cover: "2004年7月_NO.7_VOGUE-TAIWAN_王菲·張震.jpg" },
            { id: 225, date: "2004年8月10日", issue: "NO.299", name: "科学新生活", title: "「菲」比寻常", cover: "2004年8月10日_NO.299_科学新生活_「菲」比寻常.jpg" },
            { id: 226, date: "2004年8月13日", issue: "NO.5", name: "OK！", title: "独家专访天后王菲", cover: "2004年8月13日_NO.5_OK！_独家专访天后王菲.jpg" },
            { id: 227, date: "2004年8月15日", issue: "NO.268", name: "当代歌坛", title: "封底人物：王菲", cover: "2004年8月15日_NO.268_当代歌坛_封底人物：王菲.jpg" },
            { id: 228, date: "2004年8月2日", issue: "NO.388", name: "北京电视周刊", title: "王菲：唱回家乡", cover: "2004年8月2日_NO.388_北京电视周刊_王菲：唱回家乡.jpg" },
            { id: 229, date: "2004年8月9日", issue: "NO.1118", name: "音乐周刊", title: "封面人物：王菲", cover: "2004年8月9日_NO.1118_音乐周刊_封面人物：王菲.jpg" },
            { id: 230, date: "2004年8月", issue: "NO.4", name: "iFEEL", title: "FAYE常独家", cover: "2004年8月_NO.4_iFEEL_FAYE常独家.jpg" },
            { id: 231, date: "2004年9月14日", issue: "NO.380", name: "TVB", title: "《2046》王菲·偉仔·木村三角關係", cover: "2004年9月14日_NO.380_TVB_《2046》王菲·偉仔·木村三角關係.jpg" },
            { id: 232, date: "2004年9月23", issue: "NO.166", name: "Milk-A", title: "2046", cover: "2004年9月23_NO.166_Milk-A_2046.jpg" },
            { id: 233, date: "2004年9月23", issue: "NO.166", name: "Milk-B", title: "2046", cover: "2004年9月23_NO.166_Milk-B_2046.jpg" },
            { id: 234, date: "2004年", issue: "NO.1", name: "TEA-MAGAZINE", title: "優遊私想", cover: "2004年_NO.1_TEA-MAGAZINE_優遊私想.jpg" },
            { id: 235, date: "2004年", issue: "NO.6", name: "TEA-MAGAZINE", title: "王菲嘉玲大晒媽頭", cover: "2004年_NO.6_TEA-MAGAZINE_王菲嘉玲大晒媽頭.jpg" },
            { id: 236, date: "2004年冬季", issue: "NO.4", name: "inbase-时尚基地", title: "王菲：流光岁月", cover: "2004年冬季_NO.4_inbase-时尚基地_王菲：流光岁月.jpg" },
            { id: 237, date: "2004年年3月", issue: "NO.76", name: "TVF电视朋友", title: "王菲·黎明", cover: "2004年年3月_NO.76_TVF电视朋友_王菲·黎明.jpg" },
            { id: 238, date: "2004年春季", issue: "NO.1", name: "inbase-时尚基地", title: "王菲：快乐目的", cover: "2004年春季_NO.1_inbase-时尚基地_王菲：快乐目的.jpg" }
        ],
        "2005": [{ id: 239, date: "2005年1月", issue: "NO.1", name: "CITTA-BELLA-都会佳人", title: "封面人物：王菲", cover: "2005年1月_NO.1_CITTA-BELLA-都会佳人_封面人物：王菲.jpg" },
            { id: 240, date: "2005年1月", issue: "NO.1", name: "ELLE-TAIWAN", title: "王菲：只要感覺對了", cover: "2005年1月_NO.1_ELLE-TAIWAN_王菲：只要感覺對了.jpg" },
            { id: 241, date: "2005年1月", issue: "NO.1", name: "ELLE-世界时装之苑", title: "王菲的生命密码", cover: "2005年1月_NO.1_ELLE-世界时装之苑_王菲的生命密码.jpg" },
            { id: 242, date: "2005年2月", issue: "NO.2", name: "Harper's-BAZAAR-HONGKONG", title: "Faye-in-Paris", cover: "2005年2月_NO.2_Harper's-BAZAAR-HONGKONG_Faye-in-Paris.jpg" },
            { id: 243, date: "2005年2月", issue: "NO.2", name: "Marie-Claire-瑪利嘉兒-HONGKONG", title: "像王菲那樣戀愛", cover: "2005年2月_NO.2_Marie-Claire-瑪利嘉兒-HONGKONG_像王菲那樣戀愛.jpg" },
            { id: 244, date: "2005年3月", issue: "NO.3", name: "Harper's-BAZAAR-SINGAPORE", title: "Faye-Wong", cover: "2005年3月_NO.3_Harper's-BAZAAR-SINGAPORE_Faye-Wong.jpg" },
            { id: 245, date: "2005年3月", issue: "NO.3", name: "Marie-Claire-嘉人", title: "独家专访：亲密爱友说王菲", cover: "2005年3月_NO.3_Marie-Claire-嘉人_独家专访：亲密爱友说王菲.jpg" },
            { id: 246, date: "2005年4月", issue: "NO.144", name: "Marie-Claire-美麗佳人-TAIWAN", title: "王菲的新嫁衣", cover: "2005年4月_NO.144_Marie-Claire-美麗佳人-TAIWAN_王菲的新嫁衣.jpg" },
            { id: 247, date: "2005年4月", issue: "NO.4", name: "新闻人物", title: "王菲：待嫁新娘", cover: "2005年4月_NO.4_新闻人物_王菲：待嫁新娘.jpg" },
            { id: 248, date: "2005年6月", issue: "NO.6", name: "V-Mag", title: "双面娇娃：王菲", cover: "2005年6月_NO.6_V-Mag_双面娇娃：王菲.jpg" }
        ],
        "2006": [{ id: 249, date: "2006年10月", issue: "NO.10", name: "新现代画报", title: "王菲：我行我素", cover: "2006年10月_NO.10_新现代画报_王菲：我行我素.jpg" }],
        "2007": [{ id: 250, date: "2007年1月上半月", issue: "NO.1", name: "妇女生活", title: "封面人物：王菲", cover: "2007年1月上半月_NO.1_妇女生活_封面人物：王菲.jpg" }],
        "2008": [{ id: 251, date: "2008年7月", issue: "NO.7", name: "LADY-格调", title: "王菲：但愿人长久", cover: "2008年7月_NO.7_LADY-格调_王菲：但愿人长久.jpg" },
            { id: 252, date: "2008年8月", issue: "NO.15", name: "The-Ichiban", title: "Eyes-on-王菲", cover: "2008年8月_NO.15_The-Ichiban_Eyes-on-王菲.jpg" }
        ],
        "2009": [{ id: 253, date: "2009年6月1日", issue: "NO.294", name: "八小时以外", title: "封面人物：王菲", cover: "2009年6月1日_NO.294_八小时以外_封面人物：王菲.jpg" }],
        "2010": [{ id: 254, date: "2010年10月", issue: "NO.10", name: "Harper's-BAZAAR-时尚芭莎", title: "独家专访：王菲之谜", cover: "2010年10月_NO.10_Harper's-BAZAAR-时尚芭莎_独家专访：王菲之谜.jpg" },
            { id: 255, date: "2010年11月1日至14日", issue: "NO.50", name: "博客天下", title: "王菲：我就是一俗人", cover: "2010年11月1日至14日_NO.50_博客天下_王菲：我就是一俗人.jpg" },
            { id: 256, date: "2010年11月6日", issue: "NO.620", name: "周末画报", title: "那个叫王菲的传奇", cover: "2010年11月6日_NO.620_周末画报_那个叫王菲的传奇.jpg" },
            { id: 257, date: "2010年11月8日至14日", issue: "NO.1074", name: "上海电视", title: "王菲开唱", cover: "2010年11月8日至14日_NO.1074_上海电视_王菲开唱.jpg" },
            { id: 258, date: "2010年11月8日至17日", issue: "NO.155", name: "V看天下", title: "王菲：复出之火", cover: "2010年11月8日至17日_NO.155_V看天下_王菲：复出之火.jpg" },
            { id: 259, date: "2010年11月", issue: "NO.10", name: "ICON-风华", title: "王菲，一切都好！", cover: "2010年11月_NO.10_ICON-风华_王菲，一切都好！.jpg" },
            { id: 260, date: "2010年11月", issue: "NO.11", name: "Harper's-BAZAAR-HONGKONG", title: "獨家專訪王菲-Faye-Plays", cover: "2010年11月_NO.11_Harper's-BAZAAR-HONGKONG_獨家專訪王菲-Faye-Plays.jpg" },
            { id: 261, date: "2010年11月", issue: "NO.11", name: "Harper's-BAZAAR-TAIWAN", title: "王菲：天后再臨", cover: "2010年11月_NO.11_Harper's-BAZAAR-TAIWAN_王菲：天后再臨.jpg" },
            { id: 262, date: "2010年2月上", issue: "NO.2", name: "格调-Lady", title: "王菲：天后回攻", cover: "2010年2月上_NO.2_格调-Lady_王菲：天后回攻.jpg" },
            { id: 263, date: "2010年3月", issue: "NO.23", name: "人物画报", title: "封面人物：王菲", cover: "2010年3月_NO.23_人物画报_封面人物：王菲.jpg" },
            { id: 264, date: "2010年8月16日", issue: "NO.33", name: "三联生活周刊", title: "王菲的朋友、推手与粉丝为什么喜欢王菲", cover: "2010年8月16日_NO.33_三联生活周刊_王菲的朋友、推手与粉丝为什么喜欢王菲.jpg" },
            { id: 265, date: "2010年8月5日至18日", issue: "NO.232", name: "Time-Out", title: "王菲归来", cover: "2010年8月5日至18日_NO.232_Time-Out_王菲归来.jpg" },
            { id: 266, date: "2010年9月", issue: "NO.9", name: "ELLE-HONGKONG-A", title: "全球獨家：王菲", cover: "2010年9月_NO.9_ELLE-HONGKONG-A_全球獨家：王菲.jpg" },
            { id: 267, date: "2010年9月", issue: "NO.9", name: "ELLE-HONGKONG-B", title: "全球獨家：王菲-Faye's-Return", cover: "2010年9月_NO.9_ELLE-HONGKONG-B_全球獨家：王菲-Faye's-Return.jpg" },
            { id: 268, date: "2010年9月", issue: "NO.9", name: "ELLE-TAIWAN-A", title: "王菲：回來，讓更多人歡喜", cover: "2010年9月_NO.9_ELLE-TAIWAN-A_王菲：回來，讓更多人歡喜.jpg" },
            { id: 269, date: "2010年9月", issue: "NO.9", name: "ELLE-TAIWAN-B", title: "王菲：回來，讓更多人歡喜", cover: "2010年9月_NO.9_ELLE-TAIWAN-B_王菲：回來，讓更多人歡喜.jpg" },
            { id: 270, date: "2010年9月", issue: "NO.9", name: "ELLE-世界时装之苑", title: "独家专访：王菲", cover: "2010年9月_NO.9_ELLE-世界时装之苑_独家专访：王菲.jpg" }
        ],
        "2011": [{ id: 271, date: "2011年10月24日", issue: "NO.53", name: "Taipei-Walker", title: "王菲：超人氣天后年度代表作，席捲全亞洲", cover: "2011年10月24日_NO.53_Taipei-Walker_王菲：超人氣天后年度代表作，席捲全亞洲.jpg" },
            { id: 272, date: "2011年10月", issue: "NO.10", name: "Harper's-BAZAAR-时尚芭莎-A", title: "王菲：恍惚对世界，笔直对自心", cover: "2011年10月_NO.10_Harper's-BAZAAR-时尚芭莎-A_王菲：恍惚对世界，笔直对自心.jpg" },
            { id: 273, date: "2011年10月", issue: "NO.10", name: "Harper's-BAZAAR-时尚芭莎-B", title: "王菲：春夏秋冬重生", cover: "2011年10月_NO.10_Harper's-BAZAAR-时尚芭莎-B_王菲：春夏秋冬重生.jpg" },
            { id: 274, date: "2011年1月", issue: "NO.1", name: "nüyou-女友-新加坡", title: "王菲：永不高调", cover: "2011年1月_NO.1_nüyou-女友-新加坡_王菲：永不高调.jpg" },
            { id: 275, date: "2011年1月", issue: "NO.1", name: "nüyou-女友-马来西亚", title: "王菲：永远不够", cover: "2011年1月_NO.1_nüyou-女友-马来西亚_王菲：永远不够.jpg" },
            { id: 276, date: "2011年2月", issue: "NO.2", name: "PRESTIGE", title: "FAYE-WONG-DOING-IT-HER-WAY", cover: "2011年2月_NO.2_PRESTIGE_FAYE-WONG-DOING-IT-HER-WAY.jpg" },
            { id: 277, date: "2011年3月", issue: "NO.3", name: "YOGHURRT-优格", title: "见于不见，天后仍在：传奇王菲的独家记忆", cover: "2011年3月_NO.3_YOGHURRT-优格_见于不见，天后仍在：传奇王菲的独家记忆.jpg" }
        ],
        "2012": [{ id: 278, date: "2012年10月", issue: "NO.10", name: "Harper's-BAZAAR-时尚芭莎-A", title: "王菲：寻常亦非常", cover: "2012年10月_NO.10_Harper's-BAZAAR-时尚芭莎-A_王菲：寻常亦非常.jpg" },
            { id: 279, date: "2012年10月", issue: "NO.10", name: "Harper's-BAZAAR-时尚芭莎-B", title: "王菲：寻常亦非常", cover: "2012年10月_NO.10_Harper's-BAZAAR-时尚芭莎-B_王菲：寻常亦非常.jpg" },
            { id: 280, date: "2012年5月", issue: "NO.5", name: "格调-Lady", title: "王菲：一千个宠爱的理由", cover: "2012年5月_NO.5_格调-Lady_王菲：一千个宠爱的理由.jpg" },
            { id: 281, date: "2012年6月8日", issue: "NO.1", name: "东方今报", title: "你好，王菲", cover: "2012年6月8日_NO.1_东方今报_你好，王菲.jpg" }
        ],
        "2013": [{ id: 282, date: "2013年9月25日", issue: "NO.138", name: "博客天下", title: "拜王菲教", cover: "2013年9月25日_NO.138_博客天下_拜王菲教.jpg" }],
        "2014": [{ id: 283, date: "2014年10月", issue: "NO.10", name: "ELLE-世界时装之苑-A", title: "王菲：不为上一秒牵挂", cover: "2014年10月_NO.10_ELLE-世界时装之苑-A_王菲：不为上一秒牵挂.jpg" },
            { id: 284, date: "2014年10月", issue: "NO.10", name: "ELLE-世界时装之苑-B", title: "王菲：不为下一秒担忧", cover: "2014年10月_NO.10_ELLE-世界时装之苑-B_王菲：不为下一秒担忧.jpg" },
            { id: 285, date: "2014年10月", issue: "NO.10", name: "VOGUE", title: "2046-special-edition", cover: "2014年10月_NO.10_VOGUE_2046-special-edition.jpg" },
            { id: 286, date: "2014年11月", issue: "NO.11", name: "ELLE-TAIWAN", title: "王菲：放下之后更懂爱", cover: "2014年11月_NO.11_ELLE-TAIWAN_王菲：放下之后更懂爱.jpg" },
            { id: 287, date: "2014年11月", issue: "NO.325", name: "ELLE-HONGKONG", title: "王菲傳奇", cover: "2014年11月_NO.325_ELLE-HONGKONG_王菲傳奇.jpg" },
            { id: 288, date: "2014年3月14日", issue: "NO.11", name: "视周刊", title: "王菲＆谢霆锋：相见不如怀念", cover: "2014年3月14日_NO.11_视周刊_王菲＆谢霆锋：相见不如怀念.jpg" },
            { id: 289, date: "2014年6月", issue: "NO.6", name: "VOGUE-服饰与美容", title: "如是王菲-Faye-Way", cover: "2014年6月_NO.6_VOGUE-服饰与美容_如是王菲-Faye-Way.jpg" },
            { id: 290, date: "2014年8月", issue: "NO.8", name: "Harper's-BAZAAR-TAIWAN", title: "靠近王菲", cover: "2014年8月_NO.8_Harper's-BAZAAR-TAIWAN_靠近王菲.jpg" },
            { id: 291, date: "2014年8月", issue: "NO.8", name: "Harper's-BAZAAR-时尚芭莎", title: "The-Story-of-FAYE", cover: "2014年8月_NO.8_Harper's-BAZAAR-时尚芭莎_The-Story-of-FAYE.jpg" },
            { id: 292, date: "2014年8月", issue: "NO.8", name: "nüyou-女友", title: "王菲：“我还好，你也保重”", cover: "2014年8月_NO.8_nüyou-女友_王菲：“我还好，你也保重”.jpg" }
        ],
        "2015": [{ id: 293, date: "2015年2月16日", issue: "NO.276", name: "环球人物", title: "佛弟子：王菲", cover: "2015年2月16日_NO.276_环球人物_佛弟子：王菲.jpg" }],
        "2017": [{ id: 294, date: "2017年1月", issue: "NO.1", name: "VOGUE-服饰与美容", title: "王菲：明白虚幻，继而不留", cover: "2017年1月_NO.1_VOGUE-服饰与美容_王菲：明白虚幻，继而不留.jpg" }],
        "2018": [{ id: 295, date: "2018年12月31日", issue: "NO.1224", name: "音乐生活报", title: "封面人物：王菲", cover: "2018年12月31日_NO.1224_音乐生活报_封面人物：王菲.jpg" },
            { id: 296, date: "2018年3月12日", issue: "NO.1183", name: "音乐生活报", title: "封面人物：王菲", cover: "2018年3月12日_NO.1183_音乐生活报_封面人物：王菲.jpg" },
            { id: 297, date: "2018年4月", issue: "NO.4", name: "Harper's-BAZAAR-时尚芭莎-A", title: "王菲：一种传奇", cover: "2018年4月_NO.4_Harper's-BAZAAR-时尚芭莎-A_王菲：一种传奇.jpg" },
            { id: 298, date: "2018年4月", issue: "NO.4", name: "Harper's-BAZAAR-时尚芭莎-B", title: "王菲：一种传奇", cover: "2018年4月_NO.4_Harper's-BAZAAR-时尚芭莎-B_王菲：一种传奇.jpg" }
        ],
        "2025": [{ id: 299, date: "2025年2月27日", issue: "NO.596", name: "看世界", title: "王菲：唱游彼岸", cover: "2025年2月27日_NO.596_看世界_王菲：唱游彼岸.jpg" }],
        "未知": [{ id: 300, date: "未知", issue: "M", name: "magazine", title: "音樂雜誌_Faye-Wong", cover: "未知_M_magazine_音樂雜誌_Faye-Wong.jpg" },
            { id: 301, date: "未知", issue: "NO.309", name: "YES！IDOL", title: "好王菲", cover: "未知_NO.309_YES！IDOL_好王菲.jpg" },
            { id: 302, date: "未知", issue: "NO.X", name: "申江服务导报", title: "王菲“K歌女王”", cover: "未知_NO.X_申江服务导报_王菲“K歌女王”.jpg" },
            { id: 303, date: "未知", issue: "Vol10", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol10_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 304, date: "未知", issue: "Vol1", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol1_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 305, date: "未知", issue: "Vol2", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol2_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 306, date: "未知", issue: "Vol3", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol3_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 307, date: "未知", issue: "Vol4", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol4_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 308, date: "未知", issue: "Vol5", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol5_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 309, date: "未知", issue: "Vol6", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol6_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 310, date: "未知", issue: "Vol7", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol7_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 311, date: "未知", issue: "Vol8", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol8_FAYE'S_Faye-Wong-Official-Club.jpg" },
            { id: 312, date: "未知", issue: "Vol9", name: "FAYE'S", title: "Faye-Wong-Official-Club", cover: "未知_Vol9_FAYE'S_Faye-Wong-Official-Club.jpg" }
        ]
    }
};

let allMagazines = [];
let currentIndex = 0;
let currentYear = null; // 当前年份

function renderMagazines() {
    const gallery = document.getElementById("gallery");
    const nav = document.getElementById("timeline-nav");

    const years = Object.keys(data.years).sort();

    years.forEach(year => {
        const link = document.createElement("a");
        link.href = `#year-${year}`;
        link.textContent = year;
        nav.appendChild(link);
    });

    years.forEach(year => {
        const yearBlock = document.createElement("section");
        yearBlock.className = "year-block";
        yearBlock.id = `year-${year}`;

        const title = document.createElement("h2");
        title.className = "year-title";
        title.textContent = year;
        yearBlock.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "magazine-grid";

        data.years[year].forEach(item => {
            allMagazines.push(item);

            const card = document.createElement("div");
            card.className = "magazine-card";

            const img = document.createElement("img");
            img.src = `magazine-images/${item.cover}`;
            img.alt = item.title;

            img.addEventListener("click", () => {
                currentIndex = allMagazines.indexOf(item);
                currentYear = year;
                openLightbox(currentIndex);
            });

            const info = document.createElement("div");
            info.className = "magazine-info";
            info.innerHTML = `
        <h3>${item.name} ${item.issue}</h3>
        <p>${item.date}</p>
        <p>${item.title}</p>
      `;

            card.appendChild(img);
            card.appendChild(info);
            grid.appendChild(card);
        });

        yearBlock.appendChild(grid);
        gallery.appendChild(yearBlock);
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const thumbs = document.getElementById("lightbox-thumbnails");

    const item = allMagazines[index];
    lightbox.style.display = "flex";
    lightboxImg.src = `magazine-images/${item.cover}`;
    caption.textContent = `${item.name} ${item.issue} ｜ ${item.date} ｜ ${item.title}`;

    // 渲染缩略图（只显示同年份的杂志）
    thumbs.innerHTML = "";
    const yearItems = data.years[currentYear];
    yearItems.forEach((mag, i) => {
        const thumb = document.createElement("img");
        thumb.src = `magazine-images/${mag.cover}`;
        thumb.alt = mag.title;

        if (mag === item) thumb.classList.add("active");

        thumb.addEventListener("click", () => {
            currentIndex = allMagazines.indexOf(mag);
            openLightbox(currentIndex);
        });

        thumbs.appendChild(thumb);
    });
}

// 关闭按钮
document.querySelector(".close").onclick = function() {
    document.getElementById("lightbox").style.display = "none";
};

// 点击背景关闭
document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this) this.style.display = "none";
});

// 左按钮：上一张（按年份切换）
document.querySelector(".prev").onclick = function(e) {
    e.stopPropagation();
    const yearItems = data.years[currentYear];
    let yearIndex = yearItems.indexOf(allMagazines[currentIndex]);

    if (yearIndex > 0) {
        // 当前年份内往前翻
        currentIndex = allMagazines.indexOf(yearItems[yearIndex - 1]);
    } else {
        // 已经是当前年份第一张 -> 跳到前一年最后一张
        const years = Object.keys(data.years).sort();
        const currentYearIndex = years.indexOf(currentYear);
        if (currentYearIndex > 0) {
            const prevYear = years[currentYearIndex - 1];
            const prevYearItems = data.years[prevYear];
            currentYear = prevYear;
            currentIndex = allMagazines.indexOf(prevYearItems[prevYearItems.length - 1]);
        }
    }
    openLightbox(currentIndex);
};

// 右按钮：下一张（按年份切换）
document.querySelector(".next").onclick = function(e) {
    e.stopPropagation();
    const yearItems = data.years[currentYear];
    let yearIndex = yearItems.indexOf(allMagazines[currentIndex]);

    if (yearIndex < yearItems.length - 1) {
        // 当前年份内往后翻
        currentIndex = allMagazines.indexOf(yearItems[yearIndex + 1]);
    } else {
        // 已经是当前年份最后一张 -> 跳到下一年第一张
        const years = Object.keys(data.years).sort();
        const currentYearIndex = years.indexOf(currentYear);
        if (currentYearIndex < years.length - 1) {
            const nextYear = years[currentYearIndex + 1];
            const nextYearItems = data.years[nextYear];
            currentYear = nextYear;
            currentIndex = allMagazines.indexOf(nextYearItems[0]);
        }
    }
    openLightbox(currentIndex);
};

// 键盘控制（按年份切换）
document.addEventListener("keydown", function(e) {
    const lightbox = document.getElementById("lightbox");
    let touchStartX = 0;

    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", (e) => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            // 左滑 → 下一张
            document.querySelector(".next").click();
        } else if (touchEndX - touchStartX > 50) {
            // 右滑 → 上一张
            document.querySelector(".prev").click();
        }
    });

    const yearItems = data.years[currentYear];
    let yearIndex = yearItems.indexOf(allMagazines[currentIndex]);

    if (e.key === "ArrowLeft") {
        if (yearIndex > 0) {
            // 当前年份内往前翻
            currentIndex = allMagazines.indexOf(yearItems[yearIndex - 1]);
        } else {
            // 已经是当前年份第一张 -> 跳到前一年最后一张
            const years = Object.keys(data.years).sort();
            const currentYearIndex = years.indexOf(currentYear);
            if (currentYearIndex > 0) {
                const prevYear = years[currentYearIndex - 1];
                const prevYearItems = data.years[prevYear];
                currentYear = prevYear;
                currentIndex = allMagazines.indexOf(prevYearItems[prevYearItems.length - 1]);
            }
        }
        openLightbox(currentIndex);

    } else if (e.key === "ArrowRight") {
        if (yearIndex < yearItems.length - 1) {
            // 当前年份内往后翻
            currentIndex = allMagazines.indexOf(yearItems[yearIndex + 1]);
        } else {
            // 已经是当前年份最后一张 -> 跳到下一年第一张
            const years = Object.keys(data.years).sort();
            const currentYearIndex = years.indexOf(currentYear);
            if (currentYearIndex < years.length - 1) {
                const nextYear = years[currentYearIndex + 1];
                const nextYearItems = data.years[nextYear];
                currentYear = nextYear;
                currentIndex = allMagazines.indexOf(nextYearItems[0]);
            }
        }
        openLightbox(currentIndex);

    } else if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});

let chartInstance = null;
let currentType = "bar"; // 初始为柱状图

function renderChart() {
  const years = Object.keys(data.years).sort();
  const counts = years.map(year => data.years[year].length);

  const ctx = document.getElementById('magazineChart').getContext('2d');
  if (chartInstance) chartInstance.destroy(); // 销毁旧图表

  chartInstance = new Chart(ctx, {
    type: currentType,
    data: {
      labels: years,
      datasets: [{
        label: '杂志数量',
        data: counts,
        backgroundColor: currentType === "bar" 
          ? 'rgba(54, 162, 235, 0.7)' 
          : 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: currentType === "bar" ? 6 : 0,
        fill: currentType === "line"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `数量: ${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: '年份' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: '杂志数量' },
          ticks: { precision:0 }
        }
      }
    }
  });
}

// 绑定切换按钮
document.getElementById("toggleChart").addEventListener("click", () => {
  if (currentType === "bar") {
    currentType = "line";
    document.getElementById("toggleChart").textContent = "切换为柱状图";
  } else {
    currentType = "bar";
    document.getElementById("toggleChart").textContent = "切换为折线图";
  }
  renderChart();
});

// 页面渲染
renderMagazines();
renderChart();
