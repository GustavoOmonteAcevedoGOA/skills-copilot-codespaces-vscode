function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberCOntroller',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}