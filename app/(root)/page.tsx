import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Adrian'};
  return (
    <section className="home">
        <div className="home-content">
            <div className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome to Duck Bank"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions with ease."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </div>
        </div>
    </section>
  )
}

export default Home