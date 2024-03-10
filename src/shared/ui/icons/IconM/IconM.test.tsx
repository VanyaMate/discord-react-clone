import { describe, it } from 'vitest';
import IconMRenderIt from '@/shared/ui/icons/IconM/_tests_/IconM.render.it.tsx';
import IconMRenderWithAriaIt
    from '@/shared/ui/icons/IconM/_tests_/IconM.render-with-aria.it.tsx';


describe('IconM', () => {
    it('Render', IconMRenderIt);
    it('Render with aria', IconMRenderWithAriaIt);
});