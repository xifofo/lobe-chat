import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  LanguagesIcon,
  LayoutPanelTop,
  MicroscopeIcon,
  PrinterIcon,
  TerminalSquareIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { AssistantCategory } from '@/types/discover';

import { ICON_SIZE } from '../../../components/CategoryMenu';

export const useCategory = (fontsize?: number) => {
  const theme = useTheme();

  const { t } = useTranslation('discover');

  const size = fontsize ? { fontSize: fontsize } : ICON_SIZE;

  return [
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LayoutPanelTop} size={size} />,
      key: AssistantCategory.All,
      label: t('category.assistant.all'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={MicroscopeIcon} size={size} />,
      key: AssistantCategory.Academic,
      label: t('category.assistant.academic'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={BriefcaseIcon} size={size} />,
      key: AssistantCategory.Career,
      label: t('category.assistant.career'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={GraduationCapIcon} size={size} />,
      key: AssistantCategory.Education,
      label: t('category.assistant.education'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={PrinterIcon} size={size} />,
      key: AssistantCategory.Office,
      label: t('category.assistant.office'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={TerminalSquareIcon} size={size} />,
      key: AssistantCategory.Programming,
      label: t('category.assistant.programming'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LanguagesIcon} size={size} />,
      key: AssistantCategory.Translation,
      label: t('category.assistant.translation'),
    },
  ];
};

export const useCategoryItem = (key?: AssistantCategory, fontsize?: number) => {
  const items = useCategory(fontsize);
  if (!key) return;
  return items.find((item) => item.key === key);
};
