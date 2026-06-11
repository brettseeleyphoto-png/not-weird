/* Not Weird — all copy lives here.
   Voice rules: blunt about the world, never blunt at the reader.
   No scores, no tallies, no diagnosis language. Ever.
   Two walks: nd (the front door, first person) and nt (the other side, for people who love them). */

const CONTENT = {

  ui: {
    partLabel: "Part",
    backLabel: "Back",
    continueLabel: "Keep going",
  },

  landing: {
    title: `<span class="nd">n</span>ot weir<span class="nd">d</span>.`,
    lede: [
      `You've spent your whole life wondering what's wrong with you.`,
      `This is a walk through twenty-eight moments. Real ones — the kind nobody puts on a resume. If some of them read like someone's been going through your diary, this site has exactly one job: to tell you those experiences have <em>names</em>, research behind them, and millions of people who share them.`,
      `You're not weird. You were never weird.`,
    ],
    isIsnt: {
      isTitle: "What this is",
      is: [
        "A mirror.",
        "A vocabulary lesson.",
        "Proof you're not the only one.",
      ],
      isntTitle: "What this is not",
      isnt: [
        "A diagnosis.",
        "A medical tool.",
        "A quiz with a score. Nobody can tell you what you are from a website — including this one.",
      ],
    },
    privacy: `Nothing you tap leaves this device. No account, no server, no analytics watching you. Your answers live in your browser and nowhere else — and the Start Over button erases even that.`,
    timeNote: "About ten minutes. Twenty-eight moments. No score at the end — that's the point.",
    begin: "Walk through it",
    otherDoor: {
      kicker: "Not you, but someone you love?",
      text: `If you're here because of the partner, parent, friend, or coworker who's "a lot" or "rude" or "in their own world" — there's a version of this walk written for you. Same moments, seen from the outside, with the why attached.`,
      button: "Walk the other side",
    },
    storyLink: "Why this exists",
  },

  story: {
    title: "Why this exists",
    paragraphs: [
      `I didn't know until I was 48.`,
      `Forty-eight years of wondering why the things that looked easy for everyone else cost me so much. Why I could master complicated things and fail at basic ones. Why a good party wiped me out for two days. Why I had a workaround for everything and still felt like I was barely passing as a person.`,
      `I had explanations. They were all character flaws: lazy, too sensitive, scattered, weird. I built a whole identity out of apologizing.`,
      `Then the internet started showing me people describing my own life back at me — and using words for it. Real words. Researched words. I got assessed, and a medical provider confirmed what I'd already figured out: I'm AuDHD. Autistic and ADHD. The combo platter.`,
      `Here's what nobody tells you about a midlife diagnosis: almost nothing changes. There was no prize. No accommodations appeared. The world didn't get quieter.`,
      `One thing changed. I finally understood my own brain. And understanding turned into forgiveness — forty-eight years of "shortcomings" reclassified, one by one, from character flaws to features of a brain doing exactly what that kind of brain does.`,
      `That forgiveness is the entire reason this site exists. Living in uncertainty about your own mind is a special kind of hell, and nobody should spend forty-eight years there just because no one handed them the vocabulary.`,
      `This isn't a diagnosis tool. I'm not a doctor. I'm just a guy who found out late and would like you to find out — whatever your answer turns out to be — sooner.`,
    ],
    signoff: "— Brett",
    back: "Back",
  },

  /* ============================================================
     THE FRONT DOOR — first person, for the one living it
     ============================================================ */

  nd: {
    responses: ["That's me.", "Sometimes.", "Not really."],
    kickers: {
      resonant: "You tapped “that's me” just now. So hear this:",
      notResonant: "This one didn't sound like you. Read it anyway — odds are you love someone who lives it.",
    },
    nameLead: "It has a name:",
    toolsTitle: "What actually helps",
    finishLabel: "See what you told me",

    areas: [
      {
        id: "starting",
        label: "Starting things",
        scenarios: [
          `There's a task you need to do. It takes five minutes. You've known about it for three weeks. You've thought about it every single day. You cannot make your body do it. Today you cleaned the entire kitchen instead.`,
          `You can't reply to the text until you have the right answer. It's now been eleven days, and the problem isn't the answer anymore — it's explaining the eleven days. So now you can't reply at all.`,
          `People say "just break it into smaller steps." You break it into smaller steps. Now you have a list of smaller steps you can't start.`,
          `Some days the switch flips and you do six weeks of work in one sitting — and people say "see, you <em>can</em> do it," as if you'd been choosing not to the whole time.`,
        ],
        explainer: {
          headline: "That's not laziness. It never was.",
          name: "Executive dysfunction",
          body: [
            `There's a set of brain functions that handle starting, switching, organizing, and finishing — researchers call them executive functions. They run on a different circuit than intelligence, willpower, or caring. That's why you can desperately want to do the thing, fully understand the thing, and still sit there not doing the thing.`,
            `Lazy people don't agonize. You agonize. That's the tell — laziness doesn't hurt like that. In ADHD and autistic brains, the starter motor is the unreliable part. The engine is fine. Often the engine is exceptional — which is why, when something finally flips the switch, you do six weeks of work in a sitting.`,
          ],
          tools: [
            { title: "Shrink the first step until it's stupid.", body: `Not "do taxes" — "open the laptop." Not "clean the kitchen" — "pick up one fork." The starter motor needs a hill start, not a mountain.` },
            { title: "Body doubling.", body: `Another human in the room — or on a video call — doing their own thing while you do yours. Nobody fully knows why it works. It works.` },
            { title: "Borrow a deadline.", body: `External deadlines reach a part of the brain that self-imposed ones can't. Tell someone you'll send it by Friday.` },
            { title: "Stop negotiating at the scene of the crime.", body: `The eleven-day text? Send "sorry, my brain held this hostage — here's my answer." The people worth keeping recognize the move.` },
          ],
        },
        mirrorLine: "Starting things — the canyon between wanting to and being able to.",
      },
      {
        id: "sensory",
        label: "Too loud, too bright, too much",
        scenarios: [
          `The restaurant is fine. Everyone else is having a great time. You're tracking four conversations, the kitchen clatter, the music, the door chime, and a baby two tables over — and when someone asks what you're ordering, you genuinely did not hear them.`,
          `The tag in the shirt. The seam on the sock. The waistband. Everyone else apparently just… doesn't feel their clothes? You've been negotiating with fabric your entire life.`,
          `Someone is chewing. It isn't annoying — it's intolerable. You feel actual rage, and then immediate shame about the rage.`,
          `By evening, the lights are too bright, sounds physically hurt, and a hand on your shoulder feels like an attack. You're not angry at anyone. Your skin just has nothing left.`,
        ],
        explainer: {
          headline: "You're not high-maintenance. Your volume knobs are set differently.",
          name: "Sensory processing differences",
          body: [
            `Most nervous systems filter the world automatically — they mute the restaurant so the conversation comes through. Some brains don't get the automatic filter. Everything arrives at full volume, all at once, all day. The filtering still happens; you're just doing it manually, and manual filtering burns real energy.`,
            `That's why the lights feel hostile at 8&nbsp;p.m. You're not being dramatic — you've spent the day doing consciously what other people's brains do for free. The chewing rage has a name too: misophonia. The shame spiral after it is optional.`,
          ],
          tools: [
            { title: "Earplugs are glasses for your ears.", body: `Loop-style plugs cut the chaos and keep the conversation. Nobody thinks glasses are a character flaw.` },
            { title: "Run a sensory budget.", body: `A loud lunch costs something. Spend it on purpose, and schedule the quiet that pays it back.` },
            { title: "Always have an exit.", body: `Knowing exactly how you'd leave makes staying easier. Park where you can't get blocked in.` },
            { title: "Say the need plainly.", body: `"Can we sit in the corner, away from the speaker?" is a sentence, not a confession.` },
          ],
        },
        mirrorLine: "Sensory load — a world that's louder, brighter, and scratchier for you than for the person next to you.",
      },
      {
        id: "masking",
        label: "The performance",
        scenarios: [
          `You rehearse the phone call before you make it. Including their lines.`,
          `You get home from the party — which went great, everyone loved you — and you can't speak. A good time costs you two days.`,
          `Your personality is built from collected pieces: this laugh from a friend in eighth grade, that phrase from an old coworker, those mannerisms from TV. Sometimes you wonder what's underneath.`,
          `You watch yourself in conversations. Enough eye contact? Too much? Was that the right face? Did I let them talk enough? Everyone else seems to just… talk.`,
        ],
        explainer: {
          headline: "You weren't faking being normal. You were running it in manual mode.",
          name: "Masking",
          body: [
            `Masking is running social interaction as a conscious performance — rehearsing lines, monitoring your face, calibrating eye contact, doing a live impression of "a relaxed person" — while everyone else apparently runs it on autopilot. It's a real skill. You got good at it. That's exactly why nobody believed anything was hard for you.`,
            `But it bills by the hour. The crash after the party isn't you being antisocial — it's the invoice. And years of unbroken masking are heavily linked to burnout: the kind where speech, function, and capacity just stop. The mask kept you safe. It also kept you hidden, including from yourself.`,
          ],
          tools: [
            { title: "Budget the recovery as part of the event.", body: `The party is Saturday night and Sunday. Stop apologizing for the Sunday.` },
            { title: "Find your no-mask people.", body: `You already know who they are: the ones you're not tired after. Spend more time there.` },
            { title: "Take it off in layers, in safe rooms first.", body: `Stim at home alone. Say one honest "loud places wreck me" to one safe person. Small removals count.` },
            { title: "Re-read the “who am I underneath” panic gently.", body: `The collected pieces became yours the moment you chose them. You're not hollow. You're curated.` },
          ],
        },
        mirrorLine: "Masking — running “normal” as a manual, billable performance.",
      },
      {
        id: "time",
        label: "Time is a rumor",
        scenarios: [
          `"Five more minutes." It has been three hours. Not occasionally — as a lifestyle.`,
          `You have an appointment at 2&nbsp;p.m. It is 9&nbsp;a.m. You can't do anything before the appointment. Not nothing — <em>anything</em>. The day is over before it starts.`,
          `You looked up one small thing at 11&nbsp;p.m. It's now 4&nbsp;a.m. and you could teach a graduate seminar on it. You will also forget to eat tomorrow.`,
          `You're either forty minutes early because you panicked, or late because folding laundry "real quick" before leaving took thirty-five minutes. There is no in-between.`,
        ],
        explainer: {
          headline: "You don't manage time badly. Your brain keeps it differently.",
          name: "Time blindness — and its loud roommate, hyperfocus",
          body: [
            `Most brains feel time passing like a current — a body-sense of what twenty minutes is. Some brains genuinely don't get that signal. Time arrives in exactly two flavors: <em>now</em> and <em>not now</em>. That's why five minutes and three hours feel identical from the inside, why the 2&nbsp;p.m. appointment eats the whole day (it's "now" from the moment you wake up), and why you're early or late but never on time.`,
            `Hyperfocus is the same machinery pointed the other way. When something grabs the now-channel, the rest of reality — food, sleep, bladders — politely ceases to exist. It's a genuine superpower. It has no off switch and no seatbelt.`,
          ],
          tools: [
            { title: "Make time visible.", body: `Analog clocks in every room. Timers you can watch drain. The brain can't track what it can't see.` },
            { title: "Alarms with full sentences.", body: `Not "beep." "LEAVE NOW OR BE LATE TO THE DENTIST." Future-you needs orders, not vibes.` },
            { title: "Hyperfocus harm reduction.", body: `Water, food, and an exit alarm <em>before</em> you descend the rabbit hole. You won't do it during. We both know that.` },
            { title: "Stop fighting waiting mode. Schedule around it.", body: `Appointment days are appointment days. Put the deep work on a day with nothing in it.` },
          ],
        },
        mirrorLine: "Time — living in “now and not now” while everyone else got handed a clock.",
      },
      {
        id: "feelings",
        label: "Feelings at full volume",
        scenarios: [
          `Your boss said "good work — one small note." You've been thinking about the note for nine days. The "good work" evaporated on contact.`,
          `They replied "ok." Just "ok." You have now constructed the complete story of how they secretly hate you, what you did wrong, and how the friendship ends.`,
          `It's 2&nbsp;a.m. and your brain is replaying a conversation from 2014. With commentary.`,
          `When you feel something, you feel all of it. Joy is enormous. So is shame. People keep telling you to calm down, as if there's a dial you've simply declined to use.`,
        ],
        explainer: {
          headline: "You're not too sensitive. Rejection just hits you with a different caliber.",
          name: "Rejection sensitive dysphoria (RSD)",
          body: [
            `For some brains — ADHD brains especially — criticism and rejection don't register as information. They register as injury. Clinicians call it rejection sensitive dysphoria: an instant, full-body, outsized pain response to real <em>or perceived</em> rejection. The "perceived" is the cruel part. A flat "ok" text fires the same alarm as actual abandonment, and your brain immediately writes the whole tragic screenplay.`,
            `You're not weak. The alarm system is wired hot. Same goes for the rest of your feelings — the volume isn't a maturity setting you forgot to adjust. Some brains feel at 200%. That includes the joy, by the way. Nobody ever complains about that half.`,
          ],
          tools: [
            { title: "Name it while it's happening.", body: `"This is the RSD alarm" puts one inch of space between you and the screenplay. One inch is enough to not hit send.` },
            { title: "The 24-hour rule.", body: `No big conclusions, confrontations, or resignation letters within 24 hours of the sting. The story your brain wrote at hour one is fan fiction.` },
            { title: "Fact versus story.", body: `Fact: they wrote "ok." Story: they hate you and always have. Practice splitting the columns. It's a skill, and skills build.` },
            { title: "Tell your people about the “ok” thing.", body: `The ones who love you will happily spend two extra words. That's not high-maintenance. That's an instruction manual.` },
          ],
        },
        mirrorLine: "Feelings at full volume — rejection that lands like injury, joy that lands like weather.",
      },
      {
        id: "radar",
        label: "The radar",
        scenarios: [
          `Everyone loves the new guy. You clocked him in ninety seconds — the smile that doesn't reach the eyes, the compliments with hooks in them. You said nothing, because the last time you said something, you got called judgmental. Eight months later, when it all comes out, nobody remembers that you knew first.`,
          `You walk into a room and know two people were fighting before you opened the door. Nobody's face shows anything. The air just has a shape, and you can read it.`,
          `You see the pattern before other people see the data. The plan that won't survive contact. The couple that won't last. The error three layers down that nobody else can find. When you're right — again — people ask how you knew. You don't know how. You just couldn't <em>not</em> see it.`,
          `The volume has to be on an even number. The frame is one degree crooked and now it's the loudest thing in the room. Things have a way they're supposed to be, and "almost right" itches like a tag you can't cut out.`,
        ],
        explainer: {
          headline: "You're not paranoid. You're calibrated.",
          name: "Pattern recognition",
          body: [
            `Remember the missing filter from the sensory part of this walk? Same machinery, different output. Brains that don't auto-mute the world take in far more raw signal — micro-expressions, tone shifts, the half-second delay before an answer, the gap between what someone says and what they do. Run that much data through a brain built for patterns and you get the radar: the snake detector, the room reader, the error finder. It isn't magic and it isn't paranoia. It's statistics, running on a bigger sample than everyone else is using.`,
            `The cruel part is what the world did with it. You called the snake early, got told you were being judgmental, and learned to doubt the radar — right before the radar turned out to be right. Decades of that teaches you to sit on accurate information. The radar was never the problem. The reception was.`,
            `One honest note, because this walk doesn't cut corners: the "just right" itch — even numbers, straightened frames, things in their place — overlaps with OCD but isn't automatically OCD. OCD is its own real condition (intrusive thoughts plus compulsions that hold your day hostage), and it travels alongside ADHD and autism far more often than chance. The line that matters: if the rituals soothe your life, that's order. If they've started running it — hours lost, dread, loops you can't exit — that deserves its own conversation with a professional, and it responds well to treatment.`,
          ],
          tools: [
            { title: "Date your predictions.", body: `You don't have to announce the snake. Write the call down, with a date. Your hit rate — not other people's comfort — is the evidence the radar works.` },
            { title: "Protect yourself without a committee.", body: `You don't need consensus to keep your distance from someone. Boundaries don't require the group to see what you see first.` },
            { title: "Point the engine at things on purpose.", body: `The same machine that finds snakes finds bugs, flawed contracts, weak plans, and the one crooked frame in a portfolio. People build careers on this. You may already have.` },
            { title: "Know order's lane — and OCD's.", body: `The even-number volume costs nothing; keep it. But if rituals start charging rent, that's not a quirk to white-knuckle through. OCD is treatable, and getting help for it is maintenance, not weakness.` },
          ],
        },
        mirrorLine: "The radar — reading rooms, plans, and people before anyone else, and getting called paranoid right up until you're proven right.",
      },
      {
        id: "story",
        label: "The story you got told about yourself",
        scenarios: [
          `Too sensitive. Too much. Too intense. Too quiet. Too weird. You've been "too" something your entire life — and no one ever asked: too much <em>for whom?</em>`,
          `You were the smart kid who couldn't do the basics. Brilliant essay, lost permission slip. Aced the test, never turned in homework you'd already finished. Everyone decided that was a character flaw.`,
          `Your life runs on elaborate workarounds — alarms, lists, scripts, the keys bowl, the same meals, the same routes — and for years you assumed everyone was working this hard at being a person.`,
          `Somewhere along the way, you concluded that you were the problem. You've been apologizing for yourself so long it feels like your personality.`,
        ],
        explainer: {
          headline: "You were never a broken version of normal.",
          name: "The undiagnosed life",
          body: [
            `Here's what growing up without the vocabulary does: every difference gets filed as a character flaw. Can't start the essay? Lazy. Wrecked by the restaurant? Difficult. Crushed by mild feedback? Too sensitive. Need the same meals, the same routes, the same scripts? Weird. Run that filing system for a few decades and you don't just end up with low self-esteem — you end up with a meticulously documented case against yourself, built entirely from evidence that was never what it looked like.`,
            `Finding out late means re-reading your whole life with the real key. Fair warning: that isn't only relief. There's grief in it — for the kid who got called lazy, for the years spent apologizing. The grief is normal. It's also finite. And the forgiveness on the other side isn't a small thing. It's the whole thing.`,
          ],
          tools: [
            { title: "Re-read your history with the new information.", body: `The lost permission slips, the two-day crashes, the elaborate systems. None of it was a character flaw. It was an unmet need with no name.` },
            { title: "Let the grief be grief.", body: `Late-discovered ND people describe the same arc again and again: relief, then anger, then mourning, then something like peace. You're not doing it wrong. It's a sequence.` },
            { title: "Retire the prosecution.", body: `You've spent decades building the case against yourself. You don't have to win the appeal overnight — just stop adding new charges.` },
            { title: "Find the others.", body: `The most healing sentence in any language is "wait — you do that too?" Communities of people like you exist, and they are, frankly, hilarious.` },
          ],
        },
        mirrorLine: "The old story — a lifetime of differences filed as character flaws.",
      },
    ],

    mirror: {
      title: "Here's what you just told me.",
      leadLow: `Most of this didn't sound like you — and that's real information too, worth having. Maybe you came here for someone else. If so, the explainers you just read are the manual for loving them well. And if something still feels unexplained about your own brain, the resources below cast a wider net than twenty-eight moments ever could.`,
      afterList: [
        `None of that is a diagnosis — keep reading, I'll say it again in bold. But all of it is shared, named, and researched. Every one of those experiences is reported by millions of people, and a lot of them spent decades convinced they were the only one, too.`,
        `Whatever else turns out to be true: you're not weird, and you were never alone in any of this.`,
      ],
      otherSide: {
        text: `One more door. There's a version of this walk for the people who love you — the same moments, seen from the outside, with the why attached. Sending it isn't an accusation. It's subtitles.`,
        button: "Show them the other side",
      },
    },
  },

  /* ============================================================
     THE OTHER SIDE — for the people who love them
     ============================================================ */

  nt: {
    intro: {
      title: "the other side.",
      lede: [
        `Someone you love runs on a different operating system.`,
        `Maybe they sent you this link. Maybe you found it yourself, because something about them keeps not adding up — too blunt, too absent, too rigid, too sensitive, too much. This is a walk through sixteen moments you've probably stood next to. They live these from the inside. You get the outside view, with the why attached.`,
      ],
      headline: `One thing before you start, because it's the headline and not the footnote: <strong>none of it is aimed at you.</strong> It isn't attention-seeking — attention is usually the last thing on their agenda. It isn't defiance. It's a brain doing exactly what that kind of brain is built to do.`,
      disclaimer: `Same rule as the front door: this can't diagnose anyone — not you, not them. Don't use it as a gotcha. Use it as a flashlight.`,
      begin: "Walk the other side",
      timeNote: "About six minutes. Sixteen moments. No score — that's the point.",
    },
    responses: ["That's them.", "Sometimes.", "Not really."],
    kickers: {
      resonant: "You tapped “that's them.” So here's the why:",
      notResonant: "Didn't recognize anyone? Read the why anyway — it's the part nobody gets taught.",
    },
    nameLead: "What's actually happening:",
    toolsTitle: "What to do with this",
    finishLabel: "Put it together",

    areas: [
      {
        id: "talk",
        label: "The way they talk",
        scenarios: [
          `You ask "how was your weekend?" and get "fine." Full stop. No return question. Later, they talk for forty-five minutes about their actual interest — brilliant, animated, generous — and never once ask about yours.`,
          `They're deep in a task. You start a story. You watch them die a little, and then they say "sorry — what do you need?" and it lands like a slap. You wanted connection. They wanted coordinates.`,
          `You ask "does this look okay?" and they answer the question you asked instead of the question you meant. The honesty is surgical. There's no malice in it anywhere — you've checked.`,
          `They don't look at you when you talk — and they hear every word. Years later they'll quote you verbatim. From a conversation they apparently "weren't paying attention" to.`,
        ],
        explainer: {
          headline: "They're not being cold. They're being literal.",
          name: "Communication as information",
          body: [
            `For a lot of ND brains, conversation defaults to information transfer. For most other brains, it defaults to social bonding. That one difference explains half of this walk. Small talk isn't a warm-up to them — it's static before the song. "How was your weekend" reads as a data request and gets a data answer. And the forty-five minutes on their interest? That <em>is</em> the connection. Sharing the thing they love is how that brain says "I like you — here's my best stuff."`,
            `The mid-task thing is physics, not preference. When they're in flow, their working memory is a tower of spinning plates. Your story isn't boring — mid-task, it's seismic. Every detour from the thread costs them the thread. They do care about your cat. They cannot care about it <em>right now</em>. The pause between "I need the answer" and getting the answer is genuine torture in there — not impatience with you, a fight to keep the plates up.`,
            `And the eyes: for many ND people, eye contact costs real processing power. Looking away isn't disrespect. It's them turning toward your words by turning away from your face.`,
          ],
          tools: [
            { title: "Lead with the channel.", body: `"Quick question, just need one fact" or "no fix needed, I'm venting." Label what kind of conversation it is and they'll meet you on it. They're excellent at formats; they're guessing at subtext.` },
            { title: "Let “fine” be fine.", body: `The return-question dance isn't how they bond. Ask about the special interest instead — and watch them hand you the connection you were looking for.` },
            { title: "Schedule the stories.", body: `Mid-flow is the worst possible slot. After dinner, on a walk, in the car — you'll get the attentive version, not the plate-spinning one.` },
            { title: "Stop requiring eyes.", body: `Side-by-side beats face-to-face: cars, walks, dishes. Some of the best conversations you'll ever have will be with their profile.` },
          ],
        },
        mirrorLine: "The way they talk — information first; connection delivered through the things they love.",
      },
      {
        id: "disappearing",
        label: "The disappearing act",
        scenarios: [
          `They were the life of the dinner — funny, warm, fully on. Then they're gone for two days. Not angry. Just unreachable, flat, done. You replayed the dinner looking for what you did. You didn't do anything.`,
          `They leave the party at nine without a tour of goodbyes. Or they drive separately. Or they "might come" and don't. Someone always calls it rude. They'd rather be called rude than explain what the room costs.`,
          `You suggest a small change of plans — same day, different restaurant — and watch something behind their eyes briefly catch fire. It's a restaurant. It is clearly not about the restaurant.`,
          `Texts sit unanswered for days. From someone who, in person, would take a bullet for you. The math doesn't math — unless replying costs them something you can't see.`,
        ],
        explainer: {
          headline: "They're not leaving you. They're leaving the noise.",
          name: "Capacity, not character",
          body: [
            `That dinner performance you loved? For many ND people it's run in manual mode — monitoring their face, calibrating eye contact, doing a live impression of "a relaxed person." It's called masking, it's genuinely skilled work, and it bills by the hour. The two flat days afterward aren't a mood aimed at you. They're the invoice. Add the sensory tax — every restaurant is also lights, clatter, music, and four conversations arriving unfiltered — and "leaving at nine" stops being rude and starts being arithmetic.`,
            `The plan change is its own physics. The plan wasn't a preference — it was a structure their brain had already built, walked through, and budgeted for. Your small switch demolishes a real thing you couldn't see. And the unanswered text? Same stuck starter motor that leaves their own five-minute tasks sitting for weeks. It's task initiation, not indifference. You're not being ignored. You're in the same queue their own laundry is in.`,
          ],
          tools: [
            { title: "Make leaving easy and unremarkable.", body: `"Door's always open, no goodbyes needed" is one of the kindest sentences they'll ever hear. The person who lets them leave at nine gets invited into the smaller, realer circle.` },
            { title: "Change plans with a buffer.", body: `"Thinking about switching to X — no decision needed yet" gives their brain time to tear down the old structure and build the new one. Spring it last-minute and you're charging them a fee you can't see.` },
            { title: "Don't read silence as a message.", body: `The unanswered text is a stuck starter motor, not a verdict on you. "No need to reply" at the end of a message is a genuine gift.` },
            { title: "Treat recovery days like weather.", body: `Schedule around them; don't take them personally. The crash after the party is part of the party.` },
          ],
        },
        mirrorLine: "The disappearing — capacity, not character. Recovery, not rejection.",
      },
      {
        id: "rules",
        label: "The rules",
        scenarios: [
          `Same five meals. Same route. Volume on an even number. The "wrong" fork matters. You've teased them about it — everyone has. The rules don't budge, and they can't fully explain them either.`,
          `A five-minute task has been sitting for a month. You've watched them build a bookshelf, learn a language, and work a twelve-hour day — and not open one envelope. You've started to wonder if it's aimed at you. It isn't aimed at anything.`,
          `They vanish into a project — hours, sometimes the whole night. Food goes cold. You went from concerned to insulted years ago. They genuinely did not experience the time passing.`,
          `They can tell you what's wrong with a plan, a room, a person, or a contract — instantly, before anyone else sees it. It's spooky. It's also been right too many times to dismiss.`,
        ],
        explainer: {
          headline: "The rules aren't quirks. They're load-bearing.",
          name: "Order, fuel, and the radar",
          body: [
            `Sameness is a discount. Their brain gets overcharged for every decision and every surprise, all day — so the same five meals and the same route aren't stubbornness, they're bulk-buying predictability so there's capacity left for things that matter. Like you.`,
            `The envelope is the starter-motor problem: wanting to do a thing and being able to start it run on separate circuits in this brain, and the gap is no more aimed at you than rain is. The all-night project is the same machinery inverted — hyperfocus eats the time signal entirely. They didn't choose the project over dinner. Dinner stopped existing.`,
            `And the spooky accuracy: brains that don't auto-filter the world take in far more raw signal — micro-expressions, tone shifts, the gap between what someone says and what they do. Run that through a pattern engine and you get the radar. When they tell you the new guy is off, they're not being judgmental. They're reading data you didn't receive.`,
          ],
          tools: [
            { title: "Leave the rules alone.", body: `The even-number volume costs you nothing. The teasing costs them every time. Pick the cheaper option.` },
            { title: "Body double instead of nagging.", body: `Sit nearby doing your own thing. The envelope often opens itself. Nobody fully knows why this works — it works.` },
            { title: "Agree on an extraction protocol.", body: `For hyperfocus: an alarm they set in advance beats an interruption you perform in the moment. One feels like a plan; the other feels like an ambush.` },
            { title: "When the radar speaks, listen.", body: `You don't have to act on it. Note the prediction, date it, and watch. Their hit rate will explain itself.` },
          ],
        },
        mirrorLine: "The rules — load-bearing structure in a world that overcharges them for every decision.",
      },
      {
        id: "intensity",
        label: "Too sensitive",
        scenarios: [
          `You offered one mild note — gently worded, sandwiched in compliments — and watched it land like a wrecking ball. Nine days later, you found out they were still carrying it.`,
          `A text that says "ok" can ruin their afternoon. You meant: ok. They received: the friendship is over and it's their fault.`,
          `They cry at the "wrong" things, laugh at the "wrong" volume, feel everything at 200% — and people keep grading them on the reaction instead of asking about the wiring.`,
          `And the one nobody says out loud: when you finally see it all together — the bluntness, the leaving, the rules, the intensity — you realize you've spent years taking personally a list of things that were never about you.`,
        ],
        explainer: {
          headline: "It was never about you. It was never about attention, either.",
          name: "Wired hot, aimed nowhere",
          body: [
            `For some brains — ADHD brains especially — criticism doesn't register as information. It registers as injury. Clinicians call it rejection sensitive dysphoria: an instant, full-body, outsized pain response to real or perceived rejection. Your gentle note and an actual betrayal fire the same alarm. That's why the sandwich didn't help — the bread evaporated on contact and the note hit at full caliber. The flat "ok" text trips the same wire. None of this is fragility. The alarm is wired hot, and they've been white-knuckling it in public their whole life.`,
            `Now the headline again, because you've walked enough to hear it properly. Not one thing in this walk is a bid for attention. Attention is radioactive to most of these brains — being noticed means being perceived, and being perceived means masking harder. If they wanted attention, all of this would be a lot louder. And none of it is defiance, manipulation, or a comment on you. It's a different operating system, running exactly as designed, in a world configured for the other one. You just happen to be standing close enough to feel the fan exhaust.`,
          ],
          tools: [
            { title: "Pad the texts.", body: `"Ok — sounds great!" costs you two words and saves them an afternoon. That's not coddling. That's an instruction manual, and they'd do the same for you if your alarm were wired like theirs.` },
            { title: "Timestamp your notes.", body: `"This is small, and we're fine" — said out loud, before the feedback. Don't assume the relationship's safety is implied. State it. Their alarm can't hear implications.` },
            { title: "Stop grading reactions.", body: `The volume isn't a choice, and "calm down" has never once worked in the history of the phrase. Ask "what do you need right now?" instead.` },
            { title: "Ask for the inside view.", body: `The best source on this brain is the person running it. "What does that feel like from the inside?" might be the best question you ever ask them.` },
          ],
        },
        mirrorLine: "The intensity — wired hot, aimed at no one. Especially not you.",
      },
    ],

    mirror: {
      title: "What they need you to know.",
      leadLow: `Most of this didn't match anyone in your life — fair enough, and worth knowing. If you walked it out of curiosity, you now carry the why for the next blunt, brilliant, party-leaving person you meet. The manifesto below still applies.`,
      manifesto: [
        `It is not for attention. Attention is the last thing on the agenda.`,
        `It is not defiance, manipulation, or a message aimed at you.`,
        `It is a brain doing exactly what that kind of brain is built to do — in a world configured for a different one.`,
      ],
      afterManifesto: `If someone you love makes more sense than they did ten minutes ago, that's the whole job of this page. The move now isn't a verdict, and it definitely isn't "this is SO you" across the dinner table. It's an open door: "I read this and thought of you. It helped me get it." Then let them walk their own side.`,
      frontDoor: {
        text: `Their version of this walk is the front door — twenty-eight moments from the inside.`,
        button: "To the front door",
      },
    },
  },

  /* ============================================================
     SHARED — disclaimer, resources, footer
     ============================================================ */

  mirror: {
    disclaimerTitle: "Read this part twice",
    disclaimer: [
      `<strong>This site cannot tell you whether anyone is autistic, ADHD, both, or neither.</strong> No website can — including the slick ones with scores.`,
      `What you felt here is a reason to get curious, not a conclusion. If a lot of this landed, the next step isn't panic and it isn't certainty. It's information.`,
    ],
    nextTitle: "If this felt like reading your own diary",
    ntNextTitle: "Where to learn more",
    next: [
      {
        title: "Learn more first. It's free.",
        items: [
          `<a href="https://embrace-autism.com" target="_blank" rel="noopener">Embrace Autism</a> — the research-grade self-assessment tools clinicians actually reference, with honest explanations of what each one can and can't tell you.`,
          `<em>Unmasking Autism</em> by Devon Price — the book most late-discovered autistic adults hand to the next person.`,
          `<em>Driven to Distraction</em> by Edward Hallowell &amp; John Ratey — the classic on adult ADHD, written by clinicians who have it.`,
          `<em>Divergent Mind</em> by Jenara Nerenberg — especially good on why women and quieter presentations get missed for decades.`,
          `<a href="https://www.youtube.com/@HowtoADHD" target="_blank" rel="noopener">How to ADHD</a> (Jessica McCabe) — practical, warm, and made by someone who lives it.`,
        ],
      },
      {
        title: "Find the others.",
        items: [
          `<a href="https://autisticadvocacy.org" target="_blank" rel="noopener">ASAN</a> — the Autistic Self Advocacy Network. By autistic people, for autistic people.`,
          `<a href="https://aane.org" target="_blank" rel="noopener">AANE</a> — community and support groups for autistic adults, including the late-discovered.`,
          `<a href="https://add.org" target="_blank" rel="noopener">ADDA</a> and <a href="https://chadd.org" target="_blank" rel="noopener">CHADD</a> — the two big adult-ADHD organizations: peer groups, webinars, directories.`,
          `Online, the late-discovery crowd gathers in communities like r/AuDHD, r/ADHD, and r/AutismInWomen. Lurking is allowed. Lurking is how most of us started.`,
        ],
      },
      {
        title: "If you decide you want a formal assessment.",
        items: [
          `Start with your regular doctor, or search directly for a psychologist who assesses <em>adults</em> — that word matters; many assessors only see kids. "Adult ADHD assessment" and "adult autism assessment" are the search terms.`,
          `Be ready for the unglamorous part: waitlists and cost vary wildly, and some clinicians are still catching up on how this looks in adults — especially in women and in anyone who masks well. If the first one dismisses you, that's information about them, not about you.`,
          `Know what the paper is for: medication access, workplace or school accommodations, and certainty for people who need it. It is a tool, not a permission slip. Careful self-knowledge is respected in most of the ND community — plenty of people never get the paper, and their understanding of themselves is no less real.`,
        ],
      },
    ],
    crisis: `One more thing, and it matters more than the reading list: if you're in a dark place right now — not someday-dark, <em>tonight</em>-dark — call or text <strong>988</strong> (US), or find your local line at <a href="https://findahelpline.com" target="_blank" rel="noopener">findahelpline.com</a>. The rest of this can wait.`,
    footerStory: "Why this exists",
    footerRestart: "Start over",
    restartConfirm: "This erases your answers from this device. (They were never anywhere else.) Start over?",
    madeBy: "Made by one person who didn't find out until 48.",
  },
};
