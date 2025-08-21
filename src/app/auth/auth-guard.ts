import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.isAuthenticated();
};
export const authGuardChild: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.isRoleAdmin();
};
