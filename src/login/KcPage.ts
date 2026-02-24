import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/login';
import { UserProfileFormFieldsComponent } from './components/user-profile-form-fields/user-profile-form-fields.component';
import { TemplateComponent } from './template/template.component';
import type { ClassKey } from 'keycloakify/login';
import type { KcContext } from './KcContext';
import './main.css';
import { IdpReviewUserProfileComponent } from './pages/idp-review-user-profile/idp-review-user-profile.component';

export const classes = {} satisfies Partial<Record<ClassKey, string>>;
export const doUseDefaultCss = true;
export const doMakeUserConfirmPassword = true;


export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
  switch (pageId) {
    default:
      return {
        PageComponent: await getDefaultPageComponent(pageId),
        TemplateComponent,
        UserProfileFormFieldsComponent,
        doMakeUserConfirmPassword,
        doUseDefaultCss,
        classes,
      };
  }
}
