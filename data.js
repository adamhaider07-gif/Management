/* ============================================================
   MNGT 215 — Fundamentals of Management & Organizational Behavior
   Study site data. All content is drawn from the Week 1–13 lecture
   slides (Robbins, Coulter & Long, 2024, Management, 16th Global
   Edition, as adapted by the instructor, plus instructor additions).
   Edit this file to fix or extend content — no build step needed.
   ============================================================ */

window.COURSE = {
  code: "MNGT 215",
  title: "Fundamentals of Management and Organizational Behavior",
  school: "Suliman S. Olayan School of Business — American University of Beirut",
  term: "Summer 2026",
  source: "Slides adapted from Robbins, Coulter & Long (2024), Management (16th Global Edition), Pearson — plus instructor additions",
  lectures: [
/* ---------------- WEEK 1 ---------------- */
{
  id: "w1",
  week: 1,
  title: "Introduction to Management",
  blurb: "Who managers are, what they do, and why organizations need them.",
  sections: [
    { h: "Managers and Organizations", blocks: [
      { t: "def", term: "Manager", d: "Someone who coordinates and oversees the work of other people so that organizational goals can be accomplished." },
      { t: "def", term: "Organization", d: "A deliberate arrangement of people to accomplish some specific purpose." },
      { t: "list", title: "Characteristics of organizations (3)", items: [
        "People",
        "Deliberate structure",
        "Distinct purpose"
      ]},
      { t: "list", title: "Levels of management (Exhibit 1-2)", items: [
        "Top managers — at the upper levels of the organization",
        "Middle managers",
        "First-line managers — the lowest managerial level",
        "Nonmanagerial employees form the base of the pyramid"
      ]},
      { t: "list", title: "Why are managers important?", items: [
        "Organizations need their managerial skills and abilities now more than ever",
        "Managers are critical to getting things done",
        "Managers make a difference in an organization's performance"
      ]},
      { t: "p", text: "The reality of work: when you begin your career, you will either manage or be managed. Management is universally needed in all types of, and throughout all areas of, organizations (Exhibit 1-9)." }
    ]},
    { h: "What Do Managers Do?", blocks: [
      { t: "def", term: "Management", d: "Coordinating and overseeing the work activities of others so that their activities are completed efficiently and effectively." },
      { t: "def", term: "Efficiency", d: "Concerned with the MEANS of getting things done — resource usage and low waste (“doing things right” in terms of resources)." },
      { t: "def", term: "Effectiveness", d: "Concerned with the ENDS — attainment of organizational goals (high goal attainment)." },
      { t: "p", text: "Exhibit 1-4: management strives for low resource waste (high efficiency) AND high goal attainment (high effectiveness)." },
      { t: "table", title: "The four management functions (Exhibit 1-5)", cols: ["Function", "Definition"], rows: [
        ["Planning", "Defining goals, establishing strategies to achieve goals, and developing plans to integrate and coordinate activities"],
        ["Organizing", "Arranging and structuring work to accomplish organizational goals"],
        ["Leading", "Working with and through people to accomplish goals"],
        ["Controlling", "Monitoring, comparing, and correcting work"]
      ]}
    ]},
    { h: "Mintzberg's Managerial Roles", blocks: [
      { t: "def", term: "Roles", d: "Specific actions or behaviors expected of and exhibited by a manager. Mintzberg identified 10 roles grouped around interpersonal relationships, the transfer of information, and decision making (Exhibit 1-6)." },
      { t: "table", title: "Mintzberg's 10 roles in 3 categories", cols: ["Category", "Roles"], rows: [
        ["Interpersonal", "Figurehead, leader, liaison"],
        ["Informational", "Monitor, disseminator, spokesperson"],
        ["Decisional", "Entrepreneur, disturbance handler, resource allocator, negotiator"]
      ]}
    ]},
    { h: "Management Skills", blocks: [
      { t: "def", term: "Technical skills", d: "Knowledge and proficiency in a specific field." },
      { t: "def", term: "Interpersonal skills", d: "The ability to work well with other people." },
      { t: "def", term: "Conceptual skills", d: "The ability to think and conceptualize about abstract and complex situations concerning the organization." },
      { t: "p", text: "Exhibit 1-8: skills relate to managerial level. Technical skills matter most for lower-level managers; conceptual skills matter most for top managers; interpersonal skills are important at every level." }
    ]}
  ],
  mcqs: [
    { q: "A manager is best defined as someone who…", o: [
      "coordinates and oversees the work of other people so that organizational goals can be accomplished",
      "performs the technical work of a unit better than anyone else",
      "owns the organization and bears its financial risk",
      "sets organizational goals but leaves their execution entirely to employees"
    ], a: 0, e: "The slides define a manager as someone who coordinates and oversees the work of other people so that organizational goals can be accomplished." },
    { q: "Which of the following is NOT one of the three characteristics of an organization?", o: [
      "Guaranteed profits",
      "People",
      "Deliberate structure",
      "Distinct purpose"
    ], a: 0, e: "Organizations have three characteristics: people, deliberate structure, and a distinct purpose. Profit is not a defining characteristic." },
    { q: "Efficiency is concerned with ______, while effectiveness is concerned with ______.", o: [
      "the means of getting things done; the ends, or attainment of organizational goals",
      "the ends of activities; the means of getting things done",
      "goal attainment; resource usage",
      "leading people; controlling work"
    ], a: 0, e: "Exhibit 1-4: efficiency = means (resource usage, low waste); effectiveness = ends (goal attainment)." },
    { q: "A factory cut raw-material waste by 20% but still failed to hit its production targets. The factory is…", o: [
      "efficient but not effective",
      "effective but not efficient",
      "both efficient and effective",
      "neither efficient nor effective"
    ], a: 0, e: "Low waste means high efficiency (means), but failing to attain goals means low effectiveness (ends)." },
    { q: "Defining goals, establishing strategies to achieve them, and developing plans to integrate and coordinate activities describes which management function?", o: [
      "Planning",
      "Organizing",
      "Leading",
      "Controlling"
    ], a: 0, e: "That is the slides' exact definition of planning, the first of the four management functions." },
    { q: "Monitoring, comparing, and correcting work is the definition of…", o: [
      "controlling",
      "planning",
      "organizing",
      "leading"
    ], a: 0, e: "Controlling is defined as monitoring, comparing, and correcting work." },
    { q: "A manager who rearranges who reports to whom and which tasks are grouped into which jobs is performing which function?", o: [
      "Organizing",
      "Planning",
      "Leading",
      "Controlling"
    ], a: 0, e: "Organizing means arranging and structuring work to accomplish organizational goals." },
    { q: "Mintzberg grouped his 10 managerial roles around…", o: [
      "interpersonal relationships, the transfer of information, and decision making",
      "planning, organizing, leading, and controlling",
      "technical, interpersonal, and conceptual skills",
      "efficiency, effectiveness, and economy"
    ], a: 0, e: "The 10 roles are grouped into interpersonal, informational, and decisional categories." },
    { q: "Which set lists Mintzberg's INTERPERSONAL roles?", o: [
      "Figurehead, leader, liaison",
      "Monitor, disseminator, spokesperson",
      "Entrepreneur, disturbance handler, negotiator",
      "Resource allocator, monitor, leader"
    ], a: 0, e: "Interpersonal roles are figurehead, leader, and liaison. Monitor/disseminator/spokesperson are informational; the rest are decisional." },
    { q: "A manager who presents the company's quarterly results to the press is acting mainly in which Mintzberg role?", o: [
      "Spokesperson (informational)",
      "Figurehead (interpersonal)",
      "Disturbance handler (decisional)",
      "Liaison (interpersonal)"
    ], a: 0, e: "Transmitting information to outsiders is the spokesperson role, one of the informational roles." },
    { q: "A manager who steps in to settle an unexpected strike at a plant is exercising which decisional role?", o: [
      "Disturbance handler",
      "Entrepreneur",
      "Resource allocator",
      "Monitor"
    ], a: 0, e: "Handling unexpected crises and conflicts is the disturbance handler role, in the decisional category." },
    { q: "According to Exhibit 1-8, which skills are MOST important for top managers?", o: [
      "Conceptual skills",
      "Technical skills",
      "Interpersonal skills",
      "All three equally, at every level"
    ], a: 0, e: "Conceptual skills dominate at the top; technical skills matter most at lower levels; interpersonal skills are important at all levels." },
    { q: "Knowledge and proficiency in a specific field is the definition of…", o: [
      "technical skills",
      "conceptual skills",
      "interpersonal skills",
      "decisional skills"
    ], a: 0, e: "Technical skills = knowledge and proficiency in a specific field — most needed by lower-level managers." },
    { q: "In traditionally structured organizations (Exhibit 1-2), managers are classified as…", o: [
      "first-line, middle, or top",
      "junior, senior, or executive",
      "functional, divisional, or matrix",
      "line, staff, or support"
    ], a: 0, e: "Exhibit 1-2 classifies managers as first-line, middle, or top, sitting above nonmanagerial employees." }
  ],
  cases: [
    { title: "The New Branch Manager at Café Cedar",
      scenario: "Maya was just promoted from head barista to branch manager of Café Cedar, a busy coffee shop in Hamra with 12 employees. In her first month she sets a goal of raising daily sales by 15%, draws up new shift schedules that group staff into morning and evening teams, spends time coaching two struggling baristas, and starts comparing daily sales reports against her target, adjusting staffing when numbers fall short. Meanwhile, she notices she spends far less time making coffee herself and far more time in meetings with suppliers and the area manager, and representing the branch at a neighborhood merchants' event.",
      qs: [
        { q: "Identify each of the four management functions in Maya's first month.", a: "Planning — setting the goal of raising daily sales by 15% (defining goals and strategies). Organizing — drawing up new shift schedules and grouping staff into teams (arranging and structuring work). Leading — coaching the two struggling baristas (working with and through people). Controlling — comparing daily sales reports against the target and adjusting staffing (monitoring, comparing, correcting)." },
        { q: "Maya's move from head barista to branch manager changed her required skill mix. Explain using the three management skills from the lecture.", a: "As a barista she relied on technical skills (knowledge and proficiency in a specific field — making coffee). As a first-line/branch manager she still needs some technical skill, but interpersonal skills (working well with people, e.g., coaching baristas) become central, and she begins to need conceptual skills (thinking about the branch as a whole, e.g., sales strategy). Per Exhibit 1-8, technical skills matter most at lower levels and conceptual skills grow in importance as one rises." },
        { q: "Name the Mintzberg roles Maya performs when (a) representing the branch at the merchants' event, (b) meeting suppliers and the area manager, and (c) reallocating staff when sales fall short.", a: "(a) Figurehead — an interpersonal role of ceremonial/symbolic representation. (b) Liaison — an interpersonal role of maintaining contacts outside her unit. (c) Resource allocator — a decisional role, deciding how to deploy staff (a key resource)." },
        { q: "Is Maya's branch effective, efficient, both, or neither if sales rise 15% but overtime costs double? Justify using the lecture's definitions.", a: "Effective but not efficient. Effectiveness concerns the ends — the 15% sales goal was attained. Efficiency concerns the means — resource usage; doubling overtime is high waste of resources. The slides stress that management strives for BOTH low resource waste (high efficiency) and high goal attainment (high effectiveness)." }
      ]},
    { title: "Two Managers at Phoenicia Apparel",
      scenario: "Phoenicia Apparel is a clothing company. Rana is a first-line production supervisor: she spends her days assigning sewing tasks, fixing machine problems alongside operators, and making sure daily quotas are met. Karim is the company's top manager: he spends his time deciding whether the company should enter the Gulf market, meeting government officials about labor regulations, and announcing a new strategic vision to investors. Both insist their job is “management,” yet their days look completely different.",
      qs: [
        { q: "Use the levels of management (Exhibit 1-2) to classify Rana and Karim, and explain why both still count as managers.", a: "Rana is a first-line manager (lowest managerial level, directly overseeing nonmanagerial employees); Karim is a top manager. Both are managers because both coordinate and oversee the work of other people so that organizational goals can be accomplished — the defining feature of a manager is coordination of others' work, not the level or the tasks." },
        { q: "Explain the difference in their skill requirements using Exhibit 1-8.", a: "Rana, as a first-line manager, relies most on technical skills (machine knowledge, sewing processes) plus interpersonal skills with her team. Karim, as a top manager, relies most on conceptual skills (thinking about abstract, complex, organization-wide situations like entering the Gulf market). Interpersonal skills are important for both — they matter at every level." },
        { q: "Match three of Karim's activities to specific Mintzberg roles.", a: "Deciding to enter the Gulf market — entrepreneur (decisional: initiating new projects/change). Meeting government officials — liaison (interpersonal: maintaining external contacts); elements of spokesperson also appear if he is conveying company information. Announcing the strategic vision to investors — spokesperson (informational: transmitting information to outsiders), with a figurehead element in its ceremonial aspect." },
        { q: "The slides say management is universally needed. How does this case illustrate that claim?", a: "Exhibit 1-9 shows management is needed in all types and at all levels and areas of organizations. The case shows management at two very different levels (production floor vs. corporate strategy) of the same firm — the four functions and the need to coordinate others' work apply at both, even though the content of the work differs." }
      ]}
  ],
  essays: [
    { q: "“A good manager only needs to be effective — efficiency is secondary.” Discuss this statement using the lecture's definitions of efficiency and effectiveness, and explain what management ultimately strives for.",
      outline: [
        "Define efficiency: concerned with the MEANS — resource usage, low waste (Exhibit 1-4)",
        "Define effectiveness: concerned with the ENDS — attainment of organizational goals",
        "Show they are distinct: a firm can hit goals while wasting resources (effective, not efficient) or save resources while missing goals (efficient, not effective)",
        "State the lecture's conclusion: management strives for BOTH low resource waste (high efficiency) AND high goal attainment (high effectiveness)",
        "Conclude: the statement is one-sided; goal attainment achieved through wasteful means is not good management"
      ],
      model: "Efficiency and effectiveness capture two different questions about managerial work. Efficiency is about the means of getting things done: using resources with as little waste as possible. Effectiveness is about the ends: whether organizational goals are attained (Exhibit 1-4). The statement is therefore one-sided. An organization can be effective without being efficient — for example, reaching a sales target while doubling labor costs — and it can be efficient without being effective, conserving resources while missing its goals. Because management is defined as coordinating and overseeing others' work so that activities are completed efficiently AND effectively, the lecture is explicit that management strives for both low resource waste (high efficiency) and high goal attainment (high effectiveness). A manager who treats efficiency as secondary allows the cost of achieving goals to balloon, which undermines the organization's performance — precisely what managers exist to protect." },
    { q: "Describe the four functions of management. For each, give the lecture definition and a brief workplace example, and explain how the functions connect to one another.",
      outline: [
        "Planning: defining goals, establishing strategies, developing plans to integrate and coordinate activities (+ example)",
        "Organizing: arranging and structuring work to accomplish organizational goals (+ example)",
        "Leading: working with and through people to accomplish goals (+ example)",
        "Controlling: monitoring, comparing, and correcting work (+ example)",
        "Connection: planning sets the goals that organizing structures, leading energizes, and controlling checks against — control results feed back into new plans (Exhibit 1-5)"
      ],
      model: "The four functions describe a manager's work (Exhibit 1-5). Planning means defining goals, establishing strategies to achieve them, and developing plans to integrate and coordinate activities — e.g., setting a target to raise sales 15% this quarter. Organizing means arranging and structuring work to accomplish organizational goals — e.g., designing shifts and grouping tasks into jobs and departments. Leading means working with and through people to accomplish goals — e.g., motivating and coaching a team. Controlling means monitoring, comparing, and correcting work — e.g., comparing weekly results to the target and adjusting. The functions form a connected cycle rather than four separate boxes: planning provides the goals and strategies; organizing builds the structure to pursue them; leading gets the people working toward them; and controlling compares actual work with the plan, with deviations triggering corrections and new planning." },
    { q: "Explain Mintzberg's view of managerial work. Name the three categories of roles and the roles within each, and illustrate each category with one concrete managerial activity.",
      outline: [
        "Roles defined: specific actions or behaviors expected of and exhibited by a manager",
        "Mintzberg identified 10 roles grouped around interpersonal relationships, transfer of information, and decision making (Exhibit 1-6)",
        "Interpersonal: figurehead, leader, liaison (+ example, e.g., cutting the ribbon, motivating staff, networking)",
        "Informational: monitor, disseminator, spokesperson (+ example, e.g., scanning reports, briefing the team, talking to press)",
        "Decisional: entrepreneur, disturbance handler, resource allocator, negotiator (+ example, e.g., launching a project, resolving a strike, setting budgets, closing a deal)"
      ],
      model: "Mintzberg described managerial work through roles — specific actions or behaviors expected of and exhibited by a manager. He identified 10 roles in three categories (Exhibit 1-6). Interpersonal roles arise from relationships: the figurehead performs ceremonial duties (e.g., representing the firm at an event), the leader motivates and develops employees, and the liaison maintains a network of contacts inside and outside the unit. Informational roles concern the transfer of information: the monitor scans the environment for information, the disseminator passes information to organization members, and the spokesperson transmits information to outsiders (e.g., presenting results to the press). Decisional roles center on choices: the entrepreneur initiates projects and change, the disturbance handler deals with unexpected problems (e.g., a strike), the resource allocator decides who gets what (budgets, staff, time), and the negotiator represents the organization in major negotiations. Together the three categories show that managing mixes relationships, information handling, and decision making rather than a single kind of activity." }
  ]
},
/* ---------------- WEEK 2 ---------------- */
{
  id: "w2",
  week: 2,
  title: "The Evolution of Management",
  blurb: "From the pyramids and Taylor's stopwatch to algorithmic management.",
  sections: [
    { h: "Early Management", blocks: [
      { t: "p", text: "Management practices evolved over time. Early examples that required management skills due to their size and scope: the Egyptian Pyramids, the Great Wall of China, and the Roman Catholic Church." },
      { t: "def", term: "Division of labor (job specialization)", d: "Breaking down jobs into narrow and repetitive tasks. Adam Smith argued in The Wealth of Nations (1776) that the division of labor would benefit society overall. The Industrial Revolution, ushered in by machine power, also utilized the division of labor." }
    ]},
    { h: "Classical Approach — Scientific Management", blocks: [
      { t: "def", term: "Classical approach", d: "First studies of management, which emphasized rationality and making organizations and workers as efficient as possible." },
      { t: "def", term: "Scientific management (Frederick Winslow Taylor)", d: "An approach that involves using the scientific method to find the “one best way” for a job to be done. Taylor's time and motion studies at Bethlehem Steel focused on finding the best way to perform a specific task." },
      { t: "list", title: "Taylor's four principles of scientific management", items: [
        "1. Develop a science for each element of an individual's work to replace the old rule-of-thumb method",
        "2. Scientifically select and then train, teach, and develop the worker",
        "3. Cooperate with the workers to ensure all work is done in accordance with the principles of the science",
        "4. Divide work and responsibility almost equally between management and workers — management does all work for which it is better suited than the workers"
      ]},
      { t: "def", term: "Therbligs (Frank and Lillian Gilbreth)", d: "A classification scheme for labeling 17 basic hand motions (“Gilbreth” spelled backwards with the “th” transposed). The Gilbreths studied hand-and-body motions to reduce waste and were among the first to use motion picture films for this; they focused on improving efficiency." }
    ]},
    { h: "Classical Approach — General Administrative Theory", blocks: [
      { t: "p", text: "General administrative theorists looked at management by focusing on the entire organization. The most prominent were Henri Fayol and Max Weber." },
      { t: "table", title: "Fayol's 14 principles of management", cols: ["Principle", "Meaning"], rows: [
        ["1. Division of work", "Specialization increases output by making employees more efficient"],
        ["2. Authority", "Managers must be able to give orders; authority gives them this right"],
        ["3. Discipline", "Employees must obey and respect the rules that govern the organization"],
        ["4. Unity of command", "Every employee should receive orders from only one superior"],
        ["5. Unity of direction", "The organization should have a single plan of action to guide managers and workers"],
        ["6. Subordination of individual interests to the general interest", "No employee's or group's interests take precedence over the organization's as a whole"],
        ["7. Remuneration", "Workers must be paid a fair wage for their services"],
        ["8. Centralization", "The degree to which subordinates are involved in decision making"],
        ["9. Scalar chain", "The line of authority from top management to the lowest ranks"],
        ["10. Order", "People and materials should be in the right place at the right time"],
        ["11. Equity", "Managers should be kind and fair to their subordinates"],
        ["12. Stability of tenure of personnel", "Orderly personnel planning; replacements available to fill vacancies"],
        ["13. Initiative", "Employees allowed to originate and carry out plans will exert high levels of effort"],
        ["14. Esprit de corps", "Promoting team spirit will build harmony and unity within the organization"]
      ]},
      { t: "def", term: "Bureaucracy (Max Weber)", d: "Weber's ideal system of organization: characterized by division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships. He proposed it to show how work could be done; it became the framework for many of today's large organizations." },
      { t: "list", title: "Characteristics of Weber's bureaucracy", items: [
        "Division of labor — jobs broken down into simple, routine, well-defined tasks",
        "Authority hierarchy — positions organized in a hierarchy with a clear chain of command",
        "Formal selection — people selected for jobs based on technical qualifications",
        "Formal rules and regulations — system of written rules and standard operating procedures",
        "Impersonality — uniform application of rules and controls, not according to personalities",
        "Career orientation — managers are career professionals, not owners of the units they manage"
      ]}
    ]},
    { h: "Social-Person Approaches", blocks: [
      { t: "def", term: "Social-person approaches", d: "Management theories that focus on the organization's human and social factors. Managers get things done by working with people." },
      { t: "def", term: "Hawthorne Studies", d: "A series of studies during the 1920s and 1930s that provided new insights into individual and group behavior." },
      { t: "list", title: "Conclusions of the Hawthorne Studies", items: [
        "People's attitudes and behavior are closely related",
        "Group factors significantly affect individual behavior",
        "Group standards establish individual worker output",
        "Money is less a factor in determining output than group standards, group attitudes, and security"
      ]},
      { t: "def", term: "Human relations movement", d: "A management approach based on the belief that a satisfied worker is a productive worker. These viewpoints were largely shaped by personal beliefs, not substantive research." },
      { t: "def", term: "Behavioral science theorists", d: "Researchers who engaged in OBJECTIVE research of human behavior in organizations — including Fred Fiedler, Victor Vroom, Frederick Herzberg, Edwin Locke, David McClelland, Robert House, and Richard Hackman (their contributions appear in later weeks)." }
    ]},
    { h: "Quantitative Approach", blocks: [
      { t: "def", term: "Quantitative approach", d: "The use of quantitative techniques to improve decision making; ultimately became known as management science. It evolved from military applications developed during WWII." },
      { t: "def", term: "Total quality management (TQM)", d: "A philosophy of management that is driven by continuous improvement and responsiveness to customer needs and expectations. It emerged from the quantitative approach." },
      { t: "list", title: "What is quality management? (6 elements)", items: [
        "Intense focus on the customer",
        "Concern for continual improvement",
        "Process focused",
        "Improvement in the quality of everything the organization does",
        "Accurate measurement",
        "Empowerment of employees"
      ]}
    ]},
    { h: "Systems and Contingency Approaches", blocks: [
      { t: "def", term: "System", d: "A set of interrelated and interdependent parts arranged in a manner that produces a unified whole." },
      { t: "def", term: "Closed systems", d: "Systems that are not influenced by and do not interact with their environment." },
      { t: "def", term: "Open systems", d: "Systems that interact with their environment. As an open system, an organization takes in INPUTS (raw materials, human resources, capital, technology, information), runs them through a TRANSFORMATION PROCESS (employees' work activities, management activities, technology and operations methods), and sends OUTPUTS to the environment (products and services, financial results, information, human results) — with feedback from outputs to inputs." },
      { t: "def", term: "Contingency approach", d: "A management approach that recognizes organizations as different, which means they face different situations (contingencies) and require different ways of managing. More than 100 contingency variables have been identified; its primary value is stressing that there are no simplistic or universal rules for managers to follow." }
    ]},
    { h: "New Management Approaches (instructor addition)", blocks: [
      { t: "p", text: "Technology and computerization strongly influence current management: many businesses are now obsolete; some organizations operate with virtual teams — people who work together but are geographically dispersed; the gig economy provides flexibility and freedom to employers and independent workers." },
      { t: "def", term: "Algorithmic management", d: "“Software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice” (Lee et al., 2015). Algorithmic management creates a deeper, digital version of Taylorism (Cameron, 2025; Noponen et al., 2024)." },
      { t: "table", title: "Digital Taylorism (Noponen et al., 2024)", cols: ["Familiar characteristics", "New characteristics"], rows: [
        ["Piece-meal wage", "“Assembly line” extended to new professions"],
        ["Standardization", "Digital scaffolds instead of physical control"],
        ["Deskilling", "Control of output rather than process"],
        ["Exploitation", ""]
      ]}
    ]}
  ],
  mcqs: [
    { q: "In The Wealth of Nations (1776), Adam Smith argued that ______ would benefit society overall.", o: [
      "the division of labor",
      "bureaucratic hierarchy",
      "scientific selection of workers",
      "total quality management"
    ], a: 0, e: "Smith argued the division of labor (job specialization — breaking jobs into narrow, repetitive tasks) benefits society overall." },
    { q: "Scientific management is best defined as…", o: [
      "using the scientific method to find the “one best way” for a job to be done",
      "focusing on the organization's human and social factors",
      "using quantitative techniques to improve decision making",
      "recognizing that organizations face different situations requiring different ways of managing"
    ], a: 0, e: "Taylor's scientific management uses the scientific method to find the “one best way” to do a job." },
    { q: "Taylor conducted his famous time and motion studies at…", o: [
      "Bethlehem Steel",
      "Ford Motor Company",
      "Western Electric's Hawthorne plant",
      "General Motors"
    ], a: 0, e: "Taylor's time and motion studies were conducted at Bethlehem Steel, seeking the best way to perform specific tasks." },
    { q: "Which of the following is one of Taylor's four principles of scientific management?", o: [
      "Scientifically select and then train, teach, and develop the worker",
      "Promote team spirit to build harmony in the organization",
      "Ensure every employee receives orders from only one superior",
      "Design jobs around impersonal rules and career-oriented managers"
    ], a: 0, e: "Scientific selection and training of workers is Taylor's second principle. The others belong to Fayol (esprit de corps, unity of command) and Weber (bureaucracy)." },
    { q: "The Gilbreths' “therbligs” are…", o: [
      "a classification scheme for labeling 17 basic hand motions",
      "the 14 principles of administrative management",
      "a series of studies on group behavior at a factory",
      "quantitative models for wartime logistics"
    ], a: 0, e: "Frank and Lillian Gilbreth identified 17 basic hand motions they dubbed therbligs — Gilbreth spelled backwards with the “th” transposed." },
    { q: "Unlike Taylor, the general administrative theorists (Fayol and Weber) focused on…", o: [
      "the entire organization",
      "individual task efficiency",
      "informal group norms",
      "customer responsiveness"
    ], a: 0, e: "General administrative theorists looked at management by focusing on the entire organization, not individual jobs." },
    { q: "“Every employee should receive orders from only one superior” is Fayol's principle of…", o: [
      "unity of command",
      "unity of direction",
      "scalar chain",
      "discipline"
    ], a: 0, e: "Unity of command = one superior per employee. Unity of direction = a single plan of action; scalar chain = the line of authority from top to bottom." },
    { q: "Fayol's “esprit de corps” principle states that…", o: [
      "promoting team spirit will build harmony and unity within the organization",
      "managers should be kind and fair to their subordinates",
      "workers must be paid a fair wage for their services",
      "people and materials should be in the right place at the right time"
    ], a: 0, e: "Esprit de corps is about team spirit building harmony and unity. Kindness/fairness is equity; fair wage is remuneration; right place/time is order." },
    { q: "Weber's bureaucracy is characterized by…", o: [
      "division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships",
      "decentralized decisions, informal norms, and personal loyalty to leaders",
      "continuous improvement and responsiveness to customers",
      "self-managed teams and minimal formal rules"
    ], a: 0, e: "Weber described the ideal bureaucracy as division of labor, clear hierarchy, detailed rules and regulations, and impersonality." },
    { q: "A key conclusion of the Hawthorne Studies was that…", o: [
      "money is less a factor in determining output than group standards, group attitudes, and security",
      "pay is the single strongest determinant of individual output",
      "there is one best way to perform every job",
      "satisfied workers are always productive workers"
    ], a: 0, e: "The Hawthorne Studies concluded group standards, attitudes, and security outweigh money in determining output. “A satisfied worker is a productive worker” is the (research-weak) human relations movement belief." },
    { q: "What distinguishes the behavioral science theorists (e.g., Fiedler, Vroom, Herzberg) from the human relations movement?", o: [
      "They engaged in objective research of human behavior in organizations rather than relying on personal beliefs",
      "They focused on finding the one best way to do each job",
      "They believed satisfied workers are productive workers as a matter of faith",
      "They studied only quantitative wartime logistics models"
    ], a: 0, e: "Human relations views were largely shaped by personal beliefs; behavioral science theorists did objective research on behavior in organizations." },
    { q: "Total quality management (TQM) is driven by…", o: [
      "continuous improvement and responsiveness to customer needs and expectations",
      "strict separation of planning from doing",
      "maximizing short-term shareholder returns",
      "eliminating employee empowerment"
    ], a: 0, e: "TQM, which emerged from the quantitative approach, is a philosophy driven by continual improvement and responsiveness to customers — and includes empowerment of employees." },
    { q: "An organization viewed as an open system…", o: [
      "takes inputs from its environment, transforms them, and returns outputs to the environment",
      "is not influenced by and does not interact with its environment",
      "consists of independent parts that operate separately",
      "must be managed by universal rules that apply everywhere"
    ], a: 0, e: "Open systems interact with their environment: inputs → transformation process → outputs, with feedback. Closed systems do not interact with the environment." },
    { q: "The primary value of the contingency approach is that it stresses…", o: [
      "there are no simplistic or universal rules for managers to follow",
      "all organizations should adopt bureaucratic structures",
      "efficiency is the only goal of management",
      "informal groups determine all organizational outcomes"
    ], a: 0, e: "Because organizations differ and face different situations (contingencies), the contingency approach stresses there are no universal managerial rules." },
    { q: "According to Noponen et al. (2024), digital Taylorism differs from classic Taylorism partly because it relies on…", o: [
      "digital scaffolds instead of physical control, and control of output rather than process",
      "physical supervision on the assembly line",
      "abolishing piece-meal wages and standardization",
      "upskilling workers instead of deskilling them"
    ], a: 0, e: "Digital Taylorism keeps piece-meal wages, standardization, deskilling, and exploitation, but adds the “assembly line” in new professions, digital scaffolds instead of physical control, and control of output rather than process." }
  ],
  cases: [
    { title: "RoadRunner Deliveries: Taylorism on an App",
      scenario: "RoadRunner is a food-delivery platform operating in Beirut. Couriers are independent gig workers paid per delivery. The app assigns each order automatically, dictates the exact route, and times every step; couriers who fall below an output score set by the algorithm are temporarily “deactivated.” The company employs almost no human supervisors — the software monitors, evaluates, and disciplines. Management boasts that the system found the “one best way” to deliver food and that standardization keeps costs low. Couriers complain the work has been stripped of all judgment and that the constant timing feels like a digital stopwatch.",
      qs: [
        { q: "Which classical theory does RoadRunner's system most resemble, and which specific elements show it?", a: "Taylor's scientific management. The app seeks the “one best way” (optimal routes), standardizes each step, measures work the way time-and-motion studies did (constant timing — a digital stopwatch), and separates planning (done by the algorithm/management) from doing (couriers), echoing Taylor's fourth principle of dividing work and responsibility between management and workers." },
        { q: "Define algorithmic management (Lee et al., 2015) and explain why RoadRunner fits the definition.", a: "Algorithmic management is “software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice.” At RoadRunner, the software assigns tasks, dictates routes, monitors performance, evaluates output scores, and disciplines (deactivation) — managerial functions performed by algorithms rather than human supervisors." },
        { q: "Using the Digital Taylorism framework (Noponen et al., 2024), identify two familiar and two new characteristics present in this case.", a: "Familiar: piece-meal wage (paid per delivery), standardization (dictated routes/steps), deskilling (work stripped of judgment), exploitation (couriers' complaints). New: digital scaffolds instead of physical control (the app, not a foreman, structures the work) and control of output rather than process (deactivation based on output scores); the “assembly line” logic is also extended to a new profession (delivery work)." },
        { q: "A consultant says: “The contingency approach suggests this system may not work everywhere.” Explain what she means.", a: "The contingency approach recognizes organizations as different — they face different situations (contingencies) requiring different ways of managing, so there are no simplistic or universal rules. An algorithm-driven, highly standardized system suited to routine, measurable delivery work may fail in settings with non-routine tasks, ambiguous information, or different workforce expectations; managers must match the approach to the contingencies." }
      ]},
    { title: "Cedar Bank's Reorganization Debate",
      scenario: "Cedar Bank has grown from a family business into a 3,000-employee institution, but it is chaotic: employees report to multiple bosses, hiring is based on family connections, rules differ across branches, and favoritism is common. Consultant A proposes a Weber-style redesign: clear hierarchy, written rules, jobs filled by technical qualifications, and impersonal application of policies. Consultant B objects: “Rules don't motivate people. The Hawthorne Studies showed work is social — group standards and attitudes drive output more than your procedures will.” The CEO wonders whether the consultants' ideas can be combined.",
      qs: [
        { q: "List the characteristics of Weber's bureaucracy that Consultant A's proposal would introduce, and link each to a problem in the case.", a: "Authority hierarchy (clear chain of command) fixes employees reporting to multiple bosses; formal rules and regulations fix rules differing across branches; formal selection (hiring by technical qualifications) fixes hiring by family connections; impersonality (uniform application of rules) fixes favoritism; division of labor clarifies well-defined tasks; career orientation makes managers career professionals rather than family owner-managers." },
        { q: "What evidence from the Hawthorne Studies supports Consultant B's warning?", a: "The Hawthorne Studies (1920s–30s) concluded that people's attitudes and behavior are closely related, group factors significantly affect individual behavior, group standards establish individual worker output, and money (and by extension formal incentives/rules) is less a factor in determining output than group standards, group attitudes, and security. So a purely structural fix that ignores the social side may not lift performance." },
        { q: "Consultant B claims “a satisfied worker is a productive worker.” How would the lecture qualify this claim?", a: "That is the belief of the human relations movement — but the slides note these viewpoints were largely shaped by personal beliefs and NOT substantive research. The objective study of behavior at work came later from behavioral science theorists (e.g., Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman). So the claim should be treated cautiously, not as established fact." },
        { q: "Using the systems approach, explain why the CEO is right to think the two proposals can be combined.", a: "An organization is an open system — a set of interrelated and interdependent parts forming a unified whole that interacts with its environment (inputs → transformation → outputs with feedback). Structure (Weber's hierarchy and rules) and people/social dynamics (Hawthorne insights) are interdependent parts of the same transformation process; changing one affects the other. A sound redesign treats both together rather than choosing one, and the contingency approach adds that the right mix depends on Cedar Bank's specific situation." }
      ]}
  ],
  essays: [
    { q: "Compare the classical approach to management with the social-person approaches. In your answer, identify the main theorists of each, their core ideas, and what each approach overlooked.",
      outline: [
        "Classical approach: first studies of management; emphasis on rationality and making organizations/workers as efficient as possible",
        "Scientific management — Taylor (one best way, 4 principles, time-and-motion at Bethlehem Steel); Gilbreths (therbligs, motion films)",
        "General administrative theory — Fayol (14 principles for the whole organization), Weber (ideal bureaucracy: division of labor, hierarchy, rules, impersonality)",
        "Social-person approaches: focus on the organization's human and social factors",
        "Hawthorne Studies conclusions (attitudes-behavior link; group factors; group standards set output; money matters less than group standards/attitudes/security)",
        "Human relations movement (satisfied worker = productive worker — based on beliefs, not research); behavioral science theorists (objective research: Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman)",
        "Critique both ways: classical treats workers as cogs and ignores social factors; early human relations lacked research rigor"
      ],
      model: "The classical approach comprised the first studies of management and emphasized rationality and making organizations and workers as efficient as possible. Within it, Taylor's scientific management used the scientific method to find the “one best way” to do a job — his time-and-motion studies at Bethlehem Steel and his four principles (develop a science of work, scientifically select and train workers, cooperate with workers, divide work between management and workers). The Gilbreths extended this with therbligs, a classification of 17 basic hand motions, using motion-picture film to cut wasted movement. The general administrative theorists looked at the whole organization: Fayol proposed 14 principles of management (e.g., unity of command, scalar chain, esprit de corps), and Weber described the ideal bureaucracy — division of labor, a clearly defined hierarchy, detailed rules and regulations, and impersonal relationships. The social-person approaches instead focused on the organization's human and social factors. The Hawthorne Studies showed that attitudes and behavior are closely related, that group factors significantly affect individual behavior, that group standards establish individual output, and that money matters less than group standards, attitudes, and security. The human relations movement claimed a satisfied worker is a productive worker — though this rested on personal beliefs rather than substantive research — and behavioral science theorists (Fiedler, Vroom, Herzberg, Locke, McClelland, House, Hackman) later studied behavior objectively. Each tradition overlooked what the other saw: classical theory largely ignored the social side of work, while early human relations thinking lacked rigorous evidence. Together they explain why modern management attends to both efficient structures and human behavior." },
    { q: "“Algorithmic management is simply Taylorism on steroids.” Explain the steps of Taylor's scientific management, define algorithmic management, and discuss the similarities and differences identified in the lecture (Digital Taylorism).",
      outline: [
        "Taylor: scientific management = scientific method to find the “one best way”; time-and-motion studies",
        "Four principles: science of work; scientific selection and training; cooperation; division of work/responsibility between management and workers",
        "Algorithmic management defined (Lee et al., 2015): software algorithms that assume managerial functions + supporting institutional devices",
        "Familiar (shared) characteristics: piece-meal wage, standardization, deskilling, exploitation",
        "New characteristics: assembly-line logic spread to new professions; digital scaffolds instead of physical control; control of output rather than process (Noponen et al., 2024)",
        "Conclusion: deep continuity in logic, but digital means change scope and mechanism (Cameron, 2025)"
      ],
      model: "Taylor's scientific management applied the scientific method to find the “one best way” for a job to be done, demonstrated in his time-and-motion studies at Bethlehem Steel. His four principles were: (1) develop a science for each element of work to replace rule-of-thumb; (2) scientifically select, train, teach, and develop the worker; (3) cooperate with workers to ensure work follows the science; and (4) divide work and responsibility almost equally between management and workers, with management doing what it is better suited for. Algorithmic management is “software algorithms that assume managerial functions and surrounding institutional devices that support algorithms in practice” (Lee et al., 2015) — apps and systems that assign, monitor, evaluate, and discipline workers. The lecture's Digital Taylorism framework (Noponen et al., 2024) shows the continuity: piece-meal wages, standardization, deskilling, and exploitation are familiar Taylorist characteristics that persist on platforms. But it also identifies what is new: the assembly-line logic now reaches new professions; digital scaffolds replace physical control (the app, not the foreman or factory layout, structures work); and control shifts from the process to the output (workers are judged and sanctioned on measured results). In this sense algorithmic management is a deeper, digital version of Taylorism (Cameron, 2025) — the statement is broadly accurate, provided we recognize that the mechanism and reach of control have changed, not just its intensity." },
    { q: "Explain the systems approach and the contingency approach to management. Why did these approaches emerge after the classical and behavioral ones, and what is the practical lesson of each for managers?",
      outline: [
        "System defined: interrelated, interdependent parts producing a unified whole; closed vs. open systems",
        "Organization as open system: inputs (raw materials, HR, capital, technology, information) → transformation process (employees' work, management activities, technology/operations methods) → outputs (products/services, financial results, information, human results) + feedback and environment",
        "Practical lesson: units are interdependent; organizations depend on their environment",
        "Contingency approach: organizations are different, face different contingencies, require different ways of managing; 100+ contingency variables",
        "Practical lesson: no simplistic or universal rules — match practice to situation",
        "Why later: classical/behavioral sought universal prescriptions (one best way; satisfied worker); systems/contingency respond to their limits"
      ],
      model: "A system is a set of interrelated and interdependent parts arranged in a manner that produces a unified whole. Closed systems neither are influenced by nor interact with their environment; open systems do interact with it. The systems approach views the organization as an open system: it draws inputs from the environment (raw materials, human resources, capital, technology, information), transforms them through employees' work activities, management activities, and technology and operations methods, and returns outputs (products and services, financial results, information, human results), with feedback looping back. The contingency approach recognizes organizations as different: they face different situations — contingencies — and require different ways of managing; more than 100 contingency variables have been identified. These approaches emerged because earlier schools implied universal answers: scientific management promised “one best way,” administrative theory offered general principles, and human relations assumed satisfaction always drives productivity. Reality proved less uniform. The practical lesson of the systems view is that managers cannot manage parts in isolation — decisions in one part affect the others, and the organization lives or dies by its exchanges with its environment. The lesson of the contingency view is that there are no simplistic or universal rules for managers to follow: effective management means diagnosing the situation and fitting structure, style, and systems to it." }
  ]
},
/* ---------------- WEEK 3 ---------------- */
{
  id: "w3",
  week: 3,
  title: "The External and Internal Environment",
  blurb: "What constrains managers: the environment outside and the culture inside.",
  sections: [
    { h: "Omnipotent or Symbolic?", blocks: [
      { t: "def", term: "Omnipotent view", d: "Managers are directly responsible for an organization's success or failure." },
      { t: "def", term: "Symbolic view", d: "Much of an organization's success or failure is due to external forces outside managers' control." },
      { t: "p", text: "Managerial discretion is constrained from two sides: the organizational environment (external) and the organizational culture (internal)." }
    ]},
    { h: "The External Environment", blocks: [
      { t: "def", term: "Environment", d: "Institutions or forces outside of the organization that could potentially affect performance." },
      { t: "list", title: "Components of the external environment surrounding the organization", items: [
        "Economic", "Demographic", "Technological", "Sociocultural", "Political/Legal", "Global"
      ]},
      { t: "def", term: "Specific environment", d: "The part of the environment directly relevant to the achievement of organizational goals — where most of management's attention typically focuses." },
      { t: "table", title: "Specific environment components (6)", cols: ["Component", "Why it matters"], rows: [
        ["Suppliers", "Managers need to ensure a steady flow of inputs"],
        ["Customers", "Organizations exist to meet customer needs"],
        ["Competitors", "All organizations have competitors they need to monitor"],
        ["Government", "Federal, state, and local governments influence what the organization can and cannot do"],
        ["Investors", "Public companies are scrutinized by stockholders and potential investors; decisions should enhance shareholder value"],
        ["Special interest groups", "Lobbyists, protestors, and action groups can have a significant impact and effect change"]
      ]},
      { t: "def", term: "Porter's Five Forces Model (Porter, 2008)", d: "The five forces shaping industry competition: (1) Rivalry among existing competitors — at the center; (2) Threat of new entrants; (3) Bargaining power of suppliers; (4) Bargaining power of buyers; (5) Threat of substitute products or services." }
    ]},
    { h: "Environmental Uncertainty", blocks: [
      { t: "p", text: "Environments differ in their degree of environmental uncertainty, which has two dimensions: degree of change and degree of complexity." },
      { t: "def", term: "Degree of change", d: "Dynamic environment: components change frequently. Stable environment: components change very little." },
      { t: "def", term: "Degree of complexity", d: "The number of components in an organization's environment and the extent of the knowledge the organization has about those components." },
      { t: "table", title: "Environmental uncertainty matrix (change × complexity)", cols: ["Cell", "Description"], rows: [
        ["Cell 1 (stable + simple)", "Stable, predictable environment; few, similar components that remain the same; minimal need for sophisticated knowledge — LOWEST uncertainty"],
        ["Cell 2 (dynamic + simple)", "Dynamic, unpredictable environment; few, similar components that continually change; minimal need for sophisticated knowledge"],
        ["Cell 3 (stable + complex)", "Stable, predictable environment; many dissimilar components that remain the same; high need for sophisticated knowledge"],
        ["Cell 4 (dynamic + complex)", "Dynamic, unpredictable environment; many dissimilar components continually changing; high need for sophisticated knowledge — HIGHEST uncertainty"]
      ]}
    ]},
    { h: "The Internal Environment: Organizational Culture", blocks: [
      { t: "def", term: "Organizational culture", d: "The shared values, principles, traditions, and ways of doing things that influence the way organizational members act and that distinguish the organization from other organizations. Just as each individual has a personality, an organization has one too." },
      { t: "list", title: "Six dimensions of an organization's culture", items: [
        "1. Adaptability", "2. Attention to detail", "3. Outcome orientation", "4. People orientation", "5. Team orientation", "6. Integrity"
      ]},
      { t: "def", term: "Strong cultures", d: "Organizational cultures in which the key values are intensely held and widely shared. Strong cultures have a greater influence on employees than weak cultures." },
      { t: "table", title: "Strong vs. weak cultures", cols: ["Strong cultures", "Weak cultures"], rows: [
        ["Values widely shared", "Values limited to a few people — usually top management"],
        ["Culture conveys consistent messages about what's important", "Culture sends contradictory messages about what's important"],
        ["Most employees can tell stories about company history or heroes", "Employees have little knowledge of company history or heroes"],
        ["Employees strongly identify with culture", "Employees have little identification with culture"],
        ["Strong connection between shared values and behaviors", "Little connection between shared values and behaviors"]
      ]},
      { t: "p", text: "Where culture comes from and how it continues: the original source usually reflects the vision of the FOUNDERS; once in place, organizational practices (e.g., selection and socialization of employees) help maintain it; and the actions of TOP MANAGERS have a major impact on culture." },
      { t: "list", title: "How culture is shaped (transmitted to employees)", items: [
        "Stories", "Rituals", "Material artifacts and symbols", "Language"
      ]},
      { t: "p", text: "Culture also affects the types of managerial decisions made across planning, organizing, leading, and controlling." }
    ]}
  ],
  mcqs: [
    { q: "The view that managers are directly responsible for an organization's success or failure is called the…", o: [
      "omnipotent view",
      "symbolic view",
      "contingency view",
      "systems view"
    ], a: 0, e: "Omnipotent view = managers are directly responsible. Symbolic view = success/failure is largely due to external forces outside managers' control." },
    { q: "Under the symbolic view of management…", o: [
      "much of an organization's success or failure is due to external forces outside managers' control",
      "managers' decisions are the main driver of organizational performance",
      "managers should be held personally liable for losses",
      "culture has no influence on managerial discretion"
    ], a: 0, e: "The symbolic view attributes much of success or failure to external forces beyond managers' control." },
    { q: "Managerial discretion is constrained by…", o: [
      "the organizational environment and the organizational culture",
      "only the board of directors",
      "only government regulations",
      "the manager's own personality"
    ], a: 0, e: "The slides show managerial discretion squeezed between the organizational environment (external) and organizational culture (internal)." },
    { q: "The part of the environment directly relevant to the achievement of organizational goals is the…", o: [
      "specific environment",
      "general environment",
      "internal environment",
      "global environment"
    ], a: 0, e: "The specific environment is directly relevant to goal achievement and gets most of management's attention." },
    { q: "Which list contains components of the SPECIFIC environment?", o: [
      "Suppliers, customers, competitors, government, investors, special interest groups",
      "Economic, demographic, technological, sociocultural conditions",
      "Stories, rituals, symbols, language",
      "Adaptability, integrity, outcome orientation"
    ], a: 0, e: "The specific environment includes suppliers, customers, competitors, government, investors, and special interest groups." },
    { q: "In Porter's Five Forces Model, the force at the center of the model is…", o: [
      "rivalry among existing competitors",
      "threat of new entrants",
      "bargaining power of suppliers",
      "threat of substitute products or services"
    ], a: 0, e: "Rivalry among existing competitors sits at the center, shaped by the other four forces (new entrants, supplier power, buyer power, substitutes)." },
    { q: "A pharmacy chain worries that customers could switch to herbal remedies instead of medicines. In Porter's model this is…", o: [
      "the threat of substitute products or services",
      "the bargaining power of buyers",
      "the threat of new entrants",
      "rivalry among existing competitors"
    ], a: 0, e: "Different products that satisfy the same need are substitutes — the threat of substitute products or services." },
    { q: "Environmental uncertainty has two dimensions:", o: [
      "degree of change and degree of complexity",
      "size and profitability",
      "centralization and formalization",
      "strength and weakness of culture"
    ], a: 0, e: "Uncertainty = degree of change (stable vs. dynamic) × degree of complexity (number of components and knowledge needed about them)." },
    { q: "An organization facing many dissimilar, continually changing components it needs sophisticated knowledge about is in which cell of the uncertainty matrix?", o: [
      "Cell 4: dynamic and complex — highest uncertainty",
      "Cell 1: stable and simple — lowest uncertainty",
      "Cell 2: dynamic and simple",
      "Cell 3: stable and complex"
    ], a: 0, e: "Dynamic + complex (Cell 4) combines frequent change with many dissimilar components — the greatest environmental uncertainty." },
    { q: "Organizational culture is defined as…", o: [
      "the shared values, principles, traditions, and ways of doing things that influence the way members act and distinguish the organization from others",
      "the formal arrangement of jobs within an organization",
      "the institutions or forces outside the organization affecting its performance",
      "the plans for how the organization will compete successfully"
    ], a: 0, e: "That is the slide definition of organizational culture — the organization's “personality.”" },
    { q: "Which of the following is one of the six dimensions that capture an organization's culture?", o: [
      "Attention to detail",
      "Profitability",
      "Centralization",
      "Span of control"
    ], a: 0, e: "The six dimensions are adaptability, attention to detail, outcome orientation, people orientation, team orientation, and integrity." },
    { q: "In a strong culture…", o: [
      "key values are intensely held and widely shared",
      "values are limited to a few people, usually top management",
      "employees have little knowledge of company history or heroes",
      "culture sends contradictory messages about what's important"
    ], a: 0, e: "Strong cultures = key values intensely held and widely shared; the other options describe weak cultures." },
    { q: "The original source of an organization's culture usually reflects…", o: [
      "the vision of the founders",
      "government regulation",
      "competitors' practices",
      "customer preferences"
    ], a: 0, e: "Culture usually originates in the founders' vision; it is then maintained by organizational practices and shaped by top managers' actions." },
    { q: "Culture is transmitted to employees through…", o: [
      "stories, rituals, material artifacts and symbols, and language",
      "SWOT analyses and mission statements",
      "spans of control and chains of command",
      "supplier and customer contracts"
    ], a: 0, e: "The slides list four shapers of culture: stories, rituals, material artifacts/symbols, and language." }
  ],
  cases: [
    { title: "Olive & Thyme Goes Regional",
      scenario: "Olive & Thyme, a Lebanese producer of premium olive oil, plans to expand across the region. Its managers map what they face: two giant retail chains now demand steep discounts to stock the brand; cheap imported sunflower oil is winning price-sensitive consumers; three new artisanal producers entered the market last year; and the only supplier of dark glass bottles in the country keeps raising prices. Meanwhile, a consumer-protection group is campaigning about labeling claims, and new food-safety regulations are being drafted by the government. The CEO sighs: “Half of what determines our success isn't even in our hands.”",
      qs: [
        { q: "Analyze Olive & Thyme's situation using Porter's Five Forces. Identify each force present in the case.", a: "Bargaining power of buyers — the two giant retail chains demanding steep discounts. Threat of substitutes — cheap imported sunflower oil satisfying the same need. Threat of new entrants — three new artisanal producers entering last year. Bargaining power of suppliers — the single bottle supplier raising prices (a powerful supplier). Rivalry among existing competitors — at the center: competition with other oil producers intensified by the new entrants and substitutes." },
        { q: "Which components of the specific environment appear in this case beyond competitors and suppliers?", a: "Customers (price-sensitive consumers and the retail chains as buyers), government (new food-safety regulations influencing what the organization can and cannot do), and special interest groups (the consumer-protection group campaigning on labeling — lobbyists/action groups that can effect change)." },
        { q: "The CEO's sigh reflects which view of management? Contrast it with the alternative view.", a: "The symbolic view — much of an organization's success or failure is due to external forces outside managers' control (powerful buyers, substitutes, regulation). The alternative is the omnipotent view, under which managers are directly responsible for success or failure. The lecture presents managerial discretion as constrained by the environment and culture, sitting between these two views." },
        { q: "Classify Olive & Thyme's environment using the two dimensions of environmental uncertainty and state the implication.", a: "Degree of change: dynamic — components change frequently (new entrants, shifting regulation, price moves). Degree of complexity: complex — many dissimilar components (retailers, importers, supplier, regulator, interest group) requiring sophisticated knowledge. That places the firm in Cell 4 of the uncertainty matrix — the highest environmental uncertainty — meaning managers must monitor the environment closely and retain flexibility." }
      ]},
    { title: "The Culture Clash at Nour Software",
      scenario: "Nour Software was founded by a charismatic engineer who preached “ship fast, help your teammate, and never fudge the numbers.” Twenty years later, employees still retell the story of the founder refusing a lucrative contract that required hiding a security flaw. Every Friday the firm holds a “demo ritual” where teams show what they built; new hires receive a cedar-wood keyboard rest symbolizing craftsmanship, and everyone uses the in-house phrase “red-flag it” for raising concerns. A newly acquired subsidiary, ByteWorks, is different: its employees barely know their own company's history, its stated values hang on posters nobody reads, and behavior varies wildly between departments. Nour's CEO must decide how to integrate ByteWorks.",
      qs: [
        { q: "Using the lecture's definition, what is organizational culture, and which mechanisms of cultural transmission can you identify at Nour?", a: "Organizational culture is the shared values, principles, traditions, and ways of doing things that influence how members act and distinguish the organization from others. Nour transmits it through all four mechanisms: STORIES (the founder refusing the contract), RITUALS (the Friday demo ritual), MATERIAL ARTIFACTS AND SYMBOLS (the cedar-wood keyboard rest), and LANGUAGE (the phrase “red-flag it”)." },
        { q: "Classify Nour and ByteWorks as strong or weak cultures, justifying with the comparison criteria from the slides.", a: "Nour is a strong culture: values are widely shared, consistent messages about what's important, employees can tell stories about company history/heroes, strong identification, and a strong connection between shared values and behaviors. ByteWorks is a weak culture: employees have little knowledge of company history, values are limited to posters (effectively top management only), contradictory messages, little identification, and little connection between stated values and actual behavior (behavior varies wildly)." },
        { q: "Where did Nour's culture come from, and what keeps it alive according to the lecture?", a: "The original source of culture usually reflects the vision of the FOUNDERS — here the founding engineer's creed (ship fast, help teammates, never fudge numbers). It continues because organizational practices help maintain it (rituals, socialization of new hires with symbolic artifacts) and because the actions of top managers — like the founder's refusal of the contract — have a major impact on culture." },
        { q: "Which of the six culture dimensions are most visible in Nour's culture? Name at least three with evidence.", a: "Integrity (“never fudge the numbers,” refusing to hide the security flaw, “red-flag it”); team orientation (“help your teammate”); outcome orientation/adaptability (“ship fast,” weekly demos of results); and attention to detail is suggested by the craftsmanship symbolism. Any three with evidence would earn full marks." }
      ]}
  ],
  essays: [
    { q: "Contrast the omnipotent and symbolic views of management. What constrains managerial discretion, and why does the distinction matter for how we judge managers?",
      outline: [
        "Omnipotent view: managers directly responsible for success or failure",
        "Symbolic view: much of success/failure due to external forces outside managers' control",
        "Constraints on managerial discretion: organizational environment (external) and organizational culture (internal)",
        "Implication: realistic evaluation of managers — neither full credit nor full blame; managers act within constraints",
        "Link to the rest of the lecture: environment (uncertainty, five forces) and culture (strong/weak) are the two constraint sets"
      ],
      model: "The omnipotent view holds that managers are directly responsible for an organization's success or failure: good results reflect good management, poor results poor management. The symbolic view counters that much of an organization's success or failure is due to external forces outside managers' control — economic conditions, competitors, regulation — so managers' influence is partly symbolic. The lecture resolves the debate by showing managerial discretion as constrained from two directions: externally by the organizational environment (its components, Porter's five competitive forces, and its degree of uncertainty) and internally by the organizational culture (the shared values and ways of doing things that limit what decisions are acceptable). The distinction matters because it calibrates how we judge managers: under a purely omnipotent view we would credit or blame them for everything, while the symbolic view reminds us that a CEO inheriting a powerful set of buyers, aggressive substitutes, or a rigid strong culture cannot simply will success. A fair assessment recognizes that managers matter — they plan, organize, lead, and control within their discretion — but that discretion operates inside environmental and cultural constraints." },
    { q: "Explain the concept of environmental uncertainty and its two dimensions, and describe the four cells of the environmental uncertainty matrix. How should the amount of uncertainty affect managerial attention?",
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
      model: "The environment consists of institutions or forces outside the organization that could potentially affect its performance, and environments differ in their degree of environmental uncertainty along two dimensions. The degree of change asks whether the environment's components change frequently (dynamic) or very little (stable). The degree of complexity looks at the number of components in the environment and the extent of knowledge the organization needs about them. Crossing the dimensions yields four cells. Cell 1 (stable and simple) has few, similar components that remain basically the same and minimal need for sophisticated knowledge — the least uncertainty. Cell 2 (dynamic and simple) has few, similar components that continually change. Cell 3 (stable and complex) has many dissimilar components that remain basically the same, with a high need for sophisticated knowledge. Cell 4 (dynamic and complex) combines many dissimilar, continually changing components with high knowledge needs — the greatest uncertainty. The practical consequence is that the more uncertain the environment, the more management must monitor it and preserve flexibility; and since the specific environment (suppliers, customers, competitors, government, investors, special interest groups) is the part directly relevant to goal achievement, that is where most managerial attention typically focuses." },
    { q: "“Culture is to the organization what personality is to the individual.” Define organizational culture, explain how strong cultures differ from weak ones, and discuss where culture comes from and how it is maintained and transmitted.",
      outline: [
        "Definition: shared values, principles, traditions, ways of doing things that influence member behavior and distinguish the organization",
        "Six dimensions: adaptability, attention to detail, outcome orientation, people orientation, team orientation, integrity",
        "Strong cultures: values intensely held and widely shared; consistent messages; stories/heroes known; strong identification; values-behavior link — greater influence on employees",
        "Weak cultures: values limited to top management; contradictory messages; little history knowledge; little identification; weak values-behavior link",
        "Origins: founders' vision; maintained by organizational practices and top managers' actions",
        "Transmission: stories, rituals, material artifacts and symbols, language; culture also shapes managerial decisions"
      ],
      model: "Organizational culture is the shared values, principles, traditions, and ways of doing things that influence the way organizational members act and that distinguish the organization from other organizations — the organization's personality. Research identifies six dimensions that capture it: adaptability, attention to detail, outcome orientation, people orientation, team orientation, and integrity. Cultures vary in strength. In strong cultures the key values are intensely held and widely shared: the culture conveys consistent messages about what is important, most employees can tell stories about company history and heroes, employees strongly identify with the culture, and there is a strong connection between shared values and behavior — which is why strong cultures influence employees more than weak ones. Weak cultures show the reverse: values held mainly by top management, contradictory messages, little knowledge of history, weak identification, and little link between espoused values and actual behavior. Culture's original source usually reflects the vision of the founders; once established, organizational practices help maintain it and the actions of top managers signal what is truly valued. It is transmitted to employees through stories, rituals, material artifacts and symbols, and language. Finally, culture is not just atmosphere: it constrains managerial discretion and affects the kinds of planning, organizing, leading, and controlling decisions managers consider acceptable." }
  ]
},
/* ---------------- WEEK 4 ---------------- */
{
  id: "w4",
  week: 4,
  title: "Strategy",
  blurb: "The strategic management process, corporate strategies, and competitive advantage.",
  sections: [
    { h: "What Is Strategic Management?", blocks: [
      { t: "def", term: "Strategic management", d: "What managers do to develop the organization's strategies." },
      { t: "def", term: "Strategies", d: "The plans for how the organization will do what it's in business to do, how it will compete successfully, and how it will attract and satisfy its customers in order to achieve its goals." },
      { t: "def", term: "Business model", d: "How a company is going to make money." }
    ]},
    { h: "The Strategic Management Process (5 steps)", blocks: [
      { t: "list", title: "The five steps", items: [
        "Step 1 — Identify the organization's current mission, goals, and strategies. Mission: the purpose of an organization; mission statements help focus the strategic direction of the company",
        "Step 2 — SWOT analysis (external analysis → opportunities & threats; internal analysis → strengths & weaknesses)",
        "Step 3 — Formulate strategies (corporate, competitive, functional)",
        "Step 4 — Implement strategies: no matter how well planned, performance suffers if strategies aren't implemented properly",
        "Step 5 — Evaluate results: how effective have strategies been? what adjustments are necessary?"
      ]},
      { t: "def", term: "SWOT analysis", d: "An analysis of the organization's Strengths, Weaknesses, Opportunities, and Threats. Strengths: activities the organization does well or unique resources. Weaknesses: activities it does not do well or resources it needs but lacks. Opportunities: positive trends in the external environment. Threats: negative trends in the external environment." },
      { t: "def", term: "Resources", d: "An organization's assets used to develop, manufacture, and deliver products to its customers." },
      { t: "def", term: "Capabilities", d: "An organization's skills and abilities in doing the work activities needed in its business." },
      { t: "def", term: "Core competencies", d: "The organization's major value-creating capabilities that determine its competitive weapons." }
    ]},
    { h: "Corporate Strategy", blocks: [
      { t: "def", term: "Corporate strategy", d: "An organizational strategy that determines what businesses a company is in or wants to be in, and what it wants to do with those businesses. The three levels of strategy: corporate (multibusiness corporation) → competitive (strategic business units) → functional (R&D, manufacturing, marketing, HR, finance)." },
      { t: "def", term: "Growth strategy", d: "A corporate strategy used when an organization wants to expand the number of markets served or products offered, through current or new businesses. Four ways: concentration, vertical integration, horizontal integration, diversification (related or unrelated)." },
      { t: "def", term: "Stability strategy", d: "A corporate strategy in which an organization continues to do what it is currently doing." },
      { t: "def", term: "Renewal strategy", d: "A corporate strategy designed to address declining performance. Two types: retrenchment and turnaround." },
      { t: "def", term: "BCG matrix", d: "A strategy tool that guides resource allocation decisions on the basis of market share and growth rate of SBUs. Four categories: stars, cash cows, question marks, dogs." }
    ]},
    { h: "Competitive Strategy & Competitive Advantage", blocks: [
      { t: "def", term: "Competitive strategy", d: "An organizational strategy for how an organization will compete in its business(es)." },
      { t: "def", term: "Strategic business unit (SBU)", d: "The single independent businesses of an organization that formulate their own competitive strategies." },
      { t: "def", term: "Competitive advantage", d: "What sets an organization apart — its distinctive edge. It can stem from quality, low cost, technology, or other factors." },
      { t: "def", term: "Economic moat", d: "Sustaining competitive advantage by protecting long-term profits and market share using various means. The term was popularized by Warren Buffett as a way to visualize keeping a competitive advantage." },
      { t: "list", title: "Choosing a competitive advantage (competitive strategies)", items: [
        "Cost leadership strategy — competing on the lowest costs",
        "Differentiation strategy — competing by being unique",
        "Focus strategy — cost or differentiation advantage in a narrow segment",
        "“Stuck in the middle” — failing to develop either a low-cost or a differentiation advantage"
      ]},
      { t: "p", text: "First movers gain advantages but also face disadvantages (Exhibit: first-mover advantages and disadvantages) — being first to market can build reputation and learning effects, but carries cost and uncertainty risks while imitators learn from the pioneer's mistakes." }
    ]}
  ],
  mcqs: [
    { q: "A business model describes…", o: [
      "how a company is going to make money",
      "the visual representation of an organization's structure",
      "the purpose of an organization",
      "the degree to which an organization is centralized"
    ], a: 0, e: "Business model = how a company is going to make money. Mission = the purpose of an organization." },
    { q: "What is the FIRST step of the strategic management process?", o: [
      "Identifying the organization's current mission, goals, and strategies",
      "Doing a SWOT analysis",
      "Formulating strategies",
      "Evaluating results"
    ], a: 0, e: "The 5 steps: (1) identify current mission, goals, strategies; (2) SWOT; (3) formulate; (4) implement; (5) evaluate." },
    { q: "In a SWOT analysis, opportunities are…", o: [
      "positive trends in the external environment",
      "activities the organization does well",
      "unique internal resources",
      "negative trends in the external environment"
    ], a: 0, e: "Opportunities and threats are EXTERNAL (positive vs. negative trends); strengths and weaknesses are INTERNAL." },
    { q: "An organization's major value-creating capabilities that determine its competitive weapons are its…", o: [
      "core competencies",
      "resources",
      "strategies",
      "mission statements"
    ], a: 0, e: "Core competencies are the major value-creating capabilities. Resources are assets; capabilities are skills/abilities in doing work activities." },
    { q: "Corporate strategy determines…", o: [
      "what businesses a company is in or wants to be in, and what it wants to do with those businesses",
      "how a single business unit will compete in its industry",
      "how each functional department supports the business",
      "how to monitor and correct daily operations"
    ], a: 0, e: "Corporate strategy answers “what businesses are we in / what do we do with them.” Competitive strategy = how an SBU competes; functional strategies support it." },
    { q: "A soft-drink company buys the sugar plantations that supply it. This growth strategy is…", o: [
      "vertical integration",
      "horizontal integration",
      "related diversification",
      "concentration"
    ], a: 0, e: "Owning your supplier is (backward) vertical integration. Horizontal integration = combining with competitors; concentration = growing your core business; diversification = entering other industries." },
    { q: "A supermarket chain merges with a competing supermarket chain. This is…", o: [
      "horizontal integration",
      "vertical integration",
      "unrelated diversification",
      "retrenchment"
    ], a: 0, e: "Combining with competitors in the same industry is horizontal integration." },
    { q: "A company facing declining performance adopts a corporate strategy to address it. This is a…", o: [
      "renewal strategy (retrenchment or turnaround)",
      "stability strategy",
      "growth strategy",
      "focus strategy"
    ], a: 0, e: "Renewal strategies address declining performance; the two types are retrenchment and turnaround. Stability = continue doing what you're doing." },
    { q: "The BCG matrix guides resource allocation decisions on the basis of…", o: [
      "market share and growth rate of SBUs",
      "strengths and weaknesses of departments",
      "environmental change and complexity",
      "centralization and formalization"
    ], a: 0, e: "The BCG matrix classifies SBUs into stars, cash cows, question marks, and dogs using market share and market growth rate." },
    { q: "In the BCG matrix, the four categories are…", o: [
      "stars, cash cows, question marks, dogs",
      "strengths, weaknesses, opportunities, threats",
      "leaders, followers, nichers, losers",
      "growth, stability, renewal, focus"
    ], a: 0, e: "Stars, cash cows, question marks, and dogs are the four BCG cells." },
    { q: "“Economic moat,” a term popularized by Warren Buffett, refers to…", o: [
      "sustaining competitive advantage by protecting long-term profits and market share",
      "the cash reserves a company holds for emergencies",
      "the cost advantage of the largest producer",
      "a barrier that prevents employees from leaving"
    ], a: 0, e: "An economic moat is about KEEPING (sustaining) a competitive advantage — protecting long-term profits and market share." },
    { q: "A watchmaker sells handcrafted, prestige watches at very high prices to stand apart from mass producers. Which competitive strategy is this?", o: [
      "Differentiation strategy",
      "Cost leadership strategy",
      "Stability strategy",
      "Stuck in the middle"
    ], a: 0, e: "Competing through uniqueness/prestige is differentiation. Cost leadership competes on lowest costs; “stuck in the middle” is having neither advantage." },
    { q: "A budget airline that targets only domestic routes with the absolute lowest fares in that narrow segment is pursuing…", o: [
      "a focus strategy",
      "a differentiation strategy across the whole market",
      "an unrelated diversification strategy",
      "a turnaround strategy"
    ], a: 0, e: "Serving a narrow segment with a cost (or differentiation) advantage is the focus strategy." },
    { q: "A firm that fails to develop either a low-cost or a differentiation advantage is said to be…", o: [
      "stuck in the middle",
      "a cash cow",
      "a first mover",
      "vertically integrated"
    ], a: 0, e: "“Stuck in the middle” describes firms with neither a cost leadership nor a differentiation advantage." },
    { q: "An SBU (strategic business unit) is…", o: [
      "a single independent business of an organization that formulates its own competitive strategy",
      "a department such as marketing or finance",
      "a temporary cross-functional project team",
      "the corporate headquarters of a multibusiness firm"
    ], a: 0, e: "SBUs are the single independent businesses that formulate their own competitive strategies; functional strategies (marketing, finance…) sit below them." }
  ],
  cases: [
    { title: "Bayt Al Zaytoun: From One Press to an Empire?",
      scenario: "Bayt Al Zaytoun runs a profitable olive-oil press. The family board is debating four proposals: (1) buy more olive groves so the firm controls its raw-material supply; (2) acquire a rival press in the north; (3) launch a line of olive-oil-based cosmetics; (4) simply keep operating as today, since the market is steady. Meanwhile, the finance director presents a portfolio review of the firm's three existing units: the press (high market share in a low-growth market), a fast-growing bottled-water unit with high share, and a struggling soap unit with low share in a stagnant market.",
      qs: [
        { q: "Classify each of the four proposals using the corporate strategies from the lecture.", a: "(1) Buying groves = growth through VERTICAL INTEGRATION (controlling inputs/suppliers). (2) Acquiring a rival press = growth through HORIZONTAL INTEGRATION (combining with a competitor). (3) Olive-oil cosmetics = growth through DIVERSIFICATION — related diversification, since it builds on the same core product. (4) Keep operating as today = STABILITY strategy (continuing to do what the organization is currently doing)." },
        { q: "Apply the BCG matrix to the three existing units and state the resource-allocation implication of each.", a: "The press: high share, low growth = CASH COW — harvest its steady cash to fund others. Bottled water: high share, high growth = STAR — invest to sustain its position. Soap: low share, low growth = DOG — candidate for divestment or minimal investment. The BCG matrix guides resource allocation based on market share and growth rate of SBUs." },
        { q: "Before choosing, the board asks for a SWOT. Give one plausible entry per quadrant from the case and classify each correctly as internal or external.", a: "Strength (internal): a profitable press with high market share / control of quality. Weakness (internal): a struggling soap unit (an activity the firm does not do well). Opportunity (external positive trend): growing demand for olive-oil cosmetics or bottled water. Threat (external negative trend): rival presses competing for supply or stagnation of the soap market. Strengths/weaknesses are internal; opportunities/threats are external trends." },
        { q: "If the cosmetics line succeeds, what would Bayt Al Zaytoun need to make the advantage durable? Use the lecture's concept.", a: "An ECONOMIC MOAT — sustaining the competitive advantage by protecting long-term profits and market share using various means (Warren Buffett's metaphor). Developing a competitive advantage is not enough; the firm must SUSTAIN it, e.g., through its core competencies — its major value-creating capabilities in olive-oil products." }
      ]},
    { title: "Two Hotels, One Street",
      scenario: "On the same Beirut street sit two hotels. Hotel Cedrus charges premium prices for an experience nobody else offers: rooftop cedar gardens, personalized concierge service, and locally commissioned art in every room. Hotel Salam strips everything to the essentials — automated check-in, no restaurant, tiny but spotless rooms — and consistently posts the lowest prices in the city while staying profitable. A third hotel, Hotel Wasat, recently tried to copy Cedrus's luxury image while also matching Salam's prices; it is losing money on both fronts. Salam's owner is now considering opening a second property targeting only backpackers, with ultra-low prices in that niche.",
      qs: [
        { q: "Identify the competitive strategy of Cedrus and of Salam, using the lecture's terms, and state the source of each one's competitive advantage.", a: "Cedrus pursues a DIFFERENTIATION strategy — its competitive advantage (distinctive edge) stems from quality and uniqueness (gardens, concierge, art). Salam pursues a COST LEADERSHIP strategy — its advantage stems from low cost (automation, minimal services) while remaining profitable at the lowest prices." },
        { q: "Diagnose Hotel Wasat's problem with the lecture's exact term and explain why it is dangerous.", a: "Wasat is STUCK IN THE MIDDLE — it failed to develop either a low-cost or a differentiation advantage. Trying to be both luxurious and cheapest at once means it cannot match Salam's costs nor Cedrus's uniqueness, so it has no distinctive edge and loses money on both fronts." },
        { q: "What strategy is Salam's owner considering with the backpacker property?", a: "A FOCUS strategy — pursuing a cost advantage within a narrow segment (backpackers only), rather than the broad market. Focus strategies apply cost leadership or differentiation to a niche." },
        { q: "Cedrus's manager says: “Our advantage is safe forever.” Evaluate this claim using the lecture's ideas on sustaining advantage and first movers.", a: "The claim is overconfident. Businesses must not only develop a competitive advantage but SUSTAIN it — building an economic moat to protect long-term profits and market share. Advantages can be eroded by imitators: the first-mover exhibit shows being first brings advantages (e.g., reputation, learning) but also disadvantages, as later entrants can learn from the pioneer and copy what works. Cedrus needs to keep reinforcing what sets it apart (core competencies) rather than assume permanence." }
      ]}
  ],
  essays: [
    { q: "Explain the steps of the strategic management process. For each step, state what managers do and why skipping that step undermines the process.",
      outline: [
        "Define strategic management and strategies",
        "Step 1: identify current mission (purpose of the organization), goals, strategies — mission focuses strategic direction; skipping = no baseline or direction",
        "Step 2: SWOT — external analysis (opportunities, threats) + internal analysis (strengths, weaknesses; resources, capabilities, core competencies); skipping = strategies detached from reality",
        "Step 3: formulate strategies at three levels — corporate, competitive, functional; skipping = no coherent plan",
        "Step 4: implement — performance suffers if strategies aren't implemented properly even when well planned",
        "Step 5: evaluate results — how effective? what adjustments? skipping = no learning or correction",
        "Note the process is sequential and feeds back into Step 1"
      ],
      model: "Strategic management is what managers do to develop the organization's strategies — the plans for how the organization will do what it is in business to do, compete successfully, and attract and satisfy its customers to achieve its goals. The process has five steps. First, managers identify the organization's current mission, goals, and strategies; the mission states the organization's purpose and focuses its strategic direction — without it, there is no baseline against which to plan. Second, they conduct a SWOT analysis: external analysis reveals opportunities (positive external trends) and threats (negative external trends), while internal analysis reveals strengths (what the organization does well, unique resources) and weaknesses (what it does poorly or lacks), grounded in its resources, capabilities, and core competencies. Skipping SWOT yields strategies disconnected from the firm's situation. Third, they formulate strategies at three levels — corporate (what businesses to be in), competitive (how to compete in each business), and functional (how departments support the competitive strategy). Fourth, they implement: the slides stress that no matter how effectively strategies were planned, performance suffers if they are not implemented properly — formulation without execution is wasted effort. Fifth, they evaluate results, asking how effective the strategies were and what adjustments are necessary, which loops back into the next round of planning. The power of the process lies in its completeness: analysis without formulation is aimless, formulation without implementation is empty, and implementation without evaluation never improves." },
    { q: "Describe the three types of corporate strategy (growth, stability, renewal), including the four ways to grow. Then explain how the BCG matrix helps managers manage a portfolio of businesses.",
      outline: [
        "Corporate strategy defined: what businesses we're in / want to be in and what to do with them",
        "Growth: expand markets served or products offered — concentration; vertical integration; horizontal integration; diversification (related/unrelated) — with brief explanations/examples",
        "Stability: continue doing what the organization is currently doing",
        "Renewal: address declining performance — retrenchment vs. turnaround",
        "BCG matrix: tool guiding resource allocation based on SBU market share and growth rate",
        "Four cells — stars, cash cows, question marks, dogs — and the allocation logic (fund stars/questions with cash-cow cash; divest dogs)"
      ],
      model: "Corporate strategy determines what businesses a company is in or wants to be in and what it wants to do with those businesses. Growth strategies expand the number of markets served or products offered, through current or new businesses, in four ways: concentration (growing the core business), vertical integration (controlling inputs or distribution — one's suppliers or buyers), horizontal integration (combining with competitors), and diversification, which can be related (new businesses connected to the core) or unrelated. A stability strategy means the organization continues to do what it is currently doing — appropriate when conditions or resources argue against expansion. Renewal strategies address declining performance and come in two forms: retrenchment and turnaround. With multiple businesses, managers face an allocation problem: which units deserve investment? The BCG matrix answers it by positioning each strategic business unit on two axes — market share and market growth rate — producing four categories: stars (high share, high growth) to be invested in; cash cows (high share, low growth) to be harvested for the cash they generate; question marks (low share, high growth) requiring a decision to invest or abandon; and dogs (low share, low growth), typically candidates for divestment. The matrix thus turns the corporate-strategy question into a disciplined, portfolio-level resource-allocation decision." },
    { q: "Define competitive advantage and discuss how an organization can choose and sustain one. Include the competitive strategies, the danger of being “stuck in the middle,” and the concept of the economic moat.",
      outline: [
        "Competitive advantage: what sets an organization apart — its distinctive edge; can stem from quality, low cost, technology, other factors",
        "Competitive strategy operates at the SBU level",
        "Choosing: cost leadership (lowest costs), differentiation (uniqueness), focus (narrow segment with either advantage)",
        "Stuck in the middle: developing neither advantage — no distinctive edge",
        "Sustaining: not enough to develop an advantage — must sustain it; economic moat (Buffett): protecting long-term profits and market share",
        "First movers: advantages and disadvantages of being first",
        "Link back to core competencies as the root of advantage"
      ],
      model: "Competitive advantage is what sets an organization apart — its distinctive edge — and it can stem from quality, low cost, technology, or other factors. Each strategic business unit chooses how to compete through a competitive strategy. The lecture presents three routes: a cost leadership strategy, competing on the lowest costs in the industry; a differentiation strategy, competing by offering something unique that customers value; and a focus strategy, applying a cost or differentiation advantage within a narrow segment rather than the broad market. The danger lies in choosing none: a firm that fails to develop either a low-cost or a differentiation advantage is “stuck in the middle” — it has no distinctive edge, cannot beat cost leaders on price or differentiators on uniqueness, and typically underperforms both. Developing an advantage, however, is only half the task; businesses must also SUSTAIN it. This is the idea of the economic moat, popularized by Warren Buffett: protecting long-term profits and market share using various means so the advantage endures against imitation and rivalry. The first-mover discussion reinforces the point — being first can create advantages such as reputation and learning, but it also carries disadvantages, since followers can learn from the pioneer's costly mistakes. Durable success therefore rests on core competencies — the organization's major value-creating capabilities — deployed through a clear competitive strategy and defended like a moat around a castle." }
  ]
},
/* ---------------- WEEK 5 ---------------- */
{
  id: "w5",
  week: 5,
  title: "Making Decisions",
  blurb: "From the 8-step process and bounded rationality to groupthink and how to manage it.",
  sections: [
    { h: "The Decision-Making Process", blocks: [
      { t: "def", term: "Decision", d: "A conclusion or resolution made after considering alternatives. Managers at all levels and in every organizational unit make decisions." },
      { t: "list", title: "The eight steps in the decision-making process", items: [
        "1. Identifying a problem",
        "2. Identifying decision criteria",
        "3. Allocating weights to the criteria",
        "4. Developing alternatives",
        "5. Analyzing alternatives",
        "6. Selecting an alternative",
        "7. Implementing the alternative",
        "8. Evaluating decision effectiveness"
      ]}
    ]},
    { h: "How Managers Actually Decide", blocks: [
      { t: "def", term: "Rational decision making", d: "Choices that are logical and consistent and maximize value. Assumptions: the decision maker is logical and objective; the problem is clear and unambiguous; there is a clear, specific goal with awareness of all alternatives and consequences; the alternative that maximizes goal achievement is selected; decisions are made in the best interest of the organization." },
      { t: "def", term: "Bounded rationality", d: "Decision making that's rational, but limited (bounded) by an individual's ability to process information." },
      { t: "def", term: "Satisfice", d: "Accepting solutions that are “good enough” (rather than maximizing)." },
      { t: "def", term: "Intuitive decision making", d: "Making decisions on the basis of experience, feelings, and accumulated judgment. Exhibit 3-5 identifies five aspects of intuition: experience-based decisions, affect-initiated decisions (feelings/emotions), cognitive-based decisions (skills, knowledge, training), values or ethics-based decisions, and subconscious mental processing." },
      { t: "def", term: "Evidence-based management (EBMgt)", d: "The systematic use of the best available evidence to improve management practice. Four essentials: (1) the decision maker's expertise and judgment; (2) external evidence evaluated by the decision maker; (3) opinions, preferences, and values of those who have a stake in the decision; (4) relevant organizational (internal) factors such as context, circumstances, and organizational members." }
    ]},
    { h: "Types of Problems and Decisions", blocks: [
      { t: "def", term: "Structured problems → programmed decisions", d: "Structured problems are straightforward, familiar, and easily defined. Programmed decisions are repetitive decisions that can be handled by a routine approach. Three types: PROCEDURE (a series of sequential steps to respond to a well-structured problem), RULE (an explicit statement telling managers what can or cannot be done), POLICY (a guideline for making decisions)." },
      { t: "def", term: "Unstructured problems → nonprogrammed decisions", d: "Unstructured problems are new or unusual, with ambiguous or incomplete information. Nonprogrammed decisions are unique and nonrecurring and involve custom-made solutions." },
      { t: "table", title: "Programmed vs. nonprogrammed decisions", cols: ["Characteristic", "Programmed", "Nonprogrammed"], rows: [
        ["Type of problem", "Structured", "Unstructured"],
        ["Managerial level", "Lower levels", "Upper levels"],
        ["Frequency", "Repetitive, routine", "New, unusual"],
        ["Information", "Readily available", "Ambiguous or incomplete"],
        ["Goals", "Clear, specific", "Vague"],
        ["Time frame for solution", "Short", "Relatively long"],
        ["Solution relies on…", "Procedures, rules, policies", "Judgment and creativity"]
      ]}
    ]},
    { h: "Heuristics and Biases", blocks: [
      { t: "def", term: "Heuristics", d: "“Rules of thumb” that can help make sense of complex, uncertain, or ambiguous information — but they can also lead to errors and biases in processing and evaluating information." },
      { t: "list", title: "Common decision-making biases (Exhibit 3-8)", items: [
        "Overconfidence", "Immediate gratification", "Anchoring effect", "Selective perception", "Confirmation", "Framing", "Availability", "Representation", "Randomness", "Sunk costs", "Self-serving", "Hindsight"
      ]}
    ]},
    { h: "Group Decision-Making", blocks: [
      { t: "list", title: "Advantages of group decision-making", items: [
        "More complete information and knowledge",
        "Greater number of perspectives and different experiences",
        "Intellectual stimulation through group discussion → decision is more fully informed and of higher quality",
        "People understand the rationale, so higher acceptance (buy-in) and higher commitment → increased chance of successful implementation"
      ]},
      { t: "list", title: "Potential downsides of group decision-making", items: [
        "Domination: only loud people are heard, and they do not necessarily have the most valid opinions",
        "Time consuming: coordinating diverse perspectives, reaching consensus, resolving conflicts",
        "Conformity pressures: pressure to conform to the group's majority view",
        "Ambiguous responsibility: accountability diffused among members — unclear who is ultimately responsible",
        "Satisficing: rather than maximizing or optimizing"
      ]},
      { t: "p", text: "Group composition matters: the team may be loaded for political reasons; some members may be busy, unavailable, or drop out and be replaced by less optimal ones; some may have a bad attitude or vested interest. Individuals may be good, but the group weak. Beware of a senior executive influencing a decision by appointing “their person” to the team or signaling their preference by starting to “implement” the decision." }
    ]},
    { h: "Groupthink (Janis, 1982)", blocks: [
      { t: "def", term: "Groupthink", d: "“A mode of thinking that people engage in when they are deeply involved in a cohesive group, when the members' strivings for unanimity override their motivation to realistically appraise alternative courses of action.” Members of a cohesive group maintain esprit de corps by unconsciously developing shared illusions and norms that interfere with critical thinking and reality testing." },
      { t: "list", title: "Antecedents of groupthink", items: [
        "High cohesiveness",
        "Structural factors: insulated group, partisan leadership, no procedural protocols, ideological homogeneity",
        "Contextual factors: external pressure, members under stress, lack of optimism, low self-esteem"
      ]},
      { t: "list", title: "Decision-making characteristics of groupthink", items: [
        "Limited consideration of options", "Limited consideration of goals", "Limited cost-benefit appraisal", "Limited use of expert knowledge", "Undue attention to facts that support the ingroup choice", "Limited reappraisal of options", "Lack of contingency plans"
      ]},
      { t: "table", title: "Symptoms of groupthink (3 families, 8 symptoms)", cols: ["Family", "Symptoms"], rows: [
        ["Overestimation of group worth", "Illusion of invulnerability (ignore danger, overly optimistic, extraordinary risks); Sense of moral superiority (decisions seen as morally correct, ethics ignored; seeing the other as the bad guy)"],
        ["Closed-mindedness", "Collective rationalization (explain away warnings contrary to group thinking); Excessive stereotyping (negative stereotypes of rivals outside the group, out-of-date perceptions)"],
        ["Pressures towards uniformity", "Self-censorship (withhold dissent, keep silent about misgivings); Pressure to conform (applied to anyone expressing doubt); Illusion of unanimity (falsely perceive everyone agrees); Mind guards (self-appointed protectors from adverse information)"]
      ]},
      { t: "ex", title: "Asch experiment (1951–56) — line judgment task", text: "About 75% of participants conformed at least once, even when they knew the group's answer was wrong; on average participants conformed about 32% of the time; tested alone, they answered correctly over 99% of the time. Herd mentality: we are social beings who care deeply what others think — we want to agree with the group even when strangers are involved, we are anonymous, and disagreeing costs nothing. Individual survival once depended on the group working together." }
    ]},
    { h: "Managing Group Decision-Making", blocks: [
      { t: "list", title: "Suggestions for managing the group DM process", items: [
        "Where possible avoid sharp divisions of status",
        "Draw out quiet members (in or outside of meetings)",
        "Dissuade the leader from doing most of the talking",
        "Have members write down ideas and publicize them anonymously before speaking — avoids anchoring and ego threatening",
        "Have someone with credibility play devil's advocate",
        "Create parallel groups to work on a problem, or have different groups analyze different options in depth (e.g., turnaround strategy vs. divestment)",
        "Refresh “stale” groups where routine and predictability reign",
        "Introduce outsiders to the group"
      ]}
    ]}
  ],
  mcqs: [
    { q: "What is the correct order of the FIRST three steps of the decision-making process?", o: [
      "Identify a problem → identify decision criteria → allocate weights to the criteria",
      "Identify decision criteria → identify a problem → develop alternatives",
      "Develop alternatives → analyze alternatives → select an alternative",
      "Identify a problem → develop alternatives → allocate weights to the criteria"
    ], a: 0, e: "The 8 steps begin: identify a problem, identify decision criteria, allocate weights to the criteria — then develop, analyze, and select alternatives, implement, and evaluate." },
    { q: "Which is an assumption of RATIONAL decision making?", o: [
      "The decision maker is aware of all alternatives and consequences and selects the alternative that maximizes the goal",
      "The decision maker accepts the first solution that is good enough",
      "Information-processing limits force simplified models of problems",
      "Decisions are based on feelings and accumulated judgment"
    ], a: 0, e: "Full rationality assumes a logical, objective decision maker with a clear problem, a clear goal, and full knowledge of alternatives — choosing the value-maximizing option in the organization's best interest." },
    { q: "Bounded rationality means decision making that is…", o: [
      "rational, but limited by an individual's ability to process information",
      "completely irrational and emotional",
      "delegated to a group rather than an individual",
      "based on explicit rules and procedures"
    ], a: 0, e: "Bounded rationality: rational within the bounds of limited information-processing ability — which leads people to satisfice." },
    { q: "A manager stops searching once she finds a supplier that is “good enough” rather than the best possible. This illustrates…", o: [
      "satisficing",
      "maximizing",
      "escalation of commitment",
      "evidence-based management"
    ], a: 0, e: "Satisficing = accepting solutions that are good enough — the hallmark of bounded rationality." },
    { q: "Which of the following is one of the four essentials of evidence-based management (EBMgt)?", o: [
      "Opinions, preferences, and values of those who have a stake in the decision",
      "Eliminating the decision maker's own judgment",
      "Relying exclusively on published external studies",
      "Avoiding any organizational context factors"
    ], a: 0, e: "EBMgt combines (1) the decision maker's expertise and judgment, (2) evaluated external evidence, (3) stakeholders' opinions/preferences/values, and (4) relevant organizational (internal) factors." },
    { q: "A series of sequential steps used to respond to a well-structured problem is a…", o: [
      "procedure",
      "rule",
      "policy",
      "heuristic"
    ], a: 0, e: "Procedure = sequential steps; rule = explicit statement of what can/cannot be done; policy = a guideline for making decisions." },
    { q: "Nonprogrammed decisions are typically…", o: [
      "unique, nonrecurring, and involve custom-made solutions",
      "repetitive and handled by a routine approach",
      "made mostly by lower-level managers",
      "based on readily available information and clear goals"
    ], a: 0, e: "Nonprogrammed decisions address unstructured problems: new/unusual, ambiguous information, vague goals, longer time frames, upper managerial levels, relying on judgment and creativity." },
    { q: "“We've already spent two million on this project — we can't stop now!” Which decision-making bias is this?", o: [
      "Sunk costs",
      "Anchoring effect",
      "Availability",
      "Hindsight"
    ], a: 0, e: "The sunk-cost bias lets past, unrecoverable expenditures drive current decisions instead of future costs and benefits. It is one of the 12 common biases in Exhibit 3-8." },
    { q: "A recruiter fixates on the first salary figure mentioned in a negotiation and adjusts insufficiently from it. This is the…", o: [
      "anchoring effect",
      "framing bias",
      "self-serving bias",
      "randomness bias"
    ], a: 0, e: "Anchoring = fixating on initial information as a starting point and failing to adjust adequately — another Exhibit 3-8 bias." },
    { q: "Which of the following is an ADVANTAGE of group decision-making?", o: [
      "Greater acceptance and buy-in, increasing the chance of successful implementation",
      "Faster decisions than individuals make",
      "Clear individual accountability for the outcome",
      "Less pressure to conform to others' views"
    ], a: 0, e: "Groups bring more complete information, more perspectives, intellectual stimulation, and higher acceptance/commitment. The costs are time, domination, conformity pressure, ambiguous responsibility, and satisficing." },
    { q: "In groupthink, “mind guards” are members who…", o: [
      "appoint themselves to protect the group from adverse information that might threaten group complacency",
      "deliberately argue against the group's preferred option",
      "leak the group's decisions to outsiders",
      "record dissenting opinions in the minutes"
    ], a: 0, e: "Mind guards shield the group from disconfirming information — a symptom under “pressures towards uniformity” (Janis, 1982)." },
    { q: "Which set lists ANTECEDENTS of groupthink identified by Janis?", o: [
      "High cohesiveness; insulated group; partisan leadership; external pressure and stress",
      "Low cohesiveness; procedural protocols; ideological diversity",
      "Devil's advocacy; parallel groups; anonymous idea writing",
      "Clear goals; expert knowledge; contingency planning"
    ], a: 0, e: "Antecedents: high cohesiveness, structural factors (insulation, partisan leadership, no procedural protocols, ideological homogeneity), and contextual factors (external pressure, stress, lack of optimism, low self-esteem)." },
    { q: "In the Asch line-judgment experiments, approximately what share of participants conformed at least once even when they knew the group was wrong?", o: [
      "About 75%",
      "About 32%",
      "About 99%",
      "About 10%"
    ], a: 0, e: "75% conformed at least once; average conformity was about 32% of trials; alone, people answered correctly over 99% of the time." },
    { q: "Which technique from the lecture directly combats anchoring and ego threat in group decisions?", o: [
      "Having members write down their ideas and publicize them anonymously before speaking",
      "Letting the most senior person speak first",
      "Keeping the same group composition for years",
      "Asking the leader to summarize the right answer up front"
    ], a: 0, e: "Anonymous, written idea generation before discussion prevents early speakers (or the leader) from anchoring others and protects egos." },
    { q: "A board member is assigned to argue forcefully against the merger the group favors, to test the reasoning. This practice is called…", o: [
      "playing devil's advocate",
      "mind guarding",
      "collective rationalization",
      "self-censorship"
    ], a: 0, e: "A credible devil's advocate is a recommended safeguard against groupthink; the other options are groupthink symptoms." }
  ],
  cases: [
    { title: "The Vanishing Customers of TeleNile",
      scenario: "TeleNile, a telecom operator, has lost 8% of subscribers in six months. The CEO assembles her five vice-presidents — a close-knit team proud of never disagreeing in public — and opens the meeting: “Clearly our prices are the problem. I've already asked finance to model a 15% price cut. Let's confirm and move.” The VPs nod. The strategy VP privately doubts pricing is the issue — exit surveys cite poor network coverage — but stays silent, not wanting to spoil the team's unity under pressure from the board. The marketing VP jokes that the competitor's customers are “sheep who'll regret leaving.” Within an hour, the cut is approved unanimously. No one asks what happens if it fails.",
      qs: [
        { q: "Diagnose the decision process using Janis's groupthink concept: define it and identify at least four symptoms present.", a: "Groupthink is “a mode of thinking that people engage in when they are deeply involved in a cohesive group, when the members' strivings for unanimity override their motivation to realistically appraise alternative courses of action” (Janis, 1982). Symptoms here: SELF-CENSORSHIP (the strategy VP withholds doubts); ILLUSION OF UNANIMITY (silence read as unanimous agreement); EXCESSIVE STEREOTYPING of outsiders (competitor's customers as “sheep”); PRESSURE TOWARD CONFORMITY (no public disagreement norm); and arguably COLLECTIVE RATIONALIZATION (price cut confirmed despite contrary exit-survey data). DM characteristics also show: limited consideration of options, undue attention to facts supporting the ingroup choice, and lack of contingency plans (“no one asks what happens if it fails”)." },
        { q: "Which antecedents of groupthink does TeleNile's executive team display?", a: "High cohesiveness (close-knit, proud of never disagreeing); structural factors — partisan leadership (the CEO states her preferred answer and starts implementing by asking finance to model the cut) and no procedural protocols; contextual factors — external pressure and stress from the board and the subscriber loss." },
        { q: "Where did the CEO violate the eight-step decision-making process?", a: "She skipped or compressed nearly all steps: the PROBLEM was assumed (“prices”) rather than identified from evidence (exit surveys point to coverage); no decision CRITERIA or WEIGHTS were set; no ALTERNATIVES were developed or analyzed (only one option modeled); selection happened by acclamation; and there is no plan to EVALUATE decision effectiveness. Signaling her preference up front and pre-starting implementation also biased the group — the lecture warns about executives who signal preferences by starting to “implement” the decision." },
        { q: "Recommend four concrete practices from the lecture to fix TeleNile's group decision process.", a: "(1) Have members write down ideas and publicize them anonymously before speaking, avoiding anchoring by the CEO. (2) Appoint a credible DEVIL'S ADVOCATE to argue against the favored option. (3) Create PARALLEL GROUPS to analyze different options in depth (e.g., price cut vs. network investment). (4) Draw out quiet members and dissuade the leader from doing most of the talking; avoid sharp status divisions. Introducing outsiders or refreshing the stale, always-agreeing group would also help." }
      ]},
    { title: "Programmed or Not? A Day at Hotel Mina",
      scenario: "At Hotel Mina, front-desk staff follow a six-step checklist whenever a guest reports a lost key card, and a written statement forbids giving room numbers to callers. The operations manual also offers a guideline: “Guest complaints should generally be resolved at the lowest possible level.” One morning, the general manager faces something different: a viral video shows a guest being rudely treated, bookings are collapsing, and the owners demand an immediate response. She has no precedent, incomplete information about what actually happened, and several vague goals — protect the brand, calm the owners, and be fair to the employee involved. She relies on her judgment, consults the best available evidence (the footage, social-media analytics, the employee's record), weighs the stakeholders' views, and considers the hotel's specific situation before crafting a custom response.",
      qs: [
        { q: "Classify the three front-desk instruments using the lecture's terms for programmed decisions.", a: "The six-step lost-key-card checklist is a PROCEDURE (a series of sequential steps used to respond to a well-structured problem). The ban on giving room numbers is a RULE (an explicit statement of what can or cannot be done). “Resolve complaints at the lowest possible level” is a POLICY (a guideline for making decisions, leaving room for interpretation)." },
        { q: "Is the viral-video crisis a structured or unstructured problem? Justify with at least four characteristics from the comparison table.", a: "Unstructured, requiring a NONPROGRAMMED decision: the problem is new/unusual (no precedent), information is ambiguous or incomplete, goals are vague (brand, owners, fairness), the time frame for a full solution is relatively long, it has risen to the upper managerial level (general manager/owners), and the solution relies on judgment and creativity — a custom-made response rather than procedures, rules, or policies." },
        { q: "Show how the GM's approach matches the four essentials of evidence-based management.", a: "(1) Decision maker's expertise and judgment — she relies on her managerial judgment. (2) External evidence evaluated by the decision maker — the footage and social-media analytics. (3) Opinions, preferences, and values of stakeholders — the owners' demands, the guest's experience, the employee's side. (4) Relevant organizational (internal) factors — the hotel's specific context, circumstances, and members. Together these define EBMgt: the systematic use of the best available evidence to improve management practice." },
        { q: "Why do organizations deliberately convert as many decisions as possible into programmed ones? Give two reasons grounded in the lecture.", a: "Programmed decisions handle structured problems efficiently: information is readily available, goals are clear, and the time frame is short — so routine matters are resolved quickly and consistently by lower levels through procedures, rules, and policies. This conserves scarce managerial judgment and creativity for unstructured, nonprogrammed problems at upper levels, and it reduces reliance on individual heuristics that can introduce errors and biases." }
      ]}
  ],
  essays: [
    { q: "“Managers are rational decision makers.” Critically discuss this statement using the assumptions of rationality, bounded rationality, satisficing, intuition, and the role of heuristics and biases.",
      outline: [
        "State the rationality assumptions: logical/objective; clear unambiguous problem; clear specific goal; all alternatives and consequences known; value-maximizing choice; organization's best interest",
        "Argue the assumptions rarely hold in practice",
        "Bounded rationality: rational but limited by ability to process information → satisficing (good-enough solutions)",
        "Intuition: decisions from experience, feelings, accumulated judgment (5 aspects in Exhibit 3-5) — common and not necessarily bad",
        "Heuristics: rules of thumb simplify but produce systematic errors/biases (give 3–4 examples: overconfidence, anchoring, sunk costs, confirmation, hindsight…)",
        "Balanced conclusion: managers are intendedly rational; EBMgt helps discipline judgment with evidence"
      ],
      model: "Rational decision making describes choices that are logical, consistent, and value-maximizing, and it rests on demanding assumptions: the decision maker is logical and objective; the problem is clear and unambiguous; there is a clear, specific goal; all alternatives and consequences are known; the maximizing alternative is chosen; and the decision serves the organization's best interest. In reality these assumptions rarely hold. Bounded rationality recognizes that managers are rational within the limits of their ability to process information: unable to analyze all information on all alternatives, they SATISFICE — they accept solutions that are “good enough” rather than maximal. Managers also decide intuitively, on the basis of experience, feelings, and accumulated judgment; Exhibit 3-5 shows intuition spans experience-based, affect-initiated, cognitive-based, values/ethics-based decisions and subconscious mental processing. To cope with complexity, managers use heuristics — rules of thumb that simplify information — but these generate systematic errors and biases: overconfidence, anchoring on initial figures, selective perception, confirmation of prior beliefs, framing effects, availability, representation, randomness errors, sunk-cost reasoning, self-serving attributions, immediate gratification, and hindsight. The statement is therefore best judged as half-true: managers are intendedly rational but cognitively bounded and bias-prone. Evidence-based management offers a corrective, combining the manager's expertise and judgment with evaluated external evidence, stakeholders' values, and organizational context so that judgment is disciplined by the best available evidence rather than by rules of thumb alone." },
    { q: "Explain why groups can make better decisions than individuals, why they sometimes make disastrous ones, and how managers can design the group decision process to get the benefits without the pathologies.",
      outline: [
        "Advantages: more complete information/knowledge; more perspectives/experiences; intellectual stimulation → higher-quality, fully informed decision; understanding of rationale → acceptance/buy-in and commitment → better implementation",
        "Downsides: domination by the loud; time consuming; conformity pressures; ambiguous responsibility; satisficing",
        "Group composition risks: politically loaded teams, dropouts, vested interests, executives planting “their person” or signaling preferences",
        "Groupthink (Janis): definition, antecedents (cohesiveness, structural, contextual), key symptoms, DM characteristics; Asch evidence on conformity/herd mentality",
        "Remedies: avoid status divisions; draw out quiet members; leader talks less; anonymous written ideas first; devil's advocate; parallel groups on different options; refresh stale groups; introduce outsiders"
      ],
      model: "Groups can outperform individuals because they pool more complete information and knowledge, bring a greater number of perspectives and different experiences, and generate intellectual stimulation through discussion — so the decision is more fully informed and of higher quality. Because participants understand the rationale, acceptance (buy-in) and commitment are higher, increasing the chance of successful implementation. Yet the same social forces can ruin decisions. Discussion can be dominated by loud members whose opinions are not the most valid; the process is time consuming; conformity pressures push members toward the majority view; responsibility becomes ambiguous; and groups often satisfice rather than optimize. Composition adds risk: teams may be loaded for political reasons, members drop out or attend with vested interests, and a senior executive may tilt the outcome by appointing “their person” or by signaling a preference and starting to implement it. At the extreme lies groupthink (Janis, 1982): in highly cohesive groups, striving for unanimity overrides realistic appraisal of alternatives. Its antecedents are high cohesiveness, structural faults (insulation, partisan leadership, no procedural protocols, ideological homogeneity), and contextual pressures (stress, external pressure). Its symptoms — illusion of invulnerability, moral superiority, collective rationalization, stereotyping of outsiders, self-censorship, conformity pressure, illusion of unanimity, and mind guards — produce limited options, ignored expertise, and no contingency plans. The Asch experiments show how strong conformity is: 75% of subjects denied the evidence of their own eyes at least once. Managers can engineer around these pathologies: avoid sharp status divisions, draw out quiet members, dissuade the leader from dominating, collect ideas in writing anonymously before discussion (defeating anchoring and ego threat), appoint a credible devil's advocate, run parallel groups analyzing different options in depth, refresh stale groups, and introduce outsiders. The goal is to keep the informational benefits of groups while deliberately disrupting the unanimity pressures that corrupt them." },
    { q: "Compare programmed and nonprogrammed decisions. Explain the types of problems each addresses, the tools managers use for each, and how the mix changes across managerial levels.",
      outline: [
        "Structured problems: straightforward, familiar, easily defined → programmed decisions: repetitive, routine approach",
        "Tools: procedure (sequential steps), rule (explicit can/cannot), policy (guideline)",
        "Unstructured problems: new/unusual, ambiguous or incomplete information → nonprogrammed decisions: unique, nonrecurring, custom-made solutions",
        "Comparison table dimensions: level (lower vs. upper), frequency, information availability, goal clarity, time frame, basis of solution (procedures/rules/policies vs. judgment and creativity)",
        "Level logic: lower managers face routine structured problems; upper managers face novel strategic ones; programmed routines free capacity for nonprogrammed judgment"
      ],
      model: "Decisions divide according to the problems they answer. Structured problems are straightforward, familiar, and easily defined; they call for programmed decisions — repetitive decisions handled by a routine approach. Managers program such decisions through three instruments: a procedure, the series of sequential steps used to respond to a well-structured problem; a rule, an explicit statement that tells managers what can or cannot be done; and a policy, a guideline for making decisions that leaves discretion in application. Unstructured problems, by contrast, are new or unusual with ambiguous or incomplete information; they require nonprogrammed decisions — unique, nonrecurring, custom-made solutions. The lecture's comparison shows the systematic differences: programmed decisions live at lower managerial levels, recur routinely, draw on readily available information, serve clear and specific goals, are resolved quickly, and rely on procedures, rules, and policies; nonprogrammed decisions concentrate at upper levels, are new and unusual, face ambiguous information and vague goals, take relatively long, and rely on judgment and creativity. The two categories are complementary in organizational design: by programming whatever is structured, organizations resolve routine matters consistently and cheaply at low levels, while reserving senior managers' limited attention — and their judgment and creativity — for the novel, consequential, unstructured problems that no checklist can anticipate." }
  ]
},
/* ---------------- WEEK 6 ---------------- */
{
  id: "w6",
  week: 6,
  title: "Organizational Structure",
  blurb: "The six elements of organizational design, mechanistic vs. organic, and structural types.",
  sections: [
    { h: "Elements of Organizational Design", blocks: [
      { t: "def", term: "Organizing", d: "Management function that involves arranging and structuring work to accomplish the organization's goals." },
      { t: "def", term: "Organizational structure", d: "The formal arrangement of jobs within an organization." },
      { t: "def", term: "Organizational chart", d: "The visual representation of an organization's structure." },
      { t: "def", term: "Organizational design", d: "Creating or changing an organization's structure." },
      { t: "list", title: "Purposes of organizing", items: [
        "Divides work to be done into specific jobs and departments",
        "Assigns tasks and responsibilities associated with individual jobs",
        "Coordinates diverse organizational tasks",
        "Clusters jobs into units",
        "Establishes relationships among individuals, groups, and departments; establishes formal lines of authority",
        "Allocates and deploys organizational resources"
      ]}
    ]},
    { h: "The Six Elements", blocks: [
      { t: "def", term: "1. Work specialization", d: "Dividing work activities into separate job tasks (also known as division of labor). The essence: divide a job into steps, each completed by a separate individual; it makes efficient use of the diversity of workers' skills. The economies/diseconomies exhibit shows productivity rises with specialization up to a point, then falls as human diseconomies (boredom, fatigue) outweigh the economies." },
      { t: "def", term: "2. Departmentalization", d: "The basis by which jobs are grouped together. Five forms: functional, geographical, product, process, and customer departmentalization." },
      { t: "def", term: "3. Chain of command, authority and responsibility", d: "Chain of command: the line of authority extending from upper organizational levels to the lowest levels, clarifying who reports to whom. LINE AUTHORITY entitles a manager to direct the work of an employee; STAFF AUTHORITY refers to positions created to support, assist, and advise those holding line authority. RESPONSIBILITY: the obligation or expectation to perform assigned duties. UNITY OF COMMAND: each person should report to only one manager." },
      { t: "def", term: "4. Span of control", d: "The number of employees a manager can efficiently and effectively manage. Traditional view: no more than 5–6. Contemporary view: there is no magic number. Exhibit: with 4,096 workers, a span of 4 requires 6 levels and about 1,365 managers; a span of 8 requires 4 levels and about 585 managers — wider spans mean flatter, cheaper structures." },
      { t: "def", term: "5. Centralization vs. decentralization", d: "Centralization: the degree to which decision making is concentrated at upper levels. Decentralization: the degree to which lower-level employees provide input or actually make decisions." },
      { t: "table", title: "When more centralization vs. more decentralization?", cols: ["More centralization", "More decentralization"], rows: [
        ["Environment is stable", "Environment is complex, uncertain"],
        ["Lower-level managers not as capable/experienced at decisions", "Lower-level managers are capable and experienced at making decisions"],
        ["Lower-level managers do not want a say", "Lower-level managers want a voice in decisions"],
        ["Decisions are relatively minor", "Decisions are significant"],
        ["Organization facing a crisis or risk of company failure", "Corporate culture is open to allowing managers a say"],
        ["Company is large", "Company is geographically dispersed"],
        ["Strategy implementation depends on managers retaining say", "Strategy implementation depends on managers' involvement and flexibility"]
      ]},
      { t: "def", term: "6. Formalization", d: "How standardized an organization's jobs are and the extent to which employee behavior is guided by rules and procedures. Traditional management favored high formalization; today's view gives employees more discretion." }
    ]},
    { h: "Mechanistic vs. Organic & Contingency Factors", blocks: [
      { t: "table", title: "Mechanistic vs. organic organizations", cols: ["Mechanistic", "Organic"], rows: [
        ["High specialization", "Cross-functional teams"],
        ["Rigid departmentalization", "Cross-hierarchical teams"],
        ["Clear chain of command", "Free flow of information"],
        ["Narrow spans of control", "Wide spans of control"],
        ["Centralization", "Decentralization"],
        ["High formalization", "Low formalization"]
      ]},
      { t: "list", title: "Contingency factors shaping structure", items: [
        "Strategy: structure should facilitate goal achievement — strategy and structure are closely linked; certain structural designs work best with different strategies",
        "Size: size affects structure, but past a certain size the effect weakens — at around 2,000 employees an organization is already fairly mechanistic; adding 500 more won't change much",
        "Environmental uncertainty: in stable and simple environments, mechanistic designs can be more effective; the greater the uncertainty, the more the organization needs the flexibility of an organic design"
      ]}
    ]},
    { h: "Organizational Designs", blocks: [
      { t: "table", title: "Traditional organizational designs: strengths & weaknesses", cols: ["Design", "Strengths", "Weaknesses"], rows: [
        ["Simple structure", "Fast; flexible; inexpensive to maintain; clear accountability", "Not appropriate as organization grows; reliance on one person is risky"],
        ["Functional structure", "Cost-saving advantages from specialization (economies of scale, minimal duplication of people and equipment); employees grouped with others having similar tasks", "Pursuit of functional goals can cause managers to lose sight of what's best for the overall organization; functional specialists become insulated with little understanding of what other units do"],
        ["Divisional structure", "Focuses on results — division managers responsible for what happens to their products and services", "Duplication of activities and resources increases costs and reduces efficiency"]
      ]},
      { t: "def", term: "Matrix structure", d: "An organizational structure that assigns specialists from different functional departments to work on one or more projects." },
      { t: "def", term: "Project structure", d: "An organizational structure in which employees continuously work on projects." }
    ]}
  ],
  mcqs: [
    { q: "The formal arrangement of jobs within an organization is its…", o: [
      "organizational structure",
      "organizational chart",
      "organizational design",
      "organizational culture"
    ], a: 0, e: "Structure = the formal arrangement of jobs; the chart is its visual representation; design is creating or changing the structure." },
    { q: "Dividing work activities into separate job tasks is called…", o: [
      "work specialization",
      "departmentalization",
      "formalization",
      "decentralization"
    ], a: 0, e: "Work specialization (division of labor) divides a job into steps each completed by a separate individual." },
    { q: "According to the economies/diseconomies exhibit, what happens at very HIGH levels of work specialization?", o: [
      "Productivity falls as human diseconomies outweigh the economies of specialization",
      "Productivity keeps rising without limit",
      "Productivity is unaffected by specialization",
      "Managers' spans of control automatically widen"
    ], a: 0, e: "Productivity rises with specialization up to a point, after which human diseconomies (e.g., boredom, fatigue) exceed the economic advantages." },
    { q: "A bank groups jobs into retail clients, corporate clients, and government clients. Which form of departmentalization is this?", o: [
      "Customer departmentalization",
      "Functional departmentalization",
      "Process departmentalization",
      "Geographical departmentalization"
    ], a: 0, e: "Grouping by the type of customer served is customer departmentalization — one of the five forms (functional, geographical, product, process, customer)." },
    { q: "The line of authority extending from upper organizational levels to the lowest levels, clarifying who reports to whom, is the…", o: [
      "chain of command",
      "span of control",
      "formalization",
      "matrix structure"
    ], a: 0, e: "That is the chain of command." },
    { q: "Positions created to support, assist, and advise those holding line authority have…", o: [
      "staff authority",
      "line authority",
      "unity of command",
      "responsibility without authority"
    ], a: 0, e: "Staff authority supports and advises; line authority entitles a manager to direct an employee's work." },
    { q: "The principle that each person should report to only one manager is…", o: [
      "unity of command",
      "scalar chain",
      "span of control",
      "centralization"
    ], a: 0, e: "Unity of command = one manager per person — first met among Fayol's principles and repeated in structural design." },
    { q: "In the span-of-control exhibit with 4,096 employees, moving from a span of 4 to a span of 8…", o: [
      "cuts the number of managers from about 1,365 to about 585 and removes organizational levels",
      "increases the number of managers needed",
      "has no effect on the number of levels",
      "requires more centralization by definition"
    ], a: 0, e: "Span of 4 → 6 levels, ≈1,365 managers; span of 8 → 4 levels, ≈585 managers. Wider spans flatten the structure and cut managerial costs." },
    { q: "Decentralization is the degree to which…", o: [
      "lower-level employees provide input or actually make decisions",
      "decision making is concentrated at upper levels",
      "jobs are standardized and rule-guided",
      "specialists from different departments work on projects"
    ], a: 0, e: "Decentralization pushes decisions down; centralization concentrates them at upper levels." },
    { q: "Which situation favors MORE centralization?", o: [
      "The organization is facing a crisis or the risk of company failure",
      "The environment is complex and uncertain",
      "Lower-level managers are capable and want a voice",
      "The company is geographically dispersed"
    ], a: 0, e: "Crisis/risk of failure, stable environments, minor decisions, and less capable lower-level managers favor centralization; the other options favor decentralization." },
    { q: "How standardized an organization's jobs are and the extent to which employee behavior is guided by rules and procedures is…", o: [
      "formalization",
      "specialization",
      "departmentalization",
      "responsibility"
    ], a: 0, e: "That's formalization. Traditional management favored high formalization; today's view gives more discretion." },
    { q: "Which characteristics describe a MECHANISTIC organization?", o: [
      "High specialization, rigid departmentalization, narrow spans, centralization, high formalization",
      "Cross-functional teams, free information flow, wide spans, decentralization",
      "Low formalization and cross-hierarchical teams",
      "Project-based work with no permanent departments"
    ], a: 0, e: "Mechanistic = high specialization, rigid departmentalization, clear chain of command, narrow spans, centralization, high formalization. The organic model is the opposite." },
    { q: "According to the lecture, the greater the environmental uncertainty…", o: [
      "the more an organization needs the flexibility of an organic design",
      "the more mechanistic the structure should become",
      "the less structure matters",
      "the narrower spans of control should be"
    ], a: 0, e: "Stable/simple environments suit mechanistic designs; high uncertainty demands organic flexibility." },
    { q: "A key WEAKNESS of the divisional structure is…", o: [
      "duplication of activities and resources, increasing costs and reducing efficiency",
      "unclear accountability for results",
      "too much dependence on one person",
      "employees grouped with others who have similar tasks"
    ], a: 0, e: "Divisions duplicate functions (each has its own marketing, HR…), raising costs. Its strength is a focus on results — division managers own their products/services." },
    { q: "A firm assigns engineers, marketers, and finance specialists from their departments to work temporarily on one or more projects. This is a…", o: [
      "matrix structure",
      "simple structure",
      "functional structure",
      "divisional structure"
    ], a: 0, e: "The matrix structure assigns specialists from different functional departments to projects; in a project structure employees work continuously on projects." }
  ],
  cases: [
    { title: "Zeytouna Foods Outgrows Its Founder",
      scenario: "Zeytouna Foods began as a 10-person startup where founder Samir made every decision, there were almost no written rules, and everyone did a bit of everything. Five years later it has 2,300 employees across three product lines (dairy, snacks, beverages) and operations in four countries. Samir still insists on approving every hire and every discount, decisions take weeks, and managers complain they have “responsibility without any say.” A consultant notes that each product line now duplicates its own marketing and HR teams, but division managers do know exactly which results they own. The environment — food retail — has been stable and predictable for years.",
      qs: [
        { q: "Describe Zeytouna's original design and explain why it no longer works.", a: "It was a SIMPLE STRUCTURE — fast, flexible, inexpensive, with clear accountability, low formalization and centralized decision making in the founder. Its textbook weaknesses have materialized: it is not appropriate as the organization grows, and reliance on one person (Samir) is risky — hence weeks-long decisions and overloaded approval flows at 2,300 employees." },
        { q: "Diagnose the centralization problem and argue, with at least three factors from the lecture's table, whether Zeytouna should decentralize.", a: "Decision making is highly CENTRALIZED (concentrated in Samir). The decentralization factors apply: the company is geographically dispersed (four countries); lower-level managers are capable and WANT a voice (they complain of responsibility without say); decisions are significant for each division; and effective strategy implementation depends on managers having involvement and flexibility. (The stable environment alone would tolerate centralization, but the other factors dominate.) Zeytouna should decentralize substantially." },
        { q: "The consultant observes duplication of marketing and HR across product lines but clear ownership of results. Which organizational design does Zeytouna have de facto, and what are its lecture-listed strengths and weaknesses?", a: "A DIVISIONAL STRUCTURE organized by product. Strength: it focuses on results — division managers are responsible for what happens to their products and services. Weakness: duplication of activities and resources (each division has its own marketing/HR), which increases costs and reduces efficiency." },
        { q: "Given a stable, predictable environment and 2,300 employees, should Zeytouna's new structure lean mechanistic or organic? Use the contingency factors.", a: "Lean MECHANISTIC: in stable and simple environments mechanistic designs can be more effective, and size matters — by around 2,000 employees an organization is already fairly mechanistic. So Zeytouna should adopt clearer chains of command, more formalization and specialization than its startup days — while decentralizing decision authority to capable division managers (centralization is a separate element from the mechanistic/organic choice along which it can adjust)." }
      ]},
    { title: "One Project, Two Bosses at Dalil Tech",
      scenario: "Dalil Tech, a software company organized into functional departments (engineering, design, marketing, finance), wins a one-year contract to build a smart-city platform. The CEO pulls specialists from each department into a project team led by a project manager, while each specialist continues reporting to their functional head too. Within weeks, designer Lina receives conflicting instructions: her design head wants brand consistency, while the project manager wants speed. Meanwhile the engineering head boasts that his department's costs are the lowest in years, even though the platform is behind schedule — “not my problem, the project isn't engineering.”",
      qs: [
        { q: "Name Dalil's two structures (permanent and temporary) using the lecture's terms.", a: "The permanent backbone is a FUNCTIONAL STRUCTURE (jobs grouped by function: engineering, design, marketing, finance). The temporary overlay is a MATRIX STRUCTURE — specialists from different functional departments assigned to work on one or more projects, under a project manager while retaining their functional reporting line." },
        { q: "Which classic structural principle does Lina's situation violate, and why does the matrix inherently strain it?", a: "UNITY OF COMMAND — each person should report to only one manager. In a matrix, specialists answer simultaneously to a functional head and a project manager, so conflicting instructions (brand consistency vs. speed) are a built-in risk of the design." },
        { q: "The engineering head's attitude illustrates which textbook weakness of the functional structure?", a: "The pursuit of functional goals can cause managers to lose sight of what's best for the overall organization; functional specialists become insulated and have little understanding of what other units are doing — he optimizes departmental costs while the company's project slips." },
        { q: "If smart-city projects become Dalil's permanent business, what design should it consider, and how does it differ from the matrix?", a: "A PROJECT STRUCTURE — an organizational structure in which employees continuously work on projects. Unlike the matrix, employees are not lent from functional departments while keeping two bosses; project work becomes the ongoing way of organizing." }
      ]}
  ],
  essays: [
    { q: "Describe the six elements of organizational design, defining each and explaining the key managerial choice it involves.",
      outline: [
        "Work specialization: divide activities into separate tasks; economies vs. human diseconomies",
        "Departmentalization: basis for grouping jobs — functional, geographical, product, process, customer",
        "Chain of command (with authority — line vs. staff; responsibility; unity of command): who reports to whom",
        "Span of control: how many employees per manager; traditional 5–6 vs. contemporary no-magic-number; flatter vs. taller (4,096-employee example)",
        "Centralization vs. decentralization: where decisions are made; situational factors table",
        "Formalization: standardization and rule-guidedness of jobs; traditional high vs. today's discretion",
        "Conclude: choices combine into mechanistic vs. organic profiles"
      ],
      model: "Organizational design involves six elements. First, work specialization — dividing work activities into separate job tasks (division of labor); it exploits workers' diverse skills, but the exhibit shows productivity gains flatten and reverse when human diseconomies such as boredom and fatigue exceed the economies. Second, departmentalization — the basis by which jobs are grouped — with five forms: functional, geographical, product, process, and customer; managers choose the grouping that best fits how value is created. Third, the chain of command — the line of authority from upper levels to the lowest, clarifying who reports to whom — along with authority (line authority directs the work of employees, staff authority supports and advises), responsibility (the obligation to perform assigned duties), and unity of command (each person reports to only one manager). Fourth, the span of control — the number of employees a manager can efficiently and effectively manage; the traditional view capped it at five or six, while the contemporary view holds there is no magic number; the 4,096-employee example shows a span of 8 instead of 4 eliminates two levels and nearly 800 managers, so wider spans flatten and cheapen structures. Fifth, centralization versus decentralization — whether decision making is concentrated at upper levels or pushed down to lower-level employees; stable environments, minor decisions, and crisis favor centralization, while complex environments, capable and willing lower-level managers, significant decisions, and geographic dispersion favor decentralization. Sixth, formalization — how standardized jobs are and how far rules and procedures guide behavior; traditional management favored high formalization, but today's view allows more discretion. Together, the six choices produce the overall character of the structure — mechanistic when specialization, rigidity, narrow spans, centralization, and formalization are high; organic when the opposite holds." },
    { q: "Compare mechanistic and organic organizations, and explain how strategy, size, and environmental uncertainty determine which is appropriate.",
      outline: [
        "Mechanistic profile: high specialization, rigid departmentalization, clear chain of command, narrow spans, centralization, high formalization",
        "Organic profile: cross-functional and cross-hierarchical teams, free flow of information, wide spans, decentralization, low formalization",
        "Strategy: structure should facilitate goal achievement; strategy and structure closely linked; designs work best with matching strategies",
        "Size: larger → more mechanistic, but effect plateaus (~2,000 employees example)",
        "Environment: stable/simple → mechanistic effective; greater uncertainty → organic flexibility needed",
        "Conclusion: contingency logic — no universally best structure"
      ],
      model: "The mechanistic organization is the natural endpoint of tight design choices: high specialization, rigid departmentalization, a clear chain of command, narrow spans of control, centralization, and high formalization. The organic organization is its mirror image: cross-functional and cross-hierarchical teams, a free flow of information, wide spans of control, decentralization, and low formalization. Neither is inherently superior; three contingency factors decide. Strategy comes first: a structure should facilitate goal achievement, and because goals flow from strategy, strategy and structure are closely linked — research shows certain structural designs work best with particular organizational strategies, so a change in strategy typically demands a change in structure. Size matters next: larger organizations tend to be more mechanistic, but the relationship weakens past a threshold — at around 2,000 employees an organization is already fairly mechanistic, and adding another 500 employees will not change it much. Environmental uncertainty completes the picture: in stable and simple environments mechanistic designs can be more effective, while the greater the uncertainty, the more the organization needs the flexibility of an organic design — echoing Week 3's uncertainty matrix. The overall lesson is contingency thinking: managers should read their strategy, size, and environment and choose the structural profile that fits, rather than seeking one best structure for all situations." },
    { q: "Discuss the advantages and limitations of the three traditional organizational designs (simple, functional, divisional), and explain when a matrix or project structure becomes attractive.",
      outline: [
        "Simple: strengths — fast, flexible, inexpensive, clear accountability; weaknesses — inappropriate as organization grows; risky reliance on one person",
        "Functional: strengths — cost savings from specialization, economies of scale, minimal duplication, similar-task grouping; weaknesses — functional goal pursuit loses sight of the whole; insulated specialists",
        "Divisional: strengths — focus on results, division managers own products/services; weaknesses — duplication of activities and resources, higher costs, lower efficiency",
        "Matrix: specialists from functional departments assigned to projects (dual reporting); attractive for temporary, cross-functional work",
        "Project structure: employees continuously work on projects — for organizations whose work is ongoing projects",
        "Fit logic: growth pushes from simple → functional/divisional; dynamic project-based work pushes toward matrix/project"
      ],
      model: "The simple structure suits young, small organizations: it is fast, flexible, and inexpensive to maintain, with clear accountability concentrated near the owner-manager. Its weaknesses surface with success — it is not appropriate as the organization grows, and reliance on one person is risky. The functional structure groups similar specialties together and earns cost-saving advantages from specialization: economies of scale, minimal duplication of people and equipment, and employees grouped with others holding similar tasks. Its limitation is parochialism — the pursuit of functional goals can cause managers to lose sight of what is best for the overall organization, and functional specialists become insulated, understanding little of what other units do. The divisional structure organizes around products, services, or markets; its strength is a focus on results, since division managers are responsible for what happens to their products and services, but it duplicates activities and resources across divisions, increasing costs and reducing efficiency. When work is temporary and cross-functional, the matrix structure becomes attractive: specialists from different functional departments are assigned to one or more projects, gaining flexibility at the price of dual reporting lines that strain unity of command. When project work is not the exception but the business itself, the project structure — in which employees continuously work on projects — removes the dual hierarchy altogether. The progression reflects contingency logic: growth outgrows the simple structure, stable efficiency favors functional forms, diversified results-accountability favors divisions, and dynamic, cross-disciplinary work favors matrix and project designs." }
  ]
},
/* ---------------- WEEK 8 ---------------- */
{
  id: "w8",
  week: 8,
  title: "Managing Human Resources",
  blurb: "The HRM process: planning, hiring, developing, and retaining competent employees.",
  sections: [
    { h: "The HRM Process", blocks: [
      { t: "p", text: "To ensure the organization has qualified people to perform all the work, eight HRM activities are split into three major groups: (1) ensuring that competent employees are identified and selected — HR planning, recruitment (and decruitment), selection; (2) providing employees with up-to-date knowledge and skills — orientation, training; (3) ensuring that the organization retains competent and high-performing employees — performance management, compensation and benefits, career development. The whole process operates within the external environment." }
    ]},
    { h: "Identifying and Selecting Competent Employees", blocks: [
      { t: "def", term: "Human resource planning", d: "Ensuring that the organization has the right number and kinds of capable people in the right places and at the right times. Two steps: assessing current human resources, and meeting future HR needs (determined by the organization's mission, goals, and strategies)." },
      { t: "def", term: "Job analysis", d: "An assessment that defines jobs and the behaviors necessary to perform them." },
      { t: "def", term: "Job description (position description)", d: "A written statement that describes a job." },
      { t: "def", term: "Job specifications", d: "A written statement of the minimum qualifications a person must possess to perform a given job successfully." },
      { t: "def", term: "Recruitment", d: "Locating, identifying, and attracting capable applicants." },
      { t: "def", term: "Decruitment", d: "Reducing an organization's workforce." },
      { t: "def", term: "Selection", d: "Screening job applicants to ensure that the most appropriate candidates are hired. Selection is about PREDICTING which applicants will be successful if hired; it succeeds when you hire someone who turns out to be a good employee, or reject someone who would have been a bad one." },
      { t: "def", term: "Validity (of a selection device)", d: "A proven relationship between the selection device and some relevant criterion." },
      { t: "def", term: "Reliability (of a selection device)", d: "The device measures the same thing consistently." }
    ]},
    { h: "Providing Skills and Knowledge", blocks: [
      { t: "def", term: "Orientation", d: "Introducing a new employee to his or her job and the organization. WORK UNIT orientation familiarizes the employee with the goals of the work unit and their specific job; ORGANIZATION orientation informs them about the company's goals, history, philosophy, procedures, and rules." },
      { t: "list", title: "Types of training", items: [
        "Onboarding or new hire", "Interpersonal skills", "Profession or industry-specific", "Executive development", "Management or supervisory", "Information technology or systems", "Customer service", "Mandatory compliance (e.g., cybersecurity, sexual harassment)"
      ]},
      { t: "def", term: "Employee development", d: "Whereas training focuses on skills for your CURRENT job, development activities prepare you for your FUTURE roles within the company. Example: Microsoft provides a range of development activities (Exhibit 11-10)." }
    ]},
    { h: "Retaining Competent, High-Performing Employees", blocks: [
      { t: "def", term: "Performance appraisal/evaluation", d: "The practice of providing job feedback to an employee that may be used to improve performance and for compensation and promotion decisions. Many companies find the ANNUAL review not timely enough; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance." },
      { t: "def", term: "Electronic performance monitoring", d: "The use of electronic instruments to collect, store, analyze, and report individual or group performance. Widely used in call centers, where supervisors track workflow in real time — metrics like average call handling time, total calls handled, and time on breaks." },
      { t: "def", term: "Skill-based pay", d: "A pay system that rewards employees for the job skills they can demonstrate." },
      { t: "def", term: "Variable pay", d: "A pay system in which an individual's compensation is contingent on performance." },
      { t: "p", text: "What determines pay and benefits: factors include the employee's tenure and performance, the kind of job performed, the kind of business/industry, the size of the company, whether the business is labor or capital intensive, management's philosophy toward pay, geographic location, company profitability, and unionization. Other pay debates: bonuses vs. annual pay raises; pay secrecy vs. transparency; benefit options." }
    ]}
  ],
  mcqs: [
    { q: "The three major groups of the eight HRM activities are…", o: [
      "identify and select competent employees; provide up-to-date knowledge and skills; retain competent, high-performing employees",
      "plan, organize, and control the workforce",
      "recruit, pay, and promote employees",
      "hire, monitor, and dismiss employees"
    ], a: 0, e: "The HRM process: (1) identify/select competent employees, (2) provide up-to-date skills and knowledge, (3) retain competent and high performers." },
    { q: "Ensuring the organization has the right number and kinds of capable people in the right places at the right times is…", o: [
      "human resource planning",
      "recruitment",
      "selection",
      "orientation"
    ], a: 0, e: "That's the definition of HR planning, done by assessing current HR and meeting future needs (driven by mission, goals, strategies)." },
    { q: "A written statement of the MINIMUM qualifications a person must possess to perform a job successfully is the…", o: [
      "job specification",
      "job description",
      "job analysis",
      "job evaluation"
    ], a: 0, e: "Job specifications list minimum qualifications of the PERSON; the job description describes the JOB; job analysis is the assessment that defines jobs and required behaviors." },
    { q: "Decruitment is…", o: [
      "reducing an organization's workforce",
      "rejecting unqualified applicants",
      "demoting poor performers",
      "freezing salaries during a crisis"
    ], a: 0, e: "Decruitment = reducing the workforce; recruitment = locating, identifying, and attracting capable applicants." },
    { q: "Selection is fundamentally an exercise in…", o: [
      "predicting which applicants will be successful if hired",
      "minimizing the cost of hiring",
      "training employees for future roles",
      "verifying compliance with labor law"
    ], a: 0, e: "Selection screens applicants to hire the most appropriate ones — it succeeds when it accurately predicts good performers (and screens out bad ones)." },
    { q: "A hiring test gives the same applicant very different scores from one week to the next. The test lacks…", o: [
      "reliability",
      "validity",
      "specificity",
      "formalization"
    ], a: 0, e: "Reliability = measuring the same thing consistently. (Validity = a proven relationship between the device and a relevant criterion.)" },
    { q: "A company proves that scores on its coding test strongly predict programmers' later job performance. The test demonstrates…", o: [
      "validity",
      "reliability",
      "transparency",
      "equity"
    ], a: 0, e: "A proven relationship between the selection device and a relevant criterion (job performance) is validity." },
    { q: "Orientation that informs new employees about the company's goals, history, philosophy, procedures, and rules is…", o: [
      "organization orientation",
      "work unit orientation",
      "compliance training",
      "executive development"
    ], a: 0, e: "Organization orientation covers the company as a whole; work unit orientation covers the unit's goals and the specific job." },
    { q: "The key difference between training and employee development is that…", o: [
      "training focuses on skills for the current job, while development prepares employees for future roles",
      "training is for managers, development for workers",
      "training is informal, development is formal",
      "there is no difference"
    ], a: 0, e: "Training = current job skills; development = preparation for future roles (e.g., Microsoft's range of development activities, Exhibit 11-10)." },
    { q: "Why are many companies moving away from the traditional ANNUAL performance review?", o: [
      "It is not timely enough to make an impact; immediate feedback and smaller steps lead more quickly to better performance",
      "Annual reviews are illegal in most countries",
      "Employees prefer no feedback at all",
      "Appraisals cannot be used for compensation decisions"
    ], a: 0, e: "The lecture notes annual reviews aren't timely; immediate feedback with smaller improvement steps is more realistic and effective." },
    { q: "Electronic performance monitoring is defined as…", o: [
      "the use of electronic instruments to collect, store, analyze, and report individual or group performance",
      "video surveillance of the workplace for security",
      "a pay system contingent on performance",
      "software that blocks social media at work"
    ], a: 0, e: "EPM collects/stores/analyzes/reports performance electronically — e.g., call centers tracking average call handling time, calls handled, and break time in real time." },
    { q: "A pay system that rewards employees for the job skills they can demonstrate is…", o: [
      "skill-based pay",
      "variable pay",
      "seniority pay",
      "profit sharing"
    ], a: 0, e: "Skill-based pay rewards demonstrable skills; variable pay makes compensation contingent on performance." },
    { q: "Which of the following is among the factors that determine pay and benefits?", o: [
      "Whether the business is labor or capital intensive",
      "The employee's astrological sign",
      "The number of social media followers the firm has",
      "The brand of HR software used"
    ], a: 0, e: "Pay determinants include tenure and performance, kind of job, kind of business/industry, company size, labor vs. capital intensity, management's pay philosophy, location, profitability, and unionization." },
    { q: "An organization's future HR needs are determined by…", o: [
      "its mission, goals, and strategies",
      "last year's headcount only",
      "the unemployment rate alone",
      "the CEO's preferences"
    ], a: 0, e: "Meeting future HR needs flows from the organization's mission, goals, and strategies — linking HRM to strategy (Week 4)." }
  ],
  cases: [
    { title: "Staffing the New Tripoli Plant",
      scenario: "Mashrek Beverages is opening a bottling plant in Tripoli and must hire 120 operators and 8 supervisors in four months. HR director Hala starts by studying what the operator job actually involves and the behaviors needed to do it well, then writes a one-page summary of the job's duties and another listing the minimum qualifications. To attract applicants she posts ads, attends job fairs, and launches an employee-referral bonus. Her screening plan includes a dexterity test a vendor claims is “scientifically sound”; in a pilot, the same applicants scored wildly differently when retested a week later. Meanwhile, headquarters announces it must cut 40 administrative jobs in Beirut.",
      qs: [
        { q: "Name, in order, the three HRM-process activities of the first group (“identify and select competent employees”) appearing in this case, with evidence.", a: "(1) Human resource planning — determining the plant needs the right number and kinds of people (120 operators, 8 supervisors) at the right place and time; (2) Recruitment — locating, identifying, and attracting capable applicants via ads, job fairs, and referrals; (3) Selection — screening applicants (the dexterity test) to hire the most appropriate candidates. The Beirut cuts are DECRUITMENT — reducing the workforce." },
        { q: "Match Hala's three documents/activities to job analysis, job description, and job specifications.", a: "Studying what the job involves and the behaviors needed = JOB ANALYSIS (an assessment that defines jobs and the behaviors necessary to perform them). The one-page summary of duties = JOB DESCRIPTION (a written statement describing the job). The list of minimum qualifications = JOB SPECIFICATIONS (a written statement of the minimum qualifications a person must possess to perform the job successfully)." },
        { q: "Evaluate the dexterity test on the two criteria a selection device must meet. What does the pilot show, and what would Hala still need to verify?", a: "RELIABILITY — measuring the same thing consistently — is violated: the same applicants scored very differently a week apart, so the test fails this criterion. VALIDITY — a proven relationship between the selection device and a relevant criterion (e.g., later operator performance) — remains unproven: the vendor's claim is not evidence. An unreliable test cannot be a sound predictor, and selection is fundamentally about predicting who will be a successful employee." },
        { q: "Once the 128 hires start, what two HRM activities from the second group should Hala plan, and what does each cover?", a: "ORIENTATION — work unit orientation (the unit's goals and the specific job) and organization orientation (company goals, history, philosophy, procedures, rules) — and TRAINING — e.g., profession/industry-specific and mandatory compliance training (such as safety/cybersecurity), giving employees up-to-date knowledge and skills." }
      ]},
    { title: "The Call Center That Measured Everything",
      scenario: "Aswat Telecom's call center tracks every agent in real time: average call handling time, total calls handled, and minutes on break appear on supervisors' dashboards and a public leaderboard. Top scorers get monthly bonuses on top of base salary; agents who master additional service lines earn a certified-skill premium. Yet annual engagement surveys keep worsening: agents say feedback arrives once a year at appraisal time, when bonuses and promotions are decided, long after problems occurred. Two agents quit, telling HR they only learned of managers' dissatisfaction months too late to fix anything.",
      qs: [
        { q: "Identify the monitoring practice and the two pay systems in this case, using the lecture's exact terms.", a: "ELECTRONIC PERFORMANCE MONITORING — electronic instruments collecting, storing, analyzing, and reporting performance (the classic call-center metrics: average call handling time, calls handled, break time). The monthly bonus contingent on performance is VARIABLE PAY; the certified-skill premium for mastering additional lines is SKILL-BASED PAY." },
        { q: "What appraisal problem does Aswat illustrate, and what does the lecture recommend instead?", a: "Relying on the ANNUAL performance review: the lecture notes many companies have learned the annual process is not timely enough to make an impact. Agents learn of dissatisfaction months later — exactly the failure mode. The recommendation: immediate feedback and smaller steps toward improvement, which are more realistic and lead more quickly to better performance." },
        { q: "Performance appraisal serves more than one purpose. Which purposes appear in this case, and why does their combination create tension?", a: "Appraisal provides job feedback to improve performance AND feeds compensation and promotion decisions. At Aswat both are bundled into one annual event, so the developmental purpose (timely improvement feedback) is crowded out by the administrative one (deciding bonuses/promotions) — employees hear about problems only when money is at stake, too late to fix anything." },
        { q: "Using the pay-determinant factors, give three reasons Aswat's agent pay might legitimately differ from pay at another company.", a: "Pay and benefits depend on factors such as: the kind of job performed (routine service work), the kind of business/industry (telecom services), company size, whether the business is labor or capital intensive (call centers are labor intensive), management's philosophy toward pay, geographic location, company profitability, the employee's tenure and performance, and unionization. Any three justify cross-company differences." }
      ]}
  ],
  essays: [
    { q: "Describe the human resource management process. Identify its three major groups of activities and the eight activities, and explain how the process connects to the organization's strategy and external environment.",
      outline: [
        "Purpose: ensure the organization has qualified people to perform all the work",
        "Group 1 — identify & select competent employees: HR planning, recruitment/decruitment, selection",
        "Group 2 — provide up-to-date knowledge and skills: orientation, training",
        "Group 3 — retain competent high performers: performance management, compensation & benefits, career development",
        "Strategy link: future HR needs are determined by mission, goals, and strategies",
        "Environment: the whole process sits within the external environment (labor markets, laws, etc.)"
      ],
      model: "The HRM process exists to ensure an organization has qualified people to perform all the work, through eight activities in three major groups. The first group identifies and selects competent employees: human resource planning ensures the right number and kinds of capable people in the right places at the right times (by assessing current human resources and meeting future needs); recruitment locates, identifies, and attracts capable applicants — or, when the workforce must shrink, decruitment reduces it; and selection screens applicants so the most appropriate candidates are hired, using devices that must be valid and reliable. The second group provides employees with up-to-date knowledge and skills: orientation introduces the new employee to the job and the organization (work unit and organization orientation), and training builds capability across types ranging from onboarding and interpersonal skills to industry-specific, IT, customer service, and mandatory compliance training; employee development extends this by preparing people for future roles rather than the current job. The third group retains competent, high-performing employees: performance management provides feedback used for improvement and for compensation and promotion decisions; compensation and benefits (including skill-based and variable pay) reward contribution; and career development supports progression. The process is not freestanding: future HR needs are determined by the organization's mission, goals, and strategies, so HRM implements strategy through people, and the entire process operates within the external environment, which shapes labor supply, expectations, and legal constraints." },
    { q: "“An unreliable selection test is useless, but a reliable test can still be useless.” Explain this statement using the concepts of validity and reliability, and discuss why selection should be understood as prediction.",
      outline: [
        "Define selection: screening applicants to hire the most appropriate candidates; success = hiring those who become good employees / rejecting would-be bad ones",
        "Selection as prediction: forecasting future job success from present indicators",
        "Reliability: device measures the same thing consistently; unreliable scores are noise → useless",
        "Validity: proven relationship between the device and a relevant criterion (job performance)",
        "A reliable test may consistently measure something irrelevant → reliable but invalid → still useless",
        "Implication: organizations must evidence both properties before using a device"
      ],
      model: "Selection means screening job applicants to ensure the most appropriate candidates are hired, and the lecture frames it as prediction: a selection decision succeeds when you hire an applicant who turns out to be a good employee or reject one who would have been a bad one. Prediction imposes two technical requirements on any selection device. Reliability asks whether the device measures the same thing consistently: if the same applicant scores very differently on different occasions, the scores are noise, and nothing can be predicted from noise — hence an unreliable test is useless. Validity asks whether there is a proven relationship between the selection device and some relevant criterion, typically success on the job. Reliability alone does not guarantee this: a test can yield perfectly stable scores while measuring something irrelevant to performance — consistently measuring the wrong thing. Such a test is reliable but invalid, and therefore equally useless for prediction (and potentially harmful, since it systematically screens on an irrelevant attribute). The statement is thus correct: reliability is necessary but not sufficient, and validity is the decisive property — but validity itself presupposes reliability, since an unstable measure cannot maintain a proven relationship with any criterion. The practical lesson is that organizations should demand evidence of both properties — not vendor claims — before letting a device decide who joins the workforce." },
    { q: "Discuss how organizations can retain competent, high-performing employees. Cover performance feedback (including the shift away from annual reviews and the rise of electronic performance monitoring) and compensation design (skill-based pay, variable pay, and the factors that determine pay).",
      outline: [
        "Retention is the third HRM group: performance management, compensation & benefits, career development",
        "Performance appraisal: feedback for improvement + input to compensation/promotion",
        "Annual review problem: not timely; immediate feedback and smaller steps work faster",
        "Electronic performance monitoring: definition; call-center example (handling time, calls, breaks); enables real-time feedback but changes the feel of supervision",
        "Compensation: skill-based pay (rewards demonstrable skills) and variable pay (contingent on performance)",
        "Pay determinants: tenure/performance, kind of job, industry, size, labor vs. capital intensity, management philosophy, location, profitability, unionization; debates — bonuses vs. raises, pay secrecy vs. transparency, benefit options",
        "Development: preparing for future roles (e.g., Microsoft's activities) supports retention"
      ],
      model: "Retaining competent, high-performing employees is the third group of HRM activities, built on performance management, compensation and benefits, and career development. Performance appraisal provides job feedback that can improve performance and inform compensation and promotion decisions — but many companies have learned that the annual review is not timely enough to make an impact; immediate feedback and smaller steps toward improvement are more realistic and lead more quickly to better performance. Technology now makes such immediacy possible: electronic performance monitoring uses electronic instruments to collect, store, analyze, and report individual or group performance — in call centers, supervisors track workflow in real time through metrics like average call handling time, total calls handled, and time on breaks. Continuous data can feed continuous feedback, though it also intensifies supervision, so organizations must use it to develop rather than merely to police. On the reward side, pay can be designed to retain and motivate: skill-based pay rewards employees for the job skills they can demonstrate, encouraging versatility, while variable pay makes compensation contingent on performance, tying rewards to contribution. What people are paid reflects many factors — the employee's tenure and performance, the kind of job and industry, company size and profitability, whether the business is labor or capital intensive, management's philosophy toward pay, geographic location, and unionization — and organizations face live design debates between bonuses and annual raises, pay secrecy and transparency, and the right menu of benefit options. Finally, development activities that prepare employees for future roles (as in Microsoft's portfolio of development programs) give high performers a reason to build their future inside the organization rather than outside it." }
  ]
},
/* ---------------- WEEK 9 ---------------- */
{
  id: "w9",
  week: 9,
  title: "Change Management",
  blurb: "Types of change, why people resist, and the models for leading change.",
  sections: [
    { h: "The Case for Change", blocks: [
      { t: "def", term: "Organizational change", d: "Any alteration of people, structure, or technology in an organization." },
      { t: "def", term: "Change agent", d: "Someone who acts as a catalyst and assumes the responsibility for managing the change process." },
      { t: "def", term: "VUCA", d: "Volatility, Uncertainty, Complexity, and Ambiguity — in today's world, change is the only constant, and managers must deal with that reality." },
      { t: "p", text: "External forces for change: consumer needs and wants, technology, the economy, new governmental laws. Internal forces: new organizational strategy, new equipment, employee attitudes, composition of the workforce." },
      { t: "def", term: "White-water rapids metaphor", d: "The lack of environmental stability and predictability requires that managers and organizations continually adapt and manage change actively to survive." }
    ]},
    { h: "Five Types of Change", blocks: [
      { t: "table", title: "Five types of change", cols: ["Type", "What changes"], rows: [
        ["Strategy", "Modifying the approach to ensuring the organization's success — failure to change strategy when circumstances dictate (e.g., competition) can undermine success or survival"],
        ["Structure", "Structural components and structural design"],
        ["Technology", "Work processes, methods and equipment — new tools, automation, computerization, the Internet of Things"],
        ["People", "Attitudes, expectations, perceptions and behavior — individual and group"],
        ["Culture", "Shifting in response to internal or external factors — very difficult, but possible"]
      ]},
      { t: "p", text: "Culture is easier to change when: a dramatic crisis occurs; leadership changes hands; the organization is young and small; the culture is weak. Ways of changing culture: lead by example, craft new narratives, support champions, redesign socialization, align rewards, clarify expectations, shift subcultures, build consensus and trust." },
      { t: "def", term: "Organizational development (OD)", d: "Change methods that focus on people and the nature and quality of interpersonal work relationships. Popular OD techniques: SENSITIVITY TRAINING (changing behavior through unstructured group interaction), SURVEY FEEDBACK (assessing attitudes and perceptions, identifying discrepancies, and resolving differences using survey information in feedback groups), TEAM BUILDING (activities that help team members learn how each member thinks and works), PROCESS CONSULTATION (an outside consultant helps the manager understand how interpersonal processes are affecting the way work is done), and INTERGROUP DEVELOPMENT (changing the attitudes, stereotypes, and perceptions that work groups have about each other)." }
    ]},
    { h: "Reactions and Resistance to Change", blocks: [
      { t: "list", title: "Possible reactions to change (Elizur and Guttman, 1976)", items: [
        "Cognitive: opinions regarding the usefulness and necessity of change, and the knowledge required to manage it",
        "Affective: feelings of satisfaction or anxiety about change",
        "Instrumental: actions already taken or to be taken to manage change"
      ]},
      { t: "table", title: "How do people resist change?", cols: ["Active and overt resistance", "Passive and covert resistance"], rows: [
        ["Immediate", "Postponed"],
        ["Complaints and protests", "Reduced effort; mistakes"],
        ["Visible actions", "Gossips; absenteeism"]
      ]},
      { t: "list", title: "Why do people resist change?", items: [
        "Uncertainty", "Habit", "Fear of loss", "Belief that the change is inconsistent with the goals of the organization"
      ]},
      { t: "def", term: "Reaction curve: Kübler-Ross' grief model", d: "Stages over time — Shock (surprised by the event) → Denial (looking for clues that this is not true) → Frustration (recognizes things are different; sometimes angry) → Depression (bad mood, lack of energy) → Experimentation (first engagement with the new situation) → Decision (learning to work in the new situation; more positive) → Integration (changes integrated; a new person)." },
      { t: "table", title: "How to help resisters: Scott & Jaffe's Resistance Cycle (1988)", cols: ["Stage", "What happens", "How to help"], rows: [
        ["Denial", "Refuses to believe anything needs to change", "Make them aware of reality"],
        ["Resistance", "Anger, depression, mourning the past", "Individuals need time to express their feelings"],
        ["Exploration", "Begins to accept change, learns and experiments with new things", "Encourage individuals and let them focus"],
        ["Commitment", "Adapts to the new environment", "Celebrate successes"]
      ]},
      { t: "table", title: "Techniques for reducing resistance to change", cols: ["Technique", "When used", "Advantage", "Disadvantage"], rows: [
        ["Education and communication", "When resistance is due to misinformation", "Clear up misunderstandings", "May not work when mutual trust and credibility are lacking"],
        ["Participation", "When resisters have the expertise to make a contribution", "Increase involvement and acceptance", "Time-consuming; has potential for a poor solution"],
        ["Facilitation and support", "When resisters are fearful and anxiety ridden", "Can facilitate needed adjustments", "Expensive; no guarantee of success"],
        ["Negotiation", "When resistance comes from a powerful group", "Can “buy” commitment", "Potentially high cost; opens doors for others to apply pressure too"],
        ["Manipulation and co-optation", "When a powerful group's endorsement is needed", "Inexpensive, easy way to gain support", "Can backfire, causing change agent to lose credibility"],
        ["Coercion", "When a powerful group's endorsement is needed", "Inexpensive, easy way to gain support", "May be illegal; may undermine change agent's credibility"]
      ]}
    ]},
    { h: "Models for Implementing Change", blocks: [
      { t: "def", term: "Lewin's model (1947): Unfreezing → Changing → Refreezing", d: "UNFREEZING: recognize the need for change; determine what needs to change; ensure management supports the change; manage and understand doubts and concerns. CHANGING: plan for change; implement change; help employees learn new concepts and perspectives. REFREEZING: changes are reinforced and stabilized; integrate changes into new ways of doing things; develop ways to sustain change; celebrate success." },
      { t: "list", title: "Kotter's 8 steps for implementing change (1995)", items: [
        "1. Create urgency",
        "2. Form a coalition",
        "3. Create a vision",
        "4. Communicate the vision",
        "5. Empower action",
        "6. Generate short-term wins",
        "7. Consolidate gains",
        "8. Anchor in culture"
      ]}
    ]}
  ],
  mcqs: [
    { q: "Organizational change is defined as…", o: [
      "any alteration of people, structure, or technology in an organization",
      "only changes to the organization's strategy",
      "the replacement of top management",
      "growth in the number of employees"
    ], a: 0, e: "Organizational change = any alteration of people, structure, or technology." },
    { q: "Someone who acts as a catalyst and assumes responsibility for managing the change process is a…", o: [
      "change agent",
      "first mover",
      "mind guard",
      "staff manager"
    ], a: 0, e: "That's the definition of a change agent." },
    { q: "VUCA stands for…", o: [
      "volatility, uncertainty, complexity, and ambiguity",
      "vision, urgency, coalition, and action",
      "value, utility, cost, and advantage",
      "variability, uniformity, centralization, and authority"
    ], a: 0, e: "VUCA = volatility, uncertainty, complexity, ambiguity — the lecture's shorthand for today's environment where change is the only constant." },
    { q: "Which of the following is an INTERNAL force for change?", o: [
      "Employee attitudes",
      "New governmental laws",
      "Technology shifts in the marketplace",
      "Consumer needs and wants"
    ], a: 0, e: "Internal forces: new organizational strategy, new equipment, employee attitudes, workforce composition. The others are external forces." },
    { q: "The white-water rapids metaphor implies that…", o: [
      "managers must continually adapt and manage change actively to survive, because stability and predictability are lacking",
      "change comes in short bursts followed by long calm periods",
      "only top managers need to deal with change",
      "organizations should wait for the environment to stabilize before changing"
    ], a: 0, e: "The metaphor describes constant environmental instability requiring continuous, active change management." },
    { q: "Changing “attitudes, expectations, perceptions and behavior — individual and group” refers to which type of change?", o: [
      "People",
      "Strategy",
      "Structure",
      "Technology"
    ], a: 0, e: "People change targets attitudes, expectations, perceptions, behavior — the focus of organizational development methods." },
    { q: "Culture is EASIER to change when…", o: [
      "a dramatic crisis occurs, leadership changes hands, the organization is young and small, and the culture is weak",
      "the organization is old and large with a strong culture",
      "performance is excellent and stable",
      "no one is paying attention to it"
    ], a: 0, e: "Those four conditions (crisis, new leadership, young/small, weak culture) make culture change easier." },
    { q: "An outside consultant helps a manager understand how interpersonal processes are affecting the way work is being done. This OD technique is…", o: [
      "process consultation",
      "survey feedback",
      "sensitivity training",
      "intergroup development"
    ], a: 0, e: "Process consultation = outside consultant + insight into interpersonal work processes. Sensitivity training changes behavior via unstructured group interaction; intergroup development changes groups' stereotypes about each other." },
    { q: "According to Elizur and Guttman (1976), reactions to change can be cognitive, affective, or…", o: [
      "instrumental",
      "spiritual",
      "structural",
      "strategic"
    ], a: 0, e: "Cognitive (opinions/knowledge), affective (feelings of satisfaction or anxiety), instrumental (actions taken or to be taken)." },
    { q: "Reduced effort, mistakes, gossip, and absenteeism are examples of…", o: [
      "passive and covert resistance",
      "active and overt resistance",
      "commitment to change",
      "the exploration stage"
    ], a: 0, e: "Passive/covert resistance is postponed and hidden (reduced effort, mistakes, gossip, absenteeism); active/overt resistance is immediate and visible (complaints, protests, visible actions)." },
    { q: "Which is NOT one of the lecture's four reasons people resist change?", o: [
      "Greed for higher salaries",
      "Uncertainty",
      "Habit",
      "Fear of loss"
    ], a: 0, e: "The four reasons: uncertainty, habit, fear of loss, and belief that the change is inconsistent with the organization's goals." },
    { q: "In Scott & Jaffe's resistance cycle, the right response to the RESISTANCE stage is to…", o: [
      "give individuals time to express their feelings",
      "make them aware of reality",
      "celebrate successes",
      "encourage them and let them focus"
    ], a: 0, e: "Denial → make aware of reality; Resistance → time to express feelings; Exploration → encourage and let focus; Commitment → celebrate successes." },
    { q: "When resistance comes from a powerful group, which technique can “buy” commitment — at potentially high cost and the risk that others apply pressure too?", o: [
      "Negotiation",
      "Education and communication",
      "Facilitation and support",
      "Participation"
    ], a: 0, e: "Negotiation buys commitment from powerful resisters; its disadvantages are high cost and inviting others to pressure for deals too." },
    { q: "In Lewin's model, “reinforcing and stabilizing changes, integrating them into new ways of doing things, and celebrating success” describes…", o: [
      "refreezing",
      "unfreezing",
      "changing",
      "anchoring"
    ], a: 0, e: "Refreezing stabilizes and sustains the change. Unfreezing recognizes the need and manages doubts; changing plans and implements." },
    { q: "Which option lists Kotter's steps in correct order?", o: [
      "Create urgency → form a coalition → create a vision → communicate the vision → empower action → generate short-term wins → consolidate gains → anchor in culture",
      "Create a vision → create urgency → empower action → form a coalition → anchor in culture → communicate → consolidate → celebrate",
      "Form a coalition → create urgency → generate wins → create a vision → communicate → empower → anchor → consolidate",
      "Unfreeze → change → refreeze"
    ], a: 0, e: "Kotter's 8 steps (1995): urgency, coalition, vision, communicate the vision, empower action, short-term wins, consolidate gains, anchor in culture." }
  ],
  cases: [
    { title: "Going Digital at Barakat Insurance",
      scenario: "Barakat Insurance announces that all claims processing will move to a new AI-assisted platform within a year — a response to a nimble insurtech competitor and to new e-signature legislation. The CEO appoints COO Nadine to drive the transition. Reactions split immediately. Senior adjuster Fadi tells colleagues the plan “will never actually happen here” and processes claims exactly as before. Team leader Rola circulates angry voice notes mourning “the way we've always worked,” and sick days on her team spike. Junior staff, by contrast, ask for sandbox access to try the new system. Nadine responds in three moves: town halls explaining why the change is necessary, hands-on workshops with a help desk and counseling for anxious staff, and a deal granting the powerful adjusters' association two seats on the rollout committee in exchange for support.",
      qs: [
        { q: "Identify the external forces for change and the change agent in this case.", a: "External forces: competition/technology (the insurtech rival and the AI platform trend — consumer needs and technology) and new governmental laws (e-signature legislation). The change agent is Nadine — the person acting as catalyst who assumes responsibility for managing the change process." },
        { q: "Place Fadi, Rola, and the junior staff on Scott & Jaffe's resistance cycle, and state the lecture's recommended response for each stage.", a: "Fadi is in DENIAL (refuses to believe anything needs to change) — make him aware of reality. Rola is in RESISTANCE (anger, mourning the past; note also her team's passive resistance via absenteeism) — give individuals time to express their feelings. The junior staff are in EXPLORATION (experimenting with new things) — encourage them and let them focus. When staff adapt (COMMITMENT), celebrate successes." },
        { q: "Classify the forms of resistance shown by Fadi's and Rola's behaviors using the active/overt vs. passive/covert framework.", a: "Rola's angry voice notes are ACTIVE AND OVERT resistance (immediate complaints/protests, visible) — though circulating them informally also has covert elements (gossip); her team's spiking sick days are PASSIVE AND COVERT resistance (absenteeism, postponed and hidden). Fadi's quiet continuation of old procedures while predicting failure is passive/covert resistance (reduced engagement, no visible protest)." },
        { q: "Match Nadine's three moves to the techniques for reducing resistance, and give one advantage and one disadvantage of each from the lecture's table.", a: "Town halls = EDUCATION AND COMMUNICATION (used when resistance is due to misinformation; advantage: clears up misunderstandings; disadvantage: may not work when mutual trust and credibility are lacking). Workshops, help desk, counseling = FACILITATION AND SUPPORT (for fearful, anxiety-ridden resisters; advantage: facilitates needed adjustments; disadvantage: expensive, no guarantee of success). The committee-seats deal = NEGOTIATION (when resistance comes from a powerful group; advantage: can “buy” commitment; disadvantage: potentially high cost and opens the door for others to apply pressure). (If the seats were given mainly to co-opt leaders rather than genuinely negotiate, it would shade into manipulation/co-optation — inexpensive but it can backfire and cost the change agent credibility.)" }
      ]},
    { title: "The Merger That Wouldn't Stick at Jabal Logistics",
      scenario: "Last year Jabal Logistics merged two regional depots and proclaimed a “One Jabal” culture of cooperation. The launch was loud — posters, a kickoff party — but six months later drivers from the two former depots still refuse to share routes, each side stereotyping the other as “lazy” or “arrogant.” An employee survey reveals deep distrust, and a follow-up workshop where both groups discussed the survey results briefly improved relations before everything slid back. The CEO admits mistakes: no one was told why the merger was urgent; the change was run by one HR officer with no senior backing; no early wins were planned; and when shipment volumes recovered, executives declared victory and moved on. Now he wants to relaunch the integration properly.",
      qs: [
        { q: "Which TYPE of change is failing here, and why is it especially hard according to the lecture?", a: "CULTURE change (with PEOPLE change components — attitudes, perceptions). An organization's culture is very difficult to change because it consists of shared values, traditions, and ways of doing things; it is easier to change only when there is a dramatic crisis, a leadership change, a young/small organization, or a weak culture. Here two entrenched depot cultures persist within the merged firm." },
        { q: "Identify the two OD techniques Jabal already used (perhaps without knowing it) and one more it should add, with justification.", a: "Used: SURVEY FEEDBACK — assessing attitudes and perceptions via the survey, identifying discrepancies, and resolving differences in a feedback workshop; and elements of INTERGROUP DEVELOPMENT — the workshop aimed at changing the attitudes, stereotypes, and perceptions the two driver groups hold about each other (it should be continued deliberately). Add TEAM BUILDING for newly mixed route teams (activities helping members learn how each member thinks and works) — or PROCESS CONSULTATION, with an outside consultant helping managers see how interpersonal processes are blocking cooperation." },
        { q: "Audit the failed relaunch against Kotter's 8 steps: which steps were skipped or botched? Name at least four with evidence.", a: "(1) Create urgency — skipped: no one was told why the merger was urgent. (2) Form a coalition — botched: one HR officer with no senior backing is not a guiding coalition. (3) Create a vision / (4) communicate the vision — “One Jabal” was a slogan with posters and a party, not a communicated vision people understood. (6) Generate short-term wins — none were planned. (7) Consolidate gains / (8) anchor in culture — executives declared victory prematurely when volumes recovered and moved on, so gains were never consolidated or anchored. (5) Empower action was also weak — drivers were never enabled or incentivized to share routes." },
        { q: "Explain the relapse using Lewin's model: which phase was neglected, and what should the relaunch do differently in each phase?", a: "REFREEZING was neglected: the brief post-workshop improvement slid back because changes were never reinforced, integrated into new ways of doing things, or sustained — and success was celebrated prematurely rather than earned. The relaunch should UNFREEZE properly (make the need for change recognized, secure management support, surface and manage doubts), CHANGE deliberately (plan the integration, implement it, help employees learn new concepts and perspectives — e.g., mixed teams with support), then REFREEZE (reinforce and stabilize new routines, align rewards to cooperation, develop ways to sustain the change, and only then celebrate success)." }
      ]}
  ],
  essays: [
    { q: "Compare Lewin's three-step model with Kotter's 8 steps for implementing change. How do they map onto each other, and what does each add that the other lacks?",
      outline: [
        "Lewin (1947): unfreezing (recognize need, secure management support, manage doubts) → changing (plan, implement, help employees learn) → refreezing (reinforce, integrate, sustain, celebrate)",
        "Kotter (1995): urgency → coalition → vision → communicate vision → empower action → short-term wins → consolidate gains → anchor in culture",
        "Mapping: steps 1–4 ≈ unfreezing; steps 5–6 ≈ changing; steps 7–8 ≈ refreezing",
        "Kotter adds operational detail: coalition-building, vision communication, engineered short-term wins",
        "Lewin adds the underlying logic: stability → movement → new stability; warns against premature victory (refreeze!)",
        "Conclusion: complementary — Lewin as the conceptual skeleton, Kotter as the playbook"
      ],
      model: "Lewin's model (1947) describes change in three phases. Unfreezing prepares the organization: recognizing the need for change, determining what must change, ensuring management supports it, and managing doubts and concerns. Changing is the movement itself: planning and implementing the change while helping employees learn new concepts and perspectives. Refreezing stabilizes the result: reinforcing changes, integrating them into new ways of doing things, developing means to sustain them, and celebrating success. Kotter's 8 steps (1995) — create urgency, form a coalition, create a vision, communicate the vision, empower action, generate short-term wins, consolidate gains, and anchor in culture — map naturally onto Lewin: creating urgency, building a coalition, and creating and communicating a vision operationalize unfreezing; empowering action and generating short-term wins drive the changing phase; consolidating gains and anchoring new approaches in culture accomplish refreezing. Each framework adds something. Kotter contributes an actionable playbook: he tells the change agent specifically HOW to unfreeze (urgency plus a guiding coalition plus a communicated vision) and how to maintain momentum (engineered short-term wins). Lewin contributes the deeper logic — that organizations move from one stable state through a transition to a NEW stable state — and thus the warning both Jabal-style failures illustrate: change that is implemented but never refrozen (or, in Kotter's terms, where victory is declared before gains are consolidated and anchored) will slide back. Used together, Lewin supplies the skeleton and Kotter the muscles of a change program." },
    { q: "Why do people resist organizational change, and how can managers respond? Discuss the forms and reasons of resistance, individual reaction stages (Kübler-Ross; Scott & Jaffe), and evaluate the six techniques for reducing resistance.",
      outline: [
        "Reactions have cognitive, affective, instrumental components (Elizur & Guttman, 1976)",
        "Forms: active/overt (immediate, complaints, protests, visible) vs. passive/covert (postponed, reduced effort, mistakes, gossip, absenteeism)",
        "Reasons: uncertainty, habit, fear of loss, belief change is inconsistent with organizational goals",
        "Kübler-Ross curve: shock → denial → frustration → depression → experimentation → decision → integration",
        "Scott & Jaffe: denial (make aware of reality) → resistance (time to express feelings) → exploration (encourage, focus) → commitment (celebrate)",
        "Six techniques with when/advantage/disadvantage: education & communication; participation; facilitation & support; negotiation; manipulation & co-optation; coercion",
        "Conclusion: diagnose the source and stage, then match the technique; ethical caution on the last two"
      ],
      model: "People's reactions to change run on three tracks (Elizur & Guttman, 1976): cognitive (opinions about the usefulness and necessity of the change and the knowledge to manage it), affective (feelings of satisfaction or anxiety), and instrumental (actions taken or planned). When the balance tips negative, resistance appears in two forms: active and overt — immediate, visible complaints, protests, and actions — or passive and covert — postponed and hidden, through reduced effort, mistakes, gossip, and absenteeism. The lecture identifies four root reasons: uncertainty, habit, fear of loss, and the belief that the change is inconsistent with the goals of the organization — the last being a signal worth hearing, since the resister may be right. Individually, people travel a reaction curve: Kübler-Ross' grief model traces shock, denial, frustration, depression, then experimentation, decision, and finally integration. Scott & Jaffe's resistance cycle (1988) compresses this into four stages with managerial prescriptions: in denial, make people aware of reality; in resistance, give them time to express feelings; in exploration, encourage them and let them focus; in commitment, celebrate successes. At the organizational level, six techniques reduce resistance, each fitting particular conditions. Education and communication clear up misunderstandings when resistance stems from misinformation, but fail without trust and credibility. Participation increases involvement and acceptance when resisters have expertise to contribute, but is time-consuming and can yield a poor solution. Facilitation and support help fearful, anxious resisters adjust, though they are expensive with no guaranteed success. Negotiation can buy commitment from a powerful resisting group, at potentially high cost and the risk that others demand deals too. Manipulation and co-optation, and coercion, are inexpensive and easy ways to win endorsement from powerful groups — but they can backfire, undermine the change agent's credibility, and coercion may even be illegal. Effective change managers therefore diagnose first — what form, what reason, what stage — and match their response, reserving the last two techniques for rare cases and using them with full awareness of their risks." },
    { q: "“Of the five types of organizational change, culture change is the hardest.” Explain the five types, discuss why culture is so difficult to change, and describe when culture change becomes feasible and how managers can pursue it (including OD techniques).",
      outline: [
        "Five types: strategy (modifying the approach to success; competitive pressure), structure (components and design), technology (processes, methods, equipment; automation, computerization, IoT), people (attitudes, expectations, perceptions, behavior), culture",
        "Why culture is hard: shared values/traditions are deeply held (link to W3: strong cultures, founders, socialization)",
        "Feasibility conditions: dramatic crisis; leadership change; young and small organization; weak culture",
        "Levers: lead by example, craft new narratives, support champions, redesign socialization, align rewards, clarify expectations, shift subcultures, build consensus and trust",
        "OD as the people-side toolkit: sensitivity training, survey feedback, team building, process consultation, intergroup development",
        "Conclusion: culture change = long-haul, multi-lever effort anchored by leadership behavior"
      ],
      model: "The lecture distinguishes five types of change. Strategy change modifies the organization's approach to ensuring its success — and failing to change strategy when circumstances (such as competition) dictate can threaten survival. Structure change alters structural components or the overall structural design. Technology change touches work processes, methods, and equipment — automation, computerization, and the Internet of Things. People change targets attitudes, expectations, perceptions, and behavior at the individual and group level. Culture change attempts to shift the organization's shared values and ways of doing things in response to internal or external factors. Culture is the hardest because it is, by definition, what is shared, taught to newcomers, and reinforced daily — the deeply held values and traditions that Week 3 showed are rooted in founders' visions and maintained through selection, socialization, and top-management behavior; an instruction cannot simply overwrite it. The lecture is nonetheless clear that hard does not mean impossible: culture change becomes feasible when a dramatic crisis occurs, when leadership changes hands, when the organization is young and small, or when the existing culture is weak. To pursue it, managers can pull several levers together: lead by example, craft new narratives, support champions, redesign socialization, align rewards with the desired culture, clarify expectations, shift subcultures, and build consensus and trust. Because culture lives in people and relationships, organizational development supplies the working tools — sensitivity training to change behavior through unstructured group interaction, survey feedback to surface and resolve attitude discrepancies, team building so members learn how each other think and work, process consultation to diagnose interpersonal processes, and intergroup development to dissolve the stereotypes groups hold about each other. Culture change, in short, is a sustained, multi-lever campaign in which leaders' visible behavior and aligned systems slowly make the new way “how we do things here.”" }
  ]
},
/* ---------------- WEEK 10 ---------------- */
{
  id: "w10",
  week: 10,
  title: "Leadership",
  blurb: "Trait, behavioral, contingency, and contemporary theories — plus power and gender.",
  sections: [
    { h: "Who Are Leaders?", blocks: [
      { t: "def", term: "Leader", d: "Someone who can influence others and who has managerial authority." },
      { t: "def", term: "Leadership", d: "A process of influencing a group to achieve goals." },
      { t: "def", term: "Trait theories", d: "Research focused on identifying personal characteristics that differentiated leaders from non-leaders was UNSUCCESSFUL — it proved impossible to identify a set of traits that would always differentiate a leader (the person) from a non-leader." }
    ]},
    { h: "Behavioral Theories", blocks: [
      { t: "def", term: "Behavioral theories", d: "Leadership theories that identify behaviors that differentiate effective leaders from ineffective leaders." },
      { t: "table", title: "The four behavioral studies", cols: ["Study", "Behavioral dimensions", "Conclusion"], rows: [
        ["University of Iowa", "Democratic style (involving subordinates, delegating authority, encouraging participation); Autocratic style (dictating work methods, centralizing decision making, limiting participation); Laissez-faire style (giving the group freedom to make decisions and complete work)", "Democratic style was most effective, although later studies showed mixed results"],
        ["Ohio State", "Consideration (being considerate of followers' ideas and feelings); Initiating structure (structuring work and work relationships to meet job goals)", "The high-high leader (high consideration AND high initiating structure) achieved high subordinate performance and satisfaction — but not in all situations"],
        ["University of Michigan", "Employee oriented (emphasized interpersonal relationships and taking care of employees' needs); Production oriented (emphasized technical or task aspects of the job)", "Employee-oriented leaders were associated with high group productivity and higher job satisfaction"],
        ["Managerial Grid", "Concern for people (1–9); Concern for production (1–9)", "Leaders performed best with a 9,9 style (high concern for production AND high concern for people)"]
      ]}
    ]},
    { h: "Contingency Theories", blocks: [
      { t: "def", term: "Fiedler contingency model", d: "Effective group performance depends on the proper match between a leader's style and the degree to which the situation allows the leader to control and influence. The LEAST-PREFERRED COWORKER (LPC) questionnaire measures whether a leader is task or relationship oriented. Three situational contingencies: LEADER–MEMBER RELATIONS (degree of confidence, trust, and respect employees have for their leader), TASK STRUCTURE (degree to which job assignments are formalized and structured), POSITION POWER (degree of influence over hiring, firing, discipline, promotions, salary increases). Findings: task-oriented leaders perform best in HIGHLY FAVORABLE and HIGHLY UNFAVORABLE situations; relationship-oriented leaders perform best in MODERATELY favorable situations." },
      { t: "def", term: "Hersey and Blanchard's Situational Leadership Theory (SLT)", d: "A contingency theory that focuses on followers' READINESS — the extent to which people have the ability and willingness to accomplish a specific task. Four leadership styles: TELLING (high task–low relationship), SELLING (high task–high relationship), PARTICIPATING (low task–high relationship), DELEGATING (low task–low relationship). Four stages of follower readiness: R1 both unable and unwilling → telling; R2 unable but willing → selling; R3 able but unwilling → participating; R4 both able and willing → delegating." },
      { t: "def", term: "Path-goal theory", d: "The leader's job is to assist followers in attaining their goals and to provide direction or support needed to ensure their goals are compatible with the goals of the group or organization. Four leadership behaviors: DIRECTIVE, SUPPORTIVE, PARTICIPATIVE, ACHIEVEMENT-ORIENTED. The model includes environmental contingency factors (task structure, formal authority system, work group) and subordinate contingency factors (locus of control, experience, perceived ability), leading to outcomes (performance, satisfaction)." }
    ]},
    { h: "Contemporary Theories", blocks: [
      { t: "def", term: "Leader-member exchange (LMX) theory", d: "Leaders create in-groups and out-groups; those in the in-group will have higher performance ratings, less turnover, and greater job satisfaction." },
      { t: "def", term: "Charismatic leader", d: "An enthusiastic, self-confident leader whose personality and actions influence people to behave in certain ways. There is ongoing debate about whether charismatic leadership can be taught or whether people are born with the traits." },
      { t: "def", term: "Transactional leaders", d: "Leaders who lead primarily by using social exchanges (or transactions)." },
      { t: "def", term: "Transformational leaders", d: "Leaders who stimulate and inspire (transform) followers to achieve extraordinary outcomes." },
      { t: "def", term: "Authentic leadership", d: "Leaders who know who they are, know what they believe in, and act on those values and beliefs openly and candidly. It focuses on the moral aspects of being a leader. Four qualities: (1) self-aware, (2) transparent, (3) openly solicit views that challenge their deeply held positions, (4) guided by strong moral standards." },
      { t: "def", term: "Ethical leadership", d: "An ethical leader puts public safety ahead of profits, holds culpable employees accountable, and creates a culture in which employees feel they could and should do a better job. Example: Delta Airlines CEO Ed Bastian's actions during the COVID-19 pandemic." },
      { t: "def", term: "Servant leadership", d: "Servant leaders go beyond their own self-interest and focus on helping followers grow and develop. Its unique feature: it puts the needs of followers ahead of the leader's own needs. May be more prevalent and effective in certain cultures, such as Eastern Asian cultures." },
      { t: "def", term: "Emergent leadership", d: "Occurs when the leader of a group or team naturally arises instead of being appointed. Emergent leaders are perceived by their peers as leaderlike and accepted as the informal leader; they lead at the team level, have not been formally appointed, and do not play a permanent role." },
      { t: "def", term: "Followership", d: "Leaders need good followers to be effective. Good follower traits: ability to self-manage; strong commitment to purpose; enthusiasm; they build competence; courageous, honest, and credible." }
    ]},
    { h: "Leadership and Power", blocks: [
      { t: "table", title: "Five sources of leader power", cols: ["Power", "Definition"], rows: [
        ["Legitimate power", "The power a leader has as a result of his or her position in the organization"],
        ["Coercive power", "The power a leader has to punish or control"],
        ["Reward power", "The power a leader has to give positive rewards"],
        ["Expert power", "Power based on expertise, special skills, or knowledge"],
        ["Referent power", "Power that arises because of a person's desirable resources or personal traits"]
      ]}
    ]},
    { h: "Leadership and Gender (instructor addition)", blocks: [
      { t: "p", text: "Some figures — USA: in 2023, 10.6% of Fortune 500 CEOs were women; less than 1% are women of color; in 2022, 30.4% of board members were women (Pew Research Center, 2023). Lebanon: in 2019, women represented 29% of senior and middle management (World Bank, 2019); data on women in leadership remains scarce." },
      { t: "def", term: "Glass phenomena", d: "From the GLASS CEILING (invisible barrier keeping women from top positions) to the GLASS CLIFF (women over-represented in precarious leadership positions — Ryan & Haslam, 2005)." },
      { t: "list", title: "Female leaders and performance — research findings", items: [
        "Women are now seen as equally or more competent than men (Eagly et al., 2018/2020)",
        "The presence of a female leader leads perceivers to anticipate fairer treatment (Joshi & Diekman, 2021/2022)",
        "The presence of a female CEO is positively related to firms' financial performance in gender-egalitarian cultures (Hoobler et al., 2018)",
        "Gender-diverse leadership teams are more effective at pursuing environmentally friendly strategies (Glass et al., 2016)"
      ]},
      { t: "list", title: "Female leaders and leadership style", items: [
        "Female leaders demonstrate more transformational leadership style (Eagly et al., 1992) and democratic leadership style (Wu et al., 2021)",
        "These styles are congruent with their gender roles (Wu et al., 2021)",
        "When women adopt styles incongruent with their gender roles, they tend to be penalized (Wang et al., 2013)"
      ]}
    ]}
  ],
  mcqs: [
    { q: "Leadership is defined as…", o: [
      "a process of influencing a group to achieve goals",
      "the formal authority that comes with a management position",
      "a set of personality traits people are born with",
      "the power to punish or control others"
    ], a: 0, e: "Leadership = a process of influencing a group to achieve goals; a leader is someone who can influence others and has managerial authority." },
    { q: "What was the outcome of early trait research on leadership?", o: [
      "It proved impossible to identify a set of traits that would ALWAYS differentiate a leader from a non-leader",
      "It identified seven universal traits all leaders share",
      "It showed traits matter more than behaviors in every situation",
      "It demonstrated leaders are born, not made"
    ], a: 0, e: "Trait research was unsuccessful: no set of traits always differentiated leaders from non-leaders — which pushed research toward behaviors." },
    { q: "In the University of Iowa studies, the style that involved subordinates, delegated authority, and encouraged participation was the…", o: [
      "democratic style",
      "autocratic style",
      "laissez-faire style",
      "initiating-structure style"
    ], a: 0, e: "Democratic = involving subordinates, delegating, encouraging participation — initially found most effective (later results mixed). Autocratic dictates and centralizes; laissez-faire gives the group freedom." },
    { q: "The Ohio State studies identified which two behavioral dimensions?", o: [
      "Consideration and initiating structure",
      "Employee oriented and production oriented",
      "Concern for people and concern for production",
      "Democratic and autocratic"
    ], a: 0, e: "Ohio State: consideration (followers' ideas/feelings) + initiating structure (structuring work toward goals); the high-high leader did well, but not in all situations." },
    { q: "In Fiedler's model, the LPC questionnaire measures…", o: [
      "whether a leader is task or relationship oriented",
      "followers' readiness for a task",
      "a leader's position power",
      "the group's cohesiveness"
    ], a: 0, e: "The least-preferred coworker (LPC) questionnaire identifies the leader's style: task oriented vs. relationship oriented." },
    { q: "Fiedler's three situational contingencies are…", o: [
      "leader–member relations, task structure, and position power",
      "readiness, willingness, and ability",
      "locus of control, experience, and perceived ability",
      "consideration, structure, and charisma"
    ], a: 0, e: "Leader–member relations (trust/confidence/respect), task structure (formalization of assignments), position power (influence over hiring, firing, discipline, promotions, raises)." },
    { q: "Fiedler found that TASK-oriented leaders perform best in…", o: [
      "highly favorable AND highly unfavorable situations",
      "moderately favorable situations only",
      "all situations equally",
      "situations with high follower readiness"
    ], a: 0, e: "Task-oriented leaders excel at the extremes (very favorable or very unfavorable); relationship-oriented leaders do best in moderate situations." },
    { q: "In Hersey and Blanchard's SLT, a follower who is ABLE but UNWILLING (R3) calls for which style?", o: [
      "Participating (low task–high relationship)",
      "Telling (high task–low relationship)",
      "Selling (high task–high relationship)",
      "Delegating (low task–low relationship)"
    ], a: 0, e: "R1 unable+unwilling→telling; R2 unable+willing→selling; R3 able+unwilling→participating; R4 able+willing→delegating." },
    { q: "Path-goal theory says the leader's job is to…", o: [
      "assist followers in attaining their goals and provide direction or support to ensure their goals are compatible with those of the group or organization",
      "create in-groups and out-groups among followers",
      "match their fixed style to the favorableness of the situation",
      "exchange rewards for follower compliance"
    ], a: 0, e: "Path-goal: help followers attain goals with direction/support, aligning their goals with the group/organization — via directive, supportive, participative, or achievement-oriented behavior." },
    { q: "According to LMX theory, members of the leader's IN-group tend to have…", o: [
      "higher performance ratings, less turnover, and greater job satisfaction",
      "more turnover and less satisfaction",
      "lower performance but more loyalty",
      "no measurable differences from the out-group"
    ], a: 0, e: "LMX: leaders create in-groups and out-groups; in-group members show higher ratings, less turnover, greater satisfaction." },
    { q: "Leaders who stimulate and inspire followers to achieve extraordinary outcomes are…", o: [
      "transformational leaders",
      "transactional leaders",
      "laissez-faire leaders",
      "emergent leaders"
    ], a: 0, e: "Transformational leaders transform followers toward extraordinary outcomes; transactional leaders lead primarily through social exchanges (transactions)." },
    { q: "Which is one of the four qualities of AUTHENTIC leaders?", o: [
      "They openly solicit views that challenge their deeply held positions",
      "They conceal their values to stay flexible",
      "They prioritize profits over safety",
      "They avoid feedback to protect their image"
    ], a: 0, e: "Authentic leaders are self-aware, transparent, solicit challenging views, and are guided by strong moral standards — the moral side of leadership." },
    { q: "What is UNIQUE about servant leadership relative to other leadership approaches?", o: [
      "It puts the needs of followers ahead of the leader's own needs",
      "It relies on the leader's formal position power",
      "It requires charismatic personality traits",
      "It applies only to appointed leaders"
    ], a: 0, e: "Servant leaders go beyond self-interest, focusing on followers' growth and development — and may be more prevalent/effective in some cultures (e.g., Eastern Asian)." },
    { q: "A manager is obeyed because she can grant bonuses and choice assignments. Which power source is she using?", o: [
      "Reward power",
      "Coercive power",
      "Expert power",
      "Referent power"
    ], a: 0, e: "Reward power = giving positive rewards. Coercive = punish/control; expert = skills/knowledge; referent = desirable resources or personal traits; legitimate = position." },
    { q: "The “glass cliff” (Ryan & Haslam, 2005) refers to…", o: [
      "women being over-represented in precarious leadership positions",
      "the invisible barrier keeping women out of all management",
      "women refusing risky leadership roles",
      "the pay gap between male and female executives"
    ], a: 0, e: "Beyond the glass ceiling, the glass cliff describes women disproportionately appointed to risky, precarious leadership positions." },
  ],
  cases: [
    { title: "Choosing a Leader for Two Very Different Teams",
      scenario: "Talal directs operations at Manara Foods and must staff two situations. Situation A is a crisis: a recalled product line must be relaunched in 30 days by a newly assembled team that doesn't yet trust any leader, with vague job assignments, and the team leader will have no authority over pay or discipline. Situation B is the long-standing quality-control team: members trust their leader deeply, tasks are codified in manuals, and the leader controls assignments, evaluations, and bonuses. Two internal candidates differ sharply on the LPC questionnaire: Samia scores low (task oriented), while Walid scores high (relationship oriented). Talal also wonders how each candidate should treat a brand-new hire who is eager but clueless, and a 20-year veteran who has grown cynical and disengaged.",
      qs: [
        { q: "Using Fiedler's three situational contingencies, rate the favorableness of Situations A and B.", a: "Situation A: poor leader–member relations (no trust yet), low task structure (vague assignments), weak position power (no control over pay/discipline) → HIGHLY UNFAVORABLE. Situation B: good leader–member relations (deep trust), high task structure (codified manuals), strong position power (assignments, evaluations, bonuses) → HIGHLY FAVORABLE." },
        { q: "Who should lead each situation according to Fiedler, and why?", a: "Samia (low LPC, task oriented) fits BOTH situations — Fiedler found task-oriented leaders perform best in highly favorable AND highly unfavorable situations. Walid (high LPC, relationship oriented) performs best in MODERATELY favorable situations, so neither extreme suits him; he would be the choice if a situation of moderate favorableness arose. Note Fiedler assumes style is fixed — you match the leader to the situation, not the reverse." },
        { q: "Apply Hersey and Blanchard's SLT to the eager new hire and the cynical veteran.", a: "The new hire is R2 (unable but willing) → SELLING (high task–high relationship): direction plus encouragement. If truly clueless and overwhelmed (unable and unwilling, R1), TELLING (high task–low relationship) applies. The cynical veteran is R3 (able but unwilling) → PARTICIPATING (low task–high relationship): involve him, rebuild willingness. A fully able and willing follower (R4) would get DELEGATING (low task–low relationship)." },
        { q: "Once appointed, the Situation A leader has little formal clout. Which sources of power can she still draw on, and which are unavailable?", a: "Unavailable or weak: REWARD and COERCIVE power (no control over pay/discipline) and limited LEGITIMATE power (new, temporary role). Available: EXPERT power (knowledge of relaunch/quality processes) and REFERENT power (building admiration and trust through her traits and actions). This is why influence (leadership), not just authority, matters." }
      ]},
    { title: "The Two Faces of Leadership at Fanar Energy",
      scenario: "Fanar Energy's two division heads could not be more different. Khalil runs Solar on clear exchanges: hit your targets, get your bonus; miss them, lose privileges. Everything is a deal, and the division reliably meets — never exceeds — its goals. Dana runs Wind with a compelling vision of “energy independence for the region.” She is enthusiastic and self-confident; engineers describe being inspired to achieve things they thought impossible. Dana publicly admits her own mistakes, invites engineers to challenge her ideas, and recently halted a profitable turbine model over a safety doubt, holding the responsible team accountable. Colleagues note she quietly favors an inner circle of trusted engineers who get the best projects and mentoring — and show the highest performance and loyalty — while others feel like outsiders. The board, impressed, is also troubled: when Dana traveled for three months, Wind's momentum stalled.",
      qs: [
        { q: "Classify Khalil's and Dana's leadership using the transactional/transformational distinction, with evidence.", a: "Khalil is a TRANSACTIONAL leader — he leads primarily by social exchanges (targets for bonuses, privileges withdrawn for misses), producing reliable but unexceptional results. Dana is TRANSFORMATIONAL — she stimulates and inspires followers to achieve extraordinary outcomes (engineers achieving the “impossible” behind a vision), with CHARISMATIC features (enthusiastic, self-confident, personality that influences behavior)." },
        { q: "Which qualities of authentic and ethical leadership does Dana display?", a: "Authentic: she is self-aware and TRANSPARENT (publicly admits mistakes), openly SOLICITS views that challenge her positions (invites engineers to challenge ideas), and is guided by strong moral standards. Ethical leadership: she puts public safety ahead of profits (halting the profitable turbine over a safety doubt) and holds culpable employees accountable — mirroring the lecture's Ed Bastian/Delta example of ethical leadership." },
        { q: "Explain the “inner circle” phenomenon with the appropriate theory and its predicted consequences.", a: "LEADER-MEMBER EXCHANGE (LMX) theory: leaders create IN-GROUPS and OUT-GROUPS. Dana's trusted engineers are her in-group — LMX predicts exactly what is observed: higher performance ratings, less turnover, and greater job satisfaction for in-group members. The risk is out-group members' exclusion (feeling like outsiders), with lower satisfaction and potential turnover." },
        { q: "“Wind stalls whenever Dana leaves.” Using followership, advise the board.", a: "Leaders need good followers to be effective — leadership is not only about the leader. The board should develop followership in Wind: followers with the ability to SELF-MANAGE, strong commitment to PURPOSE (the mission, not just Dana), enthusiasm, growing COMPETENCE, and courage, honesty, and credibility. Building these traits (and spreading mentoring beyond the in-group) would let the vision run without the leader's constant presence." }
      ]}
  ],
  essays: [
    { q: "Trace the evolution of leadership research from trait theories to behavioral theories. Describe the four behavioral studies and their conclusions, and explain why this line of research led to contingency thinking.",
      outline: [
        "Trait approach: sought personal characteristics differentiating leaders from non-leaders — unsuccessful; no trait set always differentiates leaders",
        "Shift: behavioral theories — identify behaviors differentiating EFFECTIVE from ineffective leaders",
        "Iowa: democratic, autocratic, laissez-faire; democratic most effective but later mixed results",
        "Ohio State: consideration + initiating structure; high-high did well — but not in all situations",
        "Michigan: employee oriented vs. production oriented; employee-oriented linked to productivity and satisfaction",
        "Managerial Grid: concern for people × concern for production; 9,9 best",
        "Bridge to contingency: “not in all situations” and “mixed results” show effectiveness depends on the situation → Fiedler, SLT, path-goal"
      ],
      model: "Leadership research began with traits: the search for personal characteristics that differentiated leaders from non-leaders. That program failed — it proved impossible to identify a set of traits that would ALWAYS distinguish the leader (the person) from the non-leader. Attention therefore turned from who leaders are to what leaders do: behavioral theories identify behaviors that differentiate effective from ineffective leaders, with the hope that behaviors, unlike traits, could be taught. Four studies anchor this tradition. The University of Iowa studies contrasted democratic (involving subordinates, delegating authority, encouraging participation), autocratic (dictating methods, centralizing decisions, limiting participation), and laissez-faire styles (letting the group decide and work freely); the democratic style initially appeared most effective, though later studies produced mixed results. The Ohio State studies distilled two dimensions — consideration (care for followers' ideas and feelings) and initiating structure (structuring work and relationships toward goals) — and found the high-high leader achieved high subordinate performance and satisfaction, but not in all situations. The University of Michigan studies contrasted employee-oriented leaders (interpersonal relationships, employees' needs) with production-oriented ones (technical/task aspects), associating employee orientation with higher group productivity and job satisfaction. The Managerial Grid mapped concern for people against concern for production on nine-point scales, concluding leaders performed best with a 9,9 (high-high) style. The recurring qualifiers — “mixed results,” “not in all situations” — proved decisive: if no behavior pattern wins everywhere, effectiveness must depend on the situation. That inference launched the contingency theories — Fiedler's model, Hersey and Blanchard's situational leadership, and path-goal theory — which formalize matching leadership to situational conditions." },
    { q: "Compare Fiedler's contingency model, Hersey and Blanchard's situational leadership theory, and path-goal theory. For each: what is the leader's style assumption, what situational variables matter, and what does the theory prescribe?",
      outline: [
        "Common premise: effectiveness depends on situation-style match",
        "Fiedler: style measured by LPC (task vs. relationship) and treated as FIXED; situation = leader-member relations, task structure, position power → favorableness continuum; prescription: task-oriented at extremes, relationship-oriented in moderate situations; match leader to situation",
        "SLT: focuses on FOLLOWERS' READINESS (ability + willingness); leader adapts across telling, selling, participating, delegating as followers move R1→R4",
        "Path-goal: leader assists followers to attain goals, aligning them with group/organization; four behaviors (directive, supportive, participative, achievement-oriented); contingencies = environment (task structure, authority system, work group) + subordinate factors (locus of control, experience, perceived ability) → performance and satisfaction; leader FLEXIBLE",
        "Contrast: who/what is diagnosed (situation favorableness vs. follower readiness vs. follower needs/environment); fixed vs. flexible style",
        "Conclusion: all reject one-best-style; differ on adaptability and diagnostic focus"
      ],
      model: "All three contingency theories deny a universally best style, but they differ in what they diagnose and whether the leader can adapt. Fiedler's contingency model holds that effective group performance depends on the proper match between a leader's style and the degree to which the situation gives the leader control and influence. Style is measured by the least-preferred coworker (LPC) questionnaire — task oriented versus relationship oriented — and is assumed fixed. The situation's favorableness rests on three contingencies: leader–member relations (confidence, trust, respect), task structure (how formalized assignments are), and position power (influence over hiring, firing, discipline, promotions, raises). Fiedler's findings: task-oriented leaders perform best in highly favorable and highly unfavorable situations, relationship-oriented leaders in moderately favorable ones — so organizations should match the leader to the situation (or change the situation), not expect the leader to change. Hersey and Blanchard's situational leadership theory shifts the diagnosis to followers' readiness — their ability and willingness for a specific task. The leader adapts along two behavior dimensions, producing four styles: telling (high task–low relationship) for R1 followers (unable and unwilling), selling (high task–high relationship) for R2 (unable but willing), participating (low task–high relationship) for R3 (able but unwilling), and delegating (low task–low relationship) for R4 (able and willing). Path-goal theory defines the leader's job as assisting followers to attain their goals and providing the direction or support that aligns those goals with the group's or organization's. The leader chooses among directive, supportive, participative, and achievement-oriented behaviors, guided by environmental contingencies (task structure, formal authority system, work group) and subordinate contingencies (locus of control, experience, perceived ability), with performance and satisfaction as outcomes. In short: Fiedler diagnoses situational favorableness with a fixed-style leader; SLT diagnoses follower development with an adaptive leader; path-goal diagnoses both environment and follower characteristics, prescribing whichever behavior clears the follower's path to the goal." },
    { q: "Discuss the situation of women in leadership using the lecture's evidence: representation figures, the glass ceiling and glass cliff, research on female leaders' performance, and the role-congruity problem in leadership styles.",
      outline: [
        "Representation: 10.6% of Fortune 500 CEOs women (2023), <1% women of color; 30.4% of board members (2022) — Pew; Lebanon: 29% of senior/middle management (World Bank, 2019), scarce data",
        "Glass ceiling → glass cliff (Ryan & Haslam, 2005): women over-represented in precarious leadership positions",
        "Performance evidence: perceived as equally/more competent (Eagly et al.); female leader presence → anticipated fairer treatment (Joshi & Diekman); female CEOs ↔ financial performance in gender-egalitarian cultures (Hoobler et al., 2018); gender-diverse teams → environmental strategies (Glass et al., 2016)",
        "Styles: women show more transformational and democratic styles (Eagly et al., 1992; Wu et al., 2021) — congruent with gender roles; penalized when adopting incongruent styles (Wang et al., 2013)",
        "Synthesis: barriers are structural/perceptual, not competence-based; implications for organizations"
      ],
      model: "The numbers first: in 2023 only 10.6% of Fortune 500 CEOs were women — less than 1% women of color — and in 2022 women held 30.4% of those companies' board seats (Pew Research Center, 2023). In Lebanon, women represented 29% of senior and middle management in 2019 (World Bank), and data on women's leadership remains scarce. Under-representation persists despite the evidence on performance. Beyond the familiar glass ceiling, research identifies a glass cliff (Ryan & Haslam, 2005): when women do reach leadership, they are over-represented in precarious positions — set up where failure is most likely. Yet the research reviewed in the lecture undercuts any competence explanation for the gap: women are now seen as equally or more competent than men (Eagly et al.); the mere presence of a female leader leads perceivers to anticipate fairer treatment (Joshi & Diekman); female CEOs are positively related to firms' financial performance in gender-egalitarian cultures (Hoobler et al., 2018); and gender-diverse leadership teams pursue environmentally friendly strategies more effectively (Glass et al., 2016). On style, female leaders demonstrate more transformational and more democratic leadership (Eagly et al., 1992; Wu et al., 2021) — styles the behavioral and contemporary literatures associate with effectiveness. The catch is role congruity: these styles are congruent with female gender roles, and when women adopt incongruent styles — say, highly autocratic ones — they tend to be penalized (Wang et al., 2013), a constraint male leaders do not face symmetrically. The synthesis: the obstacles to women's leadership are structural and perceptual — ceilings, cliffs, and role expectations — not deficits of competence or style. Organizations that fix appointment processes (who gets which roles, and when) and decouple style evaluations from gender expectations stand to gain measurably better leadership." }
  ]
},
/* ---------------- WEEK 11 ---------------- */
{
  id: "w11",
  week: 11,
  title: "Motivation",
  blurb: "Early and modern motivation theories, job design, SDT, and motivation under algorithms.",
  sections: [
    { h: "What Is Motivation?", blocks: [
      { t: "def", term: "Motivation", d: "The process by which a person's efforts are energized, directed, and sustained toward attaining a goal. Three key elements: (1) ENERGY, (2) DIRECTION, (3) PERSISTENCE." }
    ]},
    { h: "Early Theories of Motivation", blocks: [
      { t: "def", term: "Maslow's hierarchy of needs theory", d: "Human needs — physiological, safety, social, esteem, and self-actualization — form a hierarchy, and each level must be substantially satisfied before the next need becomes dominant. (Pyramid from bottom to top: physiological → safety → social → esteem → self-actualization.)" },
      { t: "list", title: "Maslow's pyramid: some limits", items: [
        "Very popular in the 1960s–70s, but very little evidence for the ranking of needs or even for the existence of a definite hierarchy at all (Wahba & Bridwell, 1976)",
        "Little support for the prepotent nature of needs and the utility of need theories more generally (Kanfer et al., 2017)",
        "Need theories do not predict specific behaviors (Campbell & Pritchard, 1976)"
      ]},
      { t: "def", term: "Herzberg's two-factor theory (motivation-hygiene theory)", d: "Intrinsic factors are related to job satisfaction and motivation, whereas extrinsic factors are associated with job dissatisfaction. HYGIENE FACTORS: extrinsic factors that remove job dissatisfaction (supervision, company policy, relationship with supervisor, working conditions, salary, relationship with peers, personal life, relationship with subordinates, status, security). MOTIVATORS: intrinsic factors having to do with the job itself (achievement, recognition, the work itself, responsibility, advancement, growth). Herzberg's view: the opposite of satisfaction is NO satisfaction (motivators), and the opposite of dissatisfaction is NO dissatisfaction (hygiene) — two separate continua, unlike the traditional satisfied↔dissatisfied view." },
      { t: "list", title: "Two-factor theory: some limits", items: [
        "Used the critical incident method (“recall times when you felt good or bad about your job”), which introduced self-serving bias",
        "Original samples were white-collar professionals; studies with blue-collar workers have not always replicated his findings"
      ]},
      { t: "def", term: "Three-needs theory (McClelland)", d: "Three ACQUIRED (not innate) needs are major motives in work: NEED FOR ACHIEVEMENT (nAch) — the drive to succeed and excel in relation to a set of standards; NEED FOR POWER (nPow) — the need to make others behave in a way they would not have behaved otherwise; NEED FOR AFFILIATION (nAff) — the desire for friendly and close interpersonal relationships. Evidence: employees high on nAch exhibit more positive moods, greater interest in the task at hand, and perform very well in high-stakes conditions; research also supports the nPow and nAff concepts." }
    ]},
    { h: "Modern Theories of Motivation", blocks: [
      { t: "def", term: "Goal-setting theory", d: "Specific goals increase performance, and difficult goals, when ACCEPTED, result in higher performance than easy goals. Self-generated feedback on progress strengthens the effect." },
      { t: "def", term: "Self-efficacy", d: "An individual's belief that he or she is capable of performing a task." },
      { t: "def", term: "Job design", d: "The way tasks are combined to form complete jobs. JOB SCOPE: the number of different tasks required in a job and the frequency with which they are repeated. JOB ENLARGEMENT: horizontal expansion of a job by increasing job scope. JOB ENRICHMENT: vertical expansion of a job by adding planning and evaluating responsibilities. JOB DEPTH: the degree of control employees have over their work." },
      { t: "def", term: "Job characteristics model (JCM)", d: "A framework for analyzing and designing jobs: five core job dimensions — SKILL VARIETY, TASK IDENTITY, TASK SIGNIFICANCE (→ experienced meaningfulness of the work), AUTONOMY (→ experienced responsibility for outcomes of the work), and FEEDBACK (→ knowledge of the actual results of work activities) — produce outcomes: high internal work motivation, high-quality work performance, high satisfaction with the work, and low absenteeism. The links are moderated by the strength of the employee's GROWTH NEED." },
      { t: "def", term: "Equity theory", d: "An employee compares their job's inputs-outcomes ratio with that of relevant others and then corrects any inequity. If the ratio is equitable — no problem; if inequitable, they see themselves as under-rewarded or over-rewarded. REFERENTS: the persons, systems, or selves against which individuals compare themselves. DISTRIBUTIVE JUSTICE: perceived fairness of the amount and allocation of rewards among individuals. PROCEDURAL JUSTICE: perceived fairness of the process used to determine the distribution of rewards." },
      { t: "def", term: "Expectancy theory", d: "An individual tends to act in a certain way based on the expectation that the act will be followed by a given outcome and on the attractiveness of that outcome to the individual. Three linkages: A — EFFORT–PERFORMANCE linkage (individual effort → individual performance); B — PERFORMANCE–REWARD linkage (individual performance → organizational rewards); C — ATTRACTIVENESS OF REWARD (organizational rewards → individual goals)." }
    ]},
    { h: "Self-Determination Theory (Ryan & Deci, 2000)", blocks: [
      { t: "def", term: "The motivation continuum", d: "From AMOTIVATION through EXTRINSIC MOTIVATION to INTRINSIC MOTIVATION. Extrinsic motivation has four regulation types: EXTERNAL regulation → INTROJECTED regulation → IDENTIFIED regulation → INTEGRATED regulation, the last two lying beyond the self-determination threshold (with intrinsic regulation)." },
      { t: "def", term: "Basic psychological needs", d: "COMPETENCE, RELATEDNESS, and AUTONOMY. “Satisfaction of the three psychological needs will enhance employees' intrinsic motivation” (Gagné & Deci, 2005). Combined, they enhance positive work outcomes such as job satisfaction, effective performance, organizational citizenship behaviors, and well-being." }
    ]},
    { h: "Motivation in the Algorithmic Management Era (instructor addition)", blocks: [
      { t: "list", title: "Six management functions performed by algorithms (Parent-Rocheleau & Parker, 2022)", items: [
        "Monitoring", "Task assignment and/or goal setting", "Performance management", "Scheduling", "Compensation management", "Job termination"
      ]},
      { t: "table", title: "What that means for motivation (Gagné et al., 2022)", cols: ["Function", "Motivational effect"], rows: [
        ["Monitoring", "Decreases autonomy and negatively affects employees' intrinsic motivation"],
        ["Task assignment / goal setting", "Tends to simplify work, making it less motivating (low need for competence)"],
        ["Performance management", "Negatively affects autonomous motivation and can foster a competitive climate"],
        ["Scheduling", "Can be unpredictable and thus impede workers' relatedness at home and at work"],
        ["Compensation management", "Pay-for-performance is linked to decreases in autonomy feelings"],
        ["Job termination", "Work deactivation because of “low performance” impedes workers' autonomy and feelings of competence"]
      ]},
      { t: "def", term: "Motivation-enhancing algorithmic management (Parent-Rocheleau et al., 2024)", d: "System characteristics — ensuring transparency, keeping humans in the loop — and policies and practices — limiting surveillance and monitoring, managing productivity fairly, maintaining pay stability, providing constructive feedback, preserving relationships — support the three psychological needs (autonomy, competence, relatedness) and thus self-determined motivation." }
    ]}
  ],
  mcqs: [
    { q: "The three key elements of motivation are…", o: [
      "energy, direction, and persistence",
      "ability, willingness, and readiness",
      "inputs, outcomes, and referents",
      "valence, instrumentality, and expectancy"
    ], a: 0, e: "Motivation = the process by which a person's efforts are energized (energy), directed (direction), and sustained (persistence) toward a goal." },
    { q: "In Maslow's hierarchy, the correct order from the BOTTOM of the pyramid upward is…", o: [
      "physiological → safety → social → esteem → self-actualization",
      "safety → physiological → esteem → social → self-actualization",
      "physiological → social → safety → self-actualization → esteem",
      "self-actualization → esteem → social → safety → physiological"
    ], a: 0, e: "Bottom-up: physiological, safety, social, esteem, self-actualization — each level must be substantially satisfied before the next becomes dominant." },
    { q: "What does the research evidence say about Maslow's theory?", o: [
      "There is very little evidence for the ranking of needs or even for the existence of a definite hierarchy at all",
      "It is the best-supported motivation theory available",
      "It predicts specific behaviors with high accuracy",
      "It was validated by Herzberg's studies"
    ], a: 0, e: "Wahba & Bridwell (1976) found little evidence for the ranking or hierarchy; Kanfer et al. (2017) found little support for prepotency; need theories don't predict specific behaviors (Campbell & Pritchard, 1976)." },
    { q: "In Herzberg's two-factor theory, salary, working conditions, and supervision are…", o: [
      "hygiene factors — extrinsic factors whose presence removes dissatisfaction but does not motivate",
      "motivators — intrinsic factors that create satisfaction",
      "growth needs that moderate job design",
      "referents for equity comparisons"
    ], a: 0, e: "Hygiene factors (extrinsic: supervision, company policy, salary, working conditions, relationships, status, security) remove dissatisfaction; motivators (intrinsic: achievement, recognition, the work itself, responsibility, advancement, growth) create satisfaction." },
    { q: "A major methodological criticism of Herzberg's research is that…", o: [
      "the critical incident method introduced self-serving bias, and his white-collar samples did not always replicate with blue-collar workers",
      "he never collected any data",
      "he studied only laboratory animals",
      "his sample was exclusively blue-collar factory workers"
    ], a: 0, e: "Asking people to recall good/bad times invites self-serving bias (credit successes to the work itself, blame context), and his original white-collar samples didn't always replicate among blue-collar workers." },
    { q: "In McClelland's three-needs theory, the drive to succeed and excel in relation to a set of standards is the…", o: [
      "need for achievement (nAch)",
      "need for power (nPow)",
      "need for affiliation (nAff)",
      "need for autonomy"
    ], a: 0, e: "nAch = drive to succeed and excel against standards; nPow = making others behave as they otherwise wouldn't; nAff = desire for friendly, close relationships. The three needs are ACQUIRED, not innate." },
    { q: "Goal-setting theory proposes that…", o: [
      "specific goals increase performance, and difficult goals, when accepted, result in higher performance than easy goals",
      "easy goals motivate more because they guarantee success",
      "vague “do your best” goals outperform specific ones",
      "goals only work for white-collar employees"
    ], a: 0, e: "Specific + difficult-but-accepted goals beat easy or vague goals; self-generated feedback on progress strengthens the effect. Self-efficacy — belief in one's task capability — supports goal pursuit." },
    { q: "Adding planning and evaluating responsibilities to a job is called…", o: [
      "job enrichment (vertical expansion)",
      "job enlargement (horizontal expansion)",
      "job rotation",
      "job scope"
    ], a: 0, e: "Enrichment expands a job VERTICALLY with planning/evaluating duties (raising job depth — control over one's work); enlargement expands HORIZONTALLY by increasing job scope (more tasks)." },
    { q: "In the Job Characteristics Model, which three core dimensions combine to produce EXPERIENCED MEANINGFULNESS of the work?", o: [
      "Skill variety, task identity, and task significance",
      "Autonomy, feedback, and job scope",
      "Energy, direction, and persistence",
      "Competence, relatedness, and autonomy"
    ], a: 0, e: "Skill variety + task identity + task significance → meaningfulness; autonomy → experienced responsibility; feedback → knowledge of results. Outcomes: high internal motivation, high-quality performance, high satisfaction, low absenteeism — moderated by employee growth-need strength." },
    { q: "In equity theory, an employee who perceives her outcomes-to-inputs ratio is SMALLER than her colleague's will feel…", o: [
      "under-rewarded inequity",
      "over-rewarded inequity",
      "equity",
      "high distributive justice"
    ], a: 0, e: "Ratio smaller than the referent's → under-rewarded; larger → over-rewarded; equal → equity. Employees then act to correct inequity." },
    { q: "Perceived fairness of the PROCESS used to determine the distribution of rewards is called…", o: [
      "procedural justice",
      "distributive justice",
      "referent comparison",
      "instrumental justice"
    ], a: 0, e: "Procedural justice = fairness of the process; distributive justice = fairness of the amount and allocation of rewards." },
    { q: "“I can work as hard as I want, but my performance score depends on a broken machine” — which expectancy-theory linkage is damaged?", o: [
      "A: the effort–performance linkage",
      "B: the performance–reward linkage",
      "C: the attractiveness of the reward",
      "None — this is an equity problem"
    ], a: 0, e: "Linkage A connects individual effort to individual performance. B connects performance to organizational rewards; C connects rewards to individual goals (attractiveness)." },
    { q: "In self-determination theory, the three basic psychological needs are…", o: [
      "competence, relatedness, and autonomy",
      "achievement, power, and affiliation",
      "existence, relatedness, and growth",
      "energy, direction, and persistence"
    ], a: 0, e: "SDT (Ryan & Deci): satisfying competence, relatedness, and autonomy enhances intrinsic motivation and positive work outcomes (Gagné & Deci, 2005)." },
    { q: "According to Gagné et al. (2022), algorithmic MONITORING affects motivation by…", o: [
      "decreasing autonomy and negatively affecting intrinsic motivation",
      "increasing feelings of competence",
      "strengthening relatedness at work",
      "having no motivational effect"
    ], a: 0, e: "Monitoring decreases autonomy and harms intrinsic motivation — one of six algorithmic functions (monitoring, task assignment/goal setting, performance management, scheduling, compensation, termination) analyzed through SDT." },
    { q: "Which is a recommended feature of MOTIVATION-ENHANCING algorithmic management (Parent-Rocheleau et al., 2024)?", o: [
      "Ensuring transparency and keeping humans in the loop",
      "Maximizing surveillance for accuracy",
      "Making pay fully unpredictable to spur effort",
      "Removing all human contact from management"
    ], a: 0, e: "System characteristics: transparency, humans in the loop. Practices: limiting surveillance, managing productivity fairly, maintaining pay stability, constructive feedback, preserving relationships — all supporting autonomy, competence, relatedness." }
  ],
  cases: [
    { title: "The Mystery of the Departing Designers at Lamsa Studio",
      scenario: "Lamsa Studio doubled designers' salaries, refurbished the office, and hired a friendlier supervisor after an exodus last year. Complaints stopped — yet engagement scores stayed flat and two more strong designers just resigned, saying the work itself is dull: each designer executes one tiny step of templated client work, never sees the final product, rarely hears how clients use it, and has no say in how to do the work. The remaining designers are split: the ambitious ones echo the leavers; a few others say they are content to clock in, do simple work, and go home. The CEO is baffled: “We fixed everything people complained about!”",
      qs: [
        { q: "Use Herzberg's two-factor theory to explain why fixing complaints did not create motivation.", a: "Salary, working conditions (office), and supervision are HYGIENE factors — extrinsic factors whose improvement removes DISSATISFACTION but produces only “no dissatisfaction,” not satisfaction. Motivation requires MOTIVATORS — intrinsic factors in the job itself: achievement, recognition, the work itself, responsibility, advancement, growth. Lamsa moved people from dissatisfied to not-dissatisfied while leaving “no satisfaction” untouched: the two continua are separate." },
        { q: "Diagnose the designers' jobs with the five core dimensions of the Job Characteristics Model.", a: "SKILL VARIETY: low — one tiny templated step. TASK IDENTITY: low — they never see a whole, finished piece. TASK SIGNIFICANCE: low/unknown — they rarely learn the client impact. AUTONOMY: low — no say in how to work. FEEDBACK: low — little knowledge of results. Low scores across all five dimensions undermine experienced meaningfulness, experienced responsibility, and knowledge of results — hence low internal motivation and the resignations." },
        { q: "Prescribe concrete job-design changes using the lecture's terms (enlargement, enrichment, JCM-based redesign).", a: "JOB ENLARGEMENT (horizontal): widen job scope so designers handle multiple steps (raises skill variety and task identity). JOB ENRICHMENT (vertical): add planning and evaluating responsibilities — let designers plan their approach and review outcomes (raises autonomy/job depth and responsibility). JCM levers: assign whole deliverables (task identity), share client outcomes and metrics (feedback, task significance), and allow discretion over methods (autonomy)." },
        { q: "Why are some designers content with the simple jobs? Use the JCM's moderator and McClelland to explain the split.", a: "The JCM's effects are moderated by GROWTH-NEED STRENGTH: employees with strong growth needs respond strongly to enriched jobs; those with weak growth needs (the content clock-in group) do not. McClelland adds that needs are acquired and differ: high-nAch designers crave achievement against standards (the ambitious leavers), while colleagues with different need profiles (e.g., higher nAff — comfortable relationships) may be satisfied by a pleasant, undemanding workplace." }
      ]},
    { title: "DriveNow: Motivation by Algorithm",
      scenario: "DriveNow's ride-hailing drivers are managed end-to-end by an app: it tracks location and acceptance rates minute-by-minute, assigns rides with no explanation, sets weekly “quests” it picks automatically, posts each driver's ranking against strangers across the city, changes per-kilometer pay without notice, schedules peak-hour obligations that collide with family time, and deactivates drivers whose scores dip — no human appeal. Drivers describe feeling watched, replaceable, and clueless about why decisions happen. Management wants the efficiency of the algorithm without burning out the fleet, and asks you to redesign the system.",
      qs: [
        { q: "Identify the six algorithmic management functions (Parent-Rocheleau & Parker, 2022) as they appear at DriveNow.", a: "MONITORING (minute-by-minute tracking of location/acceptance), TASK ASSIGNMENT AND/OR GOAL SETTING (auto-assigned rides and weekly quests), PERFORMANCE MANAGEMENT (city-wide rankings), SCHEDULING (imposed peak-hour obligations), COMPENSATION MANAGEMENT (per-kilometer pay changed without notice), JOB TERMINATION (automatic deactivation for low scores)." },
        { q: "Using SDT, explain which basic psychological need each practice frustrates.", a: "AUTONOMY: constant monitoring, unexplained assignments, pay-for-performance changes, and deactivation all decrease autonomy (monitoring and compensation effects per Gagné et al., 2022). COMPETENCE: simplified, algorithm-chosen tasks and termination for “low performance” impede feelings of competence. RELATEDNESS: unpredictable scheduling collides with family and work relationships, and competitive rankings against strangers foster a competitive climate rather than connection." },
        { q: "Where does DriveNow's ranking system also create equity-theory problems?", a: "Drivers compare their outcomes/inputs ratios with REFERENTS — here, strangers ranked across the city whose conditions they cannot see. Opaque, shifting pay rates make perceived DISTRIBUTIVE JUSTICE (fairness of reward amounts) impossible to assess, and no-notice changes plus appeal-less deactivation destroy PROCEDURAL JUSTICE (fairness of the process determining rewards). Perceived under-reward predicts corrective behavior: reduced effort, gaming the metrics, or quitting." },
        { q: "Redesign DriveNow using the motivation-enhancing algorithmic management framework (Parent-Rocheleau et al., 2024).", a: "System characteristics: ENSURE TRANSPARENCY (explain how assignment, pay, and scores work) and KEEP HUMANS IN THE LOOP (human review and appeal before deactivation). Policies and practices: LIMIT SURVEILLANCE AND MONITORING to what is necessary; MANAGE PRODUCTIVITY FAIRLY (realistic, explained quests); MAINTAIN PAY STABILITY (advance notice, stable base); PROVIDE CONSTRUCTIVE FEEDBACK (developmental, not just rankings); PRESERVE RELATIONSHIPS (predictable schedules respecting family time, less stranger-vs-stranger competition). These support autonomy, competence, and relatedness → self-determined motivation." }
      ]}
  ],
  essays: [
    { q: "Compare Maslow's hierarchy of needs, Herzberg's two-factor theory, and McClelland's three-needs theory. What does each claim, what is the evidence for and against each, and what practical guidance survives the criticism?",
      outline: [
        "Maslow: five needs in a hierarchy (physiological, safety, social, esteem, self-actualization); substantial satisfaction of each level before the next dominates",
        "Maslow critique: little evidence for ranking or definite hierarchy (Wahba & Bridwell, 1976); little support for prepotency (Kanfer et al., 2017); doesn't predict specific behaviors (Campbell & Pritchard, 1976)",
        "Herzberg: hygiene (extrinsic — remove dissatisfaction) vs. motivators (intrinsic — create satisfaction); two continua, not one",
        "Herzberg critique: critical incident method → self-serving bias; white-collar samples, blue-collar replication failures",
        "McClelland: acquired needs — nAch, nPow, nAff; evidence: high-nAch employees show positive moods, task interest, high-stakes performance; nPow and nAff supported",
        "Surviving guidance: enrich the work itself, don't expect pay/conditions alone to motivate; diagnose individual need profiles"
      ],
      model: "Maslow's hierarchy of needs proposes five needs — physiological, safety, social, esteem, and self-actualization — arranged so that each level must be substantially satisfied before the next becomes dominant. Its intuitive appeal made it hugely popular in the 1960s and 1970s, but the evidence is unkind: very little support exists for the ranking of needs or even for a definite hierarchy at all (Wahba & Bridwell, 1976), there is little support for the prepotent nature of needs or the general utility of need theories (Kanfer et al., 2017), and such theories do not predict specific behaviors (Campbell & Pritchard, 1976). Herzberg's two-factor (motivation-hygiene) theory makes a sharper claim: extrinsic HYGIENE factors — supervision, company policy, salary, working conditions, relationships, status, security — can only remove dissatisfaction, while intrinsic MOTIVATORS — achievement, recognition, the work itself, responsibility, advancement, growth — create satisfaction and motivation. Satisfaction and dissatisfaction thus sit on two separate continua: the opposite of satisfaction is merely no satisfaction. The critique here is methodological: the critical incident method (“recall when you felt good or bad about your job”) invites self-serving bias — people credit the work for highs and blame the context for lows — and his white-collar professional samples did not always replicate among blue-collar workers. McClelland's three-needs theory shifts from universal hierarchies to ACQUIRED needs: the need for achievement (drive to succeed against standards), need for power (make others behave as they otherwise wouldn't), and need for affiliation (friendly, close relationships). Its evidence is comparatively solid: high-nAch employees show more positive moods, greater task interest, and perform very well in high-stakes conditions, and research supports nPow and nAff. What survives across the three? First, money and conditions are necessary but insufficient — they prevent dissatisfaction more than they energize. Second, the work itself is the prime mover: achievement, responsibility, and growth motivate. Third, people differ in their (learned) need profiles, so motivation should be diagnosed individually, not assumed from a universal pyramid." },
    { q: "Explain expectancy theory and equity theory, and show how the two together explain why a well-funded incentive plan can still fail to motivate.",
      outline: [
        "Expectancy: action depends on expectation that the act is followed by an outcome and on the outcome's attractiveness",
        "Three linkages: A effort→performance; B performance→reward; C reward attractiveness (reward→individual goals); failure of ANY link kills motivation",
        "Equity: compare own outcomes/inputs ratio with referents (persons, systems, selves); inequity (under/over-reward) triggers correction",
        "Justice concepts: distributive (amount/allocation fairness), procedural (process fairness)",
        "Synthesis: incentive plans fail if effort can't produce performance (A), performance isn't reliably rewarded (B), rewards aren't attractive (C), or ratios feel unfair vs. referents even when absolute pay is high",
        "Practical checklist for designing incentives"
      ],
      model: "Expectancy theory holds that an individual tends to act in a certain way based on the expectation that the act will be followed by a given outcome and on the attractiveness of that outcome. The expectancy model chains three linkages: A, the effort–performance linkage — will my effort actually produce performance?; B, the performance–reward linkage — will performance actually bring organizational rewards?; and C, the attractiveness of the reward — do those rewards serve my individual goals? Motivation requires all three: a broken machine (A), a biased appraisal (B), or an unwanted prize (C) each zeroes the chain. Equity theory adds a social comparison: employees compare their outcomes-to-inputs ratio with that of relevant REFERENTS — other persons, systems, or themselves in past roles — and act to correct perceived inequity, whether under-rewarded or over-rewarded. Two justice perceptions govern the verdict: distributive justice, the perceived fairness of the amount and allocation of rewards, and procedural justice, the perceived fairness of the process that determines them. Together the theories explain failing incentive plans precisely. A company may budget generous bonuses (high absolute outcomes) and still demotivate: if targets are unreachable, the effort–performance link snaps; if bonus allocation seems arbitrary or political, the performance–reward link and procedural justice collapse; if rewards are uniform gift cards nobody values, attractiveness fails; and if a colleague with visibly fewer inputs earns the same bonus, under-reward inequity triggers reduced effort, demands for redress, or exit — even though pay rose in absolute terms. The design checklist follows: make performance attainable through effort (training, resources), tie rewards to performance through transparent, consistently applied procedures, tailor rewards to what recipients actually want, and mind the comparisons employees inevitably make." },
    { q: "“Algorithmic management threatens precisely the psychological needs that fuel motivation.” Present self-determination theory (the continuum and the basic needs), then use it to analyze how the six algorithmic management functions affect motivation and how systems can be redesigned to enhance it.",
      outline: [
        "SDT continuum: amotivation → extrinsic motivation (external, introjected, identified, integrated regulation) → intrinsic motivation; self-determination threshold before identified/integrated",
        "Basic needs: competence, relatedness, autonomy; satisfying all three enhances intrinsic motivation (Gagné & Deci, 2005) and outcomes (satisfaction, performance, OCB, well-being)",
        "Six functions (Parent-Rocheleau & Parker, 2022): monitoring; task assignment/goal setting; performance management; scheduling; compensation management; job termination",
        "Effects (Gagné et al., 2022): monitoring ↓autonomy/intrinsic motivation; simplified tasks ↓competence; performance management ↓autonomous motivation, competitive climate; unpredictable scheduling ↓relatedness; pay-for-performance ↓autonomy; deactivation ↓autonomy & competence",
        "Redesign (Parent-Rocheleau et al., 2024): transparency; humans in the loop; limit surveillance; fair productivity management; pay stability; constructive feedback; preserve relationships → needs satisfaction → self-determined motivation",
        "Conclusion: the algorithm's design, not its existence, decides the motivational outcome"
      ],
      model: "Self-determination theory (Ryan & Deci, 2000) maps motivation on a continuum from amotivation, through four types of extrinsic motivation — external regulation, introjected regulation, identified regulation, and integrated regulation — to intrinsic motivation, with the self-determination threshold crossed at identified regulation: beyond it, people act from endorsed values rather than external pushes. What moves a person along the continuum is the satisfaction of three basic psychological needs — competence, relatedness, and autonomy: “satisfaction of the three psychological needs will enhance employees' intrinsic motivation” (Gagné & Deci, 2005), and together they raise job satisfaction, effective performance, organizational citizenship behaviors, and well-being. Algorithmic management matters because organizations now delegate six management functions to algorithms (Parent-Rocheleau & Parker, 2022): monitoring, task assignment and/or goal setting, performance management, scheduling, compensation management, and job termination. Analyzed through SDT (Gagné et al., 2022), each function tends to frustrate a need: monitoring decreases autonomy and harms intrinsic motivation; algorithmic task assignment simplifies work, starving the need for competence; performance management undermines autonomous motivation and fosters a competitive climate; unpredictable scheduling impedes relatedness at home and at work; pay-for-performance compensation reduces feelings of autonomy; and automatic deactivation for “low performance” strikes both autonomy and competence. Hence the statement is accurate — by default. But the lecture's final framework (Parent-Rocheleau et al., 2024) shows the threat is a design choice, not destiny: systems that ensure transparency and keep humans in the loop, paired with policies that limit surveillance and monitoring, manage productivity fairly, maintain pay stability, provide constructive feedback, and preserve relationships, support autonomy, competence, and relatedness — and thereby self-determined motivation. The managerial conclusion: judge an algorithmic system by the same standard as a human manager — whether it feeds or starves the three needs that fuel motivation." }
  ]
},
/* ---------------- WEEK 12 ---------------- */
{
  id: "w12",
  week: 12,
  title: "Managing Groups and Teams",
  blurb: "Group development, structure, conflict, teams vs. groups, and psychological safety.",
  sections: [
    { h: "Groups and Group Development", blocks: [
      { t: "def", term: "Group", d: "Two or more interacting and interdependent individuals who come together to achieve specific goals. FORMAL groups are defined by the organization; INFORMAL groups arise naturally." },
      { t: "list", title: "Stages of group development (5)", items: [
        "Stage 1 — Forming",
        "Stage 2 — Storming",
        "Stage 3 — Norming",
        "Stage 4 — Performing",
        "Stage 5 — Adjourning"
      ]},
      { t: "list", title: "Limits of the stage model", items: [
        "Assumes the group becomes more effective as it progresses through the first four stages — not always true; group behavior is more complex",
        "The process is not always linear; several stages may occur simultaneously; groups may regress",
        "Some conflict can be conducive to high performance",
        "It ignores the organizational context (culture, structure, leadership, resources, etc.)"
      ]},
      { t: "p", text: "Group performance/satisfaction model: external conditions imposed on the group and group member resources feed into group structure; group structure, group processes, and group tasks together shape performance and satisfaction." },
      { t: "list", title: "External conditions imposed on the group", items: [
        "Organization's strategy", "Authority relationships", "Formal rules and regulations", "Availability of resources", "Employee selection criteria"
      ]},
      { t: "list", title: "Group member resources", items: [
        "Knowledge", "Abilities", "Skills", "Personality traits"
      ]}
    ]},
    { h: "Group Structure", blocks: [
      { t: "def", term: "Role", d: "Behavior patterns expected of someone occupying a given position in a social unit." },
      { t: "def", term: "Norms", d: "Standards or expectations that are accepted and shared by a group's members." },
      { t: "def", term: "Status", d: "A prestige grading, position, or rank within a group (status systems)." },
      { t: "def", term: "Social loafing", d: "The tendency for individuals to expend less effort when working collectively than when working individually (a group-size effect)." },
      { t: "def", term: "Group cohesiveness", d: "The degree to which group members are attracted to one another and share the group's goals. Cohesiveness × goal alignment matrix: high cohesiveness + high alignment with organizational goals → STRONG increase in productivity; low cohesiveness + high alignment → moderate increase; high cohesiveness + low alignment → DECREASE in productivity; low cohesiveness + low alignment → no significant effect." }
    ]},
    { h: "Group Processes: Conflict", blocks: [
      { t: "def", term: "Conflict", d: "Perceived incompatible differences that result in interference or opposition." },
      { t: "list", title: "Three views of conflict", items: [
        "Traditional view: all conflict is bad and must be avoided",
        "Human relations view: conflict is a natural and inevitable outcome in any group",
        "Interactionist view: some conflict is NECESSARY for a group to perform effectively"
      ]},
      { t: "def", term: "Functional vs. dysfunctional conflicts", d: "Functional conflicts support a group's goals and improve its performance; dysfunctional conflicts prevent a group from achieving its goals. The conflict–performance curve is an inverted U: at low/no conflict the group is apathetic, stagnant, unresponsive to change, lacking new ideas (dysfunctional → low performance); at an OPTIMAL level conflict is functional — the group is viable, self-critical (high performance); at high conflict the group is disruptive, chaotic, uncooperative (dysfunctional → low performance)." },
      { t: "list", title: "Types of conflict", items: [
        "Task conflict: conflict over content and goals of the work",
        "Relationship conflict: conflict based on interpersonal relationships",
        "Process conflict: conflict over how work gets done"
      ]},
      { t: "list", title: "How to resolve conflicts? (Behfar et al., 2008)", items: [
        "Voting as a procedure",
        "Compromise or consensus to reach agreement",
        "Discussion or debate of ideas and opinions",
        "Open communication: the level of affect or emotion in team discussions",
        "Specific solutions for fixing or responding to specific problems",
        "Avoidance or ignoring of conflict by the team",
        "Rotation of responsibilities: procedures for allocating responsibilities within the team"
      ]},
      { t: "table", title: "Type of conflict → resolution that increases performance and satisfaction (Behfar et al., 2008)", cols: ["Type of conflict", "Resolution approach"], rows: [
        ["Task", "Use discussion/debate and open communication to reach compromise/consensus"],
        ["Relationship", "Use discussion/debate and specific solutions to avoid/ignore conflicts [decreased satisfaction]"],
        ["Procedure (process)", "Discussion/debate and compromise/consensus to establish rotating responsibilities"]
      ]},
      { t: "p", text: "Group tasks: it is the complexity and interdependence of tasks that influence a group's effectiveness." }
    ]},
    { h: "Groups vs. Teams", blocks: [
      { t: "def", term: "Work teams", d: "Groups whose members work intensely on a specific, common goal using their positive synergy, individual and mutual accountability, and complementary skills." },
      { t: "def", term: "Work groups", d: "Groups that interact primarily to share information and to make decisions to help each member do their job more efficiently and effectively." },
      { t: "table", title: "Groups versus teams", cols: ["Work teams", "Work groups"], rows: [
        ["Leadership role is shared", "One leader clearly in charge"],
        ["Accountable to self and team", "Accountable only to self"],
        ["Team creates specific purpose", "Purpose is same as broader organizational purpose"],
        ["Work is done collectively", "Work is done individually"],
        ["Meetings feature open-ended discussion and collaborative problem-solving", "Meetings characterized by efficiency; no collaboration or open-ended discussion"],
        ["Performance measured directly by evaluating collective work output", "Performance measured indirectly by its influence on others"],
        ["Work is decided upon and done together; can be quickly assembled, deployed, refocused, and disbanded", "Work decided by group leader and delegated to individual members"]
      ]},
      { t: "list", title: "Characteristics of effective teams (9)", items: [
        "Clear goals", "Relevant skills", "Mutual trust", "Unified commitment", "Good communication", "Negotiating skills", "Appropriate leadership", "Internal support", "External support"
      ]}
    ]},
    { h: "Team Psychological Safety (instructor addition)", blocks: [
      { t: "def", term: "Team psychological safety", d: "“A shared belief that the team is safe for interpersonal risk taking” (Edmondson, 1999). It DIFFERS from group cohesiveness: cohesiveness can reduce willingness to disagree with others (e.g., groupthink — Janis, 1982). Psychological safety is associated with learning behavior (seeking feedback, sharing information, asking for help, speaking up) and with individual and team performance (Edmondson, 1999; Edmondson & Bransby, 2023). Example: Google's Project Aristotle." },
      { t: "list", title: "Edmondson's (1999) psychological safety scale — sample items", items: [
        "If you make a mistake on this team, it is often held against you (reverse-scored)",
        "Members of this team are able to bring up problems and tough issues",
        "People on this team sometimes reject others for being different (reverse-scored)",
        "It is safe to take a risk on this team",
        "It is difficult to ask other members of this team for help (reverse-scored)",
        "No one on this team would deliberately act in a way that undermines my efforts",
        "Working with members of this team, my unique skills and talents are valued and utilized"
      ]},
      { t: "list", title: "How to foster team psychological safety", items: [
        "Care about team members as individuals",
        "Actively solicit questions",
        "Offer employees multiple ways to share their thoughts",
        "Show that you value and appreciate ideas",
        "Promote positive dialogue and discussion",
        "Be specific in your information, expectations, and commitments",
        "Explain the reasons for change",
        "Acknowledge your mistakes"
      ]}
    ]}
  ],
  mcqs: [
    { q: "A group is defined as…", o: [
      "two or more interacting and interdependent individuals who come together to achieve specific goals",
      "any collection of people in the same place",
      "employees who report to the same manager",
      "a unit that formulates its own competitive strategy"
    ], a: 0, e: "Group = two or more interacting, INTERDEPENDENT individuals pursuing specific goals; can be formal or informal." },
    { q: "What is the correct order of the five stages of group development?", o: [
      "Forming → storming → norming → performing → adjourning",
      "Forming → norming → storming → performing → adjourning",
      "Storming → forming → performing → norming → adjourning",
      "Norming → forming → storming → adjourning → performing"
    ], a: 0, e: "Forming, storming, norming, performing, adjourning — though the lecture stresses the process is not always linear and groups may regress." },
    { q: "Which is a documented LIMIT of the stages-of-group-development model?", o: [
      "It ignores the organizational context (culture, structure, leadership, resources)",
      "It includes too many stages to remember",
      "It only applies to virtual teams",
      "It assumes conflict always improves performance"
    ], a: 0, e: "Limits: progression≠effectiveness, non-linear, simultaneous stages, regression possible, some conflict is good, and it ignores organizational context." },
    { q: "Standards or expectations that are accepted and shared by a group's members are…", o: [
      "norms",
      "roles",
      "statuses",
      "tasks"
    ], a: 0, e: "Norms = shared standards/expectations. Roles = expected behavior patterns for a position; status = prestige grading or rank." },
    { q: "The tendency for individuals to expend less effort when working collectively than individually is…", o: [
      "social loafing",
      "groupthink",
      "satisficing",
      "storming"
    ], a: 0, e: "Social loafing — a group-size effect on individual effort." },
    { q: "A highly cohesive team whose own goals OPPOSE the organization's goals will most likely show…", o: [
      "a decrease in productivity",
      "a strong increase in productivity",
      "a moderate increase in productivity",
      "no effect on productivity"
    ], a: 0, e: "Cohesiveness × alignment: high cohesiveness + low alignment = DECREASE (a united group pulling the wrong way). High+high = strong increase; low+high = moderate increase; low+low = no significant effect." },
    { q: "The interactionist view of conflict holds that…", o: [
      "some conflict is necessary for a group to perform effectively",
      "all conflict is bad and must be avoided",
      "conflict is natural and inevitable but never useful",
      "conflict should always be maximized"
    ], a: 0, e: "Traditional = all bad; human relations = natural and inevitable; interactionist = SOME conflict is necessary for effective performance." },
    { q: "On the conflict–performance curve, a group at the LOW/NO-conflict extreme is typically…", o: [
      "apathetic, stagnant, unresponsive to change, lacking new ideas",
      "viable, self-critical, and innovative",
      "disruptive, chaotic, and uncooperative",
      "performing at its peak"
    ], a: 0, e: "Too little conflict is dysfunctional (apathy, stagnation) just as too much is (chaos); the optimal middle level is functional — the group is viable and self-critical." },
    { q: "Conflict about HOW work gets done is called…", o: [
      "process conflict",
      "task conflict",
      "relationship conflict",
      "status conflict"
    ], a: 0, e: "Process = how work gets done; task = content and goals of the work; relationship = interpersonal." },
    { q: "According to Behfar et al. (2008), TASK conflict is best resolved by…", o: [
      "discussion/debate and open communication to reach compromise or consensus",
      "avoiding and ignoring the conflict entirely",
      "letting the leader impose a solution",
      "rotating responsibilities only"
    ], a: 0, e: "Task conflict → discussion/debate + open communication toward compromise/consensus. Relationship conflict → discussion plus specific solutions and some avoidance (with decreased satisfaction); procedure conflict → debate + compromise/consensus to establish rotating responsibilities." },
    { q: "Which statement describes a work TEAM rather than a work group?", o: [
      "Members work intensely on a specific, common goal using positive synergy, individual AND mutual accountability, and complementary skills",
      "Members interact primarily to share information and help each member do their own job",
      "One leader is clearly in charge and delegates work to individuals",
      "Performance is measured indirectly through influence on others"
    ], a: 0, e: "Teams: shared leadership, mutual accountability, collective work, performance measured by collective output. Groups: information sharing, individual accountability and work." },
    { q: "Which of the following is among the nine characteristics of effective teams?", o: [
      "Mutual trust",
      "Maximum size",
      "Identical personalities",
      "Constant supervision"
    ], a: 0, e: "The nine: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, internal support, external support." },
    { q: "Team psychological safety is defined as…", o: [
      "“a shared belief that the team is safe for interpersonal risk taking” (Edmondson, 1999)",
      "the degree to which members are attracted to one another",
      "the absence of any disagreement in a team",
      "a formal HR policy protecting whistleblowers"
    ], a: 0, e: "Edmondson's definition — a SHARED belief about interpersonal risk taking, linked to learning behavior and performance (e.g., Google's Project Aristotle)." },
    { q: "How does psychological safety DIFFER from group cohesiveness?", o: [
      "Cohesiveness can reduce willingness to disagree (e.g., groupthink), while psychological safety makes it safe to speak up and take interpersonal risks",
      "They are identical concepts",
      "Psychological safety requires members to like each other; cohesiveness does not",
      "Cohesiveness improves learning behavior; psychological safety does not"
    ], a: 0, e: "The lecture stresses the distinction: cohesion can suppress dissent (Janis's groupthink), whereas psychological safety enables feedback seeking, information sharing, asking for help, and speaking up." },
    { q: "Which practice FOSTERS team psychological safety?", o: [
      "Acknowledging your own mistakes as a leader",
      "Holding every mistake against the person who made it",
      "Rejecting members who are different",
      "Keeping expectations vague to stay flexible"
    ], a: 0, e: "Foster it by caring about members as individuals, soliciting questions, offering multiple ways to share, valuing ideas, promoting dialogue, being specific about expectations, explaining change, and acknowledging mistakes — the scale's reverse items (mistakes held against you, rejection for being different) mark its absence." }
  ],
  cases: [
    { title: "The Task Force That Almost Tore Itself Apart",
      scenario: "Nadia assembles a six-person cross-functional task force to redesign Karam Bank's onboarding process in eight weeks. Week one is polite and unproductive — members size each other up and wait for direction. By week three, arguments erupt: marketing and IT clash over WHAT the new process should prioritize (speed vs. compliance), two members trade personal jabs and stop talking, and everyone fights about WHO should run meetings and allocate work. Nadia is tempted to suppress all disagreement, remembering that her last, ultra-friendly committee — which never argued about anything — produced nothing new and missed market shifts entirely. By week six, the group has agreed on ground rules, meeting leadership rotates, debate is energetic but civil, and a creative compromise design is taking shape.",
      qs: [
        { q: "Map the task force's journey onto the stages of group development, citing evidence for each stage reached.", a: "FORMING (week one: polite, unproductive, waiting for direction), STORMING (week three: conflict over priorities, interpersonal jabs, fights over leadership), NORMING (week six: ground rules agreed, rotating leadership accepted), and movement into PERFORMING (energetic, civil debate producing the compromise design). ADJOURNING will come when the eight-week task force disbands. The lecture's caveats apply: stages overlapped and the group could regress." },
        { q: "Classify the three conflicts of week three using the lecture's typology.", a: "Speed vs. compliance is TASK conflict (content and goals of the work). The personal jabs are RELATIONSHIP conflict (interpersonal). The fight over who runs meetings and allocates work is PROCESS conflict (how work gets done)." },
        { q: "Use the three views of conflict and the conflict–performance curve to evaluate Nadia's temptation to suppress all disagreement.", a: "Suppressing all conflict reflects the TRADITIONAL view (all conflict is bad). The HUMAN RELATIONS view sees conflict as natural and inevitable; the INTERACTIONIST view — endorsed by the curve — holds SOME conflict is necessary for effectiveness. Her previous conflict-free committee sat at the curve's low extreme: apathetic, stagnant, unresponsive to change, lacking new ideas — low performance. The goal is the OPTIMAL level: functional conflict that keeps the group viable and self-critical without tipping into disruptive chaos." },
        { q: "Prescribe resolution approaches for each conflict type using Behfar et al. (2008).", a: "TASK conflict (speed vs. compliance): discussion/debate with open communication to reach compromise/consensus — exactly the creative compromise emerging. RELATIONSHIP conflict (the jabs): discussion plus specific solutions to the specific problems, and some deliberate avoidance/ignoring of personal issues (noting satisfaction may still dip). PROCESS conflict (who leads): discussion/debate and compromise/consensus to establish ROTATING RESPONSIBILITIES — which the group adopted (rotating meeting leadership)." }
      ]},
    { title: "Two Units, One Hospital",
      scenario: "Rafik Hospital's two intensive-care units look identical on paper, yet behave differently. In Unit A, nurses freely flag near-misses, question physicians' orders when unsure, and run weekly “what did we almost get wrong?” reviews; errors are treated as learning material, the head physician openly admits her own, and junior staff say their unique skills are valued. In Unit B, the team is extremely tight-knit — colleagues socialize constantly and pride themselves on never disagreeing — but a nurse was recently mocked for asking for help, mistakes are quietly hidden because “they're held against you,” and audits show Unit B repeats the same medication errors. Management is puzzled: B's cohesion scores are the hospital's highest, yet A keeps outperforming it.",
      qs: [
        { q: "Define team psychological safety and contrast Units A and B on it, citing the case's echoes of Edmondson's scale items.", a: "Team psychological safety is “a shared belief that the team is safe for interpersonal risk taking” (Edmondson, 1999). Unit A is high: members bring up problems and tough issues, it is safe to take risks (questioning orders), asking for help is normal, and unique skills are valued. Unit B is low — directly mirroring the reverse-scored scale items: mistakes ARE held against you, it IS difficult to ask for help (the mocked nurse), and people are rejected for deviating." },
        { q: "Unit B is highly cohesive yet underperforms. Explain using the lecture's distinction between cohesiveness and psychological safety, plus groupthink.", a: "Cohesiveness (attraction among members, shared goals) is NOT the same as psychological safety: the lecture stresses cohesiveness can REDUCE willingness to disagree — the groupthink dynamic (Janis, 1982). B's pride in never disagreeing suppresses dissent and error reporting, so the unit cannot learn. Also, by the cohesiveness×alignment matrix, a highly cohesive group whose operative norms (hide mistakes, don't question) misalign with organizational goals (patient safety) can see productivity decrease." },
        { q: "Which learning behaviors — and which outcomes — does psychological safety enable in Unit A according to the research cited in class?", a: "Learning behaviors: seeking feedback, sharing information, asking for help, speaking up (flagging near-misses, questioning orders, the weekly review). Edmondson (1999) and Edmondson & Bransby (2023) link psychological safety to these behaviors and to individual and team performance — consistent with A's superior audit results. Google's Project Aristotle similarly found psychological safety central to team effectiveness." },
        { q: "Give Unit B's head physician five concrete actions from the lecture's list to build psychological safety.", a: "From “how to foster team psychological safety”: (1) acknowledge your own mistakes (model fallibility as A's chief does); (2) actively solicit questions in rounds; (3) offer multiple ways to share thoughts (anonymous reporting, one-on-ones); (4) show that ideas are valued and appreciated (thank, credit, and act on reports); (5) be specific in information, expectations, and commitments (e.g., a clear no-blame near-miss protocol) — plus care about members as individuals, promote positive dialogue, and explain the reasons for change." }
      ]}
  ],
  essays: [
    { q: "“The more cohesive the group, the better it performs.” Critically evaluate this claim using group structure concepts (norms, status, size, social loafing), the cohesiveness–alignment matrix, and team psychological safety.",
      outline: [
        "Define cohesiveness: attraction among members + shared goals",
        "The matrix: productivity depends on alignment of group goals with organizational goals — high cohesion + high alignment = strong increase; high cohesion + low alignment = DECREASE; low+high = moderate increase; low+low = no significant effect",
        "Structure caveats: norms set output standards (Hawthorne echo); social loafing in larger groups; status systems shape voice",
        "Psychological safety ≠ cohesiveness: cohesion can suppress dissent (groupthink); safety enables speaking up, learning, performance (Edmondson; Project Aristotle)",
        "Conclusion: cohesion amplifies whatever direction the group points; performance needs alignment + safety, not warmth alone"
      ],
      model: "Group cohesiveness is the degree to which members are attracted to one another and share the group's goals — and intuition says more is better. The lecture's cohesiveness–alignment matrix breaks that intuition: when cohesiveness is high AND the group's goals align with the organization's, productivity rises strongly; with low cohesiveness but high alignment it rises moderately; with low cohesiveness and low alignment there is no significant effect; but with HIGH cohesiveness and LOW alignment, productivity DECREASES — a united group marching efficiently in the wrong direction. Group structure explains the machinery: norms — the shared standards a group accepts — set what “a fair day's work” means, so a cohesive group enforces its norms more powerfully, for good or ill; status systems determine whose voice counts; and as size grows, social loafing — expending less effort collectively than individually — dilutes contributions unless accountability is preserved. The deepest correction comes from psychological safety: Edmondson (1999) defines it as a shared belief that the team is safe for interpersonal risk taking, and the lecture stresses it DIFFERS from cohesiveness — indeed, cohesion can reduce willingness to disagree, the very dynamic of groupthink (Janis, 1982). A tight-knit team that prizes harmony may hide mistakes and silence doubts, while a psychologically safe team seeks feedback, shares information, asks for help, and speaks up — behaviors tied to individual and team performance (Edmondson & Bransby, 2023; Google's Project Aristotle). The claim is therefore false as stated: cohesiveness is an amplifier, not a guarantee. High performance requires cohesion pointed at organizational goals, norms that value candor, controlled group size or clear accountability against loafing, and psychological safety so that disagreement — the functional kind of conflict — stays possible." },
    { q: "Distinguish work groups from work teams, and explain what makes teams effective. When is a team genuinely needed rather than a group?",
      outline: [
        "Definitions: work groups (share information, decisions to help each member do their own job) vs. work teams (intense work on specific common goal; positive synergy; individual AND mutual accountability; complementary skills)",
        "Contrast table: leadership (one leader vs. shared), accountability (self vs. self+team), purpose (organizational vs. team-specific), work (individual vs. collective), meetings (efficiency vs. open-ended collaboration), performance measurement (indirect vs. collective output), agility of teams",
        "Nine characteristics of effective teams: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, internal support, external support",
        "Plus psychological safety as the modern addition (Edmondson; Project Aristotle)",
        "When teams: complex, interdependent tasks (group tasks point); when individual work suffices, a group is cheaper and simpler"
      ],
      model: "Work groups interact primarily to share information and make decisions that help each member do their own job more efficiently and effectively; work teams work intensely on a specific, common goal using positive synergy, individual and mutual accountability, and complementary skills. The contrast runs through every feature: groups have one leader clearly in charge, teams share the leadership role; group members are accountable only for themselves, team members for themselves and the team; a group's purpose is the broader organizational purpose, a team creates its own specific purpose; group work is done individually, team work collectively; group meetings prize efficiency without open-ended discussion, team meetings live on open-ended discussion and collaborative problem-solving; group performance is measured indirectly through influence on others, team performance directly by evaluating collective work output; and teams can be quickly assembled, deployed, refocused, and disbanded. Effectiveness, however, is not automatic — the lecture lists nine characteristics of effective teams: clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership, and both internal support (training, systems) and external support (resources from the organization). Modern research adds team psychological safety — the shared belief that the team is safe for interpersonal risk taking — which Google's Project Aristotle and Edmondson's work tie to learning behavior and performance. As for when a team is worth its overhead: the lecture notes that it is the complexity and interdependence of tasks that influence a group's effectiveness — when work is complex and interdependent, requiring synergy among complementary skills and mutual accountability, a true team pays off; when tasks are separable and individual, a well-run work group achieves the result with less coordination cost." },
    { q: "“Conflict should be eliminated from teams.” Discuss with reference to the three views of conflict, the types of conflict, the conflict–performance relationship, and evidence-based resolution strategies (Behfar et al., 2008).",
      outline: [
        "Define conflict: perceived incompatible differences resulting in interference or opposition",
        "Three views: traditional (all bad, avoid), human relations (natural, inevitable), interactionist (some conflict necessary)",
        "Functional vs. dysfunctional; inverted-U curve: low → apathetic/stagnant/no new ideas; optimal → viable, self-critical, high performance; high → disruptive/chaotic/uncooperative",
        "Types: task (content/goals), relationship (interpersonal), process (how work gets done)",
        "Behfar mapping: task → debate + open communication → compromise/consensus; relationship → specific solutions + some avoidance (satisfaction cost); process → debate + consensus on rotating responsibilities",
        "Conclusion: manage conflict's TYPE and LEVEL, don't eliminate it; psychological safety keeps task conflict from turning personal"
      ],
      model: "Conflict — perceived incompatible differences that result in interference or opposition — has been viewed three ways. The traditional view holds all conflict is bad and must be avoided; the human relations view treats it as a natural and inevitable outcome of any group; and the interactionist view goes further: some conflict is NECESSARY for a group to perform effectively. The interactionist position rests on the distinction between functional conflicts, which support group goals and improve performance, and dysfunctional ones, which prevent goal achievement — and on the inverted-U relationship between conflict level and performance. At low or no conflict, a group turns apathetic and stagnant, unresponsive to change and short of new ideas — performance is LOW; at an optimal level, conflict is functional and the group is viable and self-critical — performance peaks; at high conflict the group becomes disruptive, chaotic, and uncooperative — performance collapses again. Type matters as much as level: task conflict concerns the content and goals of the work, relationship conflict the interpersonal frictions between people, and process conflict how the work gets done. Behfar et al. (2008) show each type rewards a different resolution strategy: task conflict is best handled through discussion and debate with open communication, working toward compromise or consensus; relationship conflict responds to discussion plus specific solutions to specific problems, often with deliberate avoidance of purely personal issues — at some cost to satisfaction; and process conflict is best resolved through debate and consensus that establishes rotating responsibilities. The statement is therefore wrong on the evidence: eliminating conflict drives a team to the apathetic end of the curve, the very failure mode of groupthink-prone, over-cohesive teams. The managerial task is to keep conflict at a functional level and of a functional type — vigorous task debate inside a psychologically safe climate that stops disagreement about ideas from souring into conflict about persons." }
  ]
},
/* ---------------- WEEK 13 ---------------- */
{
  id: "w13",
  week: 13,
  title: "Managing Communication",
  blurb: "The communication process, barriers, the communication square, and organizational flows.",
  sections: [
    { h: "What Is Communication?", blocks: [
      { t: "def", term: "Communication", d: "The transfer AND understanding of meaning." },
      { t: "def", term: "Interpersonal communication", d: "Communication between two or more people." },
      { t: "def", term: "Organizational communication", d: "All the patterns, networks, and systems of communication within an organization." },
      { t: "def", term: "Formal vs. informal communication", d: "Formal communication takes place within prescribed organizational work arrangements; informal communication is not defined by the organization's structural hierarchy." },
      { t: "list", title: "Functions of communication (5)", items: [
        "Management", "Motivation", "Emotional sharing", "Persuasion", "Information exchange"
      ]}
    ]},
    { h: "Interpersonal Communication", blocks: [
      { t: "p", text: "The communication process: a SENDER has an intended meaning, ENCODES it into a MESSAGE sent through CHANNELS (verbal and nonverbal symbols, visual images); the RECEIVER DECODES it into a perceived meaning — all within a CONTEXT, with NOISE at every step, and the roles reverse as the receiver responds. The realities (thoughts and feelings) of sender and receiver differ, so perceived meaning is not automatically intended meaning." },
      { t: "list", title: "Modes of communication", items: [
        "Oral communication",
        "Written communication",
        "Nonverbal communication — communication transmitted without words: BODY LANGUAGE (gestures, facial configurations, and other body movements that convey meaning) and VERBAL INTONATION (an emphasis given to words or phrases that conveys meaning)"
      ]},
      { t: "list", title: "Barriers to effective communication", items: [
        "Information overload: when information exceeds our processing capacity",
        "Filtering: the deliberate manipulation of information to make it appear more favorable to the receiver",
        "Jargon: specialized terminology or technical language that members of a group use to communicate among themselves",
        "Emotions", "Silence", "National culture"
      ]},
      { t: "list", title: "Overcoming the barriers", items: [
        "Use feedback",
        "Simplify language",
        "Listen actively — ACTIVE LISTENING: listening for full meaning without making premature judgments or interpretations",
        "Constrain emotions",
        "Watch nonverbal cues"
      ]},
      { t: "def", term: "The Communication Square (four sides / four “ears”)", d: "A tool to communicate better: every message carries four layers. CONTENT (what I talk to you about — the objective facts), RELATIONSHIP (what I think about you/us — what does s/he think of me?), APPEAL (what I want you to do — what does s/he want from me?), SELF-REVELATION (what I reveal of myself — what is going on with him or her?). Each “ear” has strengths and weaknesses: Content ear — factual, neutral, result-oriented, objective / blind to emotional nuances, impersonal. Relationship ear — sensitive, reads between the lines, human / vulnerable, easily hurt, takes everything personally. Appeal ear — cooperative, obliging, goal-oriented / will be exploited, little focus on own needs. Self-revelation ear — empathetic, understanding / shifts problems to others, doesn't question him/herself. To prepare an important conversation, plan all four sides: Which topics and arguments (content)? How will the other feel treated (relationship)? What do I want to achieve — min/max goal (appeal)? How do I feel and what do I share (self-revelation)?" }
    ]},
    { h: "Organizational Communication", blocks: [
      { t: "list", title: "Direction of flow", items: [
        "Downward: flows from a manager to employees (typical supervisor-to-reports communication)",
        "Upward: flows from employees to managers",
        "Lateral: among employees on the same organizational level",
        "Diagonal: cuts across work areas AND organizational levels"
      ]},
      { t: "def", term: "Communication networks", d: "The variety of patterns of vertical and horizontal flows of organizational communication. Three types compared on four criteria — CHAIN: moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction; WHEEL: fast, high accuracy, high leader emergence, low member satisfaction; ALL-CHANNEL: fast, moderate accuracy, no leader emergence, high member satisfaction." },
      { t: "def", term: "Grapevine", d: "The informal organizational communication network." }
    ]},
    { h: "Communication & You", blocks: [
      { t: "def", term: "Persuasion skills", d: "Skills that enable a person to influence others to change their minds or behavior. Four basic elements: (1) be clear about the “who,” “what,” and “why”; (2) keep it simple; (3) think about the other person's needs, motivation, and interests when shaping your argument; (4) appeal to the “head” and the “heart” by combining rational and emotional arguments." },
      { t: "def", term: "Speaking skills", d: "The ability to communicate information and ideas in talking so others will understand. Effective speakers show: authenticity, humility, brevity, and a clear understanding of the audience." },
      { t: "def", term: "Writing skills", d: "Communicating effectively in text as appropriate for the needs of the audience. Rules: think before you write; be direct (get to the point quickly); cut the fat (eliminate unnecessary words); avoid jargon and grandiose language (strive for clarity, not to impress); be professional (formal communications differ from emails, texts, and social media — no abbreviations, acronyms, or textspeak)." }
    ]}
  ],
  mcqs: [
    { q: "Communication is defined as…", o: [
      "the transfer AND understanding of meaning",
      "the transfer of information from one person to another",
      "speaking clearly and loudly",
      "the exchange of written documents"
    ], a: 0, e: "Both parts matter: transfer alone is not communication unless meaning is also UNDERSTOOD." },
    { q: "Communication that is NOT defined by the organization's structural hierarchy is…", o: [
      "informal communication",
      "formal communication",
      "downward communication",
      "diagonal communication"
    ], a: 0, e: "Informal communication happens outside prescribed work arrangements; formal communication takes place within them." },
    { q: "Which list gives the five FUNCTIONS of communication?", o: [
      "Management, motivation, emotional sharing, persuasion, information exchange",
      "Encoding, decoding, channel, noise, feedback",
      "Planning, organizing, leading, controlling, deciding",
      "Content, relationship, appeal, self-revelation, context"
    ], a: 0, e: "The five functions: management, motivation, emotional sharing, persuasion, and information exchange." },
    { q: "In the communication process, converting an intended meaning into a message is called ______, and interpreting the received message is called ______.", o: [
      "encoding; decoding",
      "decoding; encoding",
      "filtering; listening",
      "transmitting; perceiving"
    ], a: 0, e: "Sender encodes intended meaning → message travels via channels with noise → receiver decodes into perceived meaning, all within a context." },
    { q: "Raising your voice on the word “NOW” in “I need this report now” is an example of…", o: [
      "verbal intonation",
      "body language",
      "filtering",
      "jargon"
    ], a: 0, e: "Verbal intonation = emphasis given to words or phrases that conveys meaning; body language = gestures, facial configurations, body movements." },
    { q: "An employee summarizing a bad sales month in the most flattering possible way for the boss is engaging in…", o: [
      "filtering",
      "information overload",
      "active listening",
      "emotional sharing"
    ], a: 0, e: "Filtering = the deliberate manipulation of information to make it appear more favorable to the receiver." },
    { q: "When the information we must work with exceeds our processing capacity, we face…", o: [
      "information overload",
      "noise",
      "silence",
      "the grapevine"
    ], a: 0, e: "Information overload — one of the barriers, alongside filtering, jargon, emotions, silence, and national culture." },
    { q: "Active listening means…", o: [
      "listening for full meaning without making premature judgments or interpretations",
      "nodding while planning your reply",
      "repeating every word the speaker says",
      "listening only to the facts and ignoring feelings"
    ], a: 0, e: "Active listening withholds premature judgment/interpretation — a key way to overcome communication barriers, along with feedback, simpler language, constraining emotions, and watching nonverbal cues." },
    { q: "In the Communication Square, the layer expressing “what I want you to do” is the…", o: [
      "appeal side",
      "content side",
      "relationship side",
      "self-revelation side"
    ], a: 0, e: "Content = objective facts; relationship = what I think about you/us; appeal = what I want you to do; self-revelation = what I reveal of myself." },
    { q: "A manager hears “the deadline is Friday” and instantly thinks “he believes I'm slow!” Which “ear” is dominating, and what is its weakness?", o: [
      "The relationship ear — vulnerable, easily hurt, takes everything personally",
      "The content ear — blind to emotional nuances",
      "The appeal ear — will be exploited",
      "The self-revelation ear — shifts problems to others"
    ], a: 0, e: "Hearing a factual message as a statement about oneself is the relationship ear; its weakness is taking everything personally. Its strength: sensitivity, reading between the lines." },
    { q: "Communication between a production employee and a finance manager — different work areas AND different levels — is…", o: [
      "diagonal communication",
      "lateral communication",
      "upward communication",
      "downward communication"
    ], a: 0, e: "Diagonal cuts across both work areas and organizational levels. Lateral = same level; upward = employee→manager; downward = manager→employees." },
    { q: "Which network is FAST, highly accurate, produces a clear emergent leader, but yields LOW member satisfaction?", o: [
      "Wheel",
      "Chain",
      "All-channel",
      "Grapevine"
    ], a: 0, e: "Wheel: fast, high accuracy, high leader emergence, low satisfaction. Chain: moderate on speed/satisfaction, high accuracy. All-channel: fast, moderate accuracy, no leader emergence, HIGH satisfaction." },
    { q: "If member satisfaction is the top priority, the best communication network is the…", o: [
      "all-channel network",
      "wheel network",
      "chain network",
      "vertical network"
    ], a: 0, e: "All-channel maximizes member satisfaction (everyone communicates with everyone), at the cost of only moderate accuracy and no clear leader." },
    { q: "The grapevine is…", o: [
      "the informal organizational communication network",
      "the formal chain of command",
      "a wheel network centered on the CEO",
      "an external PR channel"
    ], a: 0, e: "Grapevine = the informal organizational communication network." },
    { q: "Which is one of the four basic elements of successful persuasion from the lecture?", o: [
      "Appeal to the “head” and the “heart” by combining rational and emotional arguments",
      "Use as much technical jargon as possible",
      "Make the message long and detailed",
      "Focus only on your own needs and goals"
    ], a: 0, e: "The four: clarity on who/what/why; keep it simple; consider the other person's needs, motivation, interests; combine rational and emotional appeals." }
  ],
  cases: [
    { title: "The Memo That Meant Four Things at Qamar Media",
      scenario: "Project lead Omar messages designer Maya at 6 p.m.: “The client moved the presentation to 9 a.m. tomorrow. The deck still has the old figures.” Maya explodes to a colleague: “He thinks I'm careless and he's ordering me to stay all night!” She replies with a curt “Noted.”, stays late resentfully, and the next morning barely speaks to Omar. Omar is bewildered — he meant only to share urgent facts, hoped she could update two slides, and was himself anxious about the client. Their colleague Rana observes: “You two exchanged twenty words and four misunderstandings.”",
      qs: [
        { q: "Analyze Omar's message through the four sides of the Communication Square — what was (likely) sent on each side?", a: "CONTENT: the objective facts — presentation moved to 9 a.m.; deck contains old figures. APPEAL: what I want you to do — please update the figures tonight. RELATIONSHIP: what I think about you/us — intended as “I trust you with this urgent fix.” SELF-REVELATION: what I reveal of myself — “I'm anxious about this client.” Every message carries all four layers, whether intended or not." },
        { q: "Which “ear” did Maya listen with, and what does the lecture say about that ear's strengths and weaknesses?", a: "Maya received the message mainly with her RELATIONSHIP ear (“he thinks I'm careless”) — strength: sensitive, reads between the lines, human; weakness: vulnerable, easily hurt or angry, takes everything personally. She also heard a harsh APPEAL (“stay all night”) the content didn't state. The mismatch between intended and perceived meaning is exactly what the communication process model predicts when encoding/decoding diverge." },
        { q: "Identify the elements of the communication process model in this incident, including noise and context.", a: "SENDER: Omar; INTENDED MEANING: urgent facts + small request; ENCODING: a terse two-sentence text; CHANNEL: written message (no nonverbal cues or verbal intonation to soften it); RECEIVER: Maya; DECODING/PERCEIVED MEANING: accusation + command; NOISE: 6 p.m. fatigue, emotions, the channel's leanness; CONTEXT: deadline pressure. Maya's curt “Noted.” is the return loop — which Omar then misreads, since the roles of sender and receiver alternate." },
        { q: "Using the lecture's preparation grid for important conversations, script how Omar should have communicated.", a: "Plan all four sides before sending: CONTENT — which topics, arguments, facts? (“Client moved the meeting to 9 a.m.; slides 4 and 7 have old figures.”) RELATIONSHIP — how will the other feel treated; how do I maintain a positive relationship? (“I know it's late and I'm sorry to ask — you're the only one I'd trust with this.”) APPEAL — what do I want to achieve; min/max goal? (“Could you update the two slides tonight — or tell me what's feasible?”) SELF-REVELATION — what do I feel and share? (“I'm nervous about this client.”) Adding feedback (“call me if anything is unclear”) and choosing a richer channel (a quick call) would overcome the barriers." }
      ]},
    { title: "Redesigning Communication at Wared Logistics",
      scenario: "Wared Logistics' CEO communicates only through formal cascades: she briefs the three directors, who brief their managers, who brief staff — accurate but slow, and frontline ideas rarely travel back up. In the warehouse, all updates pass exclusively through shift supervisor Imad: his team gets answers fast and error-free, yet morale surveys show the warehouse crew feels voiceless. Meanwhile the six-person innovation lab chats freely with everyone about everything; members love it, though their facts occasionally need correcting and nobody is quite in charge. Separately, a rumor that the Tripoli depot will close is spreading through hallway chats and group texts faster than any official channel; staff trust it more than the silence from the top.",
      qs: [
        { q: "Identify the communication network of (a) the CEO cascade, (b) Imad's warehouse, and (c) the innovation lab, and evaluate each using the four criteria from the lecture.", a: "(a) CHAIN — moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction: matches “accurate but slow.” (b) WHEEL — fast, high accuracy, high leader emergence (Imad), LOW member satisfaction: matches fast, error-free, voiceless crew. (c) ALL-CHANNEL — fast, moderate accuracy (facts need correcting), NO leader emergence (nobody in charge), HIGH member satisfaction (members love it). No network wins on all four criteria — the choice depends on what matters most." },
        { q: "Classify the directions of flow that exist and that are missing at Wared, and explain the cost of the missing ones.", a: "Present: DOWNWARD (CEO → directors → managers → staff). Weak or missing: UPWARD (frontline ideas rarely travel back — losing improvement ideas and early warnings), LATERAL (peer-to-peer across same-level units, except in the lab), and DIAGONAL (across areas and levels — e.g., warehouse staff to finance manager). Without upward flow the top also loses the feedback loop the communication process requires." },
        { q: "What is the rumor channel called, and what does its speed and credibility imply for management?", a: "The GRAPEVINE — the informal organizational communication network. Its speed and the fact that staff trust it more than official silence imply management cannot suppress informal communication; it should monitor the grapevine as a signal of employee concerns and FEED the formal channels promptly and candidly (e.g., address the Tripoli question directly), because silence cedes the narrative to rumor." },
        { q: "The CEO must announce the real (smaller) Tripoli restructuring. Apply the four persuasion elements and the speaking-skills characteristics to design her town-hall message.", a: "Persuasion: (1) be clear about the WHO, WHAT, WHY — who is affected, what exactly changes, why it is necessary; (2) KEEP IT SIMPLE — no corporate jargon; (3) shape arguments around EMPLOYEES' needs, motivation, interests (job security, transfers, timelines); (4) appeal to HEAD AND HEART — the business case plus genuine empathy. Speaking skills: AUTHENTICITY (be real, no spin), HUMILITY (acknowledge uncertainty and past silence), BREVITY, and a CLEAR UNDERSTANDING OF THE AUDIENCE (warehouse crews, not analysts). Inviting questions adds the feedback that prevents another grapevine cycle." }
      ]}
  ],
  essays: [
    { q: "Describe the communication process model and use it to explain why “transfer” of a message is not the same as “understanding.” Where do barriers enter the process, and how can each be overcome?",
      outline: [
        "Definition: communication = transfer AND understanding of meaning",
        "Model: sender → intended meaning → encoding → message → channel (verbal/nonverbal symbols, visual images) → decoding → perceived meaning → receiver; context surrounds; noise at every step; roles alternate (feedback)",
        "Sender's and receiver's realities (thoughts/feelings) differ → perceived ≠ intended by default",
        "Barriers: information overload, filtering, jargon, emotions, silence, national culture — map each onto the model stage it corrupts",
        "Remedies: use feedback, simplify language, active listening (no premature judgments), constrain emotions, watch nonverbal cues",
        "Conclusion: design communication around the receiver, verify understanding via feedback loop"
      ],
      model: "Communication is the transfer AND understanding of meaning — the conjunction carries the theory. In the process model, a sender starts from an intended meaning rooted in their own reality of thoughts and feelings, encodes it, and sends a message through channels of verbal and nonverbal symbols and visual images; the receiver decodes it into a perceived meaning rooted in THEIR reality — all within a context, with noise intruding at every step, and with the roles reversing as the receiver responds. Because encoding and decoding happen in two different realities, the perceived meaning is never automatically the intended one: a message can be perfectly transferred and completely misunderstood. Barriers attack specific stages. Information overload swamps the receiver's processing capacity, so decoding degrades. Filtering corrupts encoding: the sender deliberately manipulates information to look more favorable to the receiver. Jargon — a group's specialized terminology — encodes meaning in symbols the receiver may not share. Emotions distort both encoding and decoding; silence removes the feedback loop entirely; and national culture shapes the context in which symbols and behaviors are interpreted. The remedies the lecture offers mirror the model: USE FEEDBACK to test whether perceived meaning matches intended meaning; SIMPLIFY LANGUAGE to fit the audience (the antidote to jargon); LISTEN ACTIVELY — listening for full meaning without premature judgments or interpretations; CONSTRAIN EMOTIONS before encoding or decoding important messages; and WATCH NONVERBAL CUES, since body language and verbal intonation carry meaning words omit. The overall lesson: effective communicators design messages around the receiver's reality and close the loop — they verify understanding rather than assume that transmission accomplished it." },
    { q: "Present the Communication Square as a tool for better communication. Explain the four sides of a message, the strengths and weaknesses of the four “ears,” and show how the tool can be used to prepare an important conversation.",
      outline: [
        "Premise: every message has four simultaneous layers",
        "Content: what I talk about — objective facts; Relationship: what I think about you/us; Appeal: what I want you to do; Self-revelation: what I reveal of myself",
        "Receiving ears and their profiles: content (factual, objective / blind to emotional nuance, impersonal); relationship (sensitive, reads between lines / easily hurt, takes things personally); appeal (cooperative, goal-oriented / exploitable, neglects own needs); self-revelation (empathetic / shifts problems to others, doesn't question self)",
        "Diagnosis: many conflicts = sender emphasizes one side, receiver hears with a different ear",
        "Preparation grid: content (topics, arguments, examples), relationship (how will the other feel treated; maintain positive relationship), appeal (what to achieve; min/max goal), self-revelation (how do I feel; needs; what to share)",
        "Conclusion: balanced sending + aware listening"
      ],
      model: "The Communication Square holds that every message — even a single sentence — communicates on four sides at once. The CONTENT side carries what I talk to you about: the objective facts. The RELATIONSHIP side signals what I think about you and us — the receiver asks, “what does this person think of me?” The APPEAL side conveys what I want you to do. The SELF-REVELATION side discloses something about me — what is going on with the sender. Misunderstanding arises because people also LISTEN with four different “ears,” each with characteristic strengths and weaknesses. The content ear is factual, neutral, result-oriented, and objective, but blind to emotional nuances and impersonal. The relationship ear is sensitive, reads between the lines, and is human — but vulnerable, easily hurt or angered, taking everything personally. The appeal ear is cooperative, obliging, and goal-oriented, but risks being exploited and neglecting its own needs. The self-revelation ear is empathetic and understanding, but can shift problems onto others and fail to question itself. A terse “the deck still has the old figures” can thus be sent as pure content yet heard as a relationship verdict (“he thinks I'm careless”) or as a harsh appeal (“stay all night”). The tool's practical power lies in preparation: before an important conversation, plan all four sides deliberately. Content: which topics do I want to address, with what arguments, reasons, and examples? Relationship: how will the other person feel treated, and how can I create or maintain a positive relationship? Appeal: what do I want to achieve — my minimum and maximum goals? Self-revelation: how do I feel about the situation, what are my needs, and what do I choose to share? A communicator who sends on all four sides consciously — and recognizes which ear is dominating their own listening — prevents the twenty-word, four-misunderstanding exchanges that poison workplaces." },
    { q: "Compare the chain, wheel, and all-channel communication networks on speed, accuracy, leader emergence, and member satisfaction, and discuss how a manager should choose among them. Include the grapevine and the directions of communication flow in your answer.",
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
      model: "Communication networks are the patterns the vertical and horizontal flows of organizational communication settle into, and the lecture compares three on four criteria. The CHAIN follows the formal line: moderate speed, high accuracy, moderate leader emergence, moderate member satisfaction — disciplined and reliable, but slow, and information must climb and descend every rung. The WHEEL routes everything through a central hub: it is fast and highly accurate, and a leader clearly emerges — but member satisfaction is LOW, because the spokes talk only to the hub and feel voiceless. The ALL-CHANNEL network lets everyone communicate with everyone: fast with HIGH member satisfaction, but accuracy is only moderate and no leader emerges. The comparison teaches that no network dominates: a manager must decide which criterion the situation weights most — accuracy for safety-critical instructions (chain or wheel), speed plus morale for creative collaboration (all-channel), clear coordination under time pressure (wheel) — and accept the trade-offs. Networks also determine which directions of flow actually function: downward communication from managers to employees, upward from employees to managers, lateral among same-level employees, and diagonal across both areas and levels. A pure cascade starves the upward and diagonal flows that carry frontline intelligence to decision makers. Finally, alongside every formal design runs the GRAPEVINE — the informal organizational communication network. It is fast, it ignores the chart, and employees often trust it more than official silence. Managers should neither fight nor ignore it: monitor it as a barometer of concerns, and preempt it by feeding the formal channels promptly and candidly. The grapevine fills whatever vacuum the formal network leaves — so the best defense is a formal network that leaves none." }
  ]
},
  ]
};
