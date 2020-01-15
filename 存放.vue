//增票资质页面
<style lang="less" scoped>
@import "../../../assets/style/mine/addqualification/qualification.less";
.scroll-view {
    position: fixed;
    top: 297px;
    background: #fff;
    bottom: 67px;
}
</style>
<template>
    <div>
        <my-header :title="title" :backFun="exit"></my-header>
        <div class="mask" @click="showMask" v-if="maskFlag"></div>
        <div class="container has-header">
            <div class="item-col bd-bottom">
                <span class="col-title">单位名称</span>
                <span class="rt" v-text="invoiceTitle"></span>
            </div>
            <div class="item-col bd-bottom">
                <span class="col-title">纳税人识别号</span>
                <span
                    class="rt"
                    v-if="showSureBtn && taxNumberModifyFlag*1===0"
                >{{ taxpayersNumber }}</span>
                <input
                    v-if="showSureBtn && taxNumberModifyFlag*1 ===1"
                    class="rt"
                    type="text"
                    placeholder="必填"
                    v-model="taxpayersNumber"
                    @focus="clearNumber=true"
                    @blur="clearNumber=false"
                    maxlength="22"
                />
                <i class="iconfont icon-cancel" v-show="clearNumber" @click="taxpayersNumber=''"></i>
                <span v-if="!showSureBtn" class="rt" v-text="taxpayersNumber"></span>
            </div>
            <!-- <div class="item-col bd-bottom" @click="showSelector = true">
                <span class="col-title">开票地区</span>
                <div class="rt" v-if="recInvoiceAddress">{{ recInvoiceAddress }}</div>
                <div class="rt" v-else style="color: #999">必填 &nbsp;</div>
                <i class="iconfont icon-arrow-right"></i>
            </div> -->
            <div class="item-col bd-bottom">
                <span class="col-title">开票地址</span>
                <input
                    v-if="showSureBtn"
                    class="rt"
                    type="text"
                    placeholder="必填"
                    v-model="taxpayersAddress"
                    @focus="clearAddress=true"
                    @blur="clearAddress=false"
                />
                <i class="iconfont icon-cancel" v-show="clearAddress" @click="taxpayersAddress=''"></i>
                <span v-if="!showSureBtn" class="rt" v-text="taxpayersAddress"></span>
            </div>
            <div class="item-col bd-bottom">
                <span class="col-title">开票电话</span>
                <input
                    v-if="showSureBtn"
                    class="rt"
                    placeholder="必填"
                    v-model="taxpayersPhone"
                    @focus="clearPhone=true"
                    @blur="clearPhone=false"
                />
                <i class="iconfont icon-cancel" v-show="clearPhone" @click="taxpayersPhone=''"></i>
                <span v-if="!showSureBtn" class="rt" v-text="taxpayersPhone"></span>
            </div>
            <div class="item-col bd-bottom" ref="showList">
                <span class="col-title">开户银行</span>
                <input
                    v-if="showSureBtn"
                    class="rt"
                    type="text"
                    placeholder="必填"
                    v-model="taxpayersBank"
                    @keyup.prevent.stop="searcBank($event,taxpayersBank)"
                    @focus="focusBank"
                    @blur="clearBank=false"
                />
                <i
                    class="iconfont icon-cancel bank"
                    v-show="clearBank || showBankList"
                    @click="taxpayersBank='';showBankList = false"
                ></i>
                <span v-if="!showSureBtn" class="rt" v-text="taxpayersBank"></span>

                <div class="bankcontainer" v-if="showBankList">
                    <div class="showList">
                        <scroller
                            ref="iscroll"
                            :pullDown="false"
                            class="scroll-view"
                            :pullUp="page.isMore"
                            @pullUp="getBankList"
                        >
                            <div
                                class="bankList"
                                v-for="(item,index) in bankList"
                                :key="index"
                                @click="selectBank(item)"
                            >{{item.bankName}}</div>
                        </scroller>
                    </div>
                </div>
            </div>
            <div class="item-col bd-bottom">
                <span class="col-title">银行账户</span>
                <input
                    v-if="showSureBtn"
                    class="rt"
                    maxlength="25"
                    oninput="value=value.replace(/[^\d]/g,'')"
                    type="text"
                    placeholder="必填"
                    v-model="bankAccountNumber"
                    @focus="clearAccountNumber=true"
                    @blur="clearAccountNumber=false"
                />
                <i
                    class="iconfont icon-cancel"
                    v-show="clearAccountNumber"
                    @click="bankAccountNumber=''"
                ></i>
                <span v-if="!showSureBtn" class="rt">{{ bankAccountNumber | formatAccountNumber }}</span>
            </div>
        </div>
        <div class="foolter bd-top">
            <div class="item modify" @click="editContent" v-if="!showSureBtn">修改</div>
            <!-- <div class="item delete" @click="deleteContent" v-if="!showSureBtn">删除</div> -->
            <div
                class="sure-btn"
                v-if="showSureBtn"
                :class="{'dark-grey':canSubmit}"
                @click="submitEdit"
            >确定</div>
        </div>
        <!-- <selector :show.sync="showSelector" :api="'getUsableRegionInfo'" @value-name="addressName"></selector> -->
    </div>
</template>
<script>
import platform from "../../../platform";
import { mapActions } from "vuex";
import selector from "../../../components/public/addressSelector.vue";

export default {
    name: "qualification",
    components: {
        selector
    },
    data() {
        return {
            title: "添加增票资质",
            invoiceTitle: "", // 发票抬头/单位名称
            taxpayersNumber: "", // 纳税人识别号
            // recInvoiceAddress: "", // 开票省市区
            taxpayersAddress: "", // 开票地址
            taxpayersPhone: "", // 开票电话
            taxpayersBank: "", // 开户行
            bankAccountNumber: "", // 开户行号码/银行账号
            clearNumber: false, // 清空纳税人识别号
            clearAddress: false, // 清空开票地址
            clearPhone: false, // 清空开票电话
            clearBank: false, // 清空开户银行
            clearAccountNumber: false, // 清空银行账户
            showSureBtn: false, // 显示确定按钮
            showBankList: false,
            maskFlag: false,
            diviceHeight: 0,
            page: {
                index: 1,
                pageSize: 10,
                isMore: true
            },
            bankList: [],
            taxNumberModifyFlag: 1, // 控制是否能修改发票税号 0：不能修改；1：可以修改
            // showSelector: false
        };
    },
    created() {
        this.getTicketInfo();
        this.diviceHeight = document.documentElement.clientHeight; //获取屏幕高度
    },
    methods: {
        ...mapActions([
            "getInvoiceQualificationInfo",
            "updateInvoiceInfo",
            "searchBank"
        ]),

        searcBank(e, keyword) {
            if (!keyword) {
                this.showBankList = false;
            } else {
                clearTimeout(this.timer);
                this.page.index = 1;
                this.timer = setTimeout(() => {
                    this.bankList = [];
                    this.getBankList();
                }, 1000);
            }
        },
        focusBank() {
            this.clearBank = true;
            this.page.index = 1;
            this.bankList = [];
            this.getBankList();
        },
        selectBank(item) {
            this.taxpayersBank = item.bankName;
            this.showBankList = false;
            this.maskFlag = false;
        },
        getBankList() {
            let params = {
                content: {
                    pageIndex: this.page.index,
                    pageSize: this.page.pageSize,
                    bankName: this.taxpayersBank
                }
            };
            this.searchBank(params).then(res => {
                if (res.bankInfoArray.length > 0) {
                    this.showBankList = true;
                    this.maskFlag = true;
                    this.page.index++;
                    if (res.bankInfoArray.length < this.page.pageSize) {
                        this.page.isMore = false;
                    }
                    this.bankList = this.bankList.concat(res.bankInfoArray);
                    this.$nextTick(() => {
                        this.$refs.iscroll.refresh();
                    });
                }
            });
        },
        // 获取数据
        getTicketInfo() {
            this.$showLoading();
            this.getInvoiceQualificationInfo()
                .then(res => {
                    this.$hideLoading();
                    let info = res.content.invoiceQualification;
                    this.invoiceTitle = info.invoiceTitle || "";
                    this.taxpayersNumber = info.taxpayersNumber || "";
                    this.taxpayersAddress = info.taxpayersAddress || "";
                    this.taxpayersPhone = info.taxpayersPhone || "";
                    this.taxpayersBank = info.taxpayersBank || "";
                    this.bankAccountNumber = info.bankAccountNumber || "";
                    this.taxNumberModifyFlag = info.taxNumberModifyFlag;
                    // 根据返回数据显示title
                    this.showTitleType();
                    // this.checkBank();
                })
                .catch(err => {
                    this.$hideLoading();
                    this.Toast(err.header.resultMsg || "获取增票资质信息失败");
                });
        },
        // 获取选中的地区名
        // addressName(val) {
        //     this.recInvoiceAddress = val.addressName;
        // },
        // 更新增票资质信息
        updateTicketInfo(data) {
            this.updateInvoiceInfo(data)
                .then(res => {
                    this.$hideLoading();
                    this.showSureBtn = false;
                    this.Toast("修改成功");
                    setTimeout(() => {
                        this.$router.go(-1);
                    }, 400);
                })
                .catch(err => {
                    this.Toast(err.header.resultMsg || "修改增票资质信息失败");
                });
        },
        // title 的 name
        showTitleType() {
            if (this.judegValue()) {
                this.title = "添加增票资质";
                this.showSureBtn = true;
            } else if (
                this.invoiceTitle &&
                this.taxpayersNumber &&
                this.taxpayersAddress &&
                this.taxpayersPhone &&
                this.taxpayersBank &&
                this.bankAccountNumber
            ) {
                this.title = "增票资质";
                this.showSureBtn = false;
            }
        },
        // 对input进行空值判断
        judegValue() {
            // 如果有一个不填
            return (
                !this.invoiceTitle ||
                !this.taxpayersNumber ||
                // !this.recInvoiceAddress ||
                !this.taxpayersAddress ||
                !this.taxpayersPhone ||
                !this.taxpayersBank ||
                !this.bankAccountNumber
            );
        },
        // 修改增票资质内容
        editContent() {
            this.showSureBtn = true;
            this.title = "修改增票资质";
            this.checkBank();
        },
        //页面进来，不修改银行只修改其他，需要重新核对一次数据
        checkBank() {
            let params = {
                content: {
                    pageIndex: this.page.index,
                    pageSize: this.page.pageSize,
                    bankName: this.taxpayersBank
                }
            };
            this.searchBank(params).then(res => {
                if (res.bankInfoArray.length > 0) {
                    res.bankInfoArray.forEach(item => {
                        if (item.bankName === this.taxpayersBank) {
                            this.bankList = res.bankInfoArray;
                        }
                    });
                }
            });
        },
        // 提交修改
        submitEdit() {
            if (this.judegValue()) {
                return false;
            }
            let checkBank = false;
            this.bankList.forEach(item => {
                if (item.bankName === this.taxpayersBank) {
                    checkBank = true;
                }
            });
            if (!checkBank) {
                this.Toast("请选择正确的开户银行");
                return;
            }
            // 验证纳税人识别号
            let patternNumber = /^[A-Z0-9]{15,20}$/;
            if (!patternNumber.test(this.taxpayersNumber)) {
                this.Toast(
                    "正确的纳税人识别号为15-20位数字 + 大写字母组成",
                    3000
                );
                return;
            }
            // //验证手机号码
            let patternTel = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
            if (!patternTel.test(this.taxpayersPhone.trim())) {
                this.Toast("请输入正确的电话号码！");
                return;
            }

            // 开户行验证
            let patternBank = /^[\w\u4e00-\u9fa5]{3,30}$/;
            if (!patternBank.test(this.taxpayersBank.trim())) {
                this.Toast("请输入正确的开户银行");
                return;
            }

            this.showSureBtn = false;
            this.title = "增票资质";

            let data = {
                content: {
                    invoiceTitle: this.invoiceTitle,
                    taxpayersNumber: this.taxpayersNumber.trim(),
                    // taxpayersAddress:
                    //     this.recInvoiceAddress + this.taxpayersAddress,
                    taxpayersAddress: this.taxpayersAddress,
                    taxpayersPhone: this.taxpayersPhone.trim(),
                    taxpayersBank: this.taxpayersBank.trim(),
                    bankAccountNumber: this.bankAccountNumber
                }
            };
            this.$showLoading();
            this.updateTicketInfo(data);
        },
        exit() {
            this.$router.go(-1);
        },
        showMask() {
            this.showBankList = false;
            this.maskFlag = false;
        }
    },
    computed: {
        // 控制按钮显示的颜色
        canSubmit() {
            if (this.judegValue()) {
                return true;
            }
        }
    },
    filters: {
        formatAccountNumber(val) {
            let reg = /^(\d{4})\d+(\d{4})$/;
            return val.replace(reg, "$1 ****** $2");
        }
    }
};
</script>
