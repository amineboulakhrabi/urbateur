import React, {useEffect, useRef,useState} from 'react';

import {FusePageSimple} from '@fuse';
import {useDispatch} from 'react-redux';

import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import FileList from './FileList';
import {Tab, Tabs} from '@material-ui/core';
import DetailSidebarHeader from './DetailSidebarHeader';
import DetailSidebarContent from './DetailSidebarContent';
import MainSidebarHeader from './MainSidebarHeader';
import MainSidebarContent from './MainSidebarContent';


function FileManagerApp()
{
    const dispatch = useDispatch();
    //const files = useSelector(({fileManagerApp}) => fileManagerApp.files);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };
    const pageLayout = useRef(null);

    useEffect(() => {
        dispatch(Actions.getFiles());
    }, [dispatch]);

    return (
        <FusePageSimple
            classes={{
                root         : "bg-red",
                header       : "h-96 min-h-96 sm:h-160 sm:min-h-160",
                sidebarHeader: "h-96 min-h-96 sm:h-160 sm:min-h-160",
                toolbar:"pw-16 sm:px-24"
            }}
            header={
                <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
                    <div className="flex items-center justify-between">
                    <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    className="w-full h-64 border-b-1"
                >
                    <Tab className="h-64" label="Afrique"/>
                    <Tab className="h-64" label="Europe"/>
                    <Tab className="h-64" label="Asie"/>
                    <Tab className="h-64" label="Item Four"/>
                </Tabs>
                    </div>
                    <div className="flex flex-1 items-end">
                        
                    </div>
                </div>
            }
            content={
                <div className="p-24">
                    {selectedTab === 0 &&
                    (
                        <div>
                            <FileList pageLayout={pageLayout}/>
                        </div>
                    )}
                    {selectedTab === 1 && (
                        <div>
                            <h3 className="mb-16">Item Two</h3>
                            
                        </div>
                    )}
                    {selectedTab === 2 && (
                        <div>
                            <h3 className="mb-16">Item Three</h3>
                            
                        </div>
                    )}
                    {selectedTab === 3 && (
                        <div>
                            <h3 className="mb-16">Item Four</h3>
                            
                        </div>
                    )}
                    {selectedTab === 4 && (
                        <div>
                            <h3 className="mb-16">Item Five</h3>
                            
                        </div>
                    )}
                    {selectedTab === 5 && (
                        <div>
                            <h3 className="mb-16">Item Six</h3>
                            
                        </div>
                    )}
                    {selectedTab === 6 && (
                        <div>
                            <h3 className="mb-16">Item Seven</h3>
                            
                        </div>
                    )}
                </div>
            
            }
            leftSidebarVariant="temporary"
            leftSidebarHeader={
                <MainSidebarHeader/>
            }
            leftSidebarContent={
                <MainSidebarContent/>
            }
            rightSidebarHeader={
                <DetailSidebarHeader/>
            }
            rightSidebarContent={
                <DetailSidebarContent/>
            }
            ref={pageLayout}
            innerScroll
        />
    )
}

export default withReducer('fileManagerApp', reducer)(FileManagerApp);
