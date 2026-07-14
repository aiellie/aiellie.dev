import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  CheckmarkCircle02Icon,
  CircleIcon,
  CircleOffIcon,
  HelpCircleIcon,
  Timer01Icon,
} from "@hugeicons/core-free-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircleIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer01Icon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckmarkCircle02Icon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOffIcon,
  },
  {
    value: "ongoing",
    label: "Ongoing",
    icon: Timer01Icon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown01Icon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight01Icon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp01Icon,
  },
]
