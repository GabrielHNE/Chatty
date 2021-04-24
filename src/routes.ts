import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const settingsCotroller = new SettingsController();
const routes = Router();

routes.post('/settings', settingsCotroller.create);

export { routes };