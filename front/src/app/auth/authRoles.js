/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    entreprise : ['admin', 'entreprise'],
    etudiant : ['admin', 'etudiant'],
    artisant : ['admin', 'artisant'],
    architecte : ['admin', 'architecte'],
    user : ['admin', 'entreprise', 'artisant','etudiant', 'architecte'],
    onlyGuest: []
};

export default authRoles;
