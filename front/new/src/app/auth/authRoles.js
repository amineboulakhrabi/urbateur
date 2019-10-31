/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    entreprise : ['admin', 'entreprise'],
    etudiant : ['admin', 'etudiant'],
    artisan : ['admin', 'artisan'],
    architect : ['admin', 'architect'],
    user : ['admin', 'entreprise', 'artisan','etudiant', 'architect'],
    onlyGuest: []
};

export default authRoles;
