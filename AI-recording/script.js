// Sample data for articles
const articlesData = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in Healthcare",
        titleZhTW: "人工智慧在醫療保健領域的未來",
        excerpt: "Exploring how AI is revolutionizing medical diagnosis, treatment, and patient care with cutting-edge technologies and innovative applications.",
        excerptZhTW: "探索人工智慧如何透過尖端技術和創新應用，徹底改變醫療診斷、治療和患者護理。",
        content: `
            <h2>Introduction</h2>
            <p>Artificial Intelligence (AI) is transforming healthcare at an unprecedented pace. From diagnostic imaging to personalized treatment plans, AI technologies are revolutionizing how we approach medical care and patient outcomes.</p>
            
            <h2>AI in Medical Diagnosis</h2>
            <p>Machine learning algorithms are now capable of detecting diseases with accuracy that often exceeds human specialists. For example, AI systems can identify skin cancer from photographs, detect diabetic retinopathy in eye scans, and spot early signs of Alzheimer's disease in brain imaging.</p>
            
            <h3>Key Benefits:</h3>
            <ul>
                <li>Faster and more accurate diagnoses</li>
                <li>Early detection of diseases</li>
                <li>Reduced human error in medical interpretation</li>
                <li>Accessibility to expert-level diagnosis in remote areas</li>
            </ul>
            
            <h2>Personalized Treatment Plans</h2>
            <p>AI is enabling truly personalized medicine by analyzing vast amounts of patient data to create tailored treatment plans. This includes genetic information, lifestyle factors, medical history, and real-time health monitoring data.</p>
            
            <h2>Challenges and Considerations</h2>
            <p>While the potential is enormous, there are important challenges to address, including data privacy, algorithm bias, regulatory approval, and the need for human oversight in critical medical decisions.</p>
            
            <h2>The Road Ahead</h2>
            <p>As AI continues to evolve, we can expect even more sophisticated applications in healthcare, from robotic surgery to drug discovery and epidemic prediction. The future of medicine is undoubtedly intertwined with artificial intelligence.</p>
        `,
        contentZhTW: `
            <h2>引言</h2>
            <p>人工智慧（AI）正以前所未有的速度改變醫療保健。從診斷影像到個人化治療計劃，AI技術正在徹底改變我們處理醫療護理和患者治療結果的方式。</p>
            
            <h2>AI在醫療診斷中的應用</h2>
            <p>機器學習演算法現在能夠以經常超越人類專家的準確性檢測疾病。例如，AI系統可以從照片中識別皮膚癌，在眼部掃描中檢測糖尿病視網膜病變，並在腦部影像中發現阿茲海默症的早期徵象。</p>
            
            <h3>主要優勢：</h3>
            <ul>
                <li>更快速且更準確的診斷</li>
                <li>疾病的早期檢測</li>
                <li>減少醫療解釋中的人為錯誤</li>
                <li>在偏遠地區提供專家級診斷的可及性</li>
            </ul>
            
            <h2>個人化治療計劃</h2>
            <p>AI通過分析大量患者數據來創建量身定制的治療計劃，實現真正的個人化醫療。這包括基因信息、生活方式因素、病史和即時健康監測數據。</p>
            
            <h2>挑戰與考量</h2>
            <p>雖然潛力巨大，但仍有重要挑戰需要解決，包括數據隱私、演算法偏見、監管批准，以及在關鍵醫療決策中需要人類監督。</p>
            
            <h2>未來展望</h2>
            <p>隨著AI的持續發展，我們可以期待在醫療保健領域有更精密的應用，從機器人手術到藥物發現和流行病預測。醫學的未來無疑與人工智慧密不可分。</p>
        `,
        category: "Technology",
        author: "Dr. Sarah Chen",
        authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-15",
        readTime: "8 min read",
        likes: 245,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "Sustainable Living: Small Changes, Big Impact",
        titleZhTW: "永續生活：小改變，大影響",
        excerpt: "Discover practical ways to reduce your environmental footprint and contribute to a more sustainable future through everyday choices.",
        excerptZhTW: "發現透過日常選擇減少環境足跡並為更永續未來做出貢獻的實用方法。",
        content: `
            <h2>Why Sustainable Living Matters</h2>
            <p>Our planet is facing unprecedented environmental challenges, from climate change to resource depletion. The good news is that individual actions, when multiplied across millions of people, can create significant positive change.</p>
            
            <h2>Simple Steps to Get Started</h2>
            <h3>Energy Conservation</h3>
            <ul>
                <li>Switch to LED light bulbs</li>
                <li>Unplug electronics when not in use</li>
                <li>Use programmable thermostats</li>
                <li>Choose energy-efficient appliances</li>
            </ul>
            
            <h3>Water Conservation</h3>
            <ul>
                <li>Fix leaky faucets promptly</li>
                <li>Take shorter showers</li>
                <li>Collect rainwater for gardening</li>
                <li>Use water-efficient fixtures</li>
            </ul>
            
            <h2>Sustainable Transportation</h2>
            <p>Transportation accounts for a significant portion of carbon emissions. Consider walking, cycling, using public transport, or carpooling whenever possible. If you need a car, electric vehicles are becoming increasingly accessible and affordable.</p>
            
            <h2>Conscious Consumption</h2>
            <p>Before making purchases, ask yourself: Do I really need this? Can I buy it second-hand? Is there a more sustainable alternative? This mindset shift can dramatically reduce waste and save money.</p>
            
            <h2>Creating Lasting Change</h2>
            <p>Sustainable living is a journey, not a destination. Start with small changes that feel manageable, and gradually build upon them. Remember, perfection isn't the goal – progress is.</p>
        `,
        contentZhTW: `
            <h2>為什麼永續生活很重要</h2>
            <p>我們的地球正面臨前所未有的環境挑戰，從氣候變遷到資源枯竭。好消息是，個人行動在數百萬人的共同努力下，可以創造重大的正面改變。</p>
            
            <h2>開始的簡單步驟</h2>
            <h3>節能</h3>
            <ul>
                <li>改用LED燈泡</li>
                <li>不使用時拔掉電器插頭</li>
                <li>使用可程式恆溫器</li>
                <li>選擇節能電器</li>
            </ul>
            
            <h3>節水</h3>
            <ul>
                <li>及時修理漏水的水龍頭</li>
                <li>縮短淋浴時間</li>
                <li>收集雨水用於園藝</li>
                <li>使用節水設備</li>
            </ul>
            
            <h2>永續交通</h2>
            <p>交通運輸佔碳排放的重要部分。盡可能考慮步行、騎自行車、使用大眾運輸或共乘。如果您需要汽車，電動車正變得越來越普及和負擔得起。</p>
            
            <h2>理性消費</h2>
            <p>在購買前，問問自己：我真的需要這個嗎？我可以買二手的嗎？有更永續的替代方案嗎？這種思維轉變可以大幅減少浪費並節省金錢。</p>
            
            <h2>創造持久改變</h2>
            <p>永續生活是一個旅程，而不是目的地。從感覺可管理的小改變開始，並逐漸在此基礎上發展。記住，完美不是目標──進步才是。</p>
        `,
        category: "Lifestyle",
        author: "Maria Rodriguez",
        authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-12",
        readTime: "6 min read",
        likes: 189,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
        featured: true
    },
    {
        id: 3,
        title: "The Rise of Remote Work: Adapting to the New Normal",
        titleZhTW: "遠距工作的興起：適應新常態",
        excerpt: "An in-depth look at how remote work has transformed the modern workplace and what it means for the future of employment.",
        excerptZhTW: "深入探討遠距工作如何改變現代職場，以及這對就業未來的意義。",
        content: `
            <h2>The Remote Work Revolution</h2>
            <p>The global pandemic accelerated a trend that was already emerging: the shift toward remote work. What started as a necessity has become a preferred way of working for millions of professionals worldwide.</p>
            
            <h2>Benefits of Remote Work</h2>
            <h3>For Employees:</h3>
            <ul>
                <li>Better work-life balance</li>
                <li>Elimination of commute time and costs</li>
                <li>Increased flexibility and autonomy</li>
                <li>Access to global job opportunities</li>
            </ul>
            
            <h3>For Employers:</h3>
            <ul>
                <li>Access to a wider talent pool</li>
                <li>Reduced office overhead costs</li>
                <li>Increased employee satisfaction and retention</li>
                <li>Improved productivity in many cases</li>
            </ul>
            
            <h2>Challenges and Solutions</h2>
            <p>Remote work isn't without its challenges. Communication barriers, feelings of isolation, and difficulty maintaining work-life boundaries are common issues. However, these can be addressed through:</p>
            <ul>
                <li>Regular video calls and team meetings</li>
                <li>Dedicated workspace setup</li>
                <li>Clear communication protocols</li>
                <li>Virtual team-building activities</li>
            </ul>
            
            <h2>The Future of Work</h2>
            <p>As we move forward, hybrid work models are becoming increasingly popular, combining the benefits of remote work with occasional in-person collaboration. This flexible approach seems to be the sweet spot for many organizations and employees.</p>
            
            <h2>Tips for Remote Work Success</h2>
            <ol>
                <li>Establish a dedicated workspace</li>
                <li>Maintain regular schedules</li>
                <li>Invest in good technology and ergonomic furniture</li>
                <li>Take regular breaks and maintain boundaries</li>
                <li>Stay connected with colleagues and maintain relationships</li>
            </ol>
        `,
        contentZhTW: `
            <h2>遠距工作革命</h2>
            <p>全球疫情加速了一個已經出現的趨勢：向遠距工作的轉變。從必要性開始的工作方式，已成為全球數百萬專業人士的首選工作方式。</p>
            
            <h2>遠距工作的好處</h2>
            <h3>對員工而言：</h3>
            <ul>
                <li>更好的工作與生活平衡</li>
                <li>消除通勤時間和成本</li>
                <li>增加靈活性和自主性</li>
                <li>獲得全球工作機會</li>
            </ul>
            
            <h3>對雇主而言：</h3>
            <ul>
                <li>獲得更廣泛的人才庫</li>
                <li>減少辦公室營運成本</li>
                <li>提高員工滿意度和留任率</li>
                <li>在許多情況下提高生產力</li>
            </ul>
            
            <h2>挑戰與解決方案</h2>
            <p>遠距工作並非沒有挑戰。溝通障礙、孤立感和難以維持工作與生活界限是常見問題。然而，這些可以通過以下方式解決：</p>
            <ul>
                <li>定期視訊通話和團隊會議</li>
                <li>專用工作空間設置</li>
                <li>明確的溝通協議</li>
                <li>虛擬團隊建設活動</li>
            </ul>
            
            <h2>工作的未來</h2>
            <p>隨著我們向前發展，混合工作模式正變得越來越受歡迎，結合了遠距工作的好處和偶爾的面對面協作。這種靈活的方法似乎是許多組織和員工的最佳選擇。</p>
            
            <h2>遠距工作成功秘訣</h2>
            <ol>
                <li>建立專用工作空間</li>
                <li>維持規律作息</li>
                <li>投資優質技術和人體工學家具</li>
                <li>定期休息並維持界限</li>
                <li>與同事保持聯繫並維護關係</li>
            </ol>
        `,
        category: "Business",
        author: "James Thompson",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-10",
        readTime: "7 min read",
        likes: 156,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
        featured: true
    },
    {
        id: 4,
        title: "Mindfulness and Mental Health in the Digital Age",
        titleZhTW: "數位時代的正念與心理健康",
        excerpt: "Exploring the relationship between technology use and mental well-being, and practical strategies for maintaining balance.",
        excerptZhTW: "探索科技使用與心理健康之間的關係，以及維持平衡的實用策略。",
        content: `
            <h2>The Digital Dilemma</h2>
            <p>While technology has brought unprecedented connectivity and convenience, it has also introduced new challenges for mental health. The constant stream of notifications, social media comparisons, and information overload can take a toll on our psychological well-being.</p>
            
            <h2>Understanding Digital Stress</h2>
            <p>Digital stress manifests in various ways:</p>
            <ul>
                <li>Fear of missing out (FOMO)</li>
                <li>Social media anxiety</li>
                <li>Information overload</li>
                <li>Sleep disruption from screen time</li>
                <li>Decreased attention span</li>
            </ul>
            
            <h2>The Power of Mindfulness</h2>
            <p>Mindfulness practices can help us develop a healthier relationship with technology. By being present and intentional about our digital consumption, we can reduce stress and improve our overall well-being.</p>
            
            <h3>Practical Mindfulness Techniques:</h3>
            <ol>
                <li><strong>Digital Detox:</strong> Schedule regular breaks from all devices</li>
                <li><strong>Mindful Consumption:</strong> Be intentional about what content you consume</li>
                <li><strong>Notification Management:</strong> Turn off non-essential notifications</li>
                <li><strong>Screen-Free Zones:</strong> Designate areas or times without devices</li>
                <li><strong>Meditation Apps:</strong> Use technology mindfully to support mental health</li>
            </ol>
            
            <h2>Building Healthy Digital Habits</h2>
            <p>Creating sustainable digital habits requires conscious effort and consistent practice. Start small and gradually build upon your successes.</p>
            
            <h2>The Path Forward</h2>
            <p>Technology isn't inherently good or bad – it's how we use it that matters. By practicing mindfulness and setting intentional boundaries, we can harness the benefits of digital tools while protecting our mental health.</p>
        `,
        contentZhTW: `
            <h2>數位困境</h2>
            <p>雖然科技帶來了前所未有的連接性和便利性，但它也為心理健康帶來了新的挑戰。持續不斷的通知、社群媒體比較和信息超載可能對我們的心理健康造成影響。</p>
            
            <h2>理解數位壓力</h2>
            <p>數位壓力以各種方式表現出來：</p>
            <ul>
                <li>害怕錯過（FOMO）</li>
                <li>社群媒體焦慮</li>
                <li>信息超載</li>
                <li>螢幕時間導致的睡眠中斷</li>
                <li>注意力持續時間減少</li>
            </ul>
            
            <h2>正念的力量</h2>
            <p>正念練習可以幫助我們與科技發展更健康的關係。通過對我們的數位消費保持專注和有意識，我們可以減少壓力並改善整體健康。</p>
            
            <h3>實用的正念技巧：</h3>
            <ol>
                <li><strong>數位排毒：</strong>安排定期從所有設備中休息</li>
                <li><strong>正念消費：</strong>對您消費的內容保持有意識</li>
                <li><strong>通知管理：</strong>關閉非必要的通知</li>
                <li><strong>無螢幕區域：</strong>指定沒有設備的區域或時間</li>
                <li><strong>冥想應用程式：</strong>有意識地使用科技來支持心理健康</li>
            </ol>
            
            <h2>建立健康的數位習慣</h2>
            <p>創建可持續的數位習慣需要有意識的努力和持續的練習。從小開始，逐漸在你的成功基礎上發展。</p>
            
            <h2>前進的道路</h2>
            <p>科技本身並非好壞──重要的是我們如何使用它。通過練習正念和設定有意識的界限，我們可以利用數位工具的好處，同時保護我們的心理健康。</p>
        `,
        category: "Health",
        author: "Dr. Lisa Park",
        authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-08",
        readTime: "9 min read",
        likes: 203,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 5,
        title: "The Science of Sleep: Why Quality Rest Matters",
        titleZhTW: "睡眠科學：為什麼優質休息很重要",
        excerpt: "Understanding the critical role of sleep in our physical and mental health, and practical tips for better sleep hygiene.",
        excerptZhTW: "了解睡眠在我們身心健康中的關鍵作用，以及改善睡眠衛生的實用建議。",
        content: `
            <h2>Why Sleep Matters</h2>
            <p>Sleep is not a luxury – it's a biological necessity. During sleep, our bodies repair tissue, consolidate memories, and prepare for the challenges of the next day. Quality sleep is as important as proper nutrition and regular exercise for maintaining optimal health.</p>
            
            <h2>The Sleep Cycle</h2>
            <p>Sleep occurs in cycles, each lasting about 90 minutes. These cycles include different stages:</p>
            <ul>
                <li><strong>Light Sleep:</strong> Transition from wakefulness to sleep</li>
                <li><strong>Deep Sleep:</strong> Physical restoration and memory consolidation</li>
                <li><strong>REM Sleep:</strong> Dreaming and emotional processing</li>
            </ul>
            
            <h2>Consequences of Poor Sleep</h2>
            <p>Chronic sleep deprivation can lead to:</p>
            <ul>
                <li>Weakened immune system</li>
                <li>Weight gain and metabolic issues</li>
                <li>Increased risk of chronic diseases</li>
                <li>Impaired cognitive function</li>
                <li>Mood disorders and increased stress</li>
            </ul>
            
            <h2>Sleep Hygiene Best Practices</h2>
            <h3>Create the Ideal Sleep Environment:</h3>
            <ul>
                <li>Keep your bedroom cool, dark, and quiet</li>
                <li>Invest in a comfortable mattress and pillows</li>
                <li>Remove electronic devices from the bedroom</li>
                <li>Use blackout curtains or an eye mask</li>
            </ul>
            
            <h3>Establish a Bedtime Routine:</h3>
            <ol>
                <li>Go to bed and wake up at consistent times</li>
                <li>Create a relaxing pre-sleep routine</li>
                <li>Avoid caffeine and large meals before bedtime</li>
                <li>Limit screen time in the evening</li>
                <li>Practice relaxation techniques</li>
            </ol>
            
            <h2>When to Seek Help</h2>
            <p>If you consistently have trouble sleeping despite following good sleep hygiene practices, consider consulting a healthcare professional. Sleep disorders are common and treatable.</p>
        `,
        contentZhTW: `
            <h2>為什麼睡眠很重要</h2>
            <p>睡眠不是奢侈品──它是生物學必需品。在睡眠期間，我們的身體修復組織、鞏固記憶，並為隔日的挑戰做準備。優質睡眠與適當營養和定期運動一樣重要，對維持最佳健康狀態至關重要。</p>
            
            <h2>睡眠週期</h2>
            <p>睡眠以週期進行，每個週期持續約90分鐘。這些週期包括不同階段：</p>
            <ul>
                <li><strong>淺眠：</strong>從清醒到睡眠的過渡</li>
                <li><strong>深眠：</strong>身體恢復和記憶鞏固</li>
                <li><strong>快速動眼期睡眠：</strong>做夢和情緒處理</li>
            </ul>
            
            <h2>睡眠不足的後果</h2>
            <p>慢性睡眠不足可能導致：</p>
            <ul>
                <li>免疫系統削弱</li>
                <li>體重增加和代謝問題</li>
                <li>慢性疾病風險增加</li>
                <li>認知功能受損</li>
                <li>情緒障礙和壓力增加</li>
            </ul>
            
            <h2>睡眠衛生最佳實踐</h2>
            <h3>創造理想的睡眠環境：</h3>
            <ul>
                <li>保持臥室涼爽、黑暗和安靜</li>
                <li>投資舒適的床墊和枕頭</li>
                <li>從臥室移除電子設備</li>
                <li>使用遮光窗簾或眼罩</li>
            </ul>
            
            <h3>建立就寢例行公事：</h3>
            <ol>
                <li>在固定時間上床睡覺和起床</li>
                <li>創建放鬆的睡前例行公事</li>
                <li>睡前避免咖啡因和大餐</li>
                <li>限制晚上的螢幕時間</li>
                <li>練習放鬆技巧</li>
            </ol>
            
            <h2>何時尋求幫助</h2>
            <p>如果儘管遵循良好的睡眠衛生習慣，您仍持續有睡眠困難，請考慮諮詢醫療專業人員。睡眠障礙很常見且可以治療。</p>
        `,
        category: "Health",
        author: "Dr. Michael Foster",
        authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-06",
        readTime: "10 min read",
        likes: 178,
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 6,
        title: "Cryptocurrency: Understanding the Digital Currency Revolution",
        titleZhTW: "加密貨幣：了解數位貨幣革命",
        excerpt: "A comprehensive guide to cryptocurrencies, blockchain technology, and their potential impact on the future of finance.",
        excerptZhTW: "全面指南介紹加密貨幣、區塊鏈技術，以及它們對金融未來的潛在影響。",
        content: `
            <h2>What is Cryptocurrency?</h2>
            <p>Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.</p>
            
            <h2>Understanding Blockchain</h2>
            <p>Blockchain is the underlying technology that makes cryptocurrencies possible. It's a distributed ledger that records all transactions across a network of computers, making it nearly impossible to change, hack, or cheat the system.</p>
            
            <h3>Key Features of Blockchain:</h3>
            <ul>
                <li>Decentralization</li>
                <li>Transparency</li>
                <li>Immutability</li>
                <li>Security</li>
            </ul>
            
            <h2>Popular Cryptocurrencies</h2>
            <h3>Bitcoin (BTC)</h3>
            <p>The first and most well-known cryptocurrency, created by the pseudonymous Satoshi Nakamoto in 2009.</p>
            
            <h3>Ethereum (ETH)</h3>
            <p>A platform that enables smart contracts and decentralized applications (DApps).</p>
            
            <h3>Other Notable Cryptocurrencies</h3>
            <ul>
                <li>Binance Coin (BNB)</li>
                <li>Cardano (ADA)</li>
                <li>Solana (SOL)</li>
                <li>Polkadot (DOT)</li>
            </ul>
            
            <h2>Potential Benefits</h2>
            <ul>
                <li>Lower transaction fees</li>
                <li>Faster international transfers</li>
                <li>Financial inclusion for the unbanked</li>
                <li>Protection against inflation</li>
                <li>Programmable money through smart contracts</li>
            </ul>
            
            <h2>Risks and Considerations</h2>
            <ul>
                <li>Extreme price volatility</li>
                <li>Regulatory uncertainty</li>
                <li>Security risks and scams</li>
                <li>Environmental concerns</li>
                <li>Technical complexity</li>
            </ul>
            
            <h2>The Future of Digital Currency</h2>
            <p>As the technology matures and regulations become clearer, cryptocurrencies may play an increasingly important role in the global financial system. However, it's important to approach this space with caution and proper education.</p>
        `,
        contentZhTW: `
            <h2>什麼是加密貨幣？</h2>
            <p>加密貨幣是使用密碼學來確保安全的數位或虛擬貨幣。與政府發行的傳統貨幣不同，加密貨幣在基於區塊鏈技術的去中心化網路上運作。</p>
            
            <h2>理解區塊鏈</h2>
            <p>區塊鏈是使加密貨幣成為可能的基礎技術。它是一個分散式帳本，記錄網路中所有電腦的所有交易，使得改變、駭客攻擊或欺騙系統幾乎不可能。</p>
            
            <h3>區塊鏈的主要特徵：</h3>
            <ul>
                <li>去中心化</li>
                <li>透明度</li>
                <li>不可變性</li>
                <li>安全性</li>
            </ul>
            
            <h2>熱門加密貨幣</h2>
            <h3>比特幣（BTC）</h3>
            <p>第一個也是最知名的加密貨幣，由化名中本聰的人在2009年創建。</p>
            
            <h3>以太坊（ETH）</h3>
            <p>一個支持智能合約和去中心化應用程式（DApps）的平台。</p>
            
            <h3>其他著名的加密貨幣</h3>
            <ul>
                <li>幣安幣（BNB）</li>
                <li>卡爾達諾（ADA）</li>
                <li>Solana（SOL）</li>
                <li>Polkadot（DOT）</li>
            </ul>
            
            <h2>潛在好處</h2>
            <ul>
                <li>較低的交易費用</li>
                <li>更快的國際轉帳</li>
                <li>為無銀行帳戶者提供金融包容性</li>
                <li>對抗通脹的保護</li>
                <li>通過智能合約實現可程式貨幣</li>
            </ul>
            
            <h2>風險和考量</h2>
            <ul>
                <li>極端的價格波動</li>
                <li>監管不確定性</li>
                <li>安全風險和詐騙</li>
                <li>環境問題</li>
                <li>技術複雜性</li>
            </ul>
            
            <h2>數位貨幣的未來</h2>
            <p>隨著技術的成熟和法規的明確化，加密貨幣可能在全球金融系統中發揮越來越重要的作用。然而，重要的是要以謹慎和適當的教育來接近這個領域。</p>
        `,
        category: "Technology",
        author: "Alex Kim",
        authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        date: "2025-01-04",
        readTime: "12 min read",
        likes: 134,
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
        featured: false
    }
];

// Categories data
const categoriesData = [
    { name: "Technology", icon: "fas fa-laptop-code", count: 2, description: "Latest in tech and innovation" },
    { name: "Health", icon: "fas fa-heartbeat", count: 2, description: "Wellness and medical insights" },
    { name: "Business", icon: "fas fa-briefcase", count: 1, description: "Business trends and strategies" },
    { name: "Lifestyle", icon: "fas fa-leaf", count: 1, description: "Living better every day" },
    { name: "Science", icon: "fas fa-microscope", count: 0, description: "Scientific discoveries" },
    { name: "Education", icon: "fas fa-graduation-cap", count: 0, description: "Learning and development" }
];

// DOM elements
const articlesGrid = document.getElementById('articlesGrid');
const featuredArticles = document.getElementById('featuredArticles');
const categoriesGrid = document.getElementById('categoriesGrid');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const articleModal = document.getElementById('articleModal');
const loadingSpinner = document.getElementById('loadingSpinner');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// State variables
let displayedArticles = 0;
const articlesPerPage = 6;
let filteredArticles = [...articlesData];
let likedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
let bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];

// Text-to-Speech variables
let currentSpeech = null;
let currentReadingArticleId = null;
let isReading = false;

// Audio recording variables for MP3 download
let audioContext = null;
let mediaRecorder = null;
let audioChunks = [];
let isRecordingAudio = false;

// Multi-language support
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Translation data
const translations = {
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-articles': 'Articles',
        'nav-categories': 'Categories',
        'nav-about': 'About',
        
        // Hero Section
        'hero-title': 'Discover Amazing Articles',
        'hero-subtitle': 'Explore a world of knowledge with our curated collection of articles',
        'hero-cta': 'Start Reading',
        
        // Sections
        'featured-title': 'Featured Articles',
        'categories-title': 'Browse by Category',
        'articles-title': 'Latest Articles',
        'about-title': 'About ArticleHub',
        'about-text': 'ArticleHub is your go-to destination for high-quality articles across various topics. We curate and present content that informs, inspires, and engages readers from all walks of life.',
        
        // Stats
        'stat-articles': 'Articles',
        'stat-categories': 'Categories',
        'stat-readers': 'Readers',
        
        // Filters and Actions
        'filter-all': 'All Categories',
        'sort-newest': 'Newest First',
        'sort-oldest': 'Oldest First',
        'sort-popular': 'Most Popular',
        'load-more': 'Load More Articles',
        
        // Buttons and Actions
        'read-aloud': 'Read Aloud',
        'stop-reading': 'Stop Reading',
        'read-full-article': 'Read Full Article',
        'like': 'Like',
        'share': 'Share',
        'bookmark': 'Bookmark',
        
        // Categories
        'category-technology': 'Technology',
        'category-health': 'Health',
        'category-business': 'Business',
        'category-lifestyle': 'Lifestyle',
        'category-science': 'Science',
        'category-education': 'Education',
        
        // Category descriptions
        'category-desc-technology': 'Latest in tech and innovation',
        'category-desc-health': 'Wellness and medical insights',
        'category-desc-business': 'Business trends and strategies',
        'category-desc-lifestyle': 'Living better every day',
        'category-desc-science': 'Scientific discoveries',
        'category-desc-education': 'Learning and development',
        
        // Search and placeholders
        'search-placeholder': 'Search articles...',
        'newsletter-placeholder': 'Enter your email',
        'newsletter-subscribe': 'Subscribe',
        
        // Time and reading
        'min-read': 'min read',
        'articles-count': 'articles',
        
        // Audio download
        'download-audio-confirm': 'Would you like to download the audio recording?',
        'download-full-audio-confirm': 'Would you like to download the full article audio recording?',
        'no-audio-recorded': 'No audio recorded to download.',
        'download-error': 'Error downloading audio file.',
        'audio-setup-guide': 'Audio Setup Required',
        'stereo-mix-guide': 'To record TTS audio, please enable "Stereo Mix" in your system:\n\n1. Right-click sound icon → Recording devices\n2. Right-click empty area → Show disabled devices\n3. Enable "Stereo Mix" and set as default\n4. Try again after setup',
        'permission-denied': 'Microphone permission denied. Please allow microphone access and ensure Stereo Mix is enabled.',
        'recording-tip': 'Tip: This feature records system audio through your microphone. Make sure your speakers are on and Stereo Mix is enabled.',
        'generating-audio': 'Generating audio file...',
        'generating-full-audio': 'Generating full article audio file...',
        'microphone-permission-error': 'Unable to generate audio file. Please ensure microphone permission is granted.',
        'audio-not-supported': 'Audio recording is not supported in your browser.',
        'try-different-browser': 'Please try using Chrome, Firefox, or Edge browser.',
        'microphone-help-title': 'How to Enable Microphone Permission:',
        'microphone-help-chrome': '1. Click the microphone icon in the address bar\n2. Select "Allow" for microphone access',
        'microphone-help-firefox': '1. Click the microphone icon in the address bar\n2. Choose "Allow" and click "Remember this decision"',
        'microphone-help-general': '1. Refresh the page\n2. Click "Allow" when prompted for microphone access\n3. Make sure your microphone is connected and working'
    },
    'zh-TW': {
        // Navigation
        'nav-home': '首頁',
        'nav-articles': '文章',
        'nav-categories': '分類',
        'nav-about': '關於',
        
        // Hero Section
        'hero-title': '探索精彩文章',
        'hero-subtitle': '透過我們精心策劃的文章集合，探索知識的世界',
        'hero-cta': '開始閱讀',
        
        // Sections
        'featured-title': '精選文章',
        'categories-title': '依分類瀏覽',
        'articles-title': '最新文章',
        'about-title': '關於 ArticleHub',
        'about-text': 'ArticleHub 是您獲取各種主題高品質文章的首選目的地。我們策劃並呈現能夠啟發、教育和吸引各行各業讀者的內容。',
        
        // Stats
        'stat-articles': '文章',
        'stat-categories': '分類',
        'stat-readers': '讀者',
        
        // Filters and Actions
        'filter-all': '所有分類',
        'sort-newest': '最新優先',
        'sort-oldest': '最舊優先',
        'sort-popular': '最受歡迎',
        'load-more': '載入更多文章',
        
        // Buttons and Actions
        'read-aloud': '朗讀',
        'stop-reading': '停止朗讀',
        'read-full-article': '朗讀全文',
        'like': '喜歡',
        'share': '分享',
        'bookmark': '書籤',
        
        // Categories
        'category-technology': '科技',
        'category-health': '健康',
        'category-business': '商業',
        'category-lifestyle': '生活風格',
        'category-science': '科學',
        'category-education': '教育',
        
        // Category descriptions
        'category-desc-technology': '最新科技與創新',
        'category-desc-health': '健康與醫療見解',
        'category-desc-business': '商業趋勢與策略',
        'category-desc-lifestyle': '每天更好的生活',
        'category-desc-science': '科學發現',
        'category-desc-education': '學習與發展',
        
        // Search and placeholders
        'search-placeholder': '搜尋文章...',
        'newsletter-placeholder': '輸入您的電子郵件',
        'newsletter-subscribe': '訂閱',
        
        // Time and reading
        'min-read': '分鐘閱讀',
        'articles-count': '篇文章',
        
        // Audio download
        'download-audio-confirm': '您想要下載音頻錄音嗎？',
        'download-full-audio-confirm': '您想要下載完整文章的音頻錄音嗎？',
        'no-audio-recorded': '沒有錄製的音頻可供下載。',
        'download-error': '下載音頻檔案時發生錯誤。',
        'audio-setup-guide': '音頻設置需求',
        'stereo-mix-guide': '要錄製TTS音頻，請在系統中啟用「立體聲混音」：\n\n1. 右鍵點擊音量圖示 → 錄音裝置\n2. 右鍵點擊空白處 → 顯示已停用的裝置\n3. 啟用「立體聲混音」並設為預設\n4. 設置完成後重新嘗試',
        'permission-denied': '麥克風權限被拒絕。請允許麥克風存取並確保已啟用立體聲混音。',
        'recording-tip': '提示：此功能透過麥克風錄製系統音頻。請確保揚聲器開啟且已啟用立體聲混音。',
        'generating-audio': '正在生成音頻檔案...',
        'generating-full-audio': '正在生成完整文章音頻檔案...',
        'microphone-permission-error': '無法生成音頻檔案。請確保您已允許麥克風權限。',
        'audio-not-supported': '您的瀏覽器不支援音頻錄製功能。',
        'try-different-browser': '請嘗試使用 Chrome、Firefox 或 Edge 瀏覽器。',
        'microphone-help-title': '如何啟用麥克風權限：',
        'microphone-help-chrome': '1. 點擊網址列中的麥克風圖示\n2. 選擇「允許」麥克風存取',
        'microphone-help-firefox': '1. 點擊網址列中的麥克風圖示\n2. 選擇「允許」並點擊「記住此決定」',
        'microphone-help-general': '1. 重新整理頁面\n2. 當提示麥克風存取時點擊「允許」\n3. 確保您的麥克風已連接且正常工作'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set initial language
    setActiveLanguage(currentLanguage);
    translatePage(currentLanguage);
    
    loadFeaturedArticles();
    loadCategories();
    loadArticles();
    setupEventListeners();
    updateCategoryFilter();
    setupNavigation();
}

// Event listeners
function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter and sort
    categoryFilter.addEventListener('change', handleFilterChange);
    sortFilter.addEventListener('change', handleSortChange);

    // Load more articles
    loadMoreBtn.addEventListener('click', loadMoreArticles);

    // Modal functionality
    document.getElementById('closeModal').addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === articleModal) {
            closeModal();
        }
    });

    // Mobile menu
    mobileMenu.addEventListener('click', toggleMobileMenu);

    // Newsletter subscription
    document.querySelector('.newsletter-btn').addEventListener('click', handleNewsletterSubscription);

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            setActiveNavLink(this);
        });
    });
}

// Navigation functions
function setupNavigation() {
    // Set active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = ['home', 'articles', 'categories', 'about'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const navLink = document.querySelector(`a[href="#${sectionId}"]`);
                    if (navLink) {
                        setActiveNavLink(navLink);
                    }
                }
            }
        });
    });
}

function setActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = 80;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Article loading functions
function loadFeaturedArticles() {
    const featured = articlesData.filter(article => article.featured);
    featuredArticles.innerHTML = featured.map(article => createFeaturedCard(article)).join('');
}

function loadCategories() {
    categoriesGrid.innerHTML = categoriesData.map(category => createCategoryCard(category)).join('');
}

function loadArticles() {
    const startIndex = displayedArticles;
    const endIndex = Math.min(startIndex + articlesPerPage, filteredArticles.length);
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    if (startIndex === 0) {
        articlesGrid.innerHTML = '';
    }

    articlesGrid.innerHTML += articlesToShow.map(article => createArticleCard(article)).join('');
    displayedArticles = endIndex;

    // Update load more button
    if (displayedArticles >= filteredArticles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreArticles() {
    showLoading();
    setTimeout(() => {
        loadArticles();
        hideLoading();
    }, 500);
}

// Card creation functions
function createFeaturedCard(article) {
    const categoryName = getCategoryName(article.category);
    
    // Use translated title and excerpt if available
    const title = currentLanguage === 'zh-TW' && article.titleZhTW ? article.titleZhTW : article.title;
    const excerpt = currentLanguage === 'zh-TW' && article.excerptZhTW ? article.excerptZhTW : article.excerpt;
    
    return `
        <div class="featured-card" onclick="openArticle(${article.id})">
            <img src="${article.image}" alt="${title}">
            <div class="featured-card-content">
                <h3>${title}</h3>
                <p>${excerpt}</p>
                <div class="card-meta">
                    <span class="card-category">${categoryName}</span>
                    <span>${formatDate(article.date)}</span>
                </div>
            </div>
        </div>
    `;
}

function createCategoryCard(category) {
    const translatedName = getCategoryName(category.name);
    const translatedDescription = getCategoryDescription(category.name);
    const articlesText = getTranslation('articles-count');
    
    return `
        <div class="category-card" onclick="filterByCategory('${category.name}')">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${translatedName}</h3>
            <p class="category-count">${category.count} ${articlesText}</p>
        </div>
    `;
}

function createArticleCard(article) {
    const isLiked = likedArticles.includes(article.id);
    const isBookmarked = bookmarkedArticles.includes(article.id);
    const readAloudText = getTranslation('read-aloud');
    const categoryName = getCategoryName(article.category);
    
    // Use translated title and excerpt if available
    const title = currentLanguage === 'zh-TW' && article.titleZhTW ? article.titleZhTW : article.title;
    const excerpt = currentLanguage === 'zh-TW' && article.excerptZhTW ? article.excerptZhTW : article.excerpt;
    
    return `
        <div class="article-card">
            <div onclick="openArticle(${article.id})">
                <img src="${article.image}" alt="${title}">
                <div class="article-card-content">
                    <h3>${title}</h3>
                    <p>${excerpt}</p>
                    <div class="article-author">
                        <img src="${article.authorAvatar}" alt="${article.author}" class="author-avatar">
                        <span class="author-name">${article.author}</span>
                    </div>
                    <div class="card-meta">
                        <span class="card-category">${categoryName}</span>
                        <span>${formatDate(article.date)} • ${article.readTime}</span>
                    </div>
                </div>
            </div>
            <div class="article-actions-card">
                <button class="read-aloud-btn" onclick="event.stopPropagation(); toggleReadAloud(${article.id}, this)" title="${readAloudText}">
                    <i class="fas fa-volume-up"></i>
                    <span class="read-aloud-text">${readAloudText}</span>
                </button>
            </div>
        </div>
    `;
}

// Search and filter functions
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredArticles = [...articlesData];
    } else {
        filteredArticles = articlesData.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.category.toLowerCase().includes(searchTerm) ||
            article.author.toLowerCase().includes(searchTerm)
        );
    }
    
    resetArticlesDisplay();
}

function handleFilterChange() {
    const selectedCategory = categoryFilter.value;
    
    if (selectedCategory === 'all') {
        filteredArticles = [...articlesData];
    } else {
        filteredArticles = articlesData.filter(article => article.category === selectedCategory);
    }
    
    resetArticlesDisplay();
}

function handleSortChange() {
    const sortBy = sortFilter.value;
    
    switch (sortBy) {
        case 'newest':
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'popular':
            filteredArticles.sort((a, b) => b.likes - a.likes);
            break;
    }
    
    resetArticlesDisplay();
}

function filterByCategory(categoryName) {
    categoryFilter.value = categoryName;
    handleFilterChange();
    scrollToSection('articles');
}

function resetArticlesDisplay() {
    displayedArticles = 0;
    articlesGrid.innerHTML = '';
    loadArticles();
}

function updateCategoryFilter() {
    // Clear existing options except the first one (All Categories)
    const firstOption = categoryFilter.firstElementChild;
    categoryFilter.innerHTML = '';
    categoryFilter.appendChild(firstOption);
    
    // Update "All Categories" text
    firstOption.textContent = getTranslation('filter-all');
    
    const categories = [...new Set(articlesData.map(article => article.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = getCategoryName(category);
        categoryFilter.appendChild(option);
    });
}

// Modal functions
function openArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;

    // Use translated content if available
    const title = currentLanguage === 'zh-TW' && article.titleZhTW ? article.titleZhTW : article.title;
    const content = currentLanguage === 'zh-TW' && article.contentZhTW ? article.contentZhTW : article.content;
    const categoryName = getCategoryName(article.category);
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalCategory').textContent = categoryName;
    document.getElementById('modalDate').textContent = formatDate(article.date);
    document.getElementById('modalAuthorName').textContent = article.author;
    document.getElementById('modalAuthorAvatar').src = article.authorAvatar;
    document.getElementById('modalReadTime').textContent = article.readTime;
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('likeCount').textContent = article.likes;

    // Update action buttons
    const likeBtn = document.getElementById('likeBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    likeBtn.classList.toggle('liked', likedArticles.includes(articleId));
    bookmarkBtn.classList.toggle('bookmarked', bookmarkedArticles.includes(articleId));

    // Setup action button events
    likeBtn.onclick = () => toggleLike(articleId);
    bookmarkBtn.onclick = () => toggleBookmark(articleId);
    document.getElementById('shareBtn').onclick = () => shareArticle(article);
    document.getElementById('readAloudModalBtn').onclick = () => toggleModalReadAloud(articleId);

    // Reset modal read aloud button
    const modalReadBtn = document.getElementById('readAloudModalBtn');
    updateModalReadAloudButton(modalReadBtn, false);

    // Show modal
    articleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Stop any current reading when closing modal
    if (currentSpeech && currentReadingArticleId) {
        speechSynthesis.cancel();
        currentSpeech = null;
        isReading = false;
        currentReadingArticleId = null;
    }
    
    articleModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function toggleModalReadAloud(articleId) {
    const modalReadBtn = document.getElementById('readAloudModalBtn');
    
    if (currentReadingArticleId === articleId && isReading) {
        // Stop current reading
        stopModalReadAloud();
    } else {
        // Start reading full article
        startModalReadAloud(articleId);
    }
}

function startModalReadAloud(articleId) {
    // Stop any current reading
    if (currentSpeech) {
        currentSpeech.cancel();
    }
    
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech functionality.');
        return;
    }
    
    // Use translated content for TTS if available
    const title = currentLanguage === 'zh-TW' && article.titleZhTW ? article.titleZhTW : article.title;
    const content = currentLanguage === 'zh-TW' && article.contentZhTW ? article.contentZhTW : article.content;
    
    // Prepare full article text (title + content without HTML tags)
    const contentText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const textToRead = `${title}. ${contentText}`;
    
    // Create speech synthesis utterance
    currentSpeech = new SpeechSynthesisUtterance(textToRead);
    
    // Configure speech settings for longer content
    currentSpeech.rate = 1.0;
    currentSpeech.pitch = 1.0;
    currentSpeech.volume = 1.0;
    
    // Set voice based on current language
    const voices = speechSynthesis.getVoices();
    let preferredVoice;
    
    if (currentLanguage === 'zh-TW') {
        // Look for Cantonese/Hong Kong voices first, then other Chinese voices
        preferredVoice = voices.find(voice => 
            voice.lang.includes('zh-HK') || 
            voice.name.toLowerCase().includes('cantonese') ||
            voice.name.toLowerCase().includes('hong kong') ||
            voice.name.toLowerCase().includes('yue')
        ) || voices.find(voice => 
            voice.lang.includes('zh-TW')
        ) || voices.find(voice => 
            voice.lang.includes('zh-CN') || voice.lang.includes('zh')
        ) || voices.find(voice => voice.lang.startsWith('zh')) || voices[0];
    } else {
        // Default to English voices
        preferredVoice = voices.find(voice => 
            voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')
        ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
    }
    
    if (preferredVoice) {
        currentSpeech.voice = preferredVoice;
    }
    
    // Note: Audio recording will be handled separately for download feature
    
    // Set up event listeners
    currentSpeech.onstart = () => {
        isReading = true;
        currentReadingArticleId = articleId;
        const modalReadBtn = document.getElementById('readAloudModalBtn');
        updateModalReadAloudButton(modalReadBtn, true);
    };
    
    currentSpeech.onend = () => {
        isReading = false;
        currentReadingArticleId = null;
        currentSpeech = null;
        const modalReadBtn = document.getElementById('readAloudModalBtn');
        updateModalReadAloudButton(modalReadBtn, false);
        
        // Offer to generate full article audio download
        setTimeout(() => {
            if (confirm(getTranslation('download-full-audio-confirm'))) {
                generateAndDownloadFullArticleAudio(article, title, content);
            }
        }, 500);
    };
    
    currentSpeech.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        isReading = false;
        currentReadingArticleId = null;
        currentSpeech = null;
        const modalReadBtn = document.getElementById('readAloudModalBtn');
        updateModalReadAloudButton(modalReadBtn, false);
        
        // Clear any recording state on error
        audioChunks = [];
        
        alert('An error occurred while reading the article. Please try again.');
    };
    
    // Start speaking
    speechSynthesis.speak(currentSpeech);
}

function stopModalReadAloud() {
    if (currentSpeech) {
        speechSynthesis.cancel();
        currentSpeech = null;
    }
    
    // Stop recording if active
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
    
    isReading = false;
    currentReadingArticleId = null;
    const modalReadBtn = document.getElementById('readAloudModalBtn');
    updateModalReadAloudButton(modalReadBtn, false);
}

function updateModalReadAloudButton(buttonElement, isReading) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('.read-aloud-modal-text');
    
    if (isReading) {
        icon.className = 'fas fa-stop';
        text.textContent = getTranslation('stop-reading');
        buttonElement.classList.add('reading');
        buttonElement.title = getTranslation('stop-reading');
    } else {
        icon.className = 'fas fa-volume-up';
        text.textContent = getTranslation('read-full-article');
        buttonElement.classList.remove('reading');
        buttonElement.title = getTranslation('read-full-article');
    }
}

function toggleLike(articleId) {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const article = articlesData.find(a => a.id === articleId);
    
    if (likedArticles.includes(articleId)) {
        likedArticles = likedArticles.filter(id => id !== articleId);
        article.likes--;
        likeBtn.classList.remove('liked');
        likeBtn.querySelector('i').className = 'far fa-heart';
    } else {
        likedArticles.push(articleId);
        article.likes++;
        likeBtn.classList.add('liked');
        likeBtn.querySelector('i').className = 'fas fa-heart';
    }
    
    likeCount.textContent = article.likes;
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
}

function toggleBookmark(articleId) {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    if (bookmarkedArticles.includes(articleId)) {
        bookmarkedArticles = bookmarkedArticles.filter(id => id !== articleId);
        bookmarkBtn.classList.remove('bookmarked');
        bookmarkBtn.querySelector('i').className = 'far fa-bookmark';
    } else {
        bookmarkedArticles.push(articleId);
        bookmarkBtn.classList.add('bookmarked');
        bookmarkBtn.querySelector('i').className = 'fas fa-bookmark';
    }
    
    localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
}

function shareArticle(article) {
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = `Check out this article: ${article.title} - ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Article link copied to clipboard!');
        });
    }
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function showLoading() {
    loadingSpinner.style.display = 'flex';
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
}

function handleNewsletterSubscription() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (articleModal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        }
        // Space bar to toggle reading in modal
        if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            const currentArticleId = getCurrentModalArticleId();
            if (currentArticleId) {
                toggleModalReadAloud(currentArticleId);
            }
        }
    }
});

// Helper function to get current modal article ID
function getCurrentModalArticleId() {
    const modalTitle = document.getElementById('modalTitle').textContent;
    const article = articlesData.find(a => a.title === modalTitle);
    return article ? article.id : null;
}

// Lazy loading for images
function observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Text-to-Speech functionality
function toggleReadAloud(articleId, buttonElement) {
    if (currentReadingArticleId === articleId && isReading) {
        // Stop current reading
        stopReadAloud(buttonElement);
    } else {
        // Start reading this article
        startReadAloud(articleId, buttonElement);
    }
}

// Audio recording functions for MP3 download

// Audio setup guide modal
function showAudioSetupGuide() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.7); z-index: 3000; display: flex;
        align-items: center; justify-content: center; font-family: Inter, sans-serif;
    `;
    
    const guideTitle = getTranslation('audio-setup-guide');
    const guideText = getTranslation('stereo-mix-guide');
    const tipText = getTranslation('recording-tip');
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 12px; max-width: 500px; text-align: left;">
            <h3 style="margin: 0 0 20px 0; color: #2c3e50; display: flex; align-items: center;">
                <i class="fas fa-volume-up" style="margin-right: 10px; color: #3498db;"></i>
                ${guideTitle}
            </h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; white-space: pre-line; line-height: 1.6;">
                ${guideText}
            </div>
            <div style="background: #e3f2fd; padding: 12px; border-radius: 6px; border-left: 4px solid #2196f3; margin: 15px 0; font-size: 14px;">
                <strong>💡 ${tipText}</strong>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 25px;">
                <button id="cancelSetup" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
                    取消 / Cancel
                </button>
                <button id="tryRecording" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
                    我已設置完成 / Ready to Try
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    return new Promise((resolve) => {
        document.getElementById('cancelSetup').onclick = () => {
            document.body.removeChild(modal);
            resolve(false);
        };
        
        document.getElementById('tryRecording').onclick = () => {
            document.body.removeChild(modal);
            resolve(true);
        };
        
        modal.onclick = (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                resolve(false);
            }
        };
    });
}

// Show detailed error help dialog
function showMicrophoneHelpDialog(error) {
    const helpTitle = getTranslation('microphone-help-title');
    const helpGeneral = getTranslation('microphone-help-general');
    const tryDifferentBrowser = getTranslation('try-different-browser');
    const audioNotSupported = getTranslation('audio-not-supported');
    
    let helpMessage = helpTitle + '\n\n' + helpGeneral;
    
    // Detect browser and provide specific instructions
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('chrome')) {
        helpMessage += '\n\n' + getTranslation('microphone-help-chrome');
    } else if (userAgent.includes('firefox')) {
        helpMessage += '\n\n' + getTranslation('microphone-help-firefox');
    }
    
    if (error && error.name === 'NotSupportedError') {
        helpMessage = audioNotSupported + '\n\n' + tryDifferentBrowser;
    }
    
    // Create a styled dialog instead of basic alert
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.7); z-index: 4000; display: flex; 
        align-items: center; justify-content: center; font-family: Inter, sans-serif;
    `;
    
    dialog.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 12px; max-width: 500px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); text-align: left; line-height: 1.6;">
            <h3 style="margin: 0 0 20px 0; color: #e74c3c; display: flex; align-items: center;">
                <i class="fas fa-exclamation-triangle" style="margin-right: 10px;"></i>
                ${getTranslation('microphone-permission-error')}
            </h3>
            <div style="white-space: pre-line; margin-bottom: 20px; color: #555;">
                ${helpMessage}
            </div>
            <div style="text-align: center;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="background: #3498db; color: white; border: none; padding: 10px 20px; 
                               border-radius: 6px; cursor: pointer; font-size: 16px;">
                    ${currentLanguage === 'zh-TW' ? '我知道了' : 'Got it'}
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
}

// Check if audio recording is supported
function checkAudioSupport() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return { supported: false, reason: 'MediaDevices API not supported' };
    }
    
    if (!window.MediaRecorder) {
        return { supported: false, reason: 'MediaRecorder API not supported' };
    }
    
    return { supported: true };
}

async function initializeAudioRecording(showGuide = false) {
    // First check if audio recording is supported
    const supportCheck = checkAudioSupport();
    if (!supportCheck.supported) {
        console.error('Audio recording not supported:', supportCheck.reason);
        showMicrophoneHelpDialog(new Error('NotSupportedError'));
        return false;
    }
    
    // Show setup guide if requested
    if (showGuide) {
        const userReady = await showAudioSetupGuide();
        if (!userReady) {
            return false;
        }
    }
    
    try {
        // Request access to user's microphone (which should capture stereo mix if enabled)
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false,
                sampleRate: 44100,
                channelCount: 2
            } 
        });
        
        // Set up MediaRecorder with high quality settings
        const options = {
            mimeType: 'audio/webm;codecs=opus',
            audioBitsPerSecond: 128000
        };
        
        // Fallback mime types if webm is not supported
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            if (MediaRecorder.isTypeSupported('audio/webm')) {
                options.mimeType = 'audio/webm';
            } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                options.mimeType = 'audio/mp4';
            } else {
                options.mimeType = 'audio/wav';
            }
        }
        
        mediaRecorder = new MediaRecorder(stream, options);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };
        
        // Stop all tracks to release microphone (we only needed it for initialization)
        stream.getTracks().forEach(track => track.stop());
        
        return true;
    } catch (error) {
        console.error('Error initializing audio recording:', error);
        
        // Show detailed help based on error type
        if (error.name === 'NotAllowedError') {
            showMicrophoneHelpDialog(error);
        } else if (error.name === 'NotFoundError') {
            const noMicError = new Error('NoMicrophoneError');
            showMicrophoneHelpDialog(noMicError);
        } else {
            showMicrophoneHelpDialog(error);
        }
        
        return false;
    }
}

// Convert Float32Array to 16-bit PCM
function floatTo16BitPCM(input) {
    const buffer = new ArrayBuffer(input.length * 2);
    const view = new DataView(buffer);
    let offset = 0;
    for (let i = 0; i < input.length; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    return buffer;
}

// Convert audio buffer to MP3 using lamejs
function convertToMp3(audioBuffer, sampleRate = 44100) {
    return new Promise((resolve, reject) => {
        try {
            if (typeof lamejs === 'undefined') {
                // Fallback to WAV format if lamejs is not available
                console.warn('lamejs not available, creating WAV file instead');
                const wavBuffer = createWAVFile(audioBuffer, sampleRate);
                resolve(wavBuffer);
                return;
            }
            
            const mp3encoder = new lamejs.Mp3Encoder(1, sampleRate, 128);
            const mp3Data = [];
            
            // Convert to 16-bit PCM
            const pcmBuffer = new Int16Array(floatTo16BitPCM(audioBuffer));
            
            // Encode to MP3
            const remaining = pcmBuffer.length % 1152;
            const samples = pcmBuffer.subarray(0, pcmBuffer.length - remaining);
            
            let mp3buf = mp3encoder.encodeBuffer(samples);
            if (mp3buf.length > 0) {
                mp3Data.push(mp3buf);
            }
            
            // Flush remaining data
            mp3buf = mp3encoder.flush();
            if (mp3buf.length > 0) {
                mp3Data.push(mp3buf);
            }
            
            const mp3Buffer = new Uint8Array(mp3Data.reduce((acc, buf) => acc + buf.length, 0));
            let offset = 0;
            for (const buf of mp3Data) {
                mp3Buffer.set(buf, offset);
                offset += buf.length;
            }
            
            resolve(mp3Buffer.buffer);
        } catch (error) {
            console.error('Error converting to MP3:', error);
            reject(error);
        }
    });
}

// Create WAV file as fallback
function createWAVFile(audioBuffer, sampleRate) {
    const length = audioBuffer.length;
    const buffer = new ArrayBuffer(44 + length * 2);
    const view = new DataView(buffer);
    
    // WAV header
    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, length * 2, true);
    
    // Convert float32 to int16
    const offset = 44;
    for (let i = 0; i < length; i++) {
        const sample = Math.max(-1, Math.min(1, audioBuffer[i]));
        view.setInt16(offset + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
    }
    
    return buffer;
}

async function convertWebMToMp3(webmBlob) {
    return new Promise((resolve, reject) => {
        try {
            if (typeof lamejs === 'undefined') {
                console.warn('lamejs not available, downloading as WebM');
                resolve(webmBlob);
                return;
            }
            
            const fileReader = new FileReader();
            fileReader.onload = async function(event) {
                try {
                    const arrayBuffer = event.target.result;
                    
                    // Create audio context to decode the audio
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
                    
                    // Get audio data
                    const audioData = audioBuffer.getChannelData(0);
                    const sampleRate = audioBuffer.sampleRate;
                    
                    // Convert to MP3
                    const mp3Buffer = await convertToMp3(audioData, sampleRate);
                    const mp3Blob = new Blob([mp3Buffer], { type: 'audio/mpeg' });
                    
                    resolve(mp3Blob);
                } catch (error) {
                    console.error('Error converting to MP3:', error);
                    resolve(webmBlob); // Fallback to original format
                }
            };
            
            fileReader.onerror = () => {
                console.error('Error reading audio file');
                resolve(webmBlob);
            };
            
            fileReader.readAsArrayBuffer(webmBlob);
        } catch (error) {
            console.error('Error in conversion process:', error);
            resolve(webmBlob);
        }
    });
}

// Generate audio file and download as MP3
async function generateAndDownloadAudio(article, title, excerpt) {
    try {
        // Show loading indicator
        const loadingMsg = currentLanguage === 'zh-TW' ? '正在生成音頻檔案...' : 'Generating audio file...';
        const loadingAlert = document.createElement('div');
        loadingAlert.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 3000; text-align: center; font-family: Inter, sans-serif;
        `;
        loadingAlert.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingMsg}`;
        document.body.appendChild(loadingAlert);
        
        // Try initializing audio recording, show guide if needed
        let recordingSupported = await initializeAudioRecording();
        
        if (!recordingSupported) {
            document.body.removeChild(loadingAlert);
            
            // Show setup guide and try again
            const userWantsToTry = await showAudioSetupGuide();
            if (!userWantsToTry) {
                return;
            }
            
            // Show loading again
            document.body.appendChild(loadingAlert);
            recordingSupported = await initializeAudioRecording();
            
            if (!recordingSupported) {
                document.body.removeChild(loadingAlert);
                return; // Error dialog already shown by initializeAudioRecording
            }
        }
        
        // Create the text to read
        const textToRead = `${title}. ${excerpt}`;
        
        // Start recording
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false
            } 
        });
        
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };
        
        mediaRecorder.onstop = async () => {
            stream.getTracks().forEach(track => track.stop());
            
            if (audioChunks.length > 0) {
                // Check if audio was actually recorded
                const totalSize = audioChunks.reduce((sum, chunk) => sum + chunk.size, 0);
                if (totalSize < 1000) { // Less than 1KB suggests no audio was captured
                    document.body.removeChild(loadingAlert);
                    const noAudioMsg = currentLanguage === 'zh-TW' ? 
                        '未檢測到音訊錄製。請確保：\n1. 揚聲器音量足夠\n2. 已啟用立體聲混音\n3. 立體聲混音設為預設錄音裝置' :
                        'No audio detected. Please ensure:\n1. Speaker volume is sufficient\n2. Stereo Mix is enabled\n3. Stereo Mix is set as default recording device';
                    alert(noAudioMsg);
                    audioChunks = [];
                    return;
                }
                
                await downloadRecordedAudio(title);
            } else {
                document.body.removeChild(loadingAlert);
                const noDataMsg = currentLanguage === 'zh-TW' ? 
                    '沒有錄製到音訊數據。請檢查立體聲混音設置。' :
                    'No audio data recorded. Please check Stereo Mix settings.';
                alert(noDataMsg);
            }
            
            document.body.removeChild(loadingAlert);
        };
        
        // Start recording and speech
        mediaRecorder.start();
        
        // Create and configure speech
        const speech = new SpeechSynthesisUtterance(textToRead);
        speech.rate = 0.9;
        speech.pitch = 1.0;
        speech.volume = 1.0;
        
        // Set voice based on current language
        const voices = speechSynthesis.getVoices();
        let preferredVoice;
        
        if (currentLanguage === 'zh-TW') {
            preferredVoice = voices.find(voice => 
                voice.lang.includes('zh-HK') || 
                voice.name.toLowerCase().includes('cantonese') ||
                voice.name.toLowerCase().includes('hong kong') ||
                voice.name.toLowerCase().includes('yue')
            ) || voices.find(voice => 
                voice.lang.includes('zh-TW')
            ) || voices.find(voice => 
                voice.lang.includes('zh-CN') || voice.lang.includes('zh')
            ) || voices.find(voice => voice.lang.startsWith('zh')) || voices[0];
        } else {
            preferredVoice = voices.find(voice => 
                voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')
            ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
        }
        
        if (preferredVoice) {
            speech.voice = preferredVoice;
        }
        
        speech.onend = () => {
            setTimeout(() => {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                }
            }, 1000); // Give a bit of extra time
        };
        
        speech.onerror = () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
            document.body.removeChild(loadingAlert);
        };
        
        // Start speaking
        speechSynthesis.speak(speech);
        
    } catch (error) {
        console.error('Error generating audio:', error);
        
        // Remove loading indicator if it exists
        const loadingAlert = document.querySelector('div[style*="position: fixed"]');
        if (loadingAlert) {
            document.body.removeChild(loadingAlert);
        }
        
        // Show detailed error help instead of generic alert
        showMicrophoneHelpDialog(error);
    }
}

// Generate full article audio and download as MP3
async function generateAndDownloadFullArticleAudio(article, title, content) {
    try {
        // Show loading indicator
        const loadingMsg = currentLanguage === 'zh-TW' ? '正在生成完整文章音頻檔案...' : 'Generating full article audio file...';
        const loadingAlert = document.createElement('div');
        loadingAlert.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 3000; text-align: center; font-family: Inter, sans-serif;
        `;
        loadingAlert.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingMsg}`;
        document.body.appendChild(loadingAlert);
        
        // Try initializing audio recording, show guide if needed
        let recordingSupported = await initializeAudioRecording();
        
        if (!recordingSupported) {
            document.body.removeChild(loadingAlert);
            
            // Show setup guide and try again
            const userWantsToTry = await showAudioSetupGuide();
            if (!userWantsToTry) {
                return;
            }
            
            // Show loading again
            document.body.appendChild(loadingAlert);
            recordingSupported = await initializeAudioRecording();
            
            if (!recordingSupported) {
                document.body.removeChild(loadingAlert);
                return; // Error dialog already shown by initializeAudioRecording
            }
        }
        
        // Prepare full article text (title + content without HTML tags)
        const contentText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const textToRead = `${title}. ${contentText}`;
        
        // Start recording
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false
            } 
        });
        
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };
        
        mediaRecorder.onstop = async () => {
            stream.getTracks().forEach(track => track.stop());
            
            if (audioChunks.length > 0) {
                // Check if audio was actually recorded
                const totalSize = audioChunks.reduce((sum, chunk) => sum + chunk.size, 0);
                if (totalSize < 1000) { // Less than 1KB suggests no audio was captured
                    document.body.removeChild(loadingAlert);
                    const noAudioMsg = currentLanguage === 'zh-TW' ? 
                        '未檢測到音訊錄製。請確保：\n1. 揚聲器音量足夠\n2. 已啟用立體聲混音\n3. 立體聲混音設為預設錄音裝置' :
                        'No audio detected. Please ensure:\n1. Speaker volume is sufficient\n2. Stereo Mix is enabled\n3. Stereo Mix is set as default recording device';
                    alert(noAudioMsg);
                    audioChunks = [];
                    return;
                }
                
                await downloadRecordedAudio(title + '_full_article');
            } else {
                document.body.removeChild(loadingAlert);
                const noDataMsg = currentLanguage === 'zh-TW' ? 
                    '沒有錄製到音訊數據。請檢查立體聲混音設置。' :
                    'No audio data recorded. Please check Stereo Mix settings.';
                alert(noDataMsg);
            }
            
            document.body.removeChild(loadingAlert);
        };
        
        // Start recording and speech
        mediaRecorder.start();
        
        // Create and configure speech for longer content
        const speech = new SpeechSynthesisUtterance(textToRead);
        speech.rate = 1.0; // Slightly faster for longer content
        speech.pitch = 1.0;
        speech.volume = 1.0;
        
        // Set voice based on current language
        const voices = speechSynthesis.getVoices();
        let preferredVoice;
        
        if (currentLanguage === 'zh-TW') {
            preferredVoice = voices.find(voice => 
                voice.lang.includes('zh-HK') || 
                voice.name.toLowerCase().includes('cantonese') ||
                voice.name.toLowerCase().includes('hong kong') ||
                voice.name.toLowerCase().includes('yue')
            ) || voices.find(voice => 
                voice.lang.includes('zh-TW')
            ) || voices.find(voice => 
                voice.lang.includes('zh-CN') || voice.lang.includes('zh')
            ) || voices.find(voice => voice.lang.startsWith('zh')) || voices[0];
        } else {
            preferredVoice = voices.find(voice => 
                voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')
            ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
        }
        
        if (preferredVoice) {
            speech.voice = preferredVoice;
        }
        
        speech.onend = () => {
            setTimeout(() => {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                }
            }, 1000); // Give a bit of extra time
        };
        
        speech.onerror = () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
            document.body.removeChild(loadingAlert);
        };
        
        // Start speaking
        speechSynthesis.speak(speech);
        
    } catch (error) {
        console.error('Error generating full article audio:', error);
        
        // Remove loading indicator if it exists  
        const loadingAlert = document.querySelector('div[style*="position: fixed"]');
        if (loadingAlert) {
            document.body.removeChild(loadingAlert);
        }
        
        // Show detailed error help instead of generic alert
        showMicrophoneHelpDialog(error);
    }
}

async function downloadRecordedAudio(articleTitle) {
    if (!audioChunks || audioChunks.length === 0) {
        alert(getTranslation('no-audio-recorded'));
        return;
    }
    
    try {
        // Create blob from recorded chunks
        const webmBlob = new Blob(audioChunks, { type: 'audio/webm' });
        
        // Convert to MP3 if possible
        const finalBlob = await convertWebMToMp3(webmBlob);
        const isMP3 = finalBlob.type === 'audio/mpeg';
        const fileExtension = isMP3 ? 'mp3' : 'webm';
        
        const url = URL.createObjectURL(finalBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `${articleTitle.replace(/[^a-z0-9\u4e00-\u9fff]/gi, '_').toLowerCase()}_audio.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
        audioChunks = [];
        
        // Show success message
        const formatMsg = isMP3 ? 'MP3' : 'WebM';
        console.log(`Audio downloaded successfully as ${formatMsg} format`);
        
    } catch (error) {
        console.error('Error downloading audio:', error);
        alert(getTranslation('download-error'));
    }
}

function startReadAloud(articleId, buttonElement) {
    // Stop any current reading
    if (currentSpeech) {
        currentSpeech.cancel();
    }
    
    // Reset all other buttons
    resetAllReadAloudButtons();
    
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech functionality.');
        return;
    }
    
    // Use translated content for TTS if available
    const title = currentLanguage === 'zh-TW' && article.titleZhTW ? article.titleZhTW : article.title;
    const excerpt = currentLanguage === 'zh-TW' && article.excerptZhTW ? article.excerptZhTW : article.excerpt;
    
    // Prepare text to read (title + excerpt for card reading)
    const textToRead = `${title}. ${excerpt}`;
    
    // Create speech synthesis utterance
    currentSpeech = new SpeechSynthesisUtterance(textToRead);
    
    // Configure speech settings
    currentSpeech.rate = 0.9; // Slightly slower for better comprehension
    currentSpeech.pitch = 1.0;
    currentSpeech.volume = 1.0;
    
    // Set voice based on current language
    const voices = speechSynthesis.getVoices();
    let preferredVoice;
    
    if (currentLanguage === 'zh-TW') {
        // Look for Cantonese/Hong Kong voices first, then other Chinese voices
        preferredVoice = voices.find(voice => 
            voice.lang.includes('zh-HK') || 
            voice.name.toLowerCase().includes('cantonese') ||
            voice.name.toLowerCase().includes('hong kong') ||
            voice.name.toLowerCase().includes('yue')
        ) || voices.find(voice => 
            voice.lang.includes('zh-TW')
        ) || voices.find(voice => 
            voice.lang.includes('zh-CN') || voice.lang.includes('zh')
        ) || voices.find(voice => voice.lang.startsWith('zh')) || voices[0];
    } else {
        // Default to English voices
        preferredVoice = voices.find(voice => 
            voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')
        ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
    }
    
    if (preferredVoice) {
        currentSpeech.voice = preferredVoice;
    }
    
    // Note: Due to browser security limitations, we cannot directly record speech synthesis.
    // The recording feature will be available through a separate function.
    
    // Set up event listeners
    currentSpeech.onstart = () => {
        isReading = true;
        currentReadingArticleId = articleId;
        updateReadAloudButton(buttonElement, true);
    };
    
    currentSpeech.onend = () => {
        isReading = false;
        currentReadingArticleId = null;
        currentSpeech = null;
        updateReadAloudButton(buttonElement, false);
        
        // Offer to generate audio download
        setTimeout(() => {
            if (confirm(getTranslation('download-audio-confirm'))) {
                generateAndDownloadAudio(article, title, excerpt);
            }
        }, 500);
    };
    
    currentSpeech.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        isReading = false;
        currentReadingArticleId = null;
        currentSpeech = null;
        updateReadAloudButton(buttonElement, false);
        
        // Clear any recording state on error
        audioChunks = [];
        
        alert('An error occurred while reading the article. Please try again.');
    };
    
    // Start speaking
    speechSynthesis.speak(currentSpeech);
}

function stopReadAloud(buttonElement) {
    if (currentSpeech) {
        speechSynthesis.cancel();
        currentSpeech = null;
    }
    
    // Stop recording if active
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
    
    isReading = false;
    currentReadingArticleId = null;
    updateReadAloudButton(buttonElement, false);
}

function updateReadAloudButton(buttonElement, isReading) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('.read-aloud-text');
    
    if (isReading) {
        icon.className = 'fas fa-stop';
        text.textContent = getTranslation('stop-reading');
        buttonElement.classList.add('reading');
        buttonElement.title = getTranslation('stop-reading');
    } else {
        icon.className = 'fas fa-volume-up';
        text.textContent = getTranslation('read-aloud');
        buttonElement.classList.remove('reading');
        buttonElement.title = getTranslation('read-aloud');
    }
}

function resetAllReadAloudButtons() {
    const allButtons = document.querySelectorAll('.read-aloud-btn');
    allButtons.forEach(button => {
        updateReadAloudButton(button, false);
    });
}

// Load voices when they become available
function loadVoices() {
    // This ensures voices are loaded before first use
    speechSynthesis.getVoices();
}

// Initialize voices
if ('speechSynthesis' in window) {
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// Stop reading and recording when navigating away or closing
window.addEventListener('beforeunload', () => {
    if (currentSpeech) {
        speechSynthesis.cancel();
    }
    
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
    
    if (audioContext) {
        audioContext.close();
    }
});

// Language switching functions
function switchLanguage(lang) {
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    setActiveLanguage(lang);
    translatePage(lang);
    
    // Update dynamic content
    resetArticlesDisplay();
    loadCategories();
    updateCategoryFilter();
    updatePlaceholders();
}

function setActiveLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Handle elements with HTML content (like buttons with icons)
            if (element.tagName === 'BUTTON' && element.innerHTML.includes('<i')) {
                const iconMatch = element.innerHTML.match(/<i[^>]*><\/i>/);
                const icon = iconMatch ? iconMatch[0] : '';
                element.innerHTML = translations[lang][key] + ' ' + icon;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function updatePlaceholders() {
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage]['search-placeholder'] || 'Search articles...';
    }
    
    // Update newsletter placeholder
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) {
        newsletterInput.placeholder = translations[currentLanguage]['newsletter-placeholder'] || 'Enter your email';
    }
}

function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : translations['en'][key] || key;
}

// Update categories data with translations
const getCategoryName = (categoryName) => {
    const key = `category-${categoryName.toLowerCase()}`;
    return getTranslation(key);
};

const getCategoryDescription = (categoryName) => {
    const key = `category-desc-${categoryName.toLowerCase()}`;
    return getTranslation(key);
};

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', observeImages);