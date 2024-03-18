import { Router } from "express";
import multer from "multer";

import { CreateUserController } from './controllers/user/CreateUserController'
import { UpdateUserController } from './controllers/user/UpdateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";
import { ListUserController } from './controllers/user/ListUserController'

import { CreateTherapyController } from "./controllers/therapy/CreateTherapyController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListTherapyController } from "./controllers/therapy/ListTherapyController";
import { CreateTherapistController } from "./controllers/therapist/CreateTherapistController";
import { CreateAdminController } from "./controllers/admin/CreateAdminController";
import { AttachTherapyController } from "./controllers/therapist/AttachTherapyController";
import { CreateScheduleController } from "./controllers/schedule/CreateScheduleController";
import { CreateHourController } from "./controllers/hour/CreateHourController";
import { ListScheduleController } from "./controllers/schedule/ListScheduleController";
import { UpdateHourController } from "./controllers/hour/UpdateHourController";
import { UpdateScheduleController } from "./controllers/schedule/UpdateScheduleController";
import { FindHourIdController } from "./controllers/hour/FindHourIdController";
import { DeleteHourController } from "./controllers/hour/DeleteHourController";
import { AvailableHoursController } from "./controllers/hour/AvailableHoursController";
import { TherapistForTherapyController } from "./controllers/therapy/TherapistForTherapyController";
import { TherapyForTherapistController } from "./controllers/therapist/TherapyForTherapistController";
import { ListHoursScheduleController } from "./controllers/schedule/ListHoursScheduleController";
import { ListSchedulesByClientController } from "./controllers/schedule/ListSchedulesByClientController";
import { ListSchedulesByTherapistController } from "./controllers/schedule/ListSchedulesByTherapistController";
import { ListSchedulesByIdController } from "./controllers/schedule/ListSchedulesByIdController";
import { DeleteSchedulesByIdController } from "./controllers/schedule/DeleteSchedulesByIdController";
import { CreateRestrictionDateController } from "./controllers/schedule/CreateRestrictionDateController";
import { ListRestrictionDateController } from "./controllers/schedule/ListRestrictionDateController";
import { UpdateRestrictionDateController } from "./controllers/schedule/UpdateRestrictionDateController";
import { UpdateTherapyController } from "./controllers/therapy/UpdateTherapyController";
import { DeleteTherapyController } from "./controllers/therapy/DeleteTherapyController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { ListActiveUserController } from "./controllers/user/ListActiveUserController";
import { ListNoActiveUserController } from "./controllers/user/ListNoActiveUserController";
import { ActiveUserController } from "./controllers/user/ActiveUserController";
import { DadosClientController } from "./controllers/user/DadosClientController";
import { DadosAdminController } from "./controllers/admin/DadosAdminController";

import uploadConfig from './config/multer';

import { CreateBannerController } from "./controllers/home/CreateBannerControler";
import { ListBannerController } from "./controllers/home/ListBannerController";
import { CreateAboutController } from "./controllers/home/CreateAboutController";

const router = Router()

const upload = multer(uploadConfig.upload("./imgs"));

// -- Rotas USER --
router.post('/user/add', isAuthenticated, new CreateUserController().handle)
router.put('/user/up/:id', isAuthenticated, new UpdateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.get('/user/list', isAuthenticated, new ListUserController().handle)
router.put('/user/del/:id', isAuthenticated, new DeleteUserController().handle)
router.put('/user/act/:id', isAuthenticated, new ActiveUserController().handle)
router.get('/user/active/list', isAuthenticated, new ListActiveUserController().handle)
router.get('/user/noactive/list', isAuthenticated, new ListNoActiveUserController().handle)
router.get('/user/client/:id', new DadosClientController().handle)

// -- Rotas Therapy --
router.post('/therapy', isAuthenticated, new CreateTherapyController().handle)
router.get('/therapy', isAuthenticated, new ListTherapyController().handle)
router.put('/therapy/up/:id', isAuthenticated, new UpdateTherapyController().handle)
router.delete('/therapy/del/:id', isAuthenticated, new DeleteTherapyController().handle)
router.get('/therapy/therapist/:id', isAuthenticated, new TherapyForTherapistController().handle)

// -- Rotas Therapist --
router.post('/therapist/add', isAuthenticated, new CreateTherapistController().handle)
router.post('/therapist/add/therapy', isAuthenticated, new AttachTherapyController().handle)
router.get('/therapist/therapy/:id', isAuthenticated, new TherapistForTherapyController().handle)

// -- Rotas Admin --
router.post('/admin/add', isAuthenticated, new CreateAdminController().handle)
router.get('/user/admin/:id', isAuthenticated, new DadosAdminController().handle)
router.post('/admin/banner', isAuthenticated, upload.single('file'), new CreateBannerController().handle)

// Setup Home Page
router.get('/home/banner', new ListBannerController().handle)

// --Rotas Hour --
router.post('/hour/add', isAuthenticated, new CreateHourController().handle)
router.get('/hour/available', isAuthenticated, new AvailableHoursController().handle)
router.put('/hour/up/:id', isAuthenticated, new UpdateHourController().handle)
router.get('/hour/:id', isAuthenticated, new FindHourIdController().handle)
router.delete('/hour/:id', isAuthenticated, new DeleteHourController().handle)


// -- Rotas Schedule --
router.post('/schedule', isAuthenticated, new CreateScheduleController().handle)
router.get('/schedule', isAuthenticated, new ListScheduleController().handle)
router.get('/schedule/hours/:p1/:p2', isAuthenticated, new ListHoursScheduleController().handle)
router.get('/schedule/list/therapist/:id', isAuthenticated, new ListSchedulesByTherapistController().handle)
router.get('/schedule/list/client/:id', isAuthenticated, new ListSchedulesByClientController().handle)
router.get('/schedule/list/:id', isAuthenticated, new ListSchedulesByIdController().handle)
router.put('/schedule/up/:id', isAuthenticated, new UpdateScheduleController().handle)
router.delete('/schedule/del/:id', isAuthenticated, new DeleteSchedulesByIdController().handle)

// Restrictions Schedules
router.post('/schedule/add/restriction/:id', isAuthenticated, new CreateRestrictionDateController().handle)
router.get('/schedule/list/restriction/:id', isAuthenticated, new ListRestrictionDateController().handle)
router.put('/schedule/up/restriction/:p1', isAuthenticated, new UpdateRestrictionDateController().handle)

// Setup Home Page
// Banner - Carrossel
router.post('/home/slide', isAuthenticated, upload.single('file'), new CreateBannerController().handle)
router.get('/home/slide', new ListBannerController().handle)

// About
router.post('/home/about', isAuthenticated, upload.single('file'), new CreateAboutController().handle)

export { router }
