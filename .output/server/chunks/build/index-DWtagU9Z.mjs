import { useSSRContext, defineComponent, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, ref, watch } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { isAddress } from 'viem';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 15 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill="currentColor" fill-rule="evenodd" d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__common/icon/ArrowRight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardContract",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    address: {}
  },
  setup(__props) {
    const props = __props;
    const to = computed(() => {
      return `/contract/${props.address}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({ to: to.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card" data-v-23e5cebd${_scopeId}><div class="title" data-v-23e5cebd${_scopeId}>${ssrInterpolate(_ctx.title)}</div><div class="details" data-v-23e5cebd${_scopeId}><div class="description" data-v-23e5cebd${_scopeId}>${ssrInterpolate(_ctx.description)}</div><div class="address" data-v-23e5cebd${_scopeId}><div class="address-label" data-v-23e5cebd${_scopeId}>${ssrInterpolate(_ctx.address)}</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "title" }, toDisplayString(_ctx.title), 1),
                createVNode("div", { class: "details" }, [
                  createVNode("div", { class: "description" }, toDisplayString(_ctx.description), 1),
                  createVNode("div", { class: "address" }, [
                    createVNode("div", { class: "address-label" }, toDisplayString(_ctx.address), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CardContract.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardContract = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23e5cebd"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const address = ref("");
    const isAddressValid = ref(true);
    watch(address, () => {
      isAddressValid.value = true;
    });
    function handleIconClick() {
      if (!isAddress(address.value)) {
        isAddressValid.value = false;
        return;
      }
      if (address.value) {
        openContractPage(address.value);
      }
    }
    function openContractPage(address2) {
      router.push(`/contract/${address2}`);
    }
    const examples = [
      {
        title: "Uniswap V3 Factory",
        description: "A protocol that facilitates peer-to-peer market making and swapping of ERC-20 tokens",
        address: "0x1F98431c8aD98523631AE4a59f267346ea31F984"
      },
      {
        title: "Entry Point 0.7",
        description: "Account Abstraction (EIP-4337) contract that verifies and executes the bundles of UserOperations sent to it",
        address: "0x0000000071727De22E5E9d8BAf0edAc6f37da032"
      },
      {
        title: "Multicall3",
        description: "Batch contract calls on any chain",
        address: "0xcA11bde05977b3631167028862bE2a173976CA11"
      },
      {
        title: "CreateX",
        description: "A Trustless, Universal Contract Deployer",
        address: "0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed"
      },
      {
        title: "Safe Factory 1.4.1",
        description: "A proxy factory to create Safe multisig wallets",
        address: "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67"
      },
      {
        title: "Optimistic WETH",
        description: "A wrapped ether (WETH9) contract deployed across OP Stack chains",
        address: "0x4200000000000000000000000000000000000006"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-f7b96853><div class="content" data-v-f7b96853><div class="top" data-v-f7b96853><div class="header" data-v-f7b96853><h1 data-v-f7b96853>Contract Scan</h1><div class="subtitle" data-v-f7b96853> Search deployed contracts across 100+ EVM chains </div></div><div class="address" data-v-f7b96853><input${ssrRenderAttr("value", address.value)} class="${ssrRenderClass({ invalid: !isAddressValid.value })}" placeholder="Contract address" data-v-f7b96853>`);
      _push(ssrRenderComponent(IconArrowRight, {
        class: "icon",
        onClick: handleIconClick
      }, null, _parent));
      _push(`</div></div><div class="examples" data-v-f7b96853><h2 data-v-f7b96853>Popular Singletones</h2><div class="example-list" data-v-f7b96853><!--[-->`);
      ssrRenderList(examples, (example) => {
        _push(ssrRenderComponent(CardContract, {
          key: example.address,
          class: "example",
          title: example.title,
          description: example.description,
          address: example.address
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7b96853"]]);

export { index as default };
//# sourceMappingURL=index-DWtagU9Z.mjs.map
