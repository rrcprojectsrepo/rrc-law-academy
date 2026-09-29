import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  Compass,
  FileText,
  Gavel,
  Globe,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HelpCircle,
  Layers,
  Library,
  ListChecks,
  MessagesSquare,
  Newspaper,
  PenLine,
  RefreshCw,
  Repeat,
  Scale,
  Search,
  Timer,
  TrendingUp,
  ClipboardCheck,
  Users,
} from 'lucide-react';

const MAP = {
  school: GraduationCap,
  groups: Users,
  work: Briefcase,
  menu_book: BookOpen,
  verified: BadgeCheck,
  support_agent: Headphones,
  layers: Layers,
  update: RefreshCw,
  fact_check: ClipboardCheck,
  public: Globe,
  explore: Compass,
  gavel: Gavel,
  edit: PenLine,
  edit_document: FileText,
  manage_search: Search,
  forum: MessagesSquare,
  volunteer_activism: HeartHandshake,
  balance: Scale,
  schema: Layers,
  psychology: Brain,
  repeat: Repeat,
  timer: Timer,
  analytics: BarChart3,
  workspace_premium: Award,
  foundation: GraduationCap,
  refresh: RefreshCw,
  library_books: Library,
  quiz: ListChecks,
  newspaper: Newspaper,
  description: FileText,
  play_circle: ListChecks,
  check_circle: CheckCircle2,
  person: Users,
  trending_up: TrendingUp,
};

export default function RrcIcon({ name, size = 20, ...rest }) {
  if (!name) return null;
  // Allow passing a Lucide component directly or a React node.
  if (typeof name !== 'string') {
    const Node = name;
    return <Node size={size} aria-hidden="true" {...rest} />;
  }
  const Icon = MAP[name] ?? HelpCircle;
  return <Icon size={size} aria-hidden="true" {...rest} />;
}
