import angular from 'angular';
import '../entries/main.js';

angular.module('patientOverview', ['main'])
  .controller('patientOverviewController', ['$scope', '$http', 'localStorageService', function($scope, $http, localStorageService) {
    loginStatus();
    getPatientInfo();
    getFourDiagnostic();
    getTonguePulse();
    getPhyAChe();
    getLiverPhy();
    getBone();
    getSimpleAIH();
    getComplexAIHBeforeTreatment();
    getComplexAIHAfterTreatment();
    getTreatment();
    getMedicine();
    getFinal();

    function getPatientInfo() {
      $http({
        method: 'GET',
        url: '/api/patient/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        $scope.patientName = response.data.name;
        $scope.patientNumber = response.data.identifier;
      });
    }

    function loginStatus() {
      if (!localStorageService.get('user')) {
        window.location.href = '/login.html';
      }
    }

    function getFourDiagnostic() {
      $http({
        method: 'GET',
        url: '/api/fourDiagnosticInfor/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var fourDiagnostic = response.data;
        switch (fourDiagnostic.fatigue) {
          case 0:
            $scope.fatigue = '无';
            break;
          case 1:
            $scope.fatigue = '肢体乏力，勉强坚持日常生活';
            break;
          case 2:
            $scope.fatigue = '肢体稍倦，可坚持轻体力工作';
            break;
          case 3:
            $scope.fatigue = '全身无力，终日不愿活动';
            break;
        }

        switch (fourDiagnostic.skinItching) {
          case 0:
            $scope.skinItching = '无';
            break;
          case 1:
            $scope.skinItching = '偶有，不影响日常生活';
            break;
          case 2:
            $scope.skinItching = '时常有，轻度影响日常生活';
            break;
          case 3:
            $scope.skinItching = '整日瘙痒，影响日常生活';
            break;
        }

        switch (fourDiagnostic.twoEyesDry) {
          case 0:
            $scope.twoEyesDry = '无';
            break;
          case 1:
            $scope.twoEyesDry = '自觉有时目干';
            break;
          case 2:
            $scope.twoEyesDry = '经常两目干涩';
            break;
          case 3:
            $scope.twoEyesDry = '整日两目干涩';
            break;
        }

        switch (fourDiagnostic.blurredVision) {
          case 0:
            $scope.blurredVision = '无';
            break;
          case 1:
            $scope.blurredVision = '久视后视物不清';
            break;
          case 2:
            $scope.blurredVision = '视物不清';
            break;
          case 3:
            $scope.blurredVision = '视物困难';
            break;
        }

        switch (fourDiagnostic.depression) {
          case 0:
            $scope.depression = '无';
            break;
          case 1:
            $scope.depression = '有时情绪低落';
            break;
          case 2:
            $scope.depression = '经常情绪低落';
            break;
          case 3:
            $scope.depression = '有厌世倾向';
            break;
        }

        switch (fourDiagnostic.irritability) {
          case 0:
            $scope.irritability = '无';
            break;
          case 1:
            $scope.irritability = '偶见烦躁';
            break;
          case 2:
            $scope.irritability = '经常烦躁不安';
            break;
          case 3:
            $scope.irritability = '一触即怒';
            break;
        }

        switch (fourDiagnostic.insomnia) {
          case 0:
            $scope.insomnia = '无';
            break;
          case 1:
            $scope.insomnia = '睡眠不足6小时';
            break;
          case 2:
            $scope.insomnia = '睡眠不足4小时';
            break;
          case 3:
            $scope.insomnia = '彻夜难眠';
            break;
        }

        switch (fourDiagnostic.easyWakeUp) {
          case 0:
            $scope.easyWakeUp = '无';
            break;
          case 1:
            $scope.easyWakeUp = '每夜眠后醒1-2次';
            break;
          case 2:
            $scope.easyWakeUp = '每夜眠后醒3-4次';
            break;
          case 3:
            $scope.easyWakeUp = '每夜醒5次以上';
            break;
        }

        switch (fourDiagnostic.tinnitus) {
          case 0:
            $scope.tinnitus = '无';
            break;
          case 1:
            $scope.tinnitus = '偶见轻微耳鸣';
            break;
          case 2:
            $scope.tinnitus = '阵发耳鸣，休息后缓解';
            break;
          case 3:
            $scope.tinnitus = '耳鸣持续不解';
            break;
        }

        switch (fourDiagnostic.dryMouth) {
          case 0:
            $scope.dryMouth = '无';
            break;
          case 1:
            $scope.dryMouth = '偶有或晨起口干';
            break;
          case 2:
            $scope.dryMouth = '时感口干';
            break;
          case 3:
            $scope.dryMouth = '整日口干';
            break;
        }

        switch (fourDiagnostic.mouthPain) {
          case 0:
            $scope.mouthPain = '无';
            break;
          case 1:
            $scope.mouthPain = '偶有或晨起口苦';
            break;
          case 2:
            $scope.mouthPain = '时有口苦';
            break;
          case 3:
            $scope.mouthPain = '整日口苦';
            break;
        }

        switch (fourDiagnostic.badBreath) {
          case 0:
            $scope.badBreath = '无';
            break;
          case 1:
            $scope.badBreath = '偶有或晨起口臭';
            break;
          case 2:
            $scope.badBreath = '时有口臭';
            break;
          case 3:
            $scope.badBreath = '整日口臭';
            break;
        }

        switch (fourDiagnostic.nausea) {
          case 0:
            $scope.nausea = '无';
            break;
          case 1:
            $scope.nausea = '偶有恶心';
            break;
          case 2:
            $scope.nausea = '每日恶心';
            break;
          case 3:
            $scope.nausea = '恶心频作';
            break;
        }

        switch (fourDiagnostic.belching) {
          case 0:
            $scope.belching = '无';
            break;
          case 1:
            $scope.belching = '偶有嗳气';
            break;
          case 2:
            $scope.belching = '食后嗳气频频';
            break;
          case 3:
            $scope.belching = '整日嗳气';
            break;
        }

        switch (fourDiagnostic.abdominalDistention) {
          case 0:
            $scope.abdominalDistention = '无';
            break;
          case 1:
            $scope.abdominalDistention = '进食后脘闷腹胀';
            break;
          case 2:
            $scope.abdominalDistention = '少量进食后即脘闷腹胀';
            break;
          case 3:
            $scope.abdominalDistention = '整日脘闷腹胀';
            break;
        }

        switch (fourDiagnostic.flankPainStinging) {
          case 0:
            $scope.flankPainStinging = '无';
            break;
          case 1:
            $scope.flankPainStinging = '偶有';
            break;
          case 2:
            $scope.flankPainStinging = '常有';
            break;
          case 3:
            $scope.flankPainStinging = '持续';
            break;
        }

        switch (fourDiagnostic.flankPainSwell) {
          case 0:
            $scope.flankPainSwell = '无';
            break;
          case 1:
            $scope.flankPainSwell = '偶有';
            break;
          case 2:
            $scope.flankPainSwell = '常有';
            break;
          case 3:
            $scope.flankPainSwell = '持续';
            break;
        }

        switch (fourDiagnostic.flankPainDull) {
          case 0:
            $scope.flankPainDull = '无';
            break;
          case 1:
            $scope.flankPainDull = '偶有';
            break;
          case 2:
            $scope.flankPainDull = '常有';
            break;
          case 3:
            $scope.flankPainDull = '持续';
            break;
        }

        switch (fourDiagnostic.flankPainDiscomfort) {
          case 0:
            $scope.flankPainDiscomfort = '无';
            break;
          case 1:
            $scope.flankPainDiscomfort = '偶有';
            break;
          case 2:
            $scope.flankPainDiscomfort = '常有';
            break;
          case 3:
            $scope.flankPainDiscomfort = '持续';
            break;
        }

        switch (fourDiagnostic.anorexia) {
          case 0:
            $scope.anorexia = '无';
            break;
          case 1:
            $scope.anorexia = '胃纳轻度减少';
            break;
          case 2:
            $scope.anorexia = '胃纳明显减少';
            break;
          case 3:
            $scope.anorexia = '不欲食';
            break;
        }

        switch (fourDiagnostic.aphrodisiacCold) {
          case 0:
            $scope.aphrodisiacCold = '无';
            break;
          case 1:
            $scope.aphrodisiacCold = '手足不温';
            break;
          case 2:
            $scope.aphrodisiacCold = '加衣被方可缓解';
            break;
          case 3:
            $scope.aphrodisiacCold = '加衣被不缓解';
            break;
        }

        switch (fourDiagnostic.limb) {
          case 0:
            $scope.limb = '无';
            break;
          case 1:
            $scope.limb = '下肢偶有沉重感';
            break;
          case 2:
            $scope.limb = '肢体沉重';
            break;
          case 3:
            $scope.limb = '肢体沉重，懒动';
            break;
        }

        switch (fourDiagnostic.backacheFootSoft) {
          case 0:
            $scope.backacheFootSoft = '无';
            break;
          case 1:
            $scope.backacheFootSoft = '偶有腰痠脚软';
            break;
          case 2:
            $scope.backacheFootSoft = '经常腰痠脚软';
            break;
          case 3:
            $scope.backacheFootSoft = '整日腰痠脚软';
            break;
        }

        switch (fourDiagnostic.handFootFanHot) {
          case 0:
            $scope.handFootFanHot = '无';
            break;
          case 1:
            $scope.handFootFanHot = '轻度手足烦热';
            break;
          case 2:
            $scope.handFootFanHot = '热甚，但能忍受';
            break;
          case 3:
            $scope.handFootFanHot = '热甚，情绪烦躁';
            break;
        }

        switch (fourDiagnostic.urineYellow) {
          case 0:
            $scope.urineYellow = '无';
            break;
          case 1:
            $scope.urineYellow = '色黄';
            break;
          case 2:
            $scope.urineYellow = '色深黄';
            break;
          case 3:
            $scope.urineYellow = '色黄赤';
            break;
        }

        switch (fourDiagnostic.constipation) {
          case 0:
            $scope.constipation = '无';
            break;
          case 1:
            $scope.constipation = '2日1行便之不爽';
            break;
          case 2:
            $scope.constipation = '3日一行';
            break;
          case 3:
            $scope.constipation = '>3日一行';
            break;
        }

        switch (fourDiagnostic.looseStools) {
          case 0:
            $scope.looseStools = '无';
            break;
          case 1:
            $scope.looseStools = '大便不成形';
            break;
          case 2:
            $scope.looseStools = '稀便，每日2-3次';
            break;
          case 3:
            $scope.looseStools = '稀便，4次以上';
            break;
        }

        switch (fourDiagnostic.perspiration) {
          case 0:
            $scope.perspiration = '无';
            break;
          case 1:
            $scope.perspiration = '偶有汗出';
            break;
          case 2:
            $scope.perspiration = '经常汗出';
            break;
          case 3:
            $scope.perspiration = '动辄汗出';
            break;
        }

        switch (fourDiagnostic.nightSweats) {
          case 0:
            $scope.nightSweats = '无';
            break;
          case 1:
            $scope.nightSweats = '偶有盗汗';
            break;
          case 2:
            $scope.nightSweats = '经常盗汗';
            break;
          case 3:
            $scope.nightSweats = '每晚盗汗';
            break;
        }

        switch (fourDiagnostic.lowerExtremityEdema) {
          case 0:
            $scope.lowerExtremityEdema = '无';
            break;
          case 1:
            $scope.lowerExtremityEdema = '踝关节以下';
            break;
          case 2:
            $scope.lowerExtremityEdema = '膝关节以下';
            break;
          case 3:
            $scope.lowerExtremityEdema = '膝关节以上';
            break;
        }

        switch (fourDiagnostic.faceDull) {
          case 0:
            $scope.faceDull = '无';
            break;
          case 1:
            $scope.faceDull = '色暗少光泽';
            break;
          case 2:
            $scope.faceDull = '色晦暗';
            break;
          case 3:
            $scope.faceDull = '色深褐无光';
            break;
        }

        switch (fourDiagnostic.eyeYellow) {
          case 0:
            $scope.eyeYellow = '无';
            break;
          case 1:
            $scope.eyeYellow = '色淡黄';
            break;
          case 2:
            $scope.eyeYellow = '色黄';
            break;
          case 3:
            $scope.eyeYellow = '色深黄';
            break;
        }

        switch (fourDiagnostic.bodyYellow) {
          case 0:
            $scope.bodyYellow = '无';
            break;
          case 1:
            $scope.bodyYellow = '色淡黄';
            break;
          case 2:
            $scope.bodyYellow = '色黄';
            break;
          case 3:
            $scope.bodyYellow = '色深黄';
            break;
        }

        switch (fourDiagnostic.spiderNevus) {
          case 0:
            $scope.spiderNevus = '无';
            break;
          case 1:
            $scope.spiderNevus = '偶见蜘蛛痣';
            break;
          case 2:
            $scope.spiderNevus = '有2~4个蜘蛛痣';
            break;
          case 3:
            $scope.spiderNevus = '5个以上蜘蛛痣';
            break;
        }

        switch (fourDiagnostic.liverPalm) {
          case 0:
            $scope.liverPalm = '无';
            break;
          case 1:
            $scope.liverPalm = '可疑肝掌';
            break;
          case 2:
            $scope.liverPalm = '肝掌';
            break;
          case 3:
            $scope.liverPalm = '明显肝掌';
            break;
        }

        switch (fourDiagnostic.abdominalVeins) {
          case 0:
            $scope.abdominalVeins = '无';
            break;
          case 1:
            $scope.abdominalVeins = '隐约可见';
            break;
          case 2:
            $scope.abdominalVeins = '清晰可见';
            break;
          case 3:
            $scope.abdominalVeins = '满腹脉络曲张';
            break;
        }

        switch (fourDiagnostic.yellowTumor) {
          case 0:
            $scope.yellowTumor = '无';
            break;
          case 1:
            $scope.yellowTumor = '隐约可见';
            break;
          case 2:
            $scope.yellowTumor = '清晰可见';
            break;
          case 3:
            $scope.yellowTumor = '明显突出皮肤';
            break;
        }
      });
    }

    function getTonguePulse() {
      $http({
        method: 'GET',
        url: '/api/tonguePulse/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var tonguePulse = response.data;
        $scope.tongue = tonguePulse.tongue;
        $scope.tonguePart = tonguePulse.tonguePart;
        $scope.tonguePartialDescription = tonguePulse.tonguePartialDescription;
        $scope.tongueBody = tonguePulse.tongueBody;
        $scope.mossy = tonguePulse.mossy;
        $scope.mossyPart = tonguePulse.mossyPart;
        $scope.mossyPartialDescription = tonguePulse.mossyPartialDescription;
        $scope.tongueColor = tonguePulse.tongueColor;
        $scope.tongueColorPart = tonguePulse.tongueColorPart;
        $scope.tongueColorPartialDescription = tonguePulse.tongueColorPartialDescription;
        $scope.sublingualVaricoseVeins = tonguePulse.sublingualVaricoseVeins;
        $scope.leftPulse = tonguePulse.leftPulse;
        $scope.rightPulse = tonguePulse.rightPulse;
      });
    }

    function getPhyAChe() {
      $http({
        method: 'GET',
        url: '/api/physical/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var phy = response.data;
        $scope.totalBileAcid = phy.totalBileAcid;
        $scope.liverFunctionAlbumin = phy.liverFunctionAlbumin;
        $scope.liverFunctionGlobulin = phy.liverFunctionGlobulin;
        $scope.liverFunctionALT = phy.liverFunctionALT;
        $scope.liverFunctionGGT = phy.liverFunctionGGT;
        $scope.liverFunctionAST = phy.liverFunctionAST;
        $scope.liverFunctionALP = phy.liverFunctionALP;
        $scope.liverFunctionTotalCholesterol = phy.liverFunctionTotalCholesterol;
        $scope.liverFunctionTotalBilirubin = phy.liverFunctionTotalBilirubin;
        $scope.liverFunctionDirectBilirubin = phy.liverFunctionDirectBilirubin;
        $scope.liverFunctionRglobulin = phy.liverFunctionRglobulin;
        $scope.renalFunctionBUN = phy.renalFunctionBUN;
        $scope.renalFunctionCr = phy.renalFunctionCr;
        $scope.clottingPT = phy.clottingPT;
        $scope.clottingINR = phy.clottingINR;
        $scope.bloodRoutineRBC = phy.bloodRoutineRBC;
        $scope.bloodRoutineHb = phy.bloodRoutineHb;
        $scope.bloodRoutineWBC = phy.bloodRoutineWBC;
        $scope.bloodRoutineNeutrophils = phy.bloodRoutineNeutrophils;
        $scope.bloodRoutineLymphocytes = phy.bloodRoutineLymphocytes;
        $scope.bloodRoutineEosinophils = phy.bloodRoutineEosinophils;
        $scope.bloodRoutinePlatelets = phy.bloodRoutinePlatelets;
        $scope.liverDiseaseAutoantibodiesAMA = phy.liverDiseaseAutoantibodiesAMA;
        $scope.liverDiseaseAutoantibodiesAMAM2 = phy.liverDiseaseAutoantibodiesAMAM2;
        $scope.liverDiseaseAutoantibodiesAntiSmoothMuscleAntibody = phy.liverDiseaseAutoantibodiesAntiSmoothMuscleAntibody;
        $scope.liverDiseaseAutoantibodiesLiverKidneyMicrosomalAntibodies = phy.liverDiseaseAutoantibodiesLiverKidneyMicrosomalAntibodies;
        $scope.liverDiseaseAutoantibodiesHepatocyteSoluteAntigen = phy.liverDiseaseAutoantibodiesHepatocyteSoluteAntigen;
        $scope.liverDiseaseAutoantibodiesSolubleLiverPancreaticAntigen = phy.liverDiseaseAutoantibodiesSolubleLiverPancreaticAntigen;
        $scope.liverDiseaseAutoantibodiesOther = phy.liverDiseaseAutoantibodiesOther;
        $scope.ANAHomogeneous = phy.anahomogeneous;
        $scope.ANAParticle = phy.anaparticle;
        $scope.ANAPeripheral = phy.anaperipheral;
        $scope.ANANucleolus = phy.ananucleolus;
        $scope.ANANucleolusEnhancement = phy.ananucleolusEnhancement;
        $scope.ANANuclear = phy.ananuclear;
        $scope.ANACentromere = phy.anacentromere;
        $scope.ANAOther = phy.anaother;
        $scope.humoralImmunityIgG = phy.humoralImmunityIgG;
        $scope.humoralImmunityIgA = phy.humoralImmunityIgA;
        $scope.humoralImmunityIgM = phy.humoralImmunityIgM;
        $scope.humoralImmunityImmuneComplexf = phy.humoralImmunityImmuneComplexf;
        $scope.humoralImmunityComplementC3 = phy.humoralImmunityComplementC3;
        $scope.humoralImmunityComplementC4 = phy.humoralImmunityComplementC4;
        $scope.humoralImmunityIgE = phy.humoralImmunityIgE;
        $scope.humoralImmunityKlightChain = phy.humoralImmunityKlightChain;
        $scope.humoralImmunityNlightChain = phy.humoralImmunityNlightChain;
        $scope.cellularImmunityCD3 = phy.cellularImmunityCD3;
        $scope.cellularImmunityCD4 = phy.cellularImmunityCD4;
        $scope.cellularImmunityCD8 = phy.cellularImmunityCD8;
        $scope.cellularImmunityCD56 = phy.cellularImmunityCD56;
        $scope.cellularImmunityCD2 = phy.cellularImmunityCD2;
        $scope.cellularImmunityCD4CD8 = phy.cellularImmunityCD4CD8;
        $scope.rheumaticImmuneRelatedAntibodies = phy.rheumaticImmuneRelatedAntibodies;
        switch (phy.ctmri) {
          case 0:
            $scope.CTMRI = '肝表面光滑，边缘锐，血管走向清晰';
            break;
          case 1:
            $scope.CTMRI = '肝表面光滑，回声增粗、增强、分布尚均匀，血管走向清晰';
            break;
          case 2:
            $scope.CTMRI = '肝表面光滑，边缘变钝，回声增粗、增强且分布不均匀，血管走向尚清晰';
            break;
          case 3:
            $scope.CTMRI = '肝表面光滑，回声增粗、增强、分布尚均匀，血管走向清晰';
            break;
          case 4:
            $scope.CTMRI = '肝表面呈波浪状（或锯齿状），肝回声增粗、增强且分布不均匀、呈结节状（或斑片状），肝缘钝化，肝内血管狭窄或粗细不等';
            break;
        }
        $scope.liverHardnessFibroscan = phy.liverHardnessFibroscan;
        $scope.liverHardnessFibrotest = phy.liverHardnessFibrotest;
        $scope.liverPuncturePathology = phy.liverPuncturePathology;
        $scope.copperProtein = phy.copperProtein;
        $scope.aFP = phy.aFP;
        $scope.carcinoembryonicAntigenCEA = phy.carcinoembryonicAntigenCEA;
        $scope.ca125 = phy.ca125;
        $scope.hbsag = phy.hbsag;
        $scope.hbsab = phy.hbsab;
        $scope.hbeag = phy.hbeag;
        $scope.hbeab = phy.hbeab;
        $scope.hbcab = phy.hbcab;
        $scope.hbvRna = phy.hbvRna;
        $scope.antiHCVantibody = phy.antiHCVantibody;
        $scope.hcvRna = phy.hcvRna;
        $scope.protein = phy.protein;
        $scope.redBloodCell = phy.redBloodCell;
        $scope.whiteBloodCell = phy.whiteBloodCell;
        $scope.bilirubin = phy.bilirubin;
        $scope.ca199 = phy.ca199;
        $scope.image = '/api/image/' + phy.imageUrl + '.jpg';
      });
    }

    function getLiverPhy() {
      $http({
        method: 'GET',
        url: '/api/liverPathology/choose/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var chooseList = response.data;
        if (chooseList[0]) {
          $scope.gsShow = true;
          $scope.ishakShow = false;
          $scope.haiShow = false;
          $http({
            method: 'GET',
            url: '/api/liverPathology/' + sessionStorage.getItem('patientId')
          }).then(function success(response) {
            var liver = response.data;
            $scope.inflammationLeaflets = liver.inflammationLeaflets - 1;
            $scope.interfacialInflammation = liver.interfacialInflammation - 1;
            $scope.portalAreaInflammation = liver.interfacialInflammation - 1;
            $scope.lymphocytePlasmaCellInfiltration = liver.lymphocytePlasmaCellInfiltration - 1;
            $scope.fibrousTissueHyperplasia = liver.fibrousTissueHyperplasia - 1;
            $scope.inflammationBileDuct = liver.inflammationBileDuct - 1;
            $scope.hepatocellularSteatosis = liver.hepatocellularSteatosis - 1;
            switch (liver.roseSample) {
              case 1:
                $scope.roseSample = '阴性';
                break;
              case 2:
                $scope.roseSample = '阳性';
                break;
            }
            switch (liver.hbsAg) {
              case 1:
                $scope.hbsAg = '阴性';
                break;
              case 2:
                $scope.hbsAg = '阳性';
                break;
            }
            switch (liver.hbcAg) {
              case 1:
                $scope.hbcAg = '阴性';
                break;
              case 2:
                $scope.hbcAg = '阳性';
                break;
            }
            switch (liver.hcv) {
              case 1:
                $scope.hcv = '阴性';
                break;
              case 2:
                $scope.hcv = '阳性';
                break;
            }
            switch (liver.other) {
              case 1:
                $scope.other = '阴性';
                break;
              case 2:
                $scope.other = '阳性';
                break;
            }
            switch (liver.diagnosis) {
              case 1:
                $scope.diagnosis = '阴性';
                break;
              case 2:
                $scope.diagnosis = '阳性';
                break;
            }
            $scope.remarks = liver.remarks;
          });
        } else if (chooseList[1]) {
          $scope.gsShow = false;
          $scope.ishakShow = true;
          $scope.haiShow = false;
          $http({
            url: '/api/ishak/' + sessionStorage.getItem('patientId'),
            method: 'GET'
          }).then(function success(response) {
            var ishakData = response.data;
            $scope.portalAreaInflammation = ishakData.portalAreaInflammation;
            $scope.lobularMobility = ishakData.lobularMobility;
            $scope.interfaceInflammation = ishakData.interfaceInflammation;
            $scope.confluentNecrosis = ishakData.confluentNecrosis;
            $scope.fibrosis = ishakData.fibrosis;
          });
        } else if (chooseList[2]) {
          $scope.gsShow = false;
          $scope.ishakShow = false;
          $scope.haiShow = true;
          $http({
            url: '/api/hai/' + sessionStorage.getItem('patientId'),
            method: 'GET'
          }).then(function success(response) {
            var haiData = response.data;
            $scope.portalAreaInflammation = haiData.portalAreaInflammation;
            if (haiData.lobularMobility == 1 || haiData.lobularMobility == 2) {
              $scope.lobularMobility = haiData.lobularMobility - 1;
            } else {
              $scope.lobularMobility = haiData.lobularMobility;
            }
            if (haiData.interfaceInflammation == 1 || haiData.interfaceInflammation == 2) {
              $scope.interfaceInflammation = haiData.interfaceInflammation - 1;
            } else if (haiData.interfaceInflammation == 7) {
              $scope.interfaceInflammation = 10;
            } else {
              $scope.interfaceInflammation = haiData.interfaceInflammation;
            }
          });
        }
      });



    }


    function getBone() {
      $http({
        method: 'GET',
        url: '/api/boneDensity/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var bone = response.data;
        $scope.lumbarSpine = bone.lumbarSpine;
        switch (bone.lumbarSpineT) {
          case 1:
            $scope.lumbarSpineT = '未检测';
            break;
          case 2:
            $scope.lumbarSpineT = '>1';
            break;
          case 3:
            $scope.lumbarSpineT = '-1~-2.5';
            break;
          case 4:
            $scope.lumbarSpineT = '<-2.5';
            break;
        }
        $scope.femoralNeck = bone.femoralNeck;
        switch (bone.femoralNeckT) {
          case 1:
            $scope.femoralNeckT = '未检测';
            break;
          case 2:
            $scope.femoralNeckT = '>1';
            break;
          case 3:
            $scope.femoralNeckT = '-1~-2.5';
            break;
          case 4:
            $scope.femoralNeckT = '<-2.5';
            break;
        }
        $scope.bigTrochanter = bone.bigTrochanter;
        switch (bone.bigTrochanterT) {
          case 1:
            $scope.bigTrochanterT = '未检测';
            break;
          case 2:
            $scope.bigTrochanterT = '>1';
            break;
          case 3:
            $scope.bigTrochanterT = '-1~-2.5';
            break;
          case 4:
            $scope.bigTrochanterT = '<-2.5';
            break;
        }
        $scope.fullHip = bone.fullHip;
        switch (bone.fullHipT) {
          case 1:
            $scope.fullHipT = '未检测';
            break;
          case 2:
            $scope.fullHipT = '>1';
            break;
          case 3:
            $scope.fullHipT = '-1~-2.5';
            break;
          case 4:
            $scope.fullHipT = '<-2.5';
            break;
        }
        switch (bone.diagnosis) {
          case 1:
            $scope.diagnosis = '骨量正常';
            break;
          case 2:
            $scope.diagnosis = '骨量减少';
            break;
          case 3:
            $scope.diagnosis = '骨质疏松';
            break;
          case 4:
            $scope.diagnosis = '严重骨质疏松';
            break;
        }
        $scope.remarks = bone.remarks;
      });
    }

    function getSimpleAIH() {
      $http({
        method: 'GET',
        url: '/api/simpleAIH/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var simpleAIH = response.data;
        switch (simpleAIH.anasma1) {
          case 1:
            $scope.anasma1 = '阴性';
            break;
          case 2:
            $scope.anasma1 = '阳性';
            break;
        }
        switch (simpleAIH.anasma2) {
          case 1:
            $scope.anasma2 = '<1:100';
            break;
          case 2:
            $scope.anasma2 = '=1:100';
            break;
          case 3:
            $scope.anasma2 = '>1:100';
            break;
        }
        switch (simpleAIH.antiLkm) {
          case 1:
            $scope.antiLkm = '阴性';
            break;
          case 2:
            $scope.antiLkm = '阳性';
            break;
        }
        switch (simpleAIH.antiSla) {
          case 1:
            $scope.antiSla = '阴性';
            break;
          case 2:
            $scope.antiSla = '阳性';
            break;
        }
        switch (simpleAIH.igG) {
          case 1:
            $scope.igG = '≥正常值上限';
            break;
          case 2:
            $scope.igG = '≥1.10倍正常上限';
            break;
        }
        switch (simpleAIH.liver) {
          case 1:
            $scope.liver = '符合AIH';
            break;
          case 2:
            $scope.liver = '典型AIH表现';
            break;
        }
        switch (simpleAIH.eliminateViralHepatitis) {
          case 1:
            $scope.eliminateViralHepatitis = '否';
            break;
          case 2:
            $scope.eliminateViralHepatitis = '是';
            break;
        }
        $scope.result = simpleAIH.result;
      });
    }


    function getComplexAIHBeforeTreatment() {
      $http({
        method: 'GET',
        url: '/api/complexAIHBeforeTreatment/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var beforeScore = 0;
        var complexAIHBeforeTreatment = response.data;
        switch (complexAIHBeforeTreatment.woman) {
          case 1:
            $scope.woman = '男';
            break;
          case 2:
            $scope.woman = '女';
            beforeScore += 2;
            break;
        }
        switch (complexAIHBeforeTreatment.historyDrugs) {
          case 1:
            $scope.historyDrugs = '阳性';
            beforeScore -= 4;
            break;
          case 2:
            $scope.historyDrugs = '阴性';
            beforeScore += 1;
            break;
        }
        switch (complexAIHBeforeTreatment.aLPAST) {
          case 1:
            $scope.aLPAST = '<1.5';
            beforeScore += 2;
            break;
          case 2:
            $scope.aLPAST = '1.5~3.0';
            break;
          case 3:
            $scope.aLPAST = '>3.0';
            beforeScore -= 2;
            break;
        }
        switch (complexAIHBeforeTreatment.alcoholIntake) {
          case 1:
            $scope.alcoholIntake = '<25g/天';
            beforeScore += 2;
            break;
          case 2:
            $scope.alcoholIntake = '>60g/天';
            beforeScore -= 2;
            break;
        }
        switch (complexAIHBeforeTreatment.serumGlobulinNormal) {
          case 1:
            $scope.serumGlobulinNormal = '>2.0';
            beforeScore += 3;
            break;
          case 2:
            $scope.serumGlobulinNormal = '1.5~2.0';
            beforeScore += 2;
            break;
          case 3:
            $scope.serumGlobulinNormal = '1.0~1.5';
            beforeScore += 1;
            break;
          case 4:
            $scope.serumGlobulinNormal = '<1.0';
            break;
        }
        switch (complexAIHBeforeTreatment.liverCheck) {
          case 1:
            $scope.liverCheck = '界面型肝炎';
            beforeScore += 3;
            break;
          case 2:
            $scope.liverCheck = '主要为淋巴浆细胞浸润';
            beforeScore += 1;
            break;
          case 3:
            $scope.liverCheck = '肝细胞呈玫瑰花结样改变';
            beforeScore += 1;
            break;
          case 4:
            $scope.liverCheck = '无上述表现';
            beforeScore -= 5;
            break;
          case 5:
            $scope.liverCheck = '胆管改变';
            beforeScore -= 3;
            break;
          case 6:
            $scope.liverCheck = '其它改变';
            beforeScore -= 3;
            break;
        }
        switch (complexAIHBeforeTreatment.ana) {
          case 1:
            $scope.ana = '>1:80';
            beforeScore += 3;
            break;
          case 2:
            $scope.ana = '1:80';
            beforeScore += 2;
            break;
          case 3:
            $scope.ana = '1:40';
            beforeScore += 1;
            break;
          case 4:
            $scope.ana = '<1:40';
            break;
        }
        switch (complexAIHBeforeTreatment.otherImmuneDiseases) {
          case 1:
            $scope.otherImmuneDiseases = '存在';
            beforeScore += 2;
            break;
          case 2:
            $scope.otherImmuneDiseases = '不存在';
            break;
        }
        switch (complexAIHBeforeTreatment.amaPositive) {
          case 1:
            $scope.amaPositive = '是';
            beforeScore -= 4;
            break;
          case 2:
            $scope.amaPositive = '否';
            break;
        }
        switch (complexAIHBeforeTreatment.otherAvailableParameters) {
          case 1:
            $scope.otherAvailableParameters = '其他特异性自身抗体阳性';
            beforeScore += 2;
            break;
          case 2:
            $scope.otherAvailableParameters = 'HLA DR3或DR4';
            beforeScore += 1;
            break;
        }
        switch (complexAIHBeforeTreatment.hepatitisVirusMarkers) {
          case 1:
            $scope.hepatitisVirusMarkers = '阳性';
            beforeScore -= 3;
            break;
          case 2:
            $scope.hepatitisVirusMarkers = '阴性';
            beforeScore += 3;
            break;
        }
        $scope.beforeScore = beforeScore;
        if ($scope.beforeScore > 15) {
          $scope.beforeResult = '明确的AIH';
        } else if ($scope.beforeScore >= 10 && $scope.beforeScore <= 15) {
          $scope.beforeResult = '可能的AIH';
        } else {
          $scope.beforeResult = '低概率的AIH';
        }
      });
    }


    function getComplexAIHAfterTreatment() {
      $http({
        method: 'GET',
        url: '/api/complexAIHAfterTreatment/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var afterScore = 0;
        var complexAIHAfterTreatment = response.data;
        switch (complexAIHAfterTreatment.woman) {
          case 1:
            $scope.woman = '男';
            break;
          case 2:
            $scope.woman = '女';
            afterScore += 2;
            break;
        }
        switch (complexAIHAfterTreatment.historyDrugs) {
          case 1:
            $scope.historyDrugs = '阳性';
            afterScore -= 4;
            break;
          case 2:
            $scope.historyDrugs = '阴性';
            afterScore += 1;
            break;
        }
        switch (complexAIHAfterTreatment.aLPAST) {
          case 1:
            $scope.aLPAST = '<1.5';
            afterScore += 2;
            break;
          case 2:
            $scope.aLPAST = '1.5~3.0';
            break;
          case 3:
            $scope.aLPAST = '>3.0';
            afterScore -= 2;
            break;
        }
        switch (complexAIHAfterTreatment.alcoholIntake) {
          case 1:
            $scope.alcoholIntake = '<25g/天';
            afterScore += 2;
            break;
          case 2:
            $scope.alcoholIntake = '>60g/天';
            afterScore -= 2;
            break;
        }
        switch (complexAIHAfterTreatment.serumGlobulinNormal) {
          case 1:
            $scope.serumGlobulinNormal = '>2.0';
            afterScore += 3;
            break;
          case 2:
            $scope.serumGlobulinNormal = '1.5~2.0';
            afterScore += 2;
            break;
          case 3:
            $scope.serumGlobulinNormal = '1.0~1.5';
            afterScore += 1;
            break;
          case 4:
            $scope.serumGlobulinNormal = '<1.0';
            break;
        }
        switch (complexAIHAfterTreatment.liverCheck) {
          case 1:
            $scope.liverCheck = '界面型肝炎';
            afterScore += 3;
            break;
          case 2:
            $scope.liverCheck = '主要为淋巴浆细胞浸润';
            afterScore += 1;
            break;
          case 3:
            $scope.liverCheck = '肝细胞呈玫瑰花结样改变';
            afterScore += 1;
            break;
          case 4:
            $scope.liverCheck = '无上述表现';
            afterScore -= 5;
            break;
          case 5:
            $scope.liverCheck = '胆管改变';
            afterScore -= 3;
            break;
          case 6:
            $scope.liverCheck = '其它改变';
            afterScore -= 3;
            break;
        }
        switch (complexAIHAfterTreatment.ana) {
          case 1:
            $scope.ana = '>1:80';
            afterScore += 3;
            break;
          case 2:
            $scope.ana = '1:80';
            afterScore += 2;
            break;
          case 3:
            $scope.ana = '1:40';
            afterScore += 1;
            break;
          case 4:
            $scope.ana = '<1:40';
            break;
        }
        switch (complexAIHAfterTreatment.otherImmuneDiseases) {
          case 1:
            $scope.otherImmuneDiseases = '存在';
            afterScore += 2;
            break;
          case 2:
            $scope.otherImmuneDiseases = '不存在';
            break;
        }
        switch (complexAIHAfterTreatment.amaPositive) {
          case 1:
            $scope.amaPositive = '是';
            afterScore -= 4;
            break;
          case 2:
            $scope.amaPositive = '否';
            break;
        }
        switch (complexAIHAfterTreatment.otherAvailableParameters) {
          case 1:
            $scope.otherAvailableParameters = '其他特异性自身抗体阳性';
            afterScore += 2;
            break;
          case 2:
            $scope.otherAvailableParameters = 'HLA DR3或DR4';
            afterScore += 1;
            break;
        }
        switch (complexAIHAfterTreatment.hepatitisVirusMarkers) {
          case 1:
            $scope.hepatitisVirusMarkers = '阳性';
            afterScore -= 3;
            break;
          case 2:
            $scope.hepatitisVirusMarkers = '阴性';
            afterScore += 3;
            break;
        }
        switch (complexAIHAfterTreatment.responseTreatment) {
          case 1:
            $scope.responseTreatment = '完全';
            afterScore += 2;
            break;
          case 2:
            $scope.responseTreatment = '复发';
            afterScore += 3;
            break;
        }
        $scope.afterScore = afterScore;
        if (afterScore > 17) {
          $scope.afterResult = '明确的AIH';
        } else if (afterScore >= 12 && afterScore <= 17) {
          $scope.afterResult = '可能的AIH';
        } else {
          $scope.afterResult = '低概率的AIH';
        }
      });
    }


    function getTreatment() {
      $http({
        method: 'GET',
        url: '/api/treatment/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var treatment = response.data;
        $scope.qdsTime = treatment.qdsTime;
        $scope.qdsDose = treatment.qdsDose;
        $scope.qdsHeal = treatment.qdsHeal;
        $scope.qdslTime = treatment.qdslTime;
        $scope.qdslDose = treatment.qdslDose;
        $scope.qdslHeal = treatment.qdslHeal;
        $scope.jjqTime = treatment.jjqTime;
        $scope.jjqDose = treatment.jjqDose;
        $scope.jjqHeal = treatment.jjqHeal;
        $scope.bdndTime = treatment.bdndTime;
        $scope.bdndDose = treatment.bdndDose;
        $scope.bdndHeal = treatment.bdndHeal;
        $scope.lcplTime = treatment.lcplTime;
        $scope.lcplDose = treatment.lcplDose;
        $scope.lcplHeal = treatment.lcplHeal;
        $scope.mtxTime = treatment.mtxTime;
        $scope.mtxDose = treatment.mtxDose;
        $scope.mtxHeal = treatment.mtxHeal;
        $scope.cysaTime = treatment.cysaTime;
        $scope.cysaDose = treatment.cysaDose;
        $scope.cysaHeal = treatment.cysaHeal;
        $scope.ctxTime = treatment.ctxTime;
        $scope.ctxDose = treatment.ctxDose;
        $scope.ctxHeal = treatment.ctxHeal;
        $scope.mtmkTime = treatment.mtmkTime;
        $scope.mtmkDose = treatment.mtmkDose;
        $scope.mtmkHeal = treatment.mtmkHeal;
        $scope.qsxsTime = treatment.qsxsTime;
        $scope.qsxsDose = treatment.qsxsDose;
        $scope.qsxsHeal = treatment.qsxsHeal;
        $scope.xqydTime = treatment.xqydTime;
        $scope.xqydDose = treatment.xqydDose;
        $scope.xqydHeal = treatment.xqydHeal;
        $scope.fnbtTime = treatment.fnbtTime;
        $scope.fnbtDose = treatment.fnbtDose;
        $scope.fnbtHeal = treatment.fnbtHeal;
        $scope.bzbtTime = treatment.bzbtTime;
        $scope.bzbtDose = treatment.bzbtDose;
        $scope.bzbtHeal = treatment.bzbtHeal;
        $scope.gyzTime = treatment.gyzTime;
        $scope.gyzDetails = treatment.gyzDetails;
        if (treatment.gyzResult == 'die') {
          $scope.gyzResult = '死亡';
        } else {
          $scope.gyzResult = '生存';
        }
        if (treatment.gyzReason == 'liver' && treatment.gyzResult == 'die') {
          $scope.gyzReason = '死亡原因：肝脏';
        } else if (treatment.gyzResult == 'die') {
          $scope.gyzReason = '死亡原因：其他原因';
        } else {
          $scope.gyzReason = '';
        }
      });
    }

    function getMedicine() {
      $http({
        method: 'GET',
        url: '/api/medicine/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var medicine = response.data;
        $scope.chineseMedicineTime = medicine.chineseMedicineTime;
        $scope.chineseMedicineFormulasDose = medicine.chineseMedicineFormulasDose;
        $scope.chineseMedicineHeal = medicine.chineseMedicineHeal;
        $scope.aProprietaryMedicineTime = medicine.aProprietaryMedicineTime;
        $scope.aProprietaryMedicineName = medicine.aProprietaryMedicineName;
        $scope.aProprietaryMedicineHeal = medicine.aProprietaryMedicineHeal;
        $scope.bProprietaryMedicineTime = medicine.bProprietaryMedicineTime;
        $scope.bProprietaryMedicineName = medicine.bProprietaryMedicineName;
        $scope.bProprietaryMedicineHeal = medicine.bProprietaryMedicineHeal;
      });
    }

    function getFinal() {
      $http({
        method: 'GET',
        url: '/api/finalDiagnosisSpecialCircumstances/' + sessionStorage.getItem('patientId')
      }).then(function success(response) {
        var final = response.data;
        $scope.pbcClinicalStage = final.pbcClinicalStage;
        $scope.aihClinicalStage = final.aihClinicalStage;
        var temp = '';
        if (final.children) {
          temp += '儿童 ';
        }
        if (final.gestationPeriod) {
          temp += '妊娠期 ';
        }
        if (final.repeatedRelapse) {
          temp += '多次复发 ';
        }
        if (final.resistantToSteroidTreatment) {
          temp += '对激素耐药 ';
        }
        if (final.patientsWithChronicHepatitisB) {
          temp += '合并慢性乙型肝炎 ';
        }
        if (final.patientsWithChronicHepatitisC) {
          temp += '合并慢性丙型肝炎 ';
        }
        if (final.overlappingAIHPBC) {
          temp += 'AIH-PBC重叠 ';
        }
        if (final.overlappingAIHPSC) {
          temp += 'AIH-PSC重叠 ';
        }
        if (final.autoimmuneCholangitis) {
          temp += '自身免疫性胆管炎 ';
        }
        if (final.finalDiagnosisOther) {
          temp += '其他 ';
        }
        $scope.special = temp;
      });
    }

  }]);