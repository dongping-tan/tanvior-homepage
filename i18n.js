(function (root) {
  "use strict";
  const copy = {
    zh: {
      tagline: "把时间，留给想成为的自己",
      language: "语言",
      workspace: "我的空间",
      projects: "目标与计划",
      newTask: "＋ 新建任务",
      note: "小步前进，也在靠近。你的每一次投入，都算数。",
      about: "关于 Tanvior ↗",
      overview: "给成长一点空间。",
      local: "本地规则规划 · 无需联网",
      emptyTitle: "下一个目标，从这里开始",
      emptyText:
        "写下你想达成的事，选好属于它的时间。Tanvior 帮你把方向拆成可执行的日常。",
      start: "创建第一个目标 →",
      foot: "按你的节奏，持续向前。拖动卡片顶部可调整位置。",
      calendar: "日历与安排",
      today: "今天的小步",
      privacy:
        "◈ 任务数据保存在当前浏览器，请定期备份。本站使用 Umami 进行访问统计；首次访问会通过外部服务按 IP 国家推荐语言。",
      editorTitle: "给你的目标，一个计划",
      taskName: "任务名称",
      startDate: "开始日期",
      endDate: "预计完成日期",
      weekly: "每周可用时间（每块 1 小时）",
      adjust: "微调具体日期 · 添加或移除时间块",
      adjustHelp: "多选日期后批量添加或移除；也可单独调整某一天。",
      selectDate: "选择日期",
      allow: "添加时间",
      remove: "移除时间",
      goal: "想达成的事项 / 能力目标",
      baseline: "现阶段状态",
      plannerHint:
        "依据可用时间，按基础、实践、验收三阶段生成。本地规则规划，不调用 AI，不承诺实际达成结果。",
      generate: "✳ 智能生成计划（本地规则）",
      chooseMonth: "选择月份",
      aboutText:
        "Tanvior 将目标、可用时间、每日行动与进度放在同一个工作台。本版本使用本地规则生成三阶段计划，不连接 AI 服务或云端账户。请定期导出记录。",
      total: "进行中的目标",
      sessions: "行动时间块",
      average: "整体进度",
      unit: "个",
      noToday: "今天没有安排。留点时间给自己，或开始一个新目标。",
      none: "这一天没有安排。",
      target: "能力目标",
      initial: "开始时状态",
      period: "计划周期",
      mark: "标记",
      unmark: "取消标记",
      delete: "删除",
      confirm: "删除此任务及其全部进度？此操作无法撤销。",
      reason: "规划内容与原因",
      reasonText:
        "按可用时间顺序分为基础梳理、专项实践、复盘验收三个阶段；每个时间块 1 小时，阶段边界按时间块数量均分。任务目标用于描述每次行动方向，当前状态保留供你对照。此规则无法评估真实难度，请根据实际情况调整目标。",
      milestone: "预计完成 / 能力目标",
      week: "周",
      print: "打印 / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "备份 JSON",
      date: "日期",
      time: "时间",
      task: "任务",
      action: "行动内容",
      progress: "完成 %",
      month: "月度安排",
      emptyMonth: "本月暂无安排",
      invalid: "请填写有效日期，且结束日期不得早于开始日期，周期最长 366 天。",
      saved: "已保存",
      storage: "浏览器无法保存数据，请导出备份并检查存储权限。",
      corrupt:
        "本地数据无法读取，原始数据未覆盖。请先导出备份，再检查浏览器存储。",
      conflict: "提示：部分时间与其他任务重叠，请检查日历安排。",
      selected: "已选日期",
      override: "微调",
      hours: "小时",
      addDateError: "请选择计划周期内的日期。",
      noDate: "请先选择日期。",
      importBackup: "导入备份",
      restoreConfirm: "导入将替换当前任务。请先备份当前数据。是否继续？",
      invalidBackup: "备份格式无效，未修改当前数据。",
      restored: "备份已恢复",
      introTitle: "让目标，成为日常。",
      introText:
        "从一个想法，到每一次行动。把目标、时间与进度，放进同一个清晰的空间。",
      enter: "进入工作台 →",
      introHint: "15 秒后自动进入 · 任务保存在此浏览器",
      requiredFields: "请输入名称、目标与当前状态。",
      taskLimit: "最多保留 100 个目标，请先导出并删除已完成目标。",
      emptySchedule: "请至少选择一个可用时间块。",
      close: "关闭",
      previousMonth: "上个月",
      nextMonth: "下个月",
      clear: "清除",
    },
    en: {
      tagline: "Make time for who you want to become",
      language: "Language",
      workspace: "MY WORKSPACE",
      projects: "Goals & plans",
      newTask: "+ New goal",
      note: "Small steps still move you forward. Every moment counts.",
      about: "About Tanvior ↗",
      overview: "Make room for growth.",
      local: "Local rule-based planner · Offline",
      emptyTitle: "Your next chapter starts here",
      emptyText:
        "Choose a goal. Make room for it. Turn your direction into everyday actions.",
      start: "Create your first goal →",
      foot: "Move at your own pace. Drag a card header to arrange your workspace.",
      calendar: "Calendar & schedule",
      today: "Small steps for today",
      privacy:
        "◈ Goal data stays in this browser; export backups regularly. This site uses Umami for analytics and an external IP country lookup to suggest a language on your first visit.",
      editorTitle: "Give your goal a plan",
      taskName: "Goal name",
      startDate: "Start date",
      endDate: "Expected completion",
      weekly: "Weekly availability (1 hour per slot)",
      adjust: "Adjust individual dates · Add or remove slots",
      adjustHelp: "Select several dates for bulk changes, or adjust one date.",
      selectDate: "Select date",
      allow: "Add slot",
      remove: "Remove slot",
      goal: "Desired outcome / capability",
      baseline: "Current starting point",
      plannerHint:
        "Plans use three rule-based stages: foundations, practice, and review. No AI service is called and outcomes are not guaranteed.",
      generate: "✳ Generate plan (local rules)",
      chooseMonth: "Choose month",
      aboutText:
        "Tanvior brings goals, available time, daily actions, and progress into one workspace. This version uses local planning rules, without AI services or cloud accounts. Export your records regularly.",
      total: "Active goals",
      sessions: "Action time slots",
      average: "Overall progress",
      unit: "",
      noToday:
        "Nothing scheduled today. Make room for yourself or start a new goal.",
      none: "No sessions on this day.",
      target: "Desired capability",
      initial: "Starting point",
      period: "Planning period",
      mark: "Mark",
      unmark: "Unmark",
      delete: "Delete",
      confirm: "Delete this goal and all its progress? This cannot be undone.",
      reason: "Plan and rationale",
      reasonText:
        "Available slots are ordered and divided into foundations, focused practice, and review. Each slot is one hour. Stage boundaries divide the slot count into thirds. The goal describes each action; the baseline is retained for comparison. These rules cannot assess real difficulty; adjust your expectations as needed.",
      milestone: "Expected completion / outcome",
      week: "Week",
      print: "Print / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "JSON backup",
      date: "Date",
      time: "Time",
      task: "Goal",
      action: "Action",
      progress: "Complete %",
      month: "Monthly schedule",
      emptyMonth: "No sessions this month",
      invalid:
        "Use valid dates, with the end on or after the start, within 366 days.",
      saved: "Saved",
      storage:
        "Browser storage is unavailable. Export a backup and check storage permissions.",
      corrupt:
        "Stored data could not be read; it has not been overwritten. Export a backup before checking browser storage.",
      conflict: "Some slots overlap other goals. Please check the calendar.",
      selected: "Selected dates",
      override: "Override",
      hours: "hours",
      addDateError: "Choose a date within the planning period.",
      noDate: "Select a date first.",
      importBackup: "Import backup",
      restoreConfirm:
        "Import replaces your current goals. Back up your data first. Continue?",
      invalidBackup: "Invalid backup; current data was not changed.",
      restored: "Backup restored",
      introTitle: "Make your goals a daily habit.",
      introText:
        "From an idea to everyday action. Bring goals, time and progress into one clear space.",
      enter: "Enter workspace →",
      introHint:
        "Opens automatically in 15 seconds · Goals stay in this browser",
      requiredFields: "Enter a name, outcome and starting point.",
      taskLimit: "Limit: 100 goals. Export and remove completed goals first.",
      emptySchedule: "Select at least one available time slot.",
      close: "Close",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      clear: "Clear",
    },
    ja: {
      tagline: "なりたい自分のために、時間をつくる",
      language: "言語",
      workspace: "マイワークスペース",
      projects: "目標と計画",
      newTask: "＋ 新しい目標",
      note: "小さな一歩も前進です。一つひとつの取り組みが力になります。",
      about: "Tanvior について ↗",
      overview: "成長のための余白を。",
      local: "ローカルルールで計画 · オフライン対応",
      emptyTitle: "次の目標は、ここから",
      emptyText:
        "目標を書き、そのための時間を選びましょう。日々の行動へとつなげます。",
      start: "最初の目標を作成 →",
      foot: "自分のペースで進みましょう。カード上部をドラッグして配置できます。",
      calendar: "カレンダーと予定",
      today: "今日の小さな一歩",
      privacy:
        "◈ 目標データはこのブラウザーに保存されます。定期的にバックアップしてください。アクセス解析に Umami を使用し、初回は外部の IP 国判定で言語を提案します。",
      editorTitle: "目標に、計画を。",
      taskName: "目標の名前",
      startDate: "開始日",
      endDate: "完了予定日",
      weekly: "毎週の空き時間（1 枠 1 時間）",
      adjust: "日付ごとに調整 · 時間枠の追加・削除",
      adjustHelp: "複数の日付を選んで一括変更するか、1 日ずつ調整できます。",
      selectDate: "日付を選択",
      allow: "時間枠を追加",
      remove: "時間枠を削除",
      goal: "達成したいこと・身につけたい能力",
      baseline: "現在の状態",
      plannerHint:
        "基礎・実践・振り返りの 3 段階で計画します。AI は呼び出さず、成果を保証するものではありません。",
      generate: "✳ 計画を生成（ローカルルール）",
      chooseMonth: "月を選択",
      aboutText:
        "Tanvior は目標、空き時間、毎日の行動と進捗を一つにまとめます。このバージョンはローカルルールを使用し、AI やクラウドアカウントには接続しません。定期的にエクスポートしてください。",
      total: "進行中の目標",
      sessions: "行動の時間枠",
      average: "全体の進捗",
      unit: "件",
      noToday:
        "今日は予定がありません。自分のための時間を楽しむか、新しい目標を作りましょう。",
      none: "この日に予定はありません。",
      target: "目指す能力",
      initial: "開始時の状態",
      period: "計画期間",
      mark: "マーク",
      unmark: "マーク解除",
      delete: "削除",
      confirm: "この目標とすべての進捗を削除しますか？元に戻せません。",
      reason: "計画の内容と理由",
      reasonText:
        "利用できる時間枠を順番に並べ、基礎・実践・振り返りの 3 段階に分けます。各枠は 1 時間で、段階は枠数で均等に区切ります。目標は行動の方向性を示し、開始時の状態は比較用に残します。実際の難易度は判断できないため、状況に合わせて目標を調整してください。",
      milestone: "完了予定・到達目標",
      week: "週",
      print: "印刷 / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "JSON バックアップ",
      date: "日付",
      time: "時間",
      task: "目標",
      action: "行動内容",
      progress: "完了 %",
      month: "月間スケジュール",
      emptyMonth: "この月に予定はありません",
      invalid:
        "有効な日付を入力してください。終了日は開始日以降、期間は最長 366 日です。",
      saved: "保存しました",
      storage:
        "ブラウザーに保存できません。バックアップを出力し、保存権限を確認してください。",
      corrupt:
        "保存データを読み取れません。元のデータは上書きしていません。バックアップを出力してからストレージを確認してください。",
      conflict:
        "他の目標と時間が重複しています。カレンダーを確認してください。",
      selected: "選択した日付",
      override: "個別調整",
      hours: "時間",
      addDateError: "計画期間内の日付を選んでください。",
      noDate: "先に日付を選んでください。",
      importBackup: "バックアップを読み込む",
      restoreConfirm:
        "現在の目標を置き換えます。先にバックアップしてください。続けますか？",
      invalidBackup:
        "無効なバックアップです。現在のデータは変更されていません。",
      restored: "バックアップを復元しました",
      introTitle: "目標を、毎日の習慣に。",
      introText:
        "一つのアイデアから、日々の行動へ。目標、時間、進捗をひとつの空間に。",
      enter: "ワークスペースへ →",
      introHint: "15 秒後に自動で開きます · 目標はこのブラウザーに保存",
      requiredFields: "名前、目標、現在の状態を入力してください。",
      taskLimit:
        "目標は最大 100 件です。完了した目標を出力してから削除してください。",
      emptySchedule: "利用できる時間枠を 1 つ以上選んでください。",
      close: "閉じる",
      previousMonth: "前の月",
      nextMonth: "次の月",
      clear: "クリア",
    },
    es: {
      tagline: "Haz tiempo para quien quieres llegar a ser",
      language: "Idioma",
      workspace: "MI ESPACIO",
      projects: "Metas y planes",
      newTask: "＋ Nueva meta",
      note: "Cada pequeño paso cuenta. Tu esfuerzo te acerca a tu meta.",
      about: "Acerca de Tanvior ↗",
      overview: "Dale espacio a tu crecimiento.",
      local: "Planificación local por reglas · Sin conexión",
      emptyTitle: "Tu próxima meta empieza aquí",
      emptyText:
        "Escribe tu meta y elige cuándo dedicarle tiempo. Convierte tu rumbo en acciones diarias.",
      start: "Crea tu primera meta →",
      foot: "Avanza a tu ritmo. Arrastra la cabecera de una tarjeta para moverla.",
      calendar: "Calendario y agenda",
      today: "Pequeños pasos de hoy",
      privacy:
        "◈ Las metas se guardan en este navegador. Exporta copias con regularidad. Este sitio usa Umami para estadísticas y un servicio externo de país por IP para sugerir el idioma en la primera visita.",
      editorTitle: "Dale un plan a tu meta",
      taskName: "Nombre de la meta",
      startDate: "Fecha de inicio",
      endDate: "Finalización prevista",
      weekly: "Disponibilidad semanal (1 hora por bloque)",
      adjust: "Ajustar fechas · Añadir o quitar bloques",
      adjustHelp:
        "Selecciona varias fechas para cambios en grupo o ajusta un día.",
      selectDate: "Seleccionar fecha",
      allow: "Añadir bloque",
      remove: "Quitar bloque",
      goal: "Resultado o capacidad deseada",
      baseline: "Situación actual",
      plannerHint:
        "El plan usa tres etapas: bases, práctica y revisión. No utiliza IA ni garantiza resultados.",
      generate: "✳ Generar plan (reglas locales)",
      chooseMonth: "Elegir mes",
      aboutText:
        "Tanvior reúne metas, tiempo disponible, acciones diarias y progreso. Esta versión usa reglas locales, sin servicios de IA ni cuentas en la nube. Exporta tus registros con regularidad.",
      total: "Metas activas",
      sessions: "Bloques de acción",
      average: "Progreso general",
      unit: "",
      noToday:
        "No hay nada programado hoy. Dedícate tiempo o empieza una nueva meta.",
      none: "No hay sesiones este día.",
      target: "Capacidad deseada",
      initial: "Punto de partida",
      period: "Período del plan",
      mark: "Marcar",
      unmark: "Desmarcar",
      delete: "Eliminar",
      confirm: "¿Eliminar esta meta y todo su progreso? No se puede deshacer.",
      reason: "Plan y explicación",
      reasonText:
        "Los bloques disponibles se ordenan y dividen en bases, práctica y revisión. Cada bloque dura una hora y las etapas se reparten según el número de bloques. La meta orienta cada acción y la situación inicial se conserva para comparar. Estas reglas no evalúan la dificultad real; ajusta las expectativas según tu situación.",
      milestone: "Finalización prevista / resultado",
      week: "Semana",
      print: "Imprimir / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "Copia JSON",
      date: "Fecha",
      time: "Hora",
      task: "Meta",
      action: "Acción",
      progress: "Completado %",
      month: "Agenda mensual",
      emptyMonth: "No hay sesiones este mes",
      invalid:
        "Usa fechas válidas: el final debe ser igual o posterior al inicio y el período no puede superar 366 días.",
      saved: "Guardado",
      storage:
        "El almacenamiento no está disponible. Exporta una copia y revisa los permisos del navegador.",
      corrupt:
        "No se pudieron leer los datos guardados; no se han sobrescrito. Exporta una copia antes de revisar el almacenamiento.",
      conflict:
        "Algunos bloques coinciden con otras metas. Revisa el calendario.",
      selected: "Fechas seleccionadas",
      override: "Ajuste",
      hours: "horas",
      addDateError: "Elige una fecha dentro del período del plan.",
      noDate: "Selecciona primero una fecha.",
      importBackup: "Importar copia",
      restoreConfirm:
        "La importación sustituirá tus metas actuales. Haz una copia primero. ¿Continuar?",
      invalidBackup:
        "Copia no válida; no se han modificado los datos actuales.",
      restored: "Copia restaurada",
      introTitle: "Haz de tus metas un hábito diario.",
      introText:
        "De una idea a cada acción. Reúne metas, tiempo y progreso en un espacio claro.",
      enter: "Entrar al espacio →",
      introHint:
        "Se abre en 15 segundos · Las metas se guardan en este navegador",
      requiredFields:
        "Introduce un nombre, un resultado y tu situación actual.",
      taskLimit:
        "Máximo: 100 metas. Exporta y elimina las completadas primero.",
      emptySchedule: "Selecciona al menos un bloque disponible.",
      close: "Cerrar",
      previousMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      clear: "Borrar",
    },
    fr: {
      tagline: "Du temps pour la personne que vous souhaitez devenir",
      language: "Langue",
      workspace: "MON ESPACE",
      projects: "Objectifs et plans",
      newTask: "＋ Nouvel objectif",
      note: "Chaque petit pas compte. Vos efforts vous rapprochent de votre objectif.",
      about: "À propos de Tanvior ↗",
      overview: "Faites place à vos progrès.",
      local: "Planification locale par règles · Hors ligne",
      emptyTitle: "Votre prochain objectif commence ici",
      emptyText:
        "Définissez un objectif et réservez-lui du temps. Transformez votre direction en actions quotidiennes.",
      start: "Créer votre premier objectif →",
      foot: "Avancez à votre rythme. Faites glisser l’en-tête des cartes pour les déplacer.",
      calendar: "Calendrier et programme",
      today: "Les petits pas du jour",
      privacy:
        "◈ Les objectifs sont enregistrés dans ce navigateur. Exportez régulièrement une sauvegarde. Ce site utilise Umami pour les statistiques et un service externe de pays par IP pour proposer la langue à la première visite.",
      editorTitle: "Un plan pour votre objectif",
      taskName: "Nom de l’objectif",
      startDate: "Date de début",
      endDate: "Fin prévue",
      weekly: "Disponibilités hebdomadaires (1 heure par créneau)",
      adjust: "Ajuster les dates · Ajouter ou supprimer des créneaux",
      adjustHelp:
        "Sélectionnez plusieurs dates pour une modification groupée ou ajustez une seule journée.",
      selectDate: "Sélectionner une date",
      allow: "Ajouter un créneau",
      remove: "Supprimer un créneau",
      goal: "Résultat ou compétence visée",
      baseline: "Situation actuelle",
      plannerHint:
        "Trois étapes : bases, pratique et bilan. Aucune IA n’est utilisée et les résultats ne sont pas garantis.",
      generate: "✳ Générer le plan (règles locales)",
      chooseMonth: "Choisir le mois",
      aboutText:
        "Tanvior réunit objectifs, disponibilités, actions quotidiennes et progression. Cette version utilise des règles locales, sans service d’IA ni compte cloud. Exportez régulièrement vos données.",
      total: "Objectifs en cours",
      sessions: "Créneaux d’action",
      average: "Progression globale",
      unit: "",
      noToday:
        "Rien de prévu aujourd’hui. Prenez du temps pour vous ou lancez un nouvel objectif.",
      none: "Aucune séance ce jour-là.",
      target: "Compétence visée",
      initial: "Point de départ",
      period: "Période du plan",
      mark: "Marquer",
      unmark: "Démarquer",
      delete: "Supprimer",
      confirm:
        "Supprimer cet objectif et toute sa progression ? Cette action est irréversible.",
      reason: "Plan et explication",
      reasonText:
        "Les créneaux disponibles sont classés puis répartis en trois étapes : bases, pratique et bilan. Chaque créneau dure une heure. Les étapes sont réparties selon le nombre de créneaux. L’objectif oriente chaque action et la situation initiale est conservée pour comparaison. Ces règles n’évaluent pas la difficulté réelle ; adaptez vos attentes à votre situation.",
      milestone: "Fin prévue / résultat",
      week: "Semaine",
      print: "Imprimer / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "Sauvegarde JSON",
      date: "Date",
      time: "Heure",
      task: "Objectif",
      action: "Action",
      progress: "Terminé %",
      month: "Programme mensuel",
      emptyMonth: "Aucune séance ce mois-ci",
      invalid:
        "Saisissez des dates valides : la fin doit suivre le début ou être le même jour, sur 366 jours maximum.",
      saved: "Enregistré",
      storage:
        "Le stockage du navigateur est indisponible. Exportez une sauvegarde et vérifiez les autorisations.",
      corrupt:
        "Impossible de lire les données ; elles n’ont pas été écrasées. Exportez une sauvegarde avant de vérifier le stockage.",
      conflict:
        "Certains créneaux chevauchent d’autres objectifs. Vérifiez le calendrier.",
      selected: "Dates sélectionnées",
      override: "Ajustement",
      hours: "heures",
      addDateError: "Choisissez une date dans la période du plan.",
      noDate: "Sélectionnez d’abord une date.",
      importBackup: "Importer une sauvegarde",
      restoreConfirm:
        "L’importation remplacera vos objectifs actuels. Sauvegardez-les d’abord. Continuer ?",
      invalidBackup:
        "Sauvegarde non valide ; les données actuelles n’ont pas été modifiées.",
      restored: "Sauvegarde restaurée",
      introTitle: "Faites de vos objectifs une habitude.",
      introText:
        "D’une idée aux actions quotidiennes. Réunissez objectifs, temps et progrès dans un espace clair.",
      enter: "Ouvrir mon espace →",
      introHint:
        "Ouverture dans 15 secondes · Objectifs conservés dans ce navigateur",
      requiredFields:
        "Indiquez un nom, un résultat et votre situation actuelle.",
      taskLimit:
        "Limite : 100 objectifs. Exportez et supprimez les objectifs terminés.",
      emptySchedule: "Sélectionnez au moins un créneau disponible.",
      close: "Fermer",
      previousMonth: "Mois précédent",
      nextMonth: "Mois suivant",
      clear: "Effacer",
    },
    ko: {
      tagline: "되고 싶은 나를 위한 시간을 만드세요",
      language: "언어",
      workspace: "내 작업 공간",
      projects: "목표와 계획",
      newTask: "＋ 새 목표",
      note: "작은 발걸음도 전진입니다. 모든 노력이 목표에 가까워지게 합니다.",
      about: "Tanvior 소개 ↗",
      overview: "성장을 위한 여유를 만드세요.",
      local: "로컬 규칙 기반 계획 · 오프라인 지원",
      emptyTitle: "다음 목표는 여기서 시작됩니다",
      emptyText:
        "목표를 적고 시간을 선택하세요. 방향을 매일의 실천으로 바꿔 보세요.",
      start: "첫 목표 만들기 →",
      foot: "자신의 속도로 나아가세요. 카드 상단을 드래그해 위치를 바꿀 수 있습니다.",
      calendar: "달력과 일정",
      today: "오늘의 작은 실천",
      privacy:
        "◈ 목표 데이터는 현재 브라우저에 저장됩니다. 정기적으로 백업하세요. 방문 통계에 Umami를 사용하며 첫 방문 시 외부 IP 국가 조회로 언어를 추천합니다.",
      editorTitle: "목표에 계획을 더하세요",
      taskName: "목표 이름",
      startDate: "시작일",
      endDate: "완료 예정일",
      weekly: "매주 가능한 시간 (블록당 1시간)",
      adjust: "날짜별 조정 · 시간 블록 추가 또는 삭제",
      adjustHelp: "여러 날짜를 선택해 일괄 변경하거나 하루씩 조정하세요.",
      selectDate: "날짜 선택",
      allow: "시간 추가",
      remove: "시간 삭제",
      goal: "달성할 결과 또는 역량",
      baseline: "현재 상태",
      plannerHint:
        "기초, 실천, 복습의 3단계로 계획합니다. AI를 호출하지 않으며 결과를 보장하지 않습니다.",
      generate: "✳ 계획 생성 (로컬 규칙)",
      chooseMonth: "월 선택",
      aboutText:
        "Tanvior는 목표, 가용 시간, 매일의 실천과 진척도를 한곳에 모읍니다. 이 버전은 AI 서비스나 클라우드 계정 없이 로컬 규칙을 사용합니다. 정기적으로 기록을 내보내세요.",
      total: "진행 중인 목표",
      sessions: "실천 시간 블록",
      average: "전체 진척도",
      unit: "개",
      noToday:
        "오늘은 일정이 없습니다. 나를 위한 시간을 갖거나 새 목표를 시작하세요.",
      none: "이 날짜에는 일정이 없습니다.",
      target: "목표 역량",
      initial: "시작 상태",
      period: "계획 기간",
      mark: "표시",
      unmark: "표시 해제",
      delete: "삭제",
      confirm: "이 목표와 모든 진척도를 삭제할까요? 되돌릴 수 없습니다.",
      reason: "계획 내용과 이유",
      reasonText:
        "가능한 시간을 순서대로 정렬해 기초, 실천, 복습의 3단계로 나눕니다. 각 블록은 1시간이며 단계는 블록 수에 따라 배분합니다. 목표는 행동의 방향을 나타내고 시작 상태는 비교를 위해 보관합니다. 이 규칙은 실제 난이도를 판단할 수 없으니 상황에 맞게 목표를 조정하세요.",
      milestone: "완료 예정 / 달성 목표",
      week: "주",
      print: "인쇄 / PDF",
      word: "Word (.doc)",
      excel: "Excel (.xls)",
      backup: "JSON 백업",
      date: "날짜",
      time: "시간",
      task: "목표",
      action: "실천 내용",
      progress: "완료 %",
      month: "월간 일정",
      emptyMonth: "이번 달에는 일정이 없습니다",
      invalid:
        "유효한 날짜를 입력하세요. 종료일은 시작일 이후 또는 같은 날이며 기간은 최대 366일입니다.",
      saved: "저장됨",
      storage:
        "브라우저에 저장할 수 없습니다. 백업을 내보내고 저장 권한을 확인하세요.",
      corrupt:
        "저장 데이터를 읽을 수 없습니다. 원본은 덮어쓰지 않았습니다. 백업을 내보낸 후 저장소를 확인하세요.",
      conflict: "다른 목표와 시간이 겹칩니다. 달력을 확인하세요.",
      selected: "선택한 날짜",
      override: "개별 조정",
      hours: "시간",
      addDateError: "계획 기간 내의 날짜를 선택하세요.",
      noDate: "먼저 날짜를 선택하세요.",
      importBackup: "백업 가져오기",
      restoreConfirm: "현재 목표가 대체됩니다. 먼저 백업하세요. 계속할까요?",
      invalidBackup: "잘못된 백업입니다. 현재 데이터는 변경되지 않았습니다.",
      restored: "백업 복원 완료",
      introTitle: "목표를 매일의 습관으로.",
      introText:
        "하나의 생각에서 매일의 실천까지. 목표, 시간, 진척도를 한 공간에 모으세요.",
      enter: "작업 공간으로 →",
      introHint: "15초 후 자동으로 열립니다 · 목표는 이 브라우저에 저장됩니다",
      requiredFields: "이름, 목표, 현재 상태를 입력하세요.",
      taskLimit: "목표는 최대 100개입니다. 완료한 목표를 내보내고 삭제하세요.",
      emptySchedule: "가능한 시간을 하나 이상 선택하세요.",
      close: "닫기",
      previousMonth: "이전 달",
      nextMonth: "다음 달",
      clear: "지우기",
    },
  };
  const phases = {
    zh: ["基础梳理", "专项实践", "复盘与验收"],
    en: ["Build foundations", "Focused practice", "Review and assess"],
    ja: ["基礎の整理", "実践練習", "振り返りと確認"],
    es: ["Fundamentos", "Práctica enfocada", "Revisión y evaluación"],
    fr: ["Acquérir les bases", "Mise en pratique", "Bilan et évaluation"],
    ko: ["기초 정리", "집중 실천", "복습 및 점검"],
  };
  for (const [language, labels] of Object.entries(phases))
    labels.forEach((label, index) => (copy[language][`phase${index}`] = label));
  const supported = Object.keys(copy);
  const locales = {
    zh: "zh-CN",
    en: "en",
    ja: "ja-JP",
    es: "es",
    fr: "fr",
    ko: "ko-KR",
  };
  function browserLanguage(languages = []) {
    for (const value of languages) {
      const language = String(value).toLowerCase().split(/[-_]/)[0];
      if (supported.includes(language)) return language;
    }
    return "en";
  }
  const countries = {
    zh: "CN TW HK MO",
    ja: "JP",
    ko: "KR KP",
    es: "ES MX AR BO CL CO CR CU DO EC GQ GT HN NI PA PE PR PY SV UY VE",
    fr: "FR MC BJ BF BI CD CF CG CI CM DJ GA GN GP GF HT KM MG ML MQ NC NE PF PM RE SN TD TG YT",
    en: "US GB AU NZ IE CA SG IN PH ZA NG GH KE UG TZ ZM ZW JM BS BB BZ TT GY MT FJ PG",
  };
  function countryLanguage(country, languages = []) {
    const code = typeof country === "string" ? country.toUpperCase() : "";
    // In multilingual countries, prefer a matching browser language when supported.
    const multilingual = {
      CA: ["en", "fr"],
      BE: ["fr", "en"],
      CH: ["fr", "en"],
      SG: ["en", "zh"],
    };
    if (multilingual[code]) {
      const preference = browserLanguage(languages);
      return multilingual[code].includes(preference)
        ? preference
        : multilingual[code][0];
    }
    for (const [language, codes] of Object.entries(countries)) {
      if (codes.split(" ").includes(code)) return language;
    }
    return browserLanguage(languages);
  }
  async function detectLanguage(
    languages = [],
    fetcher = globalThis.fetch,
    timeoutMs = 2000,
  ) {
    const controller = new AbortController();
    let timer;
    try {
      // Race independently of fetch abort support, so a slow provider cannot block startup.
      const result = await Promise.race([
        (async () => {
          const response = await fetcher("https://api.country.is/", {
            signal: controller.signal,
            credentials: "omit",
            referrerPolicy: "no-referrer",
            cache: "no-store",
          });
          if (!response.ok) throw new Error("Country lookup unavailable");
          const data = await response.json();
          return countryLanguage(data.country, languages);
        })(),
        new Promise((resolve) => {
          timer = setTimeout(() => {
            controller.abort();
            resolve(browserLanguage(languages));
          }, timeoutMs);
        }),
      ]);
      return result;
    } catch {
      return browserLanguage(languages);
    } finally {
      clearTimeout(timer);
      controller.abort();
    }
  }
  const api = {
    copy,
    supported,
    locales,
    browserLanguage,
    countryLanguage,
    detectLanguage,
  };
  if (typeof module !== "undefined") module.exports = api;
  else root.TanviorI18n = api;
})(globalThis);
