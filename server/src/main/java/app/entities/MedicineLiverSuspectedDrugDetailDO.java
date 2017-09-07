//package app.entities;
//
//import javax.persistence.*;
//import java.util.Date;
//
///**
// * Created by Administrator on 2017/8/23 0023.
// */
//@Entity(name = "medicine_liver_suspected_drug_detail")
//public class MedicineLiverSuspectedDrugDetailDO {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
//    @JoinColumn(name = "medicine_liver_suspected_drug_id")
//    private MedicineLiverSuspectedDrugDO medicineLiverSuspectedDrugDO;
//    private String genericName;//通用名
//    private String tradeName;//商品名
//    private String treatComplaint;//治疗疾病
//    private String medicationMethod;//用药方法
//    private String dose;//日剂量
//    private Date beginDate;//开始日期
//    private String drugWithdrawal;//是否停药
//    @Column(name = "drug_with_drawal_date")
//    private Date drugWithdrawalDate;//停药日期
//    private String decrement;//是否减量
//    private String drugExposure;//既往该药暴露史
//    @Column(name = "exposure_liver_damage")
//    private String exposureLiverDamage;//既往暴露引起肝损
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public MedicineLiverSuspectedDrugDO getMedicineLiverSuspectedDrugDO() {
//        return medicineLiverSuspectedDrugDO;
//    }
//
//    public void setMedicineLiverSuspectedDrugDO(MedicineLiverSuspectedDrugDO medicineLiverSuspectedDrugDO) {
//        this.medicineLiverSuspectedDrugDO = medicineLiverSuspectedDrugDO;
//    }
//
//    public String getGenericName() {
//        return genericName;
//    }
//
//    public void setGenericName(String genericName) {
//        this.genericName = genericName;
//    }
//
//    public String getTredeName() {
//        return tradeName;
//    }
//
//    public void setTredeName(String tradeName) {
//        this.tradeName = tradeName;
//    }
//
//    public String getTreatComplaint() {
//        return treatComplaint;
//    }
//
//    public void setTreatComplaint(String treatComplaint) {
//        this.treatComplaint = treatComplaint;
//    }
//
//    public String getMedicationMethod() {
//        return medicationMethod;
//    }
//
//    public void setMedicationMethod(String medicationMethod) {
//        this.medicationMethod = medicationMethod;
//    }
//
//    public String getDose() {
//        return dose;
//    }
//
//    public void setDose(String dose) {
//        this.dose = dose;
//    }
//
//    public Date getBeginDate() {
//        return beginDate;
//    }
//
//    public void setBeginDate(Date beginDate) {
//        this.beginDate = beginDate;
//    }
//
//    public String getTradeName() {
//        return tradeName;
//    }
//
//    public void setTradeName(String tradeName) {
//        this.tradeName = tradeName;
//    }
//
//    public String getDrugWithdrawal() {
//        return drugWithdrawal;
//    }
//
//    public void setDrugWithdrawal(String drugWithdrawal) {
//        this.drugWithdrawal = drugWithdrawal;
//    }
//
//    public Date getDrugWithdrawalDate() {
//        return drugWithdrawalDate;
//    }
//
//    public void setDrugWithdrawalDate(Date drugWithdrawalDate) {
//        this.drugWithdrawalDate = drugWithdrawalDate;
//    }
//
//    public String getDecrement() {
//        return decrement;
//    }
//
//    public void setDecrement(String decrement) {
//        this.decrement = decrement;
//    }
//
//    public String getDrugExposure() {
//        return drugExposure;
//    }
//
//    public void setDrugExposure(String drugExposure) {
//        this.drugExposure = drugExposure;
//    }
//
//    public String getExposureLiverDamage() {
//        return exposureLiverDamage;
//    }
//
//    public void setExposureLiverDamage(String exposureLiverDamage) {
//        this.exposureLiverDamage = exposureLiverDamage;
//    }
//}