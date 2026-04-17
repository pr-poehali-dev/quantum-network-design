export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Тренер" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О наставнике</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Эксперт, который сам прошёл этот путь
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              10+ лет в сфере виртуального ассистирования — от фриланса до руководства командой из 20 VA.
              Я знаю, что ищут работодатели, и передаю это знание каждому ученику.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Моя методика основана на реальных проектах, а не теории. Вы сразу работаете с живыми задачами:
              CRM-системы, управление почтой и календарями, координация команд, работа с зарубежными клиентами.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Международный сертификат VA</p>
                  <p className="text-sm text-muted-foreground">Признан ведущими HR-платформами</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+ выпускников по всему миру</p>
                  <p className="text-sm text-muted-foreground">95% нашли работу в течение 60 дней</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Поддержка после обучения</p>
                  <p className="text-sm text-muted-foreground">Помогаю с резюме, откликами и первым клиентом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}