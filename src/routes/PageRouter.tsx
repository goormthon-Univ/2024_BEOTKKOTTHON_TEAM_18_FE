import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import HFLayout from '@/routes/HFLayout.tsx';
import HLayout from '@/routes/HLayout.tsx';
import DdeepCreate from '@/pages/Ddeep/DdeepCreate.tsx';
import DdeepDetail from '@/pages/Ddeep/DdeepDetail.tsx';
import MyPage from '@/pages/MyPage';
import DdeepMoreParticipating from '@/pages/Ddeep/DdeepMoreParticipating.tsx';
import DdeepMoreRecruiting from '@/pages/Ddeep/DdeepMoreRecruiting.tsx';
import Notification from '@/pages/Notification';

const PageRouter = () => {
  return (
    <Routes>
      <Route element={<HFLayout headerVariant={'default'} />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'띱 만들기'}
          />
        }>
        <Route
          path={'/ddeep/create'}
          element={<DdeepCreate />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'알림'}
          />
        }>
        <Route
          path={'/notification'}
          element={<Notification />}
        />
      </Route>
      <Route
        element={
          <HFLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'마이페이지'}
          />
        }>
        <Route
          path={'/mypage'}
          element={<MyPage />}
        />
      </Route>
      <Route
        element={
          <HLayout
            headerVariant={'back'}
            backPath={'/'}
            headerTitle={'모집중인 띱'}
          />
        }>
        <Route
          path={'/ddeep/:id'}
          element={<DdeepDetail />}
        />
      </Route>
      <Route
        element={
          <HLayout
            headerVariant={'back'}
            headerTitle={'참여중인 띱'}
            backPath={'/'}
          />
        }>
        <Route
          path={'/ddeep/more/participating'}
          element={<DdeepMoreParticipating />}
        />
      </Route>
      <Route
        element={
          <HLayout
            headerVariant={'back'}
            headerTitle={'모집중인 띱'}
            backPath={'/'}
          />
        }>
        <Route
          path={'/ddeep/more/recruiting'}
          element={<DdeepMoreRecruiting />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
};

export default PageRouter;
