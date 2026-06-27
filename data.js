/* ============================================================
   MNGT 215 — Fundamentals of Management & Organizational Behavior
   Study site data. Lecture summaries are drawn from the Week 1-13
   slides (Robbins, Coulter & Long, 2024, Management, 16th Global
   Edition, as adapted by the instructor, plus instructor additions).

   Each lecture's MCQs are split into three difficulty tiers
   (tier: "easy" | "medium" | "hard") and every MCQ carries an "h"
   array of per-option coaching hints shown when that option is
   chosen wrongly. Case studies are set in Lebanon's post-2019
   economy (banking crisis & capital controls, lira collapse /
   hyperinflation, EDL power grid & private generators).
   Edit this file to fix or extend content — no build step needed.
   ============================================================ */

window.COURSE = {
  code: "MNGT 215",
  title: "Fundamentals of Management and Organizational Behavior",
  school: "Suliman S. Olayan School of Business — American University of Beirut",
  term: "Summer 2026",
  source: "Slides adapted from Robbins, Coulter & Long (2024), Management (16th Global Edition), Pearson — plus instructor additions",
  lectures: [
    {
      id: "w1",
      week: 1,
      title: "Introduction to Management",
      blurb: "Who managers are, what they do, and why organizations need them.",
      sections: [
        {
          h: "Managers and Organizations",
          blocks: [
            {
              t: "def",
              term: "Manager",
              d: "Someone who coordinates and oversees the work of other people so that organizational goals can be accomplished."
            },
            {
              t: "def",
              term: "Organization",
              d: "A deliberate arrangement of people to accomplish some specific purpose."
            },
            {
              t: "list",
              title: "Characteristics of organizations (3)",
              items: [
                "People",
                "Deliberate structure",
                "Distinct purpose"
              ]
            },
            {
              t: "list",
              title: "Levels of management (Exhibit 1-2)",
              items: [
                "Top managers — at the upper levels of the organization",
                "Middle managers",
                "First-line managers — the lowest managerial level",
                "Nonmanagerial employees form the base of the pyramid"
              ]
            },
            {
              t: "list",
              title: "Why are managers important?",
              items: [
                "Organizations need their managerial skills and abilities now more than ever",
                "Managers are critical to getting things done",
                "Managers make a difference in an organization's performance"
              ]
            },
            {
              t: "p",
              text: "The reality of work: when you begin your career, you will either manage or be managed. Management is universally needed in all types of, and throughout all areas of, organizations (Exhibit 1-9)."
            }
          ]
        },
        {
          h: "What Do Managers Do?",
          blocks: [
            {
              t: "def",
              term: "Management",
              d: "Coordinating and overseeing the work activities of others so that their activities are completed efficiently and effectively."
            },
            {
              t: "def",
              term: "Efficiency",
              d: "Concerned with the MEANS of getting things done — resource usage and low waste (“doing things right” in terms of resources)."
            },
            {
              t: "def",
              term: "Effectiveness",
              d: "Concerned with the ENDS — attainment of organizational goals (high goal attainment)."
            },
            {
              t: "p",
              text: "Exhibit 1-4: management strives for low resource waste (high efficiency) AND high goal attainment (high effectiveness)."
            },
            {
              t: "table",
              title: "The four management functions (Exhibit 1-5)",
              cols: [
                "Function",
                "Definition"
              ],
              rows: [
                [
                  "Planning",
                  "Defining goals, establishing strategies to achieve goals, and developing plans to integrate and coordinate activities"
                ],
                [
                  "Organizing",
                  "Arranging and structuring work to accomplish organizational goals"
                ],
                [
                  "Leading",
                  "Working with and through people to accomplish goals"
                ],
                [
                  "Controlling",
                  "Monitoring, comparing, and correcting work"
                ]
              ]
            }
          ]
        },
        {
          h: "Mintzberg's Managerial Roles",
          blocks: [
            {
              t: "def",
              term: "Roles",
              d: "Specific actions or behaviors expected of and exhibited by a manager. Mintzberg identified 10 roles grouped around interpersonal relationships, the transfer of information, and decision making (Exhibit 1-6)."
            },
            {
              t: "table",
              title: "Mintzberg's 10 roles in 3 categories",
              cols: [
                "Category",
                "Roles"
              ],
              rows: [
                [
                  "Interpersonal",
                  "Figurehead, leader, liaison"
                ],
                [
                  "Informational",
                  "Monitor, disseminator, spokesperson"
                ],
                [
                  "Decisional",
                  "Entrepreneur, disturbance handler, resource allocator, negotiator"
                ]
              ]
            }
          ]
        },
        {
          h: "Management Skills",
          blocks: [
            {
              t: "def",
              term: "Technical skills",
              d: "Knowledge and proficiency in a specific field."
            },
            {
              t: "def",
              term: "Interpersonal skills",
              d: "The ability to work well with other people."
            },
            {
              t: "def",
              term: "Conceptual skills",
              d: "The ability to think and conceptualize about abstract and complex situations concerning the organization."
            },
            {
              t: "p",
              text: "Exhibit 1-8: skills relate to managerial level. Technical skills matter most for lower-level managers; conceptual skills matter most for top managers; interpersonal skills are important at every level."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "According to the lecture, an organization is defined as…",
          o: [
            "any group of people who happen to work in the same building",
            "a deliberate arrangement of people to accomplish some specific purpose",
            "a profit-seeking entity owned by shareholders",
            "the upper levels of a company's management hierarchy"
          ],
          a: 1,
          tier: "easy",
          h: [
            "People alone are not enough — the slides stress that the arrangement is deliberate and aimed at a purpose, not accidental.",
            "Right idea — that's the one.",
            "Profit is not in the definition at all; non-profits and clubs are organizations too. Look for the wording about people and purpose.",
            "That describes top managers' location, not what an organization is. Re-read the term being defined."
          ],
          e: "The slides define an organization as a deliberate arrangement of people to accomplish some specific purpose. Its three characteristics are people, deliberate structure, and a distinct purpose."
        },
        {
          q: "The lowest managerial level in a traditionally structured organization is the…",
          o: [
            "top managers",
            "middle managers",
            "first-line managers",
            "nonmanagerial employees"
          ],
          a: 2,
          tier: "easy",
          h: [
            "Top managers sit at the upper levels, not the lowest. Re-read Exhibit 1-2's ordering of levels.",
            "Middle managers sit between two other managerial levels, so they are not the lowest. Look one level down.",
            "Right idea — that's the one.",
            "Nonmanagerial employees form the base of the pyramid, but they are not a managerial level at all. The question asks for the lowest level OF management."
          ],
          e: "Exhibit 1-2 lists top, middle, and first-line managers. First-line managers are the lowest managerial level, sitting just above the nonmanagerial employees who form the base of the pyramid."
        },
        {
          q: "\"Working with and through people to accomplish goals\" is the lecture's definition of which management function?",
          o: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling"
          ],
          a: 2,
          tier: "easy",
          h: [
            "Planning is about defining goals and strategies, not about working through people. Look for the function centered on people.",
            "Organizing is about arranging and structuring work, not about energizing the people themselves. Re-read the people-focused function.",
            "Right idea — that's the one.",
            "Controlling is about monitoring, comparing, and correcting. The phrase 'working with and through people' points elsewhere."
          ],
          e: "Exhibit 1-5 defines leading as working with and through people to accomplish goals."
        },
        {
          q: "Mintzberg's 10 managerial roles are grouped into which three categories?",
          o: [
            "Technical, interpersonal, and conceptual",
            "Planning, organizing, and controlling",
            "Interpersonal, informational, and decisional",
            "Top, middle, and first-line"
          ],
          a: 2,
          tier: "easy",
          h: [
            "Those are the three management SKILLS, not Mintzberg's role categories. Different framework — look again.",
            "Those are three of the four management FUNCTIONS, not Mintzberg's categories. Re-read the roles section.",
            "Right idea — that's the one.",
            "Those are managerial LEVELS, not role categories. Mintzberg grouped behaviors, not hierarchy positions."
          ],
          e: "Mintzberg identified 10 roles grouped around interpersonal relationships, the transfer of information, and decision making — i.e., interpersonal, informational, and decisional roles (Exhibit 1-6)."
        },
        {
          q: "\"The ability to think and conceptualize about abstract and complex situations concerning the organization\" defines which skill?",
          o: [
            "Conceptual skills",
            "Technical skills",
            "Interpersonal skills",
            "Decisional skills"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right idea — that's the one.",
            "Technical skills are knowledge and proficiency in a specific field — concrete, not abstract. Re-read the definition about abstract, complex situations.",
            "Interpersonal skills are about working well with people, not about abstract thinking. Look for the abstract/complex wording.",
            "'Decisional' is a Mintzberg role category, not one of the three management skills. The slides name three skills only."
          ],
          e: "Conceptual skills are the ability to think and conceptualize about abstract and complex situations concerning the organization — most important for top managers (Exhibit 1-8)."
        },
        {
          q: "Which of the following is one of the three characteristics every organization shares?",
          o: [
            "A guaranteed source of profit",
            "A deliberate structure",
            "A government license",
            "At least three levels of management"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Profit is never listed as a characteristic of an organization. Non-profits qualify too. Look for the structural feature.",
            "Right idea — that's the one.",
            "A license is not among the three characteristics. Re-read the list: people, structure, purpose.",
            "The number of management levels is not a defining characteristic; small organizations are still organizations. Look for the deliberate-arrangement feature."
          ],
          e: "The three characteristics of an organization are people, a deliberate structure, and a distinct purpose."
        },
        {
          q: "A workshop reuses every offcut of fabric and produces almost no scrap, yet it consistently misses its delivery deadlines and loses customers. In the lecture's terms, the workshop is…",
          o: [
            "effective but not efficient",
            "efficient but not effective",
            "both efficient and effective",
            "neither efficient nor effective"
          ],
          a: 1,
          tier: "medium",
          h: [
            "You have the two reversed. Effectiveness is about reaching goals — but the workshop is MISSING deadlines and losing customers. Check which term covers the goals.",
            "Right idea — that's the one.",
            "It can't be both: missing deadlines and losing customers means goals are not being attained, so one of the two is failing.",
            "It is doing one of them well — almost no scrap is excellent resource usage. Don't dismiss the low-waste side."
          ],
          e: "Low waste of resources is high efficiency (the means). Missing deadlines and losing customers means goals are not attained, so effectiveness (the ends) is low. Hence efficient but not effective."
        },
        {
          q: "A regional manager spends a morning deciding how next quarter's limited budget will be split among three branches. Which Mintzberg role is she mainly performing?",
          o: [
            "Disseminator (informational)",
            "Resource allocator (decisional)",
            "Figurehead (interpersonal)",
            "Negotiator (decisional)"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Disseminating is passing information to insiders. She is deciding who gets money, not relaying facts. Look for a decisional role about distributing resources.",
            "Right idea — that's the one.",
            "Figurehead is ceremonial/symbolic representation, not budget decisions. The activity here is about allocating a scarce resource.",
            "Negotiating involves bargaining with another party. Splitting an internal budget across her own branches is a different decisional role."
          ],
          e: "Deciding how to divide a limited budget among units is the resource allocator role, one of Mintzberg's decisional roles."
        },
        {
          q: "A newly promoted shift supervisor finds that what made her a great machine operator no longer fully prepares her for the job. Based on Exhibit 1-8, which skill should she now develop more deliberately to manage her team?",
          o: [
            "Technical skills, since they matter most at every level",
            "Interpersonal skills, since working well with her team is now central",
            "Conceptual skills only, since she is now a manager",
            "No new skills, since technical mastery is sufficient to manage"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Technical skills do NOT matter most at every level — they peak at lower levels but are no longer the whole job once you lead others. Reconsider which skill is important at every level.",
            "Right idea — that's the one.",
            "Conceptual skills grow in importance higher up, but a first-line supervisor's most immediate new need is working with her team. 'Only' is too strong here.",
            "If technical mastery were sufficient, the promotion would not feel like a gap. The slides say managing others requires more than technical skill."
          ],
          e: "Exhibit 1-8: technical skills matter most at lower levels but interpersonal skills are important at every level. A new first-line manager must work well with and through her team, so interpersonal skills become central."
        },
        {
          q: "A store owner draws up a written target to grow revenue 10%, lists the strategies to get there, and sketches the steps each department must take. Which management function is this?",
          o: [
            "Controlling",
            "Leading",
            "Planning",
            "Organizing"
          ],
          a: 2,
          tier: "medium",
          h: [
            "Controlling compares actual results against a target after the fact. Here the target is just being SET, not checked. Look at the function that comes first.",
            "Leading is working with and through people. Drafting targets and strategies on paper is a different function.",
            "Right idea — that's the one.",
            "Organizing arranges and structures work once goals exist. Setting the goal and strategies themselves is the prior function."
          ],
          e: "Defining goals, establishing strategies, and developing plans to integrate and coordinate activities is the definition of planning."
        },
        {
          q: "At a board dinner, the CEO welcomes guests, cuts a ceremonial ribbon for a new wing, and poses for photos representing the company. Which Mintzberg role is most at play?",
          o: [
            "Leader (interpersonal)",
            "Figurehead (interpersonal)",
            "Spokesperson (informational)",
            "Entrepreneur (decisional)"
          ],
          a: 1,
          tier: "medium",
          h: [
            "The leader role is about motivating and developing employees, not ceremonial symbolism. The activity here is symbolic representation.",
            "Right idea — that's the one.",
            "Spokesperson is about transmitting information to outsiders. Cutting a ribbon and posing is ceremonial, not informational.",
            "Entrepreneur initiates projects and change. Ceremonial duties are a different, interpersonal role."
          ],
          e: "Performing ceremonial and symbolic duties as the symbol of the organization is the figurehead role, one of Mintzberg's interpersonal roles."
        },
        {
          q: "A manager notices weekly output has fallen below the plan, investigates why, and changes the staffing to bring numbers back on target. Which function does this describe?",
          o: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling"
          ],
          a: 3,
          tier: "medium",
          h: [
            "Planning sets the target in the first place; here the target already exists and is being checked against. Look for the monitoring-and-correcting function.",
            "Organizing structures the work initially. Comparing results to a plan and correcting is a distinct function.",
            "Leading is working with and through people to motivate them. The core action here is measuring against a target and correcting deviations.",
            "Right idea — that's the one."
          ],
          e: "Monitoring performance, comparing it against the plan, and correcting deviations is the definition of controlling."
        },
        {
          q: "A consultant says: \"Efficiency and effectiveness are basically the same thing — both just mean a manager is doing a good job.\" Which response best reflects the lecture?",
          o: [
            "Correct, because the slides use the two words interchangeably",
            "Incorrect — they are distinct: efficiency concerns the means (resource use), effectiveness the ends (goal attainment), and management strives for both",
            "Incorrect — effectiveness is about resources and efficiency is about goals",
            "Correct, because a manager who attains goals is automatically using resources well"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The slides explicitly contrast the two terms (means vs. ends); they are not interchangeable. Re-read Exhibit 1-4.",
            "Right idea — that's the one.",
            "You have the definitions swapped. Effectiveness is the ENDS (goals); efficiency is the MEANS (resources). Check which is which.",
            "Hitting goals does not guarantee low waste — a firm can reach a target while burning resources. The two are independent."
          ],
          e: "Exhibit 1-4 distinguishes efficiency (the means — low resource waste) from effectiveness (the ends — goal attainment). They are independent, and management strives for both high efficiency and high effectiveness, so the two are not the same."
        },
        {
          q: "Two activities: (1) a manager scans daily competitor prices and industry news; (2) she then briefs her own team on what she learned. The best Mintzberg classification is…",
          o: [
            "Both are the spokesperson role",
            "(1) monitor and (2) disseminator — both informational roles",
            "(1) entrepreneur and (2) leader",
            "Both are the liaison role"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Spokesperson transmits information to OUTSIDERS. Scanning news and briefing your own team are not outward-facing in that sense. Look at the informational sub-roles.",
            "Right idea — that's the one.",
            "Entrepreneur initiates change and leader motivates people; neither captures gathering and relaying information. These are informational, not decisional/interpersonal, acts.",
            "Liaison is about maintaining a network of external contacts, not scanning news and briefing the team. Two different informational roles are at work here."
          ],
          e: "Scanning the environment for information is the monitor role; passing that information to organization members is the disseminator role — both informational roles in Mintzberg's framework."
        },
        {
          q: "A manager hits every output goal but does so by overworking staff into burnout and turnover. A critic argues this still counts as \"good management\" because the goals were met. Which evaluation best fits the lecture's view of management?",
          o: [
            "Good management, since effectiveness (goal attainment) is all that defines a manager's success",
            "Poor management, since management is coordinating others' work to be done both efficiently AND effectively, and burning out people wastes a key resource",
            "Good management, because efficiency is irrelevant once goals are reached",
            "Cannot be judged, since the lecture offers no standard for evaluating managers"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The definition of management names BOTH efficient and effective completion, not effectiveness alone. Re-read what management coordinates work toward.",
            "Right idea — that's the one.",
            "Efficiency is never declared irrelevant; the slides say management strives for low resource waste too. Burnout and turnover are costly waste.",
            "The lecture does give a standard: managers exist to make the organization perform well, achieving goals with low waste. It can be judged."
          ],
          e: "Management is defined as coordinating others' work so it is completed both efficiently and effectively. Hitting goals (effective) while burning out and losing staff is high waste of a key resource (inefficient), so it falls short of what management strives for."
        },
        {
          q: "Across a small firm's first-line, middle, and top managers, which statement about skills and functions is MOST accurate per the lecture?",
          o: [
            "Only top managers perform the four functions; lower managers just do technical work",
            "All managers perform the four functions, but the skill emphasis shifts — technical skills weigh more lower down, conceptual skills more at the top, interpersonal skills matter at every level",
            "Conceptual skills are equally critical at every level, while interpersonal skills fade at the top",
            "The four functions apply only to top managers because management is needed only at the strategic level"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The four functions describe ALL managerial work, not just the top. Lower managers plan, organize, lead, and control too. Reconsider.",
            "Right idea — that's the one.",
            "Conceptual skills are NOT equal at every level — they grow toward the top. And interpersonal skills do not fade; they matter at every level. Check Exhibit 1-8.",
            "Management is universally needed at all levels and areas (Exhibit 1-9), not only strategically. The functions are not top-only."
          ],
          e: "All managers carry out the four functions, and management is universally needed (Exhibit 1-9). Exhibit 1-8 shows the skill mix shifts: technical skills weigh most at lower levels, conceptual at the top, and interpersonal skills are important at every level."
        },
        {
          q: "A manager settles a sudden supplier dispute that threatened to halt production, then bargains a new long-term contract with that supplier. Which pairing of Mintzberg decisional roles best fits these two acts, in order?",
          o: [
            "Resource allocator, then entrepreneur",
            "Disturbance handler, then negotiator",
            "Negotiator, then disturbance handler",
            "Entrepreneur, then resource allocator"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Resource allocator decides who gets which resources, and entrepreneur initiates change — neither captures resolving a crisis or striking a deal. Look at the crisis-and-bargaining pair.",
            "Right idea — that's the one.",
            "You have the order reversed. The sudden dispute that threatens to halt production is the crisis (handled first); bargaining the contract is the deal (second).",
            "Entrepreneur is about initiating new projects, not resolving a crisis; resource allocator is not about bargaining a contract. These two roles miss both acts."
          ],
          e: "Resolving an unexpected dispute that threatens operations is the disturbance handler role; bargaining a long-term contract is the negotiator role — both decisional roles, in that order."
        },
        {
          q: "A two-person startup founder says, \"We're too small to bother with management — management is only for big corporations.\" Which response BEST reflects the lecture's view?",
          o: [
            "Agree — the management functions only apply once an organization has several layers of hierarchy",
            "Disagree — management (planning, organizing, leading, controlling) is universal: any deliberate arrangement of people pursuing a purpose must be coordinated, whatever its size",
            "Agree — a startup needs leading, but not the other three functions until it grows",
            "Disagree, but only because the founder will eventually hire managers, not because management applies now"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The lecture stresses the universality of management — the functions apply to small and large, profit and non-profit alike, not only to tall hierarchies.",
            "Right idea — that's the one.",
            "Leading cannot be separated from planning, organizing, and controlling; even a two-person venture sets goals, divides work, and tracks results.",
            "The point isn't future hiring — the founders are ALREADY managing now; the need exists from day one."
          ],
          e: "Management is universal: the four functions (planning, organizing, leading, controlling) are needed in organizations of every size and type, because any deliberate arrangement of people pursuing a shared purpose must be coordinated. The founders are already managing, regardless of headcount."
        }
      ],
      cases: [
        {
          title: "Powering the Bakery Through the Dark",
          scenario: "Nadia owns \"Furn al-Mahabba,\" a mid-sized bakery in Tripoli with 18 staff. Since the 2019 crisis, EDL state electricity reaches the bakery only about three hours a day, so the ovens and freezers depend on a paid private generator subscription (ishtirak) capped at a fixed amperage that the whole street shares. When the generator owner raises the diesel-driven monthly fee, Nadia must decide whether to upgrade to a higher amperage so a second oven can run. Her flour supplier now re-quotes prices in fresh US dollars and changes them almost daily as the lira slides, while most of her staff are still paid in lira and have grown demoralized as their wages buy less each week. Nadia spends her days juggling fuel queues, amperage limits, supplier calls, and a worried team, and admits she rarely bakes anymore.",
          qs: [
            {
              q: "Identify each of the four management functions in how Nadia is running the bakery under these conditions.",
              a: "Planning — defining goals and strategies, e.g., deciding whether to upgrade the ishtirak amperage so a second oven can run and setting how the bakery will keep producing on three hours of EDL power (defining goals, establishing strategies, developing plans). Organizing — arranging and structuring work, e.g., scheduling baking around the generator's shared amperage cap and the few EDL hours so ovens and freezers are sequenced (arranging and structuring work to accomplish goals). Leading — working with and through her demoralized staff whose lira wages buy less each week, motivating and reassuring them (working with and through people). Controlling — monitoring the daily fresh-dollar flour prices and the generator fee against her costs and correcting (e.g., adjusting output or pricing) when margins slip (monitoring, comparing, correcting work)."
            },
            {
              q: "Nadia must price her bread while flour is re-quoted in fresh dollars daily and her costs jump with each lira slide and generator fee hike. Use the lecture's distinction between efficiency and effectiveness to frame the trade-off she faces.",
              a: "Effectiveness is the ends — attaining her goals, here keeping the bakery selling bread and staying open through the crisis (high goal attainment). Efficiency is the means — using resources with low waste, here the costly diesel for the ishtirak, the shared amperage, and flour bought in scarce fresh dollars. If Nadia prices too low to keep customers (chasing effectiveness) while diesel and daily-repricing flour costs balloon, she is being effective but not efficient and will bleed cash. If she runs only one oven on minimal amperage to save fuel (chasing efficiency) but cannot bake enough to meet demand, she is efficient but not effective. The lecture stresses management strives for BOTH low resource waste and high goal attainment, so she must price and schedule to keep selling AND control the dollar/diesel costs."
            },
            {
              q: "Match three of Nadia's daily activities to specific Mintzberg roles, given the crisis setting.",
              a: "Handling the generator owner's sudden fee hike and the threat of losing power mid-bake is the disturbance handler role (decisional) — dealing with an unexpected crisis that could halt production. Deciding whether to upgrade the ishtirak amperage and which oven gets the limited shared power is the resource allocator role (decisional) — distributing a scarce resource (electricity/amperage) across competing uses; bargaining the higher amperage fee with the generator owner is the negotiator role (decisional). Reassuring and motivating her demoralized lira-paid staff is the leader role (interpersonal). Calling the flour supplier who re-quotes in fresh dollars to track and relay prices fits the monitor/liaison and informational roles."
            }
          ]
        },
        {
          title: "Two Managers at a Dollarized Supermarket Chain",
          scenario: "\"SuqMart\" is a small Lebanese supermarket chain. Layal is a first-line branch manager at the Saida store: she spends her days assigning cashiers to tills, re-pricing shelves as the lira slides and prices are re-quoted in USD, sorting out which customers may pay in \"lollars\" (trapped bank-dollars) versus fresh cash dollars, and keeping the generator-powered fridges stocked during the daily EDL blackout. Karim is the chain's top manager: he decides whether to open a fresh-dollar-only branch in Beirut, meets bank officials about the frozen deposits and informal withdrawal limits choking the company's cash, and announces to suppliers a new strategy of buying only against fresh dollars. Both call their job \"management,\" yet their days look nothing alike.",
          qs: [
            {
              q: "Use the levels of management (Exhibit 1-2) to classify Layal and Karim, and explain why both still count as managers despite their very different days.",
              a: "Layal is a first-line manager — the lowest managerial level, directly overseeing nonmanagerial employees (cashiers, stockers) on the shop floor. Karim is a top manager at the upper level of the chain. Both are managers because, by the lecture's definition, a manager coordinates and oversees the work of other people so that organizational goals can be accomplished. Layal coordinates cashiers and re-pricing amid the lira collapse and EDL blackouts; Karim coordinates the chain's strategy around frozen deposits and the lollar/fresh-dollar split. The defining feature is coordinating others' work, not the level or the specific tasks, so both qualify."
            },
            {
              q: "Explain how Layal's and Karim's skill requirements differ, using the three management skills and Exhibit 1-8.",
              a: "Layal, as a first-line manager, relies most on technical skills — the concrete know-how of running the store: working the till system, re-pricing shelves in USD as the lira slides, judging lollar versus fresh-dollar payments, and keeping the generator fridges stocked. She also leans heavily on interpersonal skills with her cashiers. Karim, as a top manager, relies most on conceptual skills — thinking about abstract, complex, organization-wide situations such as whether to open a fresh-dollar-only branch and how frozen deposits and withdrawal limits constrain the whole chain. Per Exhibit 1-8, technical skills matter most at lower levels and conceptual skills most at the top, while interpersonal skills are important at every level — both need them."
            },
            {
              q: "Match three of Karim's crisis activities to specific Mintzberg roles, and explain each.",
              a: "Deciding to open a new fresh-dollar-only branch in Beirut is the entrepreneur role (decisional) — initiating a new project and strategic change in response to dollarization. Meeting bank officials about the frozen deposits and informal withdrawal limits choking the firm's cash is the negotiator and/or liaison role — bargaining over access to the company's trapped funds (negotiator, decisional) and maintaining the external contact (liaison, interpersonal). Announcing to suppliers the new fresh-dollar-only buying strategy is the spokesperson role (informational) — transmitting company information and strategy to outsiders, with a figurehead element in representing the chain. These show Karim's work mixing decisional, interpersonal, and informational roles, consistent with Mintzberg."
            }
          ]
        }
      ],
      essays: [
        {
          q: "“A good manager only needs to be effective — efficiency is secondary.” Discuss this statement using the lecture's definitions of efficiency and effectiveness, and explain what management ultimately strives for.",
          outline: [
            "Define efficiency: concerned with the MEANS — resource usage, low waste (Exhibit 1-4)",
            "Define effectiveness: concerned with the ENDS — attainment of organizational goals",
            "Show they are distinct: a firm can hit goals while wasting resources (effective, not efficient) or save resources while missing goals (efficient, not effective)",
            "State the lecture's conclusion: management strives for BOTH low resource waste (high efficiency) AND high goal attainment (high effectiveness)",
            "Conclude: the statement is one-sided; goal attainment achieved through wasteful means is not good management"
          ],
          model: "Efficiency and effectiveness capture two different questions about managerial work. Efficiency is about the means of getting things done: using resources with as little waste as possible. Effectiveness is about the ends: whether organizational goals are attained (Exhibit 1-4). The statement is therefore one-sided. An organization can be effective without being efficient — for example, reaching a sales target while doubling labor costs — and it can be efficient without being effective, conserving resources while missing its goals. Because management is defined as coordinating and overseeing others' work so that activities are completed efficiently AND effectively, the lecture is explicit that management strives for both low resource waste (high efficiency) and high goal attainment (high effectiveness). A manager who treats efficiency as secondary allows the cost of achieving goals to balloon, which undermines the organization's performance — precisely what managers exist to protect."
        },
        {
          q: "Describe the four functions of management. For each, give the lecture definition and a brief workplace example, and explain how the functions connect to one another.",
          outline: [
            "Planning: defining goals, establishing strategies, developing plans to integrate and coordinate activities (+ example)",
            "Organizing: arranging and structuring work to accomplish organizational goals (+ example)",
            "Leading: working with and through people to accomplish goals (+ example)",
            "Controlling: monitoring, comparing, and correcting work (+ example)",
            "Connection: planning sets the goals that organizing structures, leading energizes, and controlling checks against — control results feed back into new plans (Exhibit 1-5)"
          ],
          model: "The four functions describe a manager's work (Exhibit 1-5). Planning means defining goals, establishing strategies to achieve them, and developing plans to integrate and coordinate activities — e.g., setting a target to raise sales 15% this quarter. Organizing means arranging and structuring work to accomplish organizational goals — e.g., designing shifts and grouping tasks into jobs and departments. Leading means working with and through people to accomplish goals — e.g., motivating and coaching a team. Controlling means monitoring, comparing, and correcting work — e.g., comparing weekly results to the target and adjusting. The functions form a connected cycle rather than four separate boxes: planning provides the goals and strategies; organizing builds the structure to pursue them; leading gets the people working toward them; and controlling compares actual work with the plan, with deviations triggering corrections and new planning."
        },
        {
          q: "Explain Mintzberg's view of managerial work. Name the three categories of roles and the roles within each, and illustrate each category with one concrete managerial activity.",
          outline: [
            "Roles defined: specific actions or behaviors expected of and exhibited by a manager",
            "Mintzberg identified 10 roles grouped around interpersonal relationships, transfer of information, and decision making (Exhibit 1-6)",
            "Interpersonal: figurehead, leader, liaison (+ example, e.g., cutting the ribbon, motivating staff, networking)",
            "Informational: monitor, disseminator, spokesperson (+ example, e.g., scanning reports, briefing the team, talking to press)",
            "Decisional: entrepreneur, disturbance handler, resource allocator, negotiator (+ example, e.g., launching a project, resolving a strike, setting budgets, closing a deal)"
          ],
          model: "Mintzberg described managerial work through roles — specific actions or behaviors expected of and exhibited by a manager. He identified 10 roles in three categories (Exhibit 1-6). Interpersonal roles arise from relationships: the figurehead performs ceremonial duties (e.g., representing the firm at an event), the leader motivates and develops employees, and the liaison maintains a network of contacts inside and outside the unit. Informational roles concern the transfer of information: the monitor scans the environment for information, the disseminator passes information to organization members, and the spokesperson transmits information to outsiders (e.g., presenting results to the press). Decisional roles center on choices: the entrepreneur initiates projects and change, the disturbance handler deals with unexpected problems (e.g., a strike), the resource allocator decides who gets what (budgets, staff, time), and the negotiator represents the organization in major negotiations. Together the three categories show that managing mixes relationships, information handling, and decision making rather than a single kind of activity."
        }
      ]
    },
    {
      id: "w2",
      week: 2,
      title: "The Evolution of Management",
      blurb: "From the pyramids and Taylor's stopwatch to algorithmic management.",
      sections: [
        {
          h: "Early Management",
          blocks: [
            {
              t: "p",
              text: "Management practices evolved over time. Early examples that required management skills due to their size and scope: the Egyptian Pyramids, the Great Wall of China, and the Roman Catholic Church."
            },
            {
              t: "def",
              term: "Division of labor (job specialization)",
              d: "Breaking down jobs into narrow and repetitive tasks. Adam Smith argued in The Wealth of Nations (1776) that the division of labor would benefit society overall. The Industrial Revolution, ushered in by machine power, also utilized the division of labor."
            }
          ]
        },
        {
          h: "Classical Approach — Scientific Management",
          blocks: [
            {
              t: "def",
              term: "Classical approach",
              d: "First studies of management, which emphasized rationality and making organizations and workers as efficient as possible."
            },
            {
              t: "def",
              term: "Scientific management (Frederick Winslow Taylor)",
              d: "An approach that involves using the scientific method to find the “one best way” for a job to be done. Taylor's time and motion studies at Bethlehem Steel focused on finding the best way to perform a specific task."
            },
            {
              t: "list",
              title: "Taylor's four principles of scientific management",
              items: [
                "1. Develop a science for each element of an individual's work to replace the old rule-of-thumb method",
                "2. Scientifically select and then train, teach, and develop the worker",
                "3. Cooperate with the workers to ensure all work is done in accordance with the principles of the science",
                "4. Divide work and responsibility almost equally between management and workers — management does all work for which it is better suited than the workers"
              ]
            },
            {
              t: "def",
              term: "Therbligs (Frank and Lillian Gilbreth)",
              d: "A classification scheme for labeling 17 basic hand motions (“Gilbreth” spelled backwards with the “th” transposed). The Gilbreths studied hand-and-body motions to reduce waste and were among the first to use motion picture films for this; they focused on improving efficiency."
            }
          ]
        },
        {
          h: "Classical Approach — General Administrative Theory",
          blocks: [
            {
              t: "p",
              text: "General administrative theorists looked at management by focusing on the entire organization. The most prominent were Henri Fayol and Max Weber."
            },
            {
              t: "table",
              title: "Fayol's 14 principles of management",
              cols: [
                "Principle",
                "Meaning"
              ],
              rows: [
                [
                  "1. Division of work",
                  "Specialization increases output by making employees more efficient"
                ],
                [
                  "2. Authority",
                  "Managers must be able to give orders; authority gives them this right"
                ],
                [
                  "3. Discipline",
                  "Employees must obey and respect the rules that govern the organization"
                ],
                [
                  "4. Unity of command",
                  "Every employee should receive orders from only one superior"
                ],
                [
                  "5. Unity of direction",
                  "The organization should have a single plan of action to guide managers and workers"
                ],
                [
                  "6. Subordination of individual interests to the general interest",
                  "No employee's or group's interests take precedence over the organization's as a whole"
                ],
                [
                  "7. Remuneration",
                  "Workers must be paid a fair wage for their services"
                ],
                [
                  "8. Centralization",
                  "The degree to which subordinates are involved in decision making"
                ],
                [
                  "9. Scalar chain",
                  "The line of authority from top management to the lowest ranks"
                ],
                [
                  "10. Order",
                  "People and materials should be in the right place at the right time"
                ],
                [
                  "11. Equity",
                  "Managers should be kind and fair to their subordinates"
                ],
                [
                  "12. Stability of tenure of personnel",
                  "Orderly personnel planning; replacements available to fill vacancies"
                ],
                [
                  "13. Initiative",
                  "Employees allowed to originate and carry out plans will exert high levels of effort"
                ],
                [
                  "14. Esprit de corps",
                  "Promoting team spirit will build harmony and unity within the organization"
                ]
              ]
            },
            {
              t: "def",
              term: "Bureaucracy (Max Weber)",
              d: "Weber's ideal system of organization: characterized by division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships. He proposed it to show how work could be done; it became the framework for many of today's large organizations."
            },
            {
              t: "list",
              title: "Characteristics of Weber's bureaucracy",
              items: [
                "Division of labor — jobs broken down into simple, routine, well-defined tasks",
                "Authority hierarchy — positions organized in a hierarchy with a clear chain of command",
                "Formal selection — people selected for jobs based on technical qualifications",
                "Formal rules and regulations — system of written rules and standard operating procedures",
                "Impersonality — uniform application of rules and controls, not according to personalities",
                "Career orientation — managers are career professionals, not owners of the units they manage"
              ]
            }
          ]
        },
        {
          h: "Social-Person Approaches",
          blocks: [
            {
              t: "def",
              term: "Social-person approaches",
              d: "Management theories that focus on the organization's human and social factors. Managers get things done by working with people."
            },
            {
              t: "def",
              term: "Hawthorne Studies",
              d: "A series of studies during the 1920s and 1930s that provided new insights into individual and group behavior."
            },
            {
              t: "list",
              title: "Conclusions of the Hawthorne Studies",
              items: [
                "People's attitudes and behavior are closely related",
                "Group factors significantly affect individual behavior",
                "Group standards establish individual worker output",
                "Money is less a factor in determining output than group standards, group attitudes, and security"
              ]
            },
            {
              t: "def",
              term: "Human relations movement",
              d: "A management approach based on the belief that a satisfied worker is a productive worker. These viewpoints were largely shaped by personal beliefs, not substantive research."
            },
            {
              t: "def",
              term: "Behavioral science theorists",
              d: "Researchers who engaged in OBJECTIVE research of human behavior in organizations — including Fred Fiedler, Victor Vroom, Frederick Herzberg, Edwin Locke, David McClelland, Robert House, and Richard Hackman (their contributions appear in later weeks)."
            }
          ]
        },
        {
          h: "Quantitative Approach",
          blocks: [
            {
              t: "def",
              term: "Quantitative approach",
              d: "The use of quantitative techniques to improve decision making; ultimately became known as management science. It evolved from military applications developed during WWII."
            },
            {
              t: "def",
              term: "Total quality management (TQM)",
              d: "A philosophy of management that is driven by continuous improvement and responsiveness to customer needs and expectations. It emerged from the quantitative approach."
            },
            {
              t: "list",
              title: "What is quality management? (6 elements)",
              items: [
                "Intense focus on the customer",
                "Concern for continual improvement",
                "Process focused",
                "Improvement in the quality of everything the organization does",
                "Accurate measurement",
                "Empowerment of employees"
              ]
            }
          ]
        },
        {
          h: "Systems and Contingency Approaches",
          blocks: [
            {
              t: "def",
              term: "System",
              d: "A set of interrelated and interdependent parts arranged in a manner that produces a unified whole."
            },
            {
              t: "def",
              term: "Closed systems",
              d: "Systems that are not influenced by and do not interact with their environment."
            },
            {
              t: "def",
              term: "Open systems",
              d: "Systems that interact with their environment. As an open system, an organization takes in INPUTS (raw materials, human resources, capital, technology, information), runs them through a TRANSFORMATION PROCESS (employees' work activities, management activities, technology and operations methods), and sends OUTPUTS to the environment (products and services, financial results, information, human results) — with feedback from outputs to inputs."
            },
            {
              t: "def",
              term: "Contingency approach",
              d: "A management approach that recognizes organizations as different, which means they face different situations (contingencies) and require different ways of managing. More than 100 contingency variables have been identified; its primary value is stressing that there are no simplistic or universal rules for managers to follow."
            }
          ]
        },
        {
          h: "New Management Approaches (instructor addition)",
          blocks: [
            {
              t: "p",
              text: "Technology and computerization strongly influence current management: many businesses are now obsolete; some organizations operate with virtual teams — people who work together but are geographically dispersed; the gig economy provides flexibility and freedom to employers and independent workers."
            },
            {
              t: "def",
              term: "Algorithmic management",
              d: "“Software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice” (Lee et al., 2015). Algorithmic management creates a deeper, digital version of Taylorism (Cameron, 2025; Noponen et al., 2024)."
            },
            {
              t: "table",
              title: "Digital Taylorism (Noponen et al., 2024)",
              cols: [
                "Familiar characteristics",
                "New characteristics"
              ],
              rows: [
                [
                  "Piece-meal wage",
                  "“Assembly line” extended to new professions"
                ],
                [
                  "Standardization",
                  "Digital scaffolds instead of physical control"
                ],
                [
                  "Deskilling",
                  "Control of output rather than process"
                ],
                [
                  "Exploitation",
                  ""
                ]
              ]
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "In The Wealth of Nations (1776), Adam Smith argued that which practice would benefit society overall?",
          o: [
            "The division of labor",
            "Total quality management",
            "The open-systems model",
            "Bureaucratic impersonality"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — Smith praised breaking jobs into narrow, repetitive tasks.",
            "TQM emerged much later from the quantitative approach, not from 1776.",
            "The systems view of organizations came centuries after Smith.",
            "Impersonality is a feature of Weber's bureaucracy, not Smith's argument."
          ],
          e: "Adam Smith argued in The Wealth of Nations (1776) that the division of labor (job specialization — breaking jobs into narrow, repetitive tasks) would benefit society overall."
        },
        {
          q: "Scientific management, associated with Frederick Winslow Taylor, is best defined as…",
          o: [
            "focusing on the organization's human and social factors",
            "using the scientific method to find the \"one best way\" for a job to be done",
            "using quantitative techniques to improve decision making",
            "recognizing that different organizations require different ways of managing"
          ],
          a: 1,
          tier: "easy",
          h: [
            "That describes the social-person approaches, not Taylor's method.",
            "Correct — Taylor sought the single most efficient way to do each task.",
            "That is the quantitative approach (management science), not Taylor.",
            "That is the contingency approach, not scientific management."
          ],
          e: "Taylor's scientific management uses the scientific method to find the \"one best way\" for a job to be done, as in his time-and-motion studies at Bethlehem Steel."
        },
        {
          q: "The Gilbreths' \"therbligs\" are…",
          o: [
            "Fayol's 14 principles of administrative management",
            "a series of studies on group behavior at a factory",
            "a classification scheme for labeling 17 basic hand motions",
            "quantitative models developed for wartime logistics"
          ],
          a: 2,
          tier: "easy",
          h: [
            "The 14 principles belong to Fayol's general administrative theory.",
            "That describes the Hawthorne Studies, not the Gilbreths' work.",
            "Correct — therbligs label the 17 basic hand motions the Gilbreths identified.",
            "Wartime quantitative models belong to the quantitative approach."
          ],
          e: "Frank and Lillian Gilbreth identified 17 basic hand motions they dubbed therbligs (Gilbreth spelled backwards with the \"th\" transposed) to reduce wasted motion and improve efficiency."
        },
        {
          q: "Weber's ideal bureaucracy is characterized by…",
          o: [
            "decentralized decisions, informal norms, and personal loyalty to leaders",
            "continuous improvement and responsiveness to customers",
            "self-managed teams with minimal formal rules",
            "division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships"
          ],
          a: 3,
          tier: "easy",
          h: [
            "Bureaucracy stresses formal hierarchy and impersonality, not personal loyalty.",
            "That describes TQM, which emerged from the quantitative approach.",
            "Weber's model relies on formal rules, the opposite of minimal rules.",
            "Correct — those four features define Weber's ideal bureaucracy."
          ],
          e: "Weber described the ideal bureaucracy as division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships, plus formal selection and career orientation."
        },
        {
          q: "The Hawthorne Studies of the 1920s and 1930s are associated with which approach to management?",
          o: [
            "The social-person approaches",
            "The classical approach",
            "The quantitative approach",
            "The contingency approach"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — Hawthorne provided new insights into individual and group behavior.",
            "The classical approach stressed rational efficiency, not social factors.",
            "The quantitative approach came from WWII military applications.",
            "The contingency approach is about matching management to the situation."
          ],
          e: "The Hawthorne Studies provided new insights into individual and group behavior and belong to the social-person approaches, which focus on the organization's human and social factors."
        },
        {
          q: "The contingency approach to management stresses above all that…",
          o: [
            "all organizations should adopt a bureaucratic structure",
            "there is one best way to perform every job",
            "there are no simplistic or universal rules for managers to follow",
            "a satisfied worker is always a productive worker"
          ],
          a: 2,
          tier: "easy",
          h: [
            "The contingency view rejects a single universal structure for all firms.",
            "\"One best way\" is Taylor's claim, which contingency thinking challenges.",
            "Correct — different situations require different ways of managing.",
            "That is the human relations belief, not the contingency lesson."
          ],
          e: "Because organizations are different and face different situations (contingencies), the contingency approach's primary value is stressing that there are no simplistic or universal rules for managers to follow."
        },
        {
          q: "A small Beirut bakery survives the EDL grid failure by running on a paid generator subscription (ishtirak) with a strict amperage limit. The owner films and times each baker's hand motions to cut every wasted second of oven and mixer use. This use of motion study to reduce waste most directly applies the work of…",
          o: [
            "Max Weber",
            "the Gilbreths",
            "the Hawthorne researchers",
            "the behavioral science theorists"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Weber studied whole-organization bureaucracy, not hand-motion waste.",
            "Correct — the Gilbreths used motion study (and film) to cut wasted motion.",
            "Hawthorne studied group behavior and attitudes, not motion efficiency.",
            "Behavioral science theorists did objective research on behavior, not motion study."
          ],
          e: "The Gilbreths studied hand-and-body motions to reduce waste, even using motion-picture film. Filming and timing the bakers' motions to eliminate wasted movement under a tight amperage limit applies their efficiency-focused motion study."
        },
        {
          q: "A factory manager rations scarce generator fuel by running the scientific method to determine the single most efficient sequence of machine operations, then trains every operator to follow that exact sequence. Which of Taylor's four principles is reflected when she scientifically selects and then trains each operator?",
          o: [
            "Develop a science for each element of work to replace rule-of-thumb",
            "Scientifically select and then train, teach, and develop the worker",
            "Divide work and responsibility almost equally between management and workers",
            "Cooperate with workers so all work follows the science"
          ],
          a: 1,
          tier: "medium",
          h: [
            "That is the first principle, about replacing rule-of-thumb with a science of the work itself.",
            "Correct — selecting and then training the worker is Taylor's second principle.",
            "That is the fourth principle, about splitting work and responsibility.",
            "That is the third principle, about cooperation to ensure work follows the science."
          ],
          e: "Taylor's second principle is to scientifically select and then train, teach, and develop the worker. Training each operator on the fuel-saving sequence is a direct application of that principle."
        },
        {
          q: "After the lira collapse, a manufacturer in Tripoli is chaotic: staff report to several bosses, hiring is by family connection, and rules differ by shift. A consultant recommends a clear chain of command, written rules, and hiring by technical qualification, applied uniformly to everyone. This redesign most directly applies…",
          o: [
            "Weber's bureaucracy",
            "Taylor's time-and-motion study",
            "the human relations movement",
            "the open-systems model"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — hierarchy, formal rules, formal selection, and impersonality define Weber's bureaucracy.",
            "Time-and-motion study targets task efficiency, not reporting lines and hiring rules.",
            "The human relations movement focuses on worker satisfaction, not formal structure.",
            "The open-systems model describes inputs and outputs, not these structural fixes."
          ],
          e: "Clear hierarchy (authority hierarchy), written rules (formal rules and regulations), hiring by qualification (formal selection), and uniform application (impersonality) are all characteristics of Weber's ideal bureaucracy, aimed at curing the chaos and favoritism described."
        },
        {
          q: "A supermarket chain re-prices its shelves in USD daily as the lira hyperinflates, tracks customer complaints, and empowers staff to fix recurring checkout errors as part of a drive for continual improvement and customer responsiveness. This management philosophy is best described as…",
          o: [
            "scientific management",
            "closed-systems thinking",
            "total quality management (TQM)",
            "general administrative theory"
          ],
          a: 2,
          tier: "medium",
          h: [
            "Scientific management seeks the one best way for a single task, not continual customer-driven improvement.",
            "A closed system ignores the environment; this firm responds intensely to customers.",
            "Correct — continual improvement, customer focus, and employee empowerment define TQM.",
            "General administrative theory concerns the whole organization's structure, not quality improvement."
          ],
          e: "Total quality management is driven by continuous improvement and responsiveness to customer needs, with intense customer focus, accurate measurement, and empowerment of employees — exactly the behaviors described."
        },
        {
          q: "A bakery's deposits are frozen under capital controls, its lira revenue is melting, and fuel and flour prices swing daily with the exchange rate, forcing constant adjustment. Viewing the bakery as an open system, these uncontrollable price swings and frozen deposits are best understood as…",
          o: [
            "outputs the bakery sends to the environment",
            "internal transformation-process activities",
            "feedback from the bakery's own outputs",
            "environmental forces affecting the bakery's inputs"
          ],
          a: 3,
          tier: "medium",
          h: [
            "Outputs are what the firm sends out (products, financial results); these pressures come from outside.",
            "The transformation process is the firm's internal work activities, not external price shocks.",
            "Feedback loops back from the firm's own outputs; these forces originate in the environment.",
            "Correct — an open system interacts with its environment, and these forces hit its inputs."
          ],
          e: "An open system interacts with its environment, taking in inputs (raw materials, capital, etc.). Frozen deposits (capital) and volatile fuel and flour prices (raw materials) are environmental forces acting on the bakery's inputs, which it must buffer and adapt to."
        },
        {
          q: "An NGO's staff are paid in collapsing lira and morale is low. Managers notice that when employees feel listened to and form supportive peer groups, output rises even though pay does not change. This observation is most consistent with which conclusion of the Hawthorne Studies?",
          o: [
            "There is one best way to perform every job",
            "Group standards and attitudes can matter more than money in determining output",
            "Authority must flow through a single unbroken scalar chain",
            "Quality must be measured accurately and continually"
          ],
          a: 1,
          tier: "medium",
          h: [
            "\"One best way\" is Taylor's claim, not a Hawthorne conclusion.",
            "Correct — Hawthorne found money matters less than group standards, attitudes, and security.",
            "Scalar chain is one of Fayol's principles, not a Hawthorne finding.",
            "Accurate, continual measurement is an element of quality management/TQM."
          ],
          e: "The Hawthorne Studies concluded that money is less a factor in determining output than group standards, group attitudes, and security, and that group factors significantly affect individual behavior — matching the morale-driven output gain despite unchanged pay."
        },
        {
          q: "A delivery platform in Beirut pays couriers per drop in \"fresh\" dollars, uses an app to assign every route, times each step, and \"deactivates\" couriers whose output score is too low — with almost no human supervisors. Which assessment BEST captures how the lecture would analyze this system?",
          o: [
            "It abandons Taylorism because no human foreman is present",
            "It is algorithmic management that functions as a deeper, digital version of Taylorism",
            "It is the human relations movement, since couriers work independently",
            "It is a closed system, since the app runs everything internally"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The absence of a foreman does not end Taylorism; the app performs the same managerial control.",
            "Correct — software assumes managerial functions, creating a digital Taylorism.",
            "Human relations centers on worker satisfaction and social factors, not algorithmic control.",
            "The platform interacts intensely with its environment (customers, couriers), so it is not closed."
          ],
          e: "Algorithmic management is software algorithms that assume managerial functions (assigning, monitoring, evaluating, disciplining). The lecture frames it as a deeper, digital version of Taylorism: it keeps standardization, piece-meal wages, and deskilling while replacing physical control with digital scaffolds and controlling output rather than process."
        },
        {
          q: "Two consultants advise a hyperinflation-hit firm. One urges a Weber-style structure of rules and hierarchy; the other cites the Hawthorne Studies to argue that demoralized, underpaid staff need attention to social factors. The CEO asks how both can be right at once. Which approach BEST justifies combining the two prescriptions?",
          o: [
            "The classical approach, since it already contains both ideas",
            "The quantitative approach, since both can be reduced to numbers",
            "The systems approach, which treats structure and people as interdependent parts of one whole",
            "Scientific management, since it optimizes every element separately"
          ],
          a: 2,
          tier: "hard",
          h: [
            "The classical approach is largely silent on the social side that Hawthorne addressed.",
            "Reducing structure and morale to numbers misses their interdependence; that is not the point here.",
            "Correct — a system is interrelated, interdependent parts forming a unified whole.",
            "Scientific management optimizes tasks in isolation, not the structure-plus-people whole."
          ],
          e: "A system is a set of interrelated and interdependent parts producing a unified whole. The systems approach shows that formal structure (Weber) and human/social dynamics (Hawthorne) are interdependent parts of the same organization, so a sound redesign treats both together rather than choosing one."
        },
        {
          q: "A manager claims, \"The Hawthorne Studies and the human relations movement prove that a satisfied worker is always a productive worker.\" How would the lecture qualify this statement?",
          o: [
            "It is correct; the Hawthorne Studies established this as settled fact",
            "\"Satisfied worker = productive worker\" is the human relations belief, which rested on personal beliefs rather than substantive research",
            "It is wrong because the Hawthorne Studies found money is the strongest driver of output",
            "It is the central finding of the quantitative approach"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The lecture warns this belief was not established by substantive research.",
            "Correct — it is the human relations movement's belief, shaped by personal conviction, not rigorous evidence.",
            "Hawthorne actually found money matters less than group standards, not most.",
            "The quantitative approach concerns decision-making techniques, not worker satisfaction."
          ],
          e: "\"A satisfied worker is a productive worker\" is the belief of the human relations movement, which the slides note was largely shaped by personal beliefs, not substantive research. Objective study of behavior came later from the behavioral science theorists, so the claim should be treated cautiously."
        },
        {
          q: "A firm wants to copy a rival's algorithm-driven, highly standardized fuel-rationing system exactly, assuming what worked there must work everywhere. Which approach BEST explains why this assumption is risky?",
          o: [
            "Scientific management, because there is one best way that applies to all firms",
            "General administrative theory, because Fayol's principles are universal",
            "The contingency approach, because organizations differ and require different ways of managing",
            "The closed-systems view, because the firm can ignore its environment"
          ],
          a: 2,
          tier: "hard",
          h: [
            "Believing in one universal best way is exactly the assumption that fails here.",
            "Treating principles as universal ignores how situations differ between firms.",
            "Correct — different contingencies mean no universal rule fits every organization.",
            "Ignoring the environment makes copying riskier, not safer."
          ],
          e: "The contingency approach recognizes organizations as different, facing different situations (contingencies) requiring different ways of managing; more than 100 contingency variables exist. Its primary value is stressing there are no simplistic or universal rules, so a system that fit the rival's conditions may fail under this firm's different ones."
        },
        {
          q: "Critics say Taylor's scientific management and Weber's bureaucracy share a common limitation that the social-person approaches later exposed. What is that shared limitation?",
          o: [
            "Both relied on quantitative wartime models that civilian firms could not use",
            "Both emphasized rational efficiency and structure while largely ignoring the human and social factors of work",
            "Both insisted there are no universal rules, leaving managers without guidance",
            "Both argued that a satisfied worker is automatically a productive worker"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Neither Taylor nor Weber was built on the WWII-era quantitative approach.",
            "Correct — both classical schools prized rational efficiency and structure over the social side.",
            "It was the contingency approach, not Taylor or Weber, that rejected universal rules.",
            "The satisfied-worker claim is the human relations belief, the opposite of these classical schools."
          ],
          e: "Taylor's scientific management (task efficiency, one best way) and Weber's bureaucracy (rules, hierarchy, impersonality) are both part of the classical approach, which emphasized rationality and efficiency. The social-person approaches and the Hawthorne Studies later showed they overlooked the organization's human and social factors, such as attitudes and group standards."
        },
        {
          q: "A hospital optimizes its emergency room alone — faster triage, more ER staff — yet patient outcomes worsen because the lab, pharmacy, and wards were ignored and now bottleneck. Which approach BEST explains this failure?",
          o: [
            "Scientific management — the ER simply needs more time-and-motion study",
            "The systems approach — the organization is a set of interdependent parts, so optimizing one subsystem in isolation can harm the whole",
            "The general administrative approach — the ER violated unity of command",
            "The quantitative approach — the ER lacked enough linear-programming models"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Adding time-and-motion study to one unit ignores the real issue: the units are interdependent. Think about the whole, not one part.",
            "Right idea — that's the one.",
            "Unity of command is about reporting to a single boss; it doesn't explain why improving one unit hurt the others.",
            "More math models for the ER alone repeats the very mistake — optimizing a part in isolation. The issue is interdependence, not technique."
          ],
          e: "The systems approach views an organization as a set of interrelated, interdependent parts (subsystems). Improving one subsystem (the ER) while ignoring the others can degrade overall performance, because a change in one part affects the whole — exactly what happened when the lab, pharmacy, and wards bottlenecked."
        }
      ],
      cases: [
        {
          title: "Generator Fuel and the Stopwatch at Furn al-Cedar",
          scenario: "Furn al-Cedar is a family bakery in Beirut. Since the EDL grid now supplies only a few hours of state power a day, the bakery runs on a paid private generator subscription (ishtirak) with a strict amperage limit, and diesel must be bought in scarce \"fresh\" dollars after queueing for fuel. Flour and diesel are re-priced in USD almost daily as the lira collapses, while the owner's bank deposits remain frozen under capital controls, so cash for operations is tight. To survive, the new operations manager films each baker's hand motions, times every step of mixing, shaping, and oven loading, and redesigns the workflow so that the ovens and mixers run only in tight, pre-planned bursts that fit within the amperage limit. Bakers are trained to follow the exact sequence. Some grumble that the work has become mechanical and that they are watched like machines.",
          qs: [
            {
              q: "Which classical theorists' methods is the operations manager applying when she films and times the bakers' motions, and what is the goal?",
              a: "She is applying the Gilbreths' motion study (they studied hand-and-body motions and were among the first to use motion-picture film) together with Taylor's scientific management and his time-and-motion approach. The goal is to find the \"one best way\" to perform each task and eliminate wasted motion, here to ration scarce generator fuel and stay within the ishtirak amperage limit while the lira collapse makes every liter of \"fresh\"-dollar diesel costly."
            },
            {
              q: "Identify two of Taylor's four principles visible in this case and tie each to a concrete detail.",
              a: "Principle 1 (develop a science for each element of work to replace rule-of-thumb) appears when she replaces the bakers' habitual methods with a studied, pre-planned sequence of mixing, shaping, and oven loading timed to the amperage limit. Principle 2 (scientifically select and then train the worker) appears when the bakers are trained to follow that exact sequence. The redesign of who plans versus who executes also reflects Principle 4 (dividing work and responsibility between management and workers)."
            },
            {
              q: "The bakers complain they are \"watched like machines.\" Using the social-person approaches, what risk does the lecture suggest a purely efficiency-focused redesign may overlook?",
              a: "The social-person approaches and the Hawthorne Studies warn that attitudes and behavior are closely related and that group standards, group attitudes, and security can matter more than money in determining output. A redesign that optimizes motion and fuel but ignores the demoralized, underpaid bakers (their lira pay is melting) risks lowering output through poor morale and group resistance; the human and social side must be managed alongside the efficiency gains."
            }
          ]
        },
        {
          title: "Sidon Textiles: Buffeted by the Crisis",
          scenario: "Sidon Textiles grew from a small workshop into a 600-employee firm, but the post-2019 crisis has battered it. Its bank deposits are frozen as \"lollars\" worth a fraction of \"fresh\" dollars, so it cannot easily fund imports; it pays workers in lira that lose value daily and re-prices its own products in USD; and it survives on a costly generator subscription because EDL provides only a few hours of power. Internally it is chaotic: employees report to several managers, hiring is by family connection, rules vary by department, and favoritism is rife. Consultant A proposes a Weber-style redesign of hierarchy, written rules, and hiring by qualification. Consultant B objects that the staff are demoralized and underpaid and that, per the Hawthorne Studies, social factors drive output more than rules will. The CEO suspects both consultants and the volatile environment all matter at once.",
          qs: [
            {
              q: "List the characteristics of Weber's bureaucracy that Consultant A's redesign would introduce, and match each to a problem in the case.",
              a: "Authority hierarchy (clear chain of command) fixes employees reporting to several managers; formal rules and regulations fix rules varying by department; formal selection (hiring by technical qualification) fixes hiring by family connection; impersonality (uniform application of rules) fixes favoritism. Division of labor with well-defined tasks and career orientation (career professional managers rather than family owner-managers) round out the bureaucratic model."
            },
            {
              q: "What evidence from the Hawthorne Studies supports Consultant B, given that workers are paid in collapsing lira?",
              a: "The Hawthorne Studies concluded that people's attitudes and behavior are closely related, that group factors significantly affect individual behavior, that group standards establish individual output, and that money is less a factor than group standards, group attitudes, and security. With salaries melting in the lira collapse, formal monetary incentives are weak, so attention to morale, group attitudes, and a sense of security may lift output more than structure alone, supporting Consultant B's warning."
            },
            {
              q: "Using the systems and contingency approaches, explain why the CEO is right that the consultants AND the environment all matter at once.",
              a: "The systems approach treats the firm as an open system of interrelated, interdependent parts: structure (Weber) and people/social dynamics (Hawthorne) are parts of one transformation process, so changing one affects the other and both must be addressed together. As an open system the firm also depends on its environment, and the frozen \"lollar\" deposits, daily lira repricing, and EDL grid failure are environmental forces on its inputs. The contingency approach adds that there are no universal rules: the right blend of structure and human-relations measures depends on Sidon Textiles' specific, crisis-shaped situation, so the CEO must diagnose and fit the response to the contingencies rather than apply either consultant's prescription alone."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Compare the classical approach to management with the social-person approaches. In your answer, identify the main theorists of each, their core ideas, and what each approach overlooked.",
          outline: [
            "Classical approach: first studies of management; emphasis on rationality and making organizations/workers as efficient as possible",
            "Scientific management — Taylor (one best way, 4 principles, time-and-motion at Bethlehem Steel); Gilbreths (therbligs, motion films)",
            "General administrative theory — Fayol (14 principles for the whole organization), Weber (ideal bureaucracy: division of labor, hierarchy, rules, impersonality)",
            "Social-person approaches: focus on the organization's human and social factors",
            "Hawthorne Studies conclusions (attitudes-behavior link; group factors; group standards set output; money matters less than group standards/attitudes/security)",
            "Human relations movement (satisfied worker = productive worker — based on beliefs, not research); behavioral science theorists (objective research: Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman)",
            "Critique both ways: classical treats workers as cogs and ignores social factors; early human relations lacked research rigor"
          ],
          model: "The classical approach comprised the first studies of management and emphasized rationality and making organizations and workers as efficient as possible. Within it, Taylor's scientific management used the scientific method to find the “one best way” to do a job — his time-and-motion studies at Bethlehem Steel and his four principles (develop a science of work, scientifically select and train workers, cooperate with workers, divide work between management and workers). The Gilbreths extended this with therbligs, a classification of 17 basic hand motions, using motion-picture film to cut wasted movement. The general administrative theorists looked at the whole organization: Fayol proposed 14 principles of management (e.g., unity of command, scalar chain, esprit de corps), and Weber described the ideal bureaucracy — division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships. The social-person approaches instead focused on the organization's human and social factors. The Hawthorne Studies showed that attitudes and behavior are closely related, that group factors significantly affect individual behavior, that group standards establish individual output, and that money matters less than group standards, attitudes, and security. The human relations movement claimed a satisfied worker is a productive worker — though this rested on personal beliefs rather than substantive research — and behavioral science theorists (Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman) later studied behavior objectively. Each tradition overlooked what the other saw: classical theory largely ignored the social side of work, while early human relations thinking lacked rigorous evidence. Together they explain why modern management attends to both efficient structures and human behavior."
        },
        {
          q: "“Algorithmic management is simply Taylorism on steroids.” Explain the steps of Taylor's scientific management, define algorithmic management, and discuss the similarities and differences identified in the lecture (Digital Taylorism).",
          outline: [
            "Taylor: scientific management = scientific method to find the “one best way”; time-and-motion studies",
            "Four principles: science of work; scientific selection and training; cooperation; division of work/responsibility between management and workers",
            "Algorithmic management defined (Lee et al., 2015): software algorithms that assume managerial functions + supporting institutional devices",
            "Familiar (shared) characteristics: piece-meal wage, standardization, deskilling, exploitation",
            "New characteristics: assembly-line logic spread to new professions; digital scaffolds instead of physical control; control of output rather than process (Noponen et al., 2024)",
            "Conclusion: deep continuity in logic, but digital means change scope and mechanism (Cameron, 2025)"
          ],
          model: "Taylor's scientific management applied the scientific method to find the “one best way” for a job to be done, demonstrated in his time-and-motion studies at Bethlehem Steel. His four principles were: (1) develop a science for each element of work to replace rule-of-thumb; (2) scientifically select, train, teach, and develop the worker; (3) cooperate with workers to ensure work follows the science; and (4) divide work and responsibility almost equally between management and workers, with management doing what it is better suited for. Algorithmic management is “software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice” (Lee et al., 2015) — apps and systems that assign, monitor, evaluate, and discipline workers. The lecture's Digital Taylorism framework (Noponen et al., 2024) shows the continuity: piece-meal wages, standardization, deskilling, and exploitation are familiar Taylorist characteristics that persist on platforms. But it also identifies what is new: the assembly-line logic now reaches new professions; digital scaffolds replace physical control (the app, not the foreman or factory layout, structures work); and control shifts from the process to the output (workers are judged and sanctioned on measured results). In this sense algorithmic management is a deeper, digital version of Taylorism (Cameron, 2025) — the statement is broadly accurate, provided we recognize that the mechanism and reach of control have changed, not just its intensity."
        },
        {
          q: "Explain the systems approach and the contingency approach to management. Why did these approaches emerge after the classical and behavioral ones, and what is the practical lesson of each for managers?",
          outline: [
            "System defined: interrelated, interdependent parts producing a unified whole; closed vs. open systems",
            "Organization as open system: inputs (raw materials, HR, capital, technology, information) → transformation process (employees' work, management activities, technology/operations methods) → outputs (products/services, financial results, information, human results) + feedback and environment",
            "Practical lesson: units are interdependent; organizations depend on their environment",
            "Contingency approach: organizations are different, face different contingencies, require different ways of managing; 100+ contingency variables",
            "Practical lesson: no simplistic or universal rules — match practice to situation",
            "Why later: classical/behavioral sought universal prescriptions (one best way; satisfied worker); systems/contingency respond to their limits"
          ],
          model: "A system is a set of interrelated and interdependent parts arranged in a manner that produces a unified whole. Closed systems neither are influenced by nor interact with their environment; open systems do interact with it. The systems approach views the organization as an open system: it draws inputs from the environment (raw materials, human resources, capital, technology, information), transforms them through employees' work activities, management activities, and technology and operations methods, and returns outputs (products and services, financial results, information, human results), with feedback looping back. The contingency approach recognizes organizations as different: they face different situations — contingencies — and require different ways of managing; more than 100 contingency variables have been identified. These approaches emerged because earlier schools implied universal answers: scientific management promised “one best way,” administrative theory offered general principles, and human relations assumed satisfaction always drives productivity. Reality proved less uniform. The practical lesson of the systems view is that managers cannot manage parts in isolation — decisions in one part affect the others, and the organization lives or dies by its exchanges with its environment. The lesson of the contingency view is that there are no simplistic or universal rules for managers to follow: effective management means diagnosing the situation and fitting structure, style, and systems to it."
        }
      ]
    },
    {
      id: "w3",
      week: 3,
      title: "The External and Internal Environment",
      blurb: "What constrains managers: the environment outside and the culture inside.",
      sections: [
        {
          h: "Omnipotent or Symbolic?",
          blocks: [
            {
              t: "def",
              term: "Omnipotent view",
              d: "Managers are directly responsible for an organization's success or failure."
            },
            {
              t: "def",
              term: "Symbolic view",
              d: "Much of an organization's success or failure is due to external forces outside managers' control."
            },
            {
              t: "p",
              text: "Managerial discretion is constrained from two sides: the organizational environment (external) and the organizational culture (internal)."
            }
          ]
        },
        {
          h: "The External Environment",
          blocks: [
            {
              t: "def",
              term: "Environment",
              d: "Institutions or forces outside of the organization that could potentially affect performance."
            },
            {
              t: "list",
              title: "Components of the external environment surrounding the organization",
              items: [
                "Economic",
                "Demographic",
                "Technological",
                "Sociocultural",
                "Political/Legal",
                "Global"
              ]
            },
            {
              t: "def",
              term: "Specific environment",
              d: "The part of the environment directly relevant to the achievement of organizational goals — where most of management's attention typically focuses."
            },
            {
              t: "table",
              title: "Specific environment components (6)",
              cols: [
                "Component",
                "Why it matters"
              ],
              rows: [
                [
                  "Suppliers",
                  "Managers need to ensure a steady flow of inputs"
                ],
                [
                  "Customers",
                  "Organizations exist to meet customer needs"
                ],
                [
                  "Competitors",
                  "All organizations have competitors they need to monitor"
                ],
                [
                  "Government",
                  "Federal, state, and local governments influence what the organization can and cannot do"
                ],
                [
                  "Investors",
                  "Public companies are scrutinized by stockholders and potential investors; decisions should enhance shareholder value"
                ],
                [
                  "Special interest groups",
                  "Lobbyists, protestors, and action groups can have a significant impact and effect change"
                ]
              ]
            },
            {
              t: "def",
              term: "Porter's Five Forces Model (Porter, 2008)",
              d: "The five forces shaping industry competition: (1) Rivalry among existing competitors — at the center; (2) Threat of new entrants; (3) Bargaining power of suppliers; (4) Bargaining power of buyers; (5) Threat of substitute products or services."
            }
          ]
        },
        {
          h: "Environmental Uncertainty",
          blocks: [
            {
              t: "p",
              text: "Environments differ in their degree of environmental uncertainty, which has two dimensions: degree of change and degree of complexity."
            },
            {
              t: "def",
              term: "Degree of change",
              d: "Dynamic environment: components change frequently. Stable environment: components change very little."
            },
            {
              t: "def",
              term: "Degree of complexity",
              d: "The number of components in an organization's environment and the extent of the knowledge the organization has about those components."
            },
            {
              t: "table",
              title: "Environmental uncertainty matrix (change × complexity)",
              cols: [
                "Cell",
                "Description"
              ],
              rows: [
                [
                  "Cell 1 (stable + simple)",
                  "Stable, predictable environment; few, similar components that remain the same; minimal need for sophisticated knowledge — LOWEST uncertainty"
                ],
                [
                  "Cell 2 (dynamic + simple)",
                  "Dynamic, unpredictable environment; few, similar components that continually change; minimal need for sophisticated knowledge"
                ],
                [
                  "Cell 3 (stable + complex)",
                  "Stable, predictable environment; many dissimilar components that remain the same; high need for sophisticated knowledge"
                ],
                [
                  "Cell 4 (dynamic + complex)",
                  "Dynamic, unpredictable environment; many dissimilar components continually changing; high need for sophisticated knowledge — HIGHEST uncertainty"
                ]
              ]
            }
          ]
        },
        {
          h: "The Internal Environment: Organizational Culture",
          blocks: [
            {
              t: "def",
              term: "Organizational culture",
              d: "The shared values, principles, traditions, and ways of doing things that influence the way organizational members act and that distinguish the organization from other organizations. Just as each individual has a personality, an organization has one too."
            },
            {
              t: "list",
              title: "Six dimensions of an organization's culture",
              items: [
                "1. Adaptability",
                "2. Attention to detail",
                "3. Outcome orientation",
                "4. People orientation",
                "5. Team orientation",
                "6. Integrity"
              ]
            },
            {
              t: "def",
              term: "Strong cultures",
              d: "Organizational cultures in which the key values are intensely held and widely shared. Strong cultures have a greater influence on employees than weak cultures."
            },
            {
              t: "table",
              title: "Strong vs. weak cultures",
              cols: [
                "Strong cultures",
                "Weak cultures"
              ],
              rows: [
                [
                  "Values widely shared",
                  "Values limited to a few people — usually top management"
                ],
                [
                  "Culture conveys consistent messages about what's important",
                  "Culture sends contradictory messages about what's important"
                ],
                [
                  "Most employees can tell stories about company history or heroes",
                  "Employees have little knowledge of company history or heroes"
                ],
                [
                  "Employees strongly identify with culture",
                  "Employees have little identification with culture"
                ],
                [
                  "Strong connection between shared values and behaviors",
                  "Little connection between shared values and behaviors"
                ]
              ]
            },
            {
              t: "p",
              text: "Where culture comes from and how it continues: the original source usually reflects the vision of the FOUNDERS; once in place, organizational practices (e.g., selection and socialization of employees) help maintain it; and the actions of TOP MANAGERS have a major impact on culture."
            },
            {
              t: "list",
              title: "How culture is shaped (transmitted to employees)",
              items: [
                "Stories",
                "Rituals",
                "Material artifacts and symbols",
                "Language"
              ]
            },
            {
              t: "p",
              text: "Culture also affects the types of managerial decisions made across planning, organizing, leading, and controlling."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Institutions or forces outside the organization that could potentially affect its performance are called the…",
          o: [
            "external environment",
            "organizational culture",
            "internal environment",
            "managerial discretion"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — these outside forces are exactly what the lecture defines as the environment.",
            "That is the shared values and ways of doing things INSIDE the firm — re-read which side is described as outside forces.",
            "This points inward at the firm's own culture and structure, but the question asks about outside institutions or forces.",
            "Discretion is the manager's freedom to act; the question asks for the outside forces that can constrain it, not the freedom itself."
          ],
          e: "The (external) environment = institutions or forces outside the organization that could potentially affect performance."
        },
        {
          q: "Which of these is one of the SIX components of the general external environment listed in the lecture?",
          o: [
            "Demographic",
            "Suppliers",
            "Customers",
            "Special interest groups"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — demographic is one of the broad general-environment components.",
            "Suppliers are a SPECIFIC environment component (a force directly relevant to goals), not one of the broad general components.",
            "Customers sit in the specific environment — directly relevant to goals — not among the broad general-environment conditions.",
            "Special interest groups belong to the specific environment, not the broad general conditions surrounding the firm."
          ],
          e: "General external components: economic, demographic, technological, sociocultural, political/legal, global. Suppliers, customers, and special interest groups are specific-environment components."
        },
        {
          q: "The part of the environment directly relevant to the achievement of organizational goals is the…",
          o: [
            "general environment",
            "specific environment",
            "global environment",
            "internal environment"
          ],
          a: 1,
          tier: "easy",
          h: [
            "The general environment is the broad backdrop (economic, demographic, etc.); the question asks for the part DIRECTLY relevant to goals.",
            "Correct — the specific environment is directly relevant to goal achievement and gets most of management's attention.",
            "Global is just one broad component of the general environment, not the part directly relevant to day-to-day goals.",
            "Internal refers to culture inside the firm; the question concerns the part of the EXTERNAL environment closest to goals."
          ],
          e: "The specific environment is the part directly relevant to goal achievement and where most managerial attention focuses."
        },
        {
          q: "Environmental uncertainty is determined by which two dimensions?",
          o: [
            "Degree of profitability and degree of size",
            "Strength and weakness of culture",
            "Degree of change and degree of complexity",
            "Centralization and formalization"
          ],
          a: 2,
          tier: "easy",
          h: [
            "Profitability and size are firm outcomes/attributes, not the two dimensions the lecture uses to measure uncertainty.",
            "Strong vs. weak describes CULTURE (the internal environment), not the dimensions of environmental uncertainty.",
            "Correct — uncertainty = degree of change (stable vs. dynamic) and degree of complexity.",
            "Centralization and formalization are structural design choices, not the dimensions of environmental uncertainty."
          ],
          e: "Environmental uncertainty has two dimensions: degree of change (dynamic vs. stable) and degree of complexity."
        },
        {
          q: "Organizational culture is best defined as…",
          o: [
            "the formal arrangement of jobs within an organization",
            "the institutions and forces outside the organization that affect performance",
            "the plan for how the organization will compete successfully",
            "the shared values, principles, traditions, and ways of doing things that influence how members act and distinguish the organization from others"
          ],
          a: 3,
          tier: "easy",
          h: [
            "That describes organizational STRUCTURE, not culture — culture is about shared values and ways of doing things.",
            "Those are the external environment, the opposite of the INTERNAL shared-values concept the question asks about.",
            "That describes strategy, not culture — re-read for the 'personality' of the organization.",
            "Correct — this is the lecture's definition of organizational culture, the organization's personality."
          ],
          e: "Organizational culture = shared values, principles, traditions, and ways of doing things that influence member behavior and distinguish the organization."
        },
        {
          q: "Culture is transmitted to employees through which of the following?",
          o: [
            "Spans of control and chains of command",
            "Stories, rituals, material artifacts and symbols, and language",
            "SWOT analyses and mission statements",
            "Supplier and customer contracts"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Those are structural mechanisms, not the ways culture is conveyed to employees.",
            "Correct — these four are the lecture's mechanisms for transmitting culture.",
            "Planning tools like SWOT are not how culture is passed to employees; think of stories and shared symbols.",
            "Contracts govern external relationships; the question asks how culture is conveyed inside the firm."
          ],
          e: "Culture is transmitted through stories, rituals, material artifacts and symbols, and language."
        },
        {
          q: "Since 2019 a Beirut restaurant has had to re-price its menu in fresh US dollars almost daily because the lira keeps collapsing. This volatility belongs to which external-environment component, and what is its main effect?",
          o: [
            "The economic component of the general environment, raising the degree of change",
            "The specific environment's supplier force, lowering complexity",
            "The political/legal component, with no effect on uncertainty",
            "Organizational culture, an internal matter"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — currency collapse and repricing are economic conditions, and constant change pushes uncertainty up.",
            "Suppliers are a specific-environment force, but currency collapse is a broad economic condition, and rapid change RAISES (not lowers) uncertainty.",
            "Currency and inflation are economic, not political/legal — and frequent repricing clearly increases the degree of change.",
            "Currency collapse is an outside force, not the firm's internal shared values; re-classify it as an external component."
          ],
          e: "Lira collapse and daily USD repricing are the economic component of the general environment; the constant change increases the degree of change and thus environmental uncertainty."
        },
        {
          q: "An EDL grid that supplies only a few hours of state power forces a Lebanese bakery to buy capacity from a neighborhood generator 'ishtirak' provider that imposes an amperage limit. In Porter's terms, that sole generator provider is exercising…",
          o: [
            "the threat of new entrants",
            "the bargaining power of suppliers",
            "the bargaining power of buyers",
            "the threat of substitute products"
          ],
          a: 1,
          tier: "medium",
          h: [
            "No new competitor is entering the bakery's market here; focus on who controls a critical input the bakery must buy.",
            "Correct — the generator provider is a powerful supplier of a critical input (electricity), dictating amperage and price.",
            "Buyers are the bakery's customers; the generator provider is on the input side, supplying power TO the bakery.",
            "A substitute would be a different product meeting the same customer need; here the issue is a powerful supplier of an input."
          ],
          e: "The generator 'ishtirak' provider supplies a critical input (power) and dictates amperage/price — the bargaining power of suppliers."
        },
        {
          q: "A Lebanese importer deals with frozen 'lollar' deposits, daily lira repricing, BDL circulars, a generator cartel, scarce foreign suppliers, and shifting capital-control rules. How should its environment be classified on the uncertainty matrix?",
          o: [
            "Cell 1: stable and simple — lowest uncertainty",
            "Cell 3: stable and complex",
            "Cell 4: dynamic and complex — highest uncertainty",
            "Cell 2: dynamic and simple"
          ],
          a: 2,
          tier: "medium",
          h: [
            "Frozen deposits, daily repricing, and shifting rules are anything but stable or simple — reconsider both dimensions.",
            "The 'complex' half is right, but daily repricing and changing capital controls make it dynamic, not stable.",
            "Correct — many dissimilar components (banks, BDL, generators, suppliers) that change constantly = dynamic + complex, highest uncertainty.",
            "It is dynamic, but with banks, BDL, generators, suppliers, and regulators it is hardly 'simple' — there are many dissimilar components."
          ],
          e: "Many dissimilar, continually changing components (BDL, banks, generators, suppliers, rules) place the firm in Cell 4 — dynamic and complex, the highest uncertainty."
        },
        {
          q: "A startup's founder constantly repeats the slogan 'the customer is always our boss,' new hires hear stories of him personally refunding an unhappy client, and weekly 'customer-win' rituals celebrate service. Most employees live by it. This is an example of…",
          o: [
            "a weak culture, because values are only slogans",
            "a strong culture high in people/customer orientation",
            "the symbolic view of management",
            "the general environment shaping the firm"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Slogans alone would be weak, but here values are widely shared, lived, and reinforced by stories and rituals — that is the opposite of weak.",
            "Correct — widely shared, intensely lived values reinforced by stories and rituals describe a strong culture.",
            "The symbolic view is about external forces driving success; this question is about an internal, widely shared culture.",
            "This is an INTERNAL culture being transmitted, not an outside force from the general environment."
          ],
          e: "Widely shared, intensely held values reinforced through stories and rituals describe a strong culture, here emphasizing customer/people orientation."
        },
        {
          q: "Two firms face identical Lebanese conditions. Firm A's CEO says, 'Our fate is in the banks' and BDL's hands.' Firm B's CEO says, 'Whatever the crisis, our results are on me.' These reflect, respectively…",
          o: [
            "the omnipotent and symbolic views",
            "the symbolic and omnipotent views",
            "strong and weak cultures",
            "the specific and general environments"
          ],
          a: 1,
          tier: "medium",
          h: [
            "You have the labels reversed: blaming outside forces is symbolic, while taking personal responsibility is omnipotent.",
            "Correct — A attributes results to outside forces (symbolic); B claims direct responsibility (omnipotent).",
            "These quotes are about responsibility for success/failure, not about how widely shared the firms' values are.",
            "Specific vs. general classifies environment components; these statements are about who controls outcomes."
          ],
          e: "Blaming external forces (banks/BDL) = symbolic view; claiming personal responsibility for results = omnipotent view."
        },
        {
          q: "A manufacturer must keep raw materials flowing despite fuel queues and unreliable importers. Which specific-environment component is the manager prioritizing, and why does the lecture say it matters?",
          o: [
            "Competitors — all organizations must monitor rivals",
            "Investors — decisions should enhance shareholder value",
            "Suppliers — managers need to ensure a steady flow of inputs",
            "Special interest groups — they can effect change"
          ],
          a: 2,
          tier: "medium",
          h: [
            "Rivals matter, but the concern here is securing inputs (raw materials, fuel), not watching competitors.",
            "Shareholder value matters, but fuel queues and importers concern the flow of inputs, not investor relations.",
            "Correct — ensuring a steady flow of inputs is exactly why the lecture says suppliers matter.",
            "Interest groups can pressure firms, but here the issue is keeping materials flowing — an input-supply concern."
          ],
          e: "Keeping raw materials and fuel flowing is about suppliers, who matter because managers must ensure a steady flow of inputs."
        },
        {
          q: "A Lebanese chain blames ALL its losses purely on EDL blackouts and the banking crisis and stops adjusting its own strategy. Which is the BEST critique using the lecture?",
          o: [
            "It correctly adopts the omnipotent view, so no change is needed",
            "It overstates the symbolic view; discretion is constrained but managers still act within it on planning, organizing, leading, controlling",
            "It confuses the specific and general environments, which has no managerial consequence",
            "It treats a strong culture as the cause, which is an internal not external matter"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The omnipotent view is the opposite — it credits/blames managers, not external forces; and abandoning strategy is not 'no change needed.'",
            "Correct — leaning fully on the symbolic view ignores that managers still exercise real discretion within the constraints.",
            "There may be a classification nuance, but the core flaw is abandoning managerial discretion, which does have consequences.",
            "The firm blamed external forces, not its culture; the critique should target the over-reliance on external forces."
          ],
          e: "Blaming everything on external forces is an extreme symbolic stance; the lecture holds that discretion is constrained yet real — managers still act within it across the four functions."
        },
        {
          q: "Map the stakeholders in Lebanon's crisis to the correct environment label. Which pairing is MOST accurate?",
          o: [
            "Depositors and the generator cartel are general-environment components; BDL is internal",
            "BDL and EDL are specific-environment forces (government/suppliers); inflation is a general-environment economic condition",
            "Frozen deposits are part of organizational culture; suppliers are general environment",
            "Capital controls are a specific competitor force; depositors are technological"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Depositors and a power supplier are specific forces directly relevant to the firm, and BDL is external, not internal.",
            "Correct — BDL (government) and EDL (a power supplier) are specific forces; inflation is a broad economic (general) condition.",
            "Frozen deposits are an external economic/banking reality, not the firm's internal shared values.",
            "Capital controls are government/political-legal, not a competitor force, and depositors are people, not a technological factor."
          ],
          e: "BDL acts as government and EDL/generators as suppliers — both specific-environment forces — while inflation/currency collapse is a general-environment economic condition."
        },
        {
          q: "Two Lebanese firms face the same dynamic-and-complex environment. Firm X has a strong culture of 'protect our people first'; Firm Y has a weak culture. The lecture best predicts that…",
          o: [
            "Culture is irrelevant once the environment is highly uncertain",
            "Firm Y will act more consistently because weak cultures are flexible",
            "Firm X's widely shared values will more consistently guide employee behavior under stress than Firm Y's",
            "Firm X must abandon its culture to survive the crisis"
          ],
          a: 2,
          tier: "hard",
          h: [
            "The lecture treats culture as a continuing constraint on discretion even in turbulent environments — it is not irrelevant.",
            "Weak cultures send contradictory messages and show little values-behavior link, so they guide behavior LESS consistently, not more.",
            "Correct — strong cultures' widely shared, intensely held values guide behavior more consistently, including under stress.",
            "Nothing in the lecture says a high-uncertainty environment forces abandoning a strong culture; strong values can steady behavior."
          ],
          e: "Strong cultures exert greater, more consistent influence on employees (strong values-behavior link), so Firm X's shared values guide behavior more reliably than Firm Y's weak culture."
        },
        {
          q: "A Lebanese SME wants to REDUCE its environmental uncertainty. Given the two dimensions, which action targets the dimension it can most plausibly influence, and how?",
          o: [
            "Lower complexity by building deep knowledge of fewer, well-understood suppliers and channels",
            "Lower the degree of change by personally stabilizing the lira and the BDL",
            "Raise complexity to gain more components to manage",
            "Switch to a weak culture so employees feel less change"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — concentrating on fewer, well-understood components builds the knowledge that lowers the complexity dimension.",
            "A single SME cannot stabilize the national currency or the central bank; the degree of change here is outside its control.",
            "Adding components raises uncertainty rather than reducing it — the opposite of the goal.",
            "Culture strength is internal and does not change the external degree of change or complexity that drives uncertainty."
          ],
          e: "Change is largely beyond an SME's control, but it can reduce the complexity dimension by deepening knowledge of fewer, well-understood components (suppliers/channels)."
        },
        {
          q: "After acquiring a firm whose staff barely know its history and whose posted values nobody follows, a CEO wants to embed a strong, crisis-resilient culture. Which approach best fits the lecture's account of where culture comes from and how it is maintained?",
          o: [
            "Publish a new mission statement and assume values will spread on their own",
            "Rely solely on Porter's Five Forces analysis to shape values",
            "Model the values as a top manager and reinforce them through selection, socialization, stories, rituals, symbols, and language",
            "Wait for the external environment to stabilize before addressing culture"
          ],
          a: 2,
          tier: "hard",
          h: [
            "Posters and statements alone produced the weak culture described; the lecture says values must be actively maintained, not left to spread on their own.",
            "Five Forces analyzes industry competition, not how culture originates or is sustained inside the firm.",
            "Correct — top managers' actions plus practices like selection/socialization and the four transmission mechanisms build and sustain culture.",
            "Culture is shaped internally regardless of external conditions; waiting for stability ignores how culture is actually maintained."
          ],
          e: "Culture is maintained by top managers' actions and organizational practices (selection, socialization) and transmitted via stories, rituals, symbols, and language — not by posters alone."
        },
        {
          q: "After a great year a CEO credits her own brilliant decisions for ALL the success; after a bad year she blames only the economy. Using the omnipotent and symbolic views, the BEST critique is that…",
          o: [
            "she is right both times — managers control good years and the environment controls bad years",
            "she inconsistently switches views to flatter herself; the lecture holds managerial influence lies between the extremes — constrained by external forces in good and bad years alike",
            "she should adopt the purely symbolic view, since managers have no real effect on outcomes",
            "she should adopt the purely omnipotent view, since external forces are merely excuses"
          ],
          a: 1,
          tier: "hard",
          h: [
            "She can't have it both ways — taking all the credit but none of the blame. The lecture rejects both pure extremes.",
            "Right idea — that's the one.",
            "The purely symbolic view (managers don't matter) is as one-sided as pure omnipotence; reality sits in between.",
            "The purely omnipotent view ignores genuine external constraints — the lecture says managers are constrained, not all-powerful."
          ],
          e: "The omnipotent view credits managers for outcomes; the symbolic view credits external forces. The lecture's balanced position is that real managerial influence lies between the two — managers are constrained by environmental forces in both good and bad years. Selectively switching views to claim credit and dodge blame misapplies both."
        }
      ],
      cases: [
        {
          title: "Frozen Deposits at Cedar Trading",
          scenario: "Cedar Trading imports kitchen appliances into Lebanon. Since 2019 its operating account at the bank has been largely frozen: the balance is in 'lollars' worth a fraction of fresh dollars, and a withdrawal limit caps how much cash it can pull each week. BDL keeps issuing new circulars that change the rules, while the lira's collapse forces the firm to reprice every appliance in fresh US dollars almost daily. Its warehouse runs on a neighborhood generator 'ishtirak' provider that just cut the amperage and raised the fee, because EDL now delivers only a few hours of state power. Foreign suppliers, nervous about getting paid in usable money, demand fresh-dollar prepayment. The CEO tells staff, 'Honestly, half of whether we survive this year has nothing to do with us.'",
          qs: [
            {
              q: "Classify each major external force in this case as a SPECIFIC or GENERAL environment component, naming the component.",
              a: "GENERAL environment: the economic component — lira collapse, hyperinflation/daily USD repricing, and the frozen 'lollar' deposits/banking crisis are broad economic conditions; the political/legal component — BDL circulars and capital-control rules. SPECIFIC environment: government — BDL as the regulator imposing withdrawal limits and circulars; suppliers — the generator 'ishtirak' provider (a critical power-input supplier dictating amperage and fee) and the foreign appliance suppliers demanding fresh-dollar prepayment; customers — the buyers whose prices must be reset daily. The blackouts/EDL reflect the economic and political-legal failure of state infrastructure, felt through the generator supplier."
            },
            {
              q: "Assess Cedar Trading's environmental uncertainty using BOTH dimensions, place it in the matrix, and state the managerial implication.",
              a: "Degree of change: highly DYNAMIC — daily repricing of appliances, frequently changing BDL circulars, shifting withdrawal limits and amperage. Degree of complexity: highly COMPLEX — many dissimilar components (the bank, BDL, the generator provider, foreign suppliers, customers) requiring sophisticated knowledge of currency, banking rules, and energy. Together this is Cell 4 (dynamic + complex) — the HIGHEST environmental uncertainty. Implication: managers must monitor the environment intensively and keep maximum flexibility (e.g., pricing in fresh dollars, holding inventory buffers, diversifying suppliers and payment methods) because so little is predictable."
            },
            {
              q: "The CEO's remark reflects which view of management? Evaluate whether leaning entirely on that view is wise here.",
              a: "It reflects the SYMBOLIC view — much of success or failure is due to external forces (frozen deposits, BDL rules, the lira, EDL/generators) outside managers' control, the opposite of the omnipotent view that managers are directly responsible. The crisis genuinely constrains managerial discretion, so the symbolic view captures real truth. But leaning ENTIRELY on it is unwise: the lecture frames discretion as constrained yet real, sitting between the two views. Cedar's managers still make consequential choices in planning, organizing, leading, and controlling — repricing strategy, supplier diversification, generator contracts, cash management — so they should not abandon those levers by treating the firm as purely a victim of the environment."
            }
          ]
        },
        {
          title: "Two Generators, Two Cultures",
          scenario: "When EDL state power collapsed to a few hours a day, two Beirut firms relied on the same neighborhood generator cartel and the same frozen-deposit banking crisis. Amal Foods was founded by a manager who preached 'we ration fairly and never cheat a customer on weight or price.' Staff still retell how, during the worst fuel queues, she personally drove to find diesel rather than shut the cold room and spoil customers' stock. Every morning the team holds a 'meter-reading ritual' to share generator amperage fairly across departments, and new hires are given a small brass scale symbolizing honest measure; everyone uses the phrase 'keep it square' for fair dealing. Across the street, Byblos Mart faces identical conditions but its staff barely know who founded it, its 'integrity' poster is ignored, and during shortages some departments hoard generator capacity while others go dark.",
          qs: [
            {
              q: "Using the lecture's definition, identify the mechanisms of cultural transmission at work in Amal Foods.",
              a: "Organizational culture is the shared values, principles, traditions, and ways of doing things that influence how members act and distinguish the firm. Amal Foods transmits its culture through all four mechanisms: STORIES (the founder driving to find diesel during the fuel queues rather than spoiling customers' stock), RITUALS (the daily 'meter-reading ritual' to share generator amperage fairly), MATERIAL ARTIFACTS AND SYMBOLS (the brass scale given to new hires, symbolizing honest measure), and LANGUAGE (the in-house phrase 'keep it square')."
            },
            {
              q: "Classify Amal Foods and Byblos Mart as strong or weak cultures using the slide criteria, and note why this matters under crisis.",
              a: "Amal Foods is a STRONG culture: values are widely shared and intensely held, messages about what matters are consistent (fairness, honesty), employees can tell stories about company history/heroes (the diesel story), they strongly identify with the culture, and there is a strong connection between shared values and behavior (fair rationing). Byblos Mart is a WEAK culture: staff have little knowledge of the firm's history/founder, values are limited to an ignored poster, messages are contradictory, identification is low, and there is little link between stated values and behavior (departments hoard power). This matters because strong cultures influence employees more than weak ones; under the same crisis, Amal's shared values steer consistent behavior (fair amperage sharing) while Byblos fragments."
            },
            {
              q: "Map the key stakeholders both firms face, classify each in the environment, and connect culture to how each firm copes.",
              a: "Stakeholders/specific-environment forces: the generator cartel (a powerful SUPPLIER of the critical power input), the bank/BDL (GOVERNMENT regulator behind frozen deposits and capital controls), foreign or local SUPPLIERS, and CUSTOMERS who must be served despite shortages; the lira collapse and banking crisis are GENERAL-environment economic conditions, and EDL's failure plus BDL rules are political/legal. Both firms face the SAME high-uncertainty external environment (dynamic + complex, Cell 4). The difference is internal: Amal's strong culture of fair dealing and its rituals/symbols let it ration generator amperage and serve customers consistently, while Byblos's weak culture leaves it unable to coordinate the same scarce resources — showing how the INTERNAL environment (culture) shapes a firm's response to identical EXTERNAL constraints."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Contrast the omnipotent and symbolic views of management. What constrains managerial discretion, and why does the distinction matter for how we judge managers?",
          outline: [
            "Omnipotent view: managers directly responsible for success or failure",
            "Symbolic view: much of success/failure due to external forces outside managers' control",
            "Constraints on managerial discretion: organizational environment (external) and organizational culture (internal)",
            "Implication: realistic evaluation of managers — neither full credit nor full blame; managers act within constraints",
            "Link to the rest of the lecture: environment (uncertainty, five forces) and culture (strong/weak) are the two constraint sets"
          ],
          model: "The omnipotent view holds that managers are directly responsible for an organization's success or failure: good results reflect good management, poor results poor management. The symbolic view counters that much of an organization's success or failure is due to external forces outside managers' control — economic conditions, competitors, regulation — so managers' influence is partly symbolic. The lecture resolves the debate by showing managerial discretion as constrained from two directions: externally by the organizational environment (its components, Porter's five competitive forces, and its degree of uncertainty) and internally by the organizational culture (the shared values and ways of doing things that limit what decisions are acceptable). The distinction matters because it calibrates how we judge managers: under a purely omnipotent view we would credit or blame them for everything, while the symbolic view reminds us that a CEO inheriting a powerful set of buyers, aggressive substitutes, or a rigid strong culture cannot simply will success. A fair assessment recognizes that managers matter — they plan, organize, lead, and control within their discretion — but that discretion operates inside environmental and cultural constraints."
        },
        {
          q: "Explain the concept of environmental uncertainty and its two dimensions, and describe the four cells of the environmental uncertainty matrix. How should the amount of uncertainty affect managerial attention?",
          outline: [
            "Environment defined: outside institutions/forces potentially affecting performance",
            "Dimension 1 — degree of change: dynamic (frequent change) vs. stable (little change)",
            "Dimension 2 — degree of complexity: number of components + knowledge needed about them",
            "Cell 1 stable+simple: few similar unchanging components, minimal knowledge — least uncertainty",
            "Cell 2 dynamic+simple: few similar components but continually changing",
            "Cell 3 stable+complex: many dissimilar components that remain the same, high knowledge needs",
            "Cell 4 dynamic+complex: many dissimilar, continually changing components, high knowledge — greatest uncertainty",
            "Implication: the greater the uncertainty, the more managerial attention/monitoring and flexibility required (most attention goes to the specific environment)"
          ],
          model: "The environment consists of institutions or forces outside the organization that could potentially affect its performance, and environments differ in their degree of environmental uncertainty along two dimensions. The degree of change asks whether the environment's components change frequently (dynamic) or very little (stable). The degree of complexity looks at the number of components in the environment and the extent of knowledge the organization needs about them. Crossing the dimensions yields four cells. Cell 1 (stable and simple) has few, similar components that remain basically the same and minimal need for sophisticated knowledge — the least uncertainty. Cell 2 (dynamic and simple) has few, similar components that continually change. Cell 3 (stable and complex) has many dissimilar components that remain basically the same, with a high need for sophisticated knowledge. Cell 4 (dynamic and complex) combines many dissimilar, continually changing components with high knowledge needs — the greatest uncertainty. The practical consequence is that the more uncertain the environment, the more management must monitor it and preserve flexibility; and since the specific environment (suppliers, customers, competitors, government, investors, special interest groups) is the part directly relevant to goal achievement, that is where most managerial attention typically focuses."
        },
        {
          q: "“Culture is to the organization what personality is to the individual.” Define organizational culture, explain how strong cultures differ from weak ones, and discuss where culture comes from and how it is maintained and transmitted.",
          outline: [
            "Definition: shared values, principles, traditions, ways of doing things that influence member behavior and distinguish the organization",
            "Six dimensions: adaptability, attention to detail, outcome orientation, people orientation, team orientation, integrity",
            "Strong cultures: values intensely held and widely shared; consistent messages; stories/heroes known; strong identification; values-behavior link — greater influence on employees",
            "Weak cultures: values limited to top management; contradictory messages; little history knowledge; little identification; weak values-behavior link",
            "Origins: founders' vision; maintained by organizational practices and top managers' actions",
            "Transmission: stories, rituals, material artifacts and symbols, language; culture also shapes managerial decisions"
          ],
          model: "Organizational culture is the shared values, principles, traditions, and ways of doing things that influence the way organizational members act and that distinguish the organization from other organizations — the organization's personality. Research identifies six dimensions that capture it: adaptability, attention to detail, outcome orientation, people orientation, team orientation, and integrity. Cultures vary in strength. In strong cultures the key values are intensely held and widely shared: the culture conveys consistent messages about what is important, most employees can tell stories about company history and heroes, employees strongly identify with the culture, and there is a strong connection between shared values and behavior — which is why strong cultures influence employees more than weak ones. Weak cultures show the reverse: values held mainly by top management, contradictory messages, little knowledge of history, weak identification, and little link between espoused values and actual behavior. Culture's original source usually reflects the vision of the founders; once established, organizational practices help maintain it and the actions of top managers signal what is truly valued. It is transmitted to employees through stories, rituals, material artifacts and symbols, and language. Finally, culture is not just atmosphere: it constrains managerial discretion and affects the kinds of planning, organizing, leading, and controlling decisions managers consider acceptable."
        }
      ]
    },
    {
      id: "w4",
      week: 4,
      title: "Strategy",
      blurb: "The strategic management process, corporate strategies, and competitive advantage.",
      sections: [
        {
          h: "What Is Strategic Management?",
          blocks: [
            {
              t: "def",
              term: "Strategic management",
              d: "What managers do to develop the organization's strategies."
            },
            {
              t: "def",
              term: "Strategies",
              d: "The plans for how the organization will do what it's in business to do, how it will compete successfully, and how it will attract and satisfy its customers in order to achieve its goals."
            },
            {
              t: "def",
              term: "Business model",
              d: "How a company is going to make money."
            }
          ]
        },
        {
          h: "The Strategic Management Process (5 steps)",
          blocks: [
            {
              t: "list",
              title: "The five steps",
              items: [
                "Step 1 — Identify the organization's current mission, goals, and strategies. Mission: the purpose of an organization; mission statements help focus the strategic direction of the company",
                "Step 2 — SWOT analysis (external analysis → opportunities & threats; internal analysis → strengths & weaknesses)",
                "Step 3 — Formulate strategies (corporate, competitive, functional)",
                "Step 4 — Implement strategies: no matter how well planned, performance suffers if strategies aren't implemented properly",
                "Step 5 — Evaluate results: how effective have strategies been? what adjustments are necessary?"
              ]
            },
            {
              t: "def",
              term: "SWOT analysis",
              d: "An analysis of the organization's Strengths, Weaknesses, Opportunities, and Threats. Strengths: activities the organization does well or unique resources. Weaknesses: activities it does not do well or resources it needs but lacks. Opportunities: positive trends in the external environment. Threats: negative trends in the external environment."
            },
            {
              t: "def",
              term: "Resources",
              d: "An organization's assets used to develop, manufacture, and deliver products to its customers."
            },
            {
              t: "def",
              term: "Capabilities",
              d: "An organization's skills and abilities in doing the work activities needed in its business."
            },
            {
              t: "def",
              term: "Core competencies",
              d: "The organization's major value-creating capabilities that determine its competitive weapons."
            }
          ]
        },
        {
          h: "Corporate Strategy",
          blocks: [
            {
              t: "def",
              term: "Corporate strategy",
              d: "An organizational strategy that determines what businesses a company is in or wants to be in, and what it wants to do with those businesses. The three levels of strategy: corporate (multibusiness corporation) → competitive (strategic business units) → functional (R&D, manufacturing, marketing, HR, finance)."
            },
            {
              t: "def",
              term: "Growth strategy",
              d: "A corporate strategy used when an organization wants to expand the number of markets served or products offered, through current or new businesses. Four ways: concentration, vertical integration, horizontal integration, diversification (related or unrelated)."
            },
            {
              t: "def",
              term: "Stability strategy",
              d: "A corporate strategy in which an organization continues to do what it is currently doing."
            },
            {
              t: "def",
              term: "Renewal strategy",
              d: "A corporate strategy designed to address declining performance. Two types: retrenchment and turnaround."
            },
            {
              t: "def",
              term: "BCG matrix",
              d: "A strategy tool that guides resource allocation decisions on the basis of market share and growth rate of SBUs. Four categories: stars, cash cows, question marks, dogs."
            }
          ]
        },
        {
          h: "Competitive Strategy & Competitive Advantage",
          blocks: [
            {
              t: "def",
              term: "Competitive strategy",
              d: "An organizational strategy for how an organization will compete in its business(es)."
            },
            {
              t: "def",
              term: "Strategic business unit (SBU)",
              d: "The single independent businesses of an organization that formulate their own competitive strategies."
            },
            {
              t: "def",
              term: "Competitive advantage",
              d: "What sets an organization apart — its distinctive edge. It can stem from quality, low cost, technology, or other factors."
            },
            {
              t: "def",
              term: "Economic moat",
              d: "Sustaining competitive advantage by protecting long-term profits and market share using various means. The term was popularized by Warren Buffett as a way to visualize keeping a competitive advantage."
            },
            {
              t: "list",
              title: "Choosing a competitive advantage (competitive strategies)",
              items: [
                "Cost leadership strategy — competing on the lowest costs",
                "Differentiation strategy — competing by being unique",
                "Focus strategy — cost or differentiation advantage in a narrow segment",
                "“Stuck in the middle” — failing to develop either a low-cost or a differentiation advantage"
              ]
            },
            {
              t: "p",
              text: "First movers gain advantages but also face disadvantages (Exhibit: first-mover advantages and disadvantages) — being first to market can build reputation and learning effects, but carries cost and uncertainty risks while imitators learn from the pioneer's mistakes."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Which statement best defines a business model?",
          o: [
            "The purpose of an organization",
            "How a company is going to make money",
            "An organization's Strengths, Weaknesses, Opportunities, and Threats",
            "The plans for how a single unit will compete in its industry"
          ],
          a: 1,
          tier: "easy",
          h: [
            "That is the definition of a mission, not a business model. Think about which term focuses on revenue and profit.",
            "Right idea: a business model is the logic of how the firm earns money.",
            "That describes a SWOT analysis, a diagnostic tool, not the firm's money-making logic. Reconsider which term is about earning revenue.",
            "That describes competitive strategy at the unit level. A business model is broader and centered on revenue. Look again."
          ],
          e: "Business model = how a company is going to make money. Mission = the purpose of an organization."
        },
        {
          q: "In a SWOT analysis, weaknesses are best described as…",
          o: [
            "negative trends in the external environment",
            "positive trends in the external environment",
            "activities the organization does not do well or resources it lacks",
            "the major value-creating capabilities that determine competitive weapons"
          ],
          a: 2,
          tier: "easy",
          h: [
            "Negative external trends are threats, not weaknesses. Remember weaknesses are INTERNAL. Reconsider.",
            "Positive external trends are opportunities. Weaknesses are internal. Look for the internal shortfall option.",
            "Correct: weaknesses are internal shortfalls in activities or resources.",
            "Those are core competencies, which are a strength, not a weakness. Reconsider which option names an internal shortfall."
          ],
          e: "Weaknesses are INTERNAL: activities the organization does not do well or resources it needs but lacks. Threats are negative EXTERNAL trends."
        },
        {
          q: "The two axes of the BCG matrix are…",
          o: [
            "market share and market growth rate",
            "centralization and formalization",
            "cost and differentiation",
            "strengths and weaknesses"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct: the BCG matrix plots SBUs on market share and market growth rate.",
            "Those are structural design variables, unrelated to the BCG portfolio tool. Reconsider what the matrix measures about each SBU.",
            "Cost and differentiation are competitive strategy choices, not the BCG axes. Look again at what the matrix plots.",
            "Strengths and weaknesses belong to SWOT, not the BCG matrix. Reconsider the two market-based axes."
          ],
          e: "The BCG matrix classifies SBUs into stars, cash cows, question marks, and dogs using market share and market growth rate."
        },
        {
          q: "A cost leadership strategy means competing by…",
          o: [
            "offering a product nobody else offers",
            "achieving the lowest costs in the industry",
            "serving only a narrow segment of the market",
            "controlling one's own suppliers"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Competing through uniqueness is differentiation, not cost leadership. Reconsider which strategy is about price/cost.",
            "Correct: cost leadership competes on the lowest costs.",
            "Targeting only a narrow segment is the focus strategy. Cost leadership is about lowest costs, typically broad. Look again.",
            "Controlling suppliers is vertical integration, a growth strategy, not a competitive one. Reconsider the cost-based answer."
          ],
          e: "Cost leadership = competing on the lowest costs. Differentiation = being unique; focus = a narrow segment."
        },
        {
          q: "A stability strategy is a corporate strategy in which an organization…",
          o: [
            "expands the number of markets served or products offered",
            "continues to do what it is currently doing",
            "addresses declining performance through retrenchment or turnaround",
            "competes by being unique in its industry"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Expanding markets or products is a growth strategy, not stability. Reconsider which option means staying the course.",
            "Correct: stability means continuing to do what the organization is currently doing.",
            "Addressing declining performance is a renewal strategy. Stability is about staying the course. Look again.",
            "Competing by being unique is differentiation, a competitive strategy, not a corporate one. Reconsider."
          ],
          e: "Stability strategy = the organization continues to do what it is currently doing. Growth expands; renewal addresses decline."
        },
        {
          q: "Which term refers to what sets an organization apart — its distinctive edge?",
          o: [
            "Competitive advantage",
            "Business model",
            "Mission statement",
            "Vertical integration"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct: competitive advantage is the firm's distinctive edge.",
            "A business model is how the firm makes money, not what makes it distinctive. Reconsider which term names the firm's edge.",
            "A mission statement gives the firm's purpose, not its distinctive edge. Look again.",
            "Vertical integration is a growth strategy about controlling inputs/outputs, not a distinctive edge. Reconsider."
          ],
          e: "Competitive advantage is what sets an organization apart — its distinctive edge. It can stem from quality, low cost, technology, or other factors."
        },
        {
          q: "A Beirut bakery buys the flour mill that supplies it so it no longer depends on importers. Which growth strategy is this?",
          o: [
            "Horizontal integration",
            "Vertical integration",
            "Unrelated diversification",
            "Concentration"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Horizontal integration means combining with a competitor (another bakery), not acquiring a supplier. Reconsider who the mill is.",
            "Correct: acquiring your own supplier is backward vertical integration.",
            "Unrelated diversification means entering an unrelated industry; a flour mill is part of the bakery's supply chain. Look again.",
            "Concentration means growing the existing core business, not buying a supplier. Reconsider the supply-chain relationship."
          ],
          e: "Owning your supplier (the mill) is backward vertical integration — controlling inputs."
        },
        {
          q: "A generator-services firm in Tripoli has high market share in a fast-growing market for backup power amid EDL outages. In the BCG matrix this SBU is a…",
          o: [
            "cash cow",
            "dog",
            "star",
            "question mark"
          ],
          a: 2,
          tier: "medium",
          h: [
            "A cash cow has high share but LOW growth. Here the market is growing fast. Reconsider the high-growth cell.",
            "A dog has low share and low growth — the opposite of this unit. Look again at high share plus high growth.",
            "Correct: high share in a high-growth market is a star — invest to sustain its position.",
            "A question mark has LOW share in a high-growth market. This unit already has high share. Reconsider."
          ],
          e: "High market share + high market growth = STAR. Invest to sustain its position."
        },
        {
          q: "A Beirut restaurant survives the crisis by running a large generator and buying fuel in bulk, letting it serve hot meals at the lowest prices in the neighborhood while staying profitable. Which competitive strategy is this?",
          o: [
            "Differentiation strategy",
            "Cost leadership strategy",
            "Focus strategy",
            "Stability strategy"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Differentiation competes on uniqueness; here the edge is the lowest prices, not a unique experience. Reconsider the cost-based option.",
            "Correct: lowest prices while staying profitable is cost leadership.",
            "Focus means serving only a narrow segment; nothing says this restaurant targets a niche. Look again at the broad lowest-price edge.",
            "Stability is a corporate strategy about staying the course, not how the firm competes. Reconsider the competitive strategies."
          ],
          e: "Lowest prices in the market while remaining profitable is the cost leadership strategy."
        },
        {
          q: "A Lebanese coffee chain whose sales are declining decides to close unprofitable branches and cut staff to stop the losses. This corporate strategy is best described as…",
          o: [
            "a growth strategy",
            "a renewal strategy (retrenchment)",
            "a stability strategy",
            "horizontal integration"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Closing branches and cutting staff is shrinking, not growing. Reconsider the strategy that addresses declining performance.",
            "Correct: cutting back to address declining performance is renewal via retrenchment.",
            "Stability means continuing as before; closing branches is an active response to decline. Look again.",
            "Horizontal integration means combining with a competitor, not cutting costs. Reconsider the decline-focused option."
          ],
          e: "Renewal strategies address declining performance; retrenchment is the cost-cutting/shrinking type. Turnaround is the other."
        },
        {
          q: "A boutique that imports only rare designer pieces and charges in fresh dollars markets itself solely to a small circle of wealthy clients who still hold liquid foreign cash. Which competitive strategy best captures this?",
          o: [
            "Cost leadership across the whole market",
            "Focus strategy (differentiation in a narrow segment)",
            "Stuck in the middle",
            "Horizontal integration"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Cost leadership competes on lowest costs for a broad market; this firm targets a wealthy niche with premium goods. Reconsider.",
            "Correct: a differentiation edge aimed at a narrow segment is a focus strategy.",
            "Stuck in the middle means having NO clear advantage; this boutique clearly has a unique, niche edge. Look again.",
            "Horizontal integration is a growth strategy about merging with rivals, not how this firm competes. Reconsider."
          ],
          e: "Serving a narrow segment (wealthy fresh-dollar clients) with a differentiation advantage is the focus strategy."
        },
        {
          q: "A manager wants to test whether the firm's strength is durable by asking: 'Can rivals easily copy it, or is it protected?' Which lecture concept is the manager invoking?",
          o: [
            "Economic moat",
            "Business model",
            "Question mark",
            "Vertical integration"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct: the economic moat is about protecting and sustaining the advantage against imitation.",
            "A business model is how the firm makes money, not how it protects an advantage from copying. Reconsider.",
            "A question mark is a BCG cell (low share, high growth), unrelated to protecting an advantage. Look again.",
            "Vertical integration is one possible move, but the broad concept of protecting an advantage from imitation has a specific name. Reconsider."
          ],
          e: "The economic moat (Buffett's metaphor) is about sustaining competitive advantage by protecting long-term profits and market share against imitation."
        },
        {
          q: "Two Beirut gyms compete. Gym A buys its own generator and amperage capacity, automates membership, and undercuts everyone on price. Gym B tries to offer the same automation and low price AS WELL AS imported equipment and celebrity trainers to look premium — and is losing money. The BEST diagnosis of Gym B is that it…",
          o: [
            "has chosen a sound focus strategy that simply needs time",
            "is stuck in the middle, having developed neither a clear cost nor a clear differentiation advantage",
            "is a cash cow that should be harvested",
            "is pursuing successful differentiation and will soon profit"
          ],
          a: 1,
          tier: "hard",
          h: [
            "A focus strategy means concentrating on ONE narrow segment with ONE advantage; Gym B is chasing both price and premium broadly. Reconsider.",
            "Correct: chasing both lowest price and premium image without mastering either is the classic stuck-in-the-middle trap.",
            "Cash cow is a BCG portfolio label about share and growth, not a diagnosis of a confused competitive strategy. Look again.",
            "If Gym B were truly differentiating it would not also be trying to match the cheapest price; mixing both undercuts the premium edge. Reconsider why it loses on both fronts."
          ],
          e: "Trying to be cheapest AND premium at once means Gym B matches neither A's costs nor a clear unique edge — the textbook 'stuck in the middle' problem, which is why it loses on both fronts."
        },
        {
          q: "During hyperinflation, a furniture maker reprices daily in USD because the lira collapses. It must decide whether to compete on lowest cost or on uniqueness. Which reasoning BEST applies the lecture's logic to choosing ONE advantage?",
          o: [
            "It should pursue both equally so it is protected whichever way the crisis turns",
            "It should pick a single advantage to build a distinctive edge, because trying to do both risks ending up stuck in the middle with neither",
            "Competitive strategy does not matter during a currency crisis; only the business model does",
            "It should switch to a stability strategy and stop choosing a competitive strategy at all"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Pursuing both equally is exactly what produces 'stuck in the middle' — neither advantage is fully developed. Reconsider the lecture's warning.",
            "Correct: commit to one advantage to build a distinctive edge and avoid being stuck in the middle.",
            "The business model matters, but the lecture is clear that an SBU must still choose how it competes; strategy is not irrelevant. Look again.",
            "Stability is a corporate strategy about staying the course; it does not replace the need to choose how to compete. Reconsider."
          ],
          e: "The lecture warns against doing both: a firm should develop EITHER a low-cost OR a differentiation advantage, or it risks being stuck in the middle with no distinctive edge."
        },
        {
          q: "A solar-installation startup is the FIRST to market in its town as households flee EDL outages. Evaluating its first-mover position, which statement is MOST consistent with the lecture?",
          o: [
            "Being first guarantees a permanent competitive advantage that rivals cannot erode",
            "Being first brings advantages such as reputation and learning, but also disadvantages, since later imitators can learn from the pioneer's mistakes",
            "First movers have only disadvantages, so it should never have entered first",
            "First-mover status is identical to having an economic moat"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The lecture explicitly says first movers also face disadvantages; nothing about being first is permanent. Reconsider the balanced view.",
            "Correct: the lecture presents first-mover advantages AND disadvantages together.",
            "The lecture lists real first-mover advantages (reputation, learning effects) too, so 'only disadvantages' is too one-sided. Look again.",
            "Being first is not the same as a moat; the moat is about SUSTAINING the advantage, which the startup still has to build. Reconsider the distinction."
          ],
          e: "First movers gain advantages (reputation, learning effects) but face disadvantages — cost and uncertainty risks, and imitators learning from the pioneer's mistakes. Being first is not a permanent or self-sustaining edge."
        },
        {
          q: "A holding company reviews its portfolio: a frozen-deposit-era money-transfer unit (high share, declining market), a generator-rental unit (high share, fast-growing market), and a new fresh-dollar e-commerce unit (low share, fast-growing market). Which allocation plan BEST follows BCG logic?",
          o: [
            "Invest most in the money-transfer unit because it has high share",
            "Harvest the money-transfer cash cow to fund the generator star, and decide whether to invest in or drop the e-commerce question mark",
            "Treat all three as dogs and divest them",
            "Invest equally in all three since each has some strength"
          ],
          a: 1,
          tier: "hard",
          h: [
            "High share in a DECLINING market makes it a cash cow to harvest, not the prime place to pour new investment. Reconsider the role of its cash.",
            "Correct: harvest the cash cow, fund the star, and decide on the question mark.",
            "Only a low-share, low-growth unit is a dog; the generator unit is a star and the transfer unit a cash cow, so this misreads the portfolio. Look again.",
            "BCG logic deliberately allocates UNEQUALLY by cell; equal investment ignores the matrix's whole purpose. Reconsider."
          ],
          e: "Money transfer = cash cow (high share, low/declining growth) to harvest; generator rental = star (high share, high growth) to fund; e-commerce = question mark (low share, high growth) to invest in or drop. BCG allocates by cell, not equally."
        },
        {
          q: "A differentiator charging fresh USD for guaranteed 24/7 power claims, 'Our advantage is permanent.' Using the lecture's ideas on sustaining advantage, the BEST critique is that…",
          o: [
            "the firm has no competitive advantage at all",
            "developing an advantage is not enough; it must be sustained behind an economic moat, because rivals and imitators can erode an unprotected edge",
            "permanence is assured because the firm was a first mover",
            "the claim is fine, since competitive advantages by definition cannot be copied"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The firm clearly HAS an advantage (guaranteed reliability); the flaw is assuming it lasts forever, not that it is absent. Reconsider.",
            "Correct: an advantage must be sustained behind a moat, or imitators erode it.",
            "First-mover status itself does not guarantee permanence — the lecture stresses first movers also face disadvantages. Look again.",
            "Competitive advantages CAN be imitated; that is exactly why the moat concept exists. Reconsider the assumption of permanence."
          ],
          e: "Developing a competitive advantage is only half the task; firms must SUSTAIN it behind an economic moat (Buffett), because rivals and imitators can erode an unprotected edge. No advantage is automatically permanent."
        },
        {
          q: "A solar firm has a unique low-cost panel-import channel (a real strength) and faces fast-growing off-grid demand (an opportunity), but also a looming import-licensing crackdown (a threat). A manager says, \"Strengths and opportunities are the same thing, so we really have just one advantage.\" Which BEST corrects this using SWOT?",
          o: [
            "Correct — in SWOT, internal strengths and external opportunities are merged into a single factor",
            "Wrong — strengths/weaknesses are INTERNAL to the firm while opportunities/threats are EXTERNAL; strategy works by matching an internal strength to an external opportunity, not conflating them",
            "Wrong — opportunities are internal and strengths are external",
            "Correct — once a firm has a strength, the opportunity is irrelevant"
          ],
          a: 1,
          tier: "hard",
          h: [
            "SWOT keeps internal and external factors separate on purpose; merging them loses the whole point of the analysis.",
            "Right idea — that's the one.",
            "You have it backwards — strengths are internal, opportunities are external. Re-check the SWOT axes.",
            "The opportunity (growing off-grid demand) is exactly what makes the strength valuable — it is not irrelevant."
          ],
          e: "In SWOT analysis, strengths and weaknesses are INTERNAL (the firm's own resources and capabilities) while opportunities and threats are EXTERNAL (in the environment). Strategy works by matching internal strengths to external opportunities while defending against threats, so the two cannot be collapsed into a single factor."
        }
      ],
      cases: [
        {
          title: "Generators on Hamra Street: Cost Leader or Differentiator?",
          scenario: "On one Hamra block, two neighborhood eateries fight to survive the crisis. Mounir's Snack bought a large private generator (its own 'ishtirak'), buys diesel in bulk during fuel queues, automated its ordering, and strips the menu to fast staples. With only a few hours of EDL state power a day, this lets Mounir's serve hot food and post the lowest prices on the block, priced in lira and repriced only when the exchange rate jumps, while still turning a small profit. Across the street, Cedrus Table guarantees uninterrupted air-conditioning and lighting on its own high-amperage generator, imports specialty ingredients, and charges in fresh dollars for a calm, reliable fine-dining experience aimed at diaspora visitors and remaining wealthy clients. A third newcomer, Wasat Diner, tried to match Mounir's low lira prices AND copy Cedrus Table's imported-ingredient luxury image at once; it is bleeding money and cannot afford enough fuel for either promise.",
          qs: [
            {
              q: "Identify the competitive strategy of Mounir's Snack and of Cedrus Table, and state the source of each one's competitive advantage using the lecture's terms.",
              a: "Mounir's Snack pursues a COST LEADERSHIP strategy: its competitive advantage (distinctive edge) stems from LOW COST — owning its generator/ishtirak, bulk diesel buying, automation, and a stripped menu let it post the lowest prices on the block while still profitable. Cedrus Table pursues a DIFFERENTIATION strategy: its advantage stems from UNIQUENESS and quality — guaranteed reliable power, imported ingredients, and a fine-dining experience for which it can charge premium fresh dollars. Competitive advantage can stem from low cost (Mounir's) or from quality/uniqueness (Cedrus Table)."
            },
            {
              q: "Diagnose Wasat Diner with the lecture's exact term and explain why its approach is dangerous in this crisis context.",
              a: "Wasat Diner is STUCK IN THE MIDDLE — it failed to develop either a low-cost or a differentiation advantage. By trying to undercut Mounir's lira prices AND match Cedrus Table's imported-luxury image simultaneously, it cannot achieve Mounir's cost structure (it spreads scarce, expensive fuel and capital too thin) nor Cedrus Table's genuine premium edge. With capital controls and fuel scarcity making every dollar of diesel costly, having no distinctive edge means it loses on both fronts and bleeds money — exactly the danger the lecture attaches to being stuck in the middle."
            },
            {
              q: "Cedrus Table's owner says its fresh-dollar reliability advantage is 'safe forever.' Evaluate this using the lecture's ideas on sustaining competitive advantage and first movers.",
              a: "The claim is overconfident. The lecture stresses that developing an advantage is not enough — a firm must SUSTAIN it by building an ECONOMIC MOAT (Buffett) that protects long-term profits and market share. Cedrus Table's reliability edge can be imitated: any rival that invests in a high-amperage generator and fuel supply can also promise uninterrupted power, especially as other operators learn from Cedrus Table as a first mover. The first-mover exhibit notes that being first brings advantages (reputation, learning) but also disadvantages, since imitators copy what works. To keep its edge, Cedrus Table must keep reinforcing its distinctive core competencies (curated imports, service, diaspora reputation), not assume permanence."
            }
          ]
        },
        {
          title: "Beit Mishmosh: One Press, Four Choices, Frozen Cash",
          scenario: "Beit Mishmosh runs a profitable apricot-jam factory in the Bekaa. Most of its old savings are trapped as 'lollars' in the bank under capital controls and worth far less than fresh dollars, so any expansion must be financed carefully. The family board debates four proposals: (1) buy the apricot orchards that supply its fruit so it no longer depends on volatile supplier prices; (2) acquire a rival jam factory in Zahle; (3) launch a new line of apricot-based cosmetics sold for fresh dollars to export buyers; (4) simply keep operating exactly as today because the local jam market is steady. Separately, the finance director reviews the firm's three existing units: the jam line (high share, low-growth domestic market), a fast-growing fresh-dollar export-honey unit (high share), and a struggling pickles unit (low share, stagnant market).",
          qs: [
            {
              q: "Classify each of the four proposals using the corporate strategies from the lecture.",
              a: "(1) Buying the orchards = GROWTH through VERTICAL INTEGRATION (controlling its raw-material supply/inputs). (2) Acquiring a rival jam factory = GROWTH through HORIZONTAL INTEGRATION (combining with a competitor in the same industry). (3) Apricot-based cosmetics for export = GROWTH through DIVERSIFICATION — related diversification, since it builds on the firm's existing apricot core. (4) Keep operating exactly as today = a STABILITY strategy (continuing to do what the organization is currently doing)."
            },
            {
              q: "Apply the BCG matrix to the three existing units and state the resource-allocation implication of each, noting how the lollars-versus-fresh-dollars problem shapes the choices.",
              a: "Jam line: high share, low-growth market = CASH COW — harvest its steady cash to fund others. Export-honey unit: high share, high growth = STAR — invest to sustain its position; crucially it earns FRESH dollars, the scarce hard currency the firm actually needs. Pickles unit: low share, stagnant market = DOG — candidate for divestment or minimal investment. Because most savings are trapped as low-value lollars under capital controls, the board should especially protect and feed the fresh-dollar star and avoid sinking scarce fresh capital into the dog. The BCG matrix guides this allocation on the basis of market share and growth rate of SBUs."
            },
            {
              q: "If the apricot-cosmetics line succeeds and earns fresh dollars abroad, what does the lecture say Beit Mishmosh must do to make that advantage durable, and on what does that advantage ultimately rest?",
              a: "Beit Mishmosh must SUSTAIN the advantage by building an ECONOMIC MOAT — protecting its long-term profits and market share so imitators cannot quickly erode the edge (Buffett's metaphor). Simply developing a competitive advantage is not enough; export rivals could copy an apricot-cosmetics line. The durable advantage ultimately rests on the firm's CORE COMPETENCIES — its major value-creating capabilities in sourcing and processing apricots — deployed through a clear competitive strategy (likely differentiation, since the cosmetics command fresh-dollar export prices)."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Explain the steps of the strategic management process. For each step, state what managers do and why skipping that step undermines the process.",
          outline: [
            "Define strategic management and strategies",
            "Step 1: identify current mission (purpose of the organization), goals, strategies — mission focuses strategic direction; skipping = no baseline or direction",
            "Step 2: SWOT — external analysis (opportunities, threats) + internal analysis (strengths, weaknesses; resources, capabilities, core competencies); skipping = strategies detached from reality",
            "Step 3: formulate strategies at three levels — corporate, competitive, functional; skipping = no coherent plan",
            "Step 4: implement — performance suffers if strategies aren't implemented properly even when well planned",
            "Step 5: evaluate results — how effective? what adjustments? skipping = no learning or correction",
            "Note the process is sequential and feeds back into Step 1"
          ],
          model: "Strategic management is what managers do to develop the organization's strategies — the plans for how the organization will do what it is in business to do, compete successfully, and attract and satisfy its customers to achieve its goals. The process has five steps. First, managers identify the organization's current mission, goals, and strategies; the mission states the organization's purpose and focuses its strategic direction — without it, there is no baseline against which to plan. Second, they conduct a SWOT analysis: external analysis reveals opportunities (positive external trends) and threats (negative external trends), while internal analysis reveals strengths (what the organization does well, unique resources) and weaknesses (what it does poorly or lacks), grounded in its resources, capabilities, and core competencies. Skipping SWOT yields strategies disconnected from the firm's situation. Third, they formulate strategies at three levels — corporate (what businesses to be in), competitive (how to compete in each business), and functional (how departments support the competitive strategy). Fourth, they implement: the slides stress that no matter how effectively strategies were planned, performance suffers if they are not implemented properly — formulation without execution is wasted effort. Fifth, they evaluate results, asking how effective the strategies were and what adjustments are necessary, which loops back into the next round of planning. The power of the process lies in its completeness: analysis without formulation is aimless, formulation without implementation is empty, and implementation without evaluation never improves."
        },
        {
          q: "Describe the three types of corporate strategy (growth, stability, renewal), including the four ways to grow. Then explain how the BCG matrix helps managers manage a portfolio of businesses.",
          outline: [
            "Corporate strategy defined: what businesses we're in / want to be in and what to do with them",
            "Growth: expand markets served or products offered — concentration; vertical integration; horizontal integration; diversification (related/unrelated) — with brief explanations/examples",
            "Stability: continue doing what the organization is currently doing",
            "Renewal: address declining performance — retrenchment vs. turnaround",
            "BCG matrix: tool guiding resource allocation based on SBU market share and growth rate",
            "Four cells — stars, cash cows, question marks, dogs — and the allocation logic (fund stars/questions with cash-cow cash; divest dogs)"
          ],
          model: "Corporate strategy determines what businesses a company is in or wants to be in and what it wants to do with those businesses. Growth strategies expand the number of markets served or products offered, through current or new businesses, in four ways: concentration (growing the core business), vertical integration (controlling inputs or distribution — one's suppliers or buyers), horizontal integration (combining with competitors), and diversification, which can be related (new businesses connected to the core) or unrelated. A stability strategy means the organization continues to do what it is currently doing — appropriate when conditions or resources argue against expansion. Renewal strategies address declining performance and come in two forms: retrenchment and turnaround. With multiple businesses, managers face an allocation problem: which units deserve investment? The BCG matrix answers it by positioning each strategic business unit on two axes — market share and market growth rate — producing four categories: stars (high share, high growth) to be invested in; cash cows (high share, low growth) to be harvested for the cash they generate; question marks (low share, high growth) requiring a decision to invest or abandon; and dogs (low share, low growth), typically candidates for divestment. The matrix thus turns the corporate-strategy question into a disciplined, portfolio-level resource-allocation decision."
        },
        {
          q: "Define competitive advantage and discuss how an organization can choose and sustain one. Include the competitive strategies, the danger of being “stuck in the middle,” and the concept of the economic moat.",
          outline: [
            "Competitive advantage: what sets an organization apart — its distinctive edge; can stem from quality, low cost, technology, other factors",
            "Competitive strategy operates at the SBU level",
            "Choosing: cost leadership (lowest costs), differentiation (uniqueness), focus (narrow segment with either advantage)",
            "Stuck in the middle: developing neither advantage — no distinctive edge",
            "Sustaining: not enough to develop an advantage — must sustain it; economic moat (Buffett): protecting long-term profits and market share",
            "First movers: advantages and disadvantages of being first",
            "Link back to core competencies as the root of advantage"
          ],
          model: "Competitive advantage is what sets an organization apart — its distinctive edge — and it can stem from quality, low cost, technology, or other factors. Each strategic business unit chooses how to compete through a competitive strategy. The lecture presents three routes: a cost leadership strategy, competing on the lowest costs in the industry; a differentiation strategy, competing by offering something unique that customers value; and a focus strategy, applying a cost or differentiation advantage within a narrow segment rather than the broad market. The danger lies in choosing none: a firm that fails to develop either a low-cost or a differentiation advantage is “stuck in the middle” — it has no distinctive edge, cannot beat cost leaders on price or differentiators on uniqueness, and typically underperforms both. Developing an advantage, however, is only half the task; businesses must also SUSTAIN it. This is the idea of the economic moat, popularized by Warren Buffett: protecting long-term profits and market share using various means so the advantage endures against imitation and rivalry. The first-mover discussion reinforces the point — being first can create advantages such as reputation and learning, but it also carries disadvantages, since followers can learn from the pioneer's costly mistakes. Durable success therefore rests on core competencies — the organization's major value-creating capabilities — deployed through a clear competitive strategy and defended like a moat around a castle."
        }
      ]
    },
    {
      id: "w5",
      week: 5,
      title: "Making Decisions",
      blurb: "From the 8-step process and bounded rationality to groupthink and how to manage it.",
      sections: [
        {
          h: "The Decision-Making Process",
          blocks: [
            {
              t: "def",
              term: "Decision",
              d: "A conclusion or resolution made after considering alternatives. Managers at all levels and in every organizational unit make decisions."
            },
            {
              t: "list",
              title: "The eight steps in the decision-making process",
              items: [
                "1. Identifying a problem",
                "2. Identifying decision criteria",
                "3. Allocating weights to the criteria",
                "4. Developing alternatives",
                "5. Analyzing alternatives",
                "6. Selecting an alternative",
                "7. Implementing the alternative",
                "8. Evaluating decision effectiveness"
              ]
            }
          ]
        },
        {
          h: "How Managers Actually Decide",
          blocks: [
            {
              t: "def",
              term: "Rational decision making",
              d: "Choices that are logical and consistent and maximize value. Assumptions: the decision maker is logical and objective; the problem is clear and unambiguous; there is a clear, specific goal with awareness of all alternatives and consequences; the alternative that maximizes goal achievement is selected; decisions are made in the best interest of the organization."
            },
            {
              t: "def",
              term: "Bounded rationality",
              d: "Decision making that's rational, but limited (bounded) by an individual's ability to process information."
            },
            {
              t: "def",
              term: "Satisfice",
              d: "Accepting solutions that are “good enough” (rather than maximizing)."
            },
            {
              t: "def",
              term: "Intuitive decision making",
              d: "Making decisions on the basis of experience, feelings, and accumulated judgment. Exhibit 3-5 identifies five aspects of intuition: experience-based decisions, affect-initiated decisions (feelings/emotions), cognitive-based decisions (skills, knowledge, training), values or ethics-based decisions, and subconscious mental processing."
            },
            {
              t: "def",
              term: "Evidence-based management (EBMgt)",
              d: "The systematic use of the best available evidence to improve management practice. Four essentials: (1) the decision maker's expertise and judgment; (2) external evidence evaluated by the decision maker; (3) opinions, preferences, and values of those who have a stake in the decision; (4) relevant organizational (internal) factors such as context, circumstances, and organizational members."
            }
          ]
        },
        {
          h: "Types of Problems and Decisions",
          blocks: [
            {
              t: "def",
              term: "Structured problems → programmed decisions",
              d: "Structured problems are straightforward, familiar, and easily defined. Programmed decisions are repetitive decisions that can be handled by a routine approach. Three types: PROCEDURE (a series of sequential steps to respond to a well-structured problem), RULE (an explicit statement telling managers what can or cannot be done), POLICY (a guideline for making decisions)."
            },
            {
              t: "def",
              term: "Unstructured problems → nonprogrammed decisions",
              d: "Unstructured problems are new or unusual, with ambiguous or incomplete information. Nonprogrammed decisions are unique and nonrecurring and involve custom-made solutions."
            },
            {
              t: "table",
              title: "Programmed vs. nonprogrammed decisions",
              cols: [
                "Characteristic",
                "Programmed",
                "Nonprogrammed"
              ],
              rows: [
                [
                  "Type of problem",
                  "Structured",
                  "Unstructured"
                ],
                [
                  "Managerial level",
                  "Lower levels",
                  "Upper levels"
                ],
                [
                  "Frequency",
                  "Repetitive, routine",
                  "New, unusual"
                ],
                [
                  "Information",
                  "Readily available",
                  "Ambiguous or incomplete"
                ],
                [
                  "Goals",
                  "Clear, specific",
                  "Vague"
                ],
                [
                  "Time frame for solution",
                  "Short",
                  "Relatively long"
                ],
                [
                  "Solution relies on…",
                  "Procedures, rules, policies",
                  "Judgment and creativity"
                ]
              ]
            }
          ]
        },
        {
          h: "Heuristics and Biases",
          blocks: [
            {
              t: "def",
              term: "Heuristics",
              d: "“Rules of thumb” that can help make sense of complex, uncertain, or ambiguous information — but they can also lead to errors and biases in processing and evaluating information."
            },
            {
              t: "list",
              title: "Common decision-making biases (Exhibit 3-8)",
              items: [
                "Overconfidence",
                "Immediate gratification",
                "Anchoring effect",
                "Selective perception",
                "Confirmation",
                "Framing",
                "Availability",
                "Representation",
                "Randomness",
                "Sunk costs",
                "Self-serving",
                "Hindsight"
              ]
            }
          ]
        },
        {
          h: "Group Decision-Making",
          blocks: [
            {
              t: "list",
              title: "Advantages of group decision-making",
              items: [
                "More complete information and knowledge",
                "Greater number of perspectives and different experiences",
                "Intellectual stimulation through group discussion → decision is more fully informed and of higher quality",
                "People understand the rationale, so higher acceptance (buy-in) and higher commitment → increased chance of successful implementation"
              ]
            },
            {
              t: "list",
              title: "Potential downsides of group decision-making",
              items: [
                "Domination: only loud people are heard, and they do not necessarily have the most valid opinions",
                "Time consuming: coordinating diverse perspectives, reaching consensus, resolving conflicts",
                "Conformity pressures: pressure to conform to the group's majority view",
                "Ambiguous responsibility: accountability diffused among members — unclear who is ultimately responsible",
                "Satisficing: rather than maximizing or optimizing"
              ]
            },
            {
              t: "p",
              text: "Group composition matters: the team may be loaded for political reasons; some members may be busy, unavailable, or drop out and be replaced by less optimal ones; some may have a bad attitude or vested interest. Individuals may be good, but the group weak. Beware of a senior executive influencing a decision by appointing “their person” to the team or signaling their preference by starting to “implement” the decision."
            }
          ]
        },
        {
          h: "Groupthink (Janis, 1982)",
          blocks: [
            {
              t: "def",
              term: "Groupthink",
              d: "“A mode of thinking that people engage in when they are deeply involved in a cohesive group, when the members' strivings for unanimity override their motivation to realistically appraise alternative courses of action.” Members of a cohesive group maintain esprit de corps by unconsciously developing shared illusions and norms that interfere with critical thinking and reality testing."
            },
            {
              t: "list",
              title: "Antecedents of groupthink",
              items: [
                "High cohesiveness",
                "Structural factors: insulated group, partisan leadership, no procedural protocols, ideological homogeneity",
                "Contextual factors: external pressure, members under stress, lack of optimism, low self-esteem"
              ]
            },
            {
              t: "list",
              title: "Decision-making characteristics of groupthink",
              items: [
                "Limited consideration of options",
                "Limited consideration of goals",
                "Limited cost-benefit appraisal",
                "Limited use of expert knowledge",
                "Undue attention to facts that support the ingroup choice",
                "Limited reappraisal of options",
                "Lack of contingency plans"
              ]
            },
            {
              t: "table",
              title: "Symptoms of groupthink (3 families, 8 symptoms)",
              cols: [
                "Family",
                "Symptoms"
              ],
              rows: [
                [
                  "Overestimation of group worth",
                  "Illusion of invulnerability (ignore danger, overly optimistic, extraordinary risks); Sense of moral superiority (decisions seen as morally correct, ethics ignored; seeing the other as the bad guy)"
                ],
                [
                  "Closed-mindedness",
                  "Collective rationalization (explain away warnings contrary to group thinking); Excessive stereotyping (negative stereotypes of rivals outside the group, out-of-date perceptions)"
                ],
                [
                  "Pressures towards uniformity",
                  "Self-censorship (withhold dissent, keep silent about misgivings); Pressure to conform (applied to anyone expressing doubt); Illusion of unanimity (falsely perceive everyone agrees); Mind guards (self-appointed protectors from adverse information)"
                ]
              ]
            },
            {
              t: "ex",
              title: "Asch experiment (1951–56) — line judgment task",
              text: "About 75% of participants conformed at least once, even when they knew the group's answer was wrong; on average participants conformed about 32% of the time; tested alone, they answered correctly over 99% of the time. Herd mentality: we are social beings who care deeply what others think — we want to agree with the group even when strangers are involved, we are anonymous, and disagreeing costs nothing. Individual survival once depended on the group working together."
            }
          ]
        },
        {
          h: "Managing Group Decision-Making",
          blocks: [
            {
              t: "list",
              title: "Suggestions for managing the group DM process",
              items: [
                "Where possible avoid sharp divisions of status",
                "Draw out quiet members (in or outside of meetings)",
                "Dissuade the leader from doing most of the talking",
                "Have members write down ideas and publicize them anonymously before speaking — avoids anchoring and ego threatening",
                "Have someone with credibility play devil's advocate",
                "Create parallel groups to work on a problem, or have different groups analyze different options in depth (e.g., turnaround strategy vs. divestment)",
                "Refresh “stale” groups where routine and predictability reign",
                "Introduce outsiders to the group"
              ]
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "How many steps are there in the decision-making process described in the lecture?",
          o: [
            "Eight",
            "Five",
            "Three",
            "Twelve"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — eight steps, from identifying a problem to evaluating decision effectiveness.",
            "That is the number of aspects of intuition (Exhibit 3-5), not the steps in the decision-making process. Recount the sequence from identifying a problem to evaluating effectiveness.",
            "Three is too few — that only covers developing, analyzing, and selecting alternatives. The process starts earlier (identifying the problem and criteria) and continues after selection.",
            "Twelve is the number of common decision-making biases in Exhibit 3-8, not the steps of the process. Count the steps from problem identification to evaluation."
          ],
          e: "The decision-making process has eight steps: identify a problem, identify decision criteria, allocate weights to the criteria, develop alternatives, analyze alternatives, select an alternative, implement the alternative, and evaluate decision effectiveness."
        },
        {
          q: "Accepting solutions that are 'good enough' rather than maximizing is called…",
          o: [
            "maximizing",
            "satisficing",
            "anchoring",
            "framing"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Maximizing is the opposite — it means choosing the single best, value-maximizing alternative. The term you want describes settling for a 'good enough' option.",
            "Correct — satisficing is the hallmark of bounded rationality.",
            "Anchoring is a bias about fixating on initial information, not about settling for a 'good enough' solution. Look for the term tied to bounded rationality.",
            "Framing is a bias about how a problem is presented, not about accepting a 'good enough' answer. The term you want pairs with bounded rationality."
          ],
          e: "Satisficing means accepting solutions that are 'good enough' rather than maximizing — it follows from bounded rationality, where information-processing limits prevent a full search for the optimal option."
        },
        {
          q: "Bounded rationality refers to decision making that is…",
          o: [
            "completely irrational and driven by emotion",
            "rational, but limited by an individual's ability to process information",
            "always made by groups instead of individuals",
            "governed entirely by rules and procedures"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Bounded rationality is not irrational — the decision maker still tries to be rational. The point is that there is a limit on how much information can be processed.",
            "Correct — rational within the bounds of limited information-processing capacity.",
            "Bounded rationality is about an individual's cognitive limits, not about whether a group or individual decides. Reconsider what 'bounded' is limiting.",
            "Rules and procedures describe programmed decisions, not bounded rationality. The concept here is about limits on processing information."
          ],
          e: "Bounded rationality is decision making that is rational but limited (bounded) by an individual's ability to process information, which leads people to satisfice."
        },
        {
          q: "A series of sequential steps used to respond to a well-structured problem is a…",
          o: [
            "rule",
            "policy",
            "procedure",
            "heuristic"
          ],
          a: 2,
          tier: "easy",
          h: [
            "A rule is an explicit statement of what can or cannot be done — it does not lay out a sequence of steps. Look for the instrument that is a step-by-step sequence.",
            "A policy is a general guideline that leaves room for interpretation, not a fixed sequence of steps. The term you want is the ordered, step-by-step one.",
            "Correct — a procedure is the sequential-steps instrument for well-structured problems.",
            "A heuristic is a rule of thumb for simplifying complex information, not a formal sequence of steps for a structured problem. Reconsider the three programmed-decision instruments."
          ],
          e: "A procedure is a series of sequential steps used to respond to a well-structured problem. A rule is an explicit statement of what can or cannot be done, and a policy is a guideline for making decisions."
        },
        {
          q: "Intuitive decision making is making decisions on the basis of…",
          o: [
            "experience, feelings, and accumulated judgment",
            "an exhaustive analysis of all alternatives and consequences",
            "explicit organizational rules and policies",
            "randomly generated options"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — intuition draws on experience, feelings, and accumulated judgment.",
            "An exhaustive analysis of all alternatives describes the rational model's assumptions, not intuition. Intuition is faster and draws on something internal to the decision maker.",
            "Rules and policies are the basis of programmed decisions, not intuition. Reconsider what experienced managers draw on when they 'just know.'",
            "Intuition is not random — it is built on accumulated experience and judgment, not chance. Reconsider the definition."
          ],
          e: "Intuitive decision making is making decisions on the basis of experience, feelings, and accumulated judgment. Exhibit 3-5 lists five aspects: experience-based, affect-initiated, cognitive-based, values/ethics-based, and subconscious mental processing."
        },
        {
          q: "Which of the following is one of the four essentials of evidence-based management (EBMgt)?",
          o: [
            "Ignoring the decision maker's own expertise and judgment",
            "Relevant organizational (internal) factors such as context and circumstances",
            "Using only intuition and feelings",
            "Excluding the values of stakeholders in the decision"
          ],
          a: 1,
          tier: "easy",
          h: [
            "EBMgt explicitly includes — not ignores — the decision maker's expertise and judgment as one of its four essentials. Reconsider which option names a genuine essential.",
            "Correct — relevant organizational (internal) factors are one of the four essentials.",
            "EBMgt is the systematic use of the best available evidence, the opposite of relying only on intuition and feelings. Look for the option about organizational context.",
            "EBMgt explicitly includes the opinions, preferences, and values of stakeholders — so excluding them contradicts it. Find the option that is actually one of the four essentials."
          ],
          e: "The four essentials of EBMgt are: (1) the decision maker's expertise and judgment, (2) external evidence evaluated by the decision maker, (3) the opinions, preferences, and values of stakeholders, and (4) relevant organizational (internal) factors such as context, circumstances, and organizational members."
        },
        {
          q: "A Beirut supermarket owner, unable to track every supplier's price during daily repricing, stops searching once she finds a wholesaler whose terms are 'acceptable enough' to reopen the next morning. Her behavior best illustrates…",
          o: [
            "maximizing under certainty",
            "satisficing under bounded rationality",
            "the anchoring effect",
            "a programmed decision"
          ],
          a: 1,
          tier: "medium",
          h: [
            "She is not maximizing — she explicitly stops at 'acceptable enough' instead of finding the single best wholesaler, and conditions are far from certain. Reconsider what 'good enough' signals.",
            "Correct — limited ability to process information leads her to accept a 'good enough' option.",
            "Anchoring is about fixating on an initial number; here the issue is that she stops searching at a 'good enough' option, not that she fixates on a first figure. Reconsider.",
            "A programmed decision handles a routine, structured problem with rules or procedures. Choosing a supplier amid daily repricing and scarce information is not routine. Reconsider what 'good enough' indicates."
          ],
          e: "Because she cannot process all suppliers' shifting prices, she satisfices — accepting a 'good enough' wholesaler rather than maximizing. This is the practical consequence of bounded rationality."
        },
        {
          q: "A bank manager must decide whether to approve a routine loan that meets every documented credit criterion in the bank's lending manual. This is best described as a…",
          o: [
            "nonprogrammed decision under uncertainty",
            "programmed decision for a structured problem",
            "decision made under conditions of pure risk",
            "satisficing decision driven by intuition"
          ],
          a: 1,
          tier: "medium",
          h: [
            "A nonprogrammed decision addresses new, unusual problems with vague goals. A routine loan that meets every documented criterion is the opposite — familiar and well-defined. Reconsider.",
            "Correct — a familiar, well-defined problem handled by an existing routine is a programmed decision.",
            "Risk involves estimating probabilities of uncertain outcomes; here the criteria are clear and documented, so the problem is structured rather than probabilistic. Reconsider the problem type.",
            "Satisficing and intuition apply when information is limited or judgment is needed. Here the manual provides clear criteria, so the decision follows a routine. Reconsider."
          ],
          e: "A routine loan that meets a documented set of criteria is a structured problem handled by a programmed decision — information is readily available, the goal is clear, and a routine (the lending manual) applies."
        },
        {
          q: "During hyperinflation, a Lebanese retailer must set tomorrow's prices without knowing the next day's exchange rate or how customers and competitors will react. He cannot even assign meaningful probabilities to the outcomes. He is deciding under conditions of…",
          o: [
            "certainty",
            "risk",
            "uncertainty",
            "satisficing"
          ],
          a: 2,
          tier: "medium",
          h: [
            "Certainty means the manager knows the outcome of each alternative in advance. With an unknown exchange rate and unpredictable reactions, that is clearly not the case here.",
            "Risk means outcomes are unknown but their probabilities can be estimated. The scenario says he cannot even assign meaningful probabilities, so this is a stronger form of not-knowing.",
            "Correct — no known outcomes and no estimable probabilities is the definition of uncertainty.",
            "Satisficing is a decision strategy (settling for 'good enough'), not a decision-making condition. The question asks about the condition under which he decides."
          ],
          e: "When outcomes are unknown and probabilities cannot even be reasonably estimated, the decision is made under uncertainty. (Under risk, probabilities can be estimated; under certainty, outcomes are known.)"
        },
        {
          q: "A factory owner keeps a failing import line running because 'we've already paid for two years of generator fuel and equipment — we can't quit now.' Which bias is driving this?",
          o: [
            "anchoring effect",
            "sunk-cost bias",
            "confirmation bias",
            "hindsight bias"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Anchoring is fixating on an initial figure and adjusting too little from it. Here the driver is past unrecoverable spending, not a starting number. Reconsider what 'already paid' points to.",
            "Correct — past unrecoverable spending is driving a present decision.",
            "Confirmation bias is seeking information that supports existing beliefs. The owner's reasoning is about money already spent, not about filtering evidence. Reconsider.",
            "Hindsight bias is wrongly believing, after the fact, that an outcome could have been predicted. Here the issue is past spending influencing a current choice. Reconsider."
          ],
          e: "The sunk-cost bias lets past, unrecoverable expenditures (the fuel and equipment already paid for) drive the current decision instead of focusing on future costs and benefits."
        },
        {
          q: "A depositor learns the bank will allow only a small monthly withdrawal at an unfavorable 'lollar' rate, while keeping cash at home risks theft and currency devaluation. With no precedent, ambiguous information, and conflicting goals, deciding whether to keep his savings in the bank is best classified as a(n)…",
          o: [
            "programmed decision based on a clear rule",
            "structured problem with readily available information",
            "nonprogrammed decision for an unstructured problem",
            "decision under certainty"
          ],
          a: 2,
          tier: "medium",
          h: [
            "A programmed decision applies a clear rule to a routine, familiar problem. Choosing whether to trust a bank amid capital controls is novel and has no precedent. Reconsider.",
            "A structured problem has readily available information and clear goals. Here information is ambiguous and the goals conflict, so the problem is the opposite. Reconsider.",
            "Correct — new, unusual, ambiguous, and one-of-a-kind means a nonprogrammed decision.",
            "Certainty means the outcome of each choice is known. With devaluation, withdrawal limits, and theft risk all uncertain, this is clearly not certainty. Reconsider the problem's structure."
          ],
          e: "A new, unusual situation with ambiguous information and vague, conflicting goals is an unstructured problem requiring a nonprogrammed, custom-made decision based on judgment rather than rules or procedures."
        },
        {
          q: "A generator-subscription ('ishtirak') operator insists his amperage pricing is fair 'because it has always worked,' dismisses customer complaints about EDL coverage as unfounded, and only notices the data that supports his current rate. Which bias most directly explains his selective attention to confirming data?",
          o: [
            "confirmation bias",
            "immediate-gratification bias",
            "randomness bias",
            "overconfidence bias"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — seeking and weighting only confirming evidence is the confirmation bias.",
            "Immediate-gratification bias is preferring quick rewards and avoiding immediate costs. The scenario is about filtering evidence to support a belief, not about timing of rewards. Reconsider.",
            "Randomness bias is reading patterns into chance events. Here the operator is selectively noticing confirming data, not inventing patterns in random events. Reconsider.",
            "Overconfidence is overrating one's own knowledge or accuracy. Although present in tone, the specific behavior described — noticing only supporting data — names a different, more precise bias. Reconsider."
          ],
          e: "Confirmation bias is the tendency to seek out and weight information that reaffirms past choices while discounting contradictory evidence — exactly the selective attention shown here."
        },
        {
          q: "Two managers face the lira collapse. Manager A maps every possible exchange-rate scenario, assigns precise probabilities, and computes the value-maximizing price. Manager B, lacking time and data, picks the first pricing rule that keeps the shop solvent. Which statement BEST evaluates their approaches?",
          o: [
            "Manager A is acting rationally and Manager B irrationally, so A's approach is clearly superior",
            "Manager B is satisficing within bounded rationality, which is the more realistic approach given that A's full-information assumptions cannot hold under uncertainty",
            "Both are using programmed decisions, so the difference is only one of speed",
            "Manager A is satisficing and Manager B is maximizing"
          ],
          a: 1,
          tier: "hard",
          h: [
            "This treats the rational model as always achievable. Under uncertainty its assumptions (full knowledge of alternatives and consequences) cannot hold, so B is not simply 'irrational.' Reconsider which approach is realistic.",
            "Correct — B satisfices within bounded rationality, the realistic response when the rational model's assumptions fail under uncertainty.",
            "Neither is making a programmed decision: pricing amid a currency collapse is an unstructured, novel problem, not a routine handled by rules. Reconsider the problem type.",
            "This reverses the terms. The manager who settles for the first solvent rule is the one accepting 'good enough,' not the one computing the maximum. Reconsider which is which."
          ],
          e: "Manager A's approach assumes full knowledge of alternatives and probabilities, which the rational model requires but uncertainty denies. Manager B satisfices within bounded rationality, accepting a 'good enough' solution — the realistic description of how managers actually decide when information-processing limits bind."
        },
        {
          q: "A CEO commissions an external study, consults her own experience, gathers staff and customer views, and weighs the firm's specific context before deciding. A critic says she is 'just guessing.' Which response BEST defends her process using the lecture?",
          o: [
            "She is guessing, because any decision involving judgment is unscientific",
            "She is practicing evidence-based management, integrating her judgment, evaluated external evidence, stakeholders' values, and organizational factors",
            "She is using bounded rationality, which means she is deliberately ignoring evidence",
            "She is making a programmed decision because she followed several steps"
          ],
          a: 1,
          tier: "hard",
          h: [
            "This dismisses judgment entirely, but the lecture treats the decision maker's expertise and judgment as a legitimate input — one of the four EBMgt essentials. Reconsider.",
            "Correct — her four inputs map exactly onto the four essentials of EBMgt.",
            "Bounded rationality describes information-processing limits, not a deliberate ignoring of evidence. She is in fact gathering and evaluating evidence. Reconsider which concept fits.",
            "Following several steps does not make a decision 'programmed' — that term applies to routine, structured problems handled by rules. Her combining evidence sources points to a different concept. Reconsider."
          ],
          e: "Her process is evidence-based management: she combines (1) her own expertise and judgment, (2) evaluated external evidence, (3) stakeholders' opinions and values, and (4) relevant organizational factors — the four essentials of EBMgt."
        },
        {
          q: "An organization wants to reduce the influence of heuristics and biases in its operating decisions. Which strategy is MOST consistent with the lecture's reasoning about programmed vs. nonprogrammed decisions?",
          o: [
            "Treat every decision as unique and rely on managers' intuition each time",
            "Convert recurring, structured problems into programmed decisions via procedures, rules, and policies, freeing judgment for genuinely unstructured problems",
            "Eliminate all rules and policies so managers can maximize on every decision",
            "Push all decisions up to senior managers to ensure consistency"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Relying on fresh intuition for every decision multiplies the very heuristics and biases the firm wants to reduce, and wastes judgment on routine matters. Reconsider what routinizing achieves.",
            "Correct — programming structured problems applies consistent routines and reserves scarce judgment for unstructured ones.",
            "Removing rules and policies forces individual judgment on routine matters, increasing reliance on heuristics rather than reducing it. Reconsider.",
            "Pushing every decision upward overloads senior managers and does not address bias on routine matters; the lecture instead assigns routine, structured problems to lower levels. Reconsider."
          ],
          e: "Programming structured, recurring problems with procedures, rules, and policies handles them consistently at lower levels and reduces reliance on individual heuristics, reserving managers' limited judgment and creativity for the unstructured, nonprogrammed problems that genuinely require them."
        },
        {
          q: "A retailer prices imported goods at a 'round-number' rate of 90,000 LBP per dollar because that was the market rate three weeks ago, adjusting little since, even though the rate has since moved sharply. A consultant warns this could cause large losses. Which combination BEST captures what is happening?",
          o: [
            "Anchoring on the stale rate, compounded by deciding under uncertainty about the true current rate",
            "Confirmation bias only, with no role for the decision-making condition",
            "Satisficing under certainty, since the rate is known and fixed",
            "A programmed decision based on a sound pricing rule"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — he anchors on the stale 90,000 figure while the true current rate is genuinely uncertain.",
            "Confirmation bias does not capture the fixation on the old 90,000 figure, and it ignores that the true rate is unknown. The scenario combines a specific bias with a decision condition. Reconsider.",
            "Conditions are not certain — the true exchange rate is unknown and moving, so 'certainty' is wrong. Also, fixating on an outdated number is a specific bias, not just satisficing. Reconsider.",
            "A sound pricing rule would track the current rate, not fixate on a three-week-old number. This is a bias at work, not a well-designed programmed decision. Reconsider."
          ],
          e: "He shows the anchoring effect — fixating on the initial 90,000 figure and adjusting insufficiently — while operating under uncertainty, since the true current exchange rate is unknown and volatile. The two together explain the danger the consultant flags."
        },
        {
          q: "A manager argues: 'Because my team is experienced, our intuition makes formal analysis and outside evidence unnecessary.' Using the lecture, which is the BEST critique?",
          o: [
            "She is right: intuition built on experience always outperforms analysis",
            "Intuition is a legitimate input, but unchecked it is prone to biases like overconfidence and confirmation; evidence-based management disciplines judgment with evaluated evidence and stakeholder input",
            "Intuition is never valid, so all of her decisions will be wrong",
            "Her statement describes bounded rationality, which guarantees an optimal decision"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Treating intuition as always superior ignores the lecture's warning that heuristics produce systematic biases. Experience does not immunize against overconfidence. Reconsider.",
            "Correct — intuition is legitimate but bias-prone, and EBMgt disciplines it with evidence and stakeholder input.",
            "The lecture treats intuition as a legitimate aspect of how managers decide (Exhibit 3-5), so 'never valid' overstates the case. Reconsider the balanced view.",
            "Bounded rationality describes processing limits and leads to satisficing, not an optimal decision — and the statement is about intuition, not bounded rationality. Reconsider."
          ],
          e: "Intuition (experience-, affect-, cognitive-, and values-based judgment) is a real and useful basis for decisions, but unchecked it invites biases such as overconfidence and confirmation. Evidence-based management corrects for this by combining the manager's judgment with evaluated external evidence, stakeholders' values, and organizational context."
        },
        {
          q: "A firm has poured two years and huge sums into a failing software project. The lead argues, \"We've invested too much to stop now.\" A consultant calls this a classic decision error. Which bias is at work, and which rational principle is violated?",
          o: [
            "Anchoring bias — the team is stuck on its first estimate and should simply re-anchor on a new number",
            "Escalation of commitment — throwing good resources after bad to justify past choices; the violated principle is that sunk (unrecoverable) costs should be ignored and the decision judged only on future costs and benefits",
            "Availability bias — the team recalls vivid recent failures and should gather more memorable cases",
            "Overconfidence — the team overrates its skill and should simply work harder on the same project"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Anchoring is fixating on an initial numeric estimate; here the issue is refusing to abandon a sinking project, not a number.",
            "Right idea — that's the one.",
            "Availability is judging by what comes easily to mind; that is not what 'we've invested too much to quit' describes.",
            "'Work harder on the same project' is the trap itself — the rational move is to judge the project on its FUTURE prospects, ignoring sunk cost."
          ],
          e: "Escalation of commitment is the tendency to increase commitment to a prior decision despite evidence it is failing, in order to justify past investment. The principle violated is that sunk costs — past, unrecoverable expenditures — are irrelevant to a forward-looking decision, which should weigh only future costs and benefits."
        }
      ],
      cases: [
        {
          title: "Repricing at Dawn: Karim's Mini-Market",
          scenario: "Karim runs a mini-market in Beirut during the lira's collapse. Suppliers now quote in 'fresh' dollars and reprice daily, so each morning Karim must set shelf prices without knowing that day's exchange rate, how customers will react, or whether competitors down the street will undercut him. He cannot assign reliable probabilities to any of it. He has no time to survey every wholesaler, so he calls the first two he trusts, takes a rate that looks 'acceptable enough' to stay solvent, and reopens. One clerk notes that Karim still anchors on last week's 90,000 LBP rate and adjusts upward only slightly, even when the parallel-market rate has jumped much higher. Meanwhile Karim must also choose whether to keep the shop's cash takings in the bank — where 'lollar' withdrawal limits and a feared haircut loom — or hold devaluing lira at home.",
          qs: [
            {
              q: "Under which decision-making condition is Karim setting his daily prices, and how do you know? Distinguish it from the other two conditions.",
              a: "Karim is deciding under UNCERTAINTY. He does not know the day's exchange rate, customer reactions, or competitor moves, and crucially he cannot assign reliable probabilities to these outcomes — the defining feature of uncertainty. This differs from CERTAINTY, where the outcome of each alternative is known in advance (impossible here given daily repricing in fresh dollars), and from RISK, where outcomes are unknown but their probabilities can be estimated (also not the case, since the lira collapse makes the rate unpredictable and unquantifiable). The hyperinflationary, dollarized environment removes the stable information rational pricing would require."
            },
            {
              q: "Explain Karim's supplier choice using bounded rationality and satisficing, citing the local constraints.",
              a: "Karim cannot process all available information — there are too many wholesalers, prices reprice daily in fresh dollars, and he has no time before reopening. This is BOUNDED RATIONALITY: he is rational but limited by his ability to gather and process information. Rather than MAXIMIZING (finding the single best supplier and rate), he SATISFICES — he calls the first two trusted wholesalers and accepts a rate that is 'acceptable enough' to keep the shop solvent. Satisficing is the realistic response when scarce information and time make the full rational search impossible, which is exactly the condition the crisis imposes."
            },
            {
              q: "Identify the bias in Karim's pricing and the decision conditions, and classify the bank-deposit choice as a type of decision. Tie each to the scenario.",
              a: "Karim shows the ANCHORING EFFECT: he fixates on last week's 90,000 LBP rate as a starting point and adjusts upward only insufficiently, even as the parallel-market rate jumps far higher — a bias that risks underpricing and losses. The decision to keep cash in the bank versus holding lira at home is a NONPROGRAMMED decision addressing an UNSTRUCTURED problem: it is new and unusual (capital controls, 'lollar' withdrawal limits, and a feared haircut are unprecedented), information is ambiguous or incomplete, and the goals are vague and conflicting (preserve value, maintain liquidity, avoid theft and devaluation). It cannot be handled by a routine procedure, rule, or policy and instead relies on judgment under uncertainty."
            }
          ]
        },
        {
          title: "The Generator Decision at Clinic Cèdre",
          scenario: "Dr. Layla manages a small private clinic in Beirut. The clinic already runs two PROGRAMMED routines: a fixed six-step checklist for admitting walk-in patients, and a strict written rule that staff may never disclose a patient's room number to phone callers. A standing guideline states that 'patient complaints should be resolved at the lowest possible level.' Then EDL fails almost entirely, fuel queues lengthen, and her generator-subscription ('ishtirak') provider triples the amperage price overnight. Layla must decide whether to sign a costly long-term ishtirak contract, buy her own generator on credit during hyperinflation, or cut clinic hours — with no precedent, incomplete fuel-cost data, and competing goals (keep equipment powered, stay affordable for patients paying in collapsing lira, and protect cash reserves). She studies fuel-price trends, consults an engineer's estimates, asks her nurses and patients what they can bear, and weighs the clinic's specific cash position before choosing.",
          qs: [
            {
              q: "Classify the clinic's three existing instruments (the admissions checklist, the room-number ban, and the complaint guideline) using the lecture's terms for programmed decisions.",
              a: "The fixed six-step admissions checklist is a PROCEDURE — a series of sequential steps used to respond to a well-structured problem. The strict ban on disclosing room numbers to callers is a RULE — an explicit statement telling staff what they can or cannot do. The guideline that 'complaints should be resolved at the lowest possible level' is a POLICY — a guideline for making decisions that leaves room for interpretation. All three are tools for PROGRAMMED decisions handling structured, routine problems."
            },
            {
              q: "Is the generator/power decision a structured or unstructured problem? Justify with at least four characteristics from the programmed-versus-nonprogrammed comparison, anchored in the crisis.",
              a: "It is an UNSTRUCTURED problem requiring a NONPROGRAMMED decision. (1) The problem is NEW/UNUSUAL: a near-total EDL grid failure with a tripled ishtirak amperage price has no precedent. (2) Information is AMBIGUOUS OR INCOMPLETE: fuel costs are volatile and queue-driven, and credit terms shift under hyperinflation. (3) Goals are VAGUE and conflicting: keep equipment powered, stay affordable for patients paying in collapsing lira, and protect cash reserves. (4) It sits at the UPPER managerial level (Dr. Layla, the manager) with a RELATIVELY LONG time frame, and the solution RELIES ON JUDGMENT AND CREATIVITY — a custom-made choice among the contract, buying a generator on credit, or cutting hours — rather than on any procedure, rule, or policy."
            },
            {
              q: "Show how Dr. Layla's approach to the power decision matches the four essentials of evidence-based management.",
              a: "Layla's process maps onto all four EBMgt essentials. (1) The decision maker's EXPERTISE AND JUDGMENT: she draws on her own managerial judgment to weigh the options. (2) EXTERNAL EVIDENCE evaluated by the decision maker: she studies fuel-price trends and the engineer's cost estimates. (3) OPINIONS, PREFERENCES, AND VALUES OF STAKEHOLDERS: she asks nurses and patients what costs they can bear. (4) RELEVANT ORGANIZATIONAL (INTERNAL) FACTORS: she weighs the clinic's specific cash position and circumstances. Together these are EBMgt — the systematic use of the best available evidence to improve a management decision — which disciplines her judgment under the uncertainty of the EDL and fuel crisis."
            }
          ]
        }
      ],
      essays: [
        {
          q: "“Managers are rational decision makers.” Critically discuss this statement using the assumptions of rationality, bounded rationality, satisficing, intuition, and the role of heuristics and biases.",
          outline: [
            "State the rationality assumptions: logical/objective; clear unambiguous problem; clear specific goal; all alternatives and consequences known; value-maximizing choice; organization's best interest",
            "Argue the assumptions rarely hold in practice",
            "Bounded rationality: rational but limited by ability to process information → satisficing (good-enough solutions)",
            "Intuition: decisions from experience, feelings, accumulated judgment (5 aspects in Exhibit 3-5) — common and not necessarily bad",
            "Heuristics: rules of thumb simplify but produce systematic errors/biases (give 3–4 examples: overconfidence, anchoring, sunk costs, confirmation, hindsight…)",
            "Balanced conclusion: managers are intendedly rational; EBMgt helps discipline judgment with evidence"
          ],
          model: "Rational decision making describes choices that are logical, consistent, and value-maximizing, and it rests on demanding assumptions: the decision maker is logical and objective; the problem is clear and unambiguous; there is a clear, specific goal; all alternatives and consequences are known; the maximizing alternative is chosen; and the decision serves the organization's best interest. In reality these assumptions rarely hold. Bounded rationality recognizes that managers are rational within the limits of their ability to process information: unable to analyze all information on all alternatives, they SATISFICE — they accept solutions that are “good enough” rather than maximal. Managers also decide intuitively, on the basis of experience, feelings, and accumulated judgment; Exhibit 3-5 shows intuition spans experience-based, affect-initiated, cognitive-based, values/ethics-based decisions and subconscious mental processing. To cope with complexity, managers use heuristics — rules of thumb that simplify information — but these generate systematic errors and biases: overconfidence, anchoring on initial figures, selective perception, confirmation of prior beliefs, framing effects, availability, representation, randomness errors, sunk-cost reasoning, self-serving attributions, immediate gratification, and hindsight. The statement is therefore best judged as half-true: managers are intendedly rational but cognitively bounded and bias-prone. Evidence-based management offers a corrective, combining the manager's expertise and judgment with evaluated external evidence, stakeholders' values, and organizational context so that judgment is disciplined by the best available evidence rather than by rules of thumb alone."
        },
        {
          q: "Explain why groups can make better decisions than individuals, why they sometimes make disastrous ones, and how managers can design the group decision process to get the benefits without the pathologies.",
          outline: [
            "Advantages: more complete information/knowledge; more perspectives/experiences; intellectual stimulation → higher-quality, fully informed decision; understanding of rationale → acceptance/buy-in and commitment → better implementation",
            "Downsides: domination by the loud; time consuming; conformity pressures; ambiguous responsibility; satisficing",
            "Group composition risks: politically loaded teams, dropouts, vested interests, executives planting “their person” or signaling preferences",
            "Groupthink (Janis): definition, antecedents (cohesiveness, structural, contextual), key symptoms, DM characteristics; Asch evidence on conformity/herd mentality",
            "Remedies: avoid status divisions; draw out quiet members; leader talks less; anonymous written ideas first; devil's advocate; parallel groups on different options; refresh stale groups; introduce outsiders"
          ],
          model: "Groups can outperform individuals because they pool more complete information and knowledge, bring a greater number of perspectives and different experiences, and generate intellectual stimulation through discussion — so the decision is more fully informed and of higher quality. Because participants understand the rationale, acceptance (buy-in) and commitment are higher, increasing the chance of successful implementation. Yet the same social forces can ruin decisions. Discussion can be dominated by loud members whose opinions are not the most valid; the process is time consuming; conformity pressures push members toward the majority view; responsibility becomes ambiguous; and groups often satisfice rather than optimize. Composition adds risk: teams may be loaded for political reasons, members drop out or attend with vested interests, and a senior executive may tilt the outcome by appointing “their person” or by signaling a preference and starting to implement it. At the extreme lies groupthink (Janis, 1982): in highly cohesive groups, striving for unanimity overrides realistic appraisal of alternatives. Its antecedents are high cohesiveness, structural faults (insulation, partisan leadership, no procedural protocols, ideological homogeneity), and contextual pressures (stress, external pressure). Its symptoms — illusion of invulnerability, moral superiority, collective rationalization, stereotyping of outsiders, self-censorship, conformity pressure, illusion of unanimity, and mind guards — produce limited options, ignored expertise, and no contingency plans. The Asch experiments show how strong conformity is: 75% of subjects denied the evidence of their own eyes at least once. Managers can engineer around these pathologies: avoid sharp status divisions, draw out quiet members, dissuade the leader from dominating, collect ideas in writing anonymously before discussion (defeating anchoring and ego threat), appoint a credible devil's advocate, run parallel groups analyzing different options in depth, refresh stale groups, and introduce outsiders. The goal is to keep the informational benefits of groups while deliberately disrupting the unanimity pressures that corrupt them."
        },
        {
          q: "Compare programmed and nonprogrammed decisions. Explain the types of problems each addresses, the tools managers use for each, and how the mix changes across managerial levels.",
          outline: [
            "Structured problems: straightforward, familiar, easily defined → programmed decisions: repetitive, routine approach",
            "Tools: procedure (sequential steps), rule (explicit can/cannot), policy (guideline)",
            "Unstructured problems: new/unusual, ambiguous or incomplete information → nonprogrammed decisions: unique, nonrecurring, custom-made solutions",
            "Comparison table dimensions: level (lower vs. upper), frequency, information availability, goal clarity, time frame, basis of solution (procedures/rules/policies vs. judgment and creativity)",
            "Level logic: lower managers face routine structured problems; upper managers face novel strategic ones; programmed routines free capacity for nonprogrammed judgment"
          ],
          model: "Decisions divide according to the problems they answer. Structured problems are straightforward, familiar, and easily defined; they call for programmed decisions — repetitive decisions handled by a routine approach. Managers program such decisions through three instruments: a procedure, the series of sequential steps used to respond to a well-structured problem; a rule, an explicit statement that tells managers what can or cannot be done; and a policy, a guideline for making decisions that leaves discretion in application. Unstructured problems, by contrast, are new or unusual with ambiguous or incomplete information; they require nonprogrammed decisions — unique, nonrecurring, custom-made solutions. The lecture's comparison shows the systematic differences: programmed decisions live at lower managerial levels, recur routinely, draw on readily available information, serve clear and specific goals, are resolved quickly, and rely on procedures, rules, and policies; nonprogrammed decisions concentrate at upper levels, are new and unusual, face ambiguous information and vague goals, take relatively long, and rely on judgment and creativity. The two categories are complementary in organizational design: by programming whatever is structured, organizations resolve routine matters consistently and cheaply at low levels, while reserving senior managers' limited attention — and their judgment and creativity — for the novel, consequential, unstructured problems that no checklist can anticipate."
        }
      ]
    },
    {
      id: "w6",
      week: 6,
      title: "Organizational Structure",
      blurb: "The six elements of organizational design, mechanistic vs. organic, and structural types.",
      sections: [
        {
          h: "Elements of Organizational Design",
          blocks: [
            {
              t: "def",
              term: "Organizing",
              d: "Management function that involves arranging and structuring work to accomplish the organization's goals."
            },
            {
              t: "def",
              term: "Organizational structure",
              d: "The formal arrangement of jobs within an organization."
            },
            {
              t: "def",
              term: "Organizational chart",
              d: "The visual representation of an organization's structure."
            },
            {
              t: "def",
              term: "Organizational design",
              d: "Creating or changing an organization's structure."
            },
            {
              t: "list",
              title: "Purposes of organizing",
              items: [
                "Divides work to be done into specific jobs and departments",
                "Assigns tasks and responsibilities associated with individual jobs",
                "Coordinates diverse organizational tasks",
                "Clusters jobs into units",
                "Establishes relationships among individuals, groups, and departments; establishes formal lines of authority",
                "Allocates and deploys organizational resources"
              ]
            }
          ]
        },
        {
          h: "The Six Elements",
          blocks: [
            {
              t: "def",
              term: "1. Work specialization",
              d: "Dividing work activities into separate job tasks (also known as division of labor). The essence: divide a job into steps, each completed by a separate individual; it makes efficient use of the diversity of workers' skills. The economies/diseconomies exhibit shows productivity rises with specialization up to a point, then falls as human diseconomies (boredom, fatigue) outweigh the economies."
            },
            {
              t: "def",
              term: "2. Departmentalization",
              d: "The basis by which jobs are grouped together. Five forms: functional, geographical, product, process, and customer departmentalization."
            },
            {
              t: "def",
              term: "3. Chain of command, authority and responsibility",
              d: "Chain of command: the line of authority extending from upper organizational levels to the lowest levels, clarifying who reports to whom. LINE AUTHORITY entitles a manager to direct the work of an employee; STAFF AUTHORITY refers to positions created to support, assist, and advise those holding line authority. RESPONSIBILITY: the obligation or expectation to perform assigned duties. UNITY OF COMMAND: each person should report to only one manager."
            },
            {
              t: "def",
              term: "4. Span of control",
              d: "The number of employees a manager can efficiently and effectively manage. Traditional view: no more than 5–6. Contemporary view: there is no magic number. Exhibit: with 4,096 workers, a span of 4 requires 6 levels and about 1,365 managers; a span of 8 requires 4 levels and about 585 managers — wider spans mean flatter, cheaper structures."
            },
            {
              t: "def",
              term: "5. Centralization vs. decentralization",
              d: "Centralization: the degree to which decision making is concentrated at upper levels. Decentralization: the degree to which lower-level employees provide input or actually make decisions."
            },
            {
              t: "table",
              title: "When more centralization vs. more decentralization?",
              cols: [
                "More centralization",
                "More decentralization"
              ],
              rows: [
                [
                  "Environment is stable",
                  "Environment is complex, uncertain"
                ],
                [
                  "Lower-level managers not as capable/experienced at decisions",
                  "Lower-level managers are capable and experienced at making decisions"
                ],
                [
                  "Lower-level managers do not want a say",
                  "Lower-level managers want a voice in decisions"
                ],
                [
                  "Decisions are relatively minor",
                  "Decisions are significant"
                ],
                [
                  "Organization facing a crisis or risk of company failure",
                  "Corporate culture is open to allowing managers a say"
                ],
                [
                  "Company is large",
                  "Company is geographically dispersed"
                ],
                [
                  "Strategy implementation depends on managers retaining say",
                  "Strategy implementation depends on managers' involvement and flexibility"
                ]
              ]
            },
            {
              t: "def",
              term: "6. Formalization",
              d: "How standardized an organization's jobs are and the extent to which employee behavior is guided by rules and procedures. Traditional management favored high formalization; today's view gives employees more discretion."
            }
          ]
        },
        {
          h: "Mechanistic vs. Organic & Contingency Factors",
          blocks: [
            {
              t: "table",
              title: "Mechanistic vs. organic organizations",
              cols: [
                "Mechanistic",
                "Organic"
              ],
              rows: [
                [
                  "High specialization",
                  "Cross-functional teams"
                ],
                [
                  "Rigid departmentalization",
                  "Cross-hierarchical teams"
                ],
                [
                  "Clear chain of command",
                  "Free flow of information"
                ],
                [
                  "Narrow spans of control",
                  "Wide spans of control"
                ],
                [
                  "Centralization",
                  "Decentralization"
                ],
                [
                  "High formalization",
                  "Low formalization"
                ]
              ]
            },
            {
              t: "list",
              title: "Contingency factors shaping structure",
              items: [
                "Strategy: structure should facilitate goal achievement — strategy and structure are closely linked; certain structural designs work best with different strategies",
                "Size: size affects structure, but past a certain size the effect weakens — at around 2,000 employees an organization is already fairly mechanistic; adding 500 more won't change much",
                "Environmental uncertainty: in stable and simple environments, mechanistic designs can be more effective; the greater the uncertainty, the more the organization needs the flexibility of an organic design"
              ]
            }
          ]
        },
        {
          h: "Organizational Designs",
          blocks: [
            {
              t: "table",
              title: "Traditional organizational designs: strengths & weaknesses",
              cols: [
                "Design",
                "Strengths",
                "Weaknesses"
              ],
              rows: [
                [
                  "Simple structure",
                  "Fast; flexible; inexpensive to maintain; clear accountability",
                  "Not appropriate as organization grows; reliance on one person is risky"
                ],
                [
                  "Functional structure",
                  "Cost-saving advantages from specialization (economies of scale, minimal duplication of people and equipment); employees grouped with others having similar tasks",
                  "Pursuit of functional goals can cause managers to lose sight of what's best for the overall organization; functional specialists become insulated with little understanding of what other units do"
                ],
                [
                  "Divisional structure",
                  "Focuses on results — division managers responsible for what happens to their products and services",
                  "Duplication of activities and resources increases costs and reduces efficiency"
                ]
              ]
            },
            {
              t: "def",
              term: "Matrix structure",
              d: "An organizational structure that assigns specialists from different functional departments to work on one or more projects."
            },
            {
              t: "def",
              term: "Project structure",
              d: "An organizational structure in which employees continuously work on projects."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Creating or changing an organization's structure is called…",
          o: [
            "organizational design",
            "organizational structure",
            "organizational chart",
            "departmentalization"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right idea — this is the act of creating or changing the arrangement of jobs.",
            "This term names the formal arrangement of jobs itself, not the act of creating or changing it.",
            "This is only the visual representation of the structure, not the work of building or altering it.",
            "This is one of the six elements — grouping jobs — not the overall act of shaping the structure."
          ],
          e: "Organizational design is creating or changing an organization's structure; structure is the formal arrangement of jobs, and the chart is its visual representation."
        },
        {
          q: "The basis by which jobs are grouped together is known as…",
          o: [
            "formalization",
            "departmentalization",
            "work specialization",
            "span of control"
          ],
          a: 1,
          tier: "easy",
          h: [
            "This concerns how standardized jobs are and how far rules guide behavior, not how jobs are clustered.",
            "Correct — this is the basis for clustering jobs into units.",
            "This divides one job into separate tasks; it is not about clustering jobs into groups.",
            "This is the number of employees a manager oversees, not the basis for grouping jobs."
          ],
          e: "Departmentalization is the basis by which jobs are grouped — its five forms are functional, geographical, product, process, and customer."
        },
        {
          q: "The traditional view of the span of control held that a manager should supervise no more than about…",
          o: [
            "5 to 6 employees",
            "20 to 25 employees",
            "40 to 50 employees",
            "as many as possible with no limit"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — the traditional view capped it at roughly five or six.",
            "That is far above the traditional cap; the older view kept the number quite small.",
            "Spans this wide reflect flat, contemporary thinking, not the cautious traditional cap.",
            "That describes the contemporary 'no magic number' view, not the traditional cap."
          ],
          e: "The traditional view limited the span of control to no more than 5–6; the contemporary view holds there is no magic number."
        },
        {
          q: "RESPONSIBILITY, as defined in the chain-of-command element, is…",
          o: [
            "the right to give orders to any employee",
            "the obligation or expectation to perform assigned duties",
            "the line of authority from top to bottom of the organization",
            "the degree to which decisions are concentrated at the top"
          ],
          a: 1,
          tier: "easy",
          h: [
            "That describes authority — the right to direct work — not the obligation to perform duties.",
            "Correct — responsibility is the obligation or expectation to perform assigned duties.",
            "That is the chain of command, not the obligation attached to a job.",
            "That is centralization; responsibility is about the duty to perform assigned work."
          ],
          e: "Responsibility is the obligation or expectation to perform assigned duties; authority is the right to direct work."
        },
        {
          q: "In an ORGANIC organization, formalization is…",
          o: [
            "high",
            "low",
            "the same as in a mechanistic one",
            "replaced entirely by the chain of command"
          ],
          a: 1,
          tier: "easy",
          h: [
            "High formalization is a mechanistic trait; the organic model goes the opposite direction.",
            "Correct — organic organizations are low in formalization.",
            "The two models differ on this very point; the organic one is the opposite of mechanistic here.",
            "Organic structures rely on free information flow, not a rigid chain; formalization is simply low."
          ],
          e: "Organic organizations have low formalization (along with wide spans, decentralization, and cross-functional teams); mechanistic ones have high formalization."
        },
        {
          q: "Which is listed as a contingency factor that shapes an organization's structure?",
          o: [
            "Strategy",
            "Organizational chart",
            "Unity of command",
            "Staff authority"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — strategy is one of the contingency factors, along with size and environment.",
            "This is the visual picture of the structure, not a factor that determines what the structure should be.",
            "This is a chain-of-command principle, not one of the contingency factors shaping structure.",
            "This is a type of authority that supports line managers, not a contingency factor."
          ],
          e: "The contingency factors that shape structure are strategy, size, and environmental uncertainty."
        },
        {
          q: "A hospital groups its staff into surgery, radiology, billing, and human resources departments. Which form of departmentalization is this?",
          o: [
            "Customer departmentalization",
            "Product departmentalization",
            "Functional departmentalization",
            "Geographical departmentalization"
          ],
          a: 2,
          tier: "medium",
          h: [
            "These groups are built around the work performed, not around the type of patient or client served.",
            "There is no product line dividing these units — they are organized by the kind of work done.",
            "Correct — grouping by the function performed (surgery, billing, HR) is functional departmentalization.",
            "No regions or locations split these units; they are grouped by the kind of work each performs."
          ],
          e: "Grouping jobs by the function or work performed (surgery, radiology, billing, HR) is functional departmentalization."
        },
        {
          q: "A retail chain wants to cut managerial costs and flatten its hierarchy. Based on the span-of-control logic, it should…",
          o: [
            "narrow each manager's span of control",
            "widen each manager's span of control",
            "add more layers of middle management",
            "centralize all hiring decisions"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Narrowing spans adds levels and managers — the opposite of flattening and saving on managerial cost.",
            "Correct — wider spans mean fewer levels and fewer managers, flattening the structure.",
            "Adding layers makes the hierarchy taller and more expensive, not flatter and cheaper.",
            "Where decisions are made is a different element; it does not by itself flatten the hierarchy or cut manager headcount."
          ],
          e: "Wider spans of control require fewer levels and fewer managers — flatter, cheaper structures, as the 4,096-employee exhibit shows."
        },
        {
          q: "A firm operating in a complex, uncertain market staffs lower levels with capable managers who want a voice in significant decisions. The lecture's table suggests the firm should…",
          o: [
            "centralize decision making at the top",
            "decentralize decision making",
            "increase work specialization",
            "raise formalization to reduce uncertainty"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Concentrating decisions at the top fits stable environments and less-capable lower levels — the opposite of this situation.",
            "Correct — uncertainty, capable and willing managers, and significant decisions all favor decentralization.",
            "Dividing jobs into smaller tasks is a different element and does not address who should make the decisions.",
            "Adding rules and procedures is formalization; it does not resolve who should hold decision authority here."
          ],
          e: "Complex/uncertain environments, capable lower-level managers who want a say, and significant decisions all point toward decentralization."
        },
        {
          q: "A startup of eight people where the founder makes every decision, jobs are loosely defined, and there are almost no written rules best fits which design?",
          o: [
            "Simple structure",
            "Functional structure",
            "Divisional structure",
            "Matrix structure"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — low formalization, centralized in one owner, fast and flexible: that is a simple structure.",
            "A functional structure groups specialists into departments; this firm has barely any departments at all.",
            "A divisional structure organizes around separate product or market divisions, which this tiny firm lacks.",
            "A matrix overlays projects onto functional departments; this loosely run startup has neither."
          ],
          e: "A small firm with low formalization, loose jobs, and decisions concentrated in the owner is a simple structure — fast, flexible, inexpensive, with clear accountability."
        },
        {
          q: "An auto company creates separate divisions for trucks, sedans, and electric vehicles, each with its own marketing and HR. The chief drawback it will likely face is…",
          o: [
            "unclear accountability for results",
            "duplication of activities and resources that raises costs",
            "reliance on a single person at the top",
            "an inability to respond to different markets"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Divisions actually clarify accountability — each manager owns their products; that is a strength, not the drawback.",
            "Correct — each division repeating its own marketing and HR duplicates resources and raises costs.",
            "Single-person dependence is the weakness of the simple structure, not the divisional form.",
            "Divisions are well suited to serving distinct markets; responsiveness is not the structural weakness here."
          ],
          e: "The divisional structure's main weakness is duplication of activities and resources across divisions, which increases costs and reduces efficiency."
        },
        {
          q: "A consulting firm pulls a finance analyst, a designer, and an engineer from their home departments onto a six-month client project while they still report to their department heads. This arrangement is a…",
          o: [
            "project structure",
            "matrix structure",
            "functional structure",
            "simple structure"
          ],
          a: 1,
          tier: "medium",
          h: [
            "In a project structure employees work on projects continuously and are not lent back to home departments with two bosses.",
            "Correct — specialists assigned from functional departments to a project, keeping dual reporting, is a matrix.",
            "A pure functional structure keeps specialists within their departments; here they are pulled onto a cross-functional project team.",
            "A simple structure is a tiny, owner-run design; this involves several departments feeding into a project team."
          ],
          e: "Assigning specialists from different functional departments to a project while they keep their functional reporting line is the matrix structure."
        },
        {
          q: "Two firms each have 4,096 non-managerial employees. Firm A uses a span of 4 and Firm B a span of 8. Which statement BEST captures the trade-off?",
          o: [
            "Firm B has more levels but fewer managers than Firm A",
            "Firm B has fewer levels and fewer managers, giving tighter cost control but looser supervision of each employee",
            "Firm A is cheaper to run because narrow spans reduce the number of managers",
            "The two firms have identical numbers of levels and managers"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Wider spans reduce levels, not increase them; you have the level effect backwards.",
            "Correct — span 8 yields 4 levels and about 585 managers versus 6 levels and about 1,365, with less close oversight per employee.",
            "Narrow spans require MORE managers and levels, making Firm A the more expensive one to run.",
            "The exhibit shows the two differ sharply: 6 levels/about 1,365 managers versus 4 levels/about 585."
          ],
          e: "A span of 8 cuts levels from 6 to 4 and managers from about 1,365 to about 585 — cheaper and flatter, but each manager supervises more people, so oversight per employee is looser."
        },
        {
          q: "An organization adopts an innovation strategy in a fast-changing, uncertain industry but keeps high specialization, narrow spans, centralization, and heavy formalization. What is the BEST critique using the contingency factors?",
          o: [
            "Its structure is too organic for a stable environment",
            "Its mechanistic structure mismatches both an uncertain environment and an innovation strategy, which call for an organic design",
            "Strategy has no bearing on structure, so only size should be examined",
            "It should narrow spans further to handle the uncertainty"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The traits listed are mechanistic, not organic, and the environment is uncertain rather than stable — both halves are reversed.",
            "Correct — high uncertainty and an innovation strategy both demand organic flexibility, so the mechanistic design is a poor fit.",
            "Strategy and structure are closely linked in the lecture; ignoring strategy is precisely the error here.",
            "Narrowing spans pushes the structure even more mechanistic, worsening the mismatch with an uncertain, innovative setting."
          ],
          e: "Strategy and structure are linked, and greater environmental uncertainty needs organic flexibility. A mechanistic profile contradicts both an innovation strategy and an uncertain environment."
        },
        {
          q: "A growing firm complains that its functional specialists optimize their own departments while company-wide results suffer. Which structural change BEST targets this specific problem?",
          o: [
            "Increase formalization across all functions",
            "Move toward a divisional structure so managers own results for their products or services",
            "Narrow every manager's span of control",
            "Centralize all decisions at headquarters"
          ],
          a: 1,
          tier: "hard",
          h: [
            "More rules do not stop functional silos from chasing their own goals; the parochialism problem remains.",
            "Correct — divisional structures focus on results, making managers accountable for their products and services.",
            "Tighter supervision spans do nothing to align functional silos with overall organizational results.",
            "Pulling decisions to the top does not make specialists care about company-wide results; it can deepen the silo problem."
          ],
          e: "Functional silos losing sight of the whole is the functional structure's classic weakness; a divisional structure refocuses managers on results for their products/services."
        },
        {
          q: "A company is geographically dispersed with capable local managers, yet it is also entering a severe financial crisis that threatens survival. The centralization table points in BOTH directions here. Which judgment is BEST supported?",
          o: [
            "Dispersion and capable managers settle it — fully decentralize",
            "The factors genuinely conflict, but a crisis or risk of company failure is a strong pull toward centralizing critical decisions even while routine local choices stay decentralized",
            "Crisis is irrelevant; only size determines centralization",
            "It should become fully mechanistic in every element at once"
          ],
          a: 1,
          tier: "hard",
          h: [
            "That ignores a powerful opposing factor: crisis and risk of failure pull strongly toward centralization.",
            "Correct — the factors conflict, and a survival-threatening crisis is a strong centralizing pull for critical decisions.",
            "The table explicitly lists crisis/risk of failure as a centralizing factor, so it is far from irrelevant.",
            "Centralization is one element; going fully mechanistic on every element is an overreach not implied by a financial crisis."
          ],
          e: "The table lists crisis/risk of failure under centralization and dispersion/capable managers under decentralization. They conflict, but a survival-threatening crisis is a strong pull to centralize the critical decisions."
        },
        {
          q: "A firm's work is now almost entirely a stream of distinct client projects with no stable functional 'home' for staff, and it wants to avoid the two-boss tension of a matrix. The BEST design is a…",
          o: [
            "functional structure",
            "project structure",
            "matrix structure",
            "simple structure"
          ],
          a: 1,
          tier: "hard",
          h: [
            "A functional structure parks staff in stable departments — the opposite of continuous project work with no functional home.",
            "Correct — when employees continuously work on projects, the project structure removes the dual hierarchy of the matrix.",
            "The matrix is exactly the design that creates the two-boss tension the firm is trying to avoid.",
            "A simple structure is a tiny owner-run firm; it does not address ongoing, project-based professional work."
          ],
          e: "When employees continuously work on projects, the project structure fits best — and unlike the matrix it has no dual functional/project reporting, removing the two-boss strain."
        },
        {
          q: "A factory keeps narrowing each worker's task to a single repetitive motion, expecting output to keep rising. Instead boredom, absenteeism, and errors climb and productivity falls. Using the lecture on work specialization, the BEST diagnosis is that…",
          o: [
            "work specialization always lowers productivity, so the firm should abolish all division of labor",
            "specialization raises efficiency up to a point, but beyond it the human diseconomies (boredom, fatigue, stress, poor quality, turnover) outweigh the gains — the firm has pushed past that point",
            "the problem is too little formalization; more written rules would fix the boredom",
            "the problem is too wide a span of control; adding supervisors would restore output"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The lecture doesn't reject specialization outright — early on it DOES raise efficiency. The issue is overdoing it.",
            "Right idea — that's the one.",
            "More written rules (formalization) won't cure boredom from an over-narrow task; the cause is the specialization itself.",
            "Span of control is about how many people report to a manager — it doesn't explain boredom from repetitive single-motion work."
          ],
          e: "Work specialization increases efficiency at first, but past a certain point the human diseconomies — boredom, fatigue, stress, poor quality, absenteeism, and turnover — overwhelm the efficiency gains. The factory has pushed specialization beyond the point where it still pays, which is why productivity is now falling."
        }
      ],
      cases: [
        {
          title: "Cedar Pharma Centralizes as the Lira Burns",
          scenario: "Cedar Pharma is a Beirut drug importer and distributor with 9 branch managers spread from Tripoli to Tyre. For years each branch manager set local prices and approved discounts, while head office handled only strategy. Since the lira collapsed, prices must be re-quoted in USD and adjusted almost daily as the market rate jumps, and the firm now distinguishes \"fresh dollar\" payments from \"lollar\" bank transfers. When branch managers priced independently, two branches sold the same antibiotic at rates 30% apart on the same morning, and the company lost money every time the lira moved before a sale closed. Revenues have fallen so far that the founder is weighing layoffs. The pharmaceutical-supply environment is now highly turbulent: supplier credit, capital controls on the company's frozen deposits, and exchange rates all shift week to week.",
          qs: [
            {
              q: "Cedar is moving pricing and discount authority from the branches up to head office. Name this element of organizational design, and use at least two lecture factors plus the crisis facts to justify the move.",
              a: "This is a shift toward CENTRALIZATION — concentrating decision making at upper levels. The table's centralizing factors fit: the firm faces a crisis and risk of company failure (collapsing revenues, threatened layoffs), and the decisions are no longer minor — daily USD re-pricing as the lira moves and the fresh-dollar/lollar distinction make pricing strategically critical. Decentralized pricing produced a 30% same-morning gap and losses whenever the rate jumped before a sale closed. Centralizing pricing lets head office set one rate tied to the daily market rate, so centralization is justified for these decisions."
            },
            {
              q: "The founder is considering layoffs and wants to cut managerial cost without losing oversight of the remaining staff. Using span of control, explain the trade-off he faces.",
              a: "Cutting managers means WIDENING the SPAN OF CONTROL of those who remain, which flattens the structure and lowers managerial cost — directly helpful when lira-denominated revenue has collapsed and the firm is weighing decruitment (layoffs). The trade-off from the span-of-control logic is that wider spans give each manager more employees to supervise, so oversight of each person becomes looser. The founder must balance the cost savings the crisis demands against the weaker per-employee supervision that wider spans create."
            },
            {
              q: "Head office now sets prices, but branches still need to react fast to local supplier shortages and fuel queues. Should Cedar become fully mechanistic, or mix mechanistic and organic features? Argue using the contingency factors.",
              a: "It should MIX, not go fully mechanistic. The environment is highly turbulent — volatile exchange rates, capital controls on frozen deposits, and erratic supplier credit — and the lecture says greater environmental uncertainty calls for the flexibility of an ORGANIC design. So Cedar should CENTRALIZE the pricing decision (a mechanistic move justified by the crisis) while keeping branches organic and decentralized on fast local matters such as supplier shortages and working around fuel queues. Centralization is a separate element from the overall mechanistic/organic profile, so Cedar can centralize critical pricing yet stay flexible where uncertainty demands speed."
            }
          ]
        },
        {
          title: "Naqi Dairy Reorganizes Around the Generator",
          scenario: "Naqi Dairy runs a milk-processing plant in the Bekaa that depends on the generator \"ishtirak\" because EDL now supplies only a few hours a day, and even the ishtirak limits the plant to a fixed amperage that cannot run all lines at once. Diesel for the generator is paid in fresh dollars while most workers are still paid in lira salaries that have lost most of their value. Historically Naqi was organized into permanent functional departments (pasteurization, packaging, maintenance, sales). To survive, management has reorganized crews around the daily power window: a single \"power-shift\" team now flexes across pasteurization, packaging, and maintenance during the hours power is available, led by one shift coordinator, with very few written rules so the team can improvise as fuel and amperage allow. Management also pulls specialists from each function onto a temporary six-month project to install a smaller, fuel-efficient line, while those specialists still report to their old department heads.",
          qs: [
            {
              q: "Naqi has dropped rigid functional crews for one cross-functional 'power-shift' team with wide latitude and few rules. Classify this shift on the mechanistic-organic spectrum, citing at least three elements and the power facts.",
              a: "Naqi has shifted from a MECHANISTIC toward a more ORGANIC structure. At least three elements show this: rigid departmentalization has given way to a CROSS-FUNCTIONAL team flexing across pasteurization, packaging, and maintenance; the single shift coordinator over the whole team reflects a WIDER SPAN OF CONTROL; and the 'very few written rules' so the team can improvise is LOW FORMALIZATION. This organic turn fits the turbulent environment — a fixed ishtirak amperage that cannot run all lines at once and only a few hours of EDL power demand the flexibility to improvise around the daily power window, which is exactly what organic designs provide."
            },
            {
              q: "Management pulls specialists from each function onto a six-month fuel-efficient-line project while they still report to their department heads. Name this design and the classic principle it strains.",
              a: "This is a MATRIX STRUCTURE — specialists from different functional departments assigned to work on a project (the new fuel-efficient line) while keeping their functional reporting line. It strains UNITY OF COMMAND, the principle that each person should report to only one manager: each specialist now answers to both their old department head and the project lead, so conflicting instructions are a built-in risk of the design."
            },
            {
              q: "A board member argues Naqi should instead keep its old rigid functional structure to maximize efficiency. Evaluate this using the contingency factors and Naqi's specific constraints.",
              a: "The argument is weak given Naqi's situation. The lecture ties structure to the ENVIRONMENT: stable, simple environments suit mechanistic/functional efficiency, but Naqi's environment is highly UNCERTAIN — a few hours of EDL power, a fixed-amperage ishtirak that cannot run all lines at once, diesel bought in fresh dollars, and lira salaries collapsing. Greater uncertainty calls for organic flexibility, so reorganizing crews around the daily power window is the better fit. A rigid functional structure would leave specialists idle when their line cannot run and could not improvise around fuel queues and amperage limits. Naqi could still preserve some functional efficiency for stable back-office work, but front-line production should stay organic while the crisis lasts."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Describe the six elements of organizational design, defining each and explaining the key managerial choice it involves.",
          outline: [
            "Work specialization: divide activities into separate tasks; economies vs. human diseconomies",
            "Departmentalization: basis for grouping jobs — functional, geographical, product, process, customer",
            "Chain of command (with authority — line vs. staff; responsibility; unity of command): who reports to whom",
            "Span of control: how many employees per manager; traditional 5–6 vs. contemporary no-magic-number; flatter vs. taller (4,096-employee example)",
            "Centralization vs. decentralization: where decisions are made; situational factors table",
            "Formalization: standardization and rule-guidedness of jobs; traditional high vs. today's discretion",
            "Conclude: choices combine into mechanistic vs. organic profiles"
          ],
          model: "Organizational design involves six elements. First, work specialization — dividing work activities into separate job tasks (division of labor); it exploits workers' diverse skills, but the exhibit shows productivity gains flatten and reverse when human diseconomies such as boredom and fatigue exceed the economies. Second, departmentalization — the basis by which jobs are grouped — with five forms: functional, geographical, product, process, and customer; managers choose the grouping that best fits how value is created. Third, the chain of command — the line of authority from upper levels to the lowest, clarifying who reports to whom — along with authority (line authority directs the work of employees, staff authority supports and advises), responsibility (the obligation to perform assigned duties), and unity of command (each person reports to only one manager). Fourth, the span of control — the number of employees a manager can efficiently and effectively manage; the traditional view capped it at five or six, while the contemporary view holds there is no magic number; the 4,096-employee example shows a span of 8 instead of 4 eliminates two levels and nearly 800 managers, so wider spans flatten and cheapen structures. Fifth, centralization versus decentralization — whether decision making is concentrated at upper levels or pushed down to lower-level employees; stable environments, minor decisions, and crisis favor centralization, while complex environments, capable and willing lower-level managers, significant decisions, and geographic dispersion favor decentralization. Sixth, formalization — how standardized jobs are and how far rules and procedures guide behavior; traditional management favored high formalization, but today's view allows more discretion. Together, the six choices produce the overall character of the structure — mechanistic when specialization, rigidity, narrow spans, centralization, and formalization are high; organic when the opposite holds."
        },
        {
          q: "Compare mechanistic and organic organizations, and explain how strategy, size, and environmental uncertainty determine which is appropriate.",
          outline: [
            "Mechanistic profile: high specialization, rigid departmentalization, clear chain of command, narrow spans, centralization, high formalization",
            "Organic profile: cross-functional and cross-hierarchical teams, free flow of information, wide spans, decentralization, low formalization",
            "Strategy: structure should facilitate goal achievement; strategy and structure closely linked; designs work best with matching strategies",
            "Size: larger → more mechanistic, but effect plateaus (~2,000 employees example)",
            "Environment: stable/simple → mechanistic effective; greater uncertainty → organic flexibility needed",
            "Conclusion: contingency logic — no universally best structure"
          ],
          model: "The mechanistic organization is the natural endpoint of tight design choices: high specialization, rigid departmentalization, a clear chain of command, narrow spans of control, centralization, and high formalization. The organic organization is its mirror image: cross-functional and cross-hierarchical teams, a free flow of information, wide spans of control, decentralization, and low formalization. Neither is inherently superior; three contingency factors decide. Strategy comes first: a structure should facilitate goal achievement, and because goals flow from strategy, strategy and structure are closely linked — research shows certain structural designs work best with particular organizational strategies, so a change in strategy typically demands a change in structure. Size matters next: larger organizations tend to be more mechanistic, but the relationship weakens past a threshold — at around 2,000 employees an organization is already fairly mechanistic, and adding another 500 employees will not change it much. Environmental uncertainty completes the picture: in stable and simple environments mechanistic designs can be more effective, while the greater the uncertainty, the more the organization needs the flexibility of an organic design — echoing Week 3's uncertainty matrix. The overall lesson is contingency thinking: managers should read their strategy, size, and environment and choose the structural profile that fits, rather than seeking one best structure for all situations."
        },
        {
          q: "Discuss the advantages and limitations of the three traditional organizational designs (simple, functional, divisional), and explain when a matrix or project structure becomes attractive.",
          outline: [
            "Simple: strengths — fast, flexible, inexpensive, clear accountability; weaknesses — inappropriate as organization grows; risky reliance on one person",
            "Functional: strengths — cost savings from specialization, economies of scale, minimal duplication, similar-task grouping; weaknesses — functional goal pursuit loses sight of the whole; insulated specialists",
            "Divisional: strengths — focus on results, division managers own products/services; weaknesses — duplication of activities and resources, higher costs, lower efficiency",
            "Matrix: specialists from functional departments assigned to projects (dual reporting); attractive for temporary, cross-functional work",
            "Project structure: employees continuously work on projects — for organizations whose work is ongoing projects",
            "Fit logic: growth pushes from simple → functional/divisional; dynamic project-based work pushes toward matrix/project"
          ],
          model: "The simple structure suits young, small organizations: it is fast, flexible, and inexpensive to maintain, with clear accountability concentrated near the owner-manager. Its weaknesses surface with success — it is not appropriate as the organization grows, and reliance on one person is risky. The functional structure groups similar specialties together and earns cost-saving advantages from specialization: economies of scale, minimal duplication of people and equipment, and employees grouped with others holding similar tasks. Its limitation is parochialism — the pursuit of functional goals can cause managers to lose sight of what is best for the overall organization, and functional specialists become insulated, understanding little of what other units do. The divisional structure organizes around products, services, or markets; its strength is a focus on results, since division managers are responsible for what happens to their products and services, but it duplicates activities and resources across divisions, increasing costs and reducing efficiency. When work is temporary and cross-functional, the matrix structure becomes attractive: specialists from different functional departments are assigned to one or more projects, gaining flexibility at the price of dual reporting lines that strain unity of command. When project work is not the exception but the business itself, the project structure — in which employees continuously work on projects — removes the dual hierarchy altogether. The progression reflects contingency logic: growth outgrows the simple structure, stable efficiency favors functional forms, diversified results-accountability favors divisions, and dynamic, cross-disciplinary work favors matrix and project designs."
        }
      ]
    },
    {
      id: "w8",
      week: 8,
      title: "Managing Human Resources",
      blurb: "The HRM process: planning, hiring, developing, and retaining competent employees.",
      sections: [
        {
          h: "The HRM Process",
          blocks: [
            {
              t: "p",
              text: "To ensure the organization has qualified people to perform all the work, eight HRM activities are split into three major groups: (1) ensuring that competent employees are identified and selected — HR planning, recruitment (and decruitment), selection; (2) providing employees with up-to-date knowledge and skills — orientation, training; (3) ensuring that the organization retains competent and high-performing employees — performance management, compensation and benefits, career development. The whole process operates within the external environment."
            }
          ]
        },
        {
          h: "Identifying and Selecting Competent Employees",
          blocks: [
            {
              t: "def",
              term: "Human resource planning",
              d: "Ensuring that the organization has the right number and kinds of capable people in the right places and at the right times. Two steps: assessing current human resources, and meeting future HR needs (determined by the organization's mission, goals, and strategies)."
            },
            {
              t: "def",
              term: "Job analysis",
              d: "An assessment that defines jobs and the behaviors necessary to perform them."
            },
            {
              t: "def",
              term: "Job description (position description)",
              d: "A written statement that describes a job."
            },
            {
              t: "def",
              term: "Job specifications",
              d: "A written statement of the minimum qualifications a person must possess to perform a given job successfully."
            },
            {
              t: "def",
              term: "Recruitment",
              d: "Locating, identifying, and attracting capable applicants."
            },
            {
              t: "def",
              term: "Decruitment",
              d: "Reducing an organization's workforce."
            },
            {
              t: "def",
              term: "Selection",
              d: "Screening job applicants to ensure that the most appropriate candidates are hired. Selection is about PREDICTING which applicants will be successful if hired; it succeeds when you hire someone who turns out to be a good employee, or reject someone who would have been a bad one."
            },
            {
              t: "def",
              term: "Validity (of a selection device)",
              d: "A proven relationship between the selection device and some relevant criterion."
            },
            {
              t: "def",
              term: "Reliability (of a selection device)",
              d: "The device measures the same thing consistently."
            }
          ]
        },
        {
          h: "Providing Skills and Knowledge",
          blocks: [
            {
              t: "def",
              term: "Orientation",
              d: "Introducing a new employee to his or her job and the organization. WORK UNIT orientation familiarizes the employee with the goals of the work unit and their specific job; ORGANIZATION orientation informs them about the company's goals, history, philosophy, procedures, and rules."
            },
            {
              t: "list",
              title: "Types of training",
              items: [
                "Onboarding or new hire",
                "Interpersonal skills",
                "Profession or industry-specific",
                "Executive development",
                "Management or supervisory",
                "Information technology or systems",
                "Customer service",
                "Mandatory compliance (e.g., cybersecurity, sexual harassment)"
              ]
            },
            {
              t: "def",
              term: "Employee development",
              d: "Whereas training focuses on skills for your CURRENT job, development activities prepare you for your FUTURE roles within the company. Example: Microsoft provides a range of development activities (Exhibit 11-10)."
            }
          ]
        },
        {
          h: "Retaining Competent, High-Performing Employees",
          blocks: [
            {
              t: "def",
              term: "Performance appraisal/evaluation",
              d: "The practice of providing job feedback to an employee that may be used to improve performance and for compensation and promotion decisions. Many companies find the ANNUAL review not timely enough; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance."
            },
            {
              t: "def",
              term: "Electronic performance monitoring",
              d: "The use of electronic instruments to collect, store, analyze, and report individual or group performance. Widely used in call centers, where supervisors track workflow in real time — metrics like average call handling time, total calls handled, and time on breaks."
            },
            {
              t: "def",
              term: "Skill-based pay",
              d: "A pay system that rewards employees for the job skills they can demonstrate."
            },
            {
              t: "def",
              term: "Variable pay",
              d: "A pay system in which an individual's compensation is contingent on performance."
            },
            {
              t: "p",
              text: "What determines pay and benefits: factors include the employee's tenure and performance, the kind of job performed, the kind of business/industry, the size of the company, whether the business is labor or capital intensive, management's philosophy toward pay, geographic location, company profitability, and unionization. Other pay debates: bonuses vs. annual pay raises; pay secrecy vs. transparency; benefit options."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Which document is a written statement that DESCRIBES a job itself?",
          o: [
            "Job description",
            "Job specification",
            "Job analysis",
            "Job evaluation"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes — focus on the statement that lays out the job's duties.",
            "That document lists the minimum qualifications a PERSON must possess, not what the job is.",
            "That is the assessment that defines jobs and required behaviors, not the written statement of the job.",
            "That term is not the written statement of a job's duties; think about which document simply describes the job."
          ],
          e: "The job description is a written statement that describes the job; job specifications describe the person's minimum qualifications; job analysis is the assessment that defines jobs and the behaviors needed."
        },
        {
          q: "Reducing an organization's workforce is called…",
          o: [
            "Recruitment",
            "Decruitment",
            "Selection",
            "Orientation"
          ],
          a: 1,
          tier: "easy",
          h: [
            "That term means locating, identifying, and attracting capable applicants — the opposite direction of shrinking.",
            "Correct — this is the workforce-reduction term.",
            "That is screening applicants to hire the most appropriate, not reducing headcount.",
            "That introduces a new employee to the job and organization, not reducing the workforce."
          ],
          e: "Decruitment = reducing an organization's workforce; recruitment = locating, identifying, and attracting capable applicants."
        },
        {
          q: "Reliability of a selection device refers to whether the device…",
          o: [
            "has a proven relationship with a relevant criterion",
            "measures the same thing consistently",
            "is the cheapest available option",
            "is required by labor law"
          ],
          a: 1,
          tier: "easy",
          h: [
            "That describes validity — a proven relationship with a criterion such as job performance.",
            "Right — consistency of measurement is the core idea.",
            "Cost is not part of either technical property of a selection device.",
            "Legal requirement is not what reliability measures; think about consistency of results."
          ],
          e: "Reliability means the device measures the same thing consistently; validity is a proven relationship between the device and a relevant criterion."
        },
        {
          q: "Introducing a new employee to his or her job and the organization is called…",
          o: [
            "Orientation",
            "Employee development",
            "Job analysis",
            "Decruitment"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — this is the welcome-and-introduce activity.",
            "That prepares employees for FUTURE roles, not the initial introduction to the job.",
            "That is the assessment defining jobs and required behaviors, not introducing a new hire.",
            "That means reducing the workforce, not bringing a new employee on board."
          ],
          e: "Orientation introduces a new employee to the job and the organization; it has a work unit component and an organization component."
        },
        {
          q: "Skill-based pay is a pay system that rewards employees for…",
          o: [
            "the number of years they have worked",
            "the job skills they can demonstrate",
            "their performance results only",
            "the profits of the company"
          ],
          a: 1,
          tier: "easy",
          h: [
            "Rewarding years served describes seniority-based pay, not this system.",
            "Right — demonstrable skills drive the reward here.",
            "Tying pay to performance results describes variable pay, not skill-based pay.",
            "Sharing company profits is a different arrangement; think about what employees can demonstrate."
          ],
          e: "Skill-based pay rewards employees for the job skills they can demonstrate; variable pay makes compensation contingent on performance."
        },
        {
          q: "Human resource planning is best defined as ensuring the organization has…",
          o: [
            "the right number and kinds of capable people in the right places at the right times",
            "the lowest possible labor costs at all times",
            "a fully unionized workforce",
            "an annual performance review for every employee"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — it is about the right people, places, and times.",
            "Minimizing labor cost is not the definition of HR planning.",
            "Unionization is a pay determinant, not the definition of HR planning.",
            "Annual reviews belong to performance appraisal, not to HR planning."
          ],
          e: "HR planning ensures the right number and kinds of capable people in the right places at the right times, via assessing current HR and meeting future needs."
        },
        {
          q: "A bank in Beirut studies exactly what its teller job involves and the behaviors a teller needs to do it well, before writing any hiring documents. This first step is…",
          o: [
            "job analysis",
            "job specification",
            "recruitment",
            "orientation"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — defining the job and its required behaviors is this assessment.",
            "That is the written list of minimum qualifications produced LATER, not the study of the job itself.",
            "That comes after, when the bank attracts applicants; here it is still studying the job.",
            "That happens after hiring, when a new teller is introduced to the job and bank."
          ],
          e: "Job analysis is the assessment that defines jobs and the behaviors necessary to perform them; the description and specification are written afterward."
        },
        {
          q: "A Lebanese firm posts ads, attends a university job fair, and offers an employee-referral bonus to attract applicants for open roles. These activities are…",
          o: [
            "selection",
            "recruitment",
            "decruitment",
            "performance appraisal"
          ],
          a: 1,
          tier: "medium",
          h: [
            "Screening applicants to choose the best comes after; here the firm is still attracting them.",
            "Correct — locating, identifying, and attracting applicants is exactly this.",
            "That means reducing the workforce — the opposite of drawing applicants in.",
            "That provides job feedback to current employees, not attracting new applicants."
          ],
          e: "Recruitment is locating, identifying, and attracting capable applicants — ads, job fairs, and referral bonuses are recruitment methods."
        },
        {
          q: "During hyperinflation a company gives operators raises tied to mastering additional machines and a separate bonus paid only when they exceed output targets. The two pay systems are, respectively…",
          o: [
            "variable pay and skill-based pay",
            "skill-based pay and variable pay",
            "seniority pay and skill-based pay",
            "variable pay and seniority pay"
          ],
          a: 1,
          tier: "medium",
          h: [
            "You have the two correct systems but reversed; the raise for mastering machines rewards demonstrable skills.",
            "Correct — mastering machines is skill-based pay; the output bonus is variable pay.",
            "Years served is not what either reward is based on here.",
            "Neither reward here is based on years served; both are tied to skills and to performance."
          ],
          e: "Rewarding demonstrable skills (mastering machines) is skill-based pay; a bonus contingent on performance (output targets) is variable pay."
        },
        {
          q: "A vendor's aptitude test gives the same applicant a high score one week and a low score the next during a pilot. Before using it, the company should conclude the test currently lacks…",
          o: [
            "validity",
            "reliability",
            "transparency",
            "formalization"
          ],
          a: 1,
          tier: "medium",
          h: [
            "A proven link to job performance is validity; the pilot's symptom here is inconsistent scores, not an unproven criterion link.",
            "Correct — wildly different scores on retest show inconsistent measurement.",
            "Openness about pay or process is unrelated to the test's measurement consistency.",
            "Degree of written rules is unrelated; the issue is that scores are not consistent."
          ],
          e: "Inconsistent scores on retest show the test fails reliability — it does not measure the same thing consistently; an unreliable test cannot be a sound predictor."
        },
        {
          q: "New hires at a Tripoli plant are told about the plant's specific goals and their own job duties, then separately about the company's history, philosophy, and rules. These are, in order…",
          o: [
            "work unit orientation, then organization orientation",
            "organization orientation, then work unit orientation",
            "training, then employee development",
            "compliance training, then onboarding"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — unit goals and the specific job first, company-wide matters second.",
            "You have the two right pieces reversed; the unit goals and specific job is the work unit component.",
            "These are both orientation components, not training versus development.",
            "These describe types of training, not the two components of orientation."
          ],
          e: "Work unit orientation covers the unit's goals and the specific job; organization orientation covers the company's goals, history, philosophy, procedures, and rules."
        },
        {
          q: "An employer wants to prepare a promising analyst for a department-head role she may hold in three years, not just sharpen her current tasks. This is best described as…",
          o: [
            "employee development",
            "orientation",
            "decruitment",
            "job specification"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — preparing for FUTURE roles is development.",
            "That introduces a new employee to a current job and the firm, not preparing for a future role.",
            "That means reducing the workforce, not developing an employee for advancement.",
            "That is the written list of a job's minimum qualifications, not preparing someone for the future."
          ],
          e: "Development activities prepare employees for future roles, whereas training focuses on skills for the current job."
        },
        {
          q: "A Lebanese exporter's coding test produces perfectly consistent scores every time, but those scores show no proven link to how well hires later perform on the job. The most accurate verdict is that the test is…",
          o: [
            "reliable but not yet shown to be valid",
            "valid but not reliable",
            "both valid and reliable",
            "neither valid nor reliable"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — consistent scores show reliability, but with no proven criterion link, validity is unestablished.",
            "Consistent scores are exactly the evidence of reliability, so calling it unreliable contradicts the case.",
            "A proven relationship to job performance is missing, so validity cannot yet be claimed.",
            "The case explicitly says scores are perfectly consistent, so at least one property clearly holds."
          ],
          e: "Consistent scores establish reliability; without a proven relationship to a relevant criterion (job performance), validity is not demonstrated. A reliable test can still be useless if invalid."
        },
        {
          q: "Two firms each fill the same warehouse role yet pay very differently. Which single explanation is MOST consistent with the lecture's pay determinants rather than an irrelevant factor?",
          o: [
            "One firm is far more profitable and more capital intensive than the other",
            "One firm's HR manager has more social media followers",
            "One firm uses a more expensive HR software brand",
            "One firm's owner prefers a particular color scheme"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — company profitability and labor-versus-capital intensity are listed pay determinants.",
            "Personal follower counts are not among the factors that determine pay and benefits.",
            "Software brand is not a recognized pay determinant in the lecture.",
            "Aesthetic preferences are not among the factors determining pay and benefits."
          ],
          e: "Pay determinants include profitability, kind of business/industry, company size, labor vs. capital intensity, management's pay philosophy, location, tenure/performance, and unionization."
        },
        {
          q: "A manager argues: \"Our annual review is enough; we tell people once a year exactly where they stand.\" Based on the lecture, the strongest critique is that…",
          o: [
            "annual reviews are illegal in most countries",
            "the annual review is often not timely enough; immediate feedback and smaller steps lead more quickly to improvement",
            "performance feedback should never affect compensation decisions",
            "employees actually perform better with no feedback at all"
          ],
          a: 1,
          tier: "hard",
          h: [
            "The lecture raises timeliness, not legality, as the problem with annual reviews.",
            "Correct — timeliness is the core issue; frequent, immediate feedback works faster.",
            "Appraisal legitimately informs compensation and promotion; that is not the critique.",
            "The point is more timely feedback, not the absence of feedback."
          ],
          e: "Many companies find the annual review not timely enough; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance."
        },
        {
          q: "A call center installs dashboards that collect, store, analyze, and report each agent's average handling time, calls handled, and break minutes in real time. The best way to evaluate this tool is that it…",
          o: [
            "is electronic performance monitoring, which can enable timely feedback but also intensifies supervision",
            "is a form of variable pay tied directly to output",
            "replaces the need for any job analysis",
            "is the same thing as organization orientation"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — it is EPM, useful for real-time feedback yet heavier supervision.",
            "Collecting and reporting metrics is monitoring, not a pay system that makes compensation contingent on performance.",
            "Defining jobs and required behaviors is still needed; monitoring does not replace it.",
            "Introducing employees to the company is a different activity entirely from tracking performance metrics."
          ],
          e: "Electronic performance monitoring uses electronic instruments to collect, store, analyze, and report performance (classic call-center metrics); it can power timely feedback but also intensifies supervision."
        },
        {
          q: "A firm whose lira salaries have lost about 90% of their value keeps paying the lira base wage but adds a monthly \"fresh dollar\" cash top-up tied to attendance, hoping to stop its best people from emigrating. In HRM terms, this move is BEST described as:",
          o: [
            "a job analysis that redefines each job description",
            "decruitment, because it changes how the workforce is paid",
            "a compensation-and-benefits redesign aimed at retention and curbing voluntary turnover",
            "a selection device whose reliability must be re-validated"
          ],
          a: 2,
          tier: "hard",
          h: [
            "Job analysis defines a job's duties and required qualifications — this is about HOW people are paid, not what the job is.",
            "Decruitment means REDUCING the workforce (layoffs, attrition); a top-up is meant to KEEP staff, not cut them.",
            "Right — it is a compensation/benefits decision used here as a retention lever.",
            "Selection devices screen job APPLICANTS; a top-up for current employees isn't a selection test."
          ],
          e: "This is a redesign of compensation and benefits — the HRM activity that sets pay, incentives, and rewards. With the lira collapsed and skilled staff emigrating (brain drain), the firm uses an attendance-linked fresh-dollar top-up to improve retention and reduce voluntary turnover, which the lecture identifies as the purpose of competitive compensation."
        },
        {
          q: "Two branches hire for the same stressful role. Branch A's recruiters describe only the perks; Branch B's recruiters give a candid preview of the hard parts AND the perks. Branch B's new hires quit far less. Which lecture concept BEST explains Branch B's result?",
          o: [
            "Branch B used a more reliable selection test, so its scores were more consistent",
            "Branch B gave a realistic job preview (RJP); honest information about negatives as well as positives sets accurate expectations, improving fit and reducing early turnover",
            "Branch B had higher external validity, so its job ads reached more people",
            "Branch B simply paid more, which is the only real driver of retention"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Reliability is about a test giving consistent scores — that is not what 'describing the hard parts honestly' means.",
            "Right idea — that's the one.",
            "'External validity' isn't the issue here, and this is about expectations set during recruiting, not how far an ad reaches.",
            "Pay isn't described as different between the branches — the only difference stated is honesty about the job's realities."
          ],
          e: "A realistic job preview (RJP) gives candidates both the favorable AND the unfavorable information about a job. By setting accurate expectations it improves person–job fit and reduces the early turnover that occurs when new hires are surprised by realities they were never told — exactly Branch B's advantage."
        }
      ],
      cases: [
        {
          title: "Rebuilding the Workforce at Cedar Microfinance",
          scenario: "Cedar Microfinance, a Beirut lender, has been battered by the banking crisis. Half its loan officers emigrated during the brain drain, lured abroad after their lira salaries lost most of their value to monthly hyperinflation. Salaries are still credited to local accounts in \"lollars\" (trapped bank-dollars) subject to withdrawal limits, while landlords and fuel sellers now demand \"fresh\" cash dollars. The board wants to rebuild the loan-officer team but few qualified applicants remain in the country, and those who apply are wary that another wave of decruitment could follow. The head of HR, Rania, must first define what a modern loan-officer job now requires, attract scarce talent, and redesign pay so it actually retains people. Her team also pilots a new judgment test for applicants; in the pilot, the same candidates scored very differently when retested two weeks later.",
          qs: [
            {
              q: "Rania starts by reassessing exactly what the loan-officer job now involves and the behaviors needed, then writes the minimum qualifications an applicant must possess. Name these two HRM outputs and explain how each connects to recruiting in a brain-drain market.",
              a: "Reassessing what the job involves and the behaviors needed is JOB ANALYSIS (an assessment that defines jobs and the behaviors necessary to perform them). The written list of minimum qualifications an applicant must possess is the JOB SPECIFICATION. In a brain-drain market where skilled loan officers have emigrated, accurate job analysis lets Rania see which behaviors truly matter so she does not over-specify; a realistic job specification keeps the minimum qualifications attainable for the shrunken local applicant pool, widening the field of capable applicants she can recruit rather than screening out the few who remain."
            },
            {
              q: "The board wants to recruit aggressively but applicants fear another round of decruitment. Distinguish recruitment from decruitment, and explain the retention tension Cedar faces given lira-eroded, lollar-paid salaries.",
              a: "RECRUITMENT is locating, identifying, and attracting capable applicants; DECRUITMENT is reducing an organization's workforce. Cedar is trying to recruit at the same time its crisis history signals possible decruitment, which deters applicants. The deeper problem is retention: salaries paid in lollars under withdrawal limits and eroded monthly by lira hyperinflation give little real value, so even successfully recruited officers will emigrate (the brain drain) unless retention is addressed. Recruiting into a leaking bucket wastes effort; the HRM third group (retention via compensation) must work alongside recruitment."
            },
            {
              q: "Evaluate the new judgment test on the two criteria a selection device must meet, citing the pilot result, and connect this to what selection is fundamentally about.",
              a: "RELIABILITY (the device measures the same thing consistently) is violated: the same candidates scored very differently two weeks apart, so the test fails this criterion. VALIDITY (a proven relationship between the device and a relevant criterion such as later loan-officer performance) is therefore unestablished, since an unstable measure cannot maintain a proven link to any criterion. Because selection is fundamentally about PREDICTING which applicants will succeed if hired, a test whose scores are essentially noise cannot predict anything and should not be used until it is shown to be both reliable and valid."
            }
          ]
        },
        {
          title: "Paying People When the Lira Collapses",
          scenario: "Levant Logistics runs warehouses and delivery fleets across Lebanon. Its drivers and operators were paid fixed lira salaries that hyperinflation has reduced to a fraction of their old real value, and skilled mechanics keep resigning to emigrate. Attendance has become erratic: with EDL providing only a few hours of grid power, the depot runs on a diesel generator \"ishtirak,\" and drivers spend hours in fuel queues, sometimes missing shifts. Management proposes redesigning compensation: a base partly paid in \"fresh\" cash US dollars, a premium for mechanics who certify on more vehicle systems, and a bonus tied to on-time deliveries. It also wants better, more frequent performance feedback, since the current once-a-year review tells drivers about problems long after they happened. HR must justify the redesign using the lecture's pay and appraisal concepts.",
          qs: [
            {
              q: "Classify the two performance-linked elements of the proposed pay package using the lecture's exact terms, and explain why each suits a crisis where mechanics are emigrating.",
              a: "The premium for mechanics who certify on more vehicle systems is SKILL-BASED PAY (rewarding employees for the job skills they can demonstrate); the bonus tied to on-time deliveries is VARIABLE PAY (compensation contingent on performance). In a crisis where skilled mechanics are part of the brain drain, skill-based pay rewards and retains versatile mechanics and encourages remaining staff to build scarce skills, while variable pay channels limited funds toward measurable results so the firm pays more when performance (on-time delivery) actually materializes."
            },
            {
              q: "Using the pay-determinant factors, justify paying part of the base in \"fresh\" dollars rather than only in lira, and identify three legitimate determinants at play.",
              a: "Pay and benefits depend on factors such as geographic location, the kind of business/industry, company profitability, whether the business is labor or capital intensive, management's philosophy toward pay, and the employee's tenure and performance. Paying part of the base in fresh cash dollars responds to the LOCATION/economic environment (a collapsed lira and lollar withdrawal limits mean lira-only pay loses real value monthly), to management's PAY PHILOSOPHY (choosing to protect real wages to retain staff), and to the firm's PROFITABILITY/cost structure as a labor-intensive logistics business that must keep drivers and mechanics to operate. Fresh dollars hold value where lira and lollars do not, so the redesign keeps real compensation competitive enough to fight emigration."
            },
            {
              q: "The depot's attendance problems stem from fuel queues and generator-dependent shifts, yet drivers only hear of dissatisfaction at the annual review. What appraisal change does the lecture support, and why is it especially important under these crisis conditions?",
              a: "The lecture holds that the annual performance review is often not timely enough to make an impact; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance. Under crisis conditions where attendance is disrupted by fuel queues and EDL grid failure forcing generator-dependent shifts, timely feedback lets managers and drivers jointly distinguish genuine performance problems from unavoidable infrastructure disruptions and adjust schedules quickly, rather than discovering months later at an annual review that problems went unaddressed. Frequent feedback also supports retention by showing drivers the firm is responsive while they weigh emigration."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Describe the human resource management process. Identify its three major groups of activities and the eight activities, and explain how the process connects to the organization's strategy and external environment.",
          outline: [
            "Purpose: ensure the organization has qualified people to perform all the work",
            "Group 1 — identify & select competent employees: HR planning, recruitment/decruitment, selection",
            "Group 2 — provide up-to-date knowledge and skills: orientation, training",
            "Group 3 — retain competent high performers: performance management, compensation & benefits, career development",
            "Strategy link: future HR needs are determined by mission, goals, and strategies",
            "Environment: the whole process sits within the external environment (labor markets, laws, etc.)"
          ],
          model: "The HRM process exists to ensure an organization has qualified people to perform all the work, through eight activities in three major groups. The first group identifies and selects competent employees: human resource planning ensures the right number and kinds of capable people in the right places at the right times (by assessing current human resources and meeting future needs); recruitment locates, identifies, and attracts capable applicants — or, when the workforce must shrink, decruitment reduces it; and selection screens applicants so the most appropriate candidates are hired, using devices that must be valid and reliable. The second group provides employees with up-to-date knowledge and skills: orientation introduces the new employee to the job and the organization (work unit and organization orientation), and training builds capability across types ranging from onboarding and interpersonal skills to industry-specific, IT, customer service, and mandatory compliance training; employee development extends this by preparing people for future roles rather than the current job. The third group retains competent, high-performing employees: performance management provides feedback used for improvement and for compensation and promotion decisions; compensation and benefits (including skill-based and variable pay) reward contribution; and career development supports progression. The process is not freestanding: future HR needs are determined by the organization's mission, goals, and strategies, so HRM implements strategy through people, and the entire process operates within the external environment, which shapes labor supply, expectations, and legal constraints."
        },
        {
          q: "“An unreliable selection test is useless, but a reliable test can still be useless.” Explain this statement using the concepts of validity and reliability, and discuss why selection should be understood as prediction.",
          outline: [
            "Define selection: screening applicants to hire the most appropriate candidates; success = hiring those who become good employees / rejecting would-be bad ones",
            "Selection as prediction: forecasting future job success from present indicators",
            "Reliability: device measures the same thing consistently; unreliable scores are noise → useless",
            "Validity: proven relationship between the device and a relevant criterion (job performance)",
            "A reliable test may consistently measure something irrelevant → reliable but invalid → still useless",
            "Implication: organizations must evidence both properties before using a device"
          ],
          model: "Selection means screening job applicants to ensure the most appropriate candidates are hired, and the lecture frames it as prediction: a selection decision succeeds when you hire an applicant who turns out to be a good employee or reject one who would have been a bad one. Prediction imposes two technical requirements on any selection device. Reliability asks whether the device measures the same thing consistently: if the same applicant scores very differently on different occasions, the scores are noise, and nothing can be predicted from noise — hence an unreliable test is useless. Validity asks whether there is a proven relationship between the selection device and some relevant criterion, typically success on the job. Reliability alone does not guarantee this: a test can yield perfectly stable scores while measuring something irrelevant to performance — consistently measuring the wrong thing. Such a test is reliable but invalid, and therefore equally useless for prediction (and potentially harmful, since it systematically screens on an irrelevant attribute). The statement is thus correct: reliability is necessary but not sufficient, and validity is the decisive property — but validity itself presupposes reliability, since an unstable measure cannot maintain a proven relationship with any criterion. The practical lesson is that organizations should demand evidence of both properties — not vendor claims — before letting a device decide who joins the workforce."
        },
        {
          q: "Discuss how organizations can retain competent, high-performing employees. Cover performance feedback (including the shift away from annual reviews and the rise of electronic performance monitoring) and compensation design (skill-based pay, variable pay, and the factors that determine pay).",
          outline: [
            "Retention is the third HRM group: performance management, compensation & benefits, career development",
            "Performance appraisal: feedback for improvement + input to compensation/promotion",
            "Annual review problem: not timely; immediate feedback and smaller steps work faster",
            "Electronic performance monitoring: definition; call-center example (handling time, calls, breaks); enables real-time feedback but changes the feel of supervision",
            "Compensation: skill-based pay (rewards demonstrable skills) and variable pay (contingent on performance)",
            "Pay determinants: tenure/performance, kind of job, industry, size, labor vs. capital intensity, management philosophy, location, profitability, unionization; debates — bonuses vs. raises, pay secrecy vs. transparency, benefit options",
            "Development: preparing for future roles (e.g., Microsoft's activities) supports retention"
          ],
          model: "Retaining competent, high-performing employees is the third group of HRM activities, built on performance management, compensation and benefits, and career development. Performance appraisal provides job feedback that can improve performance and inform compensation and promotion decisions — but many companies have learned that the annual review is not timely enough to make an impact; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance. Technology now makes such immediacy possible: electronic performance monitoring uses electronic instruments to collect, store, analyze, and report individual or group performance — in call centers, supervisors track workflow in real time through metrics like average call handling time, total calls handled, and time on breaks. Continuous data can feed continuous feedback, though it also intensifies supervision, so organizations must use it to develop rather than merely to police. On the reward side, pay can be designed to retain and motivate: skill-based pay rewards employees for the job skills they can demonstrate, encouraging versatility, while variable pay makes compensation contingent on performance, tying rewards to contribution. What people are paid reflects many factors — the employee's tenure and performance, the kind of job and industry, company size and profitability, whether the business is labor or capital intensive, management's philosophy toward pay, geographic location, and unionization — and organizations face live design debates between bonuses and annual raises, pay secrecy and transparency, and the right menu of benefit options. Finally, development activities that prepare employees for future roles (as in Microsoft's portfolio of development programs) give high performers a reason to build their future inside the organization rather than outside it."
        }
      ]
    },
    {
      id: "w9",
      week: 9,
      title: "Change Management",
      blurb: "Types of change, why people resist, and the models for leading change.",
      sections: [
        {
          h: "The Case for Change",
          blocks: [
            {
              t: "def",
              term: "Organizational change",
              d: "Any alteration of people, structure, or technology in an organization."
            },
            {
              t: "def",
              term: "Change agent",
              d: "Someone who acts as a catalyst and assumes the responsibility for managing the change process."
            },
            {
              t: "def",
              term: "VUCA",
              d: "Volatility, Uncertainty, Complexity, and Ambiguity — in today's world, change is the only constant, and managers must deal with that reality."
            },
            {
              t: "p",
              text: "External forces for change: consumer needs and wants, technology, the economy, new governmental laws. Internal forces: new organizational strategy, new equipment, employee attitudes, composition of the workforce."
            },
            {
              t: "def",
              term: "White-water rapids metaphor",
              d: "The lack of environmental stability and predictability requires that managers and organizations continually adapt and manage change actively to survive."
            }
          ]
        },
        {
          h: "Five Types of Change",
          blocks: [
            {
              t: "table",
              title: "Five types of change",
              cols: [
                "Type",
                "What changes"
              ],
              rows: [
                [
                  "Strategy",
                  "Modifying the approach to ensuring the organization's success — failure to change strategy when circumstances dictate (e.g., competition) can undermine success or survival"
                ],
                [
                  "Structure",
                  "Structural components and structural design"
                ],
                [
                  "Technology",
                  "Work processes, methods and equipment — new tools, automation, computerization, the Internet of Things"
                ],
                [
                  "People",
                  "Attitudes, expectations, perceptions and behavior — individual and group"
                ],
                [
                  "Culture",
                  "Shifting in response to internal or external factors — very difficult, but possible"
                ]
              ]
            },
            {
              t: "p",
              text: "Culture is easier to change when: a dramatic crisis occurs; leadership changes hands; the organization is young and small; the culture is weak. Ways of changing culture: lead by example, craft new narratives, support champions, redesign socialization, align rewards, clarify expectations, shift subcultures, build consensus and trust."
            },
            {
              t: "def",
              term: "Organizational development (OD)",
              d: "Change methods that focus on people and the nature and quality of interpersonal work relationships. Popular OD techniques: SENSITIVITY TRAINING (changing behavior through unstructured group interaction), SURVEY FEEDBACK (assessing attitudes and perceptions, identifying discrepancies, and resolving differences using survey information in feedback groups), TEAM BUILDING (activities that help team members learn how each member thinks and works), PROCESS CONSULTATION (an outside consultant helps the manager understand how interpersonal processes are affecting the way work is done), and INTERGROUP DEVELOPMENT (changing the attitudes, stereotypes, and perceptions that work groups have about each other)."
            }
          ]
        },
        {
          h: "Reactions and Resistance to Change",
          blocks: [
            {
              t: "list",
              title: "Possible reactions to change (Elizur and Guttman, 1976)",
              items: [
                "Cognitive: opinions regarding the usefulness and necessity of change, and the knowledge required to manage it",
                "Affective: feelings of satisfaction or anxiety about change",
                "Instrumental: actions already taken or to be taken to manage change"
              ]
            },
            {
              t: "table",
              title: "How do people resist change?",
              cols: [
                "Active and overt resistance",
                "Passive and covert resistance"
              ],
              rows: [
                [
                  "Immediate",
                  "Postponed"
                ],
                [
                  "Complaints and protests",
                  "Reduced effort; mistakes"
                ],
                [
                  "Visible actions",
                  "Gossips; absenteeism"
                ]
              ]
            },
            {
              t: "list",
              title: "Why do people resist change?",
              items: [
                "Uncertainty",
                "Habit",
                "Fear of loss",
                "Belief that the change is inconsistent with the goals of the organization"
              ]
            },
            {
              t: "def",
              term: "Reaction curve: Kübler-Ross' grief model",
              d: "Stages over time — Shock (surprised by the event) → Denial (looking for clues that this is not true) → Frustration (recognizes things are different; sometimes angry) → Depression (bad mood, lack of energy) → Experimentation (first engagement with the new situation) → Decision (learning to work in the new situation; more positive) → Integration (changes integrated; a new person)."
            },
            {
              t: "table",
              title: "How to help resisters: Scott & Jaffe's Resistance Cycle (1988)",
              cols: [
                "Stage",
                "What happens",
                "How to help"
              ],
              rows: [
                [
                  "Denial",
                  "Refuses to believe anything needs to change",
                  "Make them aware of reality"
                ],
                [
                  "Resistance",
                  "Anger, depression, mourning the past",
                  "Individuals need time to express their feelings"
                ],
                [
                  "Exploration",
                  "Begins to accept change, learns and experiments with new things",
                  "Encourage individuals and let them focus"
                ],
                [
                  "Commitment",
                  "Adapts to the new environment",
                  "Celebrate successes"
                ]
              ]
            },
            {
              t: "table",
              title: "Techniques for reducing resistance to change",
              cols: [
                "Technique",
                "When used",
                "Advantage",
                "Disadvantage"
              ],
              rows: [
                [
                  "Education and communication",
                  "When resistance is due to misinformation",
                  "Clear up misunderstandings",
                  "May not work when mutual trust and credibility are lacking"
                ],
                [
                  "Participation",
                  "When resisters have the expertise to make a contribution",
                  "Increase involvement and acceptance",
                  "Time-consuming; has potential for a poor solution"
                ],
                [
                  "Facilitation and support",
                  "When resisters are fearful and anxiety ridden",
                  "Can facilitate needed adjustments",
                  "Expensive; no guarantee of success"
                ],
                [
                  "Negotiation",
                  "When resistance comes from a powerful group",
                  "Can “buy” commitment",
                  "Potentially high cost; opens doors for others to apply pressure too"
                ],
                [
                  "Manipulation and co-optation",
                  "When a powerful group's endorsement is needed",
                  "Inexpensive, easy way to gain support",
                  "Can backfire, causing change agent to lose credibility"
                ],
                [
                  "Coercion",
                  "When a powerful group's endorsement is needed",
                  "Inexpensive, easy way to gain support",
                  "May be illegal; may undermine change agent's credibility"
                ]
              ]
            }
          ]
        },
        {
          h: "Models for Implementing Change",
          blocks: [
            {
              t: "def",
              term: "Lewin's model (1947): Unfreezing → Changing → Refreezing",
              d: "UNFREEZING: recognize the need for change; determine what needs to change; ensure management supports the change; manage and understand doubts and concerns. CHANGING: plan for change; implement change; help employees learn new concepts and perspectives. REFREEZING: changes are reinforced and stabilized; integrate changes into new ways of doing things; develop ways to sustain change; celebrate success."
            },
            {
              t: "list",
              title: "Kotter's 8 steps for implementing change (1995)",
              items: [
                "1. Create urgency",
                "2. Form a coalition",
                "3. Create a vision",
                "4. Communicate the vision",
                "5. Empower action",
                "6. Generate short-term wins",
                "7. Consolidate gains",
                "8. Anchor in culture"
              ]
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "A change agent is best described as someone who…",
          o: [
            "acts as a catalyst and assumes responsibility for managing the change process",
            "resists change to protect the organization's traditions",
            "approves budgets for new equipment purchases",
            "audits the organization after a change is complete"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — the catalyst who owns the change process.",
            "That describes a resister, not the person driving the change; reread who carries responsibility for the process.",
            "Approving budgets is a financial role; the term is about catalyzing and managing the change itself.",
            "Auditing afterward is not catalyzing; think about who is responsible during the process, not after it."
          ],
          e: "A change agent acts as a catalyst and assumes responsibility for managing the change process."
        },
        {
          q: "In Lewin's three-step model, which is the correct order of the phases?",
          o: [
            "Unfreezing → Changing → Refreezing",
            "Refreezing → Changing → Unfreezing",
            "Changing → Unfreezing → Refreezing",
            "Unfreezing → Refreezing → Changing"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — prepare, move, then stabilize.",
            "This reverses the model; you cannot stabilize a change before you have prepared for and made it.",
            "You must prepare (recognize the need, manage doubts) before you move; reconsider what comes first.",
            "Stabilizing belongs at the end, not the middle; the actual movement must precede stabilization."
          ],
          e: "Lewin (1947): Unfreezing (recognize the need, secure support) → Changing (plan and implement) → Refreezing (reinforce and stabilize)."
        },
        {
          q: "Which of the following is an EXTERNAL force for change?",
          o: [
            "New governmental laws",
            "New organizational strategy",
            "Employee attitudes",
            "New equipment installed internally"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — laws originate outside the organization.",
            "A new strategy is generated inside the firm; that is an internal force.",
            "Employee attitudes arise within the workforce; that is an internal force.",
            "Acquiring equipment is an internal decision; reread which forces come from outside the organization."
          ],
          e: "External forces include consumer needs, technology, the economy, and new governmental laws. Strategy, equipment, and employee attitudes are internal forces."
        },
        {
          q: "Modifying work processes, methods, and equipment — including automation and computerization — is which type of change?",
          o: [
            "Technology",
            "Structure",
            "Culture",
            "Strategy"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — tools, methods, and equipment.",
            "Structure change alters structural components and design, not work processes and equipment.",
            "Culture change shifts shared values and ways of doing things, not the equipment itself.",
            "Strategy change modifies the approach to ensuring success, not the work methods and tools."
          ],
          e: "Technology change alters work processes, methods, and equipment — new tools, automation, computerization, the Internet of Things."
        },
        {
          q: "According to the lecture, which is one of the four reasons people resist change?",
          o: [
            "Habit",
            "Excitement about new opportunities",
            "A weak organizational culture",
            "Strong management support"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — habit is one of the four reasons.",
            "Excitement is not resistance; the four reasons are sources of opposition to change.",
            "A weak culture is a condition that makes culture change easier, not a reason people resist.",
            "Management support helps drive change; it is not a reason people resist it."
          ],
          e: "The four reasons people resist change: uncertainty, habit, fear of loss, and belief that the change is inconsistent with the organization's goals."
        },
        {
          q: "The OD technique that changes behavior through unstructured group interaction is…",
          o: [
            "Sensitivity training",
            "Survey feedback",
            "Process consultation",
            "Intergroup development"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — unstructured group interaction to change behavior.",
            "Survey feedback uses survey information in feedback groups to resolve attitude discrepancies, not unstructured interaction.",
            "Process consultation uses an outside consultant to diagnose interpersonal work processes.",
            "Intergroup development changes stereotypes groups hold about each other, not behavior via unstructured interaction."
          ],
          e: "Sensitivity training changes behavior through unstructured group interaction."
        },
        {
          q: "A retailer is in a market where conditions shift unpredictably every few weeks with no calm periods, so managers must continually adapt. Which metaphor best captures this environment?",
          o: [
            "The white-water rapids metaphor",
            "The calm waters metaphor",
            "The refreezing stage",
            "The unfreezing stage"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — constant instability requiring active, continual change.",
            "Calm waters implies long stable periods between occasional changes; this market has no calm periods.",
            "Refreezing is a phase of Lewin's model, not a metaphor for an unstable environment.",
            "Unfreezing is a phase of Lewin's model, not the metaphor describing constant instability."
          ],
          e: "The white-water rapids metaphor describes a lack of stability and predictability, requiring managers to continually adapt and manage change actively to survive."
        },
        {
          q: "A manager learns that resistance to a new policy comes mainly from staff who simply misunderstand what the policy requires. Which technique fits best?",
          o: [
            "Education and communication",
            "Negotiation",
            "Coercion",
            "Manipulation and co-optation"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — clears up misunderstandings caused by misinformation.",
            "Negotiation is for resistance from a powerful group, not for simple misunderstanding.",
            "Coercion uses force or threats; it is not the fit when the problem is merely misinformation.",
            "Manipulation/co-optation is used to gain a powerful group's endorsement, not to correct misunderstanding."
          ],
          e: "Education and communication is used when resistance is due to misinformation; it clears up misunderstandings, though it may fail without trust and credibility."
        },
        {
          q: "After a system rollout, an employee starts trying the new tools, asking questions, and experimenting. In Scott & Jaffe's resistance cycle, the manager should…",
          o: [
            "encourage the individual and let them focus",
            "make them aware of reality",
            "give them time to express their feelings",
            "celebrate successes and consider the change complete"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — exploration calls for encouragement and focus.",
            "Making them aware of reality is the response to denial; this person has already moved past denial.",
            "Time to express feelings is the response to resistance; experimenting signals a later stage.",
            "Celebrating belongs to commitment, after the person has fully adapted, not while they are still experimenting."
          ],
          e: "Experimenting and learning is the Exploration stage; the recommended response is to encourage individuals and let them focus."
        },
        {
          q: "A team responds to a change by quietly reducing effort, making more mistakes, and taking extra sick days, while never openly complaining. This is an example of…",
          o: [
            "passive and covert resistance",
            "active and overt resistance",
            "the commitment stage",
            "facilitation and support"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — hidden, postponed resistance through reduced effort and absenteeism.",
            "Active/overt resistance is immediate and visible (complaints, protests); here nothing is openly expressed.",
            "Commitment means adapting to the new environment, the opposite of reduced effort and absenteeism.",
            "Facilitation and support is a managerial technique, not a form of employee resistance."
          ],
          e: "Passive and covert resistance is postponed and hidden: reduced effort, mistakes, gossip, and absenteeism."
        },
        {
          q: "Two formerly separate departments distrust each other and trade stereotypes about who is 'lazy' or 'arrogant.' Which OD technique most directly targets this problem?",
          o: [
            "Intergroup development",
            "Sensitivity training",
            "Survey feedback",
            "Process consultation"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — it changes the stereotypes and perceptions groups hold about each other.",
            "Sensitivity training changes individual behavior via unstructured interaction, not group-to-group stereotypes.",
            "Survey feedback surfaces and resolves attitude discrepancies but does not specifically target between-group stereotypes.",
            "Process consultation uses an outside consultant to diagnose interpersonal processes, not group stereotypes directly."
          ],
          e: "Intergroup development changes the attitudes, stereotypes, and perceptions that work groups have about each other."
        },
        {
          q: "A young, small startup facing a dramatic crisis just brought in a new CEO. With respect to changing its culture, this organization is…",
          o: [
            "in favorable conditions, because crisis, new leadership, and being young and small all make culture change easier",
            "in unfavorable conditions, because culture can never change in a startup",
            "unable to change culture, since only large firms can do so",
            "facing the hardest possible case for culture change"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — those conditions all favor culture change.",
            "Culture can change; in fact young, small firms are among the easier cases, not impossible ones.",
            "This reverses the lecture — being young and small makes culture change easier, not harder.",
            "These are favorable conditions, not the hardest case; reread when culture is easier to change."
          ],
          e: "Culture is easier to change when a dramatic crisis occurs, leadership changes hands, the organization is young and small, and the culture is weak — all present here."
        },
        {
          q: "A company implemented a new collaboration process, saw a brief improvement, then watched behavior slide back to the old ways within months. Using Lewin's model, the BEST explanation is that the firm…",
          o: [
            "neglected refreezing, so the change was never reinforced, stabilized, or sustained",
            "neglected unfreezing, so employees never recognized the need for change",
            "skipped the changing phase entirely",
            "over-invested in refreezing before any change occurred"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — without refreezing, gains erode and behavior reverts.",
            "If unfreezing had failed, there would be no initial improvement at all; here improvement happened first, then faded.",
            "A change clearly occurred (a brief improvement appeared), so the changing phase was not skipped.",
            "Refreezing cannot precede the change; the issue is too little reinforcement after the change, not too much before it."
          ],
          e: "A brief improvement that slides back signals neglected refreezing — changes were never reinforced, integrated into new routines, or sustained."
        },
        {
          q: "Resistance to a change comes from a single powerful union whose endorsement is essential, and management lacks the time for participation. The lecture would warn that NEGOTIATION, while able to 'buy' commitment, carries which key disadvantage?",
          o: [
            "It can be costly and opens the door for others to apply pressure too",
            "It is illegal and may undermine the change agent's credibility",
            "It only works when resistance is due to misinformation",
            "It is too slow because everyone must participate in the solution"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — high cost plus the precedent of inviting others to bargain.",
            "Being potentially illegal is the disadvantage of coercion, not negotiation.",
            "Working only for misinformation describes education and communication, not negotiation.",
            "Requiring everyone to participate describes the participation technique's drawback, not negotiation."
          ],
          e: "Negotiation can buy commitment from a powerful group, but its disadvantages are potentially high cost and opening the door for others to apply pressure for deals too."
        },
        {
          q: "A change leader must choose a technique when a powerful group's endorsement is needed quickly and cheaply. Which evaluation BEST distinguishes manipulation/co-optation from coercion in the lecture?",
          o: [
            "Both are inexpensive ways to gain support, but manipulation/co-optation risks backfiring and lost credibility, while coercion may additionally be illegal",
            "Manipulation/co-optation is illegal, while coercion is always ethical",
            "Coercion is used for misinformation, while manipulation is used for fearful resisters",
            "Both are time-consuming and produce poor solutions"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — both cheap and easy; coercion adds the legal hazard.",
            "This is reversed — coercion (not manipulation) carries the risk of being illegal, and coercion is not 'always ethical.'",
            "Misinformation maps to education/communication and fearful resisters to facilitation/support — not to these two techniques.",
            "Being time-consuming with poor solutions is the disadvantage of participation, not of these two."
          ],
          e: "Both manipulation/co-optation and coercion are inexpensive, easy ways to gain a powerful group's support; both can backfire and cost credibility, and coercion may additionally be illegal."
        },
        {
          q: "A firm rolled out a 'new culture' with posters and a kickoff party, declared victory when results temporarily improved, and ran the effort through one junior officer with no senior backing. Audited against Kotter's 8 steps, the MOST defensible critique is that the firm…",
          o: [
            "failed to form a guiding coalition and prematurely declared victory instead of consolidating gains and anchoring them in culture",
            "created too much urgency, paralyzing the organization",
            "communicated the vision so thoroughly that employees became complacent",
            "anchored the change in culture too early, before generating any short-term wins"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — no coalition and premature victory are the clear Kotter failures here.",
            "Nothing indicates excessive urgency; the posters-and-party launch suggests urgency was never genuinely created.",
            "A slogan with posters is not thorough vision communication, and the problem was reverting, not complacency from over-communication.",
            "Anchoring in culture is the final step; declaring victory early is the opposite of anchoring, and it was never genuinely anchored."
          ],
          e: "One junior officer with no senior backing is not a guiding coalition (step 2), and declaring victory when results temporarily improved skips consolidating gains (7) and anchoring in culture (8)."
        },
        {
          q: "Employees fearful and anxiety-ridden about a major change are not misinformed and have no special expertise to contribute. Of the techniques below, which is BEST matched to their situation, and why?",
          o: [
            "Facilitation and support, because it helps fearful, anxious resisters make needed adjustments",
            "Participation, because anxious employees should design the solution themselves",
            "Education and communication, because anxiety is always caused by misinformation",
            "Negotiation, because anxious employees form a powerful resisting group"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — facilitation and support targets fear and anxiety directly.",
            "Participation fits resisters who have expertise to contribute; the prompt states they have none.",
            "The prompt states they are not misinformed, so correcting information misses the real cause — fear.",
            "Nothing indicates these employees are a powerful group bargaining for concessions; their issue is anxiety."
          ],
          e: "Facilitation and support is used when resisters are fearful and anxiety-ridden; it can facilitate needed adjustments, though it is expensive with no guarantee of success."
        },
        {
          q: "To push a change through, one manager wants to add ever-stronger incentives and pressure (driving forces); a colleague argues it is better to remove staff fears and obstacles (restraining forces). Using Lewin's view, which approach is generally preferable and why?",
          o: [
            "Keep piling on driving forces — more pressure always produces faster, more durable change",
            "Reducing the restraining forces is generally preferable, because merely increasing driving forces tends to raise tension and counter-pressure, whereas removing resistance lets change occur with less conflict",
            "The two are identical, so it makes no difference which the manager chooses",
            "Neither matters; Lewin's model says change depends only on refreezing"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Cranking up pressure tends to provoke equal counter-pressure and resistance — it is not the durable route Lewin favors.",
            "Right idea — that's the one.",
            "Driving and restraining forces are opposites, not the same thing — increasing one differs from reducing the other.",
            "Refreezing is the last STEP; this question is about how to unfreeze and move — driving versus restraining forces."
          ],
          e: "In Lewin's force-field view, change is a balance between driving forces (pushing change) and restraining forces (resisting it). Increasing driving forces tends to generate counter-pressure and tension, so reducing the restraining forces — addressing fears and removing obstacles — is generally the preferable way to reach the desired state with less conflict."
        }
      ],
      cases: [
        {
          title: "Pricing in Dollars at Cedars Hardware",
          scenario: "Cedars Hardware, a family wholesaler in Beirut, has watched the lira collapse into hyperinflation: shelf prices had to be rewritten daily, and lira revenues evaporated before suppliers could be paid. Owner-manager Karim decides the business must dollarize — quote and collect everything in 'fresh' US dollars and stop honoring the old lira price lists. He knows the environment offers no calm: EDL gives only a few hours of state power, so the shop already reorganizes its open hours around the generator 'ishtirak' and fuel queues, and customers argue over 'lollars' versus 'fresh' dollars at the till. Karim names his daughter Lina, the operations lead, to drive the switch. Reactions split. Veteran cashier Abu Toni insists 'the lira will come back, this is temporary' and keeps quoting lira prices to old customers. Salesman Ziad, furious that his lira salary has collapsed, grumbles in the back room, slows down, and 'forgets' to apply the new dollar prices. The younger staff, by contrast, ask to pilot a simple dollar price-tag system on their phones. Lina responds with morning huddles explaining why dollarization is now survival, a help desk plus reassurance for staff panicking over the new system, and a promise to revisit pay once dollar cash flow stabilizes.",
          qs: [
            {
              q: "Identify the external forces driving this change, the type(s) of change involved, and the change agent.",
              a: "External forces: the economy — lira collapse and hyperinflation (daily repricing, lira revenues evaporating) and the EDL grid failure forcing reorganization around the generator 'ishtirak' and fuel queues. The change is primarily a STRATEGY change (modifying the approach to ensuring the firm's survival by dollarizing) with a TECHNOLOGY/process component (the new dollar pricing and tagging system) and a PEOPLE dimension (attitudes toward 'fresh' dollars vs lollars). The change agent is Lina — the person acting as catalyst who assumes responsibility for managing the switch."
            },
            {
              q: "Why is this a 'white-water rapids' situation rather than 'calm waters,' and place Abu Toni, Ziad, and the younger staff on Scott & Jaffe's resistance cycle with the recommended response for each.",
              a: "It is white-water rapids because the environment has no stability or predictability — daily USD repricing, capital controls, lollars-vs-fresh disputes, and EDL power cuts forcing hours around the ishtirak — so Cedars must continually adapt and manage change actively to survive, not wait for calm. Abu Toni is in DENIAL ('the lira will come back; this is temporary') — make him aware of reality. Ziad is in RESISTANCE (anger over his collapsed lira salary, grumbling, mourning the past) — give him time to express his feelings. The younger staff are in EXPLORATION (piloting the dollar price-tag system) — encourage them and let them focus. When staff adapt (COMMITMENT), celebrate successes."
            },
            {
              q: "Classify Abu Toni's and Ziad's behaviors as active/overt or passive/covert resistance, and match Lina's three moves to the techniques for reducing resistance, giving one advantage and one disadvantage of each.",
              a: "Abu Toni quietly keeps quoting lira prices without open protest — PASSIVE AND COVERT resistance (postponed, hidden, reduced compliance). Ziad's slowdown, 'forgetting' to apply dollar prices, and back-room grumbling are also largely PASSIVE AND COVERT (reduced effort, mistakes, gossip); his grumbling has an overt edge but stops short of open protest. Lina's moves: morning huddles explaining why dollarization is survival = EDUCATION AND COMMUNICATION (used when resistance is due to misinformation; advantage: clears up misunderstandings; disadvantage: may fail when mutual trust and credibility are lacking, e.g., with a bitter Ziad). The help desk and reassurance for panicking staff = FACILITATION AND SUPPORT (for fearful, anxiety-ridden resisters; advantage: facilitates needed adjustments; disadvantage: expensive, no guarantee of success). The promise to revisit pay once dollar cash flow stabilizes = NEGOTIATION (buying commitment; advantage: can 'buy' commitment; disadvantage: potentially high cost and it opens the door for others to demand the same)."
            }
          ]
        },
        {
          title: "Going Remote at Arz Tech After the Lights Went Out",
          scenario: "Arz Tech is a small Beirut software house whose staff salaries, once paid in dollars, are now trapped: their pre-crisis bank deposits are frozen 'lollars' subject to withdrawal limits, and only new clients pay in 'fresh' dollars. With EDL down to a few hours and the office generator 'ishtirak' bill exploding, plus engineers stuck in fuel queues, founder Maya decides to close the physical office and move the whole company to permanent remote work, re-pricing all client contracts in fresh dollars. The launch was loud — an all-hands call, a new logo, a slogan ('One Arz, Anywhere') — but three months later the two old teams (the 'office veterans' and the 'new hires') still won't share tools or knowledge, each stereotyping the other. An internal survey shows deep distrust and low morale; a single follow-up workshop discussing the survey results helped for a week, then everything slid back. Maya admits errors: no one was told why remote work was urgent, the move was run by one office manager with no leadership backing, no early wins were set up, and once a few fresh-dollar contracts landed she declared the transition 'done' and moved on. Now she wants to relaunch the change properly and rebuild a demoralized team.",
          qs: [
            {
              q: "Identify the forces driving this change and the type(s) of change involved, citing the crisis specifics.",
              a: "Forces are largely external economic and infrastructure pressures: the banking crisis and capital controls (frozen 'lollar' deposits, withdrawal limits, only 'fresh' dollars from new clients) and the EDL grid failure (few hours of state power, an exploding generator 'ishtirak' bill, engineers stuck in fuel queues). The change spans several types: STRATEGY (re-pricing contracts in fresh dollars to survive), STRUCTURE/TECHNOLOGY (closing the office and shifting to permanent remote work and tools), and CULTURE/PEOPLE (building 'One Arz' cooperation and trust across teams). The deepest failing turns on the culture/people dimension."
            },
            {
              q: "Which OD techniques has Arz Tech already used (perhaps unknowingly), and which should it add, with justification?",
              a: "Used: SURVEY FEEDBACK — the internal survey assessed attitudes and perceptions, surfaced discrepancies, and the workshop tried to resolve differences using the survey results; and elements of INTERGROUP DEVELOPMENT — the workshop aimed at the stereotypes and perceptions the two teams (office veterans vs new hires) hold about each other, but it must be made deliberate and sustained, not a one-off. Add TEAM BUILDING for the now-remote mixed teams (activities helping members learn how each member thinks and works), and/or PROCESS CONSULTATION — an outside consultant helping Maya see how interpersonal processes are blocking cooperation. Sensitivity training could also help change individual behavior through group interaction."
            },
            {
              q: "Using Lewin's model AND Kotter's 8 steps, diagnose why the change slid back and outline how Maya should relaunch it.",
              a: "Lewin: REFREEZING was neglected — the one-week improvement faded because the new remote routines were never reinforced, integrated into new ways of working, or sustained, and Maya celebrated prematurely. The relaunch should UNFREEZE properly (make the survival need for remote, dollarized operations clearly recognized given frozen lollars and EDL collapse; secure leadership support; surface and manage doubts), CHANGE deliberately (plan remote tools and mixed teams, implement, help staff learn the new ways), then REFREEZE (stabilize the new routines, align rewards to cooperation, develop ways to sustain it, and only then celebrate). Kotter audit of the failure: step 1 Create urgency — skipped (no one was told why remote work was urgent); step 2 Form a coalition — botched (one office manager, no leadership backing); steps 3-4 Create and communicate a vision — only a slogan and logo, not an understood vision; step 6 Generate short-term wins — none planned; steps 7-8 Consolidate gains and anchor in culture — failed, since Maya declared victory after a few fresh-dollar contracts and moved on. The relaunch should rebuild urgency, a real guiding coalition, a communicated vision, empowered action, engineered early wins, then consolidate and anchor the remote, dollarized way of working."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Compare Lewin's three-step model with Kotter's 8 steps for implementing change. How do they map onto each other, and what does each add that the other lacks?",
          outline: [
            "Lewin (1947): unfreezing (recognize need, secure management support, manage doubts) → changing (plan, implement, help employees learn) → refreezing (reinforce, integrate, sustain, celebrate)",
            "Kotter (1995): urgency → coalition → vision → communicate vision → empower action → short-term wins → consolidate gains → anchor in culture",
            "Mapping: steps 1–4 ≈ unfreezing; steps 5–6 ≈ changing; steps 7–8 ≈ refreezing",
            "Kotter adds operational detail: coalition-building, vision communication, engineered short-term wins",
            "Lewin adds the underlying logic: stability → movement → new stability; warns against premature victory (refreeze!)",
            "Conclusion: complementary — Lewin as the conceptual skeleton, Kotter as the playbook"
          ],
          model: "Lewin's model (1947) describes change in three phases. Unfreezing prepares the organization: recognizing the need for change, determining what must change, ensuring management supports it, and managing doubts and concerns. Changing is the movement itself: planning and implementing the change while helping employees learn new concepts and perspectives. Refreezing stabilizes the result: reinforcing changes, integrating them into new ways of doing things, developing means to sustain them, and celebrating success. Kotter's 8 steps (1995) — create urgency, form a coalition, create a vision, communicate the vision, empower action, generate short-term wins, consolidate gains, and anchor in culture — map naturally onto Lewin: creating urgency, building a coalition, and creating and communicating a vision operationalize unfreezing; empowering action and generating short-term wins drive the changing phase; consolidating gains and anchoring new approaches in culture accomplish refreezing. Each framework adds something. Kotter contributes an actionable playbook: he tells the change agent specifically HOW to unfreeze (urgency plus a guiding coalition plus a communicated vision) and how to maintain momentum (engineered short-term wins). Lewin contributes the deeper logic — that organizations move from one stable state through a transition to a NEW stable state — and thus the warning both Jabal-style failures illustrate: change that is implemented but never refrozen (or, in Kotter's terms, where victory is declared before gains are consolidated and anchored) will slide back. Used together, Lewin supplies the skeleton and Kotter the muscles of a change program."
        },
        {
          q: "Why do people resist organizational change, and how can managers respond? Discuss the forms and reasons of resistance, individual reaction stages (Kübler-Ross; Scott & Jaffe), and evaluate the six techniques for reducing resistance.",
          outline: [
            "Reactions have cognitive, affective, instrumental components (Elizur & Guttman, 1976)",
            "Forms: active/overt (immediate, complaints, protests, visible) vs. passive/covert (postponed, reduced effort, mistakes, gossip, absenteeism)",
            "Reasons: uncertainty, habit, fear of loss, belief change is inconsistent with organizational goals",
            "Kübler-Ross curve: shock → denial → frustration → depression → experimentation → decision → integration",
            "Scott & Jaffe: denial (make aware of reality) → resistance (time to express feelings) → exploration (encourage, focus) → commitment (celebrate)",
            "Six techniques with when/advantage/disadvantage: education & communication; participation; facilitation & support; negotiation; manipulation & co-optation; coercion",
            "Conclusion: diagnose the source and stage, then match the technique; ethical caution on the last two"
          ],
          model: "People's reactions to change run on three tracks (Elizur & Guttman, 1976): cognitive (opinions about the usefulness and necessity of the change and the knowledge to manage it), affective (feelings of satisfaction or anxiety), and instrumental (actions taken or planned). When the balance tips negative, resistance appears in two forms: active and overt — immediate, visible complaints, protests, and actions — or passive and covert — postponed and hidden, through reduced effort, mistakes, gossip, and absenteeism. The lecture identifies four root reasons: uncertainty, habit, fear of loss, and the belief that the change is inconsistent with the goals of the organization — the last being a signal worth hearing, since the resister may be right. Individually, people travel a reaction curve: Kübler-Ross' grief model traces shock, denial, frustration, depression, then experimentation, decision, and finally integration. Scott & Jaffe's resistance cycle (1988) compresses this into four stages with managerial prescriptions: in denial, make people aware of reality; in resistance, give them time to express feelings; in exploration, encourage them and let them focus; in commitment, celebrate successes. At the organizational level, six techniques reduce resistance, each fitting particular conditions. Education and communication clear up misunderstandings when resistance stems from misinformation, but fail without trust and credibility. Participation increases involvement and acceptance when resisters have expertise to contribute, but is time-consuming and can yield a poor solution. Facilitation and support help fearful, anxious resisters adjust, though they are expensive with no guaranteed success. Negotiation can buy commitment from a powerful resisting group, at potentially high cost and the risk that others demand deals too. Manipulation and co-optation, and coercion, are inexpensive and easy ways to win endorsement from powerful groups — but they can backfire, undermine the change agent's credibility, and coercion may even be illegal. Effective change managers therefore diagnose first — what form, what reason, what stage — and match their response, reserving the last two techniques for rare cases and using them with full awareness of their risks."
        },
        {
          q: "“Of the five types of organizational change, culture change is the hardest.” Explain the five types, discuss why culture is so difficult to change, and describe when culture change becomes feasible and how managers can pursue it (including OD techniques).",
          outline: [
            "Five types: strategy (modifying the approach to success; competitive pressure), structure (components and design), technology (processes, methods, equipment; automation, computerization, IoT), people (attitudes, expectations, perceptions, behavior), culture",
            "Why culture is hard: shared values/traditions are deeply held (link to W3: strong cultures, founders, socialization)",
            "Feasibility conditions: dramatic crisis; leadership change; young and small organization; weak culture",
            "Levers: lead by example, craft new narratives, support champions, redesign socialization, align rewards, clarify expectations, shift subcultures, build consensus and trust",
            "OD as the people-side toolkit: sensitivity training, survey feedback, team building, process consultation, intergroup development",
            "Conclusion: culture change = long-haul, multi-lever effort anchored by leadership behavior"
          ],
          model: "The lecture distinguishes five types of change. Strategy change modifies the organization's approach to ensuring its success — and failing to change strategy when circumstances (such as competition) dictate can threaten survival. Structure change alters structural components or the overall structural design. Technology change touches work processes, methods, and equipment — automation, computerization, and the Internet of Things. People change targets attitudes, expectations, perceptions, and behavior at the individual and group level. Culture change attempts to shift the organization's shared values and ways of doing things in response to internal or external factors. Culture is the hardest because it is, by definition, what is shared, taught to newcomers, and reinforced daily — the deeply held values and traditions that Week 3 showed are rooted in founders' visions and maintained through selection, socialization, and top-management behavior; an instruction cannot simply overwrite it. The lecture is nonetheless clear that hard does not mean impossible: culture change becomes feasible when a dramatic crisis occurs, when leadership changes hands, when the organization is young and small, or when the existing culture is weak. To pursue it, managers can pull several levers together: lead by example, craft new narratives, support champions, redesign socialization, align rewards with the desired culture, clarify expectations, shift subcultures, and build consensus and trust. Because culture lives in people and relationships, organizational development supplies the working tools — sensitivity training to change behavior through unstructured group interaction, survey feedback to surface and resolve attitude discrepancies, team building so members learn how each other think and work, process consultation to diagnose interpersonal processes, and intergroup development to dissolve the stereotypes groups hold about each other. Culture change, in short, is a sustained, multi-lever campaign in which leaders' visible behavior and aligned systems slowly make the new way “how we do things here.”"
        }
      ]
    },
    {
      id: "w10",
      week: 10,
      title: "Leadership",
      blurb: "Trait, behavioral, contingency, and contemporary theories — plus power and gender.",
      sections: [
        {
          h: "Who Are Leaders?",
          blocks: [
            {
              t: "def",
              term: "Leader",
              d: "Someone who can influence others and who has managerial authority."
            },
            {
              t: "def",
              term: "Leadership",
              d: "A process of influencing a group to achieve goals."
            },
            {
              t: "def",
              term: "Trait theories",
              d: "Research focused on identifying personal characteristics that differentiated leaders from non-leaders was UNSUCCESSFUL — it proved impossible to identify a set of traits that would always differentiate a leader (the person) from a non-leader."
            }
          ]
        },
        {
          h: "Behavioral Theories",
          blocks: [
            {
              t: "def",
              term: "Behavioral theories",
              d: "Leadership theories that identify behaviors that differentiate effective leaders from ineffective leaders."
            },
            {
              t: "table",
              title: "The four behavioral studies",
              cols: [
                "Study",
                "Behavioral dimensions",
                "Conclusion"
              ],
              rows: [
                [
                  "University of Iowa",
                  "Democratic style (involving subordinates, delegating authority, encouraging participation); Autocratic style (dictating work methods, centralizing decision making, limiting participation); Laissez-faire style (giving the group freedom to make decisions and complete work)",
                  "Democratic style was most effective, although later studies showed mixed results"
                ],
                [
                  "Ohio State",
                  "Consideration (being considerate of followers' ideas and feelings); Initiating structure (structuring work and work relationships to meet job goals)",
                  "The high-high leader (high consideration AND high initiating structure) achieved high subordinate performance and satisfaction — but not in all situations"
                ],
                [
                  "University of Michigan",
                  "Employee oriented (emphasized interpersonal relationships and taking care of employees' needs); Production oriented (emphasized technical or task aspects of the job)",
                  "Employee-oriented leaders were associated with high group productivity and higher job satisfaction"
                ],
                [
                  "Managerial Grid",
                  "Concern for people (1–9); Concern for production (1–9)",
                  "Leaders performed best with a 9,9 style (high concern for production AND high concern for people)"
                ]
              ]
            }
          ]
        },
        {
          h: "Contingency Theories",
          blocks: [
            {
              t: "def",
              term: "Fiedler contingency model",
              d: "Effective group performance depends on the proper match between a leader's style and the degree to which the situation allows the leader to control and influence. The LEAST-PREFERRED COWORKER (LPC) questionnaire measures whether a leader is task or relationship oriented. Three situational contingencies: LEADER–MEMBER RELATIONS (degree of confidence, trust, and respect employees have for their leader), TASK STRUCTURE (degree to which job assignments are formalized and structured), POSITION POWER (degree of influence over hiring, firing, discipline, promotions, salary increases). Findings: task-oriented leaders perform best in HIGHLY FAVORABLE and HIGHLY UNFAVORABLE situations; relationship-oriented leaders perform best in MODERATELY favorable situations."
            },
            {
              t: "def",
              term: "Hersey and Blanchard's Situational Leadership Theory (SLT)",
              d: "A contingency theory that focuses on followers' READINESS — the extent to which people have the ability and willingness to accomplish a specific task. Four leadership styles: TELLING (high task–low relationship), SELLING (high task–high relationship), PARTICIPATING (low task–high relationship), DELEGATING (low task–low relationship). Four stages of follower readiness: R1 both unable and unwilling → telling; R2 unable but willing → selling; R3 able but unwilling → participating; R4 both able and willing → delegating."
            },
            {
              t: "def",
              term: "Path-goal theory",
              d: "The leader's job is to assist followers in attaining their goals and to provide direction or support needed to ensure their goals are compatible with the goals of the group or organization. Four leadership behaviors: DIRECTIVE, SUPPORTIVE, PARTICIPATIVE, ACHIEVEMENT-ORIENTED. The model includes environmental contingency factors (task structure, formal authority system, work group) and subordinate contingency factors (locus of control, experience, perceived ability), leading to outcomes (performance, satisfaction)."
            }
          ]
        },
        {
          h: "Contemporary Theories",
          blocks: [
            {
              t: "def",
              term: "Leader-member exchange (LMX) theory",
              d: "Leaders create in-groups and out-groups; those in the in-group will have higher performance ratings, less turnover, and greater job satisfaction."
            },
            {
              t: "def",
              term: "Charismatic leader",
              d: "An enthusiastic, self-confident leader whose personality and actions influence people to behave in certain ways. There is ongoing debate about whether charismatic leadership can be taught or whether people are born with the traits."
            },
            {
              t: "def",
              term: "Transactional leaders",
              d: "Leaders who lead primarily by using social exchanges (or transactions)."
            },
            {
              t: "def",
              term: "Transformational leaders",
              d: "Leaders who stimulate and inspire (transform) followers to achieve extraordinary outcomes."
            },
            {
              t: "def",
              term: "Authentic leadership",
              d: "Leaders who know who they are, know what they believe in, and act on those values and beliefs openly and candidly. It focuses on the moral aspects of being a leader. Four qualities: (1) self-aware, (2) transparent, (3) openly solicit views that challenge their deeply held positions, (4) guided by strong moral standards."
            },
            {
              t: "def",
              term: "Ethical leadership",
              d: "An ethical leader puts public safety ahead of profits, holds culpable employees accountable, and creates a culture in which employees feel they could and should do a better job. Example: Delta Airlines CEO Ed Bastian's actions during the COVID-19 pandemic."
            },
            {
              t: "def",
              term: "Servant leadership",
              d: "Servant leaders go beyond their own self-interest and focus on helping followers grow and develop. Its unique feature: it puts the needs of followers ahead of the leader's own needs. May be more prevalent and effective in certain cultures, such as Eastern Asian cultures."
            },
            {
              t: "def",
              term: "Emergent leadership",
              d: "Occurs when the leader of a group or team naturally arises instead of being appointed. Emergent leaders are perceived by their peers as leaderlike and accepted as the informal leader; they lead at the team level, have not been formally appointed, and do not play a permanent role."
            },
            {
              t: "def",
              term: "Followership",
              d: "Leaders need good followers to be effective. Good follower traits: ability to self-manage; strong commitment to purpose; enthusiasm; they build competence; courageous, honest, and credible."
            }
          ]
        },
        {
          h: "Leadership and Power",
          blocks: [
            {
              t: "table",
              title: "Five sources of leader power",
              cols: [
                "Power",
                "Definition"
              ],
              rows: [
                [
                  "Legitimate power",
                  "The power a leader has as a result of his or her position in the organization"
                ],
                [
                  "Coercive power",
                  "The power a leader has to punish or control"
                ],
                [
                  "Reward power",
                  "The power a leader has to give positive rewards"
                ],
                [
                  "Expert power",
                  "Power based on expertise, special skills, or knowledge"
                ],
                [
                  "Referent power",
                  "Power that arises because of a person's desirable resources or personal traits"
                ]
              ]
            }
          ]
        },
        {
          h: "Leadership and Gender (instructor addition)",
          blocks: [
            {
              t: "p",
              text: "Some figures — USA: in 2023, 10.6% of Fortune 500 CEOs were women; less than 1% are women of color; in 2022, 30.4% of board members were women (Pew Research Center, 2023). Lebanon: in 2019, women represented 29% of senior and middle management (World Bank, 2019); data on women in leadership remains scarce."
            },
            {
              t: "def",
              term: "Glass phenomena",
              d: "From the GLASS CEILING (invisible barrier keeping women from top positions) to the GLASS CLIFF (women over-represented in precarious leadership positions — Ryan & Haslam, 2005)."
            },
            {
              t: "list",
              title: "Female leaders and performance — research findings",
              items: [
                "Women are now seen as equally or more competent than men (Eagly et al., 2018/2020)",
                "The presence of a female leader leads perceivers to anticipate fairer treatment (Joshi & Diekman, 2021/2022)",
                "The presence of a female CEO is positively related to firms' financial performance in gender-egalitarian cultures (Hoobler et al., 2018)",
                "Gender-diverse leadership teams are more effective at pursuing environmentally friendly strategies (Glass et al., 2016)"
              ]
            },
            {
              t: "list",
              title: "Female leaders and leadership style",
              items: [
                "Female leaders demonstrate more transformational leadership style (Eagly et al., 1992) and democratic leadership style (Wu et al., 2021)",
                "These styles are congruent with their gender roles (Wu et al., 2021)",
                "When women adopt styles incongruent with their gender roles, they tend to be penalized (Wang et al., 2013)"
              ]
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Who, by the lecture's definition, is a \"leader\"?",
          o: [
            "Someone who can influence others and who has managerial authority",
            "Anyone who completes assigned tasks well",
            "A person who controls the organization's budget",
            "Someone appointed only to enforce rules and discipline"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right idea — keep this one in mind.",
            "Doing good work makes a strong follower, but the definition is about influencing others, not personal task output.",
            "Budget control is one source of power, not the definition of who a leader is; think about influence plus authority.",
            "Enforcing rules is one narrow role; the definition is broader and centers on influencing others."
          ],
          e: "A leader is someone who can influence others and who has managerial authority. Leadership itself is the process of influencing a group to achieve goals."
        },
        {
          q: "Behavioral theories of leadership try to identify…",
          o: [
            "behaviors that differentiate effective leaders from ineffective leaders",
            "personality traits people are born with",
            "the favorableness of the leader's situation",
            "the readiness level of each follower"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes — behaviors, not the person, distinguishing effective from ineffective leaders.",
            "Inborn traits are the focus of the earlier trait approach, not the behavioral one.",
            "Situational favorableness belongs to a later contingency model, not the behavioral studies.",
            "Follower readiness is the focus of a situational contingency theory, not the behavioral approach."
          ],
          e: "Behavioral theories identify the behaviors that differentiate effective from ineffective leaders — a shift away from the failed search for traits."
        },
        {
          q: "In the University of Michigan studies, the leader who emphasized interpersonal relationships and employees' needs was labeled…",
          o: [
            "employee oriented",
            "production oriented",
            "initiating structure",
            "autocratic"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — and these leaders were linked to higher productivity and satisfaction.",
            "That label emphasizes technical/task aspects of the job, the opposite emphasis from caring for employees' needs.",
            "Initiating structure is an Ohio State term about structuring work, not the Michigan relationship label.",
            "Autocratic is a University of Iowa style about dictating methods, not the Michigan relationship dimension."
          ],
          e: "Michigan contrasted employee-oriented (interpersonal relationships, employees' needs) with production-oriented (task/technical) leaders; employee orientation was associated with higher group productivity and job satisfaction."
        },
        {
          q: "On the Managerial Grid, which style was found to perform best?",
          o: [
            "9,9 — high concern for production AND high concern for people",
            "1,9 — low concern for production, high concern for people",
            "9,1 — high concern for production, low concern for people",
            "5,5 — moderate concern for both"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes — the high-high corner of the grid.",
            "This neglects production; the best-performing style was high on BOTH dimensions.",
            "This neglects people; the best-performing style was high on BOTH dimensions.",
            "A balanced-but-moderate style was not the conclusion; the grid favored high-high, not middle-middle."
          ],
          e: "The Managerial Grid plots concern for people against concern for production (1–9 each); leaders performed best with a 9,9 style — high on both."
        },
        {
          q: "In Hersey and Blanchard's SLT, \"readiness\" refers to the extent to which followers have…",
          o: [
            "the ability AND willingness to accomplish a specific task",
            "trust, confidence, and respect for the leader",
            "an internal versus external locus of control",
            "membership in the leader's in-group"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — ability plus willingness, defined per task.",
            "Trust/confidence/respect is Fiedler's leader–member relations, not SLT readiness.",
            "Locus of control is a subordinate factor in path-goal theory, not the SLT readiness definition.",
            "In-group membership is an LMX idea, not what readiness means in SLT."
          ],
          e: "SLT readiness = the extent to which people have the ability and willingness to accomplish a specific task; readiness moves followers across stages R1 to R4."
        },
        {
          q: "Which power source is based on a person's expertise, special skills, or knowledge?",
          o: [
            "Expert power",
            "Legitimate power",
            "Referent power",
            "Coercive power"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — power rooted in skills and knowledge.",
            "Legitimate power comes from one's position in the organization, not from expertise.",
            "Referent power arises from desirable resources or personal traits, not from knowledge or skill.",
            "Coercive power is the ability to punish or control, not knowledge-based influence."
          ],
          e: "Expert power is based on expertise, special skills, or knowledge — distinct from legitimate (position), reward, coercive (punish), and referent (traits/resources) power."
        },
        {
          q: "A new project lead encourages her team to vote on methods, delegates authority, and invites everyone to shape decisions. In University of Iowa terms, her style is…",
          o: [
            "democratic",
            "autocratic",
            "laissez-faire",
            "production oriented"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes — involving subordinates, delegating, encouraging participation.",
            "Autocratic leaders dictate methods and centralize decisions — the opposite of inviting everyone to shape them.",
            "Laissez-faire means leaving the group entirely free with no involvement; she is actively delegating and inviting participation, which is different.",
            "Production oriented is a Michigan task-emphasis label, not one of the Iowa decision-style categories."
          ],
          e: "The Iowa democratic style involves subordinates, delegates authority, and encourages participation; it was initially found most effective (later results were mixed)."
        },
        {
          q: "A team trusts its leader deeply, works from detailed manuals, and the leader controls bonuses and discipline. In Fiedler's terms, this situation is…",
          o: [
            "highly favorable, so a task-oriented leader should fit best",
            "highly unfavorable, so a relationship-oriented leader should fit best",
            "moderately favorable, so a task-oriented leader should fit best",
            "highly favorable, so a relationship-oriented leader should fit best"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — all three contingencies are strong, and task-oriented leaders excel at this extreme.",
            "Strong trust, high structure, and strong position power make this highly FAVORABLE, not unfavorable.",
            "All three contingencies are strong, which is the favorable extreme, not the moderate middle.",
            "The favorableness reading is right, but Fiedler found task-oriented (not relationship-oriented) leaders best at the extremes."
          ],
          e: "Good leader–member relations + high task structure + strong position power = highly favorable. Fiedler found task-oriented leaders perform best in highly favorable AND highly unfavorable situations."
        },
        {
          q: "An employee is fully skilled at a task but has become resentful and reluctant to do it. Under SLT, which style should the leader use?",
          o: [
            "Participating (low task–high relationship)",
            "Telling (high task–low relationship)",
            "Selling (high task–high relationship)",
            "Delegating (low task–low relationship)"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — able but unwilling is R3, calling for participating.",
            "Telling suits R1 (unable and unwilling); this employee is already skilled, so heavy task direction misreads the problem.",
            "Selling suits R2 (unable but willing); here the gap is willingness, not ability, so this misdiagnoses the readiness stage.",
            "Delegating suits R4 (able and willing); this employee is able but NOT willing, so handing off freely would backfire."
          ],
          e: "Able but unwilling = R3 → participating (low task–high relationship): involve the follower to rebuild willingness rather than pile on direction."
        },
        {
          q: "A manager removes obstacles, clarifies how effort leads to rewards, and tailors support so each subordinate's goals line up with the team's. This best illustrates…",
          o: [
            "path-goal theory",
            "Fiedler's contingency model",
            "the Managerial Grid",
            "transactional leadership"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes — assisting followers down the path to goals aligned with the group's.",
            "Fiedler matches a fixed leader style to situational favorableness; it does not center on clearing the follower's path to goals.",
            "The Managerial Grid maps concern for people vs. production; it is a behavioral grid, not about clearing paths to goals.",
            "Transactional leadership trades rewards for compliance; clarifying paths and aligning goals is a broader, goal-facilitating role."
          ],
          e: "Path-goal theory: the leader assists followers in attaining goals and provides the direction/support that aligns their goals with the group's or organization's, using directive, supportive, participative, or achievement-oriented behavior."
        },
        {
          q: "A division head sets targets, pays bonuses for hitting them, and withdraws privileges for misses; the unit reliably meets but never exceeds goals. This leader is best described as…",
          o: [
            "transactional",
            "transformational",
            "charismatic",
            "authentic"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — leadership built on social exchanges, with reliable but unexceptional results.",
            "Transformational leaders inspire extraordinary outcomes; meeting-but-never-exceeding signals exchange, not transformation.",
            "Charismatic leaders influence through enthusiasm and self-confident personality; here the lever is deals and rewards, not personal magnetism.",
            "Authentic leadership is about self-awareness and moral standards; nothing here speaks to those qualities — the lever is the exchange."
          ],
          e: "Transactional leaders lead primarily through social exchanges (rewards for compliance), producing reliable but rarely extraordinary results — unlike transformational leaders who inspire extraordinary outcomes."
        },
        {
          q: "A CEO halts a profitable product over a safety doubt and holds the responsible team accountable, mirroring the lecture's Ed Bastian/Delta example. This illustrates…",
          o: [
            "ethical leadership",
            "charismatic leadership",
            "laissez-faire leadership",
            "expert power"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes — safety over profit plus accountability is the ethical-leadership signature.",
            "Charisma is about an enthusiastic, self-confident personality; the cue here is the moral choice, not magnetism.",
            "Laissez-faire means hands-off; halting a product and holding people accountable is the opposite of standing back.",
            "Expert power is influence from knowledge; the point here is a values-driven decision, not technical expertise."
          ],
          e: "Ethical leadership puts public safety ahead of profits, holds culpable employees accountable, and builds a culture of doing better — the lecture's Ed Bastian/Delta example."
        },
        {
          q: "Two leaders are equally effective. Leader X relies on follower readiness to pick among telling/selling/participating/delegating; Leader Y has a fixed LPC style and is matched to favorable or unfavorable situations. The BEST statement of how their theories differ is…",
          o: [
            "X (SLT) assumes the leader adapts style to followers, while Y (Fiedler) assumes a fixed style matched to the situation",
            "Both assume a fixed style; they differ only in which situational variables they measure",
            "X assumes a fixed style while Y assumes the leader flexibly adapts to each follower",
            "Both assume the leader freely adapts; they differ only in labeling the styles"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — adaptive leader (SLT) vs. fixed style matched to the situation (Fiedler).",
            "Fiedler assumes a fixed style, but SLT assumes the leader CHANGES style as readiness changes, so 'both fixed' is wrong.",
            "This reverses them: it is Fiedler who assumes a fixed style, and SLT whose leader adapts.",
            "Fiedler does NOT assume free adaptation — it treats style as fixed and matches the leader to the situation."
          ],
          e: "SLT has the leader adapt across four styles as followers move R1–R4; Fiedler treats LPC style as fixed and prescribes matching the leader (task vs. relationship oriented) to the situation's favorableness."
        },
        {
          q: "An admired, brand-new team leader has no control over pay, discipline, or promotions, and was only just appointed. To influence the team, the MOST realistic power bases available to her are…",
          o: [
            "expert and referent power",
            "reward and coercive power",
            "legitimate and reward power",
            "coercive and legitimate power"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — knowledge plus admiration are what remain when formal levers are gone.",
            "Reward and coercive power both require control over pay/discipline, which she explicitly lacks.",
            "Reward power needs control over pay (she lacks it), and her brand-new role makes legitimate power weak too.",
            "Coercive power needs control over discipline (she lacks it), and a just-appointed role gives little legitimate power."
          ],
          e: "With no control over pay/discipline/promotions and only a brand-new role, reward, coercive, and legitimate power are weak; she can still draw on expert power (knowledge) and referent power (admiration/traits) — why influence, not just authority, matters."
        },
        {
          q: "A leader publicly admits her own errors, invites engineers to challenge her positions, and acts openly on strong moral standards. Which set of qualities does this BEST match?",
          o: [
            "Authentic leadership: self-aware, transparent, solicits challenging views, guided by moral standards",
            "Charismatic leadership: enthusiastic and self-confident, influencing behavior through personality",
            "Servant leadership: putting followers' needs ahead of the leader's own",
            "Transactional leadership: leading through social exchanges"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — these four cues map directly onto the authentic-leadership qualities.",
            "Charisma could coexist, but admitting errors and soliciting challenge are specifically the authentic qualities, not magnetism.",
            "Servant leadership centers on prioritizing followers' growth/needs; that is not what 'admits errors and invites challenge' describes.",
            "Transactional leadership is about exchanges; nothing here involves trading rewards for compliance."
          ],
          e: "Authentic leaders are (1) self-aware, (2) transparent (admitting errors), (3) openly solicit views that challenge their positions, and (4) guided by strong moral standards — the moral side of leadership."
        },
        {
          q: "A capable woman is appointed to lead a failing division that nearly everyone expects to collapse, and she is also criticized for being \"too aggressive\" when she leads autocratically. Which two lecture concepts BEST explain her situation?",
          o: [
            "Glass cliff and role-congruity penalty",
            "Glass ceiling and the high-high leader",
            "Glass cliff and LMX in-group membership",
            "Role congruity and Fiedler's position power"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — a precarious appointment plus a penalty for an incongruent style.",
            "The glass ceiling keeps women OUT of top roles; here she got the role, so 'glass cliff' fits better, and the high-high leader is unrelated.",
            "The glass cliff fits the precarious appointment, but the style criticism is a role-congruity penalty, not an LMX in-group issue.",
            "Role congruity fits the style criticism, but the precarious appointment is the glass cliff, not Fiedler's position power."
          ],
          e: "Glass cliff (Ryan & Haslam, 2005): women over-represented in precarious leadership positions. Role congruity: women penalized when they adopt styles incongruent with gender roles (Wang et al., 2013) — e.g., being seen as 'too aggressive.'"
        },
        {
          q: "A visionary leader's unit stalls every time she travels, even though her in-group of trusted engineers stays loyal and high-performing. The BEST diagnosis and remedy is…",
          o: [
            "Over-dependence on the leader; develop followership so the mission runs without her constant presence",
            "Weak position power; give her formal control over pay and discipline",
            "Low task structure; write detailed manuals to remove all ambiguity",
            "A glass-ceiling effect; promote her to a broader role"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — building good followers lets the vision run without the leader present.",
            "Position power is about formal levers; the problem is dependence on her presence, not a lack of authority over pay/discipline.",
            "Manuals address task structure, but a stall during her absence reflects follower dependence, not ambiguous procedures.",
            "The glass ceiling is about barriers to women's advancement; promoting her does not fix a unit that cannot run without her."
          ],
          e: "Leaders need good followers to be effective. Developing followership — self-management, commitment to purpose, enthusiasm, competence, courage/honesty/credibility — and spreading mentoring beyond the in-group lets the vision continue without the leader's constant presence."
        },
        {
          q: "Leader X motivates purely by exchanging rewards for performance and correcting deviations. Leader Y inspires followers to transcend self-interest for a shared vision and to develop their potential. During a survival-threatening transformation, which BEST reflects the lecture's view of the two?",
          o: [
            "Only transactional leadership (X) matters in a crisis; vision is a luxury",
            "They are complementary — transformational leadership (Y) builds on, rather than replaces, transactional leadership, and is especially powerful for driving deep change and extra effort",
            "They are the same style under two different names",
            "Only transformational leadership (Y) has any real effect; transactional leadership has been shown to be useless"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Vision isn't a luxury in a transformation — transformational leadership is precisely what drives deep change.",
            "Right idea — that's the one.",
            "Exchanging rewards for performance (transactional) is clearly different from inspiring people beyond self-interest (transformational).",
            "Transactional leadership isn't useless — transformational leadership is described as building ON it, not erasing it."
          ],
          e: "Transactional leadership motivates through exchanges (rewards for performance, correcting deviations). Transformational leadership inspires followers to go beyond self-interest toward a shared vision and to grow. The lecture treats them as complementary: transformational leadership builds on the transactional base and produces extra effort and deeper change — exactly what a survival-threatening transformation needs."
        }
      ],
      cases: [
        {
          title: "Holding the Bakery Together When the Lira Collapses",
          scenario: "Rania manages a 40-person bakery chain in Beirut. Since the banking crisis, the staff's lira salaries have collapsed in real terms and their bank deposits are frozen behind capital controls — what little they can withdraw comes out as devalued \"lollars,\" not the \"fresh\" dollars suppliers now demand. Rania cannot match the dollarized wages a competitor across town is dangling, and several skilled bakers are openly demoralized: able to do their jobs but no longer willing to try hard, some hinting they will leave. Newer hires, by contrast, are eager but still clueless about the ovens and recipes. Instead of pretending she can outbid anyone, Rania paints a vision of \"keeping affordable bread on Beirut's tables through the collapse,\" admits openly that she cannot promise raises, shares the chain's real numbers, and invites the bakers to redesign shifts around the daily EDL blackouts and generator \"ishtirak\" costs. The veterans begin to re-engage around the mission rather than the paycheck.",
          qs: [
            {
              q: "Rania cannot pay competitive, dollarized wages. Contrast a transactional versus a transformational response to this constraint, and say which she is using.",
              a: "A transactional leader leads through social exchanges — bonuses, raises, privileges for compliance. With lira salaries collapsed, deposits frozen as 'lollars,' and a rival offering 'fresh' dollars, Rania simply cannot win on transactions; a transactional approach would lose the demoralized bakers to the higher bidder. Rania instead uses TRANSFORMATIONAL leadership: she stimulates and inspires the staff to achieve extraordinary outcomes (keeping affordable bread on Beirut's tables) by appealing to a shared mission rather than pay. This is precisely the value of transformational leadership when you cannot pay competitive wages — it engages followers around purpose, not exchange."
            },
            {
              q: "Apply Hersey and Blanchard's SLT to (a) the skilled-but-demoralized veterans and (b) the eager-but-clueless new hires.",
              a: "The veterans are ABLE but UNWILLING (the collapse in real wages killed their motivation) = R3 → PARTICIPATING (low task–high relationship): involve them, as Rania does by inviting them to redesign shifts around blackouts and 'ishtirak' costs, to rebuild willingness. The new hires are UNABLE but WILLING (eager but clueless about ovens/recipes) = R2 → SELLING (high task–high relationship): give direction on the work while encouraging their enthusiasm. Matching the style to each group's readiness, rather than treating everyone the same, is the core of SLT."
            },
            {
              q: "Rania has almost no reward or coercive power right now. Which power sources and which contemporary leadership idea let her still influence the staff?",
              a: "With frozen deposits and collapsed lira pay she has little REWARD power and limited COERCIVE power (people can just leave for 'fresh' dollars). She influences through EXPERT power (her command of the operation) and especially REFERENT power, built by her authentic, transparent conduct — admitting she cannot promise raises and sharing the real numbers reflects AUTHENTIC LEADERSHIP (self-aware, transparent, soliciting input, guided by values). That candor builds the trust and admiration that move people when formal rewards are gone."
            }
          ]
        },
        {
          title: "Leading a Clinic Through the Blackouts",
          scenario: "Dr. Karim heads a private clinic in Tripoli. The national EDL grid now delivers only a few hours of power a day, so the clinic runs on a costly generator \"ishtirak,\" and staff burn hours in fuel queues just to reach work. Salaries paid in lira have lost most of their value, and the bank will not release the clinic's own dollar deposits except as 'lollars,' so cash is scarce. Morale is at rock bottom: nurses who are perfectly competent have stopped caring, and two threaten to emigrate. Karim is enthusiastic and self-confident; he keeps articulating a vivid picture of the clinic as \"the one place in the city that never turns a patient away, no matter the blackout.\" He reorganizes rosters around generator hours, personally takes night shifts during the worst outages, and asks the nurses to challenge his plans openly. Some staff who were drifting describe being inspired to keep going. A board member worries the whole thing depends on Karim's personal energy and would stall if he ever stepped back.",
          qs: [
            {
              q: "Identify the contemporary leadership styles Karim is displaying and the specific cues that reveal each.",
              a: "Karim shows CHARISMATIC leadership — he is enthusiastic and self-confident, and his personality and actions influence staff to behave in certain ways (drifting nurses feel inspired). He is also a TRANSFORMATIONAL leader: he stimulates and inspires followers to extraordinary outcomes through a compelling VISION ('the one place in the city that never turns a patient away'), going beyond mere exchanges — which is essential because collapsed lira salaries and 'lollar'-only withdrawals leave him nothing to transact with. Inviting nurses to challenge his plans openly is also a mark of AUTHENTIC leadership (soliciting challenging views)."
            },
            {
              q: "The competent nurses have 'stopped caring.' Diagnose their readiness with SLT and prescribe Karim's style.",
              a: "The nurses are ABLE (perfectly competent) but UNWILLING (demoralized by lira pay erosion, fuel-queue exhaustion, and blackouts) = R3 readiness → PARTICIPATING (low task–high relationship). Karim should not pile on task direction to skilled staff; instead he should involve them and support them emotionally to rebuild willingness — consistent with his reorganizing rosters around generator hours and inviting their input. If any nurse slid to unable-and-unwilling (R1), telling would apply, but for competent-but-disengaged staff, participating fits."
            },
            {
              q: "The board fears the clinic stalls if Karim steps back. Use followership to advise them.",
              a: "Leaders need good followers to be effective; over-reliance on one charismatic leader is a real risk, especially amid the EDL collapse when his personal energy is doing the heavy lifting. The board should DEVELOP FOLLOWERSHIP among the nurses: ability to SELF-MANAGE through the blackouts and fuel shortages, strong commitment to the PURPOSE (the never-turn-a-patient-away mission, not just loyalty to Karim), enthusiasm, growing COMPETENCE, and courage/honesty/credibility. Spreading ownership of the vision lets the clinic keep running through the crisis even if Karim steps back."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Trace the evolution of leadership research from trait theories to behavioral theories. Describe the four behavioral studies and their conclusions, and explain why this line of research led to contingency thinking.",
          outline: [
            "Trait approach: sought personal characteristics differentiating leaders from non-leaders — unsuccessful; no trait set always differentiates leaders",
            "Shift: behavioral theories — identify behaviors differentiating EFFECTIVE from ineffective leaders",
            "Iowa: democratic, autocratic, laissez-faire; democratic most effective but later mixed results",
            "Ohio State: consideration + initiating structure; high-high did well — but not in all situations",
            "Michigan: employee oriented vs. production oriented; employee-oriented linked to productivity and satisfaction",
            "Managerial Grid: concern for people × concern for production; 9,9 best",
            "Bridge to contingency: “not in all situations” and “mixed results” show effectiveness depends on the situation → Fiedler, SLT, path-goal"
          ],
          model: "Leadership research began with traits: the search for personal characteristics that differentiated leaders from non-leaders. That program failed — it proved impossible to identify a set of traits that would ALWAYS distinguish the leader (the person) from the non-leader. Attention therefore turned from who leaders are to what leaders do: behavioral theories identify behaviors that differentiate effective from ineffective leaders, with the hope that behaviors, unlike traits, could be taught. Four studies anchor this tradition. The University of Iowa studies contrasted democratic (involving subordinates, delegating authority, encouraging participation), autocratic (dictating methods, centralizing decisions, limiting participation), and laissez-faire styles (letting the group decide and work freely); the democratic style initially appeared most effective, though later studies produced mixed results. The Ohio State studies distilled two dimensions — consideration (care for followers' ideas and feelings) and initiating structure (structuring work and relationships toward goals) — and found the high-high leader achieved high subordinate performance and satisfaction, but not in all situations. The University of Michigan studies contrasted employee-oriented leaders (interpersonal relationships, employees' needs) with production-oriented ones (technical/task aspects), associating employee orientation with higher group productivity and job satisfaction. The Managerial Grid mapped concern for people against concern for production on nine-point scales, concluding leaders performed best with a 9,9 (high-high) style. The recurring qualifiers — “mixed results,” “not in all situations” — proved decisive: if no behavior pattern wins everywhere, effectiveness must depend on the situation. That inference launched the contingency theories — Fiedler's model, Hersey and Blanchard's situational leadership, and path-goal theory — which formalize matching leadership to situational conditions."
        },
        {
          q: "Compare Fiedler's contingency model, Hersey and Blanchard's situational leadership theory, and path-goal theory. For each: what is the leader's style assumption, what situational variables matter, and what does the theory prescribe?",
          outline: [
            "Common premise: effectiveness depends on situation-style match",
            "Fiedler: style measured by LPC (task vs. relationship) and treated as FIXED; situation = leader-member relations, task structure, position power → favorableness continuum; prescription: task-oriented at extremes, relationship-oriented in moderate situations; match leader to situation",
            "SLT: focuses on FOLLOWERS' READINESS (ability + willingness); leader adapts across telling, selling, participating, delegating as followers move R1→R4",
            "Path-goal: leader assists followers to attain goals, aligning them with group/organization; four behaviors (directive, supportive, participative, achievement-oriented); contingencies = environment (task structure, authority system, work group) + subordinate factors (locus of control, experience, perceived ability) → performance and satisfaction; leader FLEXIBLE",
            "Contrast: who/what is diagnosed (situation favorableness vs. follower readiness vs. follower needs/environment); fixed vs. flexible style",
            "Conclusion: all reject one-best-style; differ on adaptability and diagnostic focus"
          ],
          model: "All three contingency theories deny a universally best style, but they differ in what they diagnose and whether the leader can adapt. Fiedler's contingency model holds that effective group performance depends on the proper match between a leader's style and the degree to which the situation gives the leader control and influence. Style is measured by the least-preferred coworker (LPC) questionnaire — task oriented versus relationship oriented — and is assumed fixed. The situation's favorableness rests on three contingencies: leader–member relations (confidence, trust, respect), task structure (how formalized assignments are), and position power (influence over hiring, firing, discipline, promotions, raises). Fiedler's findings: task-oriented leaders perform best in highly favorable and highly unfavorable situations, relationship-oriented leaders in moderately favorable ones — so organizations should match the leader to the situation (or change the situation), not expect the leader to change. Hersey and Blanchard's situational leadership theory shifts the diagnosis to followers' readiness — their ability and willingness for a specific task. The leader adapts along two behavior dimensions, producing four styles: telling (high task–low relationship) for R1 followers (unable and unwilling), selling (high task–high relationship) for R2 (unable but willing), participating (low task–high relationship) for R3 (able but unwilling), and delegating (low task–low relationship) for R4 (able and willing). Path-goal theory defines the leader's job as assisting followers to attain their goals and providing the direction or support that aligns those goals with the group's or organization's. The leader chooses among directive, supportive, participative, and achievement-oriented behaviors, guided by environmental contingencies (task structure, formal authority system, work group) and subordinate contingencies (locus of control, experience, perceived ability), with performance and satisfaction as outcomes. In short: Fiedler diagnoses situational favorableness with a fixed-style leader; SLT diagnoses follower development with an adaptive leader; path-goal diagnoses both environment and follower characteristics, prescribing whichever behavior clears the follower's path to the goal."
        },
        {
          q: "Discuss the situation of women in leadership using the lecture's evidence: representation figures, the glass ceiling and glass cliff, research on female leaders' performance, and the role-congruity problem in leadership styles.",
          outline: [
            "Representation: 10.6% of Fortune 500 CEOs women (2023), <1% women of color; 30.4% of board members (2022) — Pew; Lebanon: 29% of senior/middle management (World Bank, 2019), scarce data",
            "Glass ceiling → glass cliff (Ryan & Haslam, 2005): women over-represented in precarious leadership positions",
            "Performance evidence: perceived as equally/more competent (Eagly et al.); female leader presence → anticipated fairer treatment (Joshi & Diekman); female CEOs ↔ financial performance in gender-egalitarian cultures (Hoobler et al., 2018); gender-diverse teams → environmental strategies (Glass et al., 2016)",
            "Styles: women show more transformational and democratic styles (Eagly et al., 1992; Wu et al., 2021) — congruent with gender roles; penalized when adopting incongruent styles (Wang et al., 2013)",
            "Synthesis: barriers are structural/perceptual, not competence-based; implications for organizations"
          ],
          model: "The numbers first: in 2023 only 10.6% of Fortune 500 CEOs were women — less than 1% women of color — and in 2022 women held 30.4% of those companies' board seats (Pew Research Center, 2023). In Lebanon, women represented 29% of senior and middle management in 2019 (World Bank), and data on women's leadership remains scarce. Under-representation persists despite the evidence on performance. Beyond the familiar glass ceiling, research identifies a glass cliff (Ryan & Haslam, 2005): when women do reach leadership, they are over-represented in precarious positions — set up where failure is most likely. Yet the research reviewed in the lecture undercuts any competence explanation for the gap: women are now seen as equally or more competent than men (Eagly et al.); the mere presence of a female leader leads perceivers to anticipate fairer treatment (Joshi & Diekman); female CEOs are positively related to firms' financial performance in gender-egalitarian cultures (Hoobler et al., 2018); and gender-diverse leadership teams pursue environmentally friendly strategies more effectively (Glass et al., 2016). On style, female leaders demonstrate more transformational and more democratic leadership (Eagly et al., 1992; Wu et al., 2021) — styles the behavioral and contemporary literatures associate with effectiveness. The catch is role congruity: these styles are congruent with female gender roles, and when women adopt incongruent styles — say, highly autocratic ones — they tend to be penalized (Wang et al., 2013), a constraint male leaders do not face symmetrically. The synthesis: the obstacles to women's leadership are structural and perceptual — ceilings, cliffs, and role expectations — not deficits of competence or style. Organizations that fix appointment processes (who gets which roles, and when) and decouple style evaluations from gender expectations stand to gain measurably better leadership."
        }
      ]
    },
    {
      id: "w11",
      week: 11,
      title: "Motivation",
      blurb: "Early and modern motivation theories, job design, SDT, and motivation under algorithms.",
      sections: [
        {
          h: "What Is Motivation?",
          blocks: [
            {
              t: "def",
              term: "Motivation",
              d: "The process by which a person's efforts are energized, directed, and sustained toward attaining a goal. Three key elements: (1) ENERGY, (2) DIRECTION, (3) PERSISTENCE."
            }
          ]
        },
        {
          h: "Early Theories of Motivation",
          blocks: [
            {
              t: "def",
              term: "Maslow's hierarchy of needs theory",
              d: "Human needs — physiological, safety, social, esteem, and self-actualization — form a hierarchy, and each level must be substantially satisfied before the next need becomes dominant. (Pyramid from bottom to top: physiological → safety → social → esteem → self-actualization.)"
            },
            {
              t: "list",
              title: "Maslow's pyramid: some limits",
              items: [
                "Very popular in the 1960s–70s, but very little evidence for the ranking of needs or even for the existence of a definite hierarchy at all (Wahba & Bridwell, 1976)",
                "Little support for the prepotent nature of needs and the utility of need theories more generally (Kanfer et al., 2017)",
                "Need theories do not predict specific behaviors (Campbell & Pritchard, 1976)"
              ]
            },
            {
              t: "def",
              term: "Herzberg's two-factor theory (motivation-hygiene theory)",
              d: "Intrinsic factors are related to job satisfaction and motivation, whereas extrinsic factors are associated with job dissatisfaction. HYGIENE FACTORS: extrinsic factors that remove job dissatisfaction (supervision, company policy, relationship with supervisor, working conditions, salary, relationship with peers, personal life, relationship with subordinates, status, security). MOTIVATORS: intrinsic factors having to do with the job itself (achievement, recognition, the work itself, responsibility, advancement, growth). Herzberg's view: the opposite of satisfaction is NO satisfaction (motivators), and the opposite of dissatisfaction is NO dissatisfaction (hygiene) — two separate continua, unlike the traditional satisfied↔dissatisfied view."
            },
            {
              t: "list",
              title: "Two-factor theory: some limits",
              items: [
                "Used the critical incident method (“recall times when you felt good or bad about your job”), which introduced self-serving bias",
                "Original samples were white-collar professionals; studies with blue-collar workers have not always replicated his findings"
              ]
            },
            {
              t: "def",
              term: "Three-needs theory (McClelland)",
              d: "Three ACQUIRED (not innate) needs are major motives in work: NEED FOR ACHIEVEMENT (nAch) — the drive to succeed and excel in relation to a set of standards; NEED FOR POWER (nPow) — the need to make others behave in a way they would not have behaved otherwise; NEED FOR AFFILIATION (nAff) — the desire for friendly and close interpersonal relationships. Evidence: employees high on nAch exhibit more positive moods, greater interest in the task at hand, and perform very well in high-stakes conditions; research also supports the nPow and nAff concepts."
            }
          ]
        },
        {
          h: "Modern Theories of Motivation",
          blocks: [
            {
              t: "def",
              term: "Goal-setting theory",
              d: "Specific goals increase performance, and difficult goals, when ACCEPTED, result in higher performance than easy goals. Self-generated feedback on progress strengthens the effect."
            },
            {
              t: "def",
              term: "Self-efficacy",
              d: "An individual's belief that he or she is capable of performing a task."
            },
            {
              t: "def",
              term: "Job design",
              d: "The way tasks are combined to form complete jobs. JOB SCOPE: the number of different tasks required in a job and the frequency with which they are repeated. JOB ENLARGEMENT: horizontal expansion of a job by increasing job scope. JOB ENRICHMENT: vertical expansion of a job by adding planning and evaluating responsibilities. JOB DEPTH: the degree of control employees have over their work."
            },
            {
              t: "def",
              term: "Job characteristics model (JCM)",
              d: "A framework for analyzing and designing jobs: five core job dimensions — SKILL VARIETY, TASK IDENTITY, TASK SIGNIFICANCE (→ experienced meaningfulness of the work), AUTONOMY (→ experienced responsibility for outcomes of the work), and FEEDBACK (→ knowledge of the actual results of work activities) — produce outcomes: high internal work motivation, high-quality work performance, high satisfaction with the work, and low absenteeism. The links are moderated by the strength of the employee's GROWTH NEED."
            },
            {
              t: "def",
              term: "Equity theory",
              d: "An employee compares their job's inputs-outcomes ratio with that of relevant others and then corrects any inequity. If the ratio is equitable — no problem; if inequitable, they see themselves as under-rewarded or over-rewarded. REFERENTS: the persons, systems, or selves against which individuals compare themselves. DISTRIBUTIVE JUSTICE: perceived fairness of the amount and allocation of rewards among individuals. PROCEDURAL JUSTICE: perceived fairness of the process used to determine the distribution of rewards."
            },
            {
              t: "def",
              term: "Expectancy theory",
              d: "An individual tends to act in a certain way based on the expectation that the act will be followed by a given outcome and on the attractiveness of that outcome to the individual. Three linkages: A — EFFORT–PERFORMANCE linkage (individual effort → individual performance); B — PERFORMANCE–REWARD linkage (individual performance → organizational rewards); C — ATTRACTIVENESS OF REWARD (organizational rewards → individual goals)."
            }
          ]
        },
        {
          h: "Self-Determination Theory (Ryan & Deci, 2000)",
          blocks: [
            {
              t: "def",
              term: "The motivation continuum",
              d: "From AMOTIVATION through EXTRINSIC MOTIVATION to INTRINSIC MOTIVATION. Extrinsic motivation has four regulation types: EXTERNAL regulation → INTROJECTED regulation → IDENTIFIED regulation → INTEGRATED regulation, the last two lying beyond the self-determination threshold (with intrinsic regulation)."
            },
            {
              t: "def",
              term: "Basic psychological needs",
              d: "COMPETENCE, RELATEDNESS, and AUTONOMY. “Satisfaction of the three psychological needs will enhance employees' intrinsic motivation” (Gagné & Deci, 2005). Combined, they enhance positive work outcomes such as job satisfaction, effective performance, organizational citizenship behaviors, and well-being."
            }
          ]
        },
        {
          h: "Motivation in the Algorithmic Management Era (instructor addition)",
          blocks: [
            {
              t: "list",
              title: "Six management functions performed by algorithms (Parent-Rocheleau & Parker, 2022)",
              items: [
                "Monitoring",
                "Task assignment and/or goal setting",
                "Performance management",
                "Scheduling",
                "Compensation management",
                "Job termination"
              ]
            },
            {
              t: "table",
              title: "What that means for motivation (Gagné et al., 2022)",
              cols: [
                "Function",
                "Motivational effect"
              ],
              rows: [
                [
                  "Monitoring",
                  "Decreases autonomy and negatively affects employees' intrinsic motivation"
                ],
                [
                  "Task assignment / goal setting",
                  "Tends to simplify work, making it less motivating (low need for competence)"
                ],
                [
                  "Performance management",
                  "Negatively affects autonomous motivation and can foster a competitive climate"
                ],
                [
                  "Scheduling",
                  "Can be unpredictable and thus impede workers' relatedness at home and at work"
                ],
                [
                  "Compensation management",
                  "Pay-for-performance is linked to decreases in autonomy feelings"
                ],
                [
                  "Job termination",
                  "Work deactivation because of “low performance” impedes workers' autonomy and feelings of competence"
                ]
              ]
            },
            {
              t: "def",
              term: "Motivation-enhancing algorithmic management (Parent-Rocheleau et al., 2024)",
              d: "System characteristics — ensuring transparency, keeping humans in the loop — and policies and practices — limiting surveillance and monitoring, managing productivity fairly, maintaining pay stability, providing constructive feedback, preserving relationships — support the three psychological needs (autonomy, competence, relatedness) and thus self-determined motivation."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Motivation is best defined as the process by which a person's efforts are…",
          o: [
            "energized, directed, and sustained toward attaining a goal",
            "rewarded, punished, and recorded by a supervisor",
            "compared against the inputs and outcomes of others",
            "divided into intrinsic and extrinsic paychecks"
          ],
          a: 0,
          tier: "easy",
          h: [
            "That is the affirming choice's idea phrased as energy, direction, and persistence.",
            "Rewards and punishments describe reinforcement, not the definition of motivation itself; focus on the three internal elements energy, direction, and persistence.",
            "Comparing inputs and outcomes is equity theory, a specific theory, not the general definition of motivation.",
            "Splitting pay into intrinsic and extrinsic touches Herzberg's factors, not the three core elements of the definition."
          ],
          e: "Motivation = the process by which a person's efforts are energized (energy), directed (direction), and sustained (persistence) toward attaining a goal."
        },
        {
          q: "In Maslow's hierarchy, which need sits at the BOTTOM of the pyramid?",
          o: [
            "Physiological needs",
            "Esteem needs",
            "Self-actualization needs",
            "Social needs"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes, the base of the pyramid is the most basic survival level.",
            "Esteem sits high, just below the top; the base is the most basic survival level.",
            "Self-actualization is the very TOP of the pyramid, not the bottom.",
            "Social needs sit in the middle; the base of the pyramid is something more basic to survival."
          ],
          e: "Bottom-up order: physiological, safety, social, esteem, self-actualization. Each level must be substantially satisfied before the next becomes dominant."
        },
        {
          q: "In McGregor's Theory X, managers assume that employees…",
          o: [
            "inherently dislike work and must be coerced or controlled to perform",
            "naturally enjoy work and will seek out responsibility",
            "are motivated only by self-actualization needs",
            "have acquired a high need for achievement"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct: Theory X holds a negative view of workers requiring control.",
            "Enjoying work and seeking responsibility is the POSITIVE view; Theory X is the negative one.",
            "Self-actualization is Maslow; Theory X is a basic negative assumption about effort, not a needs level.",
            "Acquired need for achievement is McClelland; Theory X is McGregor's negative set of assumptions about workers."
          ],
          e: "Theory X is the negative view: employees dislike work and must be coerced/controlled. Theory Y is the positive view: employees can enjoy work, accept and seek responsibility, and exercise self-direction."
        },
        {
          q: "In Herzberg's two-factor theory, which of the following is a MOTIVATOR?",
          o: [
            "Achievement",
            "Salary",
            "Working conditions",
            "Company policy"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right: achievement is intrinsic to the work itself, a motivator.",
            "Salary is extrinsic; it can remove dissatisfaction but does not create satisfaction.",
            "Working conditions are extrinsic context, a hygiene factor, not an intrinsic motivator.",
            "Company policy is part of the surrounding context, a hygiene factor, not an intrinsic motivator."
          ],
          e: "Motivators (intrinsic): achievement, recognition, the work itself, responsibility, advancement, growth. Hygiene factors (extrinsic): salary, working conditions, company policy, supervision, relationships, status, security."
        },
        {
          q: "McClelland's three needs are described as ACQUIRED, meaning they are…",
          o: [
            "learned over time rather than innate",
            "present at birth and fixed for life",
            "arranged in a strict prepotent hierarchy",
            "identical for every employee"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct: acquired means the needs are learned, not inborn.",
            "Acquired is the OPPOSITE of innate; these needs are not present at birth and fixed.",
            "A strict prepotent hierarchy is Maslow's claim, not a feature of McClelland's acquired needs.",
            "Acquired needs differ across people; they are not identical for everyone."
          ],
          e: "McClelland's nAch, nPow, and nAff are acquired (learned), not innate, so individuals differ in their need profiles."
        },
        {
          q: "Goal-setting theory states that performance is highest when goals are…",
          o: [
            "specific and difficult but accepted",
            "vague and easy to guarantee success",
            "set as a general 'do your best' instruction",
            "kept secret from the employee"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes: specific, difficult, accepted goals drive the highest performance.",
            "Easy goals produce LOWER performance than difficult-but-accepted ones, and vagueness reduces direction.",
            "'Do your best' is a vague goal; specific goals outperform it.",
            "Goal-setting relies on the employee knowing and accepting the goal, plus feedback on progress, not secrecy."
          ],
          e: "Specific goals increase performance, and difficult goals, when accepted, beat easy ones. Self-generated feedback on progress strengthens the effect."
        },
        {
          q: "A nurse earns enough to live comfortably and now wants to lead a respected specialty unit and be recognized for her expertise. In Maslow's terms, which need has become dominant?",
          o: [
            "Esteem",
            "Physiological",
            "Safety",
            "Self-actualization"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Right: desire for status, recognition, and respect is the esteem level.",
            "Physiological is basic survival (food, shelter); her survival needs are already met.",
            "Safety is security and protection; she has moved beyond that toward recognition and respect.",
            "Self-actualization is realizing one's full potential; wanting recognition and respect points one level lower."
          ],
          e: "Wanting respect, status, and recognition reflects ESTEEM needs, which become dominant once physiological, safety, and social needs are substantially satisfied."
        },
        {
          q: "A firm gives everyone a 20 percent raise and renovates the cafeteria, yet engagement does not rise and employees still find the work boring. Herzberg would say the firm…",
          o: [
            "improved hygiene factors, which only removes dissatisfaction, while leaving motivators untouched",
            "added motivators, so satisfaction should have soared",
            "violated procedural justice in pay distribution",
            "raised self-efficacy without setting goals"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct: pay and facilities are hygiene factors, so they only reduce dissatisfaction.",
            "Raises and a cafeteria are hygiene factors, not motivators; that is why satisfaction did not soar.",
            "Procedural justice is equity theory; the question is about why hygiene improvements do not motivate.",
            "Self-efficacy and goal-setting are a different theory; here the issue is hygiene versus motivators."
          ],
          e: "Salary and working conditions are hygiene factors: improving them moves people from dissatisfied to no dissatisfaction, but motivation requires motivators in the work itself (achievement, the work itself, responsibility, growth)."
        },
        {
          q: "A salesperson is told, 'Improve your numbers somehow.' To apply goal-setting theory, the best fix is to…",
          o: [
            "set a specific, challenging target the salesperson accepts, with feedback on progress",
            "lower the target so success is guaranteed",
            "remove all targets to reduce pressure",
            "keep the goal vague so the salesperson stays flexible"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes: specificity, difficulty, acceptance, and feedback are the core levers.",
            "Easy, guaranteed goals produce lower performance than difficult-but-accepted ones.",
            "Removing targets eliminates the specific, difficult goal that drives higher performance.",
            "Vagueness is the original problem; goal-setting theory calls for specific goals, not flexibility through ambiguity."
          ],
          e: "Goal-setting theory prescribes specific and difficult-but-accepted goals plus feedback; 'improve somehow' is exactly the vague goal it warns against."
        },
        {
          q: "An assembly worker does one repetitive task. Managers add planning and quality-evaluation duties so she controls more of her own work. This is best described as…",
          o: [
            "job enrichment, which raises job depth",
            "job enlargement, which raises job scope",
            "job rotation across stations",
            "increasing skill variety only"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct: adding planning and evaluating responsibilities is vertical enrichment, raising control (job depth).",
            "Enlargement is HORIZONTAL (more tasks at the same level); adding planning and evaluating control is vertical.",
            "Rotation moves a worker between tasks; here duties of planning and evaluating are ADDED to one job.",
            "Skill variety is one JCM dimension, but adding planning and evaluating control is specifically the vertical move with its own name."
          ],
          e: "Job enrichment is vertical expansion that adds planning and evaluating responsibilities, increasing job depth (control over one's work). Enlargement is horizontal expansion of job scope."
        },
        {
          q: "Two analysts do identical work, but one learns the other earns more for the same effort. Equity theory predicts the under-rewarded analyst will most likely…",
          o: [
            "act to correct the inequity, for example by reducing effort or seeking a raise",
            "feel over-rewarded and work harder out of guilt",
            "ignore the comparison because absolute pay is what matters",
            "experience higher procedural justice"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Right: perceived under-reward triggers corrective behavior such as reducing inputs or demanding more.",
            "Over-reward applies when one's ratio is LARGER than the referent's; here the analyst is under-rewarded.",
            "Equity theory says comparisons matter, not just absolute pay; the lower ratio drives behavior.",
            "Discovering unequal pay for equal work lowers fairness perceptions; it does not raise procedural justice."
          ],
          e: "When the outcomes-to-inputs ratio is smaller than a referent's, the employee perceives under-reward and acts to restore equity (reduce inputs, seek more outcomes, change referents, or leave)."
        },
        {
          q: "An employee says, 'Even if I hit every target, the bonus is a mug I do not want.' Which expectancy-theory linkage is broken?",
          o: [
            "C: attractiveness of the reward",
            "A: the effort-performance linkage",
            "B: the performance-reward linkage",
            "None; this is a Maslow esteem issue"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct: the reward exists and is earned, but it does not satisfy the individual's goals.",
            "Linkage A asks whether effort produces performance; here the employee can hit targets, so A is intact.",
            "Linkage B asks whether performance brings rewards; here the reward is delivered, so B is intact; the problem is the reward itself.",
            "This is squarely an expectancy-theory problem about reward attractiveness, not a Maslow needs level."
          ],
          e: "Linkage C is the attractiveness of the reward (rewards to individual goals). The reward is earned (A and B intact) but unwanted, so motivation collapses at C."
        },
        {
          q: "A factory pays well and has good conditions, yet long-tenured workers are disengaged and turnover among ambitious staff is high while others happily stay. The BEST integrated diagnosis is that…",
          o: [
            "hygiene factors are satisfied but motivators and growth-need strength differ across employees, so enriched work is needed selectively",
            "all employees lack physiological needs satisfaction and need higher pay",
            "the firm should remove goals to lower pressure on ambitious staff",
            "equity is the sole issue and a uniform raise will fix engagement"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct: hygiene is handled; the split points to motivators and differing growth-need strength.",
            "Good pay and conditions mean physiological and hygiene needs are met; more pay will not address the missing motivators.",
            "Removing goals contradicts goal-setting theory and ignores the ambitious staff's hunger for achievement.",
            "A uniform raise is another hygiene move; it cannot supply the missing intrinsic motivators, and it ignores individual differences."
          ],
          e: "Pay and conditions are hygiene factors (satisfied). Disengagement signals missing motivators; the split between leavers and stayers reflects differing growth-need strength (JCM moderator) and need profiles (McClelland). The fix is selective job enrichment, not more hygiene."
        },
        {
          q: "A manager sets specific, difficult goals, but performance falls. Investigation shows staff do not believe they can do the task and lack resources. The MOST complete explanation combines…",
          o: [
            "low self-efficacy plus a broken effort-performance linkage, so accepted difficult goals alone are insufficient",
            "over-reward inequity that made staff complacent",
            "weak relatedness under self-determination theory",
            "Theory Y assumptions held by an autocratic manager"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct: without self-efficacy and a viable effort-performance path, hard goals cannot lift performance.",
            "Over-reward is an equity condition unrelated to disbelief in one's ability and missing resources.",
            "Relatedness concerns social connection; the described problem is belief in capability and resources to convert effort into performance.",
            "Theory Y is a positive view of workers; it does not explain why staff cannot turn effort into performance here."
          ],
          e: "Goal-setting requires self-efficacy (belief one can do the task); expectancy theory requires an intact effort-performance linkage (resources and ability). When both fail, even accepted difficult goals reduce rather than raise performance."
        },
        {
          q: "Two branches get the same bonus pool. Branch A is told exactly how bonuses are calculated and can appeal; Branch B is given no explanation and no recourse, yet receives identical amounts. Branch B is more demotivated. The BEST account is that…",
          o: [
            "distributive justice is equal but procedural justice differs, and the unfair process drives the gap",
            "Branch B has lower physiological needs satisfaction",
            "Branch A experiences over-reward inequity",
            "expectancy linkage A is broken for Branch B"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct: equal amounts mean distributive justice is equal; the difference is in the fairness of the process.",
            "Pay amounts are identical and adequate; this is not about physiological needs.",
            "Both branches receive the same amount, so neither is over-rewarded relative to the other on amount.",
            "Linkage A concerns turning effort into performance; the issue here is fairness of how rewards are decided, not effort-to-performance."
          ],
          e: "Identical amounts mean distributive justice (fairness of amount/allocation) is equal. The difference is procedural justice: a transparent, appealable process is fair; an opaque, recourse-less one is not, and the unfair process demotivates Branch B."
        },
        {
          q: "A company replaces a flat salary with pay-for-performance and constant productivity dashboards. Output rises briefly, then intrinsic motivation falls. Through self-determination theory, the BEST explanation is that…",
          o: [
            "the controls and pay-for-performance reduced feelings of autonomy, undermining intrinsic motivation despite higher extrinsic incentives",
            "employees crossed the self-determination threshold into amotivation by gaining autonomy",
            "relatedness rose so sharply it crowded out competence",
            "the change satisfied all three basic needs equally"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct: monitoring and pay-for-performance decrease autonomy, eroding intrinsic motivation.",
            "Amotivation is the low end of the continuum and is not reached by GAINING autonomy; here autonomy was reduced, not gained.",
            "Constant dashboards and individual pay-for-performance do not boost relatedness; the harmed need is autonomy.",
            "The change frustrated autonomy rather than satisfying all three needs equally, which is why intrinsic motivation fell."
          ],
          e: "In SDT, intrinsic motivation depends on autonomy, competence, and relatedness. Monitoring and pay-for-performance reduce felt autonomy, so extrinsic gains cannot offset the loss of self-determined motivation."
        },
        {
          q: "A salesperson works hard, hits her targets, and values the promised cash bonus, yet the firm keeps cutting payouts arbitrarily after the fact. Using expectancy AND equity theory, the BEST diagnosis is that…",
          o: [
            "the performance-reward linkage and procedural justice are both broken, so even attractive, earned rewards stop motivating",
            "the effort-performance linkage failed because she could not perform",
            "reward attractiveness failed because she did not value cash",
            "she is over-rewarded relative to her referents"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct: performance is met but rewards are cut arbitrarily, breaking linkage B and procedural justice together.",
            "Linkage A is intact; she works hard and hits targets, so the failure is downstream of performance.",
            "She values the cash bonus, so attractiveness (linkage C) is intact; the failure is in delivering and fairly deciding the reward.",
            "Arbitrary cuts make her under-rewarded for her inputs, not over-rewarded relative to referents."
          ],
          e: "Expectancy linkage B (performance-reward) breaks when earned rewards are withheld, and arbitrary after-the-fact cuts violate procedural justice (fairness of the process). Effort-performance (A) and attractiveness (C) are intact, but the broken B-link and unfair process kill motivation."
        },
        {
          q: "A company keeps raising already-generous salaries and improving an already-safe workplace, puzzled that motivation barely moves. Using Maslow's hierarchy, the BEST explanation is that…",
          o: [
            "Maslow predicts money motivates infinitely, so the raises should have worked — the data must be wrong",
            "a substantially satisfied need no longer motivates; with lower-order (physiological/safety) needs already met, further gains there add little, and motivation now depends on higher-order needs",
            "Maslow says higher-order needs must be fully satisfied before lower-order ones, so the firm worked on the wrong level",
            "Maslow's hierarchy classifies pay as a higher-order need, so raises should always be the strongest motivator"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Maslow's core point is the opposite — a met need loses its motivating power, so endless raises hit diminishing returns.",
            "Right idea — that's the one.",
            "The hierarchy runs the other way: lower-order needs are addressed before higher-order ones become dominant.",
            "Pay maps mostly to LOWER-order needs (physiological/safety), not higher-order — so it isn't an unlimited motivator."
          ],
          e: "In Maslow's hierarchy a substantially satisfied need no longer drives behavior. The firm has already met lower-order (physiological and safety) needs, so additional pay and safety improvements add little motivation; to motivate further it must address the now-dominant higher-order needs — social belonging, esteem, and self-actualization."
        }
      ],
      cases: [
        {
          title: "When the Paycheck Collapsed at Cedar Bank",
          scenario: "Before 2019, Cedar Bank's Beirut staff felt well paid and secure. Then the banking crisis and capital controls hit: their dollar salaries became trapped 'lollars' worth a fraction of fresh dollars, and the lira portion of pay collapsed with hyperinflation so that a senior teller's monthly salary no longer covers groceries and the EDL grid failure means generator 'ishtirak' subscription bills now eat what little remains. Management, short on cash, cannot raise pay but insists staff 'stay motivated and customer-focused.' To make matters worse, employees have learned that a few colleagues poached by a Gulf-owned bank next door are paid entirely in fresh dollars for nearly identical work. HR proposes 'motivational' perks: an employee-of-the-month plaque, a refreshed break room, and a new mission statement. Morale and performance keep sinking, and several experienced staff are quietly looking to emigrate.",
          qs: [
            {
              q: "Use Maslow's hierarchy to explain what the salary collapse did to staff motivation, and why HR's perks miss the mark.",
              a: "When lollar and lira pay collapsed below subsistence, salaries that once supported higher needs were dragged down so that staff are now preoccupied with PHYSIOLOGICAL needs (food, groceries) and SAFETY needs (income security, paying generator ishtirak and surviving the crisis). In Maslow's terms, a lower-level need that is no longer substantially satisfied becomes dominant again, so esteem-level perks like an employee-of-the-month plaque cannot motivate people whose basic survival needs are unmet. HR is offering esteem and self-actualization rewards while the base of the pyramid has collapsed."
            },
            {
              q: "Apply Herzberg's two-factor theory to the role of salary here. What does the collapse of a hygiene factor do, and can the perks compensate?",
              a: "Salary is a HYGIENE (extrinsic) factor. Normally its presence only removes dissatisfaction; here the salary has not merely stagnated but collapsed via trapped lollars and hyperinflated lira pay, producing severe job DISSATISFACTION that no amount of intrinsic motivator can offset. A refreshed break room is another hygiene factor and a plaque or mission statement (recognition/the work itself) are motivators, but Herzberg's two continua mean motivators cannot cure a dissatisfaction problem: you cannot motivate people out of a broken hygiene factor. The collapsed pay must be addressed as a dissatisfier before any motivator can have effect."
            },
            {
              q: "Use equity theory to analyze the comparison with the Gulf-owned bank's fresh-dollar staff, including referents and the justice concepts.",
              a: "Cedar's staff now compare their outcomes-to-inputs ratio with a salient REFERENT: former colleagues at the Gulf-owned bank doing nearly identical work (similar inputs) but paid entirely in fresh dollars (far higher real outcomes). Receiving devalued lollars and collapsed lira pay for the same work creates a clear perception of UNDER-REWARD inequity. DISTRIBUTIVE JUSTICE (fairness of the amount of rewards) is violated because real pay is wildly unequal for equal work, and to the extent management gives no explanation or control over the lollar trap, PROCEDURAL JUSTICE suffers too. Equity theory predicts corrective behavior: reduced effort, lower customer focus, and exit (emigration), exactly what Cedar is seeing."
            }
          ]
        },
        {
          title: "Aramoun Logistics: Promises Worth Nothing",
          scenario: "Aramoun Logistics runs a fleet of delivery drivers across Lebanon. To boost performance the operations manager rolls out an incentive scheme: drivers who exceed a difficult monthly delivery target earn a 'fresh dollar' bonus on top of their base lira salary. In practice the scheme is failing. First, the lira base salary has collapsed with hyperinflation so it barely covers a tank of fuel, and drivers spend hours in fuel queues caused by the EDL and import crisis, making the difficult target almost impossible to hit no matter how hard they push. Second, when a few drivers do hit the target, the company, starved of fresh dollars, quietly pays the 'bonus' in trapped lollars worth a fraction of its promised value. Third, drivers have noticed that dispatchers' relatives on the same routes are credited with deliveries they did not make. Drivers are demoralized, some have stopped trying, and the manager cannot understand why a generous bonus is not working.",
          qs: [
            {
              q: "Use expectancy theory's three linkages to diagnose why the bonus scheme fails to motivate the drivers.",
              a: "LINKAGE A (effort-performance) is broken: hyperinflation-eroded pay, fuel queues, and the import crisis mean that no matter how hard drivers try, hitting the difficult target is nearly impossible, so effort does not translate into performance. LINKAGE B (performance-reward) is broken: drivers who do perform are paid the 'bonus' in trapped lollars worth a fraction of the promised fresh dollars, so performance does not reliably yield the promised reward. LINKAGE C (attractiveness of reward) is also damaged: a lollar bonus is far less attractive than the fresh dollars promised. With all three linkages weakened, expectancy theory predicts motivation collapses, which is what Aramoun observes."
            },
            {
              q: "Apply equity theory to the dispatchers' relatives being credited with deliveries they did not make.",
              a: "Drivers compare their outcomes-to-inputs ratio against REFERENTS, here the dispatchers' relatives on the same routes. Those relatives receive credit (outcomes) for deliveries they did not make (minimal inputs), giving them a far better outcomes-to-inputs ratio than honest drivers who push hard. This is perceived UNDER-REWARD inequity for the real drivers and a violation of DISTRIBUTIVE JUSTICE (unfair allocation of rewards) and PROCEDURAL JUSTICE (an unfair, manipulated process for crediting deliveries). Equity theory predicts they will restore balance by reducing inputs (some have stopped trying), distorting the metrics, or leaving."
            },
            {
              q: "Combining goal-setting and expectancy theory, what should the manager change so effort can produce rewarded, attractive performance?",
              a: "Goal-setting theory requires goals that are specific and difficult but ACCEPTED and attainable; under fuel queues and collapsed conditions the current target is not realistically attainable, so it must be reset to a level drivers can hit through effort, restoring the effort-performance linkage (A) and supporting self-efficacy. Expectancy theory then requires repairing linkage B by paying the promised bonus in fresh dollars (or its true value) reliably and transparently when targets are met, and protecting linkage C by ensuring the reward is genuinely attractive (fresh dollars, not devalued lollars). Crediting deliveries fairly restores procedural and distributive justice so the rewarded performance is seen as legitimate."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Compare Maslow's hierarchy of needs, Herzberg's two-factor theory, and McClelland's three-needs theory. What does each claim, what is the evidence for and against each, and what practical guidance survives the criticism?",
          outline: [
            "Maslow: five needs in a hierarchy (physiological, safety, social, esteem, self-actualization); substantial satisfaction of each level before the next dominates",
            "Maslow critique: little evidence for ranking or definite hierarchy (Wahba & Bridwell, 1976); little support for prepotency (Kanfer et al., 2017); doesn't predict specific behaviors (Campbell & Pritchard, 1976)",
            "Herzberg: hygiene (extrinsic — remove dissatisfaction) vs. motivators (intrinsic — create satisfaction); two continua, not one",
            "Herzberg critique: critical incident method → self-serving bias; white-collar samples, blue-collar replication failures",
            "McClelland: acquired needs — nAch, nPow, nAff; evidence: high-nAch employees show positive moods, task interest, high-stakes performance; nPow and nAff supported",
            "Surviving guidance: enrich the work itself, don't expect pay/conditions alone to motivate; diagnose individual need profiles"
          ],
          model: "Maslow's hierarchy of needs proposes five needs — physiological, safety, social, esteem, and self-actualization — arranged so that each level must be substantially satisfied before the next becomes dominant. Its intuitive appeal made it hugely popular in the 1960s and 1970s, but the evidence is unkind: very little support exists for the ranking of needs or even for a definite hierarchy at all (Wahba & Bridwell, 1976), there is little support for the prepotent nature of needs or the general utility of need theories (Kanfer et al., 2017), and such theories do not predict specific behaviors (Campbell & Pritchard, 1976). Herzberg's two-factor (motivation-hygiene) theory makes a sharper claim: extrinsic HYGIENE factors — supervision, company policy, salary, working conditions, relationships, status, security — can only remove dissatisfaction, while intrinsic MOTIVATORS — achievement, recognition, the work itself, responsibility, advancement, growth — create satisfaction and motivation. Satisfaction and dissatisfaction thus sit on two separate continua: the opposite of satisfaction is merely no satisfaction. The critique here is methodological: the critical incident method (“recall when you felt good or bad about your job”) invites self-serving bias — people credit the work for highs and blame the context for lows — and his white-collar professional samples did not always replicate among blue-collar workers. McClelland's three-needs theory shifts from universal hierarchies to ACQUIRED needs: the need for achievement (drive to succeed against standards), need for power (make others behave as they otherwise wouldn't), and need for affiliation (friendly, close relationships). Its evidence is comparatively solid: high-nAch employees show more positive moods, greater task interest, and perform very well in high-stakes conditions, and research supports nPow and nAff. What survives across the three? First, money and conditions are necessary but insufficient — they prevent dissatisfaction more than they energize. Second, the work itself is the prime mover: achievement, responsibility, and growth motivate. Third, people differ in their (learned) need profiles, so motivation should be diagnosed individually, not assumed from a universal pyramid."
        },
        {
          q: "Explain expectancy theory and equity theory, and show how the two together explain why a well-funded incentive plan can still fail to motivate.",
          outline: [
            "Expectancy: action depends on expectation that the act is followed by an outcome and on the outcome's attractiveness",
            "Three linkages: A effort→performance; B performance→reward; C reward attractiveness (reward→individual goals); failure of ANY link kills motivation",
            "Equity: compare own outcomes/inputs ratio with referents (persons, systems, selves); inequity (under/over-reward) triggers correction",
            "Justice concepts: distributive (amount/allocation fairness), procedural (process fairness)",
            "Synthesis: incentive plans fail if effort can't produce performance (A), performance isn't reliably rewarded (B), rewards aren't attractive (C), or ratios feel unfair vs. referents even when absolute pay is high",
            "Practical checklist for designing incentives"
          ],
          model: "Expectancy theory holds that an individual tends to act in a certain way based on the expectation that the act will be followed by a given outcome and on the attractiveness of that outcome. The expectancy model chains three linkages: A, the effort–performance linkage — will my effort actually produce performance?; B, the performance–reward linkage — will performance actually bring organizational rewards?; and C, the attractiveness of the reward — do those rewards serve my individual goals? Motivation requires all three: a broken machine (A), a biased appraisal (B), or an unwanted prize (C) each zeroes the chain. Equity theory adds a social comparison: employees compare their outcomes-to-inputs ratio with that of relevant REFERENTS — other persons, systems, or themselves in past roles — and act to correct perceived inequity, whether under-rewarded or over-rewarded. Two justice perceptions govern the verdict: distributive justice, the perceived fairness of the amount and allocation of rewards, and procedural justice, the perceived fairness of the process that determines them. Together the theories explain failing incentive plans precisely. A company may budget generous bonuses (high absolute outcomes) and still demotivate: if targets are unreachable, the effort–performance link snaps; if bonus allocation seems arbitrary or political, the performance–reward link and procedural justice collapse; if rewards are uniform gift cards nobody values, attractiveness fails; and if a colleague with visibly fewer inputs earns the same bonus, under-reward inequity triggers reduced effort, demands for redress, or exit — even though pay rose in absolute terms. The design checklist follows: make performance attainable through effort (training, resources), tie rewards to performance through transparent, consistently applied procedures, tailor rewards to what recipients actually want, and mind the comparisons employees inevitably make."
        },
        {
          q: "“Algorithmic management threatens precisely the psychological needs that fuel motivation.” Present self-determination theory (the continuum and the basic needs), then use it to analyze how the six algorithmic management functions affect motivation and how systems can be redesigned to enhance it.",
          outline: [
            "SDT continuum: amotivation → extrinsic motivation (external, introjected, identified, integrated regulation) → intrinsic motivation; self-determination threshold before identified/integrated",
            "Basic needs: competence, relatedness, autonomy; satisfying all three enhances intrinsic motivation (Gagné & Deci, 2005) and outcomes (satisfaction, performance, OCB, well-being)",
            "Six functions (Parent-Rocheleau & Parker, 2022): monitoring; task assignment/goal setting; performance management; scheduling; compensation management; job termination",
            "Effects (Gagné et al., 2022): monitoring ↓autonomy/intrinsic motivation; simplified tasks ↓competence; performance management ↓autonomous motivation, competitive climate; unpredictable scheduling ↓relatedness; pay-for-performance ↓autonomy; deactivation ↓autonomy & competence",
            "Redesign (Parent-Rocheleau et al., 2024): transparency; humans in the loop; limit surveillance; fair productivity management; pay stability; constructive feedback; preserve relationships → needs satisfaction → self-determined motivation",
            "Conclusion: the algorithm's design, not its existence, decides the motivational outcome"
          ],
          model: "Self-determination theory (Ryan & Deci, 2000) maps motivation on a continuum from amotivation, through four types of extrinsic motivation — external regulation, introjected regulation, identified regulation, and integrated regulation — to intrinsic motivation, with the self-determination threshold crossed at identified regulation: beyond it, people act from endorsed values rather than external pushes. What moves a person along the continuum is the satisfaction of three basic psychological needs — competence, relatedness, and autonomy: “satisfaction of the three psychological needs will enhance employees' intrinsic motivation” (Gagné & Deci, 2005), and together they raise job satisfaction, effective performance, organizational citizenship behaviors, and well-being. Algorithmic management matters because organizations now delegate six management functions to algorithms (Parent-Rocheleau & Parker, 2022): monitoring, task assignment and/or goal setting, performance management, scheduling, compensation management, and job termination. Analyzed through SDT (Gagné et al., 2022), each function tends to frustrate a need: monitoring decreases autonomy and harms intrinsic motivation; algorithmic task assignment simplifies work, starving the need for competence; performance management undermines autonomous motivation and fosters a competitive climate; unpredictable scheduling impedes relatedness at home and at work; pay-for-performance compensation reduces feelings of autonomy; and automatic deactivation for “low performance” strikes both autonomy and competence. Hence the statement is accurate — by default. But the lecture's final framework (Parent-Rocheleau et al., 2024) shows the threat is a design choice, not destiny: systems that ensure transparency and keep humans in the loop, paired with policies that limit surveillance and monitoring, manage productivity fairly, maintain pay stability, provide constructive feedback, and preserve relationships, support autonomy, competence, and relatedness — and thereby self-determined motivation. The managerial conclusion: judge an algorithmic system by the same standard as a human manager — whether it feeds or starves the three needs that fuel motivation."
        }
      ]
    },
    {
      id: "w12",
      week: 12,
      title: "Managing Groups and Teams",
      blurb: "Group development, structure, conflict, teams vs. groups, and psychological safety.",
      sections: [
        {
          h: "Groups and Group Development",
          blocks: [
            {
              t: "def",
              term: "Group",
              d: "Two or more interacting and interdependent individuals who come together to achieve specific goals. FORMAL groups are defined by the organization; INFORMAL groups arise naturally."
            },
            {
              t: "list",
              title: "Stages of group development (5)",
              items: [
                "Stage 1 — Forming",
                "Stage 2 — Storming",
                "Stage 3 — Norming",
                "Stage 4 — Performing",
                "Stage 5 — Adjourning"
              ]
            },
            {
              t: "list",
              title: "Limits of the stage model",
              items: [
                "Assumes the group becomes more effective as it progresses through the first four stages — not always true; group behavior is more complex",
                "The process is not always linear; several stages may occur simultaneously; groups may regress",
                "Some conflict can be conducive to high performance",
                "It ignores the organizational context (culture, structure, leadership, resources, etc.)"
              ]
            },
            {
              t: "p",
              text: "Group performance/satisfaction model: external conditions imposed on the group and group member resources feed into group structure; group structure, group processes, and group tasks together shape performance and satisfaction."
            },
            {
              t: "list",
              title: "External conditions imposed on the group",
              items: [
                "Organization's strategy",
                "Authority relationships",
                "Formal rules and regulations",
                "Availability of resources",
                "Employee selection criteria"
              ]
            },
            {
              t: "list",
              title: "Group member resources",
              items: [
                "Knowledge",
                "Abilities",
                "Skills",
                "Personality traits"
              ]
            }
          ]
        },
        {
          h: "Group Structure",
          blocks: [
            {
              t: "def",
              term: "Role",
              d: "Behavior patterns expected of someone occupying a given position in a social unit."
            },
            {
              t: "def",
              term: "Norms",
              d: "Standards or expectations that are accepted and shared by a group's members."
            },
            {
              t: "def",
              term: "Status",
              d: "A prestige grading, position, or rank within a group (status systems)."
            },
            {
              t: "def",
              term: "Social loafing",
              d: "The tendency for individuals to expend less effort when working collectively than when working individually (a group-size effect)."
            },
            {
              t: "def",
              term: "Group cohesiveness",
              d: "The degree to which group members are attracted to one another and share the group's goals. Cohesiveness × goal alignment matrix: high cohesiveness + high alignment with organizational goals → STRONG increase in productivity; low cohesiveness + high alignment → moderate increase; high cohesiveness + low alignment → DECREASE in productivity; low cohesiveness + low alignment → no significant effect."
            }
          ]
        },
        {
          h: "Group Processes: Conflict",
          blocks: [
            {
              t: "def",
              term: "Conflict",
              d: "Perceived incompatible differences that result in interference or opposition."
            },
            {
              t: "list",
              title: "Three views of conflict",
              items: [
                "Traditional view: all conflict is bad and must be avoided",
                "Human relations view: conflict is a natural and inevitable outcome in any group",
                "Interactionist view: some conflict is NECESSARY for a group to perform effectively"
              ]
            },
            {
              t: "def",
              term: "Functional vs. dysfunctional conflicts",
              d: "Functional conflicts support a group's goals and improve its performance; dysfunctional conflicts prevent a group from achieving its goals. The conflict–performance curve is an inverted U: at low/no conflict the group is apathetic, stagnant, unresponsive to change, lacking new ideas (dysfunctional → low performance); at an OPTIMAL level conflict is functional — the group is viable, self-critical (high performance); at high conflict the group is disruptive, chaotic, uncooperative (dysfunctional → low performance)."
            },
            {
              t: "list",
              title: "Types of conflict",
              items: [
                "Task conflict: conflict over content and goals of the work",
                "Relationship conflict: conflict based on interpersonal relationships",
                "Process conflict: conflict over how work gets done"
              ]
            },
            {
              t: "list",
              title: "How to resolve conflicts? (Behfar et al., 2008)",
              items: [
                "Voting as a procedure",
                "Compromise or consensus to reach agreement",
                "Discussion or debate of ideas and opinions",
                "Open communication: the level of affect or emotion in team discussions",
                "Specific solutions for fixing or responding to specific problems",
                "Avoidance or ignoring of conflict by the team",
                "Rotation of responsibilities: procedures for allocating responsibilities within the team"
              ]
            },
            {
              t: "table",
              title: "Type of conflict → resolution that increases performance and satisfaction (Behfar et al., 2008)",
              cols: [
                "Type of conflict",
                "Resolution approach"
              ],
              rows: [
                [
                  "Task",
                  "Use discussion/debate and open communication to reach compromise/consensus"
                ],
                [
                  "Relationship",
                  "Use discussion/debate and specific solutions to avoid/ignore conflicts [decreased satisfaction]"
                ],
                [
                  "Procedure (process)",
                  "Discussion/debate and compromise/consensus to establish rotating responsibilities"
                ]
              ]
            },
            {
              t: "p",
              text: "Group tasks: it is the complexity and interdependence of tasks that influence a group's effectiveness."
            }
          ]
        },
        {
          h: "Groups vs. Teams",
          blocks: [
            {
              t: "def",
              term: "Work teams",
              d: "Groups whose members work intensely on a specific, common goal using their positive synergy, individual and mutual accountability, and complementary skills."
            },
            {
              t: "def",
              term: "Work groups",
              d: "Groups that interact primarily to share information and to make decisions to help each member do their job more efficiently and effectively."
            },
            {
              t: "table",
              title: "Groups versus teams",
              cols: [
                "Work teams",
                "Work groups"
              ],
              rows: [
                [
                  "Leadership role is shared",
                  "One leader clearly in charge"
                ],
                [
                  "Accountable to self and team",
                  "Accountable only to self"
                ],
                [
                  "Team creates specific purpose",
                  "Purpose is same as broader organizational purpose"
                ],
                [
                  "Work is done collectively",
                  "Work is done individually"
                ],
                [
                  "Meetings feature open-ended discussion and collaborative problem-solving",
                  "Meetings characterized by efficiency; no collaboration or open-ended discussion"
                ],
                [
                  "Performance measured directly by evaluating collective work output",
                  "Performance measured indirectly by its influence on others"
                ],
                [
                  "Work is decided upon and done together; can be quickly assembled, deployed, refocused, and disbanded",
                  "Work decided by group leader and delegated to individual members"
                ]
              ]
            },
            {
              t: "list",
              title: "Characteristics of effective teams (9)",
              items: [
                "Clear goals",
                "Relevant skills",
                "Mutual trust",
                "Unified commitment",
                "Good communication",
                "Negotiating skills",
                "Appropriate leadership",
                "Internal support",
                "External support"
              ]
            }
          ]
        },
        {
          h: "Team Psychological Safety (instructor addition)",
          blocks: [
            {
              t: "def",
              term: "Team psychological safety",
              d: "“A shared belief that the team is safe for interpersonal risk taking” (Edmondson, 1999). It DIFFERS from group cohesiveness: cohesiveness can reduce willingness to disagree with others (e.g., groupthink — Janis, 1982). Psychological safety is associated with learning behavior (seeking feedback, sharing information, asking for help, speaking up) and with individual and team performance (Edmondson, 1999; Edmondson & Bransby, 2023). Example: Google's Project Aristotle."
            },
            {
              t: "list",
              title: "Edmondson's (1999) psychological safety scale — sample items",
              items: [
                "If you make a mistake on this team, it is often held against you (reverse-scored)",
                "Members of this team are able to bring up problems and tough issues",
                "People on this team sometimes reject others for being different (reverse-scored)",
                "It is safe to take a risk on this team",
                "It is difficult to ask other members of this team for help (reverse-scored)",
                "No one on this team would deliberately act in a way that undermines my efforts",
                "Working with members of this team, my unique skills and talents are valued and utilized"
              ]
            },
            {
              t: "list",
              title: "How to foster team psychological safety",
              items: [
                "Care about team members as individuals",
                "Actively solicit questions",
                "Offer employees multiple ways to share their thoughts",
                "Show that you value and appreciate ideas",
                "Promote positive dialogue and discussion",
                "Be specific in your information, expectations, and commitments",
                "Explain the reasons for change",
                "Acknowledge your mistakes"
              ]
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "Which pair of features BEST distinguishes a group from a random crowd?",
          o: [
            "Interaction and interdependence aimed at specific goals",
            "Physical closeness and a shared location",
            "Being supervised by the same manager",
            "Having identical job titles"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Solid choice.",
            "People standing near each other are not necessarily a group; the lecture stresses two relational features, not mere location.",
            "Reporting to one manager can create a group, but it is not the defining criterion in the lecture's definition.",
            "Shared titles do not make people interact or depend on one another; recall the two-word relational test in the definition."
          ],
          e: "A group is two or more INTERACTING and INTERDEPENDENT individuals who come together to achieve specific goals. Mere proximity, shared bosses, or titles are not the definition."
        },
        {
          q: "In the five-stage model, which stage is characterized by intragroup conflict over leadership and direction?",
          o: [
            "Storming",
            "Forming",
            "Norming",
            "Performing"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct.",
            "This earlier stage is marked by politeness and uncertainty as members get oriented, not by open conflict.",
            "At this stage close relationships and a sense of cohesiveness have already settled the conflict.",
            "By this stage the structure is accepted and energy goes to the task, not to fighting over direction."
          ],
          e: "Storming is the conflict stage: members resist the group's constraints and clash over who leads and where the group is headed, before norming settles it."
        },
        {
          q: "\"Behavior patterns expected of someone occupying a given position in a social unit\" defines a…",
          o: [
            "Role",
            "Norm",
            "Status",
            "Task"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right.",
            "This term refers to standards SHARED by the whole group, not expectations tied to one position.",
            "This term is about prestige, rank, or grading within the group, not position-based behavior patterns.",
            "This is the work itself; the question asks about expected behavior for a position."
          ],
          e: "Role = behavior patterns expected of someone in a given position. Norms are shared standards; status is a prestige grading or rank."
        },
        {
          q: "Social loafing is primarily a consequence of which group-structure variable?",
          o: [
            "Group size",
            "Group status hierarchy",
            "Group roles",
            "Group cohesiveness"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct.",
            "Prestige rankings shape voice and influence, but loafing is described as an effect of how many people share the work.",
            "Expected behavior patterns for a position do not, by themselves, dilute individual effort the way this variable does.",
            "Attraction among members can actually curb free-riding; the loafing effect is tied to a different structural variable."
          ],
          e: "Social loafing is a GROUP-SIZE effect: as collective size grows, individuals tend to expend less effort than they would working individually."
        },
        {
          q: "Which is one of the nine characteristics of effective teams?",
          o: [
            "External support",
            "Identical member personalities",
            "The largest possible size",
            "Continuous direct supervision"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes.",
            "Effective teams need complementary, not identical, members; sameness is not on the list of nine.",
            "Bigger is not better here; size is not one of the nine characteristics and large size invites social loafing.",
            "Effective teams feature shared leadership and mutual trust, not constant oversight; this is not among the nine."
          ],
          e: "The nine: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, internal support, external support."
        },
        {
          q: "According to the lecture, a work GROUP primarily exists to…",
          o: [
            "Share information and make decisions that help each member do their own job",
            "Work collectively on a specific common goal using positive synergy",
            "Hold members mutually accountable for a shared output",
            "Create its own purpose distinct from the organization's"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct.",
            "Working collectively with positive synergy describes a work TEAM, not a work group.",
            "Mutual accountability for a shared output is a team feature; group members are accountable mainly to themselves.",
            "Creating a self-defined purpose is a team trait; a group's purpose is the same as the broader organizational purpose."
          ],
          e: "Work groups interact mainly to share information and make decisions that help each member do their own job; teams work collectively with positive synergy and mutual accountability."
        },
        {
          q: "A newly formed project team spends its first meeting with members being overly polite, unsure of their roles, and waiting for the manager to dictate direction. Which stage is this, and what should the manager expect NEXT?",
          o: [
            "Forming now; expect storming as conflict over roles and direction surfaces",
            "Norming now; expect performing as the group reaches peak output",
            "Storming now; expect adjourning as the team wraps up",
            "Performing now; expect forming as new members join"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct.",
            "Norming features accepted relationships and cohesiveness; polite uncertainty and waiting for direction are earlier behaviors.",
            "Storming is marked by open conflict, not tentative politeness; and adjourning is the wrap-up of a completed task.",
            "Performing means the group is already productive on its task; this team has not yet even sorted out roles."
          ],
          e: "Politeness, role uncertainty, and dependence on the leader signal FORMING. The conflict of STORMING typically follows as members test roles and direction."
        },
        {
          q: "A sales unit of 12 people produces less per head than three units of 4. Effort visibly drops as the unit grows. Which concept best explains this, and what is one fix?",
          o: [
            "Social loafing; preserve individual accountability or shrink the unit",
            "Groupthink; encourage more cohesion among the twelve",
            "Functional conflict; increase the level of disagreement",
            "Adjourning; disband and reassign everyone"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Right.",
            "Groupthink is about suppressed dissent in cohesive groups, not declining per-person effort as size grows; and more cohesion would not fix effort dilution here.",
            "Functional conflict relates to task disagreement and performance, not to effort declining with headcount.",
            "Adjourning is the final stage of a completed group's life, not an explanation for effort dropping with size."
          ],
          e: "Effort falling as collective size rises is SOCIAL LOAFING, a group-size effect. Identifiable individual contributions and accountability (or smaller units) counter it."
        },
        {
          q: "A tight-knit team adores one another but has quietly adopted the norm of doing the minimum and resisting the company's new targets. Per the cohesiveness-by-alignment matrix, the likely result is…",
          o: [
            "A decrease in productivity",
            "A strong increase in productivity",
            "A moderate increase in productivity",
            "No significant effect on productivity"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct.",
            "A strong increase happens only when high cohesiveness aligns WITH organizational goals; here the goals are opposed.",
            "A moderate increase is the LOW-cohesiveness, high-alignment cell; this team is highly cohesive and misaligned.",
            "No significant effect is the low-cohesiveness, low-alignment cell; this team is highly cohesive, so it actively pulls the wrong way."
          ],
          e: "High cohesiveness + LOW alignment with organizational goals = a DECREASE: a united group efficiently pulling in the wrong direction."
        },
        {
          q: "On a committee, two members argue heatedly about WHETHER the report should prioritize cost or quality, while another pair argues about WHO should chair meetings and assign sections. Classify these two disputes.",
          o: [
            "Task conflict and process conflict",
            "Relationship conflict and task conflict",
            "Process conflict and relationship conflict",
            "Status conflict and task conflict"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct.",
            "Neither dispute is interpersonal/personal here; one is about the content/goals of the work and the other about how work is organized.",
            "The chairing/assignment dispute is about HOW work gets done, not about interpersonal friction.",
            "The lecture's typology is task, relationship, and process; 'status conflict' is not one of the three named types."
          ],
          e: "Cost vs. quality is TASK conflict (content and goals); who chairs and assigns work is PROCESS conflict (how work gets done). Relationship conflict would be interpersonal."
        },
        {
          q: "A manager wants to know if a unit is psychologically safe and asks members: \"If you make a mistake here, is it often held against you?\" A 'yes' to this item indicates…",
          o: [
            "LOW psychological safety (it is a reverse-scored item)",
            "HIGH psychological safety, since members are honest",
            "HIGH cohesiveness, which guarantees safety",
            "Strong functional conflict in the team"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct.",
            "On Edmondson's scale this is reverse-scored: agreeing that mistakes are held against you signals the absence of safety, not its presence.",
            "Cohesiveness is not the same as psychological safety; agreement here marks an unsafe climate regardless of how close the team feels.",
            "This item measures interpersonal risk-taking safety, not the level or function of conflict."
          ],
          e: "\"Mistakes are held against you\" is a REVERSE-SCORED item; agreement signals LOW psychological safety. Edmondson's scale uses such items to detect an unsafe climate."
        },
        {
          q: "A leader wants more candor in a harmony-loving team. Which single action most directly builds psychological safety per the lecture's list?",
          o: [
            "Openly acknowledge her own mistakes",
            "Reward members who never disagree with her",
            "Keep expectations vague so people feel free",
            "Make every error count against the person's review"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct.",
            "Rewarding agreement suppresses the very dissent psychological safety is meant to enable; this feeds groupthink, not safety.",
            "The list calls for being SPECIFIC in information, expectations, and commitments; vagueness undermines safety rather than building it.",
            "Holding errors against people is a reverse-scored marker of an UNSAFE climate, the opposite of what is needed."
          ],
          e: "Acknowledging your own mistakes is on the lecture's list of ways to foster psychological safety; it models fallibility and makes interpersonal risk feel safe."
        },
        {
          q: "A consultant says, \"Your team underperforms because it never argues, so just inject conflict.\" Using the three views and the conflict-performance curve, what is the BEST critique of this advice?",
          o: [
            "It is partly right: too little conflict causes apathy, but only an OPTIMAL, functional LEVEL helps; raw conflict can tip into chaos",
            "It is fully correct: more conflict always raises performance",
            "It is fully wrong: the traditional view shows all conflict harms performance",
            "It is wrong because conflict type is irrelevant; only cohesiveness matters"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct.",
            "The inverted-U curve shows performance falls again at HIGH conflict; 'always raises' ignores the disruptive, chaotic extreme.",
            "The traditional view is only one of three; the interactionist view and the curve both show SOME conflict is necessary, so 'all conflict harms' is too strong.",
            "Type is far from irrelevant; task conflict tends to help while relationship conflict tends to hurt, so type shapes the outcome."
          ],
          e: "The curve is an inverted U: low/no conflict yields apathy and stagnation, an OPTIMAL level is functional (viable, self-critical), and high conflict is chaotic. The fix is the right LEVEL and TYPE of conflict, not just 'more.'"
        },
        {
          q: "A relationship conflict between two members is poisoning a team. Per Behfar et al. (2008), which approach is recommended, and what is its KNOWN trade-off?",
          o: [
            "Discussion plus specific solutions and some avoidance of the personal issue; trade-off is decreased satisfaction",
            "Voting and rotating responsibilities; trade-off is decreased productivity",
            "Discussion/open communication toward compromise; trade-off is none",
            "Maximizing the conflict to surface all feelings; trade-off is faster resolution"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct.",
            "Rotating responsibilities is the prescription for PROCESS conflict, not relationship conflict; and the noted trade-off here is about satisfaction, not productivity.",
            "Open communication toward compromise/consensus is Behfar's prescription for TASK conflict; relationship conflict is handled differently and does carry a cost.",
            "Maximizing relationship conflict is not recommended; the curve warns the high extreme is dysfunctional and chaotic."
          ],
          e: "Behfar et al. (2008): relationship conflict is best met with discussion plus SPECIFIC solutions and some deliberate avoidance/ignoring of the personal issue, with the documented trade-off of DECREASED satisfaction."
        },
        {
          q: "Two units have identical staffing. Unit A debates orders openly and reviews near-misses; Unit B is the most cohesive in the hospital, prides itself on never disagreeing, yet repeats errors. Which analysis BEST explains why A outperforms B?",
          o: [
            "B confuses cohesiveness with safety; high cohesion can suppress dissent (groupthink), while A's psychological safety enables learning behaviors",
            "A is simply more cohesive than B, so cohesiveness fully explains it",
            "B has too much functional conflict, lowering performance",
            "A performs better only because it is larger and avoids social loafing"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct.",
            "B is explicitly the MOST cohesive yet underperforms, so cohesiveness cannot be the driver; the missing ingredient is a different construct.",
            "B's problem is too LITTLE candor, not too much conflict; its pride in never disagreeing signals the apathetic, dissent-free extreme.",
            "Size is not given as the difference, and larger size would risk MORE loafing, not less; the real driver is interpersonal risk-taking climate."
          ],
          e: "The lecture stresses psychological safety DIFFERS from cohesiveness: cohesion can reduce willingness to disagree (groupthink, Janis 1982), while psychological safety enables speaking up, feedback-seeking, and learning, hence A's edge."
        },
        {
          q: "Leadership must choose between deploying a coordinated work TEAM or a work GROUP for an initiative. Which condition most justifies a true TEAM despite its higher coordination cost?",
          o: [
            "The task is highly complex and interdependent, requiring synergy of complementary skills",
            "The work splits cleanly into independent individual assignments",
            "Members only need to share information to do their own separate jobs",
            "Management wants performance measured indirectly through influence on others"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct.",
            "Cleanly separable individual work is exactly where a work GROUP suffices at lower coordination cost; a team's overhead is not justified.",
            "Pure information-sharing to support separate jobs is the definition of a work GROUP, not a case for a team.",
            "Indirect, influence-based performance measurement is a GROUP characteristic; teams are measured directly by collective output."
          ],
          e: "The lecture notes it is the COMPLEXITY and INTERDEPENDENCE of tasks that drive a group's effectiveness; such tasks justify a true team's positive synergy and mutual accountability, while separable work suits a cheaper group."
        },
        {
          q: "A leader insists, \"A cohesive, happy team is automatically a high-performing one.\" Integrating the cohesiveness-alignment matrix and psychological safety, what is the STRONGEST rebuttal?",
          o: [
            "Cohesion amplifies whatever direction the team points; without goal alignment AND safety to dissent, it can entrench wrong norms and groupthink",
            "Cohesion is irrelevant to performance, so the statement is meaningless",
            "Happy teams always outperform because morale equals output",
            "Only team size determines performance, so cohesion does not matter"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct.",
            "Cohesion is not irrelevant; the matrix shows it strongly shapes productivity in BOTH directions depending on alignment, so dismissing it misreads the evidence.",
            "Morale does not equal output; a happy, cohesive team misaligned with goals or prone to groupthink can decrease productivity.",
            "Size is one factor (via loafing), but the matrix and psychological safety show alignment and candor are decisive, not size alone."
          ],
          e: "By the matrix, high cohesion with LOW alignment DECREASES productivity, and cohesion can suppress dissent (groupthink). Performance needs cohesion aimed at organizational goals PLUS psychological safety to keep candor alive, not warmth alone."
        },
        {
          q: "As a project team grows from 4 to 12 members, total output rises but output PER PERSON falls and several members quietly coast. Which concept BEST names this, and which design response does the lecture support?",
          o: [
            "Groupthink — and the fix is to make the team larger still",
            "Social loafing — the tendency to exert less effort in a group than alone; making individual contributions identifiable and accountable counteracts it",
            "Group cohesiveness — and the fix is to remove all individual accountability",
            "Storming — and the fix is to skip directly to the performing stage"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Groupthink is about suppressed disagreement and bad consensus, not members coasting as the group grows.",
            "Right idea — that's the one.",
            "Cohesiveness is mutual attraction and commitment; here effort per person is FALLING — and removing accountability would worsen the coasting, not fix it.",
            "Storming is the conflict stage of development; it doesn't describe effort dropping as size rises, and stages can't simply be skipped on command."
          ],
          e: "Social loafing is the tendency for individuals to expend less effort working in a group than alone, because each person's contribution becomes harder to see as the group grows. The lecture's remedy is to make each member's contribution identifiable and to hold members individually accountable, which restores effort."
        }
      ],
      cases: [
        {
          title: "Forming Under the Blackout",
          scenario: "Maya leads a newly assembled five-person analytics team at a Beirut software firm, formed just as EDL's grid all but collapsed. The office runs on a generator \"ishtirak\" whose limited amperage cannot power every workstation at once, so the team works staggered shifts around the building's power windows and, during long blackouts, switches to remote and asynchronous work from home. Meanwhile salaries, still partly paid in lira, have been gutted by hyperinflation, and one capable engineer has visibly coasted since his pay collapsed, leaving more of the load to the others. The first two weeks are awkward and unproductive: members are polite, unsure of their roles, and keep waiting for Maya to assign everything. By week four, sharp disputes break out over WHAT to build first and over WHO owns which module and how to hand off work across the staggered shifts.",
          qs: [
            {
              q: "Map the team's first four weeks onto the stages of group development, citing concrete evidence from the crisis context.",
              a: "Weeks one and two are FORMING: members are polite, unsure of their roles, and dependent on Maya to assign work, an uncertainty deepened by the unfamiliar staggered shifts around the generator 'ishtirak' power windows and remote/asynchronous work during blackouts. Week four is STORMING: open conflict erupts over WHAT to build first (direction) and over WHO owns which module and how to hand off across shifts (roles and control). The lecture's caveat applies: the process is not strictly linear and the disruptive context could cause the team to regress."
            },
            {
              q: "The engineer whose pay collapsed has been coasting. Name the concept, explain why the staggered-shift, remote setup can worsen it, and give one countermeasure.",
              a: "This is SOCIAL LOAFING: expending less effort working collectively than individually. Staggered shifts and asynchronous remote work during blackouts reduce the visibility of each person's contribution, so a demoralized member whose lira salary was gutted by hyperinflation can free-ride more easily because his output is harder to observe. Countermeasure: preserve INDIVIDUAL ACCOUNTABILITY by making each member's contribution identifiable, e.g., clear per-person deliverables and module ownership tracked across shifts, rather than only judging collective output."
            },
            {
              q: "Classify the two week-four disputes and prescribe Behfar et al. (2008) resolution approaches for each.",
              a: "Arguing over WHAT to build first is TASK conflict (content and goals); arguing over WHO owns which module and how to hand off across staggered shifts is PROCESS conflict (how work gets done). Per Behfar et al. (2008): for the TASK conflict use discussion/debate and open communication to reach compromise or consensus on priorities; for the PROCESS conflict use discussion/debate and compromise/consensus to establish ROTATING RESPONSIBILITIES and clear handoff rules suited to the power-window shifts."
            }
          ]
        },
        {
          title: "Two Branch Teams, One Frozen Bank",
          scenario: "At a Lebanese bank reeling from capital controls, two customer-resolution teams handle furious depositors whose dollar accounts are frozen and who are being repaid in devalued \"lollars\" rather than \"fresh\" dollars. The teams are nearly identical on paper. Team North is extremely tight-knit: colleagues socialize constantly, pride themselves on never disagreeing with the branch manager, and quietly hide mistakes because \"errors are held against you\" there; a junior teller was recently mocked for asking how to handle a lollar-conversion dispute. Team South openly debates tough cases, runs a weekly \"what did we almost get wrong?\" review of mishandled withdrawals during the cash crunch, and its manager admits her own errors. Despite Team North posting the bank's highest cohesion scores, Team South resolves complaints faster and with fewer repeat errors.",
          qs: [
            {
              q: "Define team psychological safety and contrast the two teams, citing echoes of Edmondson's (1999) scale items.",
              a: "Team psychological safety is \"a shared belief that the team is safe for interpersonal risk taking\" (Edmondson, 1999). Team South is HIGH: members bring up tough cases, it is safe to take risks (the weekly near-miss review of mishandled withdrawals), and the manager admits mistakes. Team North is LOW, mirroring the reverse-scored items: mistakes ARE held against you, it is difficult to ask for help (the mocked junior teller's lollar-conversion question), and members are rejected for deviating from never disagreeing."
            },
            {
              q: "Team North has the highest cohesion yet underperforms. Explain using the lecture's distinction between cohesiveness and psychological safety, plus groupthink and the cohesiveness-alignment matrix.",
              a: "Cohesiveness (attraction among members and shared goals) is NOT psychological safety: the lecture stresses cohesion can REDUCE willingness to disagree, the groupthink dynamic (Janis, 1982). North's pride in never disagreeing and its hidden mistakes suppress dissent and error reporting, so it cannot learn under the cash-crunch pressure. By the cohesiveness-alignment matrix, a highly cohesive team whose operative norms (hide errors, never question the manager) misalign with the organizational goal of resolving frozen-deposit complaints correctly can see productivity DECREASE, despite, or because of, that high cohesion."
            },
            {
              q: "Recommend four concrete actions from the lecture's list for Team North's manager to build psychological safety amid the crisis.",
              a: "From the lecture's 'how to foster psychological safety' list: (1) ACKNOWLEDGE her own mistakes, modeling fallibility as Team South's manager does; (2) ACTIVELY SOLICIT QUESTIONS, so a teller can safely ask how to handle a lollar-conversion dispute; (3) OFFER MULTIPLE WAYS to share thoughts (e.g., anonymous reporting of mishandled withdrawals); (4) SHOW THAT IDEAS ARE VALUED by thanking and acting on error reports, not holding them against people, plus being SPECIFIC in expectations such as a clear no-blame near-miss protocol for the capital-controls caseload."
            }
          ]
        }
      ],
      essays: [
        {
          q: "“The more cohesive the group, the better it performs.” Critically evaluate this claim using group structure concepts (norms, status, size, social loafing), the cohesiveness–alignment matrix, and team psychological safety.",
          outline: [
            "Define cohesiveness: attraction among members + shared goals",
            "The matrix: productivity depends on alignment of group goals with organizational goals — high cohesion + high alignment = strong increase; high cohesion + low alignment = DECREASE; low+high = moderate increase; low+low = no significant effect",
            "Structure caveats: norms set output standards (Hawthorne echo); social loafing in larger groups; status systems shape voice",
            "Psychological safety ≠ cohesiveness: cohesion can suppress dissent (groupthink); safety enables speaking up, learning, performance (Edmondson; Project Aristotle)",
            "Conclusion: cohesion amplifies whatever direction the group points; performance needs alignment + safety, not warmth alone"
          ],
          model: "Group cohesiveness is the degree to which members are attracted to one another and share the group's goals — and intuition says more is better. The lecture's cohesiveness–alignment matrix breaks that intuition: when cohesiveness is high AND the group's goals align with the organization's, productivity rises strongly; with low cohesiveness but high alignment it rises moderately; with low cohesiveness and low alignment there is no significant effect; but with HIGH cohesiveness and LOW alignment, productivity DECREASES — a united group marching efficiently in the wrong direction. Group structure explains the machinery: norms — the shared standards a group accepts — set what “a fair day's work” means, so a cohesive group enforces its norms more powerfully, for good or ill; status systems determine whose voice counts; and as size grows, social loafing — expending less effort collectively than individually — dilutes contributions unless accountability is preserved. The deepest correction comes from psychological safety: Edmondson (1999) defines it as a shared belief that the team is safe for interpersonal risk taking, and the lecture stresses it DIFFERS from cohesiveness — indeed, cohesion can reduce willingness to disagree, the very dynamic of groupthink (Janis, 1982). A tight-knit team that prizes harmony may hide mistakes and silence doubts, while a psychologically safe team seeks feedback, shares information, asks for help, and speaks up — behaviors tied to individual and team performance (Edmondson & Bransby, 2023; Google's Project Aristotle). The claim is therefore false as stated: cohesiveness is an amplifier, not a guarantee. High performance requires cohesion pointed at organizational goals, norms that value candor, controlled group size or clear accountability against loafing, and psychological safety so that disagreement — the functional kind of conflict — stays possible."
        },
        {
          q: "Distinguish work groups from work teams, and explain what makes teams effective. When is a team genuinely needed rather than a group?",
          outline: [
            "Definitions: work groups (share information, decisions to help each member do their own job) vs. work teams (intense work on specific common goal; positive synergy; individual AND mutual accountability; complementary skills)",
            "Contrast table: leadership (one leader vs. shared), accountability (self vs. self+team), purpose (organizational vs. team-specific), work (individual vs. collective), meetings (efficiency vs. open-ended collaboration), performance measurement (indirect vs. collective output), agility of teams",
            "Nine characteristics of effective teams: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, internal support, external support",
            "Plus psychological safety as the modern addition (Edmondson; Project Aristotle)",
            "When teams: complex, interdependent tasks (group tasks point); when individual work suffices, a group is cheaper and simpler"
          ],
          model: "Work groups interact primarily to share information and make decisions that help each member do their own job more efficiently and effectively; work teams work intensely on a specific, common goal using positive synergy, individual and mutual accountability, and complementary skills. The contrast runs through every feature: groups have one leader clearly in charge, teams share the leadership role; group members are accountable only for themselves, team members for themselves and the team; a group's purpose is the broader organizational purpose, a team creates its own specific purpose; group work is done individually, team work collectively; group meetings prize efficiency without open-ended discussion, team meetings live on open-ended discussion and collaborative problem-solving; group performance is measured indirectly through influence on others, team performance directly by evaluating collective work output; and teams can be quickly assembled, deployed, refocused, and disbanded. Effectiveness, however, is not automatic — the lecture lists nine characteristics of effective teams: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, and both internal support (training, systems) and external support (resources from the organization). Modern research adds team psychological safety — the shared belief that the team is safe for interpersonal risk taking — which Google's Project Aristotle and Edmondson's work tie to learning behavior and performance. As for when a team is worth its overhead: the lecture notes that it is the complexity and interdependence of tasks that influence a group's effectiveness — when work is complex and interdependent, requiring synergy among complementary skills and mutual accountability, a true team pays off; when tasks are separable and individual, a well-run work group achieves the result with less coordination cost."
        },
        {
          q: "“Conflict should be eliminated from teams.” Discuss with reference to the three views of conflict, the types of conflict, the conflict–performance relationship, and evidence-based resolution strategies (Behfar et al., 2008).",
          outline: [
            "Define conflict: perceived incompatible differences resulting in interference or opposition",
            "Three views: traditional (all bad, avoid), human relations (natural, inevitable), interactionist (some conflict necessary)",
            "Functional vs. dysfunctional; inverted-U curve: low → apathetic/stagnant/no new ideas; optimal → viable, self-critical, high performance; high → disruptive/chaotic/uncooperative",
            "Types: task (content/goals), relationship (interpersonal), process (how work gets done)",
            "Behfar mapping: task → debate + open communication → compromise/consensus; relationship → specific solutions + some avoidance (satisfaction cost); process → debate + consensus on rotating responsibilities",
            "Conclusion: manage conflict's TYPE and LEVEL, don't eliminate it; psychological safety keeps task conflict from turning personal"
          ],
          model: "Conflict — perceived incompatible differences that result in interference or opposition — has been viewed three ways. The traditional view holds all conflict is bad and must be avoided; the human relations view treats it as a natural and inevitable outcome of any group; and the interactionist view goes further: some conflict is NECESSARY for a group to perform effectively. The interactionist position rests on the distinction between functional conflicts, which support group goals and improve performance, and dysfunctional ones, which prevent goal achievement — and on the inverted-U relationship between conflict level and performance. At low or no conflict, a group turns apathetic and stagnant, unresponsive to change and short of new ideas — performance is LOW; at an optimal level, conflict is functional and the group is viable and self-critical — performance peaks; at high conflict the group becomes disruptive, chaotic, and uncooperative — performance collapses again. Type matters as much as level: task conflict concerns the content and goals of the work, relationship conflict the interpersonal frictions between people, and process conflict how the work gets done. Behfar et al. (2008) show each type rewards a different resolution strategy: task conflict is best handled through discussion and debate with open communication, working toward compromise or consensus; relationship conflict responds to discussion plus specific solutions to specific problems, often with deliberate avoidance of purely personal issues — at some cost to satisfaction; and process conflict is best resolved through debate and consensus that establishes rotating responsibilities. The statement is therefore wrong on the evidence: eliminating conflict drives a team to the apathetic end of the curve, the very failure mode of groupthink-prone, over-cohesive teams. The managerial task is to keep conflict at a functional level and of a functional type — vigorous task debate inside a psychologically safe climate that stops disagreement about ideas from souring into conflict about persons."
        }
      ]
    },
    {
      id: "w13",
      week: 13,
      title: "Managing Communication",
      blurb: "The communication process, barriers, the communication square, and organizational flows.",
      sections: [
        {
          h: "What Is Communication?",
          blocks: [
            {
              t: "def",
              term: "Communication",
              d: "The transfer AND understanding of meaning."
            },
            {
              t: "def",
              term: "Interpersonal communication",
              d: "Communication between two or more people."
            },
            {
              t: "def",
              term: "Organizational communication",
              d: "All the patterns, networks, and systems of communication within an organization."
            },
            {
              t: "def",
              term: "Formal vs. informal communication",
              d: "Formal communication takes place within prescribed organizational work arrangements; informal communication is not defined by the organization's structural hierarchy."
            },
            {
              t: "list",
              title: "Functions of communication (5)",
              items: [
                "Management",
                "Motivation",
                "Emotional sharing",
                "Persuasion",
                "Information exchange"
              ]
            }
          ]
        },
        {
          h: "Interpersonal Communication",
          blocks: [
            {
              t: "p",
              text: "The communication process: a SENDER has an intended meaning, ENCODES it into a MESSAGE sent through CHANNELS (verbal and nonverbal symbols, visual images); the RECEIVER DECODES it into a perceived meaning — all within a CONTEXT, with NOISE at every step, and the roles reverse as the receiver responds. The realities (thoughts and feelings) of sender and receiver differ, so perceived meaning is not automatically intended meaning."
            },
            {
              t: "list",
              title: "Modes of communication",
              items: [
                "Oral communication",
                "Written communication",
                "Nonverbal communication — communication transmitted without words: BODY LANGUAGE (gestures, facial configurations, and other body movements that convey meaning) and VERBAL INTONATION (an emphasis given to words or phrases that conveys meaning)"
              ]
            },
            {
              t: "list",
              title: "Barriers to effective communication",
              items: [
                "Information overload: when information exceeds our processing capacity",
                "Filtering: the deliberate manipulation of information to make it appear more favorable to the receiver",
                "Jargon: specialized terminology or technical language that members of a group use to communicate among themselves",
                "Emotions",
                "Silence",
                "National culture"
              ]
            },
            {
              t: "list",
              title: "Overcoming the barriers",
              items: [
                "Use feedback",
                "Simplify language",
                "Listen actively — ACTIVE LISTENING: listening for full meaning without making premature judgments or interpretations",
                "Constrain emotions",
                "Watch nonverbal cues"
              ]
            },
            {
              t: "def",
              term: "The Communication Square (four sides / four “ears”)",
              d: "A tool to communicate better: every message carries four layers. CONTENT (what I talk to you about — the objective facts), RELATIONSHIP (what I think about you/us — what does s/he think of me?), APPEAL (what I want you to do — what does s/he want from me?), SELF-REVELATION (what I reveal of myself — what is going on with him or her?). Each “ear” has strengths and weaknesses: Content ear — factual, neutral, result-oriented, objective / blind to emotional nuances, impersonal. Relationship ear — sensitive, reads between the lines, human / vulnerable, easily hurt, takes everything personally. Appeal ear — cooperative, obliging, goal-oriented / will be exploited, little focus on own needs. Self-revelation ear — empathetic, understanding / shifts problems to others, doesn't question him/herself. To prepare an important conversation, plan all four sides: Which topics and arguments (content)? How will the other feel treated (relationship)? What do I want to achieve — min/max goal (appeal)? How do I feel and what do I share (self-revelation)?"
            }
          ]
        },
        {
          h: "Organizational Communication",
          blocks: [
            {
              t: "list",
              title: "Direction of flow",
              items: [
                "Downward: flows from a manager to employees (typical supervisor-to-reports communication)",
                "Upward: flows from employees to managers",
                "Lateral: among employees on the same organizational level",
                "Diagonal: cuts across work areas AND organizational levels"
              ]
            },
            {
              t: "def",
              term: "Communication networks",
              d: "The variety of patterns of vertical and horizontal flows of organizational communication. Three types compared on four criteria — CHAIN: moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction; WHEEL: fast, high accuracy, high leader emergence, low member satisfaction; ALL-CHANNEL: fast, moderate accuracy, no leader emergence, high member satisfaction."
            },
            {
              t: "def",
              term: "Grapevine",
              d: "The informal organizational communication network."
            }
          ]
        },
        {
          h: "Communication & You",
          blocks: [
            {
              t: "def",
              term: "Persuasion skills",
              d: "Skills that enable a person to influence others to change their minds or behavior. Four basic elements: (1) be clear about the “who,” “what,” and “why”; (2) keep it simple; (3) think about the other person's needs, motivation, and interests when shaping your argument; (4) appeal to the “head” and the “heart” by combining rational and emotional arguments."
            },
            {
              t: "def",
              term: "Speaking skills",
              d: "The ability to communicate information and ideas in talking so others will understand. Effective speakers show: authenticity, humility, brevity, and a clear understanding of the audience."
            },
            {
              t: "def",
              term: "Writing skills",
              d: "Communicating effectively in text as appropriate for the needs of the audience. Rules: think before you write; be direct (get to the point quickly); cut the fat (eliminate unnecessary words); avoid jargon and grandiose language (strive for clarity, not to impress); be professional (formal communications differ from emails, texts, and social media — no abbreviations, acronyms, or textspeak)."
            }
          ]
        }
      ],
      mcqs: [
        {
          q: "In the communication process model, the path a message travels through (verbal and nonverbal symbols, visual images) is called the…",
          o: [
            "channel",
            "feedback loop",
            "context",
            "encoding"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Right idea on the model — the carrier that conveys the encoded message.",
            "This is the receiver's response that closes the loop, not the path the original message travels along.",
            "This is the surrounding situation in which communication happens, not the carrier the message moves through.",
            "This is the step that converts intended meaning INTO a message, not the medium that then transports it."
          ],
          e: "The channel is the medium (verbal/nonverbal symbols, visual images) through which the encoded message travels from sender to receiver."
        },
        {
          q: "Gestures, facial configurations, and other body movements that convey meaning are called…",
          o: [
            "body language",
            "verbal intonation",
            "jargon",
            "filtering"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — this is the wordless channel of meaning carried by the body.",
            "This is the EMPHASIS placed on words or phrases, which is still tied to spoken words, not to body movement.",
            "This is specialized group terminology, a barrier, not a category of nonverbal signal.",
            "This is the deliberate slanting of information to look favorable, not anything about gestures or expressions."
          ],
          e: "Body language = gestures, facial configurations, and other body movements that convey meaning; verbal intonation is the emphasis given to words or phrases."
        },
        {
          q: "Communication that flows FROM employees TO managers is…",
          o: [
            "upward communication",
            "downward communication",
            "lateral communication",
            "diagonal communication"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes — the direction climbs the hierarchy from staff to management.",
            "You have the direction reversed: this flows from a manager down to employees.",
            "This is communication among employees on the SAME level, not between levels.",
            "This cuts across both work areas and levels at once, not a straight climb up the hierarchy."
          ],
          e: "Upward communication flows from employees to managers; downward flows from a manager to employees."
        },
        {
          q: "Specialized terminology or technical language that members of a group use to communicate among themselves is called…",
          o: [
            "jargon",
            "noise",
            "intonation",
            "feedback"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — insider technical language that outsiders may not share.",
            "This is any interference that distorts a message at any step, not group-specific vocabulary.",
            "This is the emphasis placed on spoken words, not specialized terminology.",
            "This is the receiver's response used to verify understanding, not technical language."
          ],
          e: "Jargon is specialized terminology or technical language a group uses among themselves; it becomes a barrier when the receiver does not share it."
        },
        {
          q: "According to the lecture, organizational communication is best defined as…",
          o: [
            "all the patterns, networks, and systems of communication within an organization",
            "communication between two or more people",
            "communication that takes place only within prescribed work arrangements",
            "the informal organizational communication network"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Yes — it is the whole web of patterns, networks, and systems inside the organization.",
            "That definition describes interpersonal communication (between two or more people), which is narrower.",
            "That describes FORMAL communication specifically, only one part of organizational communication.",
            "That describes the grapevine specifically, only the informal slice of the picture."
          ],
          e: "Organizational communication = all the patterns, networks, and systems of communication within an organization; interpersonal communication is between two or more people."
        },
        {
          q: "Which of the following is one of the ways the lecture lists for OVERCOMING communication barriers?",
          o: [
            "Listen actively",
            "Add more jargon",
            "Increase information volume",
            "Stay silent to avoid conflict"
          ],
          a: 0,
          tier: "easy",
          h: [
            "Correct — listening for full meaning without premature judgment is a core remedy.",
            "Jargon is itself a barrier; piling on more terminology worsens, not overcomes, the problem.",
            "Flooding the receiver causes information overload, which is a barrier, not a remedy.",
            "Silence is listed as a barrier; it removes the feedback loop rather than fixing communication."
          ],
          e: "Overcoming barriers: use feedback, simplify language, listen actively, constrain emotions, and watch nonverbal cues."
        },
        {
          q: "A team lead emails 40 detailed reports to a new analyst on her first morning and asks her to 'absorb it all by lunch.' By noon she has retained almost nothing. Which barrier is this?",
          o: [
            "Information overload",
            "Filtering",
            "National culture",
            "Silence"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — the volume has exceeded her processing capacity.",
            "Filtering is deliberately slanting information to look favorable; nothing here is being manipulated to please anyone.",
            "Nothing in the scenario points to differing cultural assumptions distorting meaning.",
            "Silence is the absence of communication; here the problem is far too much of it, not too little."
          ],
          e: "Information overload occurs when the information we must work with exceeds our processing capacity, exactly what the volume here does."
        },
        {
          q: "A supervisor wants to deliver tough performance feedback so it lands as supportive rather than as an attack. Drawing on the lecture's remedies, the single most useful move is to…",
          o: [
            "use feedback and choose a richer face-to-face channel so tone and nonverbal cues are visible",
            "send a long detailed email so there is a written record of every point",
            "use precise technical jargon to sound authoritative",
            "deliver it quickly in a hallway so it is over fast"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes — feedback plus a rich channel lets nonverbal cues and clarification soften and verify the message.",
            "A lean written channel strips out intonation and body language, the very cues that signal support.",
            "Jargon is a barrier; it can confuse the receiver and feel cold rather than supportive.",
            "Speed in a public, distracted setting adds noise and removes the chance to check understanding."
          ],
          e: "Using feedback, watching nonverbal cues, and choosing a richer channel let the receiver read tone and intent, directly overcoming the barriers that make feedback feel like an attack."
        },
        {
          q: "On a six-person task force every member talks directly with every other member; they report high satisfaction, but their summary occasionally contains factual slips and no clear leader has emerged. Which network is this?",
          o: [
            "All-channel",
            "Wheel",
            "Chain",
            "Grapevine"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — everyone-to-everyone, high satisfaction, only moderate accuracy, no leader emerging.",
            "A wheel routes everything through one hub and produces a clear leader plus LOW satisfaction, the opposite of this.",
            "A chain passes messages up and down a line; it is highly accurate and would not show these factual slips.",
            "The grapevine is the informal network outside assigned structure, not a described task-force pattern."
          ],
          e: "All-channel: fast, moderate accuracy, no leader emergence, high member satisfaction, matching everyone-to-everyone talk with happy members but occasional errors."
        },
        {
          q: "A warehouse manager passes a customer's idea for a faster loading method to the company's IT department, which sits in a different function and at a different level. This message flow is…",
          o: [
            "diagonal",
            "lateral",
            "downward",
            "upward"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Yes — it crosses both a different work area and a different level at the same time.",
            "Lateral means same level; here the two parties are at different levels, not peers.",
            "Downward goes from a manager to that manager's own employees, not across to another function.",
            "Upward goes straight up one's own hierarchy; this instead cuts sideways across areas and levels."
          ],
          e: "Diagonal communication cuts across both work areas AND organizational levels, which is exactly what crossing function and level together describes."
        },
        {
          q: "A regional manager reports to head office that last quarter was 'broadly on track and stabilizing,' quietly omitting a serious cost overrun so the numbers look better to the executives. This is an example of…",
          o: [
            "filtering",
            "active listening",
            "information overload",
            "verbal intonation"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — information is being deliberately slanted to appear more favorable to the receiver.",
            "Active listening is a remedy for barriers and concerns receiving, not the sender hiding bad news.",
            "Overload is too much information swamping capacity; here information is being withheld, not piled on.",
            "Intonation is vocal emphasis on words; this is a written distortion of content, not a matter of tone."
          ],
          e: "Filtering is the deliberate manipulation of information to make it appear more favorable to the receiver, precisely what omitting the overrun accomplishes."
        },
        {
          q: "A factory must broadcast identical, error-free safety instructions to ten machine operators as fast as possible, and clear coordination from one leader is desirable. Which network best fits these priorities?",
          o: [
            "Wheel",
            "All-channel",
            "Chain",
            "Grapevine"
          ],
          a: 0,
          tier: "medium",
          h: [
            "Correct — fast, highly accurate, and it produces the clear central leader the task wants.",
            "All-channel is fast but only moderately accurate and produces no clear leader, weak fits for precise safety orders.",
            "A chain is highly accurate but only moderate in speed, and the goal here stresses speed.",
            "The grapevine is informal and unreliable, unsuited to authoritative, error-free safety instructions."
          ],
          e: "The wheel is fast and highly accurate with a clear emergent leader, matching the need for rapid, identical, coordinated safety instructions (accepting its low member satisfaction)."
        },
        {
          q: "Two networks share the SAME accuracy rating in the lecture but differ sharply on member satisfaction. Which pair is it, and what explains the satisfaction gap?",
          o: [
            "Chain and wheel are both HIGH accuracy, but the wheel's spokes feel voiceless (low satisfaction) while the chain spreads participation more evenly (moderate satisfaction)",
            "Wheel and all-channel are both high accuracy, and the wheel wins on satisfaction because it has a clear leader",
            "Chain and all-channel are both high accuracy, and they tie on satisfaction",
            "All three networks share identical accuracy, so satisfaction differences are random"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — chain and wheel are both rated high accuracy, yet the wheel's isolated spokes feel voiceless.",
            "All-channel is rated only MODERATE accuracy, so it does not share the wheel's high-accuracy rating.",
            "All-channel is moderate, not high, in accuracy, so this pairing is wrong on the accuracy claim.",
            "The networks do not all share one accuracy rating; all-channel is moderate while chain and wheel are high."
          ],
          e: "Chain and wheel are both HIGH accuracy. The wheel's members talk only to the hub and feel voiceless (low satisfaction), whereas the chain distributes participation more evenly (moderate satisfaction)."
        },
        {
          q: "An employee hears a manager's neutral request 'please send me the file by 3' and immediately thinks 'she assumes I always forget things.' From the Communication Square, the BEST diagnosis is that…",
          o: [
            "the receiver is decoding a content/appeal message with the relationship ear, hearing a verdict about herself that the message did not state",
            "the manager filtered the message to make herself look favorable",
            "the receiver is using the content ear, which is blind to emotional nuance",
            "this is information overload because the request had a deadline"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — a factual appeal is being decoded through the relationship ear as a personal judgment.",
            "Filtering is the SENDER slanting information; here the issue is how the RECEIVER hears a plain request.",
            "The content ear is factual and would take 'send the file by 3' at face value, not as a personal verdict.",
            "A single short request is not an overload of processing capacity; the issue is interpretation, not volume."
          ],
          e: "Hearing a plain content/appeal message as a statement about oneself is the relationship ear at work; its weakness is taking everything personally, so perceived meaning diverges from intended meaning."
        },
        {
          q: "A CEO insists 'we have no rumor problem because I send a clear weekly memo.' Evaluate this claim using the lecture's view of the grapevine.",
          o: [
            "It is mistaken: the grapevine is an informal network that runs alongside formal channels and fills any vacuum, so silence on the topics employees care about will breed rumor regardless of the weekly memo",
            "It is correct: a clear formal channel eliminates the grapevine entirely",
            "It is correct: the grapevine only exists in organizations that lack any downward communication",
            "It is mistaken because the grapevine is a formal network that the CEO should shut down"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — the grapevine fills whatever the formal network leaves uncovered, so a memo cannot suppress it.",
            "Formal channels never eliminate the grapevine; it persists alongside them and feeds on unaddressed concerns.",
            "The grapevine exists even where downward communication is strong; it answers what the formal channel leaves unsaid.",
            "The grapevine is the INFORMAL network, not formal, and the lecture says monitor and feed it, not 'shut it down.'"
          ],
          e: "The grapevine is the informal network that coexists with formal channels and fills any vacuum; managers should monitor it and feed formal channels candidly rather than assume a memo suppresses it."
        },
        {
          q: "A manager wants to persuade a skeptical team to adopt a new system. Two drafts exist. Draft A: a long technically detailed memo making only the cost-savings case. Draft B: a short message that names who/what/why, addresses the team's workload worries, and pairs the business case with empathy. Which is stronger and why?",
          o: [
            "Draft B, because it keeps it simple, shapes the argument around the audience's needs, and appeals to both head and heart",
            "Draft A, because more technical detail and length make persuasion more convincing",
            "Draft A, because focusing solely on cost savings keeps the message objective",
            "Both are equal, since persuasion depends only on the facts, not on framing"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — B satisfies clarity, simplicity, audience focus, and the head-plus-heart appeal.",
            "Length and dense detail work against persuasion; the lecture says keep it simple, not pile on detail.",
            "Ignoring the audience's needs and the emotional appeal misses two of the four persuasion elements.",
            "Framing is central: the four persuasion elements are about shaping the argument, not just stating facts."
          ],
          e: "The four persuasion elements are clarity on who/what/why, keep it simple, shape the argument around the other's needs and interests, and appeal to head AND heart, all of which Draft B does and Draft A does not."
        },
        {
          q: "An organization complains that 'frontline staff never warn us about problems until it is too late.' Which combination of lecture concepts BEST explains and addresses this?",
          o: [
            "Weak UPWARD flow plus FILTERING starve management of early warnings; the remedy is to invite feedback and make it safe to report bad news honestly",
            "Excessive lateral communication is the cause; the remedy is to ban peer-to-peer contact",
            "The grapevine is too weak; the remedy is to encourage more rumors",
            "Too much downward communication is the cause; the remedy is for managers to stop talking to staff"
          ],
          a: 0,
          tier: "hard",
          h: [
            "Correct — missing upward flow plus favorable-slanting filtering hides problems; feedback and safety to report fix it.",
            "Lateral (same-level) communication is not what carries warnings up to management; banning it does not address the gap.",
            "Encouraging rumor is never the lecture's remedy; the issue is the missing formal upward channel, not a weak grapevine.",
            "The problem is too LITTLE upward flow, not too much downward flow; cutting manager-to-staff talk worsens it."
          ],
          e: "Late warnings reflect starved upward communication compounded by filtering (staff slanting reports favorably). The lecture's remedies, using feedback and making honest reporting safe, restore the upward flow management needs."
        },
        {
          q: "In a steep hierarchy, by the time bad news reaches top management it has been softened at each level until executives hear only a reassuring version. Which communication barrier is this, and which remedy BEST fits the lecture?",
          o: [
            "Information overload — the fix is to send executives even more reports",
            "Filtering — the deliberate manipulation of information so the receiver sees it more favorably; flatter channels, multiple upward feedback paths, and a climate where candor is safe reduce it",
            "Jargon — the fix is a company dictionary of technical terms",
            "Nonverbal mismatch — the fix is more video calls"
          ],
          a: 1,
          tier: "hard",
          h: [
            "Overload is too MUCH information at once; here the problem is that bad news is being trimmed away, not flooding in.",
            "Right idea — that's the one.",
            "Jargon is confusing terminology; the issue here is that the message is being sweetened as it rises, not that the words are technical.",
            "The distortion isn't about body language — it's that each level edits the content to look better as it moves upward."
          ],
          e: "Filtering is the deliberate manipulation of information to make it appear more favorable to the receiver, and it worsens as the number of vertical levels grows. The remedy is to shorten the chain (flatter structure), open multiple upward feedback channels, and build a climate where delivering bad news is safe — so the unfiltered message reaches the top."
        }
      ],
      cases: [
        {
          title: "Payday Silence at Cedars Apparel",
          scenario: "Cedars Apparel, a Beirut garment manufacturer, has paid salaries half in 'fresh' dollars and half in lira since the banking crisis froze deposits. For three months management has said nothing about whether April salaries will keep the fresh-dollar portion or convert fully to 'lollars.' HR director Nadia knows the owners are still deciding but has been told to 'say nothing until it is final.' In the cutting hall, a WhatsApp group of forty workers now buzzes with a confident claim that 'fresh dollars are gone and we are all moving to lollar pay' — staff trust this more than the silence from the offices upstairs. Two skilled tailors have already resigned based on the rumor. When a floor supervisor tries to ask the owners directly, his question goes unanswered.",
          qs: [
            {
              q: "Name the informal channel carrying the lollar-pay claim and explain, using the lecture, why it is outrunning and out-trusting the official channels.",
              a: "It is the GRAPEVINE, the informal organizational communication network. The lecture holds that the grapevine runs alongside formal channels and FILLS ANY VACUUM the formal network leaves. Because management has stayed SILENT for three months about the fresh-dollar versus lollar question, there is no official message to compete with, so the WhatsApp claim spreads fast and is trusted MORE than the silence from upstairs. Silence is itself a barrier (it removes the feedback loop), and the grapevine is exploiting exactly the topic employees care about most: their pay."
            },
            {
              q: "Identify the barriers and the direction-of-flow problems at Cedars, citing specifics from the scenario.",
              a: "Barriers: SILENCE (management says nothing about salaries for three months) and FILTERING pressure (HR is ordered to 'say nothing until it is final,' withholding information the receivers need). The half-fresh, half-lira, possibly-lollar pay structure also creates confusing CONTENT that invites misreading. Flow problems: DOWNWARD communication has stalled (no honest message reaches the floor), and UPWARD communication is starved, the floor supervisor's direct question to the owners goes unanswered, so management gets no early warning that skilled tailors are about to resign. The missing upward and downward flows leave the grapevine as the only working channel."
            },
            {
              q: "Advise management on how to overcome these barriers and reclaim the narrative, grounding each step in lecture remedies.",
              a: "USE FEEDBACK and open UPWARD flow: hold a floor meeting where workers can ask about pay and be answered, restoring the loop the supervisor's ignored question broke. SIMPLIFY LANGUAGE: explain the fresh-dollar versus lollar situation plainly, no finance jargon, so the CONTENT cannot be misread. Break the SILENCE candidly even before a final decision, stating clearly what is known and when a decision will come, because the lecture says managers should FEED the formal channels promptly rather than cede the topic to rumor. CHOOSE A RICHER CHANNEL (face-to-face over a frozen memo) so tone and nonverbal cues show good faith. By feeding the formal network on the very topic the grapevine is exploiting, management removes the vacuum that is feeding the lollar rumor."
            }
          ]
        },
        {
          title: "Blackout at Najjar Distribution",
          scenario: "Najjar Distribution coordinates delivery trucks across Lebanon from a Sin el Fil dispatch office. With EDL supplying only a few hours of power, the office runs on a generator whose 'ishtirak' schedule cuts out at unpredictable times, and during blackouts the internet and mobile signal drop for stretches at a time. Dispatch sends drivers daily routing updates plus a separately repriced delivery fee in dollars (re-set every morning as the lira moves). Last week a blackout hit mid-message: half the drivers received an old fee and a partial route, the other half received nothing, and three trucks were sent to the wrong depot. A driver who tried to phone back for clarification could not get through for two hours. The dispatch chief blames 'careless drivers'; the drivers blame 'impossible instructions.'",
          qs: [
            {
              q: "Map this incident onto the communication process model, naming where NOISE and the CHANNEL break down.",
              a: "SENDER: dispatch; INTENDED MEANING: today's route plus today's repriced dollar fee; ENCODING: a daily text/app update; CHANNEL: mobile/internet messaging, which depends on power and signal; RECEIVER: the drivers; DECODING: drivers act on whatever fragment arrived. NOISE is severe and physical here: the EDL blackout and generator 'ishtirak' cutting out, plus dropped internet and mobile signal, corrupt the message at the transmission step, so half the drivers get an OLD fee and a partial route and half get nothing. The CHANNEL itself breaks down during the blackout. The model also fails on FEEDBACK: the driver who phoned back could not get through for two hours, so the loop that would catch the error never closes, which is why trucks went to the wrong depot."
            },
            {
              q: "The daily dollar repricing makes messages confusing on top of the outages. Identify the barriers at work and how the blackout interacts with them.",
              a: "Barriers: INFORMATION OVERLOAD / confusing CONTENT, drivers must absorb a fresh route AND a newly repriced dollar fee EVERY single day as the lira moves, so the message is unstable and easy to misread. The lira-driven daily repricing means even a correctly delivered message can be stale by the time it lands. The blackout amplifies this: NOISE from the EDL grid failure and the lost signal means drivers cannot tell whether they received the day's real fee or yesterday's, and the absence of a working feedback channel (no phone for two hours) removes the only way to resolve the confusion. The dispatch chief's 'careless drivers' framing is itself a defensive misread, blaming the receiver for a channel-and-noise failure."
            },
            {
              q: "Redesign Najjar's communications to survive the blackouts, applying lecture remedies and network/flow concepts.",
              a: "USE FEEDBACK with a confirmation loop: require each driver to acknowledge receipt of the route and the day's fee, and treat any non-confirmation as a failed delivery to resend, so a blackout-truncated message is caught instead of acted on. SIMPLIFY LANGUAGE and reduce overload: separate the stable route information from the daily-repriced fee, and timestamp the dollar fee so a stale figure is obvious. Plan around the CHANNEL/NOISE: send updates during known generator-power windows, and provide a redundant channel (SMS plus app, or a callback number that works during outages) so a single blackout cannot sever all contact. On flows and networks: the current setup is a fragile WHEEL with dispatch as the lone hub; adding LATERAL communication among drivers (a group where drivers near a depot can relay or confirm for each other) and genuine UPWARD flow (so drivers can report 'instruction unclear' and be heard) builds resilience and replaces the 'careless drivers' blame with a working two-way system."
            }
          ]
        }
      ],
      essays: [
        {
          q: "Describe the communication process model and use it to explain why “transfer” of a message is not the same as “understanding.” Where do barriers enter the process, and how can each be overcome?",
          outline: [
            "Definition: communication = transfer AND understanding of meaning",
            "Model: sender → intended meaning → encoding → message → channel (verbal/nonverbal symbols, visual images) → decoding → perceived meaning → receiver; context surrounds; noise at every step; roles alternate (feedback)",
            "Sender's and receiver's realities (thoughts/feelings) differ → perceived ≠ intended by default",
            "Barriers: information overload, filtering, jargon, emotions, silence, national culture — map each onto the model stage it corrupts",
            "Remedies: use feedback, simplify language, active listening (no premature judgments), constrain emotions, watch nonverbal cues",
            "Conclusion: design communication around the receiver, verify understanding via feedback loop"
          ],
          model: "Communication is the transfer AND understanding of meaning — the conjunction carries the theory. In the process model, a sender starts from an intended meaning rooted in their own reality of thoughts and feelings, encodes it, and sends a message through channels of verbal and nonverbal symbols and visual images; the receiver decodes it into a perceived meaning rooted in THEIR reality — all within a context, with noise intruding at every step, and with the roles reversing as the receiver responds. Because encoding and decoding happen in two different realities, the perceived meaning is never automatically the intended one: a message can be perfectly transferred and completely misunderstood. Barriers attack specific stages. Information overload swamps the receiver's processing capacity, so decoding degrades. Filtering corrupts encoding: the sender deliberately manipulates information to look more favorable to the receiver. Jargon — a group's specialized terminology — encodes meaning in symbols the receiver may not share. Emotions distort both encoding and decoding; silence removes the feedback loop entirely; and national culture shapes the context in which symbols and behaviors are interpreted. The remedies the lecture offers mirror the model: USE FEEDBACK to test whether perceived meaning matches intended meaning; SIMPLIFY LANGUAGE to fit the audience (the antidote to jargon); LISTEN ACTIVELY — listening for full meaning without premature judgments or interpretations; CONSTRAIN EMOTIONS before encoding or decoding important messages; and WATCH NONVERBAL CUES, since body language and verbal intonation carry meaning words omit. The overall lesson: effective communicators design messages around the receiver's reality and close the loop — they verify understanding rather than assume that transmission accomplished it."
        },
        {
          q: "Present the Communication Square as a tool for better communication. Explain the four sides of a message, the strengths and weaknesses of the four “ears,” and show how the tool can be used to prepare an important conversation.",
          outline: [
            "Premise: every message has four simultaneous layers",
            "Content: what I talk about — objective facts; Relationship: what I think about you/us; Appeal: what I want you to do; Self-revelation: what I reveal of myself",
            "Receiving ears and their profiles: content (factual, objective / blind to emotional nuance, impersonal); relationship (sensitive, reads between lines / easily hurt, takes things personally); appeal (cooperative, goal-oriented / exploitable, neglects own needs); self-revelation (empathetic / shifts problems to others, doesn't question self)",
            "Diagnosis: many conflicts = sender emphasizes one side, receiver hears with a different ear",
            "Preparation grid: content (topics, arguments, examples), relationship (how will the other feel treated; maintain positive relationship), appeal (what to achieve; min/max goal), self-revelation (how do I feel; needs; what to share)",
            "Conclusion: balanced sending + aware listening"
          ],
          model: "The Communication Square holds that every message — even a single sentence — communicates on four sides at once. The CONTENT side carries what I talk to you about: the objective facts. The RELATIONSHIP side signals what I think about you and us — the receiver asks, “what does this person think of me?” The APPEAL side conveys what I want you to do. The SELF-REVELATION side discloses something about me — what is going on with the sender. Misunderstanding arises because people also LISTEN with four different “ears,” each with characteristic strengths and weaknesses. The content ear is factual, neutral, result-oriented, and objective, but blind to emotional nuances and impersonal. The relationship ear is sensitive, reads between the lines, and is human — but vulnerable, easily hurt or angered, taking everything personally. The appeal ear is cooperative, obliging, and goal-oriented, but risks being exploited and neglecting its own needs. The self-revelation ear is empathetic and understanding, but can shift problems onto others and fail to question itself. A terse “the deck still has the old figures” can thus be sent as pure content yet heard as a relationship verdict (“he thinks I'm careless”) or as a harsh appeal (“stay all night”). The tool's practical power lies in preparation: before an important conversation, plan all four sides deliberately. Content: which topics do I want to address, with what arguments, reasons, and examples? Relationship: how will the other person feel treated, and how can I create or maintain a positive relationship? Appeal: what do I want to achieve — my minimum and maximum goals? Self-revelation: how do I feel about the situation, what are my needs, and what do I choose to share? A communicator who sends on all four sides consciously — and recognizes which ear is dominating their own listening — prevents the twenty-word, four-misunderstanding exchanges that poison workplaces."
        },
        {
          q: "Compare the chain, wheel, and all-channel communication networks on speed, accuracy, leader emergence, and member satisfaction, and discuss how a manager should choose among them. Include the grapevine and the directions of communication flow in your answer.",
          outline: [
            "Networks defined: patterns of vertical and horizontal flows",
            "Chain: moderate speed, HIGH accuracy, moderate leader emergence, moderate satisfaction — follows formal chain of command",
            "Wheel: FAST, HIGH accuracy, HIGH leader emergence, LOW satisfaction — hub-and-spokes leader",
            "All-channel: FAST, moderate accuracy, NO leader emergence, HIGH satisfaction — everyone with everyone",
            "Choice depends on the criterion that matters most (accuracy vs. speed vs. morale vs. clear leadership); no network dominates",
            "Flows: downward, upward, lateral, diagonal — networks shape which flows exist",
            "Grapevine: informal network; fast, trusted; managers should monitor it and feed formal channels rather than ignore it",
            "Conclusion: match the network to task and goals; never leave a vacuum for rumor"
          ],
          model: "Communication networks are the patterns the vertical and horizontal flows of organizational communication settle into, and the lecture compares three on four criteria. The CHAIN follows the formal line: moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction — disciplined and reliable, but slow, and information must climb and descend every rung. The WHEEL routes everything through a central hub: it is fast and highly accurate, and a leader clearly emerges — but member satisfaction is LOW, because the spokes talk only to the hub and feel voiceless. The ALL-CHANNEL network lets everyone communicate with everyone: fast with HIGH member satisfaction, but accuracy is only moderate and no leader emerges. The comparison teaches that no network dominates: a manager must decide which criterion the situation weights most — accuracy for safety-critical instructions (chain or wheel), speed plus morale for creative collaboration (all-channel), clear coordination under time pressure (wheel) — and accept the trade-offs. Networks also determine which directions of flow actually function: downward communication from managers to employees, upward from employees to managers, lateral among same-level employees, and diagonal across both areas and levels. A pure cascade starves the upward and diagonal flows that carry frontline intelligence to decision makers. Finally, alongside every formal design runs the GRAPEVINE — the informal organizational communication network. It is fast, it ignores the chart, and employees often trust it more than official silence. Managers should neither fight nor ignore it: monitor it as a barometer of concerns, and preempt it by feeding the formal channels promptly and candidly. The grapevine fills whatever vacuum the formal network leaves — so the best defense is a formal network that leaves none."
        }
      ]
    }
  ]
};
