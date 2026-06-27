/* ============================================================
   MNGT 215 — Fundamentals of Management & Organizational Behavior
   Study site data. Lecture summaries drawn from the Week 1-13 slides
   (Robbins, Coulter & Long, 2024, Management, 16th Global Edition,
   as adapted by the instructor, plus instructor additions).

   Each lecture has THREE difficulty tiers (easy/medium/hard). An exam
   per tier = 12 MCQs (type "mcq" or "fill" for fill-in-the-blank) +
   2 case studies + 1 essay, under a 75-minute timer. MCQs carry an "h"
   array of per-option coaching hints; "fill" items carry an "accept"
   array of acceptable typed answers. Sections may carry a "check"
   (inline check-for-understanding question). Cases & essays are tagged
   by "tier" and set in Lebanon's post-2019 economy.
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
          ],
          check: {
            q: "Which characteristic is NOT one of the three shared by every organization?",
            o: [
              "A distinct purpose",
              "People",
              "A deliberate structure",
              "A guaranteed profit"
            ],
            a: 3,
            e: "Every organization has a distinct purpose, people, and a deliberate structure; profit is not a universal feature (e.g., NGOs and universities are organizations too)."
          }
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
          ],
          check: {
            q: "A manager defines next quarter's goals and decides how to reach them. Which function is this?",
            o: [
              "Planning",
              "Organizing",
              "Leading",
              "Controlling"
            ],
            a: 0,
            e: "Planning is defining goals, establishing strategy, and developing plans to coordinate activities."
          }
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
          ],
          check: {
            q: "Mintzberg grouped managerial roles into three categories. Which is the correct set?",
            o: [
              "Technical, human, conceptual",
              "Interpersonal, informational, decisional",
              "Planning, organizing, controlling",
              "Top, middle, first-line"
            ],
            a: 1,
            e: "Mintzberg's ten roles fall into three categories: interpersonal, informational, and decisional."
          }
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
          ],
          check: {
            q: "According to Katz, which skill becomes MOST important as a manager rises to the top level?",
            o: [
              "Technical skills",
              "Conceptual skills",
              "Human skills",
              "Operative skills"
            ],
            a: 1,
            e: "Katz argued conceptual skills grow most important at higher levels, while technical skills matter most at lower levels and human skills matter at all levels."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which of the following best defines a manager?",
          o: [
            "Anyone who works hard and meets their personal sales targets",
            "Someone who coordinates and oversees the work of other people so organizational goals can be accomplished",
            "An employee with the highest salary in a department",
            "A person who performs only non-managerial, hands-on tasks"
          ],
          a: 1,
          h: [
            "Effort and personal targets describe a productive individual contributor, not the defining feature of a manager.",
            "Right idea — a manager coordinates and oversees others' work toward goals.",
            "Pay level does not define managerial status; it correlates at best.",
            "This describes a non-managerial employee (an operative), the opposite of a manager."
          ],
          e: "A manager is someone who coordinates and oversees the work activities of others so that organizational goals are accomplished, distinguishing them from non-managerial employees."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "An organization is best defined as a deliberate arrangement of people that has which three common characteristics?",
          o: [
            "Profit motive, shareholders, and a board of directors",
            "A distinct purpose, people, and a deliberate structure",
            "Buildings, equipment, and capital",
            "Government registration, taxes, and audited accounts"
          ],
          a: 1,
          h: [
            "These apply only to for-profit corporations, not all organizations (e.g., NGOs, universities).",
            "Right idea — purpose, people, and a deliberate structure define any organization.",
            "These are physical resources, not the defining characteristics of an organization.",
            "These are legal/financial features, not the universal defining traits."
          ],
          e: "Every organization shares three characteristics: a distinct purpose, people who carry it out, and a deliberate structure that defines members' work."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In the management process, which function involves motivating, leading, and resolving conflicts among employees?",
          o: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling"
          ],
          a: 2,
          h: [
            "Planning is about defining goals and strategies, not directly motivating people.",
            "Organizing arranges tasks and structure, not the act of motivating individuals.",
            "Right idea — leading is the function of motivating and directing people.",
            "Controlling is about monitoring and correcting performance after the fact."
          ],
          e: "Leading involves working with and through people: motivating employees, directing activities, selecting communication channels, and resolving conflicts."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Managers who sit at the top of an organization and are responsible for making organization-wide decisions are called _____ managers.",
          o: [],
          a: 0,
          accept: [
            "top",
            "top-level",
            "top level",
            "senior",
            "top manager",
            "top managers"
          ],
          h: [
            "Think about the level above middle managers.",
            "They make organization-wide decisions and set broad plans."
          ],
          e: "Top managers are at or near the upper levels of the organization and make decisions about the direction of the entire organization."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The management function concerned with arranging and structuring work to accomplish organizational goals is called _____.",
          o: [],
          a: 0,
          accept: [
            "organizing",
            "organising"
          ],
          h: [
            "It involves determining what tasks are to be done and who reports to whom.",
            "It is the second of the four functions, between planning and leading."
          ],
          e: "Organizing involves arranging and structuring work — deciding what tasks are done, who does them, how they are grouped, and who reports to whom."
        },
        {
          type: "fill",
          tier: "easy",
          q: "A manager's ability to use the knowledge, methods, and techniques of a specific field is called _____ skills.",
          o: [],
          a: 0,
          accept: [
            "technical",
            "technical skill",
            "technical skills"
          ],
          h: [
            "These are most important for first-line managers.",
            "Think of job-specific, specialized expertise."
          ],
          e: "Technical skills are the job-specific knowledge and techniques needed to perform work tasks; they matter most for lower-level managers."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A regional sales supervisor in Beirut spends her morning reprice-checking USD menu boards against the day's black-market lira rate, assigning staff to register shifts, and reassuring anxious cashiers about delayed salaries. Mapping her morning to the four functions, the salary reassurance falls under which function?",
          o: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling"
          ],
          a: 2,
          h: [
            "Planning is the repricing/rate-checking decision, not reassuring people.",
            "Assigning shifts is organizing; reassuring people is something else.",
            "Right idea — reassuring and motivating anxious staff is leading.",
            "Controlling would be comparing actual sales to targets, not calming staff."
          ],
          e: "Reassuring and motivating employees is a leading activity; assigning shifts is organizing, and the repricing decision reflects planning."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A factory floor manager notices monthly output has fallen below the production target, investigates the cause, and adjusts the line schedule. This sequence — measuring performance against a standard and taking corrective action — is the function of:",
          o: [
            "Leading",
            "Controlling",
            "Planning",
            "Organizing"
          ],
          a: 1,
          h: [
            "Leading is about motivating people, not measuring output against a standard.",
            "Right idea — measuring against a standard and correcting is controlling.",
            "Planning sets the target, but measuring against it and correcting is a different function.",
            "Organizing structures the work; it does not monitor and correct performance."
          ],
          e: "Controlling is monitoring actual performance, comparing it against the goal/standard, and taking corrective action when there is a deviation."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "To keep production from ever stopping during a fuel-queue crisis, a plant manager arranges a meeting with an outside diesel wholesaler and bargains over price and delivery terms to secure a private supply contract. In Mintzberg's framework, this act of bargaining with an outside party best fits which role?",
          o: [
            "Disturbance handler",
            "Resource allocator",
            "Negotiator",
            "Monitor"
          ],
          a: 2,
          h: [
            "The disturbance handler reacts to unexpected internal conflicts or breakdowns; here she is deliberately bargaining an external deal, not reacting to a sudden dispute.",
            "Resource allocator decides how to distribute resources internally among units, not bargaining with an outside supplier.",
            "Right idea — bargaining with an external party to reach an agreement is the negotiator role.",
            "The monitor gathers and receives information; bargaining a contract is an action, not information-gathering."
          ],
          e: "The negotiator is a decisional role in which the manager represents the organization in bargaining and reaching agreements with outside parties, such as a supply contract."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When a manager attends an employee's wedding and signs official documents on the company's behalf, she is performing the _____ role, one of Mintzberg's interpersonal roles.",
          o: [],
          a: 0,
          accept: [
            "figurehead"
          ],
          h: [
            "It is a symbolic, ceremonial interpersonal role.",
            "Think of duties of a legal or social nature performed as a representative."
          ],
          e: "The figurehead is an interpersonal role involving symbolic, ceremonial, and legal duties performed as the head of the unit."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A manager who scans industry news, supplier reports, and market rates to gather information useful to the organization is performing Mintzberg's _____ role.",
          o: [],
          a: 0,
          accept: [
            "monitor"
          ],
          h: [
            "It is one of the three informational roles.",
            "Think of seeking and receiving a wide range of information.",
            "It is the information-gathering counterpart to the disseminator and spokesperson."
          ],
          e: "The monitor is an informational role in which the manager seeks and receives information to develop a thorough understanding of the organization and environment."
        },
        {
          type: "fill",
          tier: "medium",
          q: "According to Katz, the skills involving working well with, understanding, and motivating other people are called _____ skills.",
          o: [],
          a: 0,
          accept: [
            "human",
            "interpersonal",
            "human relations",
            "people"
          ],
          h: [
            "These are equally important at all levels of management.",
            "Think about the ability to work with people, individually and in groups."
          ],
          e: "Human (interpersonal) skills are the ability to work well with other people both individually and in a group, and they are important at all management levels."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two division heads face the same lira collapse. One spends most of her time gathering rate data and relaying it to corporate; the other spends most of her time deciding which scarce fresh-dollar reserves each branch receives. Mintzberg would say the difference is mainly that the first emphasizes _____ roles while the second emphasizes _____ roles.",
          o: [
            "decisional; interpersonal",
            "informational; decisional",
            "interpersonal; informational",
            "decisional; informational"
          ],
          a: 1,
          h: [
            "Allocating reserves is a decision, not an interpersonal duty, so this pairing is reversed.",
            "Right idea — gathering/relaying information is informational; allocating scarce reserves is decisional.",
            "Gathering and relaying data is informational, not interpersonal; this is mismatched.",
            "This reverses the pair: the first manager is informational, the second decisional."
          ],
          e: "Gathering and transmitting rate data are informational roles (monitor/disseminator/spokesperson); allocating scarce reserves is the resource-allocator decisional role."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A newly promoted top manager keeps personally fixing accounting spreadsheets instead of setting direction and building external relationships. Using Katz's skill-mix argument, the most accurate critique is that she is:",
          o: [
            "Over-relying on conceptual skills the role no longer requires",
            "Over-relying on technical skills when her level now demands more conceptual and human skills",
            "Lacking technical skills needed at the top level",
            "Correctly prioritizing, since technical skills matter most at every level"
          ],
          a: 1,
          h: [
            "She is not over-using conceptual skills; she is avoiding them by doing detailed technical work.",
            "Right idea — Katz argues technical skills decline in importance and conceptual skills rise as you move up.",
            "She clearly has technical skill; the issue is over-using it, not lacking it.",
            "Katz argues technical skills become less critical at the top, so this contradicts the model."
          ],
          e: "Katz's model holds that conceptual skills grow most important at the top while technical skills matter most at lower levels; clinging to spreadsheets misallocates her skill emphasis."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A board claims its CEO is 'effective' because revenue targets were met, yet auditors find the targets were hit only by consuming triple the budgeted fuel and overtime. The sharpest management evaluation is that the CEO was:",
          o: [
            "Both efficient and effective",
            "Effective but not efficient",
            "Efficient but not effective",
            "Neither efficient nor effective"
          ],
          a: 1,
          h: [
            "High resource waste rules out efficiency, so 'both' is wrong.",
            "Right idea — goals met (effective) but with heavy resource waste (not efficient).",
            "Goals were met, so 'not effective' is incorrect.",
            "The targets were achieved, so the CEO was at least effective."
          ],
          e: "Effectiveness means attaining goals ('doing the right things'); efficiency means low resource waste ('doing things right'). Hitting targets while wasting resources is effective but inefficient."
        },
        {
          type: "fill",
          tier: "hard",
          q: "Doing things right — getting the most output from the least input of resources — describes managerial _____.",
          o: [],
          a: 0,
          accept: [
            "efficiency",
            "efficient"
          ],
          h: [
            "It is the resource-use side of the effectiveness/this pair.",
            "Contrast it with effectiveness, which is 'doing the right things'."
          ],
          e: "Efficiency refers to getting the most output from the least input ('doing things right'), concerned with the means of getting work done."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The skill that lets a manager see the organization as a whole, understand how its parts interrelate, and analyze how it fits its environment is called a _____ skill.",
          o: [],
          a: 0,
          accept: [
            "conceptual",
            "conceptual skill",
            "conceptual skills"
          ],
          h: [
            "This skill is most important for top managers.",
            "Think about seeing the 'big picture' and the relationships among parts."
          ],
          e: "Conceptual skills are the ability to think about abstract and complex situations, see the organization as a whole, and understand how its parts relate — most critical at the top level."
        },
        {
          type: "fill",
          tier: "hard",
          q: "In Mintzberg's framework, the decisional role in which a manager searches the organization and its environment for opportunities and initiates improvement projects is the _____ role.",
          o: [],
          a: 0,
          accept: [
            "entrepreneur",
            "entrepreneurial"
          ],
          h: [
            "It is a decisional role focused on initiating change and improvement.",
            "Distinguish it from the disturbance handler, who reacts rather than initiates."
          ],
          e: "The entrepreneur role is a decisional role in which the manager initiates and oversees new projects to improve the organization's performance."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "The Manager Behind the Money Exchange",
          scenario: "Rana runs a small licensed money-exchange shop in Tripoli. Since the 2019 crisis, customers line up daily to convert lollars (trapped bank dollars) and fresh dollars at rapidly shifting black-market lira rates. Rana does not personally serve every customer; instead she sets the day's posted rate each morning after checking the parallel-market apps, schedules her three tellers across the counter and the back office, walks the floor to calm tense customers when a rate jump sparks an argument, and at closing reconciles the till against the day's recorded transactions to catch any shortfall. Her cousin insists Rana 'isn't really working' because she rarely handles cash herself.",
          qs: [
            {
              q: "Is Rana a manager? Justify your answer using the textbook definition.",
              a: "Yes. A manager is someone who coordinates and oversees the work of others so that organizational goals are accomplished, rather than necessarily doing the operative tasks personally. Rana directs three tellers, schedules their work, and oversees the shop's performance, so coordinating others — not handling cash herself — is precisely what makes her a manager."
            },
            {
              q: "Identify which of the four management functions each of Rana's morning-to-close activities represents.",
              a: "Setting the day's posted rate after checking the market is planning (defining goals and the approach). Scheduling tellers across counter and back office is organizing (arranging and structuring work). Walking the floor to calm customers and staff is leading (motivating and directing people). Reconciling the till against recorded transactions to catch shortfalls is controlling (measuring performance and taking corrective action)."
            },
            {
              q: "Her shop has a distinct purpose, people, and a deliberate structure. Why does this make it an organization?",
              a: "An organization is a deliberate arrangement of people that shares three characteristics: a distinct purpose (providing currency exchange), people who pursue that purpose (Rana and her three tellers), and a deliberate structure (defined roles such as counter and back-office positions and a reporting line to Rana). Because all three are present, the exchange shop qualifies as an organization."
            }
          ]
        },
        {
          tier: "medium",
          title: "Mintzberg in the Generator District",
          scenario: "Karim manages a neighborhood ishtirak (private generator subscription) business in Beirut that supplies amperage to about 200 households during EDL grid blackouts. In a single week: he greets a new subscriber and signs the service agreement at a small ceremony; he phones around fuel suppliers and tracks diesel prices and grid-schedule rumors to stay ahead; he relays the new amperage-limit policy to his technicians and explains the coming price increase to subscribers in a WhatsApp broadcast; when two technicians clash over who covers the night shift during a fuel shortage, he steps in to settle it; and he negotiates a bulk diesel contract with a wholesaler to lock in supply.",
          qs: [
            {
              q: "Classify the signing ceremony and the WhatsApp broadcast using Mintzberg's role categories, naming the specific roles.",
              a: "Signing the service agreement at a ceremony is an interpersonal role, specifically the figurehead — a symbolic, ceremonial, and legal duty performed as head of the unit. Broadcasting the new policy and price increase to subscribers is an informational role, specifically the spokesperson (transmitting information to outsiders), while relaying the amperage policy to his own technicians is the disseminator role (passing information to insiders)."
            },
            {
              q: "Karim says tracking diesel prices and grid rumors 'isn't real management — it's just gossip.' Use Mintzberg to correct him.",
              a: "Mintzberg identifies the monitor as an informational role in which the manager continuously scans the environment and seeks information to understand the organization and its context. Tracking diesel prices and grid-schedule rumors is exactly this monitor role, and it feeds his decisional roles — without that information he could not negotiate supply or set amperage policy effectively, so it is core managerial work, not gossip."
            },
            {
              q: "Distinguish the technician conflict from the diesel contract using Mintzberg's decisional roles.",
              a: "Stepping in to settle the technicians' shift clash during a shortage is the disturbance-handler role — responding to an unexpected internal conflict that must be resolved. Negotiating the bulk diesel contract with the wholesaler is the negotiator role — representing the organization in bargaining with an external party to reach an agreement. Both are decisional, but one is reactive crisis response while the other is a deliberate external deal."
            }
          ]
        },
        {
          tier: "hard",
          title: "Efficient, Effective, or Neither at the Pharmacy Chain",
          scenario: "A mid-size pharmacy chain operating across Lebanon faces capital controls and daily lira repricing. Head office gives two branch managers the same monthly goal: keep essential medicines in stock and serve at least 3,000 customers. Branch A's manager, Hadi, hits both targets but does so by overstocking imported drugs bought with scarce fresh dollars at panic prices, running the generator at full amperage all day, and paying heavy overtime — his cost per customer is the highest in the chain. Branch B's manager, Lina, also hits both targets while rationing fresh-dollar purchases to fast-moving items, cutting generator hours during low-traffic periods, and cross-training staff to avoid overtime — her cost per customer is the lowest in the chain. At the quarterly review, regional leadership praises Hadi for 'never running out' and barely mentions Lina.",
          qs: [
            {
              q: "Evaluate Hadi and Lina using the concepts of efficiency and effectiveness. Who better embodies good management, and why?",
              a: "Effectiveness is goal attainment ('doing the right things') and efficiency is getting maximum output from minimum resource input ('doing things right'). Both managers are effective because both met the stocking and customer goals. However, Lina is also efficient — lowest cost per customer through rationed dollars, reduced generator hours, and no overtime — whereas Hadi is effective but inefficient, achieving the same goals with the highest resource waste. Good management requires both, so Lina better embodies it: she pairs effectiveness with efficiency, which is especially critical under capital controls where fresh dollars are scarce."
            },
            {
              q: "Leadership rewarded the effective-but-inefficient manager. Analyze the risk this creates for the chain, and connect it to why managers must care about efficiency in a resource-constrained economy.",
              a: "By rewarding only goal attainment and ignoring resource use, leadership signals that wasting scarce fresh dollars, fuel, and labor is acceptable as long as shelves are full. In a capital-controlled, hyperinflationary economy, inputs are extremely scarce and expensive, so ignoring efficiency can drain the cash the chain needs to survive and could make Hadi's approach unsustainable chain-wide. The risk is that other managers imitate Hadi, costs balloon, and the chain becomes effective in the short run but financially unviable — demonstrating why efficiency cannot be treated as secondary."
            },
            {
              q: "What measurable controls and incentives could head office introduce so that both efficiency and effectiveness are managed, and which management function does this fall under?",
              a: "This falls under the controlling function — establishing standards, measuring actual performance against them, and taking corrective action. Head office could add efficiency standards alongside the existing goals: track cost per customer, fresh-dollars per prescription, generator-hours per branch, and overtime as a share of payroll, then compare branches against benchmarks. Tying recognition and bonuses to hitting service targets within cost benchmarks would reward managers like Lina and pressure managers like Hadi to reduce waste, aligning incentives with both effectiveness and efficiency."
            }
          ]
        },
        {
          tier: "hard",
          title: "From Best Pharmacist to Lost Director",
          scenario: "Nadia was the most technically brilliant pharmacist in a Beirut hospital — fastest at compounding, encyclopedic on drug interactions, trusted by every doctor. On that reputation she was promoted to Director of Pharmacy Operations for the whole hospital network. Eight months into the post-2019 crisis, the network is struggling: suppliers demand fresh dollars up front, donor agencies offer in-kind medicine, and the board wants a three-year strategy to keep the network solvent. Nadia, however, still spends her days behind the counter verifying compounds and correcting junior pharmacists' dosages — work she loves and does flawlessly. She avoids the supplier negotiations, has not built relationships with the donor agencies, and has produced no strategic plan. Her department's technical quality is excellent, but the network's medicine pipeline is breaking down and morale among her unit heads is sinking because she overrides their decisions on small details.",
          qs: [
            {
              q: "Using Katz's three skills and how their importance varies by level, diagnose why Nadia is struggling in the director role despite her brilliance.",
              a: "Katz identified technical, human, and conceptual skills, and argued that as managers rise, technical skills matter less while conceptual skills become most important; human skills stay important at all levels. Nadia excels technically, which made her a great pharmacist, but the director role demands strong conceptual skills — seeing the whole network, understanding how supply, finance, and donors interrelate, and crafting strategy — exactly the skills she is avoiding. By staying behind the counter she is over-relying on technical skill at a level where it has become least critical, which explains her struggle."
            },
            {
              q: "Identify which Mintzberg roles Nadia is neglecting and the consequences of that neglect for the network.",
              a: "She is neglecting key decisional and informational roles. As negotiator she should be bargaining with suppliers over fresh-dollar terms, and as monitor and spokesperson she should be gathering donor information and representing the network to donor agencies — her avoidance is why the medicine pipeline is breaking down. She is also failing the entrepreneur role by producing no strategy to adapt to the crisis. Meanwhile, by overriding unit heads on small details she mishandles her leader role, damaging morale."
            },
            {
              q: "Recommend a concrete development plan for Nadia, specifying which skills and functions she must shift toward and how the network might avoid this 'promote the best technician' trap in future.",
              a: "Nadia should deliberately delegate compounding and dosage verification to capable unit heads (strengthening their leader/human-skill development) and reallocate her time to conceptual and decisional work: building a three-year strategy (planning and the entrepreneur role), leading supplier negotiations, and cultivating donor relationships (negotiator, spokesperson, monitor). She needs coaching in conceptual and human skills and should set goals around network solvency, not bench accuracy. To avoid the trap, the network should assess candidates for conceptual and human skills — not just technical excellence — before promotion, and provide transition training, since a brilliant operative does not automatically possess the skill mix a senior manager's role requires."
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
          model: "Efficiency and effectiveness capture two different questions about managerial work. Efficiency is about the means of getting things done: using resources with as little waste as possible. Effectiveness is about the ends: whether organizational goals are attained (Exhibit 1-4). The statement is therefore one-sided. An organization can be effective without being efficient — for example, reaching a sales target while doubling labor costs — and it can be efficient without being effective, conserving resources while missing its goals. Because management is defined as coordinating and overseeing others' work so that activities are completed efficiently AND effectively, the lecture is explicit that management strives for both low resource waste (high efficiency) and high goal attainment (high effectiveness). A manager who treats efficiency as secondary allows the cost of achieving goals to balloon, which undermines the organization's performance — precisely what managers exist to protect.",
          tier: "easy"
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
          model: "The four functions describe a manager's work (Exhibit 1-5). Planning means defining goals, establishing strategies to achieve them, and developing plans to integrate and coordinate activities — e.g., setting a target to raise sales 15% this quarter. Organizing means arranging and structuring work to accomplish organizational goals — e.g., designing shifts and grouping tasks into jobs and departments. Leading means working with and through people to accomplish goals — e.g., motivating and coaching a team. Controlling means monitoring, comparing, and correcting work — e.g., comparing weekly results to the target and adjusting. The functions form a connected cycle rather than four separate boxes: planning provides the goals and strategies; organizing builds the structure to pursue them; leading gets the people working toward them; and controlling compares actual work with the plan, with deviations triggering corrections and new planning.",
          tier: "medium"
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
          model: "Mintzberg described managerial work through roles — specific actions or behaviors expected of and exhibited by a manager. He identified 10 roles in three categories (Exhibit 1-6). Interpersonal roles arise from relationships: the figurehead performs ceremonial duties (e.g., representing the firm at an event), the leader motivates and develops employees, and the liaison maintains a network of contacts inside and outside the unit. Informational roles concern the transfer of information: the monitor scans the environment for information, the disseminator passes information to organization members, and the spokesperson transmits information to outsiders (e.g., presenting results to the press). Decisional roles center on choices: the entrepreneur initiates projects and change, the disturbance handler deals with unexpected problems (e.g., a strike), the resource allocator decides who gets what (budgets, staff, time), and the negotiator represents the organization in major negotiations. Together the three categories show that managing mixes relationships, information handling, and decision making rather than a single kind of activity.",
          tier: "hard"
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
          ],
          check: {
            q: "Adam Smith's 'division of labor' in The Wealth of Nations (1776) refers to:",
            o: [
              "Breaking jobs into narrow, repetitive, specialized tasks",
              "Dividing profits equally among workers",
              "Separating management from ownership",
              "Splitting an organization into departments by region"
            ],
            a: 0,
            e: "Division of labor (job specialization) means breaking work into narrow, repetitive tasks to raise productivity — a foundation later used in the Industrial Revolution."
          }
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
          ],
          check: {
            q: "The central goal of Taylor's scientific management was to:",
            o: [
              "Find the one best way to perform each task and train workers in it",
              "Promote team spirit among employees",
              "Treat the organization as an open system",
              "Make decisions using mathematical models"
            ],
            a: 0,
            e: "Scientific management uses the scientific method to identify the most efficient way to do a job, then trains workers to follow it."
          }
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
          ],
          check: {
            q: "Henri Fayol's principle of 'unity of command' states that every employee should:",
            o: [
              "Receive orders from only one superior",
              "Be paid a fair wage",
              "Follow a single organizational plan",
              "Place organizational interests above personal ones"
            ],
            a: 0,
            e: "Unity of command means each employee reports to and takes orders from just one superior, preventing conflicting instructions."
          }
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
          ],
          check: {
            q: "A key conclusion of the Hawthorne Studies was that:",
            o: [
              "Group norms and attitudes affect worker output more than money does",
              "Money is the only driver of worker output",
              "Physical lighting alone determines productivity",
              "Bureaucratic rules increase efficiency"
            ],
            a: 0,
            e: "The Hawthorne Studies found that group factors, norms, and social standards influenced individual output more strongly than pay, shaping the human relations movement."
          }
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
          ],
          check: {
            q: "Total quality management (TQM), which grew out of the quantitative approach, is best described as a philosophy of:",
            o: [
              "Continuous improvement and responsiveness to customer needs",
              "Strict obedience to bureaucratic rules",
              "Eliminating the division of labor",
              "Treating the firm as a closed system"
            ],
            a: 0,
            e: "TQM is driven by continuous improvement, customer focus, accurate measurement, and employee empowerment."
          }
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
          ],
          check: {
            q: "The contingency approach is best captured by the idea that:",
            o: [
              "There are no universal rules — the right action 'depends' on the situation",
              "One best structure fits every organization",
              "Organizations should ignore their environment",
              "Mathematical models solve all management problems"
            ],
            a: 0,
            e: "The contingency approach stresses that organizations differ and face different situations, so there are no simplistic or universal rules — 'it depends.'"
          }
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
          ],
          check: {
            q: "Why is algorithmic management called 'digital Taylorism'?",
            o: [
              "It keeps Taylorist features like piece-meal wages and standardization but controls output through digital scaffolds",
              "It abandons standardization in favor of craft work",
              "It eliminates performance measurement entirely",
              "It replaces the gig economy with permanent employment"
            ],
            a: 0,
            e: "Digital Taylorism retains familiar features (piece-meal wage, standardization, deskilling) while adding digital scaffolds and control of output rather than the process."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In The Wealth of Nations (1776), Adam Smith argued that society would benefit from which practice?",
          o: [
            "The division of labor (job specialization)",
            "Bureaucratic hierarchy",
            "Total quality management",
            "The contingency approach"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Bureaucracy is Weber's idea from the early 1900s, not Smith's 1776 argument.",
            "TQM emerged centuries later from the quantitative approach.",
            "The contingency approach is a much later systems-era idea, not Smith's argument."
          ],
          e: "Adam Smith argued that the division of labor — breaking jobs into narrow, repetitive tasks — would increase productivity and benefit society overall."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which of the following is an early example of management practice cited in the lecture?",
          o: [
            "The Egyptian Pyramids",
            "The internet",
            "The assembly line at Ford",
            "Twentieth-century stock markets"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "The internet is a modern development, not an early/ancient example of management.",
            "Ford's assembly line came much later, in the Industrial era.",
            "Stock markets are not the lecture's ancient example of large-scale coordination."
          ],
          e: "The Egyptian Pyramids, the Great Wall of China, and the Roman Catholic Church are classic early examples requiring management skills given their size and scope."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What did the Gilbreths call the 17 basic hand motions they identified?",
          o: [
            "Therbligs",
            "Principles",
            "Contingencies",
            "Synergies"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "'Principles' refers to Fayol's 14 principles, not hand motions.",
            "Contingencies relate to the contingency approach, not motion study.",
            "Synergy is a systems-approach idea, not the Gilbreths' classification."
          ],
          e: "The Gilbreths created therbligs (Gilbreth spelled roughly backward), a classification scheme for labeling the 17 basic hand motions used to reduce wasted effort."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Frederick Winslow Taylor's approach, which focused on finding the 'one best way' to perform a task, is called _____ management.",
          o: [],
          a: 0,
          accept: [
            "scientific",
            "scientific management"
          ],
          h: [
            "It uses time-and-motion study to find the most efficient method.",
            "Taylor is known as the father of this approach."
          ],
          e: "Scientific management uses the scientific method to determine the one best way to do a job, emphasizing efficiency."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Max Weber described an ideal organization characterized by division of labor, a clear hierarchy, detailed rules, and impersonal relationships, which he called a _____.",
          o: [],
          a: 0,
          accept: [
            "bureaucracy",
            "bureaucratic organization",
            "bureaucratic"
          ],
          h: [
            "It emphasizes rules, hierarchy, and impersonality.",
            "The word is still used today to describe rule-bound organizations."
          ],
          e: "Weber's bureaucracy was a structural ideal built on division of labor, a defined hierarchy, formal rules, and impersonal relationships."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The classical-era theorists who looked at management by focusing on the entire organization (Fayol and Weber) are known as _____ theorists.",
          o: [],
          a: 0,
          accept: [
            "general administrative",
            "general administrative theory",
            "administrative"
          ],
          h: [
            "They studied the whole organization, not just the shop floor.",
            "Fayol's 14 principles come from this branch."
          ],
          e: "General administrative theorists such as Fayol and Weber focused on the whole organization and what makes good management practice."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut bakery times each step of pita production with a stopwatch, then trains every baker in the single fastest method. Which approach is the manager applying?",
          o: [
            "Scientific management",
            "The contingency approach",
            "The human relations movement",
            "General administrative theory"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Contingency says methods should vary by situation, not converge on one timed best way.",
            "Human relations focuses on worker satisfaction, not stopwatch standardization.",
            "General administrative theory addresses the whole organization, not shop-floor task timing."
          ],
          e: "Timing tasks and training everyone in the one best method is the essence of Taylor's scientific management."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "During the crisis, a Lebanese firm reorganizes so that each warehouse worker reports to exactly one supervisor to end conflicting instructions. Which of Fayol's principles is being applied?",
          o: [
            "Unity of command",
            "Esprit de corps",
            "Remuneration",
            "Centralization"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Esprit de corps is about team spirit, not who gives orders.",
            "Remuneration concerns fair pay, not reporting lines.",
            "Centralization concerns how much decision-making sits at the top, not single reporting."
          ],
          e: "Unity of command states every employee should receive orders from only one superior, eliminating conflicting directions."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A generator (ishtirak) operator in Tripoli treats the neighborhood grid as a system whose parts — fuel prices, customer subscriptions, EDL outages, and maintenance — all affect one another and are shaped by outside forces. Recognizing these interdependent parts that interact with the environment reflects which view?",
          o: [
            "The open-systems view",
            "A closed-systems view",
            "Scientific management",
            "Therblig analysis"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "A closed system ignores the environment — but fuel prices and EDL are external influences.",
            "Scientific management is about task efficiency, not interdependent system parts.",
            "Therbligs classify hand motions, unrelated to system interdependence."
          ],
          e: "An open system interacts with and is influenced by its environment; the operator's grid depends on external inputs like fuel and EDL supply."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A factory adopts a management philosophy of continuous improvement and intense responsiveness to customer needs that grew out of the quantitative approach. This philosophy is called _____ (use the three-word term).",
          o: [],
          a: 0,
          accept: [
            "total quality management",
            "tqm",
            "total quality mgmt"
          ],
          h: [
            "Its abbreviation is TQM.",
            "Key ideas: continuous improvement and customer focus."
          ],
          e: "Total quality management (TQM) emerged from the quantitative approach and centers on continuous improvement and customer responsiveness."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A delivery startup hires riders as independent contractors paid per drop rather than salaried employees, reflecting their participation in the _____ economy.",
          o: [],
          a: 0,
          accept: [
            "gig",
            "gig economy"
          ],
          h: [
            "Workers are independent, flexible, and paid per task.",
            "Think app-based couriers and freelancers."
          ],
          e: "The gig economy provides flexibility and freedom to employers and independent workers who are paid per task rather than as permanent staff."
        },
        {
          type: "fill",
          tier: "medium",
          q: "The Hawthorne Studies concluded that group norms and attitudes, not money, mainly set worker output, which directly shaped the _____ movement that held a satisfied worker is a productive worker.",
          o: [],
          a: 0,
          accept: [
            "human relations",
            "human relations movement"
          ],
          h: [
            "It links employee satisfaction to productivity.",
            "Two words beginning with 'human'."
          ],
          e: "The human relations movement held that satisfied workers are productive workers, a belief shaped largely by personal conviction rather than rigorous research."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Critics argue algorithmic management is 'Taylorism on steroids.' Which feature most distinguishes digital Taylorism from Taylor's original scientific management?",
          o: [
            "It controls output via digital scaffolds rather than physical control of the work process",
            "It rejects the division of labor entirely",
            "It abandons standardization in favor of craft autonomy",
            "It pays fixed salaries instead of measuring performance"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Digital Taylorism intensifies, not rejects, the division of labor.",
            "It deepens standardization rather than abandoning it.",
            "It typically uses piece-meal/output-based pay, not fixed salaries — that's not the distinguishing point."
          ],
          e: "Per Noponen et al. (2024), digital Taylorism keeps familiar features (piece-meal wage, standardization, deskilling) but adds new ones: digital scaffolds replacing physical control and control of output rather than the process itself."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A consultant insists there is one universally best org structure for every Lebanese firm during the crisis. The contingency approach would critique this claim primarily because it:",
          o: [
            "Denies that organizations differ and face different situations requiring different responses",
            "Ignores the division of labor",
            "Overstates the role of employee satisfaction",
            "Treats the firm as a closed system"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "The division of labor isn't the core of the contingency critique.",
            "Employee satisfaction is the human relations theme, not the contingency point.",
            "Closed-vs-open systems is a related but separate issue; contingency's core claim is about situational difference."
          ],
          e: "The contingency approach stresses that organizations are different and face different contingencies, so there are no simplistic or universal rules — 'it depends.'"
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A manager combines stopwatch task-timing (efficiency) with Hawthorne-inspired attention to group morale. The best characterization of this blend is that the manager is:",
          o: [
            "Integrating a classical efficiency focus with a social-person focus on people and groups",
            "Applying only the quantitative approach",
            "Rejecting scientific management in favor of bureaucracy",
            "Using a purely closed-system perspective"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Stopwatch timing and group morale are not the quantitative (math-modeling) approach.",
            "Nothing here points to bureaucracy; scientific management is actually being used.",
            "Attending to the social environment is the opposite of a closed-system stance."
          ],
          e: "This blends the classical approach's drive for efficiency with the social-person insight that group factors and satisfaction shape behavior and output."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The contingency approach is often summarized in two words capturing its core message that the right managerial action varies with the situation: 'It _____.'",
          o: [],
          a: 0,
          accept: [
            "depends",
            "all depends",
            "it depends"
          ],
          h: [
            "The opposite of a universal rule.",
            "Managers must read the situation first."
          ],
          e: "The contingency approach's primary value is stressing that there are no universal rules — the best response 'depends' on the specific situation."
        },
        {
          type: "fill",
          tier: "hard",
          q: "In Noponen et al.'s account of digital Taylorism, the algorithm exercises control of _____ rather than control of the work process, a key shift from Taylor's original method.",
          o: [],
          a: 0,
          accept: [
            "output",
            "outputs",
            "results",
            "the output"
          ],
          h: [
            "Contrast it with controlling the 'process'.",
            "It is what the worker produces, not how.",
            "One word, the opposite of 'process'."
          ],
          e: "A defining new characteristic of digital Taylorism is controlling output (results) via digital scaffolds rather than physically directing the process."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "The lecture notes the human relations movement's views were 'largely shaped by personal beliefs and not substantive research,' whereas a later group studied behavior objectively. That later group is the:",
          o: [
            "Behavioral science theorists",
            "General administrative theorists",
            "Quantitative/management-science theorists",
            "Scientific management engineers"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "General administrative theorists (Fayol, Weber) studied structure, not objective behavioral research.",
            "The quantitative approach uses math models, not behavioral field research.",
            "Scientific management engineers timed tasks; they did not do objective study of organizational behavior."
          ],
          e: "Behavioral science theorists (e.g., Herzberg, Vroom, McClelland, Locke, House, Hackman) conducted objective research on human behavior in organizations, advancing beyond the belief-driven human relations movement."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Therbligs at the Manousheh Counter",
          scenario: "Rami runs a small manousheh (Lebanese flatbread) shop in Achrafieh. Since 2019, dollar-priced flour and cheese force him to keep portions tight while keeping lines moving during the morning rush. He notices his three bakers each spread za'atar differently: one reaches across the oven repeatedly, another re-grips the ladle, and the third works smoothly. Rami films them on his phone for a week, identifies the wasted reaches and re-grips, then writes a single step-by-step method everyone must follow and trains each baker on it. Output per hour rises and ingredient waste falls, helping him survive on razor-thin lira margins.",
          qs: [
            {
              q: "Which historical management approach is Rami using, and who are the figures most associated with it?",
              a: "Rami is applying scientific management, associated above all with Frederick Winslow Taylor, who sought the 'one best way' to perform a task. His filming and motion analysis specifically echo Frank and Lillian Gilbreth, who used motion-picture study to cut wasted hand-and-body motions."
            },
            {
              q: "What is the term for the wasted hand motions (reaching, re-gripping) Rami eliminated, and where does it come from?",
              a: "These are therbligs — the Gilbreths' classification scheme for basic hand motions, of which they identified 17. By spotting unnecessary therbligs like excess reaches and re-grips, Rami reduces wasted effort and improves efficiency."
            },
            {
              q: "Why does writing one standard method and training everyone on it reflect Taylor's principles rather than just personal preference?",
              a: "Taylor argued managers should scientifically determine the best method, then select, train, and develop workers in it rather than letting each rely on rule-of-thumb. Rami replaces three idiosyncratic habits with a single scientifically-derived standard and trains his staff on it, which mirrors Taylor's call to standardize the method and cooperate to ensure the work follows the science."
            }
          ]
        },
        {
          tier: "medium",
          title: "One Boss or Two? Reorganizing a Pharmacy Chain in Hyperinflation",
          scenario: "Pharma-Plus operates six branches across Mount Lebanon. With the lira collapsing and medicine prices repriced against the dollar almost daily, head office demands tighter control. But chaos has crept in: branch pharmacists receive pricing instructions from the finance director, stocking orders from the procurement head, and staffing rules from HR — often contradicting one another on the same day. Turnover is high and morale is low. The new general manager, Lina, redraws the structure so each pharmacist reports to one branch manager, who alone relays head-office directives. She also publishes clear rules for daily repricing, keeps a single action plan for all branches, and pairs this with weekly team huddles to rebuild a sense of shared purpose among staff worn down by the crisis.",
          qs: [
            {
              q: "Identify at least three of Fayol's 14 principles that Lina is applying and explain each in context.",
              a: "Unity of command: each pharmacist now receives orders from only one superior (the branch manager), ending contradictory instructions. Unity of direction: a single plan and consistent repricing rules guide all six branches toward one objective. Esprit de corps: the weekly huddles promote team spirit and harmony, and the published rules reflect Fayol's principle of order and arguably discipline."
            },
            {
              q: "Before the reform, which Fayol principle was most clearly violated, and what were the consequences?",
              a: "Unity of command was violated because pharmacists answered to finance, procurement, and HR simultaneously, receiving conflicting orders. Fayol warned this breeds confusion and undermines authority; here it produced contradictory daily decisions, low morale, and high turnover."
            },
            {
              q: "Lina pairs structural rules with weekly huddles to lift morale. How does combining Fayol's principles with a social-person concern reflect the broader evolution of management thought?",
              a: "Fayol's general administrative theory is part of the classical approach focused on rational structure and efficiency, while attention to morale and team spirit draws on the social-person insight that satisfied, socially-connected workers perform better (the Hawthorne/human-relations legacy). By combining clear structure with deliberate morale-building, Lina integrates the classical and social-person streams, reflecting how later management thinking blended efficiency with the human dimension rather than choosing one."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Algorithm Dispatches the Riders",
          scenario: "A Beirut-based delivery app, ToshkaGo, classifies its 400 motorbike riders as independent contractors paid per drop in 'fresh dollars.' During fuel queues and EDL blackouts, the app's algorithm assigns routes, sets dynamic per-drop rates, ranks riders by an acceptance-and-speed score, and auto-deactivates those who fall below a threshold. Riders never speak to a human supervisor; the app nudges them through constant notifications and penalizes rejected jobs. Management praises the system as efficient and 'data-driven.' Riders complain they are squeezed harder than salaried couriers ever were, with no say over rates that change by the hour, and that the score system makes them compete against each other even as petrol and spare parts cost more every week.",
          qs: [
            {
              q: "Explain why ToshkaGo's system is described as 'digital Taylorism,' citing both familiar and new characteristics.",
              a: "It reproduces Taylor's familiar features: a piece-meal wage (pay per drop), standardization of the work method, and deskilling so riders simply execute app instructions. But per Noponen et al. (2024) it adds new characteristics — digital scaffolds (the app, notifications, scoring) replace physical supervision, and the system exerts control of output and results rather than directly controlling the labor process, making it 'Taylorism on steroids.'"
            },
            {
              q: "Use the systems and contingency approaches to evaluate whether ToshkaGo's algorithm is well designed for Lebanon's crisis environment.",
              a: "From an open-systems view, ToshkaGo depends on environmental inputs — fuel availability, EDL power, spare-part costs, and fresh-dollar liquidity — yet its algorithm optimizes narrowly for speed and acceptance without absorbing these external shocks, so a tuned system on paper produces breakdowns in practice. The contingency approach warns there is no universal best design: a scoring model that suits a stable market may be poorly suited to fuel queues and hyperinflation, where riders cannot control delays. A better design would treat rider constraints as contingencies and adjust rates and penalties to the situation rather than applying one rigid rule."
            },
            {
              q: "How does this case illustrate both the gig economy and the limits of the human relations movement's optimism?",
              a: "ToshkaGo exemplifies the gig economy: independent contractors gain flexibility but lose the security and voice of employees, and the firm sheds obligations while still directing the work. The human relations movement held that a satisfied worker is a productive worker, but that view was largely belief-driven; here the algorithm extracts productivity through scoring and deactivation while ignoring satisfaction entirely, showing that, absent the substantive behavioral research the movement lacked, technology can raise output by intensifying pressure rather than by improving the worker's experience."
            }
          ]
        },
        {
          tier: "hard",
          title: "Closed Doors at the Bank: A System That Stopped Interacting",
          scenario: "Cedar Mutual Bank prospered for decades with a rigid bureaucracy: rule-bound procedures, a tall hierarchy, impersonal customer treatment, and managers rewarded for following the manual. When the 2019 crisis hit, depositors' dollars were frozen ('lollars'), and BDL circulars repeatedly changed withdrawal rules. Yet Cedar Mutual's managers kept applying old procedures, refused to acknowledge that capital controls had transformed their environment, and treated angry depositors as rule-violations to be managed rather than signals to respond to. Branches optimized internal metrics — forms processed, queues cleared — while ignoring collapsing trust, a parallel banking economy in fresh dollars, and fintech alternatives. A reformist board member argues the bank behaved as if it were sealed off from the world that was changing around it.",
          qs: [
            {
              q: "Using the open- vs. closed-systems distinction, diagnose Cedar Mutual's core failure.",
              a: "A closed system is one that is not influenced by and does not interact with its environment, whereas an open system takes in inputs from and responds to its surroundings. Cedar Mutual behaved like a closed system — ignoring frozen-deposit dynamics, shifting BDL circulars, eroding trust, and fintech competition — even though a bank is inherently an open system dependent on depositor confidence and the macro environment. By optimizing internal forms-and-queues metrics while screening out environmental feedback, it failed to adapt and accelerated its own decline."
            },
            {
              q: "Cedar Mutual's design fits Weber's bureaucracy. Explain why that classical ideal became a liability here, and what the contingency approach would say.",
              a: "Weber's bureaucracy — division of labor, clear hierarchy, detailed rules, and impersonal relationships — is efficient in stable, predictable conditions, which is why Cedar Mutual prospered for decades. But the contingency approach holds that organizations face different situations requiring different responses, with no universal best structure. In a volatile crisis demanding rapid, judgment-based adaptation to changing BDL rules and customer panic, rigid rule-following became a liability; the very impersonality and rule-adherence Weber prized prevented the responsiveness the new contingency demanded."
            },
            {
              q: "Synthesize the systems and social-person perspectives to recommend how Cedar Mutual should have responded.",
              a: "From a systems perspective, managers should have treated depositor anger, trust collapse, and fintech entry as environmental feedback inputs requiring adaptation — re-reading the open system rather than insulating against it. From the social-person perspective, depositors and front-line staff are people whose attitudes and confidence drive outcomes, so the bank should have engaged them rather than treating complaints as rule-violations. Combined, the recommendation is to loosen rigid bureaucratic procedures into more flexible, situation-sensitive (contingency-driven) responses, restore human trust through transparent communication, and continuously sense and respond to the changing crisis environment instead of optimizing internal metrics in isolation."
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
          model: "The classical approach comprised the first studies of management and emphasized rationality and making organizations and workers as efficient as possible. Within it, Taylor's scientific management used the scientific method to find the “one best way” to do a job — his time-and-motion studies at Bethlehem Steel and his four principles (develop a science of work, scientifically select and train workers, cooperate with workers, divide work between management and workers). The Gilbreths extended this with therbligs, a classification of 17 basic hand motions, using motion-picture film to cut wasted movement. The general administrative theorists looked at the whole organization: Fayol proposed 14 principles of management (e.g., unity of command, scalar chain, esprit de corps), and Weber described the ideal bureaucracy — division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships. The social-person approaches instead focused on the organization's human and social factors. The Hawthorne Studies showed that attitudes and behavior are closely related, that group factors significantly affect individual behavior, that group standards establish individual output, and that money matters less than group standards, attitudes, and security. The human relations movement claimed a satisfied worker is a productive worker — though this rested on personal beliefs rather than substantive research — and behavioral science theorists (Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman) later studied behavior objectively. Each tradition overlooked what the other saw: classical theory largely ignored the social side of work, while early human relations thinking lacked rigorous evidence. Together they explain why modern management attends to both efficient structures and human behavior.",
          tier: "easy"
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
          model: "Taylor's scientific management applied the scientific method to find the “one best way” for a job to be done, demonstrated in his time-and-motion studies at Bethlehem Steel. His four principles were: (1) develop a science for each element of work to replace rule-of-thumb; (2) scientifically select, train, teach, and develop the worker; (3) cooperate with workers to ensure work follows the science; and (4) divide work and responsibility almost equally between management and workers, with management doing what it is better suited for. Algorithmic management is “software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice” (Lee et al., 2015) — apps and systems that assign, monitor, evaluate, and discipline workers. The lecture's Digital Taylorism framework (Noponen et al., 2024) shows the continuity: piece-meal wages, standardization, deskilling, and exploitation are familiar Taylorist characteristics that persist on platforms. But it also identifies what is new: the assembly-line logic now reaches new professions; digital scaffolds replace physical control (the app, not the foreman or factory layout, structures work); and control shifts from the process to the output (workers are judged and sanctioned on measured results). In this sense algorithmic management is a deeper, digital version of Taylorism (Cameron, 2025) — the statement is broadly accurate, provided we recognize that the mechanism and reach of control have changed, not just its intensity.",
          tier: "medium"
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
          model: "A system is a set of interrelated and interdependent parts arranged in a manner that produces a unified whole. Closed systems neither are influenced by nor interact with their environment; open systems do interact with it. The systems approach views the organization as an open system: it draws inputs from the environment (raw materials, human resources, capital, technology, information), transforms them through employees' work activities, management activities, and technology and operations methods, and returns outputs (products and services, financial results, information, human results), with feedback looping back. The contingency approach recognizes organizations as different: they face different situations — contingencies — and require different ways of managing; more than 100 contingency variables have been identified. These approaches emerged because earlier schools implied universal answers: scientific management promised “one best way,” administrative theory offered general principles, and human relations assumed satisfaction always drives productivity. Reality proved less uniform. The practical lesson of the systems view is that managers cannot manage parts in isolation — decisions in one part affect the others, and the organization lives or dies by its exchanges with its environment. The lesson of the contingency view is that there are no simplistic or universal rules for managers to follow: effective management means diagnosing the situation and fitting structure, style, and systems to it.",
          tier: "hard"
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
          ],
          check: {
            q: "A manager who believes 'whatever happens to this company is ultimately my responsibility' is expressing which view?",
            o: [
              "The symbolic view",
              "The omnipotent view",
              "The contingency view",
              "The stakeholder view"
            ],
            a: 1,
            e: "The omnipotent view holds that managers are directly responsible for an organization's success or failure."
          }
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
          ],
          check: {
            q: "A firm's customers, suppliers, and competitors belong to which part of its environment?",
            o: [
              "The general environment",
              "The specific (task) environment",
              "The internal environment",
              "The economic environment only"
            ],
            a: 1,
            e: "The specific environment consists of external constituencies, such as customers, suppliers, and competitors, that directly affect the organization."
          }
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
          ],
          check: {
            q: "The highest level of environmental uncertainty occurs when the environment is:",
            o: [
              "Stable and simple",
              "Stable and complex",
              "Dynamic and simple",
              "Dynamic and complex"
            ],
            a: 3,
            e: "Uncertainty is greatest when the environment is both dynamic (rapid, unpredictable change) and complex (many dissimilar constituencies)."
          }
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
          ],
          check: {
            q: "A strong organizational culture is one in which:",
            o: [
              "Values are weakly held and rarely shared",
              "Core values are intensely held and widely shared",
              "There is no dominant culture, only subcultures",
              "Managers face no constraints on their decisions"
            ],
            a: 1,
            e: "In a strong culture the key values are deeply held and widely shared, giving it greater influence over members' behavior."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "The view that managers are directly responsible for an organization's success or failure is called the:",
          o: [
            "Symbolic view of management",
            "Omnipotent view of management",
            "Contingency view of management",
            "Systems view of management"
          ],
          a: 1,
          h: [
            "The symbolic view holds the opposite: outcomes are mostly due to external forces beyond managers' control.",
            "Right idea — that's the one.",
            "The contingency view is about matching practices to situations, not about who is responsible for outcomes.",
            "The systems view describes interdependent parts, not the locus of responsibility for performance."
          ],
          e: "The omnipotent view assumes managers are directly responsible for an organization's success or failure, which underlies holding managers accountable for results."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which of the following is part of an organization's SPECIFIC (task) environment rather than its general environment?",
          o: [
            "Demographic trends",
            "A key supplier",
            "National economic conditions",
            "Technological change broadly"
          ],
          a: 1,
          h: [
            "Demographics are a general-environment force affecting all organizations broadly.",
            "Right idea — suppliers are direct, immediate stakeholders in the specific environment.",
            "Broad economic conditions are part of the general environment.",
            "General technological change is a general-environment component, not a specific stakeholder."
          ],
          e: "The specific environment includes external constituencies that directly affect the organization, such as customers, suppliers, competitors, and pressure groups."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In the environmental uncertainty matrix, the two dimensions used to assess uncertainty are:",
          o: [
            "Profitability and growth",
            "Degree of change and degree of complexity",
            "Strength and weakness",
            "Strategy and structure"
          ],
          a: 1,
          h: [
            "Profitability and growth are performance outcomes, not uncertainty dimensions.",
            "Right idea — change (stable/dynamic) and complexity (simple/complex) define the matrix.",
            "Strengths and weaknesses are internal SWOT factors, not the uncertainty dimensions.",
            "Strategy and structure are organizational design choices, not the axes of the uncertainty matrix."
          ],
          e: "Environmental uncertainty is assessed along two dimensions: the degree of change (stable vs. dynamic) and the degree of complexity (simple vs. complex)."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The shared values, principles, traditions, and ways of doing things that influence how organizational members act is called organizational _____.",
          o: [],
          a: 0,
          accept: [
            "culture",
            "organizational culture",
            "organisational culture",
            "corporate culture"
          ],
          h: [
            "Think of it as the organization's 'personality.'",
            "It is shared, perceived, and descriptive rather than evaluative."
          ],
          e: "Organizational culture is a system of shared meaning held by members that distinguishes the organization from others."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Cultures in which core values are intensely held and widely shared are called _____ cultures.",
          o: [],
          a: 0,
          accept: [
            "strong",
            "strong culture",
            "strong cultures"
          ],
          h: [
            "The opposite would be a 'weak' culture.",
            "These cultures have greater influence on employee behavior."
          ],
          e: "Strong cultures, where key values are deeply held and widely shared, have a greater influence on employees than weak cultures."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The view that much of an organization's success or failure is due to external forces outside managers' control is the _____ view of management.",
          o: [],
          a: 0,
          accept: [
            "symbolic",
            "symbolic view"
          ],
          h: [
            "It is contrasted with the omnipotent view.",
            "Managers are seen as 'symbols' of control rather than real causes."
          ],
          e: "The symbolic view holds that managers have only a limited effect on outcomes because results are shaped by factors outside their control."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut importer cannot predict when BDL will issue a new circular, when fuel will arrive at the port, or how the lira will move week to week, and it deals with banks, customs, suppliers, and regulators all at once. In the uncertainty matrix this environment is best described as:",
          o: [
            "Stable and simple (low uncertainty)",
            "Stable and complex (low-moderate uncertainty)",
            "Dynamic and simple (moderate uncertainty)",
            "Dynamic and complex (high uncertainty)"
          ],
          a: 3,
          h: [
            "Unpredictable circulars and currency swings are anything but stable.",
            "The environment is changing rapidly, so it cannot be classified as stable.",
            "Many different and dissimilar constituencies make it complex, not simple.",
            "Right idea — rapid, unpredictable change plus many dissimilar stakeholders is the high-uncertainty cell."
          ],
          e: "Frequent unpredictable change (dynamic) combined with numerous and dissimilar external constituencies (complex) places the firm in the high-uncertainty quadrant."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A new CEO of a struggling Lebanese bank publicly fires the entire executive team and claims this alone will restore depositor confidence, ignoring capital controls and BDL policy. This reasoning best reflects:",
          o: [
            "The symbolic view of management",
            "The omnipotent view of management",
            "Environmental scanning",
            "A weak organizational culture"
          ],
          a: 1,
          h: [
            "The symbolic view would downplay the manager's ability to single-handedly change outcomes.",
            "Right idea — believing managers alone determine success overstates their control and reflects the omnipotent view.",
            "Environmental scanning is gathering external information, not a belief about managerial responsibility.",
            "This is a claim about managerial power, not a description of value intensity."
          ],
          e: "Crediting outcomes entirely to managerial action while ignoring powerful external constraints exemplifies the omnipotent view's overstatement of managerial control."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A retailer reprices its entire inventory in USD every morning as the lira slides, and trains staff to quote 'fresh dollar' prices on the spot. This is primarily a response to which general-environment component?",
          o: [
            "The sociocultural component",
            "The economic component",
            "The political/legal component",
            "The technological component"
          ],
          a: 1,
          h: [
            "Sociocultural factors concern values and demographics, not currency and inflation.",
            "Right idea — interest rates, inflation, and currency movements are economic-environment forces.",
            "Political/legal covers laws and regulation; daily repricing is driven by economic conditions.",
            "Technology concerns innovation and tools, not the pricing pressure from currency collapse."
          ],
          e: "Inflation, exchange-rate movements, and overall economic conditions are part of the economic component of the general environment, which here forces daily repricing."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A factory keeps detailed files on competitors, suppliers, and pending regulations and screens the news daily for threats; this practice of screening information to detect early trends is called environmental _____.",
          o: [],
          a: 0,
          accept: [
            "scanning",
            "environmental scanning",
            "scanning the environment"
          ],
          h: [
            "It is how managers reduce uncertainty by gathering external information.",
            "Competitor intelligence is one specific form of it."
          ],
          e: "Environmental scanning is the screening of information to detect emerging trends, helping managers anticipate and respond to changes in the external environment."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When a generator company tells customers 'we have always rationed amperage fairly and we always will,' and every employee repeats that story to justify daily decisions, the strongly shared values are acting as a behavioral _____ on managers.",
          o: [],
          a: 0,
          accept: [
            "constraint",
            "constraints",
            "limitation",
            "limit"
          ],
          h: [
            "Culture both guides and restricts what managers can do.",
            "Think of what a strong culture imposes on managerial discretion."
          ],
          e: "A strong organizational culture constrains managerial decision making by signaling appropriate and acceptable behavior, limiting managers' options."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Customers, suppliers, competitors, and pressure groups that directly affect a firm's day-to-day operations together make up the _____ environment.",
          o: [],
          a: 0,
          accept: [
            "specific",
            "specific environment",
            "task",
            "task environment"
          ],
          h: [
            "It is contrasted with the broad 'general' environment.",
            "These are the firm's immediate, direct stakeholders."
          ],
          e: "The specific (task) environment is made up of external constituencies that directly and immediately affect a manager's decisions and actions."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two Lebanese supermarkets face identical fuel shortages and capital controls. One adapts quickly with creative bartering and 'fresh dollar' pricing; the other collapses. A purely symbolic-view analyst would MOST likely argue that:",
          o: [
            "The difference proves managers are omnipotent and fully control outcomes",
            "The shared external constraints mean management quality explains little, and other factors (luck, location, prior reserves) drove the gap",
            "Organizational culture is irrelevant to performance in a crisis",
            "Environmental uncertainty was low because both faced the same shortages"
          ],
          a: 1,
          h: [
            "The symbolic view rejects, not embraces, managerial omnipotence.",
            "Right idea — the symbolic view attributes outcomes largely to forces outside managers' control rather than to managerial skill.",
            "The symbolic view does not claim culture is irrelevant; it emphasizes external constraints on management generally.",
            "Unpredictable shortages and controls indicate high, not low, uncertainty."
          ],
          e: "The symbolic view downplays managerial impact, attributing performance differences largely to external forces, constraints, and chance rather than to managerial competence."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A bank with a historically strong culture built on 'protect the depositor above all' must now enforce BDL capital controls that freeze customer deposits. The MOST likely organizational consequence is:",
          o: [
            "No tension, because strong cultures automatically adapt to any new rules",
            "Internal tension and resistance, because the new mandate conflicts with deeply held shared values",
            "An immediate, frictionless shift to a new culture within days",
            "Elimination of the external environment's influence on the bank"
          ],
          a: 1,
          h: [
            "Strong cultures resist change precisely because values are deeply held.",
            "Right idea — when external demands clash with deeply shared values, strong cultures generate resistance and tension.",
            "Cultural change is slow and difficult, especially in strong cultures.",
            "Enforcing external regulation actually demonstrates the external environment's powerful influence."
          ],
          e: "Strong cultures are a liability when their entrenched values conflict with new external requirements, producing resistance and internal tension rather than smooth adaptation."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "An analyst claims a Lebanese firm's survival is 'entirely thanks to its brilliant CEO.' The most defensible critique integrating both views of management is that:",
          o: [
            "The CEO deserves no credit at all because only the environment matters",
            "Managerial action matters but operates within real external constraints, so success reflects both managerial choices and environmental forces",
            "The omnipotent view is always correct, so the claim is fully valid",
            "Because the environment is complex, managers have unlimited discretion"
          ],
          a: 1,
          h: [
            "Denying all managerial credit is the extreme symbolic position, not a balanced synthesis.",
            "Right idea — reality lies between the two views; managers operate within, but are not powerless against, constraints.",
            "The omnipotent view overstates control and is not 'always correct.'",
            "Complexity increases uncertainty and tends to limit, not expand, unconstrained discretion."
          ],
          e: "The balanced position recognizes managers are neither all-powerful nor helpless; outcomes reflect managerial decisions made within the bounds set by the external environment."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When a firm's deeply entrenched shared values prevent it from responding to a rapidly changing environment, the strong culture has become a _____ rather than an asset.",
          o: [],
          a: 0,
          accept: [
            "liability",
            "barrier",
            "weakness",
            "disadvantage",
            "hindrance"
          ],
          h: [
            "Think of the downside of culture being too strong during change.",
            "It is the opposite of an asset or strength."
          ],
          e: "A strong culture can become a liability when its shared values no longer fit the environment, hindering the organization's ability to change and adapt."
        },
        {
          type: "fill",
          tier: "hard",
          q: "As environments move from stable-and-simple toward dynamic-and-complex, the degree of environmental _____ that managers face increases.",
          o: [],
          a: 0,
          accept: [
            "uncertainty",
            "environmental uncertainty"
          ],
          h: [
            "It is the central concept measured by the two-dimensional matrix.",
            "Higher change plus higher complexity raises it."
          ],
          e: "Environmental uncertainty rises as the degree of change and the degree of complexity increase, making the dynamic-complex quadrant the highest-uncertainty condition."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The primary or dominant values that are accepted throughout an organization make up its _____ culture, which may coexist with departmental subcultures.",
          o: [],
          a: 0,
          accept: [
            "dominant",
            "dominant culture"
          ],
          h: [
            "It is contrasted with subcultures found in individual units.",
            "It expresses the core values shared by a majority of members."
          ],
          e: "The dominant culture expresses the core values shared by a majority of the organization's members, while subcultures develop within departments or geographic units."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Repricing at Cedar Grocers, Tripoli",
          scenario: "Cedar Grocers is a mid-sized supermarket chain in Tripoli. Since 2019, owner Rania has watched the lira collapse and now reprices her shelves in US dollars every morning, posting both a 'fresh dollar' cash price and a higher 'card' price. Suppliers demand payment in fresh dollars, customers pay partly in lira at the daily black-market rate, EDL provides only a few hours of state power, and Rania pays a private generator subscription (ishtirak) to keep her freezers running. New BDL circulars occasionally change what she can withdraw from her own business account. Rania often says, 'I don't control any of this — I just survive it day to day.'",
          qs: [
            {
              q: "Identify two general-environment components affecting Cedar Grocers and give a concrete example of each from the case.",
              a: "The economic component appears in the collapsing lira, hyperinflation, and daily USD repricing of shelves. The political/legal component appears in the BDL circulars that change what Rania can withdraw. (A technological/infrastructure example is the EDL grid failure requiring a private generator.) Each is a force in the broad general environment that Rania cannot directly influence but must respond to."
            },
            {
              q: "Which view of management does Rania's statement 'I don't control any of this — I just survive it' express, and why?",
              a: "It expresses the symbolic view of management, which holds that much of an organization's success or failure is due to external forces outside the manager's control. Rania sees the lira, circulars, fuel, and power supply as constraints she can only react to, not determine, so she downplays her own causal role in outcomes."
            },
            {
              q: "Name one element of Cedar's specific (task) environment and explain its direct impact.",
              a: "Suppliers are part of the specific environment because they directly affect operations: by demanding payment in fresh dollars, they shape Rania's pricing and cash-flow decisions immediately. Customers and the generator company are other specific-environment constituencies that directly influence daily operations."
            }
          ]
        },
        {
          tier: "medium",
          title: "Scanning the Circulars at Arz Pharma",
          scenario: "Arz Pharma is a pharmaceutical importer in Jounieh. Imported medicines are partly subsidized, but subsidies are repeatedly cut, restored, and cut again through unpredictable BDL and Ministry of Health decisions. The firm deals simultaneously with foreign manufacturers (who want fresh dollars), the customs authority, the ministry, hospitals, pharmacies, and patient-advocacy pressure groups demanding affordable supply. Managing director Fadi has assigned two analysts to read every new circular, monitor exchange-rate movements, track which competitors still hold stock, and file weekly intelligence reports. Despite this, Fadi complains that 'the rules change faster than we can plan,' and the team frequently rewrites its import plan mid-month.",
          qs: [
            {
              q: "Using the two dimensions of the uncertainty matrix, classify Arz Pharma's environment and justify your placement.",
              a: "On the degree-of-change dimension the environment is dynamic: subsidies, circulars, and exchange rates change rapidly and unpredictably. On the degree-of-complexity dimension it is complex: the firm deals with many dissimilar constituencies (manufacturers, customs, ministry, hospitals, pharmacies, pressure groups). Dynamic plus complex places Arz Pharma in the high-uncertainty quadrant."
            },
            {
              q: "What specific managerial practice is Fadi using to cope, and how does it help under high uncertainty?",
              a: "Fadi is using environmental scanning, the screening of large amounts of information to detect emerging trends and anticipate change. By having analysts track circulars, exchange rates, and competitor stock, he reduces uncertainty and gives the firm earlier warning so it can adjust import plans before being blindsided."
            },
            {
              q: "Distinguish two pressure groups or constituencies in Arz Pharma's specific environment from a force in its general environment.",
              a: "Specific-environment constituencies include foreign manufacturers and patient-advocacy pressure groups, both of which directly and immediately shape the firm's decisions (payment terms, pricing demands). A general-environment force is the broad economic condition of currency collapse and inflation, which affects all firms in Lebanon rather than acting as a direct, identifiable stakeholder of Arz Pharma."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Founder's Shadow at Cedar Microfinance",
          scenario: "Cedar Microfinance was built over twenty years by its founder, Samir, around an intensely shared creed: 'We never refuse a poor borrower, and we never take more than we lend.' Loan officers tell stories of Samir personally forgiving debts during hard times, and that ethos is recited in every branch. After 2019, deposits froze, the lira collapsed, and donor funding in fresh dollars dried up. To survive, the new management team believes Cedar must charge risk-based interest, tighten collateral requirements, and decline high-risk borrowers — practices that directly contradict the founding creed. Senior loan officers are openly resisting, some are resigning, and clients accuse Cedar of 'betraying who it is.' Meanwhile board members debate whether the founder ever really controlled outcomes or whether donor money and a stable currency simply made the old model look successful.",
          qs: [
            {
              q: "Explain how Cedar's strong culture is functioning as a liability in this situation, using culture terminology.",
              a: "Cedar has a strong culture: its core values are intensely held and widely shared, reinforced through founder stories and rituals recited at every branch. Strong cultures guide behavior but resist change, and here the deeply embedded creed conflicts with the survival actions management must take. The shared values now hinder adaptation, producing resistance and resignations, so the strength that once unified the firm has become a liability against a changed environment."
            },
            {
              q: "The board debates whether Samir 'ever really controlled outcomes.' Frame this debate using the omnipotent and symbolic views, and offer a balanced position.",
              a: "The omnipotent view would credit Cedar's past success to Samir's leadership and decisions, while the symbolic view would argue that stable currency and abundant donor funding — external forces — made the model look successful regardless of Samir. A balanced position recognizes both: Samir's choices genuinely built and sustained the firm, but they operated within a favorable external environment, so when economic and funding conditions collapsed, the same managerial approach no longer produced the same results."
            },
            {
              q: "Recommend how management could change the culture to fit the new environment, and identify two reasons such change will be difficult.",
              a: "Management could pursue cultural change by having leaders visibly model the new risk-based practices, retell stories that reinterpret the creed (for example, 'protecting the institution protects future poor borrowers'), revise selection and reward systems, and communicate the crisis as a clear trigger for change. It will be difficult because the culture is strong, with deeply held values that resist alteration, and because long-tenured employees who embody the old creed are powerful sources of resistance. Cultural change is also slow, typically requiring a genuine crisis, new leadership, and sustained reinforcement before new values take hold."
            }
          ]
        },
        {
          tier: "hard",
          title: "Two Branches, One Blackout at Levant Logistics",
          scenario: "Levant Logistics runs warehouses in Beirut and Zahle. Both face the same external shocks: EDL provides only a few hours of grid power, diesel for generators is scarce and rationed, fuel queues stretch for hours, capital controls freeze company accounts, and clients demand 'fresh dollar' invoicing. Yet the two branches behave very differently. The Beirut branch has a culture of tight central control where managers say 'nothing moves without head office approval,' so during fuel shortages trucks sit idle waiting for sign-off. The Zahle branch has a culture of local initiative where supervisors are told 'use your judgment and explain later,' so they improvise — sharing generator fuel with a neighboring firm and rerouting deliveries overnight. After a year, Zahle is profitable and Beirut is bleeding cash. Head office must decide whether to blame the Beirut manager, change the culture, or accept that the environment simply favored one location.",
          qs: [
            {
              q: "Both branches face an identical external environment, yet outcomes differ. What does this reveal about the omnipotent versus symbolic debate?",
              a: "Because the external environment is essentially the same for both branches, the difference in outcomes cannot be explained purely by external forces, which weakens a strictly symbolic interpretation. The divergence points to managerial and cultural differences inside each branch, supporting a meaningful role for management (the omnipotent side). The balanced reading is that the environment constrained both branches equally, but managerial and cultural choices within those constraints drove the performance gap."
            },
            {
              q: "Contrast the two branch cultures and explain how each shapes managerial discretion under high environmental uncertainty.",
              a: "Beirut's culture is centralized and low in autonomy, with shared values that require head-office approval; this constrains managers and slows response, which is costly when the dynamic, uncertain environment demands fast improvisation. Zahle's culture emphasizes local initiative and tolerance for judgment, giving supervisors discretion to adapt quickly to fuel shortages and rerouting. Culture thus acts as a constraint on managerial behavior, and in a high-uncertainty environment the more adaptive culture enables faster, more effective responses."
            },
            {
              q: "Head office considers imposing Zahle's culture on Beirut. Evaluate the risks and conditions needed for that cultural change to succeed.",
              a: "Imposing a new culture is difficult because Beirut's existing values are established and employees will resist losing the security of central control, so a top-down decree alone is likely to fail or breed resentment. Success conditions include treating the cash crisis as a clear triggering event, replacing or coaching managers who model the old behavior, redesigning approval and reward systems to legitimize local judgment, and having leaders consistently model and reinforce the new values over time. Management should also weigh that some central control may still be warranted for high-risk decisions, so the goal is a deliberate culture suited to the environment rather than blind imitation of Zahle."
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
          model: "The omnipotent view holds that managers are directly responsible for an organization's success or failure: good results reflect good management, poor results poor management. The symbolic view counters that much of an organization's success or failure is due to external forces outside managers' control — economic conditions, competitors, regulation — so managers' influence is partly symbolic. The lecture resolves the debate by showing managerial discretion as constrained from two directions: externally by the organizational environment (its components, Porter's five competitive forces, and its degree of uncertainty) and internally by the organizational culture (the shared values and ways of doing things that limit what decisions are acceptable). The distinction matters because it calibrates how we judge managers: under a purely omnipotent view we would credit or blame them for everything, while the symbolic view reminds us that a CEO inheriting a powerful set of buyers, aggressive substitutes, or a rigid strong culture cannot simply will success. A fair assessment recognizes that managers matter — they plan, organize, lead, and control within their discretion — but that discretion operates inside environmental and cultural constraints.",
          tier: "easy"
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
          model: "The environment consists of institutions or forces outside the organization that could potentially affect its performance, and environments differ in their degree of environmental uncertainty along two dimensions. The degree of change asks whether the environment's components change frequently (dynamic) or very little (stable). The degree of complexity looks at the number of components in the environment and the extent of knowledge the organization needs about them. Crossing the dimensions yields four cells. Cell 1 (stable and simple) has few, similar components that remain basically the same and minimal need for sophisticated knowledge — the least uncertainty. Cell 2 (dynamic and simple) has few, similar components that continually change. Cell 3 (stable and complex) has many dissimilar components that remain basically the same, with a high need for sophisticated knowledge. Cell 4 (dynamic and complex) combines many dissimilar, continually changing components with high knowledge needs — the greatest uncertainty. The practical consequence is that the more uncertain the environment, the more management must monitor it and preserve flexibility; and since the specific environment (suppliers, customers, competitors, government, investors, special interest groups) is the part directly relevant to goal achievement, that is where most managerial attention typically focuses.",
          tier: "medium"
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
          model: "Organizational culture is the shared values, principles, traditions, and ways of doing things that influence the way organizational members act and that distinguish the organization from other organizations — the organization's personality. Research identifies six dimensions that capture it: adaptability, attention to detail, outcome orientation, people orientation, team orientation, and integrity. Cultures vary in strength. In strong cultures the key values are intensely held and widely shared: the culture conveys consistent messages about what is important, most employees can tell stories about company history and heroes, employees strongly identify with the culture, and there is a strong connection between shared values and behavior — which is why strong cultures influence employees more than weak ones. Weak cultures show the reverse: values held mainly by top management, contradictory messages, little knowledge of history, weak identification, and little link between espoused values and actual behavior. Culture's original source usually reflects the vision of the founders; once established, organizational practices help maintain it and the actions of top managers signal what is truly valued. It is transmitted to employees through stories, rituals, material artifacts and symbols, and language. Finally, culture is not just atmosphere: it constrains managerial discretion and affects the kinds of planning, organizing, leading, and controlling decisions managers consider acceptable.",
          tier: "hard"
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
          ],
          check: {
            q: "Strategic management is best described as what managers do to develop the organization's:",
            o: [
              "Annual payroll budget",
              "Strategies for performing and competing",
              "Employee vacation schedules",
              "Tax filings"
            ],
            a: 1,
            e: "Strategic management is the set of decisions and actions by which managers develop the organization's strategies — its plans for how it will compete and perform."
          }
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
          ],
          check: {
            q: "Which step of the strategic management process combines the internal and external analyses?",
            o: [
              "Identifying the current mission",
              "The SWOT analysis",
              "Implementing strategies",
              "Evaluating results"
            ],
            a: 1,
            e: "After the external and internal analyses, the SWOT analysis combines them to identify the strengths, weaknesses, opportunities, and threats that guide strategy formulation."
          }
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
          ],
          check: {
            q: "A company that acquires a competitor in its own industry to expand its market is using which corporate growth method?",
            o: [
              "Horizontal integration",
              "Retrenchment",
              "Liquidation",
              "Unrelated diversification"
            ],
            a: 0,
            e: "Horizontal integration is a growth strategy in which a company combines with other organizations in the same industry to expand its market and reduce competition."
          }
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
          ],
          check: {
            q: "For a competitive advantage to be sustainable, the underlying capability must above all be:",
            o: [
              "Cheap to operate this year",
              "Valuable, rare, and difficult for rivals to imitate",
              "Visible in advertising",
              "Popular with the press"
            ],
            a: 1,
            e: "A sustainable competitive advantage rests on capabilities that are valuable, rare, and costly to imitate; otherwise rivals copy it and the advantage disappears."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What is strategic management?",
          o: [
            "Day-to-day supervision of individual employees and their tasks",
            "What managers do to develop the organization's strategies that determine its performance",
            "The process of recording financial transactions for shareholders",
            "Setting prices for products in a single retail outlet"
          ],
          a: 1,
          h: [
            "This describes operational supervision, not strategy — strategy concerns the whole organization's direction.",
            "Right idea — strategic management is about developing the strategies that drive overall performance.",
            "That is accounting, not strategic management.",
            "Pricing one outlet is a narrow operational decision, not organization-wide strategy."
          ],
          e: "Strategic management is what managers do to develop the organization's strategies — the plans for how the organization will do business, compete, and attract customers to achieve its goals."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "A SWOT analysis combines which two assessments?",
          o: [
            "Sales and Wages, then Operations and Taxes",
            "Internal strengths and weaknesses with external opportunities and threats",
            "Suppliers and Workers with Owners and Technology",
            "Short-term and Wholesale with Output and Targets"
          ],
          a: 1,
          h: [
            "These are invented expansions; SWOT is about internal and external analysis.",
            "Correct — SWOT pairs the internal analysis (strengths, weaknesses) with the external analysis (opportunities, threats).",
            "Not the SWOT acronym — it stands for strengths, weaknesses, opportunities, threats.",
            "These do not match the SWOT framework."
          ],
          e: "SWOT analysis is the combination of the internal analysis (Strengths and Weaknesses) and the external analysis (Opportunities and Threats), used to identify a strategic niche the organization can exploit."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which of the following is a corporate-level strategy aimed at increasing the organization's operations?",
          o: [
            "Stability strategy",
            "Renewal strategy",
            "Growth strategy",
            "Cost-leadership strategy"
          ],
          a: 2,
          h: [
            "Stability keeps operations the same, not increasing them.",
            "Renewal addresses declining performance, not expansion.",
            "Correct — a growth strategy expands the number of markets served or products offered.",
            "Cost leadership is a competitive (business-level) strategy, not a corporate-level one."
          ],
          e: "A growth strategy is a corporate strategy used when an organization wants to expand the number of markets served or products offered, through methods such as concentration, integration, or diversification."
        },
        {
          type: "fill",
          tier: "easy",
          q: "A _____ advantage is what sets an organization apart, its distinctive edge that comes from its core competencies.",
          o: [],
          a: 0,
          accept: [
            "competitive",
            "competitive advantage"
          ],
          h: [
            "It is the edge that distinguishes a firm from its rivals.",
            "Think of the word paired with 'advantage' throughout the chapter."
          ],
          e: "Competitive advantage is what sets an organization apart — its distinctive edge — derived from doing something others cannot do or doing it better than others."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Porter's framework identifies _____ forces that determine the attractiveness and profitability of an industry.",
          o: [],
          a: 0,
          accept: [
            "five",
            "5"
          ],
          h: [
            "It is the number in the name of Porter's famous industry-analysis model.",
            "Rivalry, new entrants, substitutes, and the bargaining power of buyers and suppliers make up this count."
          ],
          e: "Porter's Five Forces model assesses industry attractiveness through threat of new entrants, threat of substitutes, bargaining power of buyers, bargaining power of suppliers, and current rivalry."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The strategic management process begins with identifying the organization's current mission, goals, and _____.",
          o: [],
          a: 0,
          accept: [
            "strategies",
            "strategy",
            "current strategies"
          ],
          h: [
            "Step 1 reviews where the organization currently stands.",
            "It is the third element alongside mission and goals at the start of the process."
          ],
          e: "Step 1 of the strategic management process is identifying the organization's current mission, goals, and strategies, establishing the baseline before any analysis."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut grocery chain decides to acquire its main local supplier of bottled water to secure stock and control input prices during import shortages. This is an example of:",
          o: [
            "Related diversification",
            "Vertical (backward) integration",
            "A stability strategy",
            "Differentiation strategy"
          ],
          a: 1,
          h: [
            "Related diversification means buying firms in a different but related industry, not a supplier in your own value chain.",
            "Correct — buying a supplier is backward vertical integration, a growth strategy.",
            "Acquiring a supplier expands operations; stability would mean no significant change.",
            "Differentiation is a competitive strategy about being unique, not about acquiring suppliers."
          ],
          e: "Acquiring a supplier is backward vertical integration — a growth strategy in which the firm becomes its own supplier to control inputs."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Lebanese restaurant facing the lira's collapse reprices its menu in fresh USD daily and trims its offerings to its three most profitable dishes after a downturn in covers. Which corporate strategy best describes the trimming move?",
          o: [
            "Concentration growth",
            "Retrenchment (a renewal strategy)",
            "Unrelated diversification",
            "Focus differentiation"
          ],
          a: 1,
          h: [
            "Concentration means growing in one's primary line, not cutting back.",
            "Correct — cutting costs and operations to stabilize after decline is retrenchment, a renewal strategy.",
            "Diversification adds new lines; this firm is shrinking, not expanding.",
            "Focus differentiation is a competitive strategy, and the move here is about cutting scope to survive, not targeting a niche with uniqueness."
          ],
          e: "Retrenchment is a short-run renewal strategy used for minor performance problems, addressing weaknesses by cutting costs and operations to stabilize."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A specialty coffee roaster sells premium beans at high prices to a narrow segment of connoisseurs in one upscale district. In Porter's framework this is best classified as:",
          o: [
            "Cost leadership",
            "Differentiation (broad)",
            "Focus (differentiation focus)",
            "Stuck in the middle"
          ],
          a: 2,
          h: [
            "Cost leadership means lowest cost across a broad market, not premium pricing to a niche.",
            "Broad differentiation targets a wide market; this firm targets a narrow segment.",
            "Correct — uniqueness aimed at a narrow market segment is a focus (differentiation) strategy.",
            "'Stuck in the middle' means failing to commit to any strategy; this firm has a clear focus."
          ],
          e: "A focus strategy pursues a cost or differentiation advantage within a narrow segment; selling unique premium beans to a narrow connoisseur niche is differentiation focus."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When a firm's resources and capabilities are valuable, rare, costly to imitate, and the firm is organized to exploit them, the framework used to judge whether they yield sustainable advantage is called _____.",
          o: [],
          a: 0,
          accept: [
            "vrio",
            "the vrio framework",
            "vrio framework",
            "vrin"
          ],
          h: [
            "It is a four-letter acronym from the resource-based view.",
            "The letters stand for valuable, rare, inimitable, and organized."
          ],
          e: "The VRIO framework evaluates whether a resource is Valuable, Rare, costly to Imitate, and the firm is Organized to capture its value — the test for sustainable competitive advantage."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A solar-panel installer in Beirut grows during the EDL grid failure by selling to homeowners, then expands into installing systems for the unrelated business of cold-storage warehouses. Entering a different, unrelated industry is called unrelated _____.",
          o: [],
          a: 0,
          accept: [
            "diversification",
            "diversification strategy"
          ],
          h: [
            "It is the growth method of acquiring or starting businesses outside one's current lines.",
            "Pair the word with 'unrelated' — moving into a dissimilar industry."
          ],
          e: "Unrelated diversification is a growth strategy in which a company combines with firms in different, unrelated industries, seeking financial rather than operating synergies."
        },
        {
          type: "fill",
          tier: "medium",
          q: "In the strategic management process, after performing external and internal analyses, the next step is formulating _____ before they are then implemented.",
          o: [],
          a: 0,
          accept: [
            "strategies",
            "strategy"
          ],
          h: [
            "This is Step 5, following the SWOT analysis.",
            "It is what you create at corporate, competitive, and functional levels before execution."
          ],
          e: "After the SWOT analysis (steps 3-4), managers formulate strategies (step 5) at the corporate, competitive, and functional levels before implementing them (step 6)."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "During Lebanon's banking crisis, two private generator operators (ishtirak) compete on the same street. Operator A undercuts on price per amp but its margins are razor-thin and customers switch the moment a cheaper rival appears; Operator B charges more but guarantees stable voltage and 24/7 service. Which best explains why Operator A's advantage is least likely to be sustainable?",
          o: [
            "Cost-based advantages are inherently illegal under BDL circulars",
            "A low-price position is easily imitated and creates no switching costs, so rivals can erode it quickly",
            "Differentiation always loses to cost leadership in commodity markets",
            "Operator A has chosen to be 'stuck in the middle'"
          ],
          a: 1,
          h: [
            "Circulars regulate banking, not the legality of cost strategies.",
            "Correct — an advantage that rivals can copy and that locks in no customers is not sustainable.",
            "The case shows the opposite; differentiation here builds loyalty.",
            "Operator A has a clear cost-focus position, not a 'stuck in the middle' one."
          ],
          e: "Sustainable competitive advantage requires that an edge be difficult to imitate; a pure low-price position with no switching costs is easily matched, so rivals quickly erode it, while B's reliability builds harder-to-copy loyalty."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A family bakery's strengths (a loyal neighborhood base, a skilled head baker) meet an external threat (frozen 'lollar' deposits choke working capital and imported flour is repriced daily). Using SWOT logic, which strategic response most directly leverages a strength to defend against the threat?",
          o: [
            "Diversify immediately into unrelated cold-storage logistics to spread risk",
            "Use the loyal base to launch a prepaid-in-fresh-dollars bread subscription, smoothing cash flow against repricing",
            "Cut the head baker's pay to reduce costs and hope demand holds",
            "Adopt a stability strategy and make no changes until the currency stabilizes"
          ],
          a: 1,
          h: [
            "Unrelated diversification stretches scarce capital and ignores the firm's actual strengths.",
            "Correct — converting loyal customers into prepaid fresh-dollar subscribers turns a strength into a defense against the cash and repricing threat.",
            "Cutting the key baker's pay attacks a core strength, weakening the firm.",
            "Doing nothing leaves the threat unaddressed and ignores an available strength."
          ],
          e: "Sound SWOT-based strategy matches internal strengths to external threats; monetizing customer loyalty through prepaid fresh-dollar subscriptions uses a strength to neutralize the working-capital and repricing threat."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "An analyst argues a Lebanese exporter has 'sustainable competitive advantage' because last year it earned the highest margins in its sector. What is the strongest critique of relying on that single fact?",
          o: [
            "Margins are irrelevant to strategy; only revenue matters",
            "High past margins may reflect temporary conditions, not a valuable, rare, hard-to-imitate capability the firm is organized to sustain",
            "Competitive advantage cannot exist for exporters under capital controls",
            "Sustainability is determined solely by market share, not margins"
          ],
          a: 1,
          h: [
            "Margins matter; the flaw is treating one year's result as proof of durability.",
            "Correct — sustainability requires a VRIO-type capability, not a single year's outcome that may be transient.",
            "Exporters with fresh-dollar revenue can absolutely build advantage; the claim is overbroad.",
            "No single metric, including share, by itself proves sustainability."
          ],
          e: "One year of high margins is an outcome, not evidence of a sustainable source; durability must rest on resources that are valuable, rare, costly to imitate, and organized to exploit, which past margins alone do not demonstrate."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A firm that tries to pursue low cost and broad differentiation at once but commits to neither, ending up worse than focused rivals, is described by Porter as being stuck in the _____.",
          o: [],
          a: 0,
          accept: [
            "middle",
            "stuck in the middle"
          ],
          h: [
            "It is the position Porter warns against when a firm fails to choose a clear strategy.",
            "Complete the phrase 'stuck in the ___'."
          ],
          e: "Porter argues a firm must commit to one generic strategy; trying to be all things and excelling at none leaves it 'stuck in the middle' with no clear advantage."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When a parent company seeks advantage by combining related businesses so that, for example, a generator-import arm shares logistics and a sales force with a solar arm, it pursues operating synergy through what is termed _____ diversification.",
          o: [],
          a: 0,
          accept: [
            "related",
            "related diversification",
            "synergistic"
          ],
          h: [
            "This contrasts with 'unrelated' diversification and seeks shared operating synergies.",
            "The businesses fit together and can share resources or capabilities."
          ],
          e: "Related (synergistic) diversification combines businesses in similar industries so they can share resources and capabilities, creating operating synergies that lower cost or build differentiation."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The capability that creates value for customers, is rare among competitors, and is hard to copy is what Robbins and Coulter call the firm's core _____, the wellspring of competitive advantage.",
          o: [],
          a: 0,
          accept: [
            "competencies",
            "competency",
            "competence",
            "competences",
            "competencies"
          ],
          h: [
            "It is the organization's major value-creating skills and resources.",
            "Pair the word with 'core' — the distinctive abilities behind competitive advantage."
          ],
          e: "Core competencies are the organization's major value-creating capabilities that determine its competitive weapons; they are the basis on which a sustainable competitive advantage is built."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Saj-w-Zaatar: Choosing a Lane on Bliss Street",
          scenario: "On Bliss Street near campus, Layla runs a small saj (flatbread) cart. Since 2019 the lira's collapse has forced her to reprice in fresh dollars almost every morning, and frozen 'lollar' deposits mean she has almost no savings to fall back on. Two rival carts have appeared within fifty meters. One sells the cheapest manakish around using the plainest ingredients; the other charges double for organic zaatar, imported cheese, and a covered seating nook. Layla must decide what her own cart should stand for. She knows her best asset is her speed at the saj and her warm rapport with students who line up between classes, but her thin cash position means she cannot afford to be everything to everyone.",
          qs: [
            {
              q: "Identify the two competitive strategies Layla's rivals have each chosen, using Porter's terminology.",
              a: "The first rival pursues a cost-leadership strategy, competing on the lowest price by minimizing ingredient costs. The second pursues a differentiation strategy, charging a premium for unique, higher-quality ingredients and a better experience. Each has committed to one clear competitive lane rather than trying to do both."
            },
            {
              q: "Given her limited fresh-dollar cash and her particular strengths, which generic strategy fits Layla best, and why?",
              a: "A focus (differentiation focus) strategy fits Layla best: she should target the narrow student segment she already serves well and differentiate on speed and personal rapport rather than on lowest price. Her core competency is fast service and customer loyalty, not deep pockets for an ingredient price war, so competing on cost against the bargain cart would be unsustainable given her thin capital."
            },
            {
              q: "Why would trying to match both rivals at once be a strategic mistake for Layla?",
              a: "Trying to be both cheapest and most premium would leave her 'stuck in the middle,' excelling at neither and confusing customers about what she offers. With scarce fresh dollars she cannot fund the lowest-price war and the costliest ingredients simultaneously, so committing to a single clear strategy is essential to build a defensible advantage."
            }
          ]
        },
        {
          tier: "medium",
          title: "Aamir's Hardware: From One Shop to a Supply Chain",
          scenario: "Aamir owns a successful hardware shop in Tripoli that has thrived during the EDL grid failure by selling inverters, batteries, and generator parts to households cobbling together their own power. Demand is strong, but his importer keeps raising fresh-dollar prices and sometimes cannot deliver, leaving Aamir short of stock when customers most need it. He is weighing three moves: (a) open three more hardware branches across the north; (b) acquire the small importer that currently supplies him so he controls stock and pricing; or (c) start a separate, unrelated venture importing frozen foods because he has heard margins are good. His banked savings are mostly trapped as lollars, so any expansion must be financed from the fresh-dollar cash his shop generates.",
          qs: [
            {
              q: "Classify each of Aamir's three options using corporate-strategy terminology.",
              a: "Option (a), opening more hardware branches, is a concentration growth strategy, expanding within his primary line of business. Option (b), acquiring his importer, is backward vertical integration, a growth strategy that makes him his own supplier. Option (c), entering frozen foods, is unrelated diversification, since it lies in a different industry with no operating overlap with hardware."
            },
            {
              q: "Which option most directly addresses the specific threat in his external environment, and why?",
              a: "Acquiring the importer (backward vertical integration) most directly addresses his key threat: unreliable supply and rising input prices. By owning the supplier he gains control over stock availability and pricing, insulating his shop from the importer's price hikes and delivery failures. This converts an external threat into an internal capability."
            },
            {
              q: "What is the main risk of option (c), and how does the firm's resource situation make it worse?",
              a: "Unrelated diversification into frozen foods carries high risk because Aamir has no core competency in cold-chain logistics or food retail, so the hoped-for financial synergy may never materialize. With his savings frozen as lollars and only shop-generated fresh dollars to invest, spreading scarce capital into an unfamiliar industry could starve his profitable core business and leave him weak in both."
            }
          ]
        },
        {
          tier: "hard",
          title: "NourSolar: Riding the Grid Failure, Fearing the Copycats",
          scenario: "NourSolar began in 2021 installing rooftop solar-plus-battery systems for Beirut households exhausted by the EDL grid failure, daily fuel queues, and the rising cost of generator 'ishtirak' subscriptions. It grew fast: it imported panels in fresh dollars, trained a tight crew, and earned a reputation for honest sizing and reliable after-sales service in a market full of fly-by-night installers. Two years on, margins are excellent but a dozen imitators have appeared, some undercutting NourSolar's prices by importing cheaper panels. The founders debate strategy. One wants to diversify into the unrelated business of importing electric scooters; another wants to integrate forward by opening NourSolar-branded maintenance centers and a financing scheme that lets customers prepay in fresh dollars; a third insists the real question is whether anything NourSolar does is actually hard for the copycats to imitate.",
          qs: [
            {
              q: "Run a brief VRIO-style analysis of NourSolar's reputation for honest sizing and reliable service. Is it a source of sustainable competitive advantage?",
              a: "The reputation is valuable (customers pay more and trust it in a market full of cheats) and rare (few rivals have it). It is costly to imitate because it is built over time through consistent behavior and word of mouth, which copycats undercutting on cheap panels cannot quickly replicate. If NourSolar is organized to sustain it through training and service systems, this reputation can be a genuine sustainable competitive advantage, unlike its panel prices, which rivals match easily."
            },
            {
              q: "Evaluate the two expansion proposals (unrelated scooter import vs. forward integration into branded maintenance and prepaid financing) against the firm's strengths and threats.",
              a: "The scooter import is unrelated diversification: it shares no core competency with solar installation, stretches scarce fresh-dollar capital, and does nothing to defend against the imitator threat, so its risk is high and its strategic fit poor. Forward integration into branded maintenance and prepaid financing builds directly on NourSolar's service reputation, deepens the customer relationship, raises switching costs, and smooths cash flow against repricing, making it the stronger move because it leverages an existing strength to blunt the competitive threat."
            },
            {
              q: "The copycats are eroding NourSolar's price advantage. Recommend a competitive strategy and explain how it sustains the firm's edge.",
              a: "NourSolar should commit to a differentiation strategy anchored on reliability, transparent sizing, and after-sales service rather than fight a price war it cannot win against cheap-panel importers. By bundling warranties, branded maintenance, and prepaid fresh-dollar plans, it raises switching costs and makes its offer hard to imitate, sustaining advantage through its core competency in trust and service. Matching the copycats on price would leave it stuck in the middle and surrender the very edge that made it successful."
            }
          ]
        },
        {
          tier: "hard",
          title: "Cedar Pharma Group: A Holding Company Under Capital Controls",
          scenario: "Cedar Pharma Group is a Lebanese holding company with three businesses: a pharmacy chain, a generic-drug importer, and a small chain of diagnostic labs. Since the banking crisis, much of the group's wealth is frozen as lollars, while operations must run on fresh-dollar revenue. The pharmacy chain is profitable and growing as patients hunt for scarce medicines; the importer is squeezed because suppliers now demand fresh-dollar payment up front and BDL circulars complicate transfers; the labs are losing money as emigration shrinks their customer base. The board is split. One faction wants a growth strategy across all three units; another argues for retrenchment at the labs and reinvestment in the pharmacy and importer, where related synergies exist; a third wants to sell the labs entirely and use proceeds to integrate the importer and pharmacy more tightly. The CEO must craft a coherent corporate strategy that recognizes each unit's different situation.",
          qs: [
            {
              q: "Apply the BCG-matrix or portfolio logic to the three businesses and explain what each unit's situation implies.",
              a: "The pharmacy chain behaves like a star: profitable and growing, deserving continued investment to hold its position. The importer is strained but central to the pharmacy's supply, so it warrants selective support, especially where it creates related synergy. The labs are a weak performer in a shrinking market, akin to a dog, signaling that a renewal or divestment decision is needed rather than further growth investment. A single growth-everywhere strategy ignores these differences."
            },
            {
              q: "The second faction proposes retrenchment at the labs plus reinvestment where related synergies exist. Classify these moves and explain the synergy logic.",
              a: "Retrenching or divesting the labs is a renewal strategy that addresses a failing unit by cutting losses. Reinvesting in the pharmacy and importer pursues related diversification synergy: because the importer supplies the medicines the pharmacy sells, tying them together creates operating synergy, the importer secures the pharmacy's stock and the pharmacy guarantees the importer demand. This focuses scarce fresh-dollar capital where capabilities and value chains genuinely overlap."
            },
            {
              q: "Given frozen lollar wealth and fresh-dollar operating constraints, which overall corporate strategy should the CEO choose, and what is the strongest objection to a 'grow everything' approach?",
              a: "The CEO should adopt a combination strategy: renewal (divest or retrench the loss-making labs) paired with focused growth through vertical and related integration of the pharmacy and importer. This concentrates limited fresh-dollar cash on the units with real synergy and demand while shedding the drain. The strongest objection to 'grow everything' is that capital is severely constrained, so spreading it across a money-losing unit in a shrinking market would dilute investment in the viable core and could endanger the whole group's survival."
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
          model: "Strategic management is what managers do to develop the organization's strategies — the plans for how the organization will do what it is in business to do, compete successfully, and attract and satisfy its customers to achieve its goals. The process has five steps. First, managers identify the organization's current mission, goals, and strategies; the mission states the organization's purpose and focuses its strategic direction — without it, there is no baseline against which to plan. Second, they conduct a SWOT analysis: external analysis reveals opportunities (positive external trends) and threats (negative external trends), while internal analysis reveals strengths (what the organization does well, unique resources) and weaknesses (what it does poorly or lacks), grounded in its resources, capabilities, and core competencies. Skipping SWOT yields strategies disconnected from the firm's situation. Third, they formulate strategies at three levels — corporate (what businesses to be in), competitive (how to compete in each business), and functional (how departments support the competitive strategy). Fourth, they implement: the slides stress that no matter how effectively strategies were planned, performance suffers if they are not implemented properly — formulation without execution is wasted effort. Fifth, they evaluate results, asking how effective the strategies were and what adjustments are necessary, which loops back into the next round of planning. The power of the process lies in its completeness: analysis without formulation is aimless, formulation without implementation is empty, and implementation without evaluation never improves.",
          tier: "easy"
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
          model: "Corporate strategy determines what businesses a company is in or wants to be in and what it wants to do with those businesses. Growth strategies expand the number of markets served or products offered, through current or new businesses, in four ways: concentration (growing the core business), vertical integration (controlling inputs or distribution — one's suppliers or buyers), horizontal integration (combining with competitors), and diversification, which can be related (new businesses connected to the core) or unrelated. A stability strategy means the organization continues to do what it is currently doing — appropriate when conditions or resources argue against expansion. Renewal strategies address declining performance and come in two forms: retrenchment and turnaround. With multiple businesses, managers face an allocation problem: which units deserve investment? The BCG matrix answers it by positioning each strategic business unit on two axes — market share and market growth rate — producing four categories: stars (high share, high growth) to be invested in; cash cows (high share, low growth) to be harvested for the cash they generate; question marks (low share, high growth) requiring a decision to invest or abandon; and dogs (low share, low growth), typically candidates for divestment. The matrix thus turns the corporate-strategy question into a disciplined, portfolio-level resource-allocation decision.",
          tier: "medium"
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
          model: "Competitive advantage is what sets an organization apart — its distinctive edge — and it can stem from quality, low cost, technology, or other factors. Each strategic business unit chooses how to compete through a competitive strategy. The lecture presents three routes: a cost leadership strategy, competing on the lowest costs in the industry; a differentiation strategy, competing by offering something unique that customers value; and a focus strategy, applying a cost or differentiation advantage within a narrow segment rather than the broad market. The danger lies in choosing none: a firm that fails to develop either a low-cost or a differentiation advantage is “stuck in the middle” — it has no distinctive edge, cannot beat cost leaders on price or differentiators on uniqueness, and typically underperforms both. Developing an advantage, however, is only half the task; businesses must also SUSTAIN it. This is the idea of the economic moat, popularized by Warren Buffett: protecting long-term profits and market share using various means so the advantage endures against imitation and rivalry. The first-mover discussion reinforces the point — being first can create advantages such as reputation and learning, but it also carries disadvantages, since followers can learn from the pioneer's costly mistakes. Durable success therefore rests on core competencies — the organization's major value-creating capabilities — deployed through a clear competitive strategy and defended like a moat around a castle.",
          tier: "hard"
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
          ],
          check: {
            q: "Which pair of steps comes immediately AFTER 'identifying a problem' in the eight-step process?",
            o: [
              "Selecting and implementing the alternative",
              "Identifying decision criteria, then allocating weights to them",
              "Evaluating decision effectiveness",
              "Developing and analyzing alternatives"
            ],
            a: 1,
            e: "After identifying the problem, the manager identifies the decision criteria (step 2) and then allocates weights to those criteria (step 3) before alternatives are developed."
          }
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
          ],
          check: {
            q: "Which statement best reflects 'bounded rationality' as the lecture describes how managers actually decide?",
            o: [
              "Managers are fully logical and weigh all possible alternatives",
              "Managers decide rationally but within information and processing limits, so they satisfice",
              "Managers always decide in the organization's best interest with perfect information",
              "Managers ignore evidence and rely only on emotion"
            ],
            a: 1,
            e: "Bounded rationality holds that managers behave rationally within the limits of their information and cognitive capacity, leading them to satisfice rather than maximize."
          }
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
          ],
          check: {
            q: "A 'rule' differs from a 'policy' in that a rule…",
            o: [
              "Is a general guideline that leaves room for judgment",
              "Is an explicit statement of what can or cannot be done",
              "Is used only for unstructured problems",
              "Requires creativity and a long time frame"
            ],
            a: 1,
            e: "A rule is an explicit statement telling managers what can or cannot be done, whereas a policy is only a general guideline for making decisions; both are tools for programmed decisions."
          }
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
          ],
          check: {
            q: "Heuristics are best described as…",
            o: [
              "Formal eight-step procedures guaranteeing the optimal choice",
              "Rules of thumb that simplify decisions but can produce biases and errors",
              "Statements of what employees cannot do",
              "Methods that eliminate all decision-making bias"
            ],
            a: 1,
            e: "Heuristics are mental shortcuts that help managers cope with uncertain or ambiguous information, but they can also lead to errors and biases such as anchoring or overconfidence."
          }
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
          ],
          check: {
            q: "Which is a genuine ADVANTAGE of group decision making per the lecture, rather than a downside?",
            o: [
              "Decisions are reached faster than by an individual",
              "Responsibility is clearly pinned on one person",
              "More complete information and a greater number of perspectives",
              "It eliminates conformity pressure"
            ],
            a: 2,
            e: "Groups offer more complete information and knowledge and a greater number of perspectives, yielding a more fully informed, higher-quality decision; speed and clear individual responsibility are actually group weaknesses."
          }
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
          ],
          check: {
            q: "Janis (1982) defines groupthink as a mode of thinking in which the drive for unanimity…",
            o: [
              "Improves the realistic appraisal of alternatives",
              "Overrides members' motivation to realistically appraise alternative courses of action",
              "Increases the use of outside expert knowledge",
              "Forces members to develop detailed contingency plans"
            ],
            a: 1,
            e: "Groupthink occurs when a cohesive group's drive for unanimity overrides its motivation to realistically appraise alternatives, leading to limited option search and few contingency plans."
          }
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
          ],
          check: {
            q: "Which technique does the lecture recommend for MANAGING group decision making to reduce groupthink?",
            o: [
              "Have the leader state their preferred option first to save time",
              "Keep the group insulated and homogeneous to preserve cohesion",
              "Draw out quiet members and have members write ideas anonymously before speaking",
              "Let only the most senior members contribute"
            ],
            a: 2,
            e: "The slides advise drawing out quiet members, dissuading the leader from dominating, and having members write down ideas to be shared anonymously before speaking, which reduces anchoring and ego threat."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "How does the lecture define a decision?",
          o: [
            "A conclusion or resolution made after considering alternatives",
            "Any goal a manager sets for the coming year",
            "The act of structuring work into departments",
            "A logical proof that one option is objectively best"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "That describes planning/goal-setting, not the act of deciding. Re-read the one-line definition of a decision.",
            "That describes the organizing function, not a decision. Look for the wording about choosing among alternatives.",
            "Decisions need not be 'objectively best' proofs — even satisficing counts. Look for the simpler definition involving alternatives."
          ],
          e: "The slides define a decision as a conclusion or resolution made after considering alternatives."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which is the FIRST step of the eight-step decision-making process?",
          o: [
            "Developing alternatives",
            "Identifying a problem",
            "Allocating weights to the criteria",
            "Selecting an alternative"
          ],
          a: 1,
          h: [
            "Generating alternatives comes later (step 4), after the problem and criteria are set. Re-read the ordering.",
            "Right idea — that's the one.",
            "Weighting criteria is step 3 and presupposes a problem has already been identified. Look earlier in the sequence.",
            "Selecting an alternative is step 6, near the end. The process must start with recognizing something."
          ],
          e: "The process begins with identifying a problem, followed by identifying decision criteria, then allocating weights to those criteria."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In the lecture, accepting solutions that are 'good enough' rather than searching for the optimal one is called…",
          o: [
            "Maximizing",
            "Satisficing",
            "Rationalizing",
            "Anchoring"
          ],
          a: 1,
          h: [
            "Maximizing is what the fully rational model assumes — choosing the value-maximizing option. The question describes the opposite tendency.",
            "Right idea — that's the one.",
            "Rationalizing is a groupthink symptom (explaining away warnings), not accepting a 'good enough' option. Different term.",
            "Anchoring is a bias of fixating on early information, not accepting a 'good enough' solution. Look at the bounded-rationality term."
          ],
          e: "Under bounded rationality, managers satisfice — they accept solutions that are good enough rather than maximizing."
        },
        {
          type: "fill",
          tier: "easy",
          q: "_____ decision making relies on experience, feelings, and accumulated judgment.",
          o: [],
          a: 0,
          accept: [
            "intuitive",
            "intuition",
            "intuitive decision making",
            "intuitive decision-making"
          ],
          h: [
            "It is the 'gut feeling' approach the slides contrast with the rational model.",
            "Think of the word that shares a root with 'intuition'."
          ],
          e: "Intuitive decision making is making decisions on the basis of experience, feelings, and accumulated judgment."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Repetitive decisions that can be handled by a routine approach are called _____ decisions.",
          o: [],
          a: 0,
          accept: [
            "programmed",
            "programmed decisions",
            "programmed decision"
          ],
          h: [
            "They are paired with structured problems in the lecture.",
            "Think of a routine that runs the same way each time, like a computer's."
          ],
          e: "Programmed decisions are repetitive decisions handled by a routine approach, used for structured problems."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The systematic use of the best available evidence to improve management practice is called _____ management.",
          o: [],
          a: 0,
          accept: [
            "evidence-based",
            "evidence based",
            "evidence-based management",
            "evidence based management",
            "ebmgt",
            "eb mgt"
          ],
          h: [
            "It is abbreviated EBMgt in the slides.",
            "Managers base decisions on documented proof rather than habit or hunch."
          ],
          e: "Evidence-based management (EBMgt) is the systematic use of the best available evidence to improve management practice."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A bank teller in Beirut must decide how to handle a customer who wants to withdraw frozen 'lollar' deposits. A standing BDL circular spells out the exact monthly ceiling and the lira conversion rate to apply. In the lecture's terms, the teller is mainly applying a…",
          o: [
            "Nonprogrammed decision",
            "Policy that requires broad judgment",
            "Rule (an explicit statement of what can or cannot be done)",
            "Heuristic shortcut under ambiguity"
          ],
          a: 2,
          h: [
            "Nonprogrammed decisions are unique and non-recurring; a fixed circular ceiling is the opposite of that. Look for the routine category.",
            "A policy is only a general guideline that leaves room for judgment; here the circular sets an exact, explicit limit, which is stronger than a policy.",
            "Right idea — that's the one.",
            "A heuristic is a rule-of-thumb used when information is ambiguous; here the circular makes the limit explicit, so no shortcut is needed."
          ],
          e: "An explicit statement telling the teller exactly what can or cannot be done (the ceiling and rate) is a rule — the most rigid type of programmed decision for a structured problem."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A restaurant owner facing daily lira collapse reprices the menu each morning by glancing at yesterday's exchange rate and adding 'a bit more,' rather than calculating each dish's cost. The owner is using a…",
          o: [
            "Heuristic (a mental shortcut)",
            "Fully rational maximizing process",
            "Procedure (a defined sequence of steps)",
            "Contingency plan"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "A fully rational process would gather all cost data and maximize value; eyeballing 'a bit more' is the opposite of that.",
            "A procedure is a fixed, defined sequence of steps for a well-structured problem; 'a bit more' is an informal rule of thumb, not a set sequence.",
            "A contingency plan is a backup for if-then situations, not the everyday shortcut described here."
          ],
          e: "Heuristics are rules of thumb used to simplify decisions under uncertain or ambiguous information; they speed judgment but can introduce bias."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A clinic director assembles a committee to choose a new generator supplier 'so the team feels ownership of the decision.' Which lecture-listed advantage of group decision making is the director pursuing?",
          o: [
            "Faster decisions than an individual",
            "Diffused, ambiguous responsibility",
            "Higher acceptance and buy-in, aiding implementation",
            "Guaranteed avoidance of groupthink"
          ],
          a: 2,
          h: [
            "Groups are generally slower, not faster — time-consuming coordination is a downside, not an advantage. Re-read the advantages list.",
            "Ambiguous responsibility is a DOWNSIDE of groups, not the benefit the director wants.",
            "Right idea — that's the one.",
            "Forming a group does not guarantee avoiding groupthink — cohesive groups are precisely where it arises. That is not an advantage."
          ],
          e: "A listed advantage is that people understand the rationale and so accept the decision (buy-in), increasing the chance of successful implementation."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A manager fixates on the first salary figure mentioned in a negotiation and adjusts only slightly from it. This decision bias is called _____.",
          o: [],
          a: 0,
          accept: [
            "anchoring",
            "anchoring bias",
            "anchoring effect",
            "the anchoring bias",
            "anchoring and adjustment"
          ],
          h: [
            "The first number 'anchors' all later judgments.",
            "Think of a ship held in place by something dropped early."
          ],
          e: "Anchoring is fixating on initial information and failing to adequately adjust away from it as new information arrives."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When group members accept the first acceptable option instead of optimizing, the group is _____ — a downside of group decision making.",
          o: [],
          a: 0,
          accept: [
            "satisficing",
            "satisfice",
            "satisficing rather than maximising",
            "satisficing rather than maximizing"
          ],
          h: [
            "Same root word as the bounded-rationality concept of 'good enough.'",
            "It is listed alongside domination and conformity pressures as a group downside."
          ],
          e: "Satisficing — settling for 'good enough' rather than maximizing or optimizing — is listed as a potential downside of group decision making."
        },
        {
          type: "fill",
          tier: "medium",
          q: "The rational model assumes the decision maker knows ALL alternatives and consequences, which is unrealistic; recognizing limits on information and processing capacity is the idea of _____ rationality.",
          o: [],
          a: 0,
          accept: [
            "bounded",
            "bounded rationality",
            "limited",
            "limited rationality"
          ],
          h: [
            "The model is 'bounded' or limited by information and cognitive capacity.",
            "Herbert Simon's term contrasting with full rationality."
          ],
          e: "Bounded rationality holds that managers decide rationally but within the limits of their information and processing capacity, so they satisfice."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A startup's founding team is small, tight-knit, and proud of its track record. The CEO opens each meeting by stating which option she favors, dissenters stay quiet, and one member quietly screens out negative market reports 'to keep morale up.' Which BEST explains the rising risk here?",
          o: [
            "Bounded rationality forcing satisficing",
            "Evidence-based management overload",
            "Groupthink, driven by high cohesiveness and partisan leadership",
            "An overconfidence bias in a single individual"
          ],
          a: 2,
          h: [
            "Satisficing is about settling for 'good enough' due to information limits; the problem here is suppressed dissent in a cohesive group, not limited data.",
            "EBMgt is using the best evidence; the team is actually IGNORING evidence, the opposite. And there is no 'overload' concept in the slides.",
            "Right idea — that's the one.",
            "Overconfidence is an individual bias; the described dynamics (silenced dissent, a self-appointed information screener) are group-level symptoms, not one person's bias."
          ],
          e: "This is groupthink (Janis, 1982): high cohesiveness plus partisan leadership (the CEO stating her preference first) produces self-censorship and a mindguard who filters out threatening information."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "After a failed expansion, an investment committee insists 'our judgment is sound — anyone who warned us just didn't understand our market.' They explain away every prior warning sign. Which two groupthink symptoms are MOST directly displayed?",
          o: [
            "Self-censorship and mindguards",
            "Collective rationalization and out-group stereotyping",
            "Illusion of unanimity and ambiguous responsibility",
            "Anchoring and the framing effect"
          ],
          a: 1,
          h: [
            "Self-censorship is staying silent about doubts; here members are loudly defending the decision, not withholding views. Mindguards screen information, which is not the explaining-away described.",
            "Right idea — that's the one.",
            "Illusion of unanimity is falsely perceiving full agreement, and ambiguous responsibility is a general group downside (not a groupthink symptom) — neither is the explaining-away of warnings shown here.",
            "Anchoring and framing are individual decision biases (heuristics), not groupthink symptoms. The scenario is about group rationalization."
          ],
          e: "Explaining away warnings is collective rationalization; dismissing critics as not understanding 'our market' is the out-group stereotyping symptom (Janis, 1982)."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A board wants to choose between a 'turnaround' strategy and a 'divestment' strategy for a crisis-hit firm. To counter groupthink, which lecture-recommended technique is MOST appropriate?",
          o: [
            "Have the chair state the preferred option first to save time",
            "Assign different sub-groups to analyze each option in depth (parallel groups)",
            "Keep the group small, insulated, and homogeneous for cohesion",
            "Let only the most senior, confident members speak"
          ],
          a: 1,
          h: [
            "Having the leader state a preference first is exactly what FUELS groupthink (partisan leadership); the slides advise dissuading the leader from dominating.",
            "Right idea — that's the one.",
            "Insulation and homogeneity are ANTECEDENTS of groupthink, not remedies. The advice is to introduce outsiders, not increase cohesion.",
            "Letting only senior, confident members speak invites domination — a downside the slides say to counter by drawing out quiet members."
          ],
          e: "The slides recommend creating parallel groups so different teams analyze different options in depth (e.g., turnaround vs. divestment), which surfaces more perspectives and weakens groupthink."
        },
        {
          type: "fill",
          tier: "hard",
          q: "In Janis's model, a group member who shields the group from adverse information that might threaten its complacency is acting as a _____.",
          o: [],
          a: 0,
          accept: [
            "mindguard",
            "mind guard",
            "mind-guard",
            "mindguards"
          ],
          h: [
            "The term parallels 'bodyguard,' but for the group's collective mind.",
            "This member self-appoints to screen out threatening reports."
          ],
          e: "A mindguard is a member who appoints themselves to protect the group from adverse information that might disturb its complacency (Janis, 1982)."
        },
        {
          type: "fill",
          tier: "hard",
          q: "To reduce anchoring and ego threat, the slides suggest having group members _____ their ideas and publicizing them anonymously before anyone speaks.",
          o: [],
          a: 0,
          accept: [
            "write down",
            "write",
            "write out",
            "write down anonymously",
            "writing down",
            "jot down"
          ],
          h: [
            "The aim is to capture views before discussion can anchor them.",
            "It is the opposite of speaking up first in the room."
          ],
          e: "Having members write down ideas and share them anonymously before speaking reduces anchoring and ego-threatening dynamics, a recommended way to manage group decision making."
        },
        {
          type: "fill",
          tier: "hard",
          q: "In the Asch line-judgment experiment, participants gave an answer they knew was wrong simply to match the group; this human tendency to go along with the group is called _____.",
          o: [],
          a: 0,
          accept: [
            "conformity",
            "conforming",
            "herd mentality",
            "social conformity"
          ],
          h: [
            "The slides also call it 'herd mentality.'",
            "About 75% of Asch's participants did it at least once."
          ],
          e: "Conformity (herd mentality) is the tendency to align with the group even when it is wrong; in Asch's study about 75% conformed at least once and on average about a third of the time."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Choosing a Generator Subscription in Achrafieh",
          scenario: "Rami manages a small co-working space in Achrafieh. With EDL state power down to roughly two hours a day, he must pick a private generator subscription ('ishtirak') for the office. Three neighbourhood generator owners offer different deals: one is cheapest but caps amperage so low that the printers trip the line; one is mid-priced with reliable amperage; and one is expensive but guarantees the highest amperage and priority during fuel shortages. Rami's tenants care most about (a) reliable power for laptops and printers, (b) a predictable monthly fee they can budget in lira, and (c) priority during the recurring fuel queues. Rami jots these three concerns on a notepad, decides reliability matters most, then ranks each offer against the three concerns before signing with the mid-priced provider.",
          qs: [
            {
              q: "Walk through how Rami's choice maps onto the first six steps of the eight-step decision-making process.",
              a: "Step 1, identifying a problem: the office needs power but EDL supplies only about two hours daily. Step 2, identifying decision criteria: reliable amperage for laptops/printers, a predictable lira-budgetable fee, and fuel-shortage priority. Step 3, allocating weights: Rami judged reliability the most important criterion. Step 4, developing alternatives: the three generator offers. Step 5, analyzing alternatives: ranking each offer against the three weighted criteria. Step 6, selecting an alternative: signing with the mid-priced provider that best balanced the weighted criteria."
            },
            {
              q: "Rami did not gather quotes from every generator owner in Beirut or compute the optimal cost-per-kWh; he picked the first option that comfortably met his criteria. Which concept from the lecture does this illustrate?",
              a: "This illustrates bounded rationality and satisficing. Rami decided rationally but within the limits of his time and information, considering only three reachable local offers rather than all conceivable suppliers. Instead of maximizing (finding the single optimal deal), he satisficed — he chose the option that was 'good enough,' meeting his weighted criteria of reliability, predictable fee, and fuel priority."
            },
            {
              q: "Is Rami's generator choice a programmed or a nonprogrammed decision? Justify your answer using the lecture's criteria.",
              a: "It sits closer to a programmed decision for a relatively structured problem: the problem is familiar and recurring (every Beirut office must pick an ishtirak), the criteria are clear and specific, and information about the offers is readily available. Rami could even reduce it to a simple policy or procedure for future renewals. It is not fully nonprogrammed because it is neither unique nor highly ambiguous, though the fuel-shortage uncertainty adds a small unstructured element."
            }
          ]
        },
        {
          tier: "medium",
          title: "The Pricing Committee at Beit al-Sufara Hotel",
          scenario: "Beit al-Sufara is a mid-range Beirut hotel hit hard by the crisis. Management forms a weekly pricing committee to set room rates in fresh US dollars as the lira gyrates and tourism wobbles. The committee includes the general manager, the head of sales, the accountant, and a junior front-desk supervisor. In practice the general manager opens each meeting by announcing 'I think we hold rates flat this week,' the head of sales — who is loud and senior — quickly agrees, and the meeting ends in ten minutes. The accountant, who has data showing occupancy is collapsing and rates should drop, says nothing. The junior supervisor, who hears guest complaints daily, also stays quiet. Bookings keep falling, yet each week the committee congratulates itself on 'a quick, united decision.'",
          qs: [
            {
              q: "Identify the advantages of group decision making that the pricing committee is FAILING to capture, using the lecture's list.",
              a: "The committee is failing to capture the core advantages of groups: more complete information and knowledge (the accountant's occupancy data and the supervisor's guest feedback never enter the discussion), a greater number of perspectives and different experiences, and intellectual stimulation through genuine discussion. Because these inputs are suppressed, the decision is not more fully informed or of higher quality — it merely looks united. The committee gets the form of a group without the informational benefit a group is supposed to provide."
            },
            {
              q: "Which potential downsides of group decision making are on display here? Name at least two from the lecture and tie each to a detail in the scenario.",
              a: "Domination is present: the loud, senior head of sales and the general manager are heard while quieter members are not, and they do not necessarily hold the most valid opinions. Conformity pressure is present: there is pressure to fall in line with the general manager's stated majority view, so the accountant and supervisor self-silence. The group is also satisficing — accepting the first 'good enough,' quick decision (hold rates flat) rather than optimizing against the occupancy data. Ambiguous responsibility may also arise since no single person owns the worsening result."
            },
            {
              q: "Recommend two specific changes, drawn from the lecture's suggestions for managing group decision making, that would improve this committee's decisions.",
              a: "First, dissuade the leader from talking first and most: the general manager should NOT open by stating a preferred option, because that partisan signal anchors the group and triggers conformity. Second, draw out the quiet members and have everyone write down their views — including the accountant's occupancy figures — and publicize them anonymously before discussion, reducing anchoring and ego threat. The hotel could also avoid sharp status divisions so the junior supervisor's frontline information is taken seriously, and consider introducing an outsider to challenge the 'hold flat' habit."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Expansion That Everyone Approved",
          scenario: "NourTech is a small, successful Beirut software firm whose six-person leadership team has worked together since before 2019 and takes pride in 'never having made a bad call.' In early 2026 the founder-CEO proposes opening a second office in a Gulf country and billing all salaries in fresh dollars to escape lira volatility. At the planning meeting she presents the idea as 'basically decided' and asks the team to 'help make it happen.' The CFO, who privately worries the firm cannot access enough fresh dollars given frozen bank deposits and informal withdrawal limits, decides not to spoil the mood and stays silent. One manager volunteers to 'filter out the negative noise' from a consultant's risk report before circulating it. The team dismisses a rival firm's failed Gulf expansion as 'they just didn't understand the region like we do.' The decision passes unanimously in under an hour, with no contingency plan if fresh dollars run short.",
          qs: [
            {
              q: "Using Janis (1982), identify the ANTECEDENTS of groupthink present at NourTech and explain why this group was especially vulnerable.",
              a: "Several antecedents are present. High cohesiveness: a tight six-person team that has worked together for years and prizes its unbroken record. Structural factors: partisan leadership (the CEO frames the plan as 'basically decided' before discussion), an insulated and ideologically homogeneous group, and no procedural protocols for surfacing dissent or evaluating options. Contextual factors: external pressure from the lira/banking crisis and stress about fresh-dollar access push the group to seek quick consensus. Together, high cohesiveness plus partisan leadership and insulation make the team strongly motivated to maintain esprit de corps over realistic appraisal — the classic recipe for groupthink."
            },
            {
              q: "Map at least three SYMPTOMS of groupthink to specific behaviours in the scenario.",
              a: "Self-censorship: the CFO withholds his well-founded fresh-dollar concerns to avoid spoiling the mood. Mindguard: the manager who volunteers to 'filter out the negative noise' from the risk report is self-appointing to shield the group from adverse information. Out-group stereotyping / collective rationalization: dismissing the rival's failed expansion as 'they just didn't understand the region like we do' rationalizes away a clear warning and stereotypes outsiders. An illusion of unanimity and an illusion of invulnerability (the proud 'never a bad call' record, the under-an-hour unanimous vote) round out the picture."
            },
            {
              q: "The decision shows several 'decision-making characteristics of groupthink' from Janis. Identify two and recommend concrete management techniques from the lecture to counteract them.",
              a: "Two DM characteristics are present: limited use of expert knowledge (the consultant's risk report is filtered and the CFO's expertise is silenced) and a lack of contingency plans (no plan if fresh dollars run short), alongside limited cost-benefit appraisal and undue attention to facts that support the in-group choice. To counter them, the CEO should stop signalling her preference and dissuade herself from dominating, and the team should have members write ideas down and share them anonymously before speaking to surface the CFO's objections without ego threat. Creating parallel sub-groups — one analyzing the Gulf expansion, another a stay-and-consolidate option — and introducing an outsider would force genuine cost-benefit appraisal and produce the missing contingency plans."
            }
          ]
        },
        {
          tier: "hard",
          title: "Rationing Fresh Dollars at Mawarid Trading",
          scenario: "Mawarid Trading imports medical supplies into Lebanon. Its purchasing manager, Hala, must decide each month how to split the firm's scarce fresh dollars between three suppliers while most of the company's older revenue sits frozen as 'lollars' in a bank that allows only small informal withdrawals. The rational ideal would be to know every supplier's true delivery reliability, all price paths, and every consequence of each split — but suppliers re-quote in fresh dollars almost daily, customs delays are unpredictable, and one supplier demands cash up front. Hala instead relies partly on her gut feel for which supplier 'always comes through,' partly on a rule of thumb of 'pay the up-front one first,' and partly on the firm's standing policy to 'never let stock of insulin fall below two weeks.' Under pressure, she tends to lock onto the first workable split and move on.",
          qs: [
            {
              q: "Explain why Hala cannot follow the fully rational model here, referencing its specific assumptions and the concept that replaces it.",
              a: "The rational model assumes the problem is clear and unambiguous, the goal is specific, and the decision maker is aware of ALL alternatives and consequences and picks the value-maximizing option in the organization's best interest. Hala's situation violates these: information is ambiguous and incomplete (daily fresh-dollar re-quotes, unpredictable customs, frozen lollars), so she cannot know all alternatives or their consequences. She therefore operates under bounded rationality — deciding rationally within her information and processing limits — and satisfices by locking onto the first workable dollar split rather than computing the optimal one."
            },
            {
              q: "Classify each of Hala's three decision aids — her gut feel, her 'pay the up-front supplier first' habit, and the 'two-week insulin stock' guideline — using the lecture's terminology.",
              a: "Her gut feel about which supplier 'always comes through' is intuitive decision making — judgment based on experience, feelings, and accumulated knowledge. 'Pay the up-front supplier first' is a heuristic, a rule of thumb that simplifies the choice under uncertainty but can introduce bias. The standing 'never let insulin fall below two weeks' is a policy/rule — a programmed-decision device that constrains the structured part of the problem. Together they show Hala blending intuition, heuristics, and programmed guidelines because the problem is too unstructured for a purely rational calculation."
            },
            {
              q: "Hala's reliance on intuition and heuristics speeds decisions but risks bias. Identify one likely bias in her process and recommend how evidence-based management could strengthen her monthly allocation.",
              a: "Her tendency to 'lock onto the first workable split and move on' reflects anchoring (and possibly an availability/overconfidence bias toward the supplier who is most memorable for 'coming through'), which can lock in a suboptimal allocation. Evidence-based management would have her systematically combine the best available evidence — actual delivery-reliability and price-history data on each supplier, the opinions and values of stakeholders (finance, the pharmacists who need insulin), and internal organizational factors such as real fresh-dollar cash flow and the lollar-withdrawal limits — rather than gut feel alone. Tracking each supplier's documented performance would let Hala adjust her anchor and allocate dollars on evidence, not just on which supplier feels most reliable."
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
          model: "Rational decision making describes choices that are logical, consistent, and value-maximizing, and it rests on demanding assumptions: the decision maker is logical and objective; the problem is clear and unambiguous; there is a clear, specific goal; all alternatives and consequences are known; the maximizing alternative is chosen; and the decision serves the organization's best interest. In reality these assumptions rarely hold. Bounded rationality recognizes that managers are rational within the limits of their ability to process information: unable to analyze all information on all alternatives, they SATISFICE — they accept solutions that are “good enough” rather than maximal. Managers also decide intuitively, on the basis of experience, feelings, and accumulated judgment; Exhibit 3-5 shows intuition spans experience-based, affect-initiated, cognitive-based, values/ethics-based decisions and subconscious mental processing. To cope with complexity, managers use heuristics — rules of thumb that simplify information — but these generate systematic errors and biases: overconfidence, anchoring on initial figures, selective perception, confirmation of prior beliefs, framing effects, availability, representation, randomness errors, sunk-cost reasoning, self-serving attributions, immediate gratification, and hindsight. The statement is therefore best judged as half-true: managers are intendedly rational but cognitively bounded and bias-prone. Evidence-based management offers a corrective, combining the manager's expertise and judgment with evaluated external evidence, stakeholders' values, and organizational context so that judgment is disciplined by the best available evidence rather than by rules of thumb alone.",
          tier: "easy"
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
          model: "Groups can outperform individuals because they pool more complete information and knowledge, bring a greater number of perspectives and different experiences, and generate intellectual stimulation through discussion — so the decision is more fully informed and of higher quality. Because participants understand the rationale, acceptance (buy-in) and commitment are higher, increasing the chance of successful implementation. Yet the same social forces can ruin decisions. Discussion can be dominated by loud members whose opinions are not the most valid; the process is time consuming; conformity pressures push members toward the majority view; responsibility becomes ambiguous; and groups often satisfice rather than optimize. Composition adds risk: teams may be loaded for political reasons, members drop out or attend with vested interests, and a senior executive may tilt the outcome by appointing “their person” or by signaling a preference and starting to implement it. At the extreme lies groupthink (Janis, 1982): in highly cohesive groups, striving for unanimity overrides realistic appraisal of alternatives. Its antecedents are high cohesiveness, structural faults (insulation, partisan leadership, no procedural protocols, ideological homogeneity), and contextual pressures (stress, external pressure). Its symptoms — illusion of invulnerability, moral superiority, collective rationalization, stereotyping of outsiders, self-censorship, conformity pressure, illusion of unanimity, and mind guards — produce limited options, ignored expertise, and no contingency plans. The Asch experiments show how strong conformity is: 75% of subjects denied the evidence of their own eyes at least once. Managers can engineer around these pathologies: avoid sharp status divisions, draw out quiet members, dissuade the leader from dominating, collect ideas in writing anonymously before discussion (defeating anchoring and ego threat), appoint a credible devil's advocate, run parallel groups analyzing different options in depth, refresh stale groups, and introduce outsiders. The goal is to keep the informational benefits of groups while deliberately disrupting the unanimity pressures that corrupt them.",
          tier: "medium"
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
          model: "Decisions divide according to the problems they answer. Structured problems are straightforward, familiar, and easily defined; they call for programmed decisions — repetitive decisions handled by a routine approach. Managers program such decisions through three instruments: a procedure, the series of sequential steps used to respond to a well-structured problem; a rule, an explicit statement that tells managers what can or cannot be done; and a policy, a guideline for making decisions that leaves discretion in application. Unstructured problems, by contrast, are new or unusual with ambiguous or incomplete information; they require nonprogrammed decisions — unique, nonrecurring, custom-made solutions. The lecture's comparison shows the systematic differences: programmed decisions live at lower managerial levels, recur routinely, draw on readily available information, serve clear and specific goals, are resolved quickly, and rely on procedures, rules, and policies; nonprogrammed decisions concentrate at upper levels, are new and unusual, face ambiguous information and vague goals, take relatively long, and rely on judgment and creativity. The two categories are complementary in organizational design: by programming whatever is structured, organizations resolve routine matters consistently and cheaply at low levels, while reserving senior managers' limited attention — and their judgment and creativity — for the novel, consequential, unstructured problems that no checklist can anticipate.",
          tier: "hard"
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
          ],
          check: {
            q: "Creating or changing an organization's structure is called organizational…",
            o: [
              "design",
              "chart",
              "specialization",
              "authority"
            ],
            a: 0,
            e: "Organizational design is the act of creating or changing an organization's structure; the structure itself is the formal arrangement of jobs, and the chart is its visual representation."
          }
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
          ],
          check: {
            q: "Which pairing of an element with its meaning is correct?",
            o: [
              "Centralization — pushing decisions down to lower-level employees",
              "Span of control — the number of employees a manager can efficiently and effectively manage",
              "Formalization — the number of employees per manager",
              "Responsibility — the right to give orders"
            ],
            a: 1,
            e: "Span of control is the number of employees a manager can efficiently and effectively manage. Centralization concentrates decisions at the top, formalization is about rules/standardization, and responsibility is the obligation to perform assigned duties."
          }
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
          ],
          check: {
            q: "According to the contingency factors, the greater the environmental uncertainty, the more an organization needs the flexibility of which design?",
            o: [
              "mechanistic",
              "organic",
              "simple",
              "functional"
            ],
            a: 1,
            e: "Stable, simple environments suit mechanistic designs, but the greater the uncertainty, the more an organization needs the flexibility of an organic design."
          }
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
          ],
          check: {
            q: "What is the chief weakness of the divisional structure?",
            o: [
              "reliance on a single person at the top",
              "duplication of activities and resources, which raises costs",
              "an inability to focus on results",
              "that it is too inexpensive to maintain"
            ],
            a: 1,
            e: "The divisional structure focuses on results but duplicates activities and resources across divisions, increasing costs and reducing efficiency. Single-person reliance is the simple structure's weakness."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "The visual representation of an organization's structure is called the…",
          o: [
            "organizational chart",
            "organizational design",
            "work specialization",
            "chain of command"
          ],
          a: 0,
          h: [
            "Correct — the chart is the visual picture of the structure.",
            "This is the act of creating or changing the structure, not the picture of it.",
            "This divides one job into separate tasks; it is not a diagram of the structure.",
            "This is the line of authority showing who reports to whom, not the visual diagram itself."
          ],
          e: "The organizational chart is the visual representation of an organization's structure; organizational design is the act of creating or changing that structure."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Dividing work activities into separate job tasks is known as…",
          o: [
            "formalization",
            "work specialization",
            "departmentalization",
            "centralization"
          ],
          a: 1,
          h: [
            "This is how standardized jobs are and how far rules guide behavior, not the division of work into tasks.",
            "Correct — work specialization (division of labor) splits work into separate job tasks.",
            "This is the basis for grouping jobs into units, not dividing one job into tasks.",
            "This concerns where decisions are made, not the splitting of work into tasks."
          ],
          e: "Work specialization, also called division of labor, divides work activities into separate job tasks performed by different individuals."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which principle states that each person should report to only one manager?",
          o: [
            "span of control",
            "unity of command",
            "line authority",
            "decentralization"
          ],
          a: 1,
          h: [
            "This is the number of employees a manager oversees, not the rule about reporting to one boss.",
            "Correct — unity of command holds that each person should report to only one manager.",
            "This is the right of a manager to direct an employee's work, not the one-boss rule.",
            "This concerns pushing decisions down to lower levels, not how many bosses a person reports to."
          ],
          e: "Unity of command is the principle that each person should report to only one manager, avoiding conflicting demands."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The management function that involves arranging and structuring work to accomplish the organization's goals is called _____.",
          o: [],
          a: 0,
          accept: [
            "organizing",
            "organising"
          ],
          h: [
            "It is the second of the four management functions, concerned with arranging and structuring work."
          ],
          e: "Organizing is the management function of arranging and structuring work to accomplish the organization's goals."
        },
        {
          type: "fill",
          tier: "easy",
          q: "An organization that is low in formalization, has wide spans of control, decentralization, and cross-functional teams is described as _____ (term for the flexible, adaptive type).",
          o: [],
          a: 0,
          accept: [
            "organic",
            "organic organization",
            "organic structure",
            "an organic organization"
          ],
          h: [
            "It is the opposite of the rigid, mechanistic type."
          ],
          e: "An organic organization is highly adaptive and flexible, with cross-functional teams, free information flow, wide spans, decentralization, and low formalization."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The line of authority extending from upper organizational levels to the lowest levels, clarifying who reports to whom, is called the _____.",
          o: [],
          a: 0,
          accept: [
            "chain of command",
            "the chain of command"
          ],
          h: [
            "It is the element that clarifies reporting relationships from top to bottom."
          ],
          e: "The chain of command is the line of authority extending from upper to lower levels that clarifies who reports to whom."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A bank groups its jobs into units serving retail customers, small businesses, and large corporations separately. Which form of departmentalization is this?",
          o: [
            "functional departmentalization",
            "customer departmentalization",
            "geographical departmentalization",
            "process departmentalization"
          ],
          a: 1,
          h: [
            "This groups jobs by the work performed (e.g., lending, operations), not by the type of client served.",
            "Correct — grouping units around distinct customer types is customer departmentalization.",
            "This groups jobs by region or location, not by the kind of customer served.",
            "This groups jobs by the stage of the work flow, not by customer type."
          ],
          e: "Grouping jobs around shared customer types (retail, small business, corporate) is customer departmentalization."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A manufacturer operating in a stable, simple environment with routine work and minor decisions wants the most efficient design. Based on the contingency logic, it should lean toward a structure that is…",
          o: [
            "organic, with wide spans and low formalization",
            "mechanistic, with specialization, narrow spans, and high formalization",
            "a project structure with continuous project teams",
            "a matrix structure with dual reporting"
          ],
          a: 1,
          h: [
            "Organic designs fit uncertain, dynamic environments, not the stable, routine setting described.",
            "Correct — stable, simple environments suit mechanistic designs that maximize efficiency.",
            "Project structures fit continuous project-based work, not stable, routine manufacturing.",
            "A matrix fits temporary cross-functional projects and adds two-boss tension, not needed in a stable, routine setting."
          ],
          e: "In stable, simple environments with routine work, a mechanistic structure (high specialization, narrow spans, high formalization, centralization) is the most effective and efficient fit."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A government agency wants to guarantee that every clerk handles a permit request in exactly the same way, following detailed written procedures with little discretion. Which element of design is it emphasizing?",
          o: [
            "high formalization",
            "wide span of control",
            "decentralization",
            "staff authority"
          ],
          a: 0,
          h: [
            "Correct — relying on detailed rules and procedures that limit discretion is high formalization.",
            "Span of control is the number of employees per manager, not the reliance on written rules.",
            "Decentralization pushes decisions down to employees; the agency is doing the opposite by limiting discretion.",
            "Staff authority is an advisory support role, not the use of standardized rules and procedures."
          ],
          e: "Formalization is how standardized jobs are and how far rules and procedures guide behavior; detailed procedures with little discretion is high formalization."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A retail chain cuts a layer of middle managers so each remaining manager now supervises 12 people instead of 6. This deliberately _____ the span of control. (fill the verb)",
          o: [],
          a: 0,
          accept: [
            "widens",
            "widened",
            "widen",
            "increases",
            "increased",
            "increase",
            "broadens",
            "broadened"
          ],
          h: [
            "Supervising more people per manager flattens the structure; what happens to the span?"
          ],
          e: "Widening the span of control means each manager supervises more employees, which flattens the structure and reduces managerial cost."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A small startup where the founder makes nearly every decision, jobs are loosely defined, and there are almost no written rules best fits the _____ structure.",
          o: [],
          a: 0,
          accept: [
            "simple",
            "simple structure"
          ],
          h: [
            "It is the fast, flexible, inexpensive design typical of very small, owner-run firms."
          ],
          e: "A small firm with low formalization, loose jobs, and decisions centralized in the owner is a simple structure — fast, flexible, inexpensive, with clear accountability."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Positions created to support, assist, and advise those holding line authority exercise what is called _____ authority.",
          o: [],
          a: 0,
          accept: [
            "staff",
            "staff authority"
          ],
          h: [
            "It is the advisory counterpart to line authority, which directs employees' work."
          ],
          e: "Staff authority refers to positions created to support, assist, and advise managers who hold line authority."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A firm pursuing an aggressive innovation strategy in a fast-changing, uncertain industry currently runs with high specialization, rigid departments, narrow spans, centralized decisions, and heavy formalization. Using the contingency factors, the BEST critique is that…",
          o: [
            "its structure is too organic for such a stable environment",
            "its mechanistic structure mismatches both the uncertain environment and the innovation strategy, which call for an organic design",
            "strategy is irrelevant to structure, so only size should be examined",
            "it should narrow spans even further to control the uncertainty"
          ],
          a: 1,
          h: [
            "The listed traits are mechanistic, not organic, and the environment is uncertain, not stable — both halves are reversed.",
            "Correct — high uncertainty and an innovation strategy both demand organic flexibility, so a mechanistic profile is a poor fit.",
            "Strategy and structure are closely linked in the contingency logic; ignoring strategy is exactly the error here.",
            "Narrowing spans pushes the design even more mechanistic, worsening the mismatch with an uncertain, innovative setting."
          ],
          e: "Strategy and structure are linked, and greater environmental uncertainty needs organic flexibility. A mechanistic profile contradicts both an innovation strategy and an uncertain environment."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two firms each have 4,096 non-managerial employees. Firm A uses a span of control of 4 and Firm B a span of 8. Which statement BEST captures the trade-off?",
          o: [
            "Firm B has more levels but fewer managers than Firm A",
            "Firm B has fewer levels and roughly half the managers, giving tighter cost control but looser supervision of each employee",
            "Firm A is cheaper to run because narrow spans require fewer managers",
            "The two firms end up with the same number of levels and managers"
          ],
          a: 1,
          h: [
            "Wider spans reduce the number of levels, not increase them; the level effect is backwards here.",
            "Correct — a span of 8 yields about 4 levels and roughly 585 managers versus 6 levels and about 1,365, with less close oversight per employee.",
            "Narrow spans require MORE managers and levels, making Firm A the more expensive one to run.",
            "The exhibit shows the two differ sharply: about 6 levels/1,365 managers versus 4 levels/585."
          ],
          e: "A span of 8 cuts levels from about 6 to 4 and managers from roughly 1,365 to about 585 — flatter and cheaper, but each manager supervises more people, so oversight per employee is looser."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A diversified company finds its functional specialists keep optimizing their own departments while company-wide results suffer, and it wants each set of products held accountable for its own bottom line. Which structural change BEST targets this specific problem?",
          o: [
            "increase formalization across every function",
            "move toward a divisional structure so managers own the results for their products or services",
            "narrow every manager's span of control",
            "centralize all decisions at headquarters"
          ],
          a: 1,
          h: [
            "More written rules do not stop functional silos from chasing their own goals; the parochialism remains.",
            "Correct — a divisional structure focuses on results, making managers accountable for their products and services.",
            "Tighter supervision spans do nothing to align functional silos with overall organizational results.",
            "Pulling decisions to the top does not make specialists care about company-wide results and can deepen the silo problem."
          ],
          e: "Functional silos losing sight of the whole is the functional structure's classic weakness; a divisional structure refocuses managers on results for their own products or services."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A consulting firm assigns a finance analyst, a designer, and an engineer from their home departments onto a client project while they still report to their department heads, creating two-boss tension. This dual-reporting design is the _____ structure.",
          o: [],
          a: 0,
          accept: [
            "matrix",
            "matrix structure"
          ],
          h: [
            "It assigns specialists from functional departments to projects while keeping their functional reporting line, producing two bosses."
          ],
          e: "Assigning specialists from different functional departments to projects while they keep their functional reporting line is the matrix structure, which strains unity of command."
        },
        {
          type: "fill",
          tier: "hard",
          q: "Beyond a certain point, narrowing a worker's task further causes boredom, fatigue, stress, and turnover that outweigh the efficiency gains. These costs that erode the benefits of over-specialization are called human _____.",
          o: [],
          a: 0,
          accept: [
            "diseconomies",
            "diseconomies of scale"
          ],
          h: [
            "They are the opposite of the economies that specialization first produces."
          ],
          e: "Human diseconomies — boredom, fatigue, stress, low quality, absenteeism, and turnover — eventually outweigh the economies of specialization once work is divided too far."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A geographically dispersed firm with capable local managers normally favors decentralization, but the lecture's table lists one condition that pulls strongly the OTHER way, toward centralizing critical decisions: when the organization is facing a _____ or risk of company failure.",
          o: [],
          a: 0,
          accept: [
            "crisis",
            "a crisis",
            "crisis or risk of failure"
          ],
          h: [
            "It is the survival-threatening condition listed under 'more centralization' in the table."
          ],
          e: "When an organization faces a crisis or risk of company failure, the table favors centralizing critical decisions even if dispersion and capable managers would otherwise favor decentralization."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Beit Beirut Furniture Splits Into Departments",
          scenario: "Since 2019, Beit Beirut, a Beirut furniture maker, has grown from the founder's one-man workshop to 40 staff as it pivoted to exporting to the Gulf for fresh dollars while the lira collapsed at home. In the early days the founder, Sami, personally made every decision, jobs were loosely defined, and there were almost no written rules. Now the workload is too big for one person: orders are missed, and Sami is exhausted. He decides to group the staff into clear units — carpentry, finishing, sales, and accounting — and to write down basic procedures so work no longer depends on him alone. He also draws a chart showing who now reports to whom.",
          qs: [
            {
              q: "In its earliest days, which of the three traditional designs did Beit Beirut have, and what two strengths and one key weakness explain why it no longer fits a 40-person firm?",
              a: "It had a SIMPLE STRUCTURE: low formalization, loosely defined jobs, and all decisions concentrated in the owner, Sami. Its strengths are that it is fast, flexible, and inexpensive to maintain, with clear accountability — useful for a tiny workshop. Its key weakness, now exposed, is that the simple structure is not appropriate as the organization grows and reliance on one person becomes risky: with 40 staff and export orders, missed orders and Sami's exhaustion show the firm has outgrown the design."
            },
            {
              q: "Sami is grouping staff into carpentry, finishing, sales, and accounting. Name this element of organizational design and the specific form he is using.",
              a: "He is using DEPARTMENTALIZATION, the basis by which jobs are grouped together. The specific form is FUNCTIONAL departmentalization, because he is grouping jobs by the function or kind of work performed — carpentry, finishing, sales, and accounting are all functions. This groups employees who do similar tasks together and can yield cost-saving economies of specialization."
            },
            {
              q: "Sami is also writing down procedures and drawing a chart of who reports to whom. Name the design element each action represents.",
              a: "Writing down procedures so work no longer depends on Sami increases FORMALIZATION — how standardized the jobs are and the extent to which rules and procedures guide behavior. Drawing the diagram of who reports to whom produces the ORGANIZATIONAL CHART, the visual representation of the structure, and reflects the CHAIN OF COMMAND, the line of authority clarifying reporting relationships."
            }
          ]
        },
        {
          tier: "medium",
          title: "Zahle Generator Co-op Picks a Span",
          scenario: "A neighborhood generator co-op in Zahle expanded fast after EDL state power fell to a few hours a day and households became dependent on the private 'ishtirak' subscription. The co-op now employs 60 technicians who install meters, manage amperage caps, and collect the diesel-driven monthly fees billed in fresh dollars. Cash is tight because many subscribers pay late in devalued lira. The board wants to cut its heavy managerial payroll. Currently each supervisor oversees 5 technicians (the traditional cap), requiring 12 supervisors plus a layer above them. A consultant proposes widening each supervisor's span to 15, which would need only 4 supervisors and let the board remove the extra layer.",
          qs: [
            {
              q: "Identify the element of organizational design at issue and explain, using the span-of-control logic, how widening the span from 5 to 15 cuts managerial cost.",
              a: "The element is SPAN OF CONTROL — the number of employees a manager can efficiently and effectively manage. At a span of 5, the 60 technicians need 12 supervisors plus a layer above; widening the span to 15 means only 4 supervisors are needed and the extra layer can be removed. Wider spans require fewer managers and fewer levels, flattening the structure and lowering managerial payroll — directly helpful when subscribers pay late in devalued lira and cash is tight."
            },
            {
              q: "Whose view — traditional or contemporary — does the proposed span of 15 reflect, and what does each view hold?",
              a: "It reflects the CONTEMPORARY view. The TRADITIONAL view held that a manager should supervise no more than about 5 to 6 employees (the co-op's current cap). The CONTEMPORARY view holds there is no magic number: the appropriate span depends on factors such as the skill of employees and the complexity of the work, so a wider span like 15 can be effective. Routine, similar installation tasks make a wider span more workable here."
            },
            {
              q: "What is the trade-off the board accepts by widening the span, and which co-op conditions make the wider span more or less workable?",
              a: "The trade-off is that wider spans give each supervisor more technicians to oversee, so per-employee supervision becomes looser — supervisors have less time for each technician and problems may be caught later. The wider span is MORE workable when the work is routine and standardized (similar meter installs and amperage caps) and technicians are skilled and experienced, so they need less hands-on oversight. It is LESS workable if the work is highly variable or technicians are inexperienced, where thinner oversight could let errors in billing or amperage management slip through."
            }
          ]
        },
        {
          tier: "hard",
          title: "Cedar Relief NGO Restructures Mid-Crisis",
          scenario: "Cedar Relief is a Beirut NGO that scaled up after the 2019 collapse and the 2020 port blast to distribute fuel vouchers, medicine, and cash aid across Lebanon. Its environment is highly turbulent: donor fresh-dollar funding arrives unpredictably, BDL circulars keep changing how dollars can be moved, and needs shift week to week as the lira slides. For years Cedar ran as rigid functional departments (logistics, medical, finance, field) with narrow spans, centralized decisions at the Beirut head office, and thick rulebooks. Field teams in Tripoli and Tyre complain they cannot react fast enough to local shortages and fuel queues because every choice waits for head-office sign-off. A new director proposes converting field operations into cross-functional regional teams with wide latitude and few rules, while keeping finance tightly controlled at head office because a feared 'lollar' haircut and donor audits make every dollar decision critical.",
          qs: [
            {
              q: "Classify Cedar's old structure on the mechanistic-organic spectrum using at least three elements, and explain why the contingency factors make it a poor fit for the field operation.",
              a: "The old structure is strongly MECHANISTIC: rigid functional departmentalization, NARROW spans of control, CENTRALIZED decisions at head office, and HIGH formalization (thick rulebooks) — at least three of the six elements point mechanistic. The key contingency factor is ENVIRONMENTAL UNCERTAINTY: Cedar's environment is highly turbulent (unpredictable donor funding, shifting BDL circulars, week-to-week needs, fuel queues). The lecture holds that the greater the uncertainty, the more an organization needs the flexibility of an ORGANIC design. A mechanistic field operation cannot react fast enough to local shortages because every choice waits for centralized sign-off, so the design mismatches the uncertain environment."
            },
            {
              q: "Evaluate the director's proposal to make field teams organic while keeping finance centralized. Is it contradictory, and which contingency and centralization factors justify the split?",
              a: "It is NOT contradictory; it is a sensible MIXED design. Centralization is a separate element from the overall mechanistic-organic profile, so Cedar can decentralize and 'organify' field work while centralizing finance. The ENVIRONMENT factor justifies organic, decentralized field teams: high uncertainty and the need to react to local shortages and fuel queues call for flexibility and on-the-spot decisions. The centralization table justifies keeping finance at head office: the decisions are significant rather than minor (a feared lollar haircut and donor audits make every dollar choice critical) and the organization faces crisis and risk of failure — both are 'more centralization' factors. Matching each part of the organization to its own conditions is exactly what contingency thinking recommends."
            },
            {
              q: "Converting field operations into cross-functional regional teams changes several design elements at once. Identify three elements that shift and the direction of each shift.",
              a: "At least three elements shift toward organic: (1) DEPARTMENTALIZATION moves from rigid functional departments to CROSS-FUNCTIONAL regional teams that combine logistics, medical, and field skills. (2) CENTRALIZATION shifts toward DECENTRALIZATION for field decisions, since regional teams get wide latitude to act locally instead of waiting for head-office sign-off. (3) FORMALIZATION drops from thick rulebooks to FEW rules ('few rules' = low formalization), so teams can improvise around shortages and fuel queues. Spans of control also tend to WIDEN as cross-functional teams replace narrow supervisory layers. Each shift moves the field operation from the mechanistic end toward the organic end suited to its uncertain environment."
            }
          ]
        },
        {
          tier: "hard",
          title: "Mghara Tech Chooses Between Matrix and Project",
          scenario: "Mghara Tech is a Beirut software house that survived the crisis by re-pricing all client work in fresh dollars while its engineers' pre-2019 bank savings stayed frozen as 'lollars.' Almost all of Mghara's revenue now comes from a continuous stream of distinct client projects, each lasting a few months, with no stable product line. Currently engineers sit in permanent functional departments (front-end, back-end, QA, design) and are temporarily seconded onto client projects while still reporting to their department heads. Engineers complain constantly about getting conflicting orders from their department head and their project lead, and during EDL blackouts and fuel queues the slow two-boss coordination causes missed deadlines that cost scarce fresh-dollar contracts. The founder, Rana, is weighing whether to keep the current arrangement or restructure so that staff simply work on projects continuously, with no functional home.",
          qs: [
            {
              q: "Name Mghara's current structure and the specific classic principle the engineers' complaint shows it strains.",
              a: "The current arrangement is a MATRIX STRUCTURE: specialists from different functional departments (front-end, back-end, QA, design) are assigned to client projects while still reporting to their functional department heads. The engineers' complaint about conflicting orders from a department head and a project lead shows it strains UNITY OF COMMAND — the principle that each person should report to only one manager. In a matrix each specialist effectively has two bosses, so contradictory instructions are a built-in risk, which is exactly what the engineers describe."
            },
            {
              q: "Rana is considering a structure where staff simply work on projects continuously with no functional home. Name that design and explain why it fits Mghara's work better than the matrix.",
              a: "That is the PROJECT STRUCTURE, in which employees continuously work on projects. It fits Mghara better because almost all revenue comes from a continuous stream of distinct client projects with no stable product line — work that IS projects, not occasional projects layered over stable departments. Crucially, the project structure removes the dual functional/project hierarchy of the matrix, so it eliminates the two-boss tension and conflicting orders the engineers complain about. With fewer coordination delays, Mghara is less likely to miss deadlines during blackouts and fuel queues and lose scarce fresh-dollar contracts."
            },
            {
              q: "Suppose a board member argues Mghara should instead return to a pure functional structure for efficiency. Evaluate this using the nature of Mghara's work and the contingency logic.",
              a: "The argument is weak for Mghara. A pure functional structure parks specialists in stable departments and earns efficiency from specialization — but that fits stable, routine work, not Mghara's reality of continuous, distinct client projects with no stable product line. The contingency logic ties structure to STRATEGY and the nature of the work: when project work is the business itself, employees need to move fluidly across projects, which a rigid functional structure cannot support. A functional structure would also leave specialists insulated in silos and slow to assemble cross-disciplinary project teams, worsening the deadline misses that already cost fresh-dollar contracts. The project structure, where staff continuously work on projects, is the better fit; the firm could retain light functional grouping only for stable back-office support."
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
          model: "Organizational design involves six elements. First, work specialization — dividing work activities into separate job tasks (division of labor); it exploits workers' diverse skills, but the exhibit shows productivity gains flatten and reverse when human diseconomies such as boredom and fatigue exceed the economies. Second, departmentalization — the basis by which jobs are grouped — with five forms: functional, geographical, product, process, and customer; managers choose the grouping that best fits how value is created. Third, the chain of command — the line of authority from upper levels to the lowest, clarifying who reports to whom — along with authority (line authority directs the work of employees, staff authority supports and advises), responsibility (the obligation to perform assigned duties), and unity of command (each person reports to only one manager). Fourth, the span of control — the number of employees a manager can efficiently and effectively manage; the traditional view capped it at five or six, while the contemporary view holds there is no magic number; the 4,096-employee example shows a span of 8 instead of 4 eliminates two levels and nearly 800 managers, so wider spans flatten and cheapen structures. Fifth, centralization versus decentralization — whether decision making is concentrated at upper levels or pushed down to lower-level employees; stable environments, minor decisions, and crisis favor centralization, while complex environments, capable and willing lower-level managers, significant decisions, and geographic dispersion favor decentralization. Sixth, formalization — how standardized jobs are and how far rules and procedures guide behavior; traditional management favored high formalization, but today's view allows more discretion. Together, the six choices produce the overall character of the structure — mechanistic when specialization, rigidity, narrow spans, centralization, and formalization are high; organic when the opposite holds.",
          tier: "easy"
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
          model: "The mechanistic organization is the natural endpoint of tight design choices: high specialization, rigid departmentalization, a clear chain of command, narrow spans of control, centralization, and high formalization. The organic organization is its mirror image: cross-functional and cross-hierarchical teams, a free flow of information, wide spans of control, decentralization, and low formalization. Neither is inherently superior; three contingency factors decide. Strategy comes first: a structure should facilitate goal achievement, and because goals flow from strategy, strategy and structure are closely linked — research shows certain structural designs work best with particular organizational strategies, so a change in strategy typically demands a change in structure. Size matters next: larger organizations tend to be more mechanistic, but the relationship weakens past a threshold — at around 2,000 employees an organization is already fairly mechanistic, and adding another 500 employees will not change it much. Environmental uncertainty completes the picture: in stable and simple environments mechanistic designs can be more effective, while the greater the uncertainty, the more the organization needs the flexibility of an organic design — echoing Week 3's uncertainty matrix. The overall lesson is contingency thinking: managers should read their strategy, size, and environment and choose the structural profile that fits, rather than seeking one best structure for all situations.",
          tier: "medium"
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
          model: "The simple structure suits young, small organizations: it is fast, flexible, and inexpensive to maintain, with clear accountability concentrated near the owner-manager. Its weaknesses surface with success — it is not appropriate as the organization grows, and reliance on one person is risky. The functional structure groups similar specialties together and earns cost-saving advantages from specialization: economies of scale, minimal duplication of people and equipment, and employees grouped with others holding similar tasks. Its limitation is parochialism — the pursuit of functional goals can cause managers to lose sight of what is best for the overall organization, and functional specialists become insulated, understanding little of what other units do. The divisional structure organizes around products, services, or markets; its strength is a focus on results, since division managers are responsible for what happens to their products and services, but it duplicates activities and resources across divisions, increasing costs and reducing efficiency. When work is temporary and cross-functional, the matrix structure becomes attractive: specialists from different functional departments are assigned to one or more projects, gaining flexibility at the price of dual reporting lines that strain unity of command. When project work is not the exception but the business itself, the project structure — in which employees continuously work on projects — removes the dual hierarchy altogether. The progression reflects contingency logic: growth outgrows the simple structure, stable efficiency favors functional forms, diversified results-accountability favors divisions, and dynamic, cross-disciplinary work favors matrix and project designs.",
          tier: "hard"
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
          ],
          check: {
            q: "The three activity groups of the HRM process are best summarized as:",
            o: [
              "Hiring competent employees, providing skills and knowledge, and retaining them",
              "Planning, organizing, and controlling",
              "Recruiting, advertising, and budgeting",
              "Strategy, structure, and culture"
            ],
            a: 0,
            e: "The HRM process groups its activities into hiring (identifying and selecting), developing (skills and knowledge), and retaining competent, high-performing employees."
          }
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
          ],
          check: {
            q: "A selection device that consistently measures the same thing but does not predict job performance lacks:",
            o: [
              "Validity",
              "Reliability",
              "Recruitment",
              "Decruitment"
            ],
            a: 0,
            e: "Consistency is reliability; predicting a job-related criterion is validity. A device that does not predict performance lacks validity and should not be used."
          }
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
          ],
          check: {
            q: "Pairing a new employee with an experienced colleague who guides them on the job is an example of:",
            o: [
              "On-the-job training (coaching/mentoring)",
              "Off-the-job classroom instruction",
              "Performance appraisal",
              "Decruitment"
            ],
            a: 0,
            e: "Coaching and mentoring on the job are on-the-job training methods that build skills in the real work setting."
          }
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
          ],
          check: {
            q: "Which lever is most clearly aimed at retaining competent, high-performing employees?",
            o: [
              "Career development and equitable rewards",
              "Writing job specifications",
              "Running recruitment ads",
              "Conducting a job analysis"
            ],
            a: 0,
            e: "Retention focuses on keeping good people through development, recognition, and fair, competitive rewards; the other options are hiring-stage activities."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What is human resource management (HRM)?",
          o: [
            "The process of acquiring, training, motivating, and retaining a competent workforce",
            "The set of laws that protect employees from discrimination",
            "The accounting function that calculates payroll and benefits",
            "The strategy department that sets a firm's competitive direction"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Anti-discrimination law is an external constraint on HRM, not the definition of it.",
            "Payroll is one administrative task, but HRM is far broader than calculating pay.",
            "Setting competitive direction is strategic management, not HRM."
          ],
          e: "HRM is the management function concerned with getting, training, motivating, and keeping competent employees so the organization can perform."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which activity is part of the 'hiring' group of the HRM process?",
          o: [
            "Selection",
            "Performance appraisal",
            "Compensation",
            "Career development"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Performance appraisal is part of developing/retaining employees, not hiring.",
            "Compensation is a retention activity, not hiring.",
            "Career development belongs to the developing group, not hiring."
          ],
          e: "Recruitment, decruitment, and selection make up the hiring (identifying and selecting competent employees) group of HRM activities."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What does 'recruitment' refer to in the HRM process?",
          o: [
            "Locating, identifying, and attracting capable applicants",
            "Reducing an organization's workforce",
            "Evaluating an employee's job performance",
            "Training new hires on company policy"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Reducing the workforce is decruitment, the opposite of recruitment.",
            "Evaluating performance is appraisal, a developing/retaining activity.",
            "Training is orientation/development, which happens after recruitment and selection."
          ],
          e: "Recruitment is the process of locating, identifying, and attracting a pool of capable job applicants."
        },
        {
          type: "fill",
          tier: "easy",
          q: "A job _____ is a written statement describing the duties, conditions, and responsibilities of a job.",
          o: [],
          a: 0,
          accept: [
            "description",
            "job description"
          ],
          h: [
            "It is the output of job analysis that describes the job itself, not the person.",
            "Distinguish it from the 'specification,' which describes the person needed."
          ],
          e: "A job description is a written statement of what a jobholder does, how it is done, and why; the job specification lists the qualifications a person needs to do it."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Reducing an organization's workforce, for example through layoffs, is called _____.",
          o: [],
          a: 0,
          accept: [
            "decruitment"
          ],
          h: [
            "It is the opposite of recruitment.",
            "It is the term for techniques like layoffs, attrition, and early retirement."
          ],
          e: "Decruitment is the set of techniques for reducing the labor supply within an organization when there are too many employees."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The assessment of an employee's job performance against standards is called performance _____.",
          o: [],
          a: 0,
          accept: [
            "appraisal",
            "appraisals",
            "evaluation",
            "evaluations"
          ],
          h: [
            "It is a key activity in developing and retaining employees.",
            "It compares actual performance to set standards."
          ],
          e: "Performance appraisal (or performance evaluation) is the formal assessment of how well an employee is doing the job against established standards."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut firm advertises a vacancy that lists a CPA license, five years of audit experience, and fluency in Arabic and English. These criteria are drawn from the job _____.",
          o: [
            "specification",
            "description",
            "analysis report",
            "enlargement plan"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "The description lists duties and responsibilities, not the qualifications a person must have.",
            "Job analysis is the procedure used to produce both documents, not the document listing qualifications.",
            "Job enlargement is a redesign technique, not a hiring document."
          ],
          e: "A job specification states the minimum qualifications a person must possess to perform a job successfully, so the listed credentials come from it."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "During Lebanon's crisis, an NGO must shrink its staff but wants to avoid layoffs. Which decruitment option best fits this goal?",
          o: [
            "Attrition (not filling openings created by resignations or retirements)",
            "Immediate involuntary terminations",
            "Mandatory pay cuts for all employees",
            "Mandatory overtime for remaining staff"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Involuntary termination is exactly the layoff the NGO wants to avoid.",
            "Pay cuts reduce cost but are a compensation action, not a decruitment method that reduces headcount.",
            "Overtime increases output from existing staff but does not reduce the workforce."
          ],
          e: "Attrition shrinks the workforce gradually by not replacing those who leave voluntarily, avoiding direct layoffs."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A manager rates every employee at the exact midpoint of the scale to avoid conflict. This rating error is best described as:",
          o: [
            "Central tendency error",
            "Halo effect",
            "Recency error",
            "Leniency error"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "The halo effect is letting one trait color the whole rating, not clustering everyone in the middle.",
            "Recency error is over-weighting recent events, not clustering at the midpoint.",
            "Leniency is rating everyone high, not everyone in the middle."
          ],
          e: "Central tendency error is the tendency to rate all employees around the average, avoiding the extremes of the scale."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A selection tool's ability to predict an important job-related criterion, such as future performance, is called its _____.",
          o: [],
          a: 0,
          accept: [
            "validity",
            "predictive validity"
          ],
          h: [
            "It is distinct from reliability, which is about consistency.",
            "It asks whether the test actually measures what it claims to predict."
          ],
          e: "Validity is the proven relationship between a selection device and some relevant criterion; without it, a selection tool should not be used."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A realistic job _____ gives applicants both favorable and unfavorable information about the job to reduce early turnover.",
          o: [],
          a: 0,
          accept: [
            "preview",
            "realistic job preview",
            "rjp"
          ],
          h: [
            "The keyword is 'realistic' — it sets accurate expectations.",
            "It deliberately includes the negatives, not just the positives."
          ],
          e: "A realistic job preview (RJP) provides honest positive and negative information so applicants form accurate expectations, lowering turnover among those who stay."
        },
        {
          type: "fill",
          tier: "medium",
          q: "On-the-job methods such as job rotation, mentoring, and coaching are all forms of employee _____.",
          o: [],
          a: 0,
          accept: [
            "training",
            "development",
            "training and development"
          ],
          h: [
            "It is the HRM activity aimed at building skills and knowledge.",
            "These are delivery methods for it, distinct from selection."
          ],
          e: "Training (employee development) builds the skills and knowledge employees need; job rotation, mentoring, and coaching are common on-the-job training methods."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A bank uses a personality test whose scores are highly consistent from one administration to the next, but employees who score well are no better at the job than those who score poorly. The test is:",
          o: [
            "Reliable but not valid",
            "Valid but not reliable",
            "Both reliable and valid",
            "Neither reliable nor valid"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "A test cannot be valid for predicting performance if its scores are unrelated to performance.",
            "Consistent scores establish reliability, so 'neither' is too strong here.",
            "If scores don't predict performance there is no demonstrated validity, so 'both' is wrong."
          ],
          e: "Consistency across administrations is reliability; since the scores do not predict job performance, the test lacks validity. A reliable test can still be useless."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "During hyperinflation, a firm's fixed lira salaries lose real value monthly and top performers are emigrating. From an HRM-retention standpoint, which response best addresses the root cause?",
          o: [
            "Index compensation to a stable benchmark and add non-monetary retention levers like development and flexibility",
            "Tighten the selection process to hire only highly skilled applicants",
            "Increase the frequency of performance appraisals",
            "Expand the recruitment advertising budget"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Better selection fills seats but does nothing about why current high performers are leaving.",
            "More frequent appraisals do not restore the eroded real value of pay.",
            "More recruiting treats the symptom (vacancies) while ignoring why people quit."
          ],
          e: "Retention requires addressing why valued employees leave; indexing pay to protect real value plus non-monetary levers tackles the cause, whereas recruiting or appraising more does not."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A company's hiring test screens out a much higher proportion of one protected group than others, even though it is administered identically to all. The central HRM concern this raises is:",
          o: [
            "Adverse (disparate) impact, requiring proof the test is job-related",
            "Low inter-rater reliability of the test",
            "A halo effect among the interviewers",
            "Excessive central tendency in the scoring"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "Reliability is about score consistency, not unequal selection rates across groups.",
            "The halo effect concerns one rater's biased judgment, not group-level selection rates.",
            "Central tendency is a rating-distribution error, unrelated to disparate group outcomes."
          ],
          e: "When a neutral-looking device disproportionately screens out a protected group, it creates adverse impact, and the employer must show the device is valid and job-related."
        },
        {
          type: "fill",
          tier: "hard",
          q: "An interviewer lets a candidate's single impressive trait, such as confidence, dominate the entire evaluation. This rating distortion is the _____ effect.",
          o: [],
          a: 0,
          accept: [
            "halo",
            "halo effect"
          ],
          h: [
            "One favorable trait casts a glow over all the other judgments.",
            "It is distinct from central tendency and recency errors."
          ],
          e: "The halo effect occurs when a general impression or one outstanding trait influences the rating of all other, unrelated characteristics."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A pay system in which a portion of an employee's compensation is tied directly to performance measures is called _____ pay.",
          o: [],
          a: 0,
          accept: [
            "variable",
            "performance-based",
            "performance based",
            "pay-for-performance",
            "incentive"
          ],
          h: [
            "The pay rises and falls with results rather than staying fixed.",
            "It is the umbrella term covering piece-rate, bonuses, and gainsharing."
          ],
          e: "Variable (pay-for-performance) plans make part of compensation contingent on individual, team, or organizational performance, linking rewards to results."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The proportion of an organization's workforce that leaves and must be replaced, a key signal that retention is failing, is the _____ rate.",
          o: [],
          a: 0,
          accept: [
            "turnover",
            "employee turnover",
            "voluntary turnover"
          ],
          h: [
            "It measures how many employees leave over a period.",
            "High levels of it among top performers are the warning sign retention aims to reduce."
          ],
          e: "The turnover rate measures the rate at which employees leave and must be replaced; rising voluntary turnover among high performers signals a retention problem."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Staffing the Generator Cooperative",
          scenario: "After repeated EDL blackouts, a group of neighborhoods in Tripoli forms 'Nour Co-op' to run a shared private generator (ishtirak) network, selling metered amperage to households. The co-op needs to hire its first six employees: two generator technicians, two meter-reading collectors, an accountant, and a customer-service coordinator. The founder, Rania, has never hired anyone formally. She knows roughly what each role should do but has not written anything down, and she is unsure how to decide which applicants are qualified, especially when dozens apply for each metered-collector job amid high unemployment.",
          qs: [
            {
              q: "What should Rania produce before posting the vacancies, and how do its two outputs differ?",
              a: "She should conduct a job analysis for each role and produce two documents. A job description states the duties, responsibilities, and conditions of each job (for example, what a meter collector does day to day), while a job specification states the minimum qualifications a person needs to perform it (such as numeracy, a driver's license, or technical certification for the generator technician). Together they let her recruit and select against clear, job-related criteria."
            },
            {
              q: "Which group of the HRM process is Rania currently in, and what activities does it include?",
              a: "She is in the hiring group — identifying and selecting competent employees. Its activities are recruitment (attracting a pool of capable applicants, which she has through the many applicants), and selection (screening to decide who is hired). Because many people are applying, her main task is building valid selection criteria, not generating more applicants."
            },
            {
              q: "With far more applicants than openings, what selection principle should guide Rania's screening tools?",
              a: "Her selection devices should be both reliable and valid: reliable so they yield consistent results, and valid so scores actually predict success on the specific job. For instance, a short numeracy and cash-handling test for collectors is job-related and predictive, whereas screening on unrelated traits would be invalid and could unfairly exclude capable applicants."
            }
          ]
        },
        {
          tier: "medium",
          title: "Training the New Tellers at Cedar Sarrafa",
          scenario: "A licensed money-exchange house in Hamra, 'Cedar Sarrafa,' is expanding because of constant demand to convert between lollars (trapped bank deposits), fresh dollars (cash), and lira at rates that move several times a day. It hires eight new tellers, most of them recent graduates with no exchange experience. They must learn AML/KYC compliance and BDL circular rules, how to quote and reprice rates intraday, and how to detect counterfeit notes. Management is debating whether to train them through a one-week classroom seminar, by pairing each new teller with an experienced one on the counter, or some mix.",
          qs: [
            {
              q: "Distinguish the on-the-job and off-the-job training options facing Cedar Sarrafa and give one strength of each.",
              a: "Pairing new tellers with experienced ones is on-the-job training (coaching/mentoring): its strength is that learning happens in the real work context with immediate, realistic feedback and low setup cost. The one-week seminar is off-the-job training (classroom/lecture): its strength is delivering structured knowledge — AML rules and BDL circulars — consistently to everyone at once without disrupting the live counter."
            },
            {
              q: "Why is a needs assessment important before designing this training, given the firm's environment?",
              a: "A needs assessment identifies the specific gaps between what employees can currently do and what the job requires, so training targets real deficiencies rather than generic content. Because rates reprice intraday and circulars change, the assessment would reveal that compliance knowledge and rapid repricing are the critical skill gaps, ensuring the program is built around them instead of wasting scarce resources on areas the graduates already know."
            },
            {
              q: "Which mix would you recommend and how does it map to the 'developing employees' group of the HRM process?",
              a: "A blended approach fits best: a short classroom module for compliance and counterfeit detection (knowledge that must be uniform and accurate), followed by supervised on-the-job coaching for live repricing and customer handling. This sits in the developing-employees group of HRM, whose purpose is to provide the skills and knowledge employees need to perform now and adapt as conditions — and circulars — change."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Appraisal Dispute at Levant Logistics",
          scenario: "Levant Logistics moves goods across Lebanon despite fuel queues and currency swings. Its branch manager, Karim, runs annual appraisals to decide who gets the firm's scarce fresh-dollar bonuses. This year drivers complain the ratings are unfair: Karim scored everyone near 'meets expectations' except one charismatic driver he rated 'outstanding' on every dimension after a single dramatic on-time delivery last month. Several reliable veteran drivers, whose steady year-round performance kept routes running through the worst shortages, received only average marks. Two of them have since accepted offers from a Gulf-based carrier. HR has asked Karim to overhaul the system.",
          qs: [
            {
              q: "Identify the specific appraisal errors visible in Karim's ratings and explain each.",
              a: "Three errors appear. Central tendency error: clustering most drivers near 'meets expectations' avoids the extremes and fails to differentiate performers. Halo effect: rating the charismatic driver 'outstanding' on every dimension based on one impression lets a single trait or event color all judgments. Recency error: weighting last month's dramatic delivery over a full year of performance over-emphasizes recent events. Together these make the appraisal neither a fair nor a valid basis for allocating bonuses."
            },
            {
              q: "How might these appraisal flaws be driving the turnover of valued veteran drivers, in HRM terms?",
              a: "Retention of high performers depends partly on perceived equity — that rewards track real contribution. The veterans delivered steady performance that kept the firm running, yet the flawed appraisal gave them only average marks and denied them scarce bonuses, signaling that their contribution is unseen. Perceiving the process as inequitable, and holding scarce, marketable skills, they exit to the Gulf carrier — a direct retention failure rooted in an invalid appraisal."
            },
            {
              q: "Recommend concrete changes to make the appraisal more reliable and valid, and justify them.",
              a: "Karim should appraise against specific, job-related behavioral criteria (for example on-time rate, safety, fuel discipline across the year) rather than a single overall impression, which reduces halo and central-tendency errors. Keeping a running performance log throughout the year counters recency error. Using multiple data sources or raters, and clear anchored rating scales, improves reliability (consistency) and validity (the ratings predict and reflect actual job performance), so bonus decisions rest on defensible, equitable evidence."
            }
          ]
        },
        {
          tier: "hard",
          title: "Retention Under Capital Controls at Arz Software",
          scenario: "Arz Software in Beirut builds payment apps and is one of the rare firms still earning revenue in fresh dollars from foreign clients. Its 40 engineers are highly skilled and globally marketable; recruiters from Dubai and Europe contact them weekly. Salaries are paid partly in fresh dollars, but the firm cannot match Gulf cash offers. Informal benefits — remote work, paying engineers' private generator subscriptions, covering fuel, mentoring, and a clear promotion ladder — have kept most people so far. But the CEO learns three senior engineers resigned last quarter, all citing 'no growth path' rather than pay, and a fourth left after a manager publicly took credit for her project. The board wants a data-driven retention strategy, not just another raise.",
          qs: [
            {
              q: "Why is retention, rather than recruitment or selection, the binding HRM constraint for Arz, and what is the risk of treating it as a pay problem alone?",
              a: "The engineers are already hired and competent, and replacing globally marketable talent in a thin local market is slow and costly, so the firm's value depends on keeping its current high performers — the retention group of the HRM process. Treating it purely as pay is risky because the firm cannot win a cash bidding war with the Gulf, and the cited reasons — lack of growth and unfair credit — are non-monetary, so raises alone would burn scarce fresh dollars without fixing why people actually leave."
            },
            {
              q: "Using the resignation reasons given, design a retention approach that goes beyond compensation, mapping each lever to the cause it addresses.",
              a: "The 'no growth path' resignations call for career development: a transparent promotion ladder, mentoring, and skill-building assignments that give engineers a future inside the firm. The engineer who left after losing credit points to recognition and fairness: visible attribution of work, manager accountability, and equitable performance appraisal so contribution is seen and rewarded. The generator, fuel, and remote-work benefits already address quality-of-life retention amid the EDL and currency crisis and should be preserved as differentiators the Gulf cash offer does not include."
            },
            {
              q: "How can Arz make its retention strategy 'data-driven' as the board asks, and what HRM measures would it track?",
              a: "Arz should treat retention as something to measure and manage, not guess. It can run exit interviews and stay interviews to surface real drivers of leaving and staying, and track metrics such as voluntary turnover rate (especially among high performers), time-in-role to promotion, internal-promotion rate, and engagement survey scores. Linking these measures to interventions — and watching whether turnover among top engineers falls after improving the growth path and recognition — turns retention from anecdote into a managed, evidence-based HRM outcome."
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
          model: "The HRM process exists to ensure an organization has qualified people to perform all the work, through eight activities in three major groups. The first group identifies and selects competent employees: human resource planning ensures the right number and kinds of capable people in the right places at the right times (by assessing current human resources and meeting future needs); recruitment locates, identifies, and attracts capable applicants — or, when the workforce must shrink, decruitment reduces it; and selection screens applicants so the most appropriate candidates are hired, using devices that must be valid and reliable. The second group provides employees with up-to-date knowledge and skills: orientation introduces the new employee to the job and the organization (work unit and organization orientation), and training builds capability across types ranging from onboarding and interpersonal skills to industry-specific, IT, customer service, and mandatory compliance training; employee development extends this by preparing people for future roles rather than the current job. The third group retains competent, high-performing employees: performance management provides feedback used for improvement and for compensation and promotion decisions; compensation and benefits (including skill-based and variable pay) reward contribution; and career development supports progression. The process is not freestanding: future HR needs are determined by the organization's mission, goals, and strategies, so HRM implements strategy through people, and the entire process operates within the external environment, which shapes labor supply, expectations, and legal constraints.",
          tier: "easy"
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
          model: "Selection means screening job applicants to ensure the most appropriate candidates are hired, and the lecture frames it as prediction: a selection decision succeeds when you hire an applicant who turns out to be a good employee or reject one who would have been a bad one. Prediction imposes two technical requirements on any selection device. Reliability asks whether the device measures the same thing consistently: if the same applicant scores very differently on different occasions, the scores are noise, and nothing can be predicted from noise — hence an unreliable test is useless. Validity asks whether there is a proven relationship between the selection device and some relevant criterion, typically success on the job. Reliability alone does not guarantee this: a test can yield perfectly stable scores while measuring something irrelevant to performance — consistently measuring the wrong thing. Such a test is reliable but invalid, and therefore equally useless for prediction (and potentially harmful, since it systematically screens on an irrelevant attribute). The statement is thus correct: reliability is necessary but not sufficient, and validity is the decisive property — but validity itself presupposes reliability, since an unstable measure cannot maintain a proven relationship with any criterion. The practical lesson is that organizations should demand evidence of both properties — not vendor claims — before letting a device decide who joins the workforce.",
          tier: "medium"
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
          model: "Retaining competent, high-performing employees is the third group of HRM activities, built on performance management, compensation and benefits, and career development. Performance appraisal provides job feedback that can improve performance and inform compensation and promotion decisions — but many companies have learned that the annual review is not timely enough to make an impact; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance. Technology now makes such immediacy possible: electronic performance monitoring uses electronic instruments to collect, store, analyze, and report individual or group performance — in call centers, supervisors track workflow in real time through metrics like average call handling time, total calls handled, and time on breaks. Continuous data can feed continuous feedback, though it also intensifies supervision, so organizations must use it to develop rather than merely to police. On the reward side, pay can be designed to retain and motivate: skill-based pay rewards employees for the job skills they can demonstrate, encouraging versatility, while variable pay makes compensation contingent on performance, tying rewards to contribution. What people are paid reflects many factors — the employee's tenure and performance, the kind of job and industry, company size and profitability, whether the business is labor or capital intensive, management's philosophy toward pay, geographic location, and unionization — and organizations face live design debates between bonuses and annual raises, pay secrecy and transparency, and the right menu of benefit options. Finally, development activities that prepare employees for future roles (as in Microsoft's portfolio of development programs) give high performers a reason to build their future inside the organization rather than outside it.",
          tier: "hard"
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
          ],
          check: {
            q: "Why do Robbins and Coulter argue that managers must accept change as an ongoing reality?",
            o: [
              "Because the external and internal forces acting on organizations are constant, making change inevitable",
              "Because change only happens when a new CEO is hired",
              "Because stable organizations never need to adapt",
              "Because change is always cheaper than stability"
            ],
            a: 0,
            e: "Both external forces (economy, technology, competition, regulation) and internal forces (strategy, workforce, equipment) continually push organizations to change, so managing change is a permanent part of a manager's job."
          }
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
          ],
          check: {
            q: "A company digitizes its filing and installs new accounting software. Which type of change is this best classified as?",
            o: [
              "A structural change",
              "A technology change",
              "A change in the external environment",
              "A culture change"
            ],
            a: 1,
            e: "Introducing new software, equipment, or automated work methods is a technology change, one of the classic targets alongside structure and people."
          }
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
          ],
          check: {
            q: "Which of the following is an example of implicit or deferred resistance rather than overt resistance?",
            o: [
              "An employee files a formal written complaint the day the change is announced",
              "Workers immediately go on strike against the new policy",
              "Loyalty gradually drops and absenteeism rises weeks after the change",
              "An employee openly argues against the plan in the meeting"
            ],
            a: 2,
            e: "Implicit/deferred resistance is covert and delayed, showing up as reduced loyalty, more absenteeism, or slowdowns, which makes it harder to detect than overt, immediate resistance."
          }
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
          ],
          check: {
            q: "What is the key difference between Lewin's three-step model and Kotter's 8-step model?",
            o: [
              "Lewin's model rejects the idea of stabilizing change, while Kotter's does not",
              "Kotter's model provides a more detailed, sequential roadmap, while Lewin's gives a simpler unfreeze-change-refreeze framework",
              "Kotter's model has no step for creating urgency",
              "Lewin's model is only for technology change and Kotter's only for people change"
            ],
            a: 1,
            e: "Both models guide planned change, but Lewin offers a simple three-phase framework (unfreeze, change, refreeze) while Kotter expands the process into eight concrete, sequential steps from establishing urgency to anchoring change in the culture."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In management, 'organizational change' is best defined as:",
          o: [
            "Any alteration of an organization's people, structure, or technology",
            "A reduction in the number of employees during a downturn",
            "The annual review of the company's financial statements",
            "The hiring of a new chief executive officer"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "That's downsizing, a specific outcome, not the general definition of change.",
            "That's financial reporting, an ongoing routine, not change itself.",
            "Leadership succession is one trigger, but change is broader than a single hire."
          ],
          e: "Robbins and Coulter define organizational change as any alteration of an organization's people, structure, or technology."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "A 'change agent' is someone who:",
          o: [
            "Resists any disruption to the existing way of working",
            "Acts as a catalyst for and assumes responsibility for managing the change process",
            "Audits the organization's compliance with the law",
            "Only exists outside the organization as a hired consultant"
          ],
          a: 1,
          h: [
            "That describes a resister, the opposite of a change agent.",
            "Right idea — that's the one.",
            "That's a compliance auditor, a different role.",
            "Change agents can be internal managers as well as external consultants."
          ],
          e: "A change agent is a person who acts as a catalyst and assumes responsibility for managing the change process; they may be a manager inside the firm or an outside consultant."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "According to the 'calm waters' versus 'white-water rapids' metaphors, the white-water rapids view assumes:",
          o: [
            "Change is a rare, occasional interruption to a stable system",
            "The organization is a large ship on a calm, predictable sea",
            "Change is constant and managing it is a continual process",
            "Managers can fully freeze a change before moving on"
          ],
          a: 2,
          h: [
            "That is the calm-waters view, not white-water rapids.",
            "The big ship on calm seas is the calm-waters metaphor, not white-water rapids.",
            "Right idea — that's the one.",
            "Refreezing belongs to the calm-waters view, not white-water rapids."
          ],
          e: "The white-water rapids metaphor treats the environment as uncertain and dynamic, so change is constant and managing it is an ongoing process rather than an occasional event."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Lewin's three-step change model is: unfreezing, changing (moving), and _____.",
          o: [],
          a: 0,
          accept: [
            "refreezing",
            "refreeze",
            "re-freezing",
            "re-freeze",
            "refreezing the change"
          ],
          h: [
            "It is the final step that stabilizes the new state.",
            "Think of the opposite of the first step, 'unfreezing'."
          ],
          e: "Lewin's third step is refreezing, which stabilizes the new situation by reinforcing the changed behavior so it does not revert."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The forces that push behavior toward the status quo and away from change are called _____ forces in Lewin's force-field model.",
          o: [],
          a: 0,
          accept: [
            "restraining",
            "restraining forces",
            "resistance",
            "resisting",
            "restraint"
          ],
          h: [
            "They oppose the 'driving' forces that push for change.",
            "Lewin paired them against driving forces."
          ],
          e: "Restraining forces hinder movement away from the status quo; change occurs when driving forces exceed restraining forces."
        },
        {
          type: "fill",
          tier: "easy",
          q: "A planned change in the way work is performed, often introducing new equipment, tools, or automation, is an example of changing the organization's _____.",
          o: [],
          a: 0,
          accept: [
            "technology",
            "tech",
            "technology and systems",
            "work methods"
          ],
          h: [
            "It is one of the three classic targets of change alongside people and structure.",
            "Think of equipment, automation, and work processes."
          ],
          e: "Changing technology involves modifications to work methods, equipment, or automation used to do the work."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut accounting firm replaces its old desktop ledger software with a cloud platform so staff can work during EDL outages from home. The partners are primarily changing the organization's:",
          o: [
            "Structure, by redrawing the reporting hierarchy",
            "Technology, by altering work methods and tools",
            "Culture, by changing shared values",
            "People's attitudes, through counseling"
          ],
          a: 1,
          h: [
            "No reporting lines or departments were redrawn here.",
            "Right idea — adopting new software changes work methods and tools.",
            "Shared values were not the target of this move.",
            "No attitude-focused intervention is described."
          ],
          e: "Swapping ledger software for a cloud platform alters the tools and methods used to do the work, which is a technology change."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A bank manager announces that all departments will merge into two and several supervisory layers will be removed to cut costs amid the crisis. This is primarily a change in:",
          o: [
            "Technology",
            "Structure",
            "People",
            "The external environment"
          ],
          a: 1,
          h: [
            "No new tools or automation were introduced.",
            "Right idea — merging departments and removing layers changes structural components.",
            "No attitudes, skills, or expectations were directly targeted.",
            "The environment is a driver here, not the thing being changed."
          ],
          e: "Altering departmentalization, the chain of command, or the number of management layers is a structural change."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "During capital controls, a firm rolls out a training program to shift employees from a blame-oriented mindset to shared problem-solving about cash flow. The change agent is best targeting:",
          o: [
            "The chain of command",
            "The organization's technology",
            "People — their attitudes, expectations, and behavior",
            "The span of control"
          ],
          a: 2,
          h: [
            "No reporting relationships are being redrawn.",
            "No new tools or automation are introduced.",
            "Right idea — attitudes, expectations, and behaviors are people-focused targets.",
            "Span of control is a structural variable, not the focus here."
          ],
          e: "Changing people means helping employees change their attitudes, perceptions, expectations, and behavior, which is exactly what the mindset training targets."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When employees resist a new payroll system because they fear they lack the skills to use it, the manager can best reduce this resistance by combining education and _____.",
          o: [],
          a: 0,
          accept: [
            "communication",
            "communicating",
            "education and communication"
          ],
          h: [
            "It is the first of the classic resistance-reduction tactics, paired with education.",
            "Telling people the logic of the change reduces fear of the unknown."
          ],
          e: "Education and communication reduce resistance rooted in misinformation or poor understanding by helping employees see the logic of the change."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A manager who lets affected staff help design a new shift schedule so they feel ownership is using the resistance-reduction tactic called _____.",
          o: [],
          a: 0,
          accept: [
            "participation",
            "involvement",
            "participation and involvement"
          ],
          h: [
            "People rarely resist a decision they helped make.",
            "It builds commitment by giving employees a voice."
          ],
          e: "Participation involves bringing those affected into the change decision, which increases commitment and reduces resistance."
        },
        {
          type: "fill",
          tier: "medium",
          q: "In Kotter's 8-step model, the very first step a leader must accomplish is to establish a sense of _____.",
          o: [],
          a: 0,
          accept: [
            "urgency",
            "crisis",
            "urgency or crisis",
            "sense of urgency"
          ],
          h: [
            "It answers 'why must we change now?'",
            "Kotter says skipping it dooms transformation."
          ],
          e: "Kotter's first step is establishing a sense of urgency, giving people a compelling reason to act now."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A factory owner pushes through a wage-payment change from lollars to fresh dollars in one weekend by decree, gets immediate compliance, then moves on to other problems. Six weeks later the old informal cash arrangements have crept back. From Lewin's model, the most precise diagnosis is that the owner:",
          o: [
            "Failed to unfreeze, so employees never accepted the need to change",
            "Over-communicated, creating change fatigue",
            "Never refroze the change, so it was not stabilized into the new norm",
            "Used participation when coercion was required"
          ],
          a: 2,
          h: [
            "Compliance did occur initially, so the unfreeze/move steps partly worked.",
            "Nothing suggests excessive communication; the decree was abrupt.",
            "Right idea — without refreezing, gains erode and old behavior returns.",
            "The issue is durability after the move, not the choice of tactic at the start."
          ],
          e: "The change was implemented but not reinforced; without refreezing to stabilize the new behavior, the system reverted to the old equilibrium."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two managers face identical resistance to a new cost-cutting structure. Manager A uses manipulation and co-optation (giving a key resister a symbolic seat on the committee); Manager B uses negotiation (a one-time bonus). Which critique is most defensible?",
          o: [
            "Both tactics are always unethical and should never be used",
            "Manipulation/co-optation is fast and cheap but risks backlash if discovered, while negotiation is costly and may invite others to bargain",
            "Negotiation guarantees lasting commitment better than any other tactic",
            "Co-optation is identical to genuine participation"
          ],
          a: 1,
          h: [
            "These tactics have legitimate, situational uses despite their downsides.",
            "Right idea — each tactic trades speed/cost against credibility and precedent risks.",
            "Negotiation buys compliance, not necessarily deep commitment.",
            "Co-optation only gives the appearance of involvement, unlike real participation."
          ],
          e: "Manipulation and co-optation are quick and inexpensive but can backfire badly if seen as a trick; negotiation can defuse strong resistance but is expensive and may set a precedent that others exploit."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A CEO claims to have completed a culture change because the new value statements are posted on every wall and people stopped objecting in meetings. The strongest reason to doubt the change is real is that:",
          o: [
            "Culture change is impossible in any organization",
            "Absence of voiced objection can mask deep underlying resistance, and posted values are artifacts, not the shared assumptions that define culture",
            "Posting values is the only valid measure of culture",
            "Culture changes instantly once leaders announce new values"
          ],
          a: 1,
          h: [
            "Culture can change, but it is the slowest and hardest target.",
            "Right idea — silence is not commitment, and slogans are surface artifacts, not deep shared assumptions.",
            "Artifacts are the most superficial layer, not proof of changed beliefs.",
            "Deep culture change is gradual, not instantaneous."
          ],
          e: "Culture is rooted in deeply held shared values and assumptions; visible artifacts like posters and the mere absence of open objection do not prove the underlying beliefs and behaviors have actually shifted."
        },
        {
          type: "fill",
          tier: "hard",
          q: "Resistance that is deferred and surfaces long after the change, or that accumulates and explodes over a minor incident, is described by Robbins as resistance whose impact is hidden because the response is _____ rather than overt and immediate.",
          o: [],
          a: 0,
          accept: [
            "implicit",
            "deferred",
            "covert",
            "implicit or deferred",
            "implicit and deferred",
            "hidden"
          ],
          h: [
            "It is contrasted with 'overt and immediate' resistance.",
            "Loyalty drops, absenteeism, and slowdowns are its quiet signs."
          ],
          e: "Implicit or deferred resistance (e.g., loss of loyalty, increased errors or absenteeism) is harder to recognize and may surface well after the change, making it more dangerous than overt, immediate resistance."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A leader who treats every market shock as an isolated emergency to be 'frozen' after each fix is using the calm-waters mindset; a rival who builds continuous adaptation into daily operations is instead operating under the _____ metaphor better suited to today's turbulent environment.",
          o: [],
          a: 0,
          accept: [
            "white-water rapids",
            "white water rapids",
            "whitewater rapids",
            "white-water",
            "white water",
            "rapids"
          ],
          h: [
            "It pictures a raft on a fast, unpredictable river.",
            "It assumes change is constant rather than episodic."
          ],
          e: "The white-water rapids metaphor frames change as continuous and uncertain, matching dynamic environments where managers cannot simply fix and refreeze."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When a final analytical step asks whether a transformation will last, Kotter argues you must anchor the new approaches in the organization's _____ so they outlive the change agent.",
          o: [],
          a: 0,
          accept: [
            "culture",
            "corporate culture",
            "organizational culture",
            "company culture"
          ],
          h: [
            "It is Kotter's eighth and final step.",
            "It parallels Lewin's idea of refreezing.",
            "It is 'the way we do things around here'."
          ],
          e: "Kotter's final step is anchoring the changes in the corporate culture, which institutionalizes them so they persist after the change effort ends."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "New Tills at Beit Mery Bakery",
          scenario: "Maya owns a small bakery in Beit Mery. Before 2019 she rang up every sale on a single mechanical cash register in lira and trusted her two long-time clerks to make change by hand. With the lira collapsing and prices repricing almost daily against the dollar, the old register can no longer display the right amounts and the clerks waste minutes recalculating each order while a queue forms. Maya decides to buy two tablet point-of-sale terminals that auto-update the day's USD exchange rate and print a receipt in both fresh dollars and lira. Her clerks, who have worked the counter for fifteen years and never used a touchscreen, are visibly anxious. One mutters that 'the old way always worked fine.'",
          qs: [
            {
              q: "Identify what Maya is changing and classify it using the three classic targets of organizational change.",
              a: "Maya is primarily changing technology: she is replacing the mechanical register with tablet point-of-sale terminals, altering the tools and work methods used to complete a sale. Secondarily she is touching people, since the clerks must learn new skills and adjust their attitudes toward the touchscreens. The structure (reporting lines, departments) is unchanged."
            },
            {
              q: "What is the most likely cause of the clerks' resistance, and name one tactic Maya could use to reduce it?",
              a: "The clerks resist mainly out of fear of the unknown and a belief that they lack the skills to use a touchscreen after fifteen years on a mechanical register; habit and uncertainty drive their anxiety. Maya can use education and communication, explaining why the change is needed (daily repricing) and showing how it helps, or participation by letting the clerks practice and help set up the new workflow so they gain confidence and ownership."
            },
            {
              q: "Using Lewin's three-step model, what should Maya do after the terminals are installed and working to make sure the change sticks?",
              a: "Maya should refreeze the change by reinforcing the new behavior so it becomes the normal way of working. Practically, she can remove the old register entirely, praise the clerks when they use the terminals well, build the daily rate update into the opening routine, and keep coaching until the touchscreen workflow feels automatic, preventing a slide back to manual calculation."
            }
          ]
        },
        {
          tier: "medium",
          title: "Two Branches Become One at Cedar Pharma",
          scenario: "Cedar Pharma is a mid-size pharmaceutical distributor in Sin el Fil. The crisis cut its import volume in half, and the owner, Ziad, can no longer afford to run two parallel warehouse-and-sales branches with two branch managers, two dispatch teams, and overlapping back-office staff. He announces that the branches will merge into one operation: one branch manager will be reassigned to a non-managerial role, several supervisory positions will be eliminated, and the remaining staff will report through a single, flatter chain of command. The reassigned manager, Rania, is well-liked and has quietly told colleagues the merger is 'just an excuse to demote me.' Productivity dips, sick days rise, and Ziad notices people doing the bare minimum, though no one openly refuses to comply.",
          qs: [
            {
              q: "Which target of change is Ziad primarily altering, and what specific structural elements is he modifying?",
              a: "Ziad is primarily making a structural change. He is modifying departmentalization (merging two branches into one), the chain of command and number of management layers (removing supervisory positions and flattening reporting), and individual job assignments (reassigning Rania). These are all structural components rather than technology or people-focused changes."
            },
            {
              q: "The staff are not openly refusing, yet productivity falls and sick days rise. Diagnose this pattern using Robbins's categories of resistance.",
              a: "This is implicit and deferred resistance rather than overt, immediate resistance. Instead of openly objecting, employees express opposition through reduced effort, loss of loyalty, increased absenteeism (more sick days), and minimal compliance. Because it is covert, it is harder to detect and address than open refusal, and Rania's quiet narrative is amplifying it."
            },
            {
              q: "Recommend two resistance-reduction tactics tailored to this situation, including how Ziad should handle Rania.",
              a: "First, education and communication: Ziad should openly explain the financial necessity (import volume halved) so staff understand the merger is survival, not punishment, countering Rania's framing. Second, he could use participation or negotiation with Rania specifically, giving her a meaningful role in designing the merged operation or a face-saving title and clear responsibilities, so a respected, influential employee stops fueling covert resistance and instead models acceptance."
            }
          ]
        },
        {
          tier: "hard",
          title: "Anchoring the Cash Discipline at Litani Foods",
          scenario: "Litani Foods is a family food-processing company in Zahle. To survive hyperinflation, the new general manager, Karim, launched an urgent transformation: he declared a 'cash-first' policy requiring daily repricing, fresh-dollar-only payments to suppliers, and a strict no-credit rule for customers. In the first quarter he pushed hard, fired two managers who ignored the rule, and the numbers improved. Karim assumed the job was done. But within months he saw old habits returning: a veteran sales head quietly extended informal credit to favored clients 'like we always did,' the finance team reverted to weekly instead of daily repricing when Karim traveled, and the posted 'cash-first values' on the wall were ignored. Karim insists the culture has changed because nobody argues with him in meetings anymore. The founder's family, meanwhile, openly questions whether the harshness was necessary and feels their decades-old relationship-based way of doing business is being erased.",
          qs: [
            {
              q: "Karim claims the culture has changed because no one objects in meetings. Critically evaluate this claim using what you know about culture change and types of resistance.",
              a: "Karim is mistaking the absence of overt objection for genuine acceptance, but silence often masks implicit, deferred resistance. The reversion to informal credit, the slide back to weekly repricing when he is away, and the ignored wall posters are the real evidence: behavior has not changed, only the willingness to argue openly. Culture change is the deepest and slowest target because it rests on shared values and assumptions, not slogans; posted values are surface artifacts, so the underlying culture has clearly not been transformed."
            },
            {
              q: "Map Karim's effort onto Lewin's model and Kotter's 8 steps, and identify the specific step(s) he skipped that explain why old habits returned.",
              a: "In Lewin's terms Karim unfroze (the hyperinflation crisis created urgency) and moved (he imposed the new rules), but he never refroze, so the new state was not stabilized and reverted. In Kotter's terms he did establish urgency and acted, but he skipped the later steps: generating short-term wins broadly, consolidating gains, and especially anchoring the changes in the corporate culture (step 8). Because the new approaches were never institutionalized into routines and shared values, they could not outlive his personal enforcement and collapsed when he traveled."
            },
            {
              q: "The founder's family resists because the change erases their relationship-based way of doing business. Design a more effective change approach that addresses this resistance without abandoning the cash discipline.",
              a: "Karim should treat the family's relationship-based identity as a legitimate source of resistance, not just an obstacle, and use participation and communication rather than pure coercion. He can involve the founder's family and the veteran sales head in redesigning how 'cash-first' coexists with valued relationships, for example by creating a tightly controlled, pre-approved exception process rather than open informal credit, so clients still feel cared for. To make it stick he should refreeze and anchor the change in culture: build daily repricing into automated systems and routines, celebrate early wins, retrain and reward compliant behavior, and reframe cash discipline as protecting the family's legacy through the crisis rather than erasing it, turning resisters into co-owners of the new norm."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Generator Cooperative That Wouldn't Adapt",
          scenario: "In a dense Tripoli neighborhood, eight building owners jointly run a shared diesel generator cooperative that sells subscriptions (ishtirak) measured in amperes to about 200 households, because the national grid (EDL) delivers only a few hours a day. For years they ran it the 'calm waters' way: set the monthly amperage price once each year, freeze it, and move on. But diesel prices now swing wildly week to week with the exchange rate, fuel queues create sudden shortages, and households increasingly buy efficient inverters and solar panels, threatening demand. One young co-owner, Nadia, proposes a continuous-adaptation model: weekly price reviews tied to the fuel cost, a tiered amperage menu, an SMS rationing system during fuel shortages, and a small solar-plus-battery investment to retain customers. The older co-owners resist: they distrust the technology, fear subscribers will revolt at frequent price changes, and prefer the predictable annual cycle. Subscribers, for their part, are furious about opaque pricing and some are quietly defecting to solar.",
          qs: [
            {
              q: "Contrast the cooperative's current approach with Nadia's proposal using the 'calm waters' and 'white-water rapids' metaphors. Which fits the cooperative's environment, and why?",
              a: "The current annual-freeze approach reflects the calm-waters metaphor: it assumes the environment is stable and predictable, so the cooperative can set a price, refreeze, and only revisit it occasionally. Nadia's proposal reflects the white-water rapids metaphor, treating change as constant and building continuous adaptation (weekly reviews, dynamic rationing, ongoing investment) into daily operations. Given volatile diesel prices, erratic fuel supply, and customers actively defecting to solar, the environment is clearly turbulent and uncertain, so the white-water rapids view fits and the calm-waters approach is dangerously mismatched."
            },
            {
              q: "Analyze the older co-owners' resistance: identify at least three distinct sources of resistance and the type (overt/covert) of resistance the subscribers are showing.",
              a: "The older co-owners' resistance stems from several sources: fear of the unknown and distrust of unfamiliar technology (the solar-plus-battery and SMS systems), habit and preference for the predictable annual cycle, and uncertainty or perceived threat that frequent price changes will trigger a subscriber revolt and economic loss to themselves. The subscribers, meanwhile, are showing implicit and deferred resistance: rather than openly negotiating, they quietly defect to solar, a covert behavioral response that erodes the cooperative's customer base over time."
            },
            {
              q: "Acting as a change agent, design a phased change plan for Nadia that combines an appropriate change model with specific resistance-reduction tactics for both the co-owners and the subscribers.",
              a: "Nadia should act as a change agent and first establish urgency (Kotter step 1) by showing the co-owners hard data on defections and diesel-cost swings, then build a guiding coalition by recruiting at least one respected older owner. For the co-owners she should use education and communication plus participation, piloting weekly pricing on one building and letting skeptics help design the SMS rationing so they gain ownership and see early short-term wins. For subscribers she should use communication and a form of participation, publishing a transparent fuel-cost-to-price formula and offering a tiered amperage menu so they understand and can choose, reducing the sense of opaque, arbitrary pricing that drives defection. Finally, to avoid reverting (Lewin's refreezing / Kotter's anchoring), she should institutionalize the new model in the cooperative's bylaws and routines and reinvest early gains into solar, making continuous adaptation the cooperative's permanent way of operating."
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
          model: "Lewin's model (1947) describes change in three phases. Unfreezing prepares the organization: recognizing the need for change, determining what must change, ensuring management supports it, and managing doubts and concerns. Changing is the movement itself: planning and implementing the change while helping employees learn new concepts and perspectives. Refreezing stabilizes the result: reinforcing changes, integrating them into new ways of doing things, developing means to sustain them, and celebrating success. Kotter's 8 steps (1995) — create urgency, form a coalition, create a vision, communicate the vision, empower action, generate short-term wins, consolidate gains, and anchor in culture — map naturally onto Lewin: creating urgency, building a coalition, and creating and communicating a vision operationalize unfreezing; empowering action and generating short-term wins drive the changing phase; consolidating gains and anchoring new approaches in culture accomplish refreezing. Each framework adds something. Kotter contributes an actionable playbook: he tells the change agent specifically HOW to unfreeze (urgency plus a guiding coalition plus a communicated vision) and how to maintain momentum (engineered short-term wins). Lewin contributes the deeper logic — that organizations move from one stable state through a transition to a NEW stable state — and thus the warning both Jabal-style failures illustrate: change that is implemented but never refrozen (or, in Kotter's terms, where victory is declared before gains are consolidated and anchored) will slide back. Used together, Lewin supplies the skeleton and Kotter the muscles of a change program.",
          tier: "easy"
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
          model: "People's reactions to change run on three tracks (Elizur & Guttman, 1976): cognitive (opinions about the usefulness and necessity of the change and the knowledge to manage it), affective (feelings of satisfaction or anxiety), and instrumental (actions taken or planned). When the balance tips negative, resistance appears in two forms: active and overt — immediate, visible complaints, protests, and actions — or passive and covert — postponed and hidden, through reduced effort, mistakes, gossip, and absenteeism. The lecture identifies four root reasons: uncertainty, habit, fear of loss, and the belief that the change is inconsistent with the goals of the organization — the last being a signal worth hearing, since the resister may be right. Individually, people travel a reaction curve: Kübler-Ross' grief model traces shock, denial, frustration, depression, then experimentation, decision, and finally integration. Scott & Jaffe's resistance cycle (1988) compresses this into four stages with managerial prescriptions: in denial, make people aware of reality; in resistance, give them time to express feelings; in exploration, encourage them and let them focus; in commitment, celebrate successes. At the organizational level, six techniques reduce resistance, each fitting particular conditions. Education and communication clear up misunderstandings when resistance stems from misinformation, but fail without trust and credibility. Participation increases involvement and acceptance when resisters have expertise to contribute, but is time-consuming and can yield a poor solution. Facilitation and support help fearful, anxious resisters adjust, though they are expensive with no guaranteed success. Negotiation can buy commitment from a powerful resisting group, at potentially high cost and the risk that others demand deals too. Manipulation and co-optation, and coercion, are inexpensive and easy ways to win endorsement from powerful groups — but they can backfire, undermine the change agent's credibility, and coercion may even be illegal. Effective change managers therefore diagnose first — what form, what reason, what stage — and match their response, reserving the last two techniques for rare cases and using them with full awareness of their risks.",
          tier: "medium"
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
          model: "The lecture distinguishes five types of change. Strategy change modifies the organization's approach to ensuring its success — and failing to change strategy when circumstances (such as competition) dictate can threaten survival. Structure change alters structural components or the overall structural design. Technology change touches work processes, methods, and equipment — automation, computerization, and the Internet of Things. People change targets attitudes, expectations, perceptions, and behavior at the individual and group level. Culture change attempts to shift the organization's shared values and ways of doing things in response to internal or external factors. Culture is the hardest because it is, by definition, what is shared, taught to newcomers, and reinforced daily — the deeply held values and traditions that Week 3 showed are rooted in founders' visions and maintained through selection, socialization, and top-management behavior; an instruction cannot simply overwrite it. The lecture is nonetheless clear that hard does not mean impossible: culture change becomes feasible when a dramatic crisis occurs, when leadership changes hands, when the organization is young and small, or when the existing culture is weak. To pursue it, managers can pull several levers together: lead by example, craft new narratives, support champions, redesign socialization, align rewards with the desired culture, clarify expectations, shift subcultures, and build consensus and trust. Because culture lives in people and relationships, organizational development supplies the working tools — sensitivity training to change behavior through unstructured group interaction, survey feedback to surface and resolve attitude discrepancies, team building so members learn how each other think and work, process consultation to diagnose interpersonal processes, and intergroup development to dissolve the stereotypes groups hold about each other. Culture change, in short, is a sustained, multi-lever campaign in which leaders' visible behavior and aligned systems slowly make the new way “how we do things here.”",
          tier: "hard"
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
          ],
          check: {
            q: "Which statement best reflects the textbook's view of leaders and managers?",
            o: [
              "Every manager is automatically an effective leader",
              "Ideally all managers should be leaders, but not all leaders have managerial authority",
              "Leaders and managers are identical roles",
              "Only people without authority can be true leaders"
            ],
            a: 1,
            e: "The text holds that ideally all managers should be leaders, yet leadership and management are not the same, and not all leaders hold formal managerial authority."
          }
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
          ],
          check: {
            q: "The Ohio State and University of Michigan studies are examples of which leadership approach?",
            o: [
              "Trait theories",
              "Behavioral theories",
              "Contingency theories",
              "Power-dependency theories"
            ],
            a: 1,
            e: "These studies are classic behavioral theories, identifying dimensions of leader behavior (e.g., initiating structure/consideration, task/employee orientation) rather than fixed traits."
          }
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
          ],
          check: {
            q: "What core assumption do all contingency theories of leadership share?",
            o: [
              "There is one universally best leadership style",
              "Leadership effectiveness depends on the situation",
              "Traits fully determine who becomes a leader",
              "Followers' maturity is irrelevant to style choice"
            ],
            a: 1,
            e: "Contingency (situational) theories all assume effectiveness depends on matching leadership style to situational factors; there is no single best way to lead."
          }
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
          ],
          check: {
            q: "How do transformational leaders differ from transactional leaders?",
            o: [
              "They rely only on contingent rewards and punishments",
              "They inspire followers to transcend self-interest for a larger purpose",
              "They avoid setting any vision",
              "They focus solely on defining task structure"
            ],
            a: 1,
            e: "Transactional leaders exchange rewards for performance, whereas transformational leaders inspire followers to rise above self-interest and achieve extraordinary outcomes."
          }
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
          ],
          check: {
            q: "Which pairing correctly distinguishes positional from personal power bases?",
            o: [
              "Expert and referent are positional; legitimate is personal",
              "Legitimate, reward, and coercive are positional; expert and referent are personal",
              "All five bases come only from one's formal position",
              "Referent power comes from one's job title"
            ],
            a: 1,
            e: "Legitimate, reward, and coercive power derive from one's position, while expert and referent power are personal bases that stem from the individual regardless of title."
          }
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
          ],
          check: {
            q: "What does the chapter's evidence suggest about gender differences in leadership style?",
            o: [
              "Women and men lead in completely opposite, fixed ways",
              "Differences are modest, and women tend toward more democratic, transformational styles",
              "Men are always more effective leaders",
              "Style differences guarantee one gender is universally superior"
            ],
            a: 1,
            e: "The research finds modest differences — women lean toward democratic, participative, transformational styles — but no basis for claiming either gender is universally the better leader; situational fit matters most."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What is a leader, according to the textbook definition?",
          o: [
            "Anyone who holds a formal management title",
            "Someone who can influence others and who has managerial authority",
            "A person who controls the organization's financial resources",
            "An employee with the longest tenure in a department"
          ],
          a: 1,
          h: [
            "A title alone does not make someone able to move people to act.",
            "Right — influence plus managerial authority is the textbook definition.",
            "Controlling money is a managerial function, not the definition of a leader.",
            "Seniority describes tenure, not the capacity to influence others."
          ],
          e: "A leader is someone who can influence others and who has managerial authority; leadership is the process of leading a group and influencing it toward goals."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "The earliest approach to studying leadership tried to identify which of the following?",
          o: [
            "The best leadership style for every situation",
            "Distinguishing personal characteristics, or traits, of leaders",
            "The amount of power leaders should hold",
            "How followers mature over time"
          ],
          a: 1,
          h: [
            "Universal 'best style' is the behavioral aim, not the trait aim.",
            "Right — trait theories searched for characteristics that set leaders apart.",
            "Power distribution is a separate topic from trait research.",
            "Follower maturity belongs to Hersey-Blanchard, a later contingency model."
          ],
          e: "Trait theories were the earliest leadership research, seeking personal characteristics (traits) that differentiate leaders from non-leaders."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In the Ohio State studies, the dimension describing the extent to which a leader defines roles and structures work to attain goals is called:",
          o: [
            "Consideration",
            "Initiating structure",
            "Employee orientation",
            "Concern for people"
          ],
          a: 1,
          h: [
            "Consideration is the relationship dimension, not the task dimension.",
            "Right — initiating structure is the task-defining dimension.",
            "Employee orientation is a University of Michigan term, not Ohio State.",
            "Concern for people is a Managerial Grid axis, not an Ohio State dimension."
          ],
          e: "In the Ohio State studies, initiating structure is the degree to which a leader defines and structures roles and tasks to accomplish goals."
        },
        {
          type: "fill",
          tier: "easy",
          q: "French and Raven identified five sources of power: legitimate, reward, coercive, expert, and _____ power.",
          o: [],
          a: 0,
          accept: [
            "referent",
            "referent power"
          ],
          h: [
            "It is the power that comes from being liked, admired, or identified with.",
            "Think of charisma and personal identification with the leader."
          ],
          e: "Referent power arises from a leader's desirable resources or personal traits, causing others to identify with and admire them."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The leadership theory that proposes effectiveness depends on matching the leader's style to the demands of the _____ is called contingency theory.",
          o: [],
          a: 0,
          accept: [
            "situation",
            "situational factors",
            "situational context",
            "context"
          ],
          h: [
            "Contingency means 'it depends' — depends on what surrounds the leader.",
            "The same word appears in 'situational leadership theory.'"
          ],
          e: "Contingency (situational) theories hold that effective leadership depends on matching style to the situation; there is no one best way to lead."
        },
        {
          type: "fill",
          tier: "easy",
          q: "A leader who inspires followers to transcend their own self-interests for the good of the organization and can have a profound effect on them is called a _____ leader.",
          o: [],
          a: 0,
          accept: [
            "transformational",
            "transformational leader"
          ],
          h: [
            "Contrast with the transactional leader who exchanges rewards for performance.",
            "The word means going beyond ordinary exchange to change followers."
          ],
          e: "Transformational leaders inspire followers to transcend self-interest, stimulating and inspiring them to achieve extraordinary outcomes."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut supermarket owner reprices goods in lira every morning to track the dollar. She sits with cashiers each evening, asks about their commute under fuel shortages, and adjusts shifts around generator hours. Using the Ohio State framework, her evening behavior is high in:",
          o: [
            "Initiating structure",
            "Consideration",
            "Coercive power",
            "Production orientation"
          ],
          a: 1,
          h: [
            "Defining tasks and schedules would be structure — but listening to needs is something else.",
            "Right — attending to feelings, comfort, and welfare is consideration.",
            "No threats or punishment are described, so coercive power does not fit.",
            "Production orientation emphasizes output, not the cashiers' personal welfare."
          ],
          e: "Consideration is the degree to which a leader shows concern for followers' comfort, well-being, and feelings — exactly the owner's evening behavior."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "In Hersey and Blanchard's situational leadership theory, a follower group that is able but unwilling (or insecure) to do a task is best handled with which leadership style?",
          o: [
            "Telling (high task, low relationship)",
            "Selling (high task, high relationship)",
            "Participating (low task, high relationship)",
            "Delegating (low task, low relationship)"
          ],
          a: 2,
          h: [
            "Telling suits followers who are both unable and unwilling.",
            "Selling fits followers unable but willing, needing direction and support.",
            "Right — able but unwilling followers need a supportive, participative push, not more direction.",
            "Delegating fits followers who are both able and willing."
          ],
          e: "For able-but-unwilling (or insecure) followers, the participating style supplies high relationship support to gain commitment, with low task direction since they already have ability."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A bank branch manager in Lebanon must enforce unpopular BDL capital-control limits at the teller window. Depositors are furious about frozen accounts. Which French-and-Raven power base does the manager rely on most when she points to the central bank's authority to justify the limits?",
          o: [
            "Expert power",
            "Referent power",
            "Legitimate power",
            "Reward power"
          ],
          a: 2,
          h: [
            "Expert power would rest on her specialized banking knowledge, not on rules.",
            "Referent power would rest on depositors admiring her personally.",
            "Right — invoking the authority of her position and BDL's rules is legitimate power.",
            "Reward power would mean offering depositors something desirable."
          ],
          e: "Legitimate power derives from one's formal position and the authority it confers; citing the central bank's mandated rules is an appeal to that positional authority."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Path-goal theory says an effective leader clarifies the _____ subordinates should follow to reach work goals and removes obstacles along the way.",
          o: [],
          a: 0,
          accept: [
            "path",
            "paths",
            "route"
          ],
          h: [
            "The theory's name pairs this word with 'goal.'",
            "Think of the leader clearing the way toward the goal."
          ],
          e: "In path-goal theory the leader's job is to clarify the path to goals and reduce roadblocks, increasing follower motivation and satisfaction."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A generator-cooperative owner sets specific amperage targets, schedules fuel runs, and tells each technician exactly what to do during outages. On the Managerial (Leadership) Grid this strong task focus is called concern for _____.",
          o: [],
          a: 0,
          accept: [
            "production",
            "results",
            "output",
            "task"
          ],
          h: [
            "It is one of the two Grid axes; the other is concern for people.",
            "Blake and Mouton paired it with 'people.'"
          ],
          e: "The Managerial Grid plots concern for production against concern for people; defining tasks and output targets reflects high concern for production."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Fiedler's contingency model measures leadership style with the _____ co-worker questionnaire to classify a leader as relationship- or task-oriented.",
          o: [],
          a: 0,
          accept: [
            "least preferred",
            "least-preferred",
            "least preferred co-worker",
            "least-preferred co-worker",
            "lpc"
          ],
          h: [
            "The leader rates the one colleague they could work with worst.",
            "Its abbreviation is LPC."
          ],
          e: "Fiedler used the least-preferred co-worker (LPC) questionnaire: rating that co-worker favorably indicates a relationship-oriented style; unfavorably indicates a task-oriented style."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two NGO directors run relief programs during Lebanon's currency collapse. Director A excels at clear budgets, structured logistics, and contingent rewards for hitting distribution targets. Director B rearticulates the mission, gets staff to sacrifice salary for the cause, and individually mentors them to grow. The textbook would most precisely describe A and B respectively as:",
          o: [
            "Charismatic and visionary leaders",
            "Transactional and transformational leaders",
            "Autocratic and democratic leaders",
            "Task-oriented and relationship-oriented leaders"
          ],
          a: 1,
          h: [
            "Charismatic/visionary both describe inspirational appeal, not A's exchange focus.",
            "Right — exchange-and-reward is transactional; mission, sacrifice, and individualized growth is transformational.",
            "Autocratic/democratic concerns decision involvement, narrower than this contrast.",
            "Task/relationship is the Ohio State axis and misses the inspirational dimension of B."
          ],
          e: "Transactional leaders guide via exchanges and contingent rewards (A); transformational leaders inspire followers to transcend self-interest and develop them individually (B)."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Research summarized in the chapter finds women tend to use a more democratic, participative, transformational style while men more often use a directive, transactional style. A critic argues this proves women are 'better' leaders. The most defensible reading of the evidence is:",
          o: [
            "Men are inherently poorer leaders because directive styles always fail",
            "The style differences are large and fixed by gender",
            "Effectiveness depends on fit between style and situation, so neither gender is universally superior",
            "Transformational style is irrelevant to organizational outcomes"
          ],
          a: 2,
          h: [
            "The data show no universal superiority of either gender, so this overstates.",
            "Differences are modest and shrink when role and context are controlled.",
            "Right — a contingency lens says fit-to-situation, not gender, drives effectiveness.",
            "Transformational leadership is consistently linked to positive outcomes, so this is false."
          ],
          e: "The chapter cautions that observed style differences are modest and that leadership effectiveness depends on situational fit; gender alone does not make one a superior leader."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "During rolling blackouts, a hospital department head shares a vision of 'keeping every patient alive through the dark,' communicates high expectations, models personal sacrifice by taking night shifts, and reframes hardship as a meaningful mission. Which contemporary leadership concept BEST captures the source of her unusual influence over staff?",
          o: [
            "Charismatic-visionary leadership",
            "Transactional leadership",
            "Legitimate power",
            "Initiating structure"
          ],
          a: 0,
          h: [
            "Right — vision, high expectations, self-sacrifice, and meaning-making define charismatic-visionary leadership.",
            "Transactional leadership trades rewards for performance, which is not described here.",
            "Legitimate power flows from her title, but her influence here exceeds her formal authority.",
            "Initiating structure is task-defining behavior, not vision and inspiration."
          ],
          e: "Charismatic-visionary leaders articulate a compelling vision, set high expectations, model self-sacrifice, and create shared meaning — the drivers of her influence beyond formal authority."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A long-trusted leader keeps making confident calls about navigating capital controls, and staff follow without scrutiny even when she is wrong; this overreliance on followers' faith illustrates the potential downside of _____ leadership when the vision is flawed.",
          o: [],
          a: 0,
          accept: [
            "charismatic",
            "charismatic-visionary",
            "charismatic visionary",
            "charismatic leadership"
          ],
          h: [
            "It is the inspirational style whose 'dark side' is unquestioning follower devotion.",
            "Think of leaders whose personal magnetism can override critical judgment."
          ],
          e: "Charismatic leadership can be a liability when followers' devotion suppresses dissent and the leader's flawed vision goes unchallenged."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When followers respect and trust their leader and are willing to take risks and admit mistakes to that leader, the leader has built _____, the contemporary concept the textbook calls the essence of leadership.",
          o: [],
          a: 0,
          accept: [
            "trust",
            "credibility and trust"
          ],
          h: [
            "It is the willingness to be vulnerable based on positive expectations.",
            "The chapter calls it the foundation, or essence, of leadership.",
            "It pairs with credibility and rests on integrity."
          ],
          e: "Trust — the belief in a leader's integrity, character, and ability — is described as the essence of leadership because followers will not follow someone they do not trust."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Applying Fiedler's model: a microfinance branch during the lira collapse has moderate (mixed) leader-member relations, partly structured loan procedures, and moderate position power for the supervisor — overall a situation of intermediate favorableness. Which leader does Fiedler's model predict performs better here?",
          o: [
            "A relationship-oriented (high-LPC) leader",
            "A task-oriented (low-LPC) leader",
            "A laissez-faire leader",
            "A purely charismatic leader"
          ],
          a: 0,
          h: [
            "Right — in moderately favorable (intermediate) situations Fiedler predicts relationship-oriented leaders do best.",
            "Task-oriented leaders excel at the extremes (very favorable or very unfavorable), not the middle.",
            "Fiedler's model contrasts task vs relationship orientation, not laissez-faire.",
            "Charisma is a contemporary concept outside Fiedler's task/relationship dichotomy."
          ],
          e: "Fiedler found task-oriented (low-LPC) leaders perform best in very favorable and very unfavorable situations, while relationship-oriented (high-LPC) leaders perform best in situations of intermediate (moderate) favorableness, as described here."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "The New Shift Lead at the Tripoli Pharmacy",
          scenario: "At a busy pharmacy in Tripoli, the owner promotes Rana, a calm and well-liked senior pharmacist, to shift lead during the crisis. Medicines are scarce, prices change weekly as importers demand fresh dollars, and customers arrive anxious and sometimes angry about unavailable subsidized drugs. Rana has no extra pay or hiring authority — the owner controls all of that. But the three junior staff already admire her; they copy how she speaks to distressed customers and stay late when she asks, simply because they respect her. The owner notices that even though Rana cannot reward or punish anyone, the team runs more smoothly on her shifts than on others.",
          qs: [
            {
              q: "Which French-and-Raven power base is Rana relying on, and how can you tell?",
              a: "Rana relies primarily on referent power, which stems from being admired and identified with rather than from formal authority. The clearest evidence is that staff copy her behavior and stay late out of respect, even though she controls no rewards or punishments. Her influence comes from who she is to them, not from her position."
            },
            {
              q: "Why is it significant that Rana lacks reward and coercive power yet still leads effectively?",
              a: "It shows that leadership and managerial authority are not the same as the power to give raises or fire people. Reward and coercive power flow from the position, but Rana has neither; her effectiveness demonstrates that personal power bases (referent, and possibly expert) can drive influence independently of positional power. This is exactly why the textbook distinguishes a leader's ability to influence from formal authority alone."
            },
            {
              q: "Using the trait perspective, name one trait that might explain Rana's emergence as a leader and explain its limit as an explanation.",
              a: "Traits such as emotional stability or sociability (being calm and well-liked) could help explain why Rana emerged as a leader. However, the trait view is limited because traits alone do not guarantee effectiveness — they ignore the situation and follower needs. Two equally calm pharmacists might lead very differently depending on context, which is why research moved beyond traits to behavioral and contingency theories."
            }
          ]
        },
        {
          tier: "medium",
          title: "Two Floor Managers at the Hamra Electronics Store",
          scenario: "A Beirut electronics retailer survives the collapse by repricing inventory daily against the parallel-market dollar and selling only in fresh dollars or 'cash on the barrel.' Two floor managers split the team. Karim runs a tight ship: he posts hourly sales targets, dictates exactly how to handle the daily repricing, scripts customer pitches, and checks compliance constantly — but rarely asks how his staff are coping with unpaid overtime and transport costs. Lina, on the other floor, also hits targets but spends time learning which staff are struggling with generator bills, swaps shifts to ease fuel queues, and coaches rather than dictates. Both floors meet sales goals, but turnover is far higher on Karim's floor, and his best salesperson just quit.",
          qs: [
            {
              q: "Describe Karim's and Lina's styles using the Ohio State dimensions of initiating structure and consideration.",
              a: "Karim is high on initiating structure and low on consideration: he heavily defines tasks, scripts, and targets but neglects his staff's feelings and welfare. Lina is high on both dimensions: she maintains structure (she still hits targets and manages repricing) while also showing strong consideration through coaching, shift-swapping, and attention to staff hardship. The Ohio State research suggested that high-high leaders like Lina tend to achieve better outcomes on satisfaction and turnover."
            },
            {
              q: "Why might both managers hit sales targets yet differ sharply in turnover, and what does this say about behavioral theories?",
              a: "Short-term output (sales targets) can be driven by structure and pressure alone, so Karim's numbers hold up for now. But turnover reflects satisfaction and commitment, which consideration influences strongly; Karim's neglect of staff welfare drives people out, as seen when his top salesperson quit. This illustrates the behavioral insight that task and people behaviors are separate dimensions, and that ignoring the people dimension can undermine sustainability even when results look fine."
            },
            {
              q: "Apply path-goal theory: in this high-stress, fast-repricing environment, what leader behavior would most help and why?",
              a: "Path-goal theory predicts that supportive leadership is especially valuable when tasks are stressful, frustrating, or dissatisfying — which describes daily repricing under crisis conditions. Lina's supportive, coaching behavior reduces the strain of the path and signals that effort will be recognized, raising motivation and satisfaction. Some directive leadership is also useful given the complexity of repricing, but pure direction without support (Karim's approach) leaves the stress of the path unaddressed."
            }
          ]
        },
        {
          tier: "hard",
          title: "Rebuilding a Collapsed Logistics Firm Across the Crisis",
          scenario: "Nadia inherits a freight and distribution firm whose business cratered after 2019: clients pay in a mix of frozen 'lollar' checks and scarce fresh dollars, drivers spend hours in fuel queues, and the warehouse runs on a costly generator 'ishtirak' with strict amperage limits. Morale is broken and three rivals have folded. Over two years Nadia rebuilds. She articulates a vision of becoming 'the firm that still delivers when the country can't,' takes a personal pay cut and works the loading dock during the worst months, and persuades drivers to accept partial deferred pay tied to recovery. She also redesigns operations: fixed fuel-allocation rules, transparent fresh-dollar pricing, and contingent bonuses once cash flow returns. Some senior staff privately worry the team now follows Nadia so devotedly that no one challenges her riskier bets, such as a large fresh-dollar fuel-futures gamble.",
          qs: [
            {
              q: "Identify the leadership theories at work in how Nadia rebuilt the firm, distinguishing transformational from transactional elements.",
              a: "Nadia shows strong transformational and charismatic-visionary leadership: she articulates a compelling vision, models self-sacrifice through a pay cut and dock work, and inspires staff to transcend immediate self-interest by accepting deferred pay for the mission. She also uses transactional leadership through contingent bonuses tied to cash-flow recovery and rule-based fuel allocation, which are exchange-and-reward mechanisms. Effective leaders typically blend both: transactional structures keep operations running while transformational appeal drives extraordinary commitment."
            },
            {
              q: "The senior staff's worry points to a recognized risk of charismatic leadership. Explain that risk and how Nadia might mitigate it.",
              a: "The danger is the 'dark side' of charisma: when followers' devotion becomes uncritical, no one challenges the leader, so a flawed vision (like the fresh-dollar fuel-futures gamble) can go unchecked and cause serious harm. Nadia can mitigate this by deliberately building trust that includes psychological safety — inviting dissent, separating high-risk financial bets from operational decisions, and empowering staff to admit mistakes and push back. Strengthening governance so big bets require scrutiny reduces dependence on her judgment alone."
            },
            {
              q: "Evaluate Nadia's power bases and how her mix of personal and positional power likely shifted as she rebuilt the firm.",
              a: "Early on Nadia held mainly legitimate power from inheriting ownership, plus limited reward and coercive power given the firm's broken finances. As she rebuilt, she accumulated strong personal power: referent power from her self-sacrifice and vision, and expert power from her demonstrated ability to navigate fuel, pricing, and lollar-versus-fresh-dollar realities. The most durable influence now rests on these personal bases, which is also why the team follows her so devotedly — a strength for mobilization but a liability if it suppresses critical challenge."
            }
          ]
        },
        {
          tier: "hard",
          title: "Choosing the Next Director at a Crisis-Era Microfinance NGO",
          scenario: "A microfinance NGO that lends to small Lebanese businesses must replace its retiring director. The board reviews two internal candidates. Maya is a relationship-oriented leader: warm, participative, and transformational, she rates even her least-preferred co-worker fairly and is known for building loyal, committed teams. Tarek is task-oriented: decisive and directive, he scores his least-preferred co-worker harshly and excels at imposing order in chaos. The NGO faces two looming scenarios. Scenario 1: an emergency wind-down of a defaulting loan portfolio under severe time pressure, where the new director will have weak board backing, hostile borrowers, and unstructured, ambiguous procedures. Scenario 2: a stable expansion phase with strong board support, clear procedures, and cooperative staff. The board also debates whether the fact that Maya is a woman and Tarek a man should factor into who can 'command authority' with conservative rural clients.",
          qs: [
            {
              q: "Using Fiedler's contingency model, which candidate does the model favor for Scenario 1, and why?",
              a: "Scenario 1 has poor leader-member relations (hostile borrowers, weak board backing) and low task structure (ambiguous wind-down procedures), making it a very unfavorable situation with low position power. Fiedler's model predicts that task-oriented (low-LPC) leaders perform best in very unfavorable situations because decisive direction is what such crises demand. The model therefore favors Tarek for Scenario 1. Maya's relationship orientation fits moderately favorable situations better than this extreme one."
            },
            {
              q: "Now apply Fiedler to Scenario 2 and assess what this implies about whether either candidate is universally 'the better leader.'",
              a: "Scenario 2 is highly favorable — good relations, high structure, and strong position power — which is also a situation where task-oriented (low-LPC) leaders tend to perform well; relationship-oriented leaders do best in the moderate middle. The key contingency-theory point is that effectiveness depends on the match between style and situation, not on the person alone. Neither Maya nor Tarek is universally superior; the board should match style to the situation it most expects, and Fiedler would even argue it may be easier to change the situation than the leader's style."
            },
            {
              q: "Critically evaluate the board's argument that gender should determine who can 'command authority' with conservative clients.",
              a: "The chapter's evidence on gender and leadership shows only modest style differences — women tend toward more democratic, participative, transformational styles — and finds no basis for treating either gender as inherently more authoritative or effective. Letting client prejudice dictate the choice risks confusing bias with capability and may forgo the better situational fit. A defensible board would evaluate each candidate on style-situation fit and demonstrated competence, while addressing client bias directly rather than encoding it into the hiring decision."
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
          model: "Leadership research began with traits: the search for personal characteristics that differentiated leaders from non-leaders. That program failed — it proved impossible to identify a set of traits that would ALWAYS distinguish the leader (the person) from the non-leader. Attention therefore turned from who leaders are to what leaders do: behavioral theories identify behaviors that differentiate effective from ineffective leaders, with the hope that behaviors, unlike traits, could be taught. Four studies anchor this tradition. The University of Iowa studies contrasted democratic (involving subordinates, delegating authority, encouraging participation), autocratic (dictating methods, centralizing decisions, limiting participation), and laissez-faire styles (letting the group decide and work freely); the democratic style initially appeared most effective, though later studies produced mixed results. The Ohio State studies distilled two dimensions — consideration (care for followers' ideas and feelings) and initiating structure (structuring work and relationships toward goals) — and found the high-high leader achieved high subordinate performance and satisfaction, but not in all situations. The University of Michigan studies contrasted employee-oriented leaders (interpersonal relationships, employees' needs) with production-oriented ones (technical/task aspects), associating employee orientation with higher group productivity and job satisfaction. The Managerial Grid mapped concern for people against concern for production on nine-point scales, concluding leaders performed best with a 9,9 (high-high) style. The recurring qualifiers — “mixed results,” “not in all situations” — proved decisive: if no behavior pattern wins everywhere, effectiveness must depend on the situation. That inference launched the contingency theories — Fiedler's model, Hersey and Blanchard's situational leadership, and path-goal theory — which formalize matching leadership to situational conditions.",
          tier: "easy"
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
          model: "All three contingency theories deny a universally best style, but they differ in what they diagnose and whether the leader can adapt. Fiedler's contingency model holds that effective group performance depends on the proper match between a leader's style and the degree to which the situation gives the leader control and influence. Style is measured by the least-preferred coworker (LPC) questionnaire — task oriented versus relationship oriented — and is assumed fixed. The situation's favorableness rests on three contingencies: leader–member relations (confidence, trust, respect), task structure (how formalized assignments are), and position power (influence over hiring, firing, discipline, promotions, raises). Fiedler's findings: task-oriented leaders perform best in highly favorable and highly unfavorable situations, relationship-oriented leaders in moderately favorable ones — so organizations should match the leader to the situation (or change the situation), not expect the leader to change. Hersey and Blanchard's situational leadership theory shifts the diagnosis to followers' readiness — their ability and willingness for a specific task. The leader adapts along two behavior dimensions, producing four styles: telling (high task–low relationship) for R1 followers (unable and unwilling), selling (high task–high relationship) for R2 (unable but willing), participating (low task–high relationship) for R3 (able but unwilling), and delegating (low task–low relationship) for R4 (able and willing). Path-goal theory defines the leader's job as assisting followers to attain their goals and providing the direction or support that aligns those goals with the group's or organization's. The leader chooses among directive, supportive, participative, and achievement-oriented behaviors, guided by environmental contingencies (task structure, formal authority system, work group) and subordinate contingencies (locus of control, experience, perceived ability), with performance and satisfaction as outcomes. In short: Fiedler diagnoses situational favorableness with a fixed-style leader; SLT diagnoses follower development with an adaptive leader; path-goal diagnoses both environment and follower characteristics, prescribing whichever behavior clears the follower's path to the goal.",
          tier: "medium"
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
          model: "The numbers first: in 2023 only 10.6% of Fortune 500 CEOs were women — less than 1% women of color — and in 2022 women held 30.4% of those companies' board seats (Pew Research Center, 2023). In Lebanon, women represented 29% of senior and middle management in 2019 (World Bank), and data on women's leadership remains scarce. Under-representation persists despite the evidence on performance. Beyond the familiar glass ceiling, research identifies a glass cliff (Ryan & Haslam, 2005): when women do reach leadership, they are over-represented in precarious positions — set up where failure is most likely. Yet the research reviewed in the lecture undercuts any competence explanation for the gap: women are now seen as equally or more competent than men (Eagly et al.); the mere presence of a female leader leads perceivers to anticipate fairer treatment (Joshi & Diekman); female CEOs are positively related to firms' financial performance in gender-egalitarian cultures (Hoobler et al., 2018); and gender-diverse leadership teams pursue environmentally friendly strategies more effectively (Glass et al., 2016). On style, female leaders demonstrate more transformational and more democratic leadership (Eagly et al., 1992; Wu et al., 2021) — styles the behavioral and contemporary literatures associate with effectiveness. The catch is role congruity: these styles are congruent with female gender roles, and when women adopt incongruent styles — say, highly autocratic ones — they tend to be penalized (Wang et al., 2013), a constraint male leaders do not face symmetrically. The synthesis: the obstacles to women's leadership are structural and perceptual — ceilings, cliffs, and role expectations — not deficits of competence or style. Organizations that fix appointment processes (who gets which roles, and when) and decouple style evaluations from gender expectations stand to gain measurably better leadership.",
          tier: "hard"
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
          ],
          check: {
            q: "Which set correctly names the three key elements of motivation?",
            o: [
              "Ability, opportunity, willingness",
              "Intensity, direction, persistence",
              "Effort, luck, intelligence",
              "Reward, punishment, feedback"
            ],
            a: 1,
            e: "Motivation is the process accounting for the intensity, direction, and persistence of an individual's effort toward a goal."
          }
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
          ],
          check: {
            q: "Maslow, Herzberg, McGregor, and McClelland are grouped together as the EARLY theories of motivation mainly because they:",
            o: [
              "Have all been strongly confirmed by modern research",
              "Are foundational and widely known, though often weakly supported empirically",
              "Focus only on financial rewards",
              "Were all developed after the year 2000"
            ],
            a: 1,
            e: "The early theories (Maslow's hierarchy, Theory X/Y, two-factor, three needs) are well known and historically important but often lack strong empirical support."
          }
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
          ],
          check: {
            q: "Expectancy theory states that motivation is strongest when an individual believes that effort leads to performance, performance leads to reward, AND that the reward:",
            o: [
              "Is the same for every employee",
              "Is valued by the individual (high valence)",
              "Is paid only in cash",
              "Requires no further effort"
            ],
            a: 1,
            e: "Expectancy theory multiplies expectancy, instrumentality, and valence; the reward must be personally valued (high valence) for motivation to be strong."
          }
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
          ],
          check: {
            q: "According to Self-Determination Theory, the three basic psychological needs that fuel intrinsic motivation are:",
            o: [
              "Achievement, power, affiliation",
              "Autonomy, competence, relatedness",
              "Safety, esteem, self-actualization",
              "Hygiene, motivators, equity"
            ],
            a: 1,
            e: "SDT (Ryan & Deci) identifies autonomy, competence, and relatedness as the basic needs whose satisfaction supports intrinsic motivation and well-being."
          }
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
          ],
          check: {
            q: "Why does opaque algorithmic management tend to harm motivation according to SDT?",
            o: [
              "It raises pay too quickly, causing overjustification only",
              "It frustrates autonomy and competence by removing choice and hiding how to improve",
              "It satisfies all three needs but reduces relatedness slightly",
              "It has no effect because pay is all that matters"
            ],
            a: 1,
            e: "Algorithmic control strips meaningful choice (autonomy) and opaque scoring blocks learning how to improve (competence), undermining the needs SDT says drive intrinsic motivation."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Motivation is best defined as the process that accounts for an individual's:",
          o: [
            "Innate personality traits and temperament",
            "Intensity, direction, and persistence of effort toward a goal",
            "Level of cognitive ability and intelligence",
            "Job satisfaction with current pay and conditions"
          ],
          a: 1,
          h: [
            "Traits are stable dispositions; motivation is about effort directed at goals.",
            "Right idea — intensity, direction, and persistence are the three key elements.",
            "Ability is what you can do; motivation is the energizing of effort.",
            "Satisfaction is an attitude, not the process that energizes goal-directed effort."
          ],
          e: "Robbins defines motivation through three elements: intensity (how hard), direction (toward goals), and persistence (how long effort is sustained)."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In Maslow's hierarchy of needs, which need level is the LOWEST (most basic)?",
          o: [
            "Esteem needs",
            "Physiological needs",
            "Self-actualization needs",
            "Social/belongingness needs"
          ],
          a: 1,
          h: [
            "Esteem is a higher-order need, near the top of the pyramid.",
            "Correct — physiological needs (food, water, shelter) form the base.",
            "Self-actualization is the very top, not the base.",
            "Social needs sit in the middle, above safety."
          ],
          e: "Maslow's hierarchy ascends from physiological, then safety, social, esteem, to self-actualization at the top."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In Herzberg's two-factor theory, factors such as salary, company policy, and working conditions are called:",
          o: [
            "Motivators",
            "Hygiene factors",
            "Growth needs",
            "Achievement drivers"
          ],
          a: 1,
          h: [
            "Motivators are intrinsic factors like achievement and recognition.",
            "Correct — these extrinsic context factors are hygiene factors that prevent dissatisfaction.",
            "Growth needs belong to Alderfer's ERG theory, not Herzberg's labels.",
            "Achievement is a motivator (intrinsic), not a hygiene factor."
          ],
          e: "Herzberg labeled extrinsic context factors (pay, policy, conditions, supervision) hygiene factors; their absence causes dissatisfaction but their presence does not motivate."
        },
        {
          type: "fill",
          tier: "easy",
          q: "McClelland's theory identifies three acquired needs: the need for achievement, the need for power, and the need for _____.",
          o: [],
          a: 0,
          accept: [
            "affiliation",
            "need for affiliation",
            "naff",
            "n-aff",
            "n aff"
          ],
          h: [
            "Think of the social need to be liked and to have friendly relationships.",
            "It starts with 'a' and is about belonging to a group."
          ],
          e: "McClelland's three needs are achievement (nAch), power (nPow), and affiliation (nAff)."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The _____ theory of motivation argues that specific and difficult goals, with feedback, lead to higher performance.",
          o: [],
          a: 0,
          accept: [
            "goal-setting",
            "goal setting",
            "goal-setting theory",
            "goal setting theory",
            "goalsetting"
          ],
          h: [
            "Edwin Locke is associated with this theory.",
            "It is about the targets you commit to achieving."
          ],
          e: "Goal-setting theory (Locke) holds that specific, difficult goals that are accepted, plus feedback, produce higher performance than vague 'do your best' goals."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Theory _____ assumes employees are inherently lazy, dislike work, and must be coerced, while Theory Y assumes they are self-directed.",
          o: [],
          a: 0,
          accept: [
            "x",
            "theory x",
            "x theory"
          ],
          h: [
            "McGregor paired this letter with its more positive counterpart, Y.",
            "It is the negative assumption set."
          ],
          e: "McGregor's Theory X holds the negative view (people dislike work and need control); Theory Y holds the positive view (people seek responsibility and are self-directed)."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut software firm pays in fresh USD but sets vague targets like 'do your best on the migration.' A team lead wants to apply goal-setting theory. The single most effective change is to:",
          o: [
            "Increase everyone's salary by 10% to boost effort",
            "Replace the vague target with a specific, challenging deadline and scope, plus regular feedback",
            "Let employees set whatever goals feel comfortable to reduce stress",
            "Add a foosball table to improve working conditions"
          ],
          a: 1,
          h: [
            "Pay is a hygiene-type factor; goal-setting theory is about the goal's properties, not compensation.",
            "Correct — specificity, difficulty, acceptance, and feedback are the levers of goal-setting theory.",
            "Easy, comfortable goals lower performance; difficulty (when accepted) raises it.",
            "Working conditions are a hygiene factor, not a goal-setting mechanism."
          ],
          e: "Goal-setting theory predicts that specific and difficult goals plus feedback raise performance, so replacing the vague target with a specific challenging one is the direct lever."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "During Lebanon's lira collapse, a manager notices that giving employees recognition and more interesting projects boosts engagement, but raising their (rapidly devaluing) lira salary does little. This pattern best illustrates:",
          o: [
            "Equity theory's referent comparisons",
            "Herzberg's distinction between motivators and hygiene factors",
            "McClelland's need for power",
            "Reinforcement theory's fixed-ratio schedule"
          ],
          a: 1,
          h: [
            "Equity is about comparing your ratio to others, not about which factor type motivates.",
            "Correct — recognition and interesting work are motivators; pay is a hygiene factor that does not truly motivate.",
            "Need for power is about influencing others, not the pay-versus-recognition contrast.",
            "Reinforcement schedules concern timing of rewards, not the motivator/hygiene split."
          ],
          e: "Herzberg's theory predicts that hygiene factors like pay prevent dissatisfaction but do not motivate, whereas motivators like recognition and challenging work drive engagement."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "An employee learns a peer with the same role and output is paid in fresh dollars while she is paid in 'lollars' worth a fraction of the value. By equity theory, the LEAST likely response is that she will:",
          o: [
            "Reduce her effort to restore the input/outcome balance",
            "Ask to be repaid in fresh dollars or seek a raise",
            "Quietly increase her own effort to deserve more without complaint",
            "Cognitively distort her view of the peer's contributions"
          ],
          a: 2,
          h: [
            "Reducing inputs to match lower outcomes is a classic equity response.",
            "Changing outcomes (asking for fresh dollars) is a predicted response.",
            "Correct — increasing effort while already under-rewarded worsens the imbalance, so it is the least likely response.",
            "Distorting perceptions of self or referent is a recognized equity-restoring tactic."
          ],
          e: "Under perceived under-reward inequity, people typically lower inputs, seek higher outcomes, distort perceptions, change referents, or quit; voluntarily working harder for the same low pay would deepen the inequity and is least likely."
        },
        {
          type: "fill",
          tier: "medium",
          q: "In expectancy theory, the belief that 'if I perform well, I will actually receive the promised reward' is called the _____ linkage (performance-reward relationship).",
          o: [],
          a: 0,
          accept: [
            "instrumentality",
            "instrumentality linkage",
            "performance-reward",
            "performance reward",
            "instrumentality relationship"
          ],
          h: [
            "It is the middle of Vroom's three linkages, between expectancy and valence.",
            "It asks whether good performance is 'instrumental' in getting the reward."
          ],
          e: "Expectancy theory's three relationships are effort-performance (expectancy), performance-reward (instrumentality), and reward-personal goals (valence)."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Designing a job to increase skill variety, task identity, task significance, autonomy, and feedback is the aim of the _____ model.",
          o: [],
          a: 0,
          accept: [
            "job characteristics",
            "job characteristics model",
            "jcm",
            "job characteristic"
          ],
          h: [
            "Hackman and Oldham proposed these five core dimensions.",
            "The model's name references the 'characteristics' of the job itself."
          ],
          e: "The Job Characteristics Model (Hackman & Oldham) uses five core dimensions to create critical psychological states that raise motivation and performance."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Expanding a job vertically by giving employees more control over planning, executing, and evaluating their work is called job _____.",
          o: [],
          a: 0,
          accept: [
            "enrichment",
            "job enrichment"
          ],
          h: [
            "This is vertical expansion, contrasted with horizontal enlargement.",
            "It 'enriches' the work with greater responsibility and autonomy."
          ],
          e: "Job enrichment vertically expands a job by adding planning and evaluation responsibilities, increasing autonomy and accountability, unlike job enlargement which only adds tasks horizontally."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A delivery platform in Beirut uses an app that auto-assigns routes, rates couriers by an opaque algorithm, and deactivates low scorers. Through the lens of Self-Determination Theory, the deepest motivational damage is that the system primarily undermines:",
          o: [
            "Only extrinsic financial incentives, leaving intrinsic motivation intact",
            "Autonomy and competence by removing meaningful choice and obscuring how to improve",
            "Relatedness alone, since couriers still control their schedules",
            "Hygiene factors, which SDT treats as the core of intrinsic drive"
          ],
          a: 1,
          h: [
            "SDT's concern is the basic psychological needs, not just financial incentives.",
            "Correct — algorithmic control strips autonomy and the opaque scoring erodes competence (and often relatedness too).",
            "Couriers do not truly control assignments here, and relatedness is not the only need harmed.",
            "Hygiene factors are Herzberg's concept; SDT centers on autonomy, competence, and relatedness."
          ],
          e: "SDT holds that intrinsic motivation depends on satisfying autonomy, competence, and relatedness; algorithmic assignment removes choice (autonomy) and opaque ratings prevent learning how to improve (competence)."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A firm wants to boost intrinsic motivation but currently ties every task to a cash bonus. SDT research on the 'overjustification effect' warns that controlling extrinsic rewards can:",
          o: [
            "Always increase intrinsic motivation because more reward is better",
            "Crowd out intrinsic motivation by shifting the perceived locus of causality to external control",
            "Have no effect on intrinsic motivation, which is fixed at birth",
            "Only matter for hygiene factors, not for genuinely interesting work"
          ],
          a: 1,
          h: [
            "SDT and cognitive evaluation theory show rewards are not always additive.",
            "Correct — controlling rewards can undermine intrinsic motivation by making behavior feel externally caused.",
            "Intrinsic motivation is malleable and shaped by need satisfaction, not fixed at birth.",
            "The overjustification effect is strongest precisely for already-interesting tasks."
          ],
          e: "Cognitive Evaluation Theory (within SDT) shows that controlling extrinsic rewards can shift the perceived locus of causality outward, undermining intrinsic motivation for tasks people already find interesting."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A manager argues: 'Maslow says satisfy lower needs first, so once we secure people's salaries during the crisis, motivation will automatically rise up the hierarchy.' The strongest critique of this reasoning is that:",
          o: [
            "Maslow's hierarchy has been strongly validated, so the manager is simply applying it correctly",
            "Empirical research provides little support for a rigid, sequential need hierarchy, so motivation is not automatic",
            "Salary is a self-actualization need, so the manager mislabeled the level",
            "Maslow's theory applies only to non-managerial employees"
          ],
          a: 1,
          h: [
            "The hierarchy is intuitively appealing but not well supported by evidence.",
            "Correct — research offers little support for the strict step-by-step progression Maslow proposed.",
            "Salary maps to physiological/safety, not self-actualization; but the deeper flaw is the rigid sequence assumption.",
            "The theory was meant to apply broadly, not only to non-managers."
          ],
          e: "Robbins notes that despite its popularity, Maslow's rigid sequential hierarchy has received little empirical support, so assuming motivation automatically ascends once lower needs are met is unwarranted."
        },
        {
          type: "fill",
          tier: "hard",
          q: "SDT distinguishes intrinsic motivation from extrinsic motivation that has been internalized; when external rules are fully accepted as one's own values, the regulation is called _____ regulation.",
          o: [],
          a: 0,
          accept: [
            "integrated",
            "integrated regulation"
          ],
          h: [
            "It is the most autonomous form of extrinsic motivation on SDT's continuum.",
            "It implies the value has been fully 'integrated' into the self."
          ],
          e: "On SDT's self-regulation continuum, integrated regulation is the most autonomous form of extrinsic motivation, where external values are fully assimilated into the self, approaching intrinsic motivation."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When workers are evaluated by opaque, data-driven systems they cannot see or contest, SDT predicts erosion of perceived _____ — the need to feel effective and capable of mastering one's tasks.",
          o: [],
          a: 0,
          accept: [
            "competence",
            "perceived competence"
          ],
          h: [
            "It is one of SDT's three basic needs, alongside autonomy and relatedness.",
            "It is about feeling capable and effective at what you do."
          ],
          e: "Competence is the SDT need to feel effective and capable; opaque algorithmic feedback that hides how to improve frustrates this need, undermining intrinsic motivation."
        },
        {
          type: "fill",
          tier: "hard",
          q: "In equity theory, the standard a person uses for comparison (such as another person, oneself in a past job, or a different organization) is called the _____.",
          o: [],
          a: 0,
          accept: [
            "referent",
            "comparison other",
            "referent comparison",
            "referent other",
            "comparison referent"
          ],
          h: [
            "Adams used this term for whoever or whatever you measure your ratio against.",
            "It is the 'reference point' in the fairness comparison."
          ],
          e: "In equity theory (Adams), the referent is the comparison standard against which an individual judges the fairness of their own outcome-to-input ratio."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Generator Hours at Hamra Bakery",
          scenario: "Nour manages a small bakery in Hamra, Beirut. With EDL supplying only a few hours of state electricity a day, the bakery depends on a private generator subscription ('ishtirak') capped at a fixed amperage, plus fuel the owner queues for. Wages are paid partly in lira and partly in fresh dollars. Nour's six employees keep arriving late and doing the bare minimum. She has tried shouting and threatening pay cuts, but morale is sinking. A friend who studied management tells her the problem may be that she is treating motivation as a single 'switch' rather than as a process with intensity, direction, and persistence, and that she is leaning only on extrinsic threats.",
          qs: [
            {
              q: "Using the three elements of motivation (intensity, direction, persistence), diagnose what is actually failing among Nour's staff.",
              a: "The staff show low intensity (minimal effort), and what effort exists lacks clear direction toward the bakery's goals because Nour has set no specific targets, only threats. Persistence is also poor since employees do the bare minimum and stop. Motivation is the process accounting for the intensity, direction, and persistence of effort toward a goal, so all three elements need attention, not just pressure to 'work harder.'"
            },
            {
              q: "Nour's main tool is threatening pay cuts. Using Herzberg's two-factor theory, explain why this is unlikely to motivate.",
              a: "Pay and working conditions are hygiene factors in Herzberg's theory: their absence or threat causes dissatisfaction, but their presence does not create true motivation. Threatening pay cuts may increase fear and dissatisfaction without building intrinsic drive. To motivate, Nour should add motivators such as recognition, responsibility, and meaningful work, not just manipulate hygiene factors."
            },
            {
              q: "Suggest one concrete goal-setting change Nour could make and explain why it should help.",
              a: "Nour could replace 'work harder' with a specific, challenging but accepted goal, such as 'have all morning bread baked and shelved within the first generator window, with a quick check at the halfway point.' Goal-setting theory predicts that specific and difficult goals, when accepted and paired with feedback, raise performance more than vague exhortations, giving effort clear direction and a way to gauge progress."
            }
          ]
        },
        {
          tier: "medium",
          title: "Fresh Dollars and Lollars at Chtoura Dairy",
          scenario: "Chtoura Dairy in the Bekaa employs two shifts of packing workers doing identical work. After 2019, the company began hiring new staff on 'fresh dollar' contracts to attract talent, while long-tenured workers remained on older contracts now effectively paid in devalued lira and partly in frozen 'lollar' bonuses. Output among the veteran workers has dropped sharply; two have quit, and others openly slow down. The new hires, by contrast, are energetic. Management is puzzled because the veterans have more experience and were once the most reliable employees. The HR lead suspects the issue is not skill but perceived fairness, and wants a motivation-theory-based explanation before redesigning the pay system.",
          qs: [
            {
              q: "Apply equity theory to explain the veterans' drop in performance.",
              a: "Equity theory holds that people compare their outcome-to-input ratio with a referent. The veterans contribute high inputs (experience, tenure, reliability) yet receive devalued lira and frozen lollars, while newer, less-experienced referents earn fresh dollars. Perceiving under-reward inequity, the veterans restore balance by lowering inputs (slowing down) or leaving (quitting), exactly the behaviors management observes."
            },
            {
              q: "Using expectancy theory, explain why even a promised lira bonus may fail to motivate the veterans.",
              a: "Expectancy theory links effort to reward through expectancy, instrumentality, and valence. Even if veterans believe effort yields performance (expectancy) and that performance yields the bonus (instrumentality), the valence of a devalued lira or frozen lollar bonus is very low because it cannot reliably be spent or accessed. With near-zero valence, the whole motivational chain collapses regardless of how hard they could work."
            },
            {
              q: "Recommend a redesign that addresses both equity and expectancy concerns, and justify it.",
              a: "Management should align pay form across comparable work, for example moving veterans toward fresh-dollar compensation or a transparent, value-protected formula, which reduces perceived inequity by restoring fair input/outcome ratios. To strengthen expectancy and valence, rewards should be in a currency workers can actually use and clearly tied to achievable performance. Together this restores both the fairness comparison and a credible, valued reward linkage."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Algorithm at Sayara Ride",
          scenario: "Sayara Ride is a Beirut ride-hailing startup that, amid the crisis, pivoted to an app-based model paying drivers in fresh dollars to retain them. The platform auto-assigns trips, computes surge pricing during fuel shortages, and rates drivers via an opaque algorithm; drivers below a hidden threshold are 'paused' without explanation. Initially drivers loved the fresh-dollar pay, but within months many report feeling like 'robots,' say they cannot tell how to improve their score, and resent having no say in which trips they take. Turnover is rising even though pay remains higher than alternatives. Founders assumed good pay would guarantee motivation; the new operations head argues the platform is quietly destroying the psychological foundations of motivation.",
          qs: [
            {
              q: "Using Self-Determination Theory, analyze how the platform affects drivers' three basic psychological needs.",
              a: "SDT holds that intrinsic motivation depends on autonomy, competence, and relatedness. Auto-assignment and inability to choose trips frustrate autonomy; the opaque, uncontestable rating system frustrates competence because drivers cannot learn how to become more effective; and the impersonal, isolating app interaction weakens relatedness. Even with high pay, frustrating all three needs erodes intrinsic motivation and drives the 'robot' feeling and turnover."
            },
            {
              q: "The founders believe high fresh-dollar pay should be enough. Using SDT's view of extrinsic rewards (cognitive evaluation / overjustification), critique this belief.",
              a: "SDT's Cognitive Evaluation Theory shows that extrinsic rewards delivered through controlling systems can shift the perceived locus of causality outward and crowd out intrinsic motivation, an overjustification effect. High pay is necessary to retain drivers economically but cannot compensate for thwarted autonomy and competence; when work feels externally controlled and opaque, money alone leaves intrinsic motivation low. Thus the founders' 'pay is enough' assumption misreads how rewards interact with psychological needs."
            },
            {
              q: "Design two concrete changes to the platform that would restore motivation through SDT, and explain the mechanism for each.",
              a: "First, give drivers limited but real choice, such as the ability to view, accept, or decline a subset of trips and set preferred zones, which restores autonomy by returning meaningful control. Second, make the rating system transparent and developmental, showing drivers exactly what drives their score with concrete, actionable feedback and an appeal path, which supports competence by letting them see how to improve and feel effective. A third optional change, adding driver community features or human support contacts, would strengthen relatedness. Each change targets a specific SDT need, rebuilding intrinsic motivation that pay alone cannot."
            }
          ]
        },
        {
          tier: "hard",
          title: "Two Theories, One Crisis at Najjar Pharmaceuticals",
          scenario: "Najjar Pharmaceuticals in Sin el Fil retained its skilled chemists by switching them to fresh-dollar salaries, but kept most administrative and warehouse staff on lira-based pay eroded by hyperinflation, with prices repriced against the dollar almost daily. The CEO wants a unified motivation strategy. The chemists, though well paid, complain their work has become repetitive QC checks with no input into research, and several feel stalled. The lira-paid staff, meanwhile, are furious about how little their pay buys compared to the dollar-paid chemists and have begun slacking. The HR director must explain to the board why a single fix (just paying everyone more lira, or just adding bonuses) will not solve both groups' problems, drawing on more than one theory.",
          qs: [
            {
              q: "Explain why the chemists' dissatisfaction and the warehouse staff's dissatisfaction require DIFFERENT theoretical lenses.",
              a: "The chemists are well compensated, so their problem is not pay (a hygiene factor) but a lack of motivators: their repetitive QC work offers little achievement, growth, or autonomy, which Herzberg and the Job Characteristics Model address. The warehouse staff's problem is a hygiene and fairness failure: lira pay erodes daily and is grossly unequal to the chemists' fresh-dollar pay, best analyzed through equity theory and the low valence of their reward in expectancy terms. One blanket fix cannot resolve two structurally different deficits."
            },
            {
              q: "Using the Job Characteristics Model, propose how to re-motivate the chemists without raising pay.",
              a: "The Job Characteristics Model says motivation rises when jobs offer skill variety, task identity, task significance, autonomy, and feedback. The chemists' QC role is narrow and autonomy-poor, so Najjar could enrich it vertically with job enrichment, involving them in research decisions, rotating them across varied analyses, and giving them ownership of whole projects with direct feedback. This raises autonomy, variety, and identity, creating the critical psychological states that drive intrinsic motivation, without changing their already-adequate pay."
            },
            {
              q: "For the lira-paid staff, combine equity theory and expectancy theory to recommend a fix and predict the consequences of inaction.",
              a: "Equity theory shows the lira staff perceive severe under-reward inequity versus the fresh-dollar chemists, prompting reduced effort and resentment, exactly the slacking observed. Expectancy theory adds that any lira-based reward has near-zero valence because hyperinflation destroys its real value, so even bonuses will not motivate. The fix is to restore fairness and valence by moving them toward value-protected or fresh-dollar pay tied to clear performance; if the company does nothing, equity and expectancy predict continued effort withdrawal, turnover, and possibly the loss of the staff who keep operations running."
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
          model: "Maslow's hierarchy of needs proposes five needs — physiological, safety, social, esteem, and self-actualization — arranged so that each level must be substantially satisfied before the next becomes dominant. Its intuitive appeal made it hugely popular in the 1960s and 1970s, but the evidence is unkind: very little support exists for the ranking of needs or even for a definite hierarchy at all (Wahba & Bridwell, 1976), there is little support for the prepotent nature of needs or the general utility of need theories (Kanfer et al., 2017), and such theories do not predict specific behaviors (Campbell & Pritchard, 1976). Herzberg's two-factor (motivation-hygiene) theory makes a sharper claim: extrinsic HYGIENE factors — supervision, company policy, salary, working conditions, relationships, status, security — can only remove dissatisfaction, while intrinsic MOTIVATORS — achievement, recognition, the work itself, responsibility, advancement, growth — create satisfaction and motivation. Satisfaction and dissatisfaction thus sit on two separate continua: the opposite of satisfaction is merely no satisfaction. The critique here is methodological: the critical incident method (“recall when you felt good or bad about your job”) invites self-serving bias — people credit the work for highs and blame the context for lows — and his white-collar professional samples did not always replicate among blue-collar workers. McClelland's three-needs theory shifts from universal hierarchies to ACQUIRED needs: the need for achievement (drive to succeed against standards), need for power (make others behave as they otherwise wouldn't), and need for affiliation (friendly, close relationships). Its evidence is comparatively solid: high-nAch employees show more positive moods, greater task interest, and perform very well in high-stakes conditions, and research supports nPow and nAff. What survives across the three? First, money and conditions are necessary but insufficient — they prevent dissatisfaction more than they energize. Second, the work itself is the prime mover: achievement, responsibility, and growth motivate. Third, people differ in their (learned) need profiles, so motivation should be diagnosed individually, not assumed from a universal pyramid.",
          tier: "easy"
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
          model: "Expectancy theory holds that an individual tends to act in a certain way based on the expectation that the act will be followed by a given outcome and on the attractiveness of that outcome. The expectancy model chains three linkages: A, the effort–performance linkage — will my effort actually produce performance?; B, the performance–reward linkage — will performance actually bring organizational rewards?; and C, the attractiveness of the reward — do those rewards serve my individual goals? Motivation requires all three: a broken machine (A), a biased appraisal (B), or an unwanted prize (C) each zeroes the chain. Equity theory adds a social comparison: employees compare their outcomes-to-inputs ratio with that of relevant REFERENTS — other persons, systems, or themselves in past roles — and act to correct perceived inequity, whether under-rewarded or over-rewarded. Two justice perceptions govern the verdict: distributive justice, the perceived fairness of the amount and allocation of rewards, and procedural justice, the perceived fairness of the process that determines them. Together the theories explain failing incentive plans precisely. A company may budget generous bonuses (high absolute outcomes) and still demotivate: if targets are unreachable, the effort–performance link snaps; if bonus allocation seems arbitrary or political, the performance–reward link and procedural justice collapse; if rewards are uniform gift cards nobody values, attractiveness fails; and if a colleague with visibly fewer inputs earns the same bonus, under-reward inequity triggers reduced effort, demands for redress, or exit — even though pay rose in absolute terms. The design checklist follows: make performance attainable through effort (training, resources), tie rewards to performance through transparent, consistently applied procedures, tailor rewards to what recipients actually want, and mind the comparisons employees inevitably make.",
          tier: "medium"
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
          model: "Self-determination theory (Ryan & Deci, 2000) maps motivation on a continuum from amotivation, through four types of extrinsic motivation — external regulation, introjected regulation, identified regulation, and integrated regulation — to intrinsic motivation, with the self-determination threshold crossed at identified regulation: beyond it, people act from endorsed values rather than external pushes. What moves a person along the continuum is the satisfaction of three basic psychological needs — competence, relatedness, and autonomy: “satisfaction of the three psychological needs will enhance employees' intrinsic motivation” (Gagné & Deci, 2005), and together they raise job satisfaction, effective performance, organizational citizenship behaviors, and well-being. Algorithmic management matters because organizations now delegate six management functions to algorithms (Parent-Rocheleau & Parker, 2022): monitoring, task assignment and/or goal setting, performance management, scheduling, compensation management, and job termination. Analyzed through SDT (Gagné et al., 2022), each function tends to frustrate a need: monitoring decreases autonomy and harms intrinsic motivation; algorithmic task assignment simplifies work, starving the need for competence; performance management undermines autonomous motivation and fosters a competitive climate; unpredictable scheduling impedes relatedness at home and at work; pay-for-performance compensation reduces feelings of autonomy; and automatic deactivation for “low performance” strikes both autonomy and competence. Hence the statement is accurate — by default. But the lecture's final framework (Parent-Rocheleau et al., 2024) shows the threat is a design choice, not destiny: systems that ensure transparency and keep humans in the loop, paired with policies that limit surveillance and monitoring, manage productivity fairly, maintain pay stability, provide constructive feedback, and preserve relationships, support autonomy, competence, and relatedness — and thereby self-determined motivation. The managerial conclusion: judge an algorithmic system by the same standard as a human manager — whether it feeds or starves the three needs that fuel motivation.",
          tier: "hard"
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
          ],
          check: {
            q: "In Tuckman's model, the stage marked by intragroup conflict as members resist the constraints the group imposes on individuality is:",
            o: [
              "Forming",
              "Storming",
              "Norming",
              "Performing"
            ],
            a: 1,
            e: "Storming is characterized by conflict over group structure and constraints on individuality, after which the group can move on to norming."
          }
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
          ],
          check: {
            q: "A set of expected behavior patterns attributed to someone occupying a given position in a group is called a:",
            o: [
              "Norm",
              "Role",
              "Status",
              "Cohesiveness rating"
            ],
            a: 1,
            e: "A role is the set of expected behaviors attached to a position; norms are shared standards and status is a member's rank or prestige."
          }
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
          ],
          check: {
            q: "According to the interactionist view of conflict, a manager should:",
            o: [
              "Eliminate all conflict to keep harmony",
              "Maintain a minimum level of functional conflict to keep the group viable and creative",
              "Encourage as much relationship conflict as possible",
              "Treat all conflict as proof the group is malfunctioning"
            ],
            a: 1,
            e: "The interactionist view holds that a minimum level of functional conflict keeps a group self-critical and creative, so total harmony can breed apathy."
          }
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
          ],
          check: {
            q: "Which feature most clearly distinguishes a work team from a work group?",
            o: [
              "It shares information among members",
              "It has individual accountability only",
              "It generates positive synergy through coordinated effort",
              "It is always larger than a group"
            ],
            a: 2,
            e: "A work team produces positive synergy so its collective output exceeds the sum of individual efforts, unlike a work group that mainly shares information."
          }
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
          ],
          check: {
            q: "A team with high psychological safety is best described as one where members:",
            o: [
              "Avoid all disagreement to keep the peace",
              "Feel safe taking interpersonal risks like admitting mistakes and asking questions",
              "Are guaranteed to make fewer errors than other teams",
              "Defer entirely to the highest-status member"
            ],
            a: 1,
            e: "Psychological safety is the shared belief that the team is safe for interpersonal risk-taking, so members can admit errors and raise concerns, which supports learning."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which sequence correctly orders Tuckman's five stages of group development?",
          o: [
            "Storming, Forming, Norming, Performing, Adjourning",
            "Forming, Storming, Norming, Performing, Adjourning",
            "Forming, Norming, Storming, Adjourning, Performing",
            "Norming, Forming, Storming, Performing, Adjourning"
          ],
          a: 1,
          h: [
            "The first stage is where members get acquainted, not where they clash.",
            "Right idea — that's the one.",
            "Norming (settling into close relationships) comes after the conflict of storming, not before.",
            "Forming, where members are uncertain and getting acquainted, must come first."
          ],
          e: "Tuckman's model runs Forming, Storming, Norming, Performing, and Adjourning, moving from initial uncertainty through conflict to a fully functioning group that eventually disbands."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In group structure, a 'norm' is best defined as:",
          o: [
            "The position an individual occupies in the group",
            "Acceptable standards of behavior shared by group members",
            "The degree to which members are attracted to and motivated to stay in the group",
            "A set of expected behavior patterns attributed to someone in a position"
          ],
          a: 1,
          h: [
            "That describes status, a member's rank or prestige, not a norm.",
            "Right idea — that's the one.",
            "That describes cohesiveness, not a norm.",
            "That describes a role, not a norm."
          ],
          e: "Norms are the acceptable standards or expectations of behavior that are shared by a group's members and guide how they act."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "According to the text, the key difference between a work group and a work team is that a team:",
          o: [
            "Has no formal leader at all",
            "Generates positive synergy through coordinated effort",
            "Is always larger than a work group",
            "Shares information but holds no joint accountability"
          ],
          a: 1,
          h: [
            "Teams often have leaders; the distinction is about synergy and shared work, not leaderlessness.",
            "Right idea — that's the one.",
            "Size is not the defining difference between groups and teams.",
            "Sharing information with neutral or negative synergy describes a work group, not a team."
          ],
          e: "A work team produces positive synergy through coordinated effort, so its collective performance exceeds the sum of individual inputs, whereas a work group mainly shares information."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The degree to which group members are attracted to one another and motivated to stay in the group is called group _____.",
          o: [],
          a: 0,
          accept: [
            "cohesiveness",
            "cohesion"
          ],
          h: [
            "It starts with 'cohe-' and describes how tightly knit a group is.",
            "Think about what holds members together and makes them want to stay."
          ],
          e: "Cohesiveness is the degree to which members are attracted to one another and share the group's goals, and it moderates the link between norms and productivity."
        },
        {
          type: "fill",
          tier: "easy",
          q: "_____ safety is the shared belief that the team is safe for interpersonal risk-taking, so members can speak up without fear of embarrassment or punishment.",
          o: [],
          a: 0,
          accept: [
            "psychological",
            "team psychological"
          ],
          h: [
            "The term was popularized by Amy Edmondson's research on teams.",
            "It is about feeling safe to take interpersonal risks like asking questions or admitting mistakes."
          ],
          e: "Team psychological safety is the shared belief that the team is safe for interpersonal risk-taking, enabling members to admit errors, ask questions, and raise concerns."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The view that all conflict is harmful and must be avoided is known as the _____ view of conflict.",
          o: [],
          a: 0,
          accept: [
            "traditional"
          ],
          h: [
            "It is the oldest of the three views and assumes conflict signals malfunction.",
            "Contrast it with the interactionist view, which sees some conflict as necessary."
          ],
          e: "The traditional view holds that all conflict is bad, indicates a malfunction within the group, and should be avoided."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "At a Beirut import firm, two procurement officers argue sharply over WHETHER to keep paying suppliers in scarce fresh dollars or switch to lollar-priced local stock. The debate stays focused on the sourcing decision and surfaces options no one had considered. This is best classified as:",
          o: [
            "Relationship conflict",
            "Functional task conflict",
            "Process conflict that has turned dysfunctional",
            "Cohesiveness breakdown"
          ],
          a: 1,
          h: [
            "Relationship conflict is interpersonal incompatibility; here the dispute is about the work decision itself.",
            "Right idea — task conflict over content that stays constructive is functional.",
            "Process conflict is about HOW work gets delegated, not which suppliers to pay; and nothing here is dysfunctional.",
            "Members are still engaged on the task, so cohesiveness is not the issue."
          ],
          e: "This is functional task conflict: disagreement about the content of the decision that keeps members engaged and improves the quality of the outcome."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A new hire on a generator-maintenance crew quickly learns that no one logs overtime even when shifts run long, because 'that's just how we do it here.' The new hire begins doing the same. This illustrates the power of:",
          o: [
            "Formal status systems",
            "Group norms",
            "Role conflict",
            "Adjourning"
          ],
          a: 1,
          h: [
            "Status is about rank; here the issue is an unwritten shared standard of behavior.",
            "Right idea — an informal shared standard the newcomer conforms to is a norm.",
            "Role conflict is competing expectations on one person, not a shared crew standard.",
            "Adjourning is the disbanding stage, irrelevant here."
          ],
          e: "The unwritten, shared expectation about not logging overtime is a norm, and the new hire's conformity shows how norms shape member behavior even without formal rules."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A bank branch manager wants a task force on deposit-restructuring to reach the best decision, not just a fast or agreeable one. To reduce the risk of groupthink, the most effective step is to:",
          o: [
            "Increase group cohesiveness so members trust each other more",
            "Assign someone to play devil's advocate and actively challenge proposals",
            "Have the manager state her preferred option first to anchor the discussion",
            "Keep the group as small as possible to speed agreement"
          ],
          a: 1,
          h: [
            "High cohesiveness can actually worsen groupthink by raising pressure to conform.",
            "Right idea — a devil's advocate institutionalizes dissent and counters groupthink.",
            "Stating the leader's view first amplifies conformity pressure, the core of groupthink.",
            "Speed and quick agreement are exactly the conditions that breed groupthink."
          ],
          e: "Assigning a devil's advocate forces critical evaluation of alternatives and legitimizes dissent, directly counteracting groupthink's pressure toward premature consensus."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When a person faces incompatible expectations from different sources, such as a supervisor demanding cash sales while head office bans accepting fresh dollars, they experience role _____.",
          o: [],
          a: 0,
          accept: [
            "conflict"
          ],
          h: [
            "It is the specific term for competing or incompatible role expectations.",
            "It is not about ambiguity of the role, but about clashing demands."
          ],
          e: "Role conflict occurs when an individual confronts divergent or incompatible role expectations, making it impossible to fully satisfy all of them at once."
        },
        {
          type: "fill",
          tier: "medium",
          q: "A team that draws on members from different departments, such as IT, compliance, and operations, to work on a shared problem is called a _____ team.",
          o: [],
          a: 0,
          accept: [
            "cross-functional",
            "cross functional",
            "crossfunctional"
          ],
          h: [
            "The name describes pulling members across functional areas.",
            "Hyphenate two words: the second is 'functional'."
          ],
          e: "A cross-functional team brings together individuals from different functional specialties or work areas to combine diverse expertise on a common task."
        },
        {
          type: "fill",
          tier: "medium",
          q: "The tendency for individuals to expend less effort when working collectively than when working alone is called social _____.",
          o: [],
          a: 0,
          accept: [
            "loafing"
          ],
          h: [
            "It is why some team members 'coast' on the efforts of others.",
            "The phrase pairs with 'social' and rhymes with 'oafing'."
          ],
          e: "Social loafing is the tendency to exert less effort in a group because individual contributions are harder to identify, which can be curbed by making contributions measurable."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A Lebanese fintech startup's product team is highly cohesive and consistently hits aggressive deadlines, yet quality is slipping and customer complaints rise. Management notes the team's norms reward shipping fast over flagging defects. The cohesiveness-productivity relationship here best illustrates that:",
          o: [
            "High cohesiveness always raises productivity, so the data must be wrong",
            "Cohesiveness boosts performance only when group norms align with organizational goals",
            "Cohesiveness is irrelevant to performance; only individual skill matters",
            "Lowering cohesiveness is the only way to restore quality"
          ],
          a: 1,
          h: [
            "Cohesiveness is a moderator, not a guaranteed performance booster; the slipping quality is real.",
            "Right idea — when norms are misaligned, high cohesiveness drives the group efficiently in the wrong direction.",
            "The evidence shows cohesiveness clearly affects how strongly norms are enforced.",
            "The fix is realigning norms with quality goals, not destroying cohesiveness."
          ],
          e: "Cohesiveness amplifies conformity to whatever the group's norms are; because these norms favor speed over quality, high cohesiveness magnifies the wrong behavior. The leverage point is realigning norms with organizational goals."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A manager argues: 'My ops team almost never disagrees and everyone gets along — that proves it's a great team.' The strongest critique grounded in conflict and psychological-safety research is that:",
          o: [
            "Total absence of conflict may signal low psychological safety or conformity, not high performance",
            "All harmony is dysfunctional and the team should be deliberately destabilized",
            "Relationship conflict should be increased to boost creativity",
            "Cohesiveness and psychological safety are the same construct"
          ],
          a: 0,
          h: [
            "Right idea — silence can mean people don't feel safe to dissent, which masks problems.",
            "The interactionist view values some functional conflict, but it does not call for blanket destabilization.",
            "Relationship conflict is consistently dysfunctional; it is task conflict that can aid creativity.",
            "They are distinct: cohesiveness is attraction to the group; psychological safety is safety to take interpersonal risks."
          ],
          e: "The interactionist view and psychological-safety research suggest a complete lack of disagreement often reflects suppressed dissent or low safety to speak up, which hides errors rather than indicating excellence."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "Two branch teams of a frozen-deposit bank merge after layoffs. Members keep relitigating who leads which function and re-storm whenever a new crisis circular drops from BDL. Using group-development theory, the BEST managerial interpretation and response is:",
          o: [
            "The merged group has regressed toward storming; clarify roles and status to enable norming",
            "The group is adjourning, so the manager should disband it",
            "The group skipped forming, so the manager should restart team-building from scratch and ignore the conflict",
            "The conflict is purely relationship-based, so members should be separated permanently"
          ],
          a: 0,
          h: [
            "Right idea — recurring role/status fights are storming, and resolving them lets the group reach norming.",
            "Adjourning is the disbanding stage; the team is being kept and reformed, not dissolved.",
            "Re-forming from zero ignores that the group must work through its storming conflict, not bypass it.",
            "Much of the fight is task/process conflict over roles, which addressing structure can resolve."
          ],
          e: "Recurring disputes over roles and status are hallmarks of the storming stage, which a merged group can revisit; clarifying role and status structure helps the group progress to norming and performing rather than abandoning it."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The phenomenon in which a highly cohesive group's desire for unanimity overrides realistic appraisal of alternatives, suppressing dissent, is called _____.",
          o: [],
          a: 0,
          accept: [
            "groupthink",
            "group think"
          ],
          h: [
            "Irving Janis coined this single-word term for pressured consensus.",
            "It is the failure mode that devil's advocacy and dissent are meant to prevent."
          ],
          e: "Groupthink is the pressure for conformity in cohesive groups that deters members from critically appraising unusual or unpopular views, degrading decision quality."
        },
        {
          type: "fill",
          tier: "hard",
          q: "Edmondson found that higher psychological safety can make a team's recorded error rate appear to rise; this is because safety increases error _____ rather than the number of errors made.",
          o: [],
          a: 0,
          accept: [
            "reporting",
            "disclosure",
            "detection"
          ],
          h: [
            "The errors were already happening; safety changes whether people admit and log them.",
            "Think about what people do with mistakes when they feel safe: they speak up and ___ them."
          ],
          e: "Psychologically safe teams report and discuss errors openly, so measured error rates rise even though the teams actually learn faster and ultimately perform better."
        },
        {
          type: "fill",
          tier: "hard",
          q: "A self-managed team that takes on full responsibility for an entire process, including planning, scheduling, and operating decisions with little supervision, exemplifies high team _____ (the granting of decision authority to the team).",
          o: [],
          a: 0,
          accept: [
            "empowerment",
            "autonomy"
          ],
          h: [
            "It is the delegation of authority and discretion down to the team itself.",
            "Self-managed teams are defined by a high degree of this."
          ],
          e: "Empowerment (autonomy) means giving the team the authority to make and execute decisions about its own work, which is the defining feature of self-managed teams."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Forming the Generator Co-op Committee",
          scenario: "In a Tripoli apartment building, EDL now supplies barely two hours of state power a day, and residents depend entirely on the neighborhood 'ishtirak' generator owner who keeps raising the per-amp price and cutting hours. Eight tenants agree to form a building committee to negotiate collectively and eventually buy a shared generator. At the first meeting, people are polite but unsure: no one is certain who is in charge, what the committee can actually decide, or whether it will even last past the next bill. Over the following weeks the meetings grow tense as two retired engineers clash over technical plans while a shopkeeper and a teacher argue about how to split costs between high-use and low-use flats. Eventually the group settles into a rhythm: they agree on a cost-sharing rule, pick a treasurer, and start presenting a united front to the generator owner.",
          qs: [
            {
              q: "Identify the stages of group development this committee passes through and give one piece of evidence for each from the scenario.",
              a: "The committee begins in the forming stage, shown by members being polite but uncertain about who is in charge and what the group can decide. It then enters storming, evidenced by the engineers clashing over technical plans and the dispute over cost-splitting. Finally it reaches norming, shown by agreeing on a cost-sharing rule, choosing a treasurer, and acting as a unified group toward the generator owner."
            },
            {
              q: "Is the conflict described in this committee necessarily a sign that the group is failing? Explain using the lecture's view of conflict.",
              a: "No; under the interactionist and modern human-relations views, some conflict is natural and even necessary for a group to progress. The disagreements over technical plans and cost-sharing are largely functional task conflict that forces the committee to confront real trade-offs before settling its rules. Working through storming, rather than suppressing it, is what allows the group to reach the norming stage."
            },
            {
              q: "Once the committee selects a treasurer, how do the concepts of role and status appear in the group's structure?",
              a: "The treasurer takes on a defined role, a set of expected behaviors attached to that position, such as collecting money and tracking the generator account. This position also confers status, a rank or prestige within the group that may give the treasurer more influence in financial decisions. Clarifying these structural elements helps reduce uncertainty and supports the move from storming to norming."
            }
          ]
        },
        {
          tier: "medium",
          title: "The Daily Repricing Huddle",
          scenario: "A mid-size electronics retailer in Beirut survives the lira's collapse by repricing its entire inventory every morning against the day's parallel-market USD rate. A five-person 'pricing huddle' meets at 8 a.m.: a buyer who knows supplier costs in fresh dollars, a cashier-supervisor who hears customer pushback, an accountant tracking lollar-versus-cash margins, an IT person who updates the POS system, and the store manager. The group shares numbers efficiently, but each member basically owns their own slice and reports out; the manager then makes the call alone. Lately, mispriced items and stockouts are rising. An outside consultant observes that the huddle 'is a work group, not a team,' and that one quiet member who spots pricing errors early never speaks up because a senior colleague mocks 'amateur' suggestions.",
          qs: [
            {
              q: "Using the lecture's criteria, justify the consultant's claim that the huddle is a work group rather than a work team.",
              a: "The huddle mainly shares information and lets each member work in their individual area of responsibility, with the manager deciding alone, which matches the definition of a work group. There is little coordinated, joint effort that produces positive synergy, so collective performance is roughly the sum of individual inputs. A genuine work team would share leadership and accountability and combine efforts so the output exceeds what members could achieve separately."
            },
            {
              q: "How could the manager redesign the huddle to operate more like a team, and what would 'positive synergy' look like in this pricing context?",
              a: "The manager could give the huddle shared accountability for daily pricing accuracy and have members jointly build the price list rather than each reporting a silo. Positive synergy would mean the buyer's cost data, the cashier's customer feedback, and the accountant's margin view are combined so the final prices are better than any one member could set alone. Rotating or sharing decision authority would convert parallel individual work into coordinated collective output."
            },
            {
              q: "The quiet member who spots errors stays silent because dissent gets mocked. Diagnose this using psychological safety and explain the business cost.",
              a: "The team has low psychological safety: members do not believe it is safe to take the interpersonal risk of raising concerns, so the quiet member withholds valuable error-catching information. Because mistakes are not surfaced, mispriced items and stockouts persist, directly hurting margins in an environment where a single day's wrong USD rate is costly. Raising psychological safety, for instance by the manager inviting and protecting dissent, would let the team catch pricing errors early."
            }
          ]
        },
        {
          tier: "hard",
          title: "The Restructuring Task Force",
          scenario: "A Lebanese bank under capital controls assembles a cross-functional task force to design how it will restructure customers' frozen deposits, splitting balances into 'lollars' payable on a long schedule and small 'fresh dollar' allowances. The eight-member force includes branch managers, a compliance officer, a risk analyst, an IT lead, and a communications head. It is deliberately cohesive: members socialize together, take pride in 'protecting the bank,' and rarely disagree in meetings. They quickly converge on an aggressive plan that minimizes the bank's payouts. The risk analyst privately doubts depositors will accept it and fears a legal backlash, but senior members signal that 'we're all aligned' and that questioning the plan is disloyal. The plan ships, depositors revolt, lawsuits follow, and regulators force a costlier redo. In the post-mortem, the analyst says, 'I knew, but it didn't feel safe to be the one who broke the consensus.'",
          qs: [
            {
              q: "Diagnose the decision-making failure using groupthink. Identify at least two specific symptoms present in the scenario.",
              a: "The task force exhibits groupthink: a highly cohesive group's drive for unanimity overrode a realistic appraisal of alternatives. Symptoms include direct pressure on dissenters (treating questions as disloyalty), an illusion of unanimity ('we're all aligned'), and self-censorship by the risk analyst who suppressed his doubts. These dynamics led the group to converge prematurely on a flawed plan without testing whether depositors would accept it."
            },
            {
              q: "The task force avoided overt conflict, yet that was a weakness. Explain how the three views of conflict and the task-versus-relationship distinction apply here.",
              a: "Under the traditional view, the group's lack of conflict might look healthy, but the interactionist view holds that some functional conflict is necessary to keep a group critical and creative. What the force needed was functional task conflict, open disagreement about the content of the restructuring plan, to stress-test its assumptions about depositor and regulatory reaction. By treating any disagreement as relationship conflict or disloyalty, the group suppressed exactly the constructive task conflict that could have prevented the failure."
            },
            {
              q: "Recommend two concrete structural or process changes that would have improved this decision, linking each to a course concept.",
              a: "First, the leader could assign a devil's advocate or use formal dissent procedures, institutionalizing functional task conflict so alternatives are challenged before commitment. Second, leaders should build psychological safety by explicitly inviting and protecting critical input, so members like the risk analyst can voice concerns without fearing they are 'breaking consensus.' Reducing the pressure for unanimity, for example by gathering anonymous input or bringing in outside reviewers, would weaken groupthink while preserving the group's cohesiveness for execution."
            }
          ]
        },
        {
          tier: "hard",
          title: "From Group to Self-Managed Team in the Blackout",
          scenario: "A Beirut hospital's biomedical department keeps life-support and lab equipment running through constant power cuts, fuel shortages, and failing generators. Historically it operated as a work group: a department head assigned every task, technicians worked their own tickets, and no one acted without sign-off, which caused dangerous delays during night-time outages when the head was unreachable. After a near-miss when an ICU generator transfer failed at 3 a.m., management converts the night shift into a self-managed team of four technicians empowered to diagnose, prioritize, and execute repairs on their own, sharing accountability for uptime. The transition is rough: the team re-storms over who decides priorities, one strong technician dominates while a junior one social-loafs, and trust about admitting mistakes is fragile. Six months in, after deliberate work on shared norms and openness about errors, the night team posts the best equipment-uptime record in the hospital.",
          qs: [
            {
              q: "Contrast the department's original structure with the new night-shift unit using the work-group versus work-team distinction, and explain why the change mattered operationally.",
              a: "Originally the department was a work group: members worked individually on assigned tickets with no shared accountability and required the head's sign-off, so collective output was just the sum of individual efforts and stalled when he was absent. The night shift becomes a work team with shared accountability and positive synergy, empowered to make and execute decisions jointly. Operationally this matters because emergencies at 3 a.m. require coordinated, autonomous action that a sign-off-dependent work group could not provide."
            },
            {
              q: "Analyze the difficulties in the transition using group development and social loafing, and explain why they are not necessarily signs the team will fail.",
              a: "The team re-storms as it renegotiates who decides priorities, which is the normal storming stage that a newly empowered team must work through before norming. The dominant technician and the social-loafing junior reflect classic team problems: unequal contribution and reduced individual effort when accountability is diffuse. These are expected growing pains, and because the team later develops shared norms and improves, the conflict was functional storming rather than terminal dysfunction."
            },
            {
              q: "The team only excelled after members became open about mistakes. Connect this to psychological safety, and propose how a manager could sustain it while also curbing social loafing.",
              a: "The improvement reflects rising psychological safety: technicians came to believe it was safe to admit errors and ask for help, which is essential in high-stakes equipment work where hidden mistakes can be fatal. To sustain it, a manager should reward error reporting and learning rather than punishing the messenger, and protect dissent. To curb social loafing simultaneously, the manager can make individual contributions visible, for example by tracking who handled which repairs, so accountability is identifiable without undermining the safety to admit problems."
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
          model: "Group cohesiveness is the degree to which members are attracted to one another and share the group's goals — and intuition says more is better. The lecture's cohesiveness–alignment matrix breaks that intuition: when cohesiveness is high AND the group's goals align with the organization's, productivity rises strongly; with low cohesiveness but high alignment it rises moderately; with low cohesiveness and low alignment there is no significant effect; but with HIGH cohesiveness and LOW alignment, productivity DECREASES — a united group marching efficiently in the wrong direction. Group structure explains the machinery: norms — the shared standards a group accepts — set what “a fair day's work” means, so a cohesive group enforces its norms more powerfully, for good or ill; status systems determine whose voice counts; and as size grows, social loafing — expending less effort collectively than individually — dilutes contributions unless accountability is preserved. The deepest correction comes from psychological safety: Edmondson (1999) defines it as a shared belief that the team is safe for interpersonal risk taking, and the lecture stresses it DIFFERS from cohesiveness — indeed, cohesion can reduce willingness to disagree, the very dynamic of groupthink (Janis, 1982). A tight-knit team that prizes harmony may hide mistakes and silence doubts, while a psychologically safe team seeks feedback, shares information, asks for help, and speaks up — behaviors tied to individual and team performance (Edmondson & Bransby, 2023; Google's Project Aristotle). The claim is therefore false as stated: cohesiveness is an amplifier, not a guarantee. High performance requires cohesion pointed at organizational goals, norms that value candor, controlled group size or clear accountability against loafing, and psychological safety so that disagreement — the functional kind of conflict — stays possible.",
          tier: "easy"
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
          model: "Work groups interact primarily to share information and make decisions that help each member do their own job more efficiently and effectively; work teams work intensely on a specific, common goal using positive synergy, individual and mutual accountability, and complementary skills. The contrast runs through every feature: groups have one leader clearly in charge, teams share the leadership role; group members are accountable only for themselves, team members for themselves and the team; a group's purpose is the broader organizational purpose, a team creates its own specific purpose; group work is done individually, team work collectively; group meetings prize efficiency without open-ended discussion, team meetings live on open-ended discussion and collaborative problem-solving; group performance is measured indirectly through influence on others, team performance directly by evaluating collective work output; and teams can be quickly assembled, deployed, refocused, and disbanded. Effectiveness, however, is not automatic — the lecture lists nine characteristics of effective teams: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, and both internal support (training, systems) and external support (resources from the organization). Modern research adds team psychological safety — the shared belief that the team is safe for interpersonal risk taking — which Google's Project Aristotle and Edmondson's work tie to learning behavior and performance. As for when a team is worth its overhead: the lecture notes that it is the complexity and interdependence of tasks that influence a group's effectiveness — when work is complex and interdependent, requiring synergy among complementary skills and mutual accountability, a true team pays off; when tasks are separable and individual, a well-run work group achieves the result with less coordination cost.",
          tier: "medium"
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
          model: "Conflict — perceived incompatible differences that result in interference or opposition — has been viewed three ways. The traditional view holds all conflict is bad and must be avoided; the human relations view treats it as a natural and inevitable outcome of any group; and the interactionist view goes further: some conflict is NECESSARY for a group to perform effectively. The interactionist position rests on the distinction between functional conflicts, which support group goals and improve performance, and dysfunctional ones, which prevent goal achievement — and on the inverted-U relationship between conflict level and performance. At low or no conflict, a group turns apathetic and stagnant, unresponsive to change and short of new ideas — performance is LOW; at an optimal level, conflict is functional and the group is viable and self-critical — performance peaks; at high conflict the group becomes disruptive, chaotic, and uncooperative — performance collapses again. Type matters as much as level: task conflict concerns the content and goals of the work, relationship conflict the interpersonal frictions between people, and process conflict how the work gets done. Behfar et al. (2008) show each type rewards a different resolution strategy: task conflict is best handled through discussion and debate with open communication, working toward compromise or consensus; relationship conflict responds to discussion plus specific solutions to specific problems, often with deliberate avoidance of purely personal issues — at some cost to satisfaction; and process conflict is best resolved through debate and consensus that establishes rotating responsibilities. The statement is therefore wrong on the evidence: eliminating conflict drives a team to the apathetic end of the curve, the very failure mode of groupthink-prone, over-cohesive teams. The managerial task is to keep conflict at a functional level and of a functional type — vigorous task debate inside a psychologically safe climate that stops disagreement about ideas from souring into conflict about persons.",
          tier: "hard"
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
          ],
          check: {
            q: "Communication has truly occurred only when:",
            o: [
              "A message has been sent through a channel",
              "Meaning has been transferred AND understood",
              "The sender feels confident the point was made",
              "The message was put in writing"
            ],
            a: 1,
            e: "Communication is the transfer and understanding of meaning; transmission alone, without understanding by the receiver, is not communication."
          }
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
          ],
          check: {
            q: "Which behavior most directly reduces interpersonal communication barriers?",
            o: [
              "Filtering information to reassure the receiver",
              "Using heavy jargon to sound precise",
              "Giving and seeking feedback",
              "Choosing the leanest available channel"
            ],
            a: 2,
            e: "Feedback turns one-way transmission into two-way communication, letting the sender confirm that meaning was understood and correcting distortion."
          }
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
          ],
          check: {
            q: "The grapevine in an organization is best described as:",
            o: [
              "The official downward communication channel",
              "The informal communication network among employees",
              "A type of formal written report",
              "The chain of command for upward communication"
            ],
            a: 1,
            e: "The grapevine is the informal network through which information and rumor travel; an active grapevine often signals gaps in official communication."
          }
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
          ],
          check: {
            q: "When choosing how to deliver an ambiguous, emotionally sensitive message, you should select a channel that is:",
            o: [
              "As lean as possible to stay neutral",
              "High in richness, such as face-to-face",
              "Always written for a paper trail",
              "Broadcast to the largest audience"
            ],
            a: 1,
            e: "Rich channels like face-to-face carry multiple cues and immediate feedback, making them best suited to ambiguous, emotionally charged messages."
          }
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
        },
        {
          type: "mcq",
          tier: "easy",
          q: "What is communication, as defined in the lecture?",
          o: [
            "The transfer of authority from a manager to a subordinate",
            "The transfer and understanding of meaning between people",
            "The act of speaking clearly and loudly",
            "The recording of information in written documents"
          ],
          a: 1,
          h: [
            "That describes delegation, not communication.",
            "Right idea — that's the one.",
            "Speaking clearly helps, but communication is broader than delivery and requires shared meaning.",
            "Documentation is one channel, but communication is the transfer AND understanding of meaning."
          ],
          e: "Communication is the transfer and understanding of meaning; if meaning is not understood, communication has not truly occurred."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "In the communication process model, what is 'encoding'?",
          o: [
            "Converting a message into symbolic form",
            "The medium through which a message travels",
            "Translating a received message back into understandable form",
            "Anything that interferes with the message"
          ],
          a: 0,
          h: [
            "Right idea — that's the one.",
            "That is the channel.",
            "That is decoding, which the receiver does.",
            "That is noise."
          ],
          e: "Encoding is converting a message into symbolic form (words, gestures, numbers) so it can be transmitted through a channel."
        },
        {
          type: "mcq",
          tier: "easy",
          q: "Which of the following is a barrier to effective interpersonal communication?",
          o: [
            "Active listening",
            "Feedback",
            "Filtering",
            "Empathy"
          ],
          a: 2,
          h: [
            "Active listening overcomes barriers rather than creating them.",
            "Feedback reduces distortion; it is a remedy, not a barrier.",
            "Right idea — that's the one.",
            "Empathy improves understanding rather than blocking it."
          ],
          e: "Filtering is the deliberate manipulation of information to make it appear more favorable to the receiver, and it is a recognized communication barrier."
        },
        {
          type: "fill",
          tier: "easy",
          q: "In the communication process, _____ is any disturbance that interferes with the transmission or understanding of a message.",
          o: [],
          a: 0,
          accept: [
            "noise"
          ],
          h: [
            "It is the element that distorts the message anywhere along the channel.",
            "One word; think of static on a phone line."
          ],
          e: "Noise is any disturbance — physical, semantic, or psychological — that interferes with the transmission or understanding of the message."
        },
        {
          type: "fill",
          tier: "easy",
          q: "The grapevine is the term for the organization's _____ communication network.",
          o: [],
          a: 0,
          accept: [
            "informal",
            "unofficial"
          ],
          h: [
            "It is the opposite of the official, formal network.",
            "One word describing rumor and gossip channels."
          ],
          e: "The grapevine is the informal organizational communication network through which information (and rumor) flows outside official channels."
        },
        {
          type: "fill",
          tier: "easy",
          q: "Communication that flows from a manager down to employees is called _____ communication.",
          o: [],
          a: 0,
          accept: [
            "downward",
            "downwards"
          ],
          h: [
            "Think about the direction relative to the hierarchy.",
            "One word; the opposite of upward."
          ],
          e: "Downward communication flows from a manager to employees, used to inform, direct, coordinate, and evaluate."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A Beirut firm posts new EDL-rationing work hours in an internal email, but staff who rely on the WhatsApp group never see it and arrive at the wrong time. Which barrier best explains the breakdown?",
          o: [
            "Filtering",
            "Emotions",
            "Information overload",
            "Improper channel selection"
          ],
          a: 3,
          h: [
            "Nothing was manipulated to look favorable, so this is not filtering.",
            "No strong feelings distorted the message here.",
            "The volume of messages was not the issue.",
            "Right idea — the chosen medium did not reach the intended receivers."
          ],
          e: "Choosing a channel that the receivers do not actually monitor is a channel-selection barrier; richness and reach must match the audience and message."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "During the lira collapse a CFO repeatedly emails staff that 'finances are under control' to avoid panic, even as fresh-dollar reserves run low. Distorting the message to make it look favorable is an example of:",
          o: [
            "Jargon",
            "Filtering",
            "Active listening",
            "Feedback"
          ],
          a: 1,
          h: [
            "Jargon is specialized terminology, not deliberate slanting.",
            "Right idea — favorable distortion of information is the definition.",
            "Active listening is a receiver skill, not the sender slanting a message.",
            "Feedback would expose the gap, not create it."
          ],
          e: "Filtering is deliberately manipulating information so it appears more favorable to the receiver — exactly what the CFO is doing."
        },
        {
          type: "mcq",
          tier: "medium",
          q: "A manager must deliver complex, emotionally sensitive layoff news during the banking crisis. According to channel richness, which medium is most appropriate?",
          o: [
            "A mass email to all staff",
            "A printed memo on the noticeboard",
            "A face-to-face conversation",
            "A line in the monthly newsletter"
          ],
          a: 2,
          h: [
            "Email is lean and impersonal for sensitive, ambiguous news.",
            "A noticeboard memo is the leanest channel, ill-suited here.",
            "Right idea — rich, ambiguous, emotional messages need the richest channel.",
            "A newsletter is a low-richness, delayed channel."
          ],
          e: "Face-to-face is the richest channel (immediate feedback, multiple cues, personal focus) and best fits ambiguous, emotionally charged messages like layoffs."
        },
        {
          type: "fill",
          tier: "medium",
          q: "When a manager rephrases an employee's statement to confirm understanding — 'So you're saying the generator fuel budget ran out early?' — they are using a key active-listening behavior called _____.",
          o: [],
          a: 0,
          accept: [
            "paraphrasing",
            "paraphrase",
            "paraphrasing the message",
            "reflecting"
          ],
          h: [
            "It means restating the speaker's idea in your own words.",
            "One word ending in -ing."
          ],
          e: "Paraphrasing restates the sender's message in the listener's own words to verify accurate understanding, a core active-listening behavior."
        },
        {
          type: "fill",
          tier: "medium",
          q: "Communication in which the receiver responds back to the sender, allowing the sender to confirm meaning, is called _____ communication.",
          o: [],
          a: 0,
          accept: [
            "two-way",
            "two way",
            "twoway",
            "2-way"
          ],
          h: [
            "It is the opposite of one-way communication.",
            "Think about whether the receiver replies."
          ],
          e: "Two-way communication includes feedback from the receiver, which reduces distortion and confirms that meaning was understood."
        },
        {
          type: "fill",
          tier: "medium",
          q: "On the Communication Square (Four Sides of a Message), the side that reveals what the sender feels about the receiver — the 'how we get along' dimension — is the _____ side.",
          o: [],
          a: 0,
          accept: [
            "relationship"
          ],
          h: [
            "It is one of the four sides alongside factual, self-revelation, and appeal.",
            "Think about how sender and receiver relate to each other."
          ],
          e: "The relationship side conveys what the sender thinks of the receiver and how they regard their relationship, often carried by tone, gesture, and phrasing."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "An employee says to a manager during a fuel-queue delay, 'The tank is almost empty.' Using the Communication Square, which interpretation reflects the APPEAL side of the message?",
          o: [
            "A factual report that the fuel level is low",
            "A hint that the employee feels anxious and overwhelmed",
            "An implied request: 'please arrange a refill now'",
            "A signal that the employee resents being asked to manage the generator"
          ],
          a: 2,
          h: [
            "That is the factual side — the literal information.",
            "That is the self-revelation side — what it discloses about the speaker.",
            "Right idea — the appeal side is what the sender wants the receiver to do.",
            "That is the relationship side — how they regard each other."
          ],
          e: "The appeal side captures what the sender wants to achieve in the receiver: here, an implied request to act and refill the tank."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A CEO uses an all-channel network for a fast-moving capital-controls crisis, but decisions stall as everyone debates. Which trade-off best explains this outcome?",
          o: [
            "All-channel networks are the slowest and least accurate of all networks",
            "All-channel networks maximize member satisfaction and speed but can sacrifice clear leadership and decisiveness",
            "The wheel network would have produced even more confusion",
            "Chain networks are best for complex, urgent problems requiring wide input"
          ],
          a: 1,
          h: [
            "All-channel networks are typically fast and accurate, not the slowest.",
            "Right idea — open participation aids satisfaction and speed but no clear leader can emerge, stalling decisions.",
            "The wheel concentrates flow through a leader and would speed decisions, not worsen them.",
            "Chain networks are slow and rigid, poorly suited to urgent, complex input."
          ],
          e: "All-channel networks give high satisfaction and good speed but no single leader emerges, so under crisis they can stall on decisiveness; a wheel centralizes a leader for faster decisions."
        },
        {
          type: "mcq",
          tier: "hard",
          q: "A manager insists 'I sent the memo, so I communicated the policy.' What is the deepest flaw in this reasoning?",
          o: [
            "Memos are an informal channel and cannot carry policy",
            "Transmission is not communication; meaning must be understood by the receiver",
            "Downward communication is never appropriate for policy",
            "Written channels are always richer than spoken ones"
          ],
          a: 1,
          h: [
            "Memos are a legitimate formal channel; that is not the core flaw.",
            "Right idea — sending a message does not guarantee shared meaning.",
            "Downward communication is the normal route for policy.",
            "Written channels are leaner, not richer, than face-to-face."
          ],
          e: "Communication requires the transfer AND understanding of meaning; merely transmitting a memo does not confirm that the receiver decoded and understood it."
        },
        {
          type: "fill",
          tier: "hard",
          q: "When a sender's words say one thing but their tone and body language contradict it, the receiver typically trusts the _____ communication cues over the verbal ones.",
          o: [],
          a: 0,
          accept: [
            "nonverbal",
            "non-verbal",
            "non verbal",
            "body language"
          ],
          h: [
            "Think about cues conveyed without words.",
            "These cues often carry more weight than the spoken words."
          ],
          e: "Nonverbal cues (tone, facial expression, body language) often carry more credibility than words, and contradictions create mixed messages that confuse the receiver."
        },
        {
          type: "fill",
          tier: "hard",
          q: "The communication network that channels all flow through a single central figure, fastest for simple tasks but dependent on that leader, is the _____ network.",
          o: [],
          a: 0,
          accept: [
            "wheel"
          ],
          h: [
            "Picture spokes radiating from one hub.",
            "One word; contrast with chain and all-channel."
          ],
          e: "In the wheel network all communication flows through one central person, producing fast, accurate results for simple tasks but high dependence on that leader."
        },
        {
          type: "fill",
          tier: "hard",
          q: "Reducing a face-to-face conversation to a one-line text, stripping out tone and immediate feedback, lowers the channel's _____.",
          o: [],
          a: 0,
          accept: [
            "richness",
            "channel richness",
            "information richness"
          ],
          h: [
            "It is the term for how much information a channel can carry.",
            "Face-to-face is high in it; a memo is low."
          ],
          e: "Channel richness is the amount of information a channel can transmit; reducing feedback, cues, and personal focus lowers richness and raises the risk of misunderstanding."
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
          ],
          tier: "easy"
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
          ],
          tier: "medium"
        },
        {
          tier: "easy",
          title: "Lost in the Generator Schedule at Mira Pharmacy",
          scenario: "Mira runs a small pharmacy in Achrafieh that depends entirely on a private generator (ishtirak) capped at a 10-ampere subscription. Because EDL delivers only a few hours of state power a day, the building's generator operator changes the daily cut-off times constantly to ration fuel. Mira jots the new generator hours on a sticky note at the front counter each morning. Her two part-time assistants, Karim and Lina, work split shifts and rarely see the note before stocking the refrigerated insulin, which must stay cold. Last week Lina left the fridge door propped open right as the generator cut out, spoiling a tray of insulin. Mira complained that she 'told everyone' the schedule, yet both assistants insist they never received clear timing.",
          qs: [
            {
              q: "Using the communication process model, identify where the breakdown occurred between Mira (sender) and her assistants (receivers).",
              a: "Mira encoded the message correctly (the sticky note) but the breakdown is in the channel and decoding: the front-counter note is a channel the split-shift assistants do not reliably see, so the message is never received or decoded. Because there was no feedback loop confirming the assistants understood that day's hours, Mira assumed transmission equaled communication, but no transfer and understanding of meaning actually took place."
            },
            {
              q: "Name one communication barrier at work here and one practical fix Mira could apply.",
              a: "The main barrier is improper channel selection: a static sticky note does not reach receivers who are not present when it is posted. A practical fix is to send the daily generator hours through a shared WhatsApp group every morning and ask each assistant to reply with a thumbs-up, building in feedback that confirms the message was received and understood."
            },
            {
              q: "Why does adding feedback turn this into more effective communication?",
              a: "Feedback converts one-way transmission into two-way communication, letting Mira verify that meaning was actually understood rather than merely sent. A simple confirmation reply would have surfaced that Lina did not know the cut-off time, allowing correction before the insulin spoiled."
            }
          ]
        },
        {
          tier: "medium",
          title: "The Reassuring Email at Wadih Imports",
          scenario: "Wadih Imports brings in kitchen appliances and prices them in fresh dollars, repricing daily as the lira slides. Cash flow is tight because much of the company's money is trapped as 'lollars' in a frozen bank account under capital controls, while suppliers demand fresh dollars. The operations manager, Rania, knows the company may miss two suppliers' payments next month. Her director, however, sends a cheerful all-staff email each Friday saying 'liquidity is healthy, no cause for concern,' fearing that honest news will trigger resignations. Meanwhile warehouse staff hear through the grapevine that a supplier has stopped shipping, and morale and trust are eroding. When Rania tries to raise the real numbers in meetings, the director talks over her and changes the subject.",
          qs: [
            {
              q: "Identify the communication barrier in the director's Friday emails and explain its risk.",
              a: "The director is filtering: deliberately manipulating information so liquidity appears more favorable than it is to avoid panic. Filtering destroys credibility because once staff discover the gap between the rosy emails and the grapevine reality, they discount all future official messages, which is exactly what is eroding trust at Wadih Imports."
            },
            {
              q: "What role is the grapevine playing, and how should management respond to it?",
              a: "The grapevine is the informal network filling the vacuum left by withheld official information; rumors about the halted supplier are spreading because formal downward communication is dishonest. Rather than suppress it, management should respond by providing accurate, timely information through official channels, since an active grapevine usually signals that employees feel they are not getting straight answers."
            },
            {
              q: "The director keeps interrupting Rania. Diagnose this using upward communication and active listening.",
              a: "By talking over Rania the director is blocking upward communication, the channel managers rely on to learn about problems from below. He also fails at active listening: instead of paraphrasing or seeking to understand her financial warning, he dismisses it, so vital crisis information never reaches the level where decisions are made."
            }
          ]
        },
        {
          tier: "hard",
          title: "Four Sides of 'The Account Is Almost Empty' at Cedar Tech",
          scenario: "Cedar Tech is a Beirut software shop whose payroll account holds a shrinking balance of fresh dollars; most of its revenue is stuck as lollars it cannot freely withdraw under BDL circulars. On the 25th of the month, the finance lead, Joelle, walks into the founder Sami's office and says flatly, 'The account is almost empty.' Sami, exhausted from chasing clients who pay late and in devalued lira, hears this as an accusation that he has mismanaged cash, and snaps back defensively. Joelle actually meant it as an urgent prompt to approve a transfer from the reserve. The conversation deteriorates: Sami focuses on defending himself, Joelle feels unheard, and no transfer is approved before the weekend, risking a missed payroll. Both later admit they 'heard different conversations.'",
          qs: [
            {
              q: "Decode Joelle's sentence on all four sides of the Communication Square.",
              a: "Factual side: the literal information that the payroll balance is low. Self-revelation side: Joelle discloses that she is worried and feels responsible for cash flow. Relationship side: depending on tone, it may signal 'I'm relying on you to act' or, as Sami perceived it, 'you mismanaged this.' Appeal side: her intended meaning, an implicit request to 'approve the reserve transfer now.' The conflict arose because Sami received the relationship side as blame instead of the intended appeal side."
            },
            {
              q: "Explain, using the 'sender has four beaks, receiver has four ears' idea, why Sami and Joelle had different conversations.",
              a: "A sender encodes a message on all four sides at once (four beaks), and a receiver can listen primarily on any one side (four ears). Joelle emphasized the appeal side ('please act'), but Sami listened mainly with his relationship/self-revelation ear, hearing 'you failed.' Because he decoded a different side than she encoded as primary, they effectively held two different conversations from one sentence."
            },
            {
              q: "Recommend how Joelle should re-encode the message and how Sami should respond to repair the exchange.",
              a: "Joelle should make the appeal side explicit and lower the relationship charge: 'The payroll account is almost empty; can you approve a transfer from the reserve today so we make Friday's payroll?' This separates the fact from any implied blame and states the requested action clearly. Sami should use active listening — paraphrasing ('So you need a transfer approved before the weekend?') and seeking the appeal rather than reacting to a perceived accusation — turning a one-way clash into two-way communication that confirms shared meaning."
            }
          ]
        },
        {
          tier: "hard",
          title: "Choosing a Network at Horizon Logistics",
          scenario: "Horizon Logistics coordinates fuel and food deliveries across Lebanon during recurring crises: hours-long fuel queues, sudden EDL blackouts, and roads closed by protests. The dispatch team of five drivers and one coordinator currently runs as a strict chain: each driver reports only to the coordinator, who relays instructions up to the regional manager and back down. When a single bridge closure required instant rerouting of three trucks at once, the chain proved too slow — messages bottlenecked at the coordinator and two trucks idled in a fuel queue burning scarce diesel. After that loss, the regional manager debated switching the team to an all-channel network where every driver can message every other driver directly, but worried about losing control and creating chaotic, contradictory routing during fast-moving emergencies.",
          qs: [
            {
              q: "Contrast the chain and all-channel networks on speed, accuracy, and emergence of a leader for Horizon's situation.",
              a: "The chain network is moderate in speed and high in accuracy for routine reporting, and it preserves a clear leader (the coordinator), but it bottlenecks under simultaneous, urgent reroutes — exactly the bridge-closure failure. The all-channel network is fast and high in member satisfaction because everyone shares information directly, but no clear leader emerges, which risks contradictory routing decisions during a fast-moving emergency."
            },
            {
              q: "Recommend a network design for Horizon and justify it against the crisis demands.",
              a: "A hybrid is best: use a wheel network for time-critical reroutes, where the coordinator acts as the central hub making fast, authoritative decisions, since the wheel is fastest and most accurate for simple, urgent tasks and keeps a single decision-maker. For non-urgent coordination and morale, allow all-channel chatter among drivers so they share road conditions directly. This matches network richness to the task: centralized control when speed and a clear leader matter, open flow when shared situational awareness matters."
            },
            {
              q: "Beyond network structure, identify two barriers likely to degrade Horizon's emergency communication and propose mitigations.",
              a: "First, noise and channel reliability: blackouts and weak signal can drop messages, so the team should adopt a redundant rich channel (a group voice call plus text confirmation) and require read-backs as feedback. Second, information overload during a crisis, where simultaneous driver messages overwhelm the coordinator; mitigations include a simple priority protocol (urgent reroutes flagged first) and concise, standardized message formats so the most critical information is decoded quickly and acted on."
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
          model: "Communication is the transfer AND understanding of meaning — the conjunction carries the theory. In the process model, a sender starts from an intended meaning rooted in their own reality of thoughts and feelings, encodes it, and sends a message through channels of verbal and nonverbal symbols and visual images; the receiver decodes it into a perceived meaning rooted in THEIR reality — all within a context, with noise intruding at every step, and with the roles reversing as the receiver responds. Because encoding and decoding happen in two different realities, the perceived meaning is never automatically the intended one: a message can be perfectly transferred and completely misunderstood. Barriers attack specific stages. Information overload swamps the receiver's processing capacity, so decoding degrades. Filtering corrupts encoding: the sender deliberately manipulates information to look more favorable to the receiver. Jargon — a group's specialized terminology — encodes meaning in symbols the receiver may not share. Emotions distort both encoding and decoding; silence removes the feedback loop entirely; and national culture shapes the context in which symbols and behaviors are interpreted. The remedies the lecture offers mirror the model: USE FEEDBACK to test whether perceived meaning matches intended meaning; SIMPLIFY LANGUAGE to fit the audience (the antidote to jargon); LISTEN ACTIVELY — listening for full meaning without premature judgments or interpretations; CONSTRAIN EMOTIONS before encoding or decoding important messages; and WATCH NONVERBAL CUES, since body language and verbal intonation carry meaning words omit. The overall lesson: effective communicators design messages around the receiver's reality and close the loop — they verify understanding rather than assume that transmission accomplished it.",
          tier: "easy"
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
          model: "The Communication Square holds that every message — even a single sentence — communicates on four sides at once. The CONTENT side carries what I talk to you about: the objective facts. The RELATIONSHIP side signals what I think about you and us — the receiver asks, “what does this person think of me?” The APPEAL side conveys what I want you to do. The SELF-REVELATION side discloses something about me — what is going on with the sender. Misunderstanding arises because people also LISTEN with four different “ears,” each with characteristic strengths and weaknesses. The content ear is factual, neutral, result-oriented, and objective, but blind to emotional nuances and impersonal. The relationship ear is sensitive, reads between the lines, and is human — but vulnerable, easily hurt or angered, taking everything personally. The appeal ear is cooperative, obliging, and goal-oriented, but risks being exploited and neglecting its own needs. The self-revelation ear is empathetic and understanding, but can shift problems onto others and fail to question itself. A terse “the deck still has the old figures” can thus be sent as pure content yet heard as a relationship verdict (“he thinks I'm careless”) or as a harsh appeal (“stay all night”). The tool's practical power lies in preparation: before an important conversation, plan all four sides deliberately. Content: which topics do I want to address, with what arguments, reasons, and examples? Relationship: how will the other person feel treated, and how can I create or maintain a positive relationship? Appeal: what do I want to achieve — my minimum and maximum goals? Self-revelation: how do I feel about the situation, what are my needs, and what do I choose to share? A communicator who sends on all four sides consciously — and recognizes which ear is dominating their own listening — prevents the twenty-word, four-misunderstanding exchanges that poison workplaces.",
          tier: "medium"
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
          model: "Communication networks are the patterns the vertical and horizontal flows of organizational communication settle into, and the lecture compares three on four criteria. The CHAIN follows the formal line: moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction — disciplined and reliable, but slow, and information must climb and descend every rung. The WHEEL routes everything through a central hub: it is fast and highly accurate, and a leader clearly emerges — but member satisfaction is LOW, because the spokes talk only to the hub and feel voiceless. The ALL-CHANNEL network lets everyone communicate with everyone: fast with HIGH member satisfaction, but accuracy is only moderate and no leader emerges. The comparison teaches that no network dominates: a manager must decide which criterion the situation weights most — accuracy for safety-critical instructions (chain or wheel), speed plus morale for creative collaboration (all-channel), clear coordination under time pressure (wheel) — and accept the trade-offs. Networks also determine which directions of flow actually function: downward communication from managers to employees, upward from employees to managers, lateral among same-level employees, and diagonal across both areas and levels. A pure cascade starves the upward and diagonal flows that carry frontline intelligence to decision makers. Finally, alongside every formal design runs the GRAPEVINE — the informal organizational communication network. It is fast, it ignores the chart, and employees often trust it more than official silence. Managers should neither fight nor ignore it: monitor it as a barometer of concerns, and preempt it by feeding the formal channels promptly and candidly. The grapevine fills whatever vacuum the formal network leaves — so the best defense is a formal network that leaves none.",
          tier: "hard"
        }
      ]
    }
  ]
};
