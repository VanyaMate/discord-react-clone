import ComponentRenderIt from '$/_tests_/components/Component.render.it.tsx';
import Title, { TitleProps } from '@/shared/ui/typography/Title/Title.tsx';


export default ComponentRenderIt<TitleProps>(Title, { children: 'Simple', level: 1 }, {
    text: 'Simple',
    role: 'heading',
});