import { Injectable } from '@angular/core';

function _window() : any {
	return window;
}

@Injectable()
export class DashboardService {
	get nativeWindow() : any {
		return _window();
	}
  constructor() { }

}
