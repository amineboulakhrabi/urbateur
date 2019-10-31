import React, {useEffect, useRef} from 'react';
import {FusePageSimple, DemoContent} from '@fuse';
import Breadcrumb from './Breadcrumb';
import FileList from './FileList';
import * as Actions from './store/actions';
import {Tab, Tabs} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles({
    layoutRoot: {}
});

function AdminInterface()
{
    const dispatch = useDispatch();
    const pageLayout = useRef(null);
    const classes = useStyles();
    const files = useSelector(({AdminInterface}) => AdminInterface.files);
    const selectedItem = useSelector(({AdminInterface}) => files[AdminInterface.selectedItemId]);


    useEffect(() => {
        dispatch(Actions.getFiles());
    }, [dispatch]);


    return (
        <FusePageSimple
            classes={{
                root   : classes.layoutRoot,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div className="p-24"><h2>Interface d'Administrateur</h2></div>
            }
            contentToolbar={
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
                    <Tab className="h-64" label="Australie"/>
                    <Tab className="h-64" label="Asie"/>
                    <Tab className="h-64" label="Amérique du nord"/>
                    <Tab className="h-64" label="Amérique du sud"/>
                </Tabs>
            }
            content={
                <div className="p-24">
                    {selectedTab === 0 &&
                    (
                        <div>
                            <h3 className="mb-16">Item One</h3>
                            <FileList pageLayout={pageLayout}/>
                                   
                            
                        </div>
                    )}
                    {selectedTab === 1 && (
                        <div>
                            <h3 className="mb-16">Item Two</h3>
                            <DemoContent/>
                        </div>
                    )}
                    {selectedTab === 2 && (
                        <div>
                            <h3 className="mb-16">Item Three</h3>
                            <DemoContent/>
                        </div>
                    )}
                    {selectedTab === 3 && (
                        <div>
                            <h3 className="mb-16">Item Four</h3>
                            <DemoContent/>
                        </div>
                    )}
                    {selectedTab === 4 && (
                        <div>
                            <h3 className="mb-16">Item Five</h3>
                            <DemoContent/>
                        </div>
                    )}
                    {selectedTab === 5 && (
                        <div>
                            <h3 className="mb-16">Item Six</h3>
                            <DemoContent/>
                        </div>
                    )}
                    {selectedTab === 6 && (
                        <div>
                            <h3 className="mb-16">Item Seven</h3>
                            <DemoContent/>
                        </div>
                    )}
                </div>
            }
        />
    )
}

export default AdminInterface;
