import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header/Header';
import Dashboard from './Dashboard';

import Contacts from './views/studio/Contacts';
import Invoices from './views/commerce/Invoices';
import Orders from './views/commerce/Orders';
import Payments from './views/commerce/Payments';
import Pricing from './views/commerce/Pricing';
import Galleries from './views/photos/Galleries';
import MobileApps from './views/photos/MobileApps';
import Music from './views/photos/Music';
import Tools from './views/photos/Tools';
import Watermarks from './views/photos/Watermarks';
import GalleryVisitors from './views/reports/GalleryVisitors';
import InvoicePayments from './views/reports/InvoicePayments';
import Items from './views/reports/Items';
import OrderFiles from './views/reports/OrderFiles';
import Sales from './views/reports/Sales';
import ColorsAndLogos from './views/studio/ColorsAndLogos';
import Contracts from './views/studio/Contracts';
import AcceptCreditCards from './views/user/AcceptCreditCards';
import ContactInfo from './views/user/ContactInfo';
import Integrations from './views/user/Integrations';
import Logout from './views/user/Logout';
import PlanAndBilling from './views/user/PlanAndBilling';
import ReferAFriend from './views/user/ReferAFriend';
import UsersAndPermissions from './views/user/UsersAndPermissions';
import ShootProofHome from './views/studio/ShootProofHome';


const App = () =>{
    return(
        <div>
            <BrowserRouter >
            <Header />
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/commerce/invoices' component={Invoices} />
                <Route path='/commerce/orders' component={Orders} />
                <Route path='/commerce/payments' component={Payments} />
                <Route path='/commerce/pricing' component={Pricing} />
                <Route path='/photos/galleries' component={Galleries} />
                <Route path='/photos/mobile-apps' component={MobileApps} />
                <Route path='/photos/music' component={Music} />
                <Route path='/photos/tools' component={Tools} />
                <Route path='/photos/watermarks' component={Watermarks} />
                <Route path='/reports/gallery-visitors' component={GalleryVisitors} />
                <Route path='/reports/invoice-payments' component={InvoicePayments} />
                <Route path='/reports/items' component={Items} />
                <Route path='/reports/order-files' component={OrderFiles} />
                {/* same component as commerce/orders */}
                <Route path='/reports/orders' component={Orders} />
                <Route path='/reports/sales' component={Sales} />
                <Route path='/studio/colors-&amp;-logos' component={ColorsAndLogos} />
                <Route path='/studio/contacts' component={Contacts} />
                <Route path='/studio/contracts' component={Contracts} />
                <Route path='/studio/shootproof-homepage' component={ShootProofHome} />
                <Route path='/user/accept-credit-cards' component={AcceptCreditCards}/>
                <Route path='/user/contact-info' component={ContactInfo}/>
                <Route path='/user/integrations' component={Integrations}/>
                <Route path='/user/logout' component={Logout}/>
                <Route path='/user/plan-and-billing' component={PlanAndBilling}/>
                <Route path='/user/refer-a-friend' component={ReferAFriend}/>
                <Route path='/user/users-and-permissions' component={UsersAndPermissions}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;