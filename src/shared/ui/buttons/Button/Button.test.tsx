import { describe, it } from 'vitest';
import ButtonRenderButtonIt
    from '@/shared/ui/buttons/Button/_tests_/Button.render.it.tsx';
import ButtonRenderWithStylesIt
    from '@/shared/ui/buttons/Button/_tests_/Button.render-with-styles.it.tsx';
import ButtonRenderWithStyletypesIt
    from '@/shared/ui/buttons/Button/_tests_/Button.render-with-styletypes.it.tsx';
import ButtonOnclickWordsAndDataIt
    from '@/shared/ui/buttons/Button/_tests_/Button.onclick-words-and-data.it.tsx';


describe('Button', () => {
    it('Render', ButtonRenderButtonIt);
    it('Render with styles', ButtonRenderWithStylesIt);
    it('Render with styleTypes', ButtonRenderWithStyletypesIt);
    it('OnClick and OnClickAsync works + data', ButtonOnclickWordsAndDataIt);
});