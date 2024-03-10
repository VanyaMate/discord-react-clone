import { describe, it } from 'vitest';
import TitleRenderIt from '@/shared/ui/typography/Title/_tests_/Title.render.it.tsx';
import TitleRenderWithLevelIt
    from '@/shared/ui/typography/Title/_tests_/Title.render-with-level.it.tsx';


describe('Title', () => {
    it('Render', TitleRenderIt);
    it('Render with levels', TitleRenderWithLevelIt);
});