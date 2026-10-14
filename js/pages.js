/**
 * Page navigation and rendering
 */

// Pages content
const pages = {
  withdraw: `
    <div class="withdraw-page">
      <div class="page-header">
        <button class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1>Resgatar recompensas</h1>
        <button class="help-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </button>
      </div>
      
      <!-- Card de Saldo Original -->
      <div class="balance-card">
        <div class="balance-title">Teu Saldo</div>
        <div class="balance-amount-wrapper">
          <div class="balance-amount">€947.00</div>
          <img class="balance-image" src="images/p-saldo-maior.png" alt="ícone">
        </div>
      </div>
      
      <div class="last-rewards">
        Prêmios recentes: €54.87
      </div>
      
      <!-- Seção Branca Principal -->
      <div class="withdraw-content">
        <h2 class="withdraw-title">LEVANTAR DINHEIRO</h2>
        
        <!-- Payment Methods -->
        <div class="payment-methods-row">
          <div class="payment-method-item">
            <img src="images/cashapp-logo.svg" alt="Saque" class="payment-method-logo">
            <span class="payment-method-name">Transferência Bancária</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="images/paypal-logo.svg" alt="PayPal" class="payment-method-logo">
            <span class="payment-method-name">PayPal</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="https://cdn.aptoide.com/imgs/6/6/6/666df3003e6cf55fa74d64f8e7bbfe20_icon.png" alt="MB WAY" class="payment-method-logo">
            <span class="payment-method-name">MB WAY</span>
          </div>
        </div>
        
        <!-- Botões de Valor (Opcional) -->
        <div class="amount-options">
          <button class="amount-btn" data-amount="1.50">€1.50</button>
          <button class="amount-btn" data-amount="5">€5</button>
          <button class="amount-btn" data-amount="10">€10</button>
          <button class="amount-btn" data-amount="947.00">€947.00</button>
        </div>
        
        <!-- Display do Método Selecionado -->
        <div id="selected-method-display" class="selected-method-display" style="display: none;">
          <div class="method-display-item">
            <span class="method-logo" id="display-method-logo"></span>
            <div>
              <div class="method-name" id="display-method-name"></div>
              <div class="method-subtitle">Pagamento instantâneo</div>
            </div>
            <button class="change-method-btn" onclick="openMethodModal()">Change</button>
          </div>
        </div>
        
        <!-- Formulário do Método -->
        <div id="method-form-container" style="display: none;">
          <!-- Formulário será inserido aqui dinamicamente -->
        </div>
        
        <!-- Botão Adicionar Método -->
        <button class="add-method-btn" id="add-method-btn">Adicionar método de saque</button>

        <!-- Info Texts -->
        <div class="withdraw-info-text">
          <p>Para levantares dinheiro, precisas de um saldo mínimo de 0,40 €.</p>
          <p>Os limites de levantamento por transação individual e mensal podem variar consoante o país ou a região.</p>
        </div>
      </div>
    </div>
  `,

  loading: `
    <div class="loading-page">
      <div class="loading-content">
        <div class="facebook-logo">
  <img
    class="facebook-logo__image"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/3840px-Facebook_Logo_%282019%29.svg.png"
    alt="Facebook"
  />
</div>
<br>
        <div class="loading-text">Validando acesso...</div>
        <div class="loading-spinner"></div>
      </div>
    </div>
  `,

  registration: `
    <div class="confirmation-container">
      <div class="confirmation-header">
        <div class="confirmation-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/3840px-Facebook_Logo_%282019%29.svg.png" alt="TikTok">
        </div>
      </div>

      <!-- Saldo Acumulado -->
<div class="confirmation-section confirmation-balance">
  <div class="confirmation-balance-title">SALDO DISPONÍVEL</div>
  <div class="confirmation-balance-amount" data-amount-target="947.00">
    €947,00
  </div>
  <div class="confirmation-balance-subtitle">
    A aguardar confirmação do levantamento
  </div>
</div>

      <!-- Taxa de Confirmação -->
<div class="confirmation-section">
  <div class="confirmation-section-title">
    Requisito de pagamento de IRS
  </div>
  <div class="confirmation-fee-amount">
    € 27.00
    <span class="confirmation-reembolso-badge">100% REEMBOLSÁVEL</span>
  </div>
  <div class="confirmation-fee-description">
    Contribuição de segurança exigida pela Autoridade Tributária para a libertação do levantamento de <span class="bold">€947.00</span>. O valor de <span class="bold">€27.00</span>. será totalmente devolvido à tua conta em 1 minuto.
  </div>
</div>

      <!-- Comprovativo -->
<div class="confirmation-section">
  <div class="confirmation-section-title">RESUMO DO LEVANTAMENTO</div>
  <div class="confirmation-receipt-grid">
    <div class="confirmation-receipt-item">
      <div class="confirmation-receipt-label">Nome</div>
      <div class="confirmation-receipt-value" id="confirmation-name"></div>
    </div>
    <div class="confirmation-receipt-item">
      <div class="confirmation-receipt-label">Data</div>
      <div class="confirmation-receipt-value" id="confirmation-date"></div>
    </div>
    <div class="confirmation-receipt-item">
      <div class="confirmation-receipt-label">Conta</div>
      <div class="confirmation-receipt-value" id="confirmation-key-type"></div>
    </div>
    <div class="confirmation-receipt-item">
      <div class="confirmation-receipt-label">Montante a receber</div>
      <div class="confirmation-receipt-value bold">€947,00</div>
    </div>
  </div>
</div>

      <div class="confirmation-divider"></div>

      <!-- Requisitos -->
<div class="confirmation-section" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div class="confirmation-section-title" style="font-size: 14px; font-weight: 700; color: #495057; letter-spacing: 1px; margin-bottom: 16px; border-bottom: 2px solid #dee2e6; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span>DISCRIMINAÇÃO DA TAXA</span>
    <span style="font-size: 12px; background: #e2f0d9; color: #385723; padding: 2px 8px; border-radius: 10px; font-weight: 600;">Verificado</span>
  </div>
  <div class="confirmation-requirements-grid" style="display: flex; flex-direction: column; gap: 12px;">
    
    <!-- Item 1 -->
    <div class="confirmation-requirement-item" style="display: flex; align-items: center; background: #ffffff; padding: 12px 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
      <div class="confirmation-requirement-icon" style="background: #e9ecef; color: #495057; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; margin-right: 12px; flex-shrink: 0;">1</div>
      <div class="confirmation-requirement-content" style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <div class="confirmation-requirement-title" style="font-weight: 500; color: #212529; font-size: 14px;">
          Validação SEPA
        </div>
        <div class="confirmation-requirement-description" style="font-weight: 600; color: #212529; font-size: 14px;">
          €15,00
        </div>
      </div>
    </div>

    <!-- Item 2 -->
    <div class="confirmation-requirement-item" style="display: flex; align-items: center; background: #ffffff; padding: 12px 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
      <div class="confirmation-requirement-icon confirmation-reembolso" style="background: #d4edda; color: #155724; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; margin-right: 12px; flex-shrink: 0;">
        ✓
      </div>
      <div class="confirmation-requirement-content" style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <div class="confirmation-requirement-title confirmation-reembolso" style="font-weight: 500; color: #212529; font-size: 14px;">
          Seguro antifraude
        </div>
        <div class="confirmation-requirement-description" style="font-weight: 600; color: #212529; font-size: 14px;">
          €12,00
        </div>
      </div>
    </div>

    <!-- Total Item -->
    <div class="confirmation-requirement-item" style="display: flex; align-items: center; background: #e8f4fd; padding: 14px 16px; border-radius: 8px; border: 1px solid #b8daff; margin-top: 4px;">
      <div class="confirmation-requirement-icon" style="background: #cfe2ff; color: #084298; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; margin-right: 12px; flex-shrink: 0;">Σ</div>
      <div class="confirmation-requirement-content" style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <div class="confirmation-requirement-title" style="font-weight: 700; color: #084298; font-size: 14px;">
          Total (reembolsável)
        </div>
        <div class="confirmation-requirement-description" style="font-weight: 700; color: #198754; font-size: 16px;">
          €27,00
        </div>
      </div>
    </div>

  </div>
</div>

      <!-- Call to Action -->
<div class="confirmation-section">
  <a href="loadingaq" class="confirmation-cta-button" id="pay-tax-btn">
    CONFIRMAR E LIBERTAR €947,00 
  </a>
  <div class="confirmation-timer">
    ⏱️ Reembolso emitido no prazo de 1 minuto
  </div>
  <div class="confirmation-success-message" id="confirmation-success-message">
    ✅ Identidade confirmada. 27,00 € reembolsados e levantamento autorizado.
  </div>
</div>
<!-- Seção de Provas Sociais -->
<div class="confirmation-section" style="background: #ffffff; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 480px; margin: 0 auto;">
  
  <!-- Título Principal -->
  <div class="confirmation-section-title" style="font-size: 13px; font-weight: 700; color: #6c757d; text-align: center; letter-spacing: 1.2px; margin-bottom: 24px; text-transform: uppercase;">
    QUEM JÁ LEVANTOU HOJE
  </div>

  <div class="confirmation-requirements-grid" style="display: flex; flex-direction: column; gap: 20px;">
    
    <!-- Item 1: Carlos R. -->
    <div style="display: flex; gap: 14px; padding-bottom: 16px; border-bottom: 1px solid #f1f3f5; align-items: flex-start;">
      <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background: #e9ecef; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
        <img src="/images/p1.jpg" alt="Carlos R." style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-weight: 700; color: #212529; font-size: 15px;">Carlos R.</span>
          <span style="font-weight: 700; color: #198754; font-size: 14px;">€2.800 ✓</span>
        </div>
        <p style="font-style: italic; color: #495057; font-size: 13px; line-height: 1.4; margin: 0 0 6px 0;">
          "Paguei a pensar que era uma armadilha, mas o reembolso chegou antes do levantamento, nunca mais vou duvidar"
        </p>
        <div style="font-size: 11px; color: #adb5bd;">Madrid · há 12 min</div>
      </div>
    </div>

    <!-- Item 2: Elena S. -->
    <div style="display: flex; gap: 14px; padding-bottom: 16px; border-bottom: 1px solid #f1f3f5; align-items: flex-start;">
      <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background: #e9ecef; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
        <img src="/images/p2.jpg" alt="Elena S." style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-weight: 700; color: #212529; font-size: 15px;">Elena S.</span>
          <span style="font-weight: 700; color: #198754; font-size: 14px;">€1.450 ✓</span>
        </div>
        <p style="font-style: italic; color: #495057; font-size: 13px; line-height: 1.4; margin: 0 0 6px 0;">
          "Tive muito medo mas fi-lo e correu tudo bem, obrigada TikTok por esta oportunidade real"
        </p>
        <div style="font-size: 11px; color: #adb5bd;">Barcelona · há 28 min</div>
      </div>
    </div>

    <!-- Item 3: Rafael O. -->
    <div style="display: flex; gap: 14px; padding-bottom: 16px; border-bottom: 1px solid #f1f3f5; align-items: flex-start;">
      <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background: #e9ecef; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
        <img src="/images/p3.jpg" alt="Rafael O." style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-weight: 700; color: #212529; font-size: 15px;">Rafael O.</span>
          <span style="font-weight: 700; color: #198754; font-size: 14px;">€3.200 ✓</span>
        </div>
        <p style="font-style: italic; color: #495057; font-size: 13px; line-height: 1.4; margin: 0 0 6px 0;">
          "Já é a terceira vez que levanto, chega sempre em menos de 2 min, sem erros nenhuns"
        </p>
        <div style="font-size: 11px; color: #adb5bd;">Valencia · há 43 min</div>
      </div>
    </div>

    <!-- Item 4: Carla F. -->
    <div style="display: flex; gap: 14px; padding-bottom: 8px; align-items: flex-start;">
      <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background: #e9ecef; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
        <img src="/images/p4.jpg" alt="Carla F." style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-weight: 700; color: #212529; font-size: 15px;">Carla F.</span>
          <span style="font-weight: 700; color: #198754; font-size: 14px;">€980 ✓</span>
        </div>
        <p style="font-style: italic; color: #495057; font-size: 13px; line-height: 1.4; margin: 0 0 6px 0;">
          "Quase não o fiz por causa da taxa mas devolveram-na tão rápido que nem tive tempo de me arrepender"
        </p>
        <div style="font-size: 11px; color: #adb5bd;">Sevilla · há 1h</div>
      </div>
    </div>

  </div>

  <!-- Rodapé com avatares sobrepostos e contador -->
  <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 22px; padding-top: 16px; border-top: 1px solid #f1f3f5;">
    <div style="display: flex; align-items: center;">
      <div style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; overflow: hidden; background: #ced4da; margin-right: -8px;"><img src="/images/p5.jpg" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; overflow: hidden; background: #adb5bd; margin-right: -8px;"><img src="/images/p6.jpg" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; overflow: hidden; background: #6c757d; margin-right: -8px;"><img src="/images/p7.jpg" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'"></div>
      <div style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; overflow: hidden; background: #495057;"><img src="/images/p8.jpg" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'"></div>
    </div>
    <span style="font-size: 12px; color: #495057; font-weight: 600;">+8.432 levantamentos confirmados hoje</span>
  </div>

</div>
<!-- Footer -->
<div class="confirmation-footer">
  <div class="confirmation-footer-text">
    Este processo cumpre os regulamentos federais aplicáveis dos Estados Unidos e os requisitos de verificação de identidade.
  </div>
</div>
</div>
  `,

  video: `
  <div class="video-page">
  <div class="video-header">
    WATCH THE VIDEO BELOW TO UNLOCK YOUR WITHDRAWAL AND LIFETIME ACCESS.
  </div>
  
  <div class="header-content" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
    <div class="logo-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="102" height="30" viewBox="0 0 102 30" fill="none"><path d="M9.49351 21.3496L9.59191 21.6274C9.57631 21.5956 9.54031 21.4984 9.49351 21.3496ZM4.92397 19.3739C5.09676 17.8817 5.68356 17.0459 6.78934 16.1891C8.37152 15.0287 10.3479 15.6851 10.3479 15.6851V11.7905C10.8284 11.7782 11.309 11.8081 11.7843 11.8799V16.8905C11.7843 16.8905 9.80851 16.2341 8.22633 17.3945C7.12114 18.2513 6.53315 19.0877 6.36095 20.5798C6.35555 21.391 6.50135 22.4506 7.17274 23.3668C7.00674 23.278 6.83754 23.1768 6.66515 23.0632C5.18616 22.027 4.91677 20.473 4.92397 19.3739ZM19.9448 4.59063C18.8564 3.34625 18.4448 2.08986 18.296 1.20728H19.6652C19.6652 1.20728 19.3922 3.52145 21.3818 5.79722L21.4094 5.82782C20.8731 5.47589 20.3814 5.06049 19.9448 4.59063Z" fill="#EE1D52"></path><path d="M26.5405 8.11923V13.029C26.5405 13.029 24.7933 12.9582 23.5003 12.6144C21.6949 12.1344 20.5346 11.3988 20.5346 11.3988C20.5346 11.3988 19.733 10.8732 19.6682 10.8372V20.9801C19.6682 21.5441 19.52 22.954 19.0682 24.1306C18.4784 25.669 17.5682 26.6788 17.4008 26.8846C17.4008 26.8846 16.2938 28.2502 14.3408 29.1694C12.5805 29.9986 11.0349 29.9776 10.5729 29.9986C10.5729 29.9986 7.90112 30.109 5.49695 28.4782C4.97685 28.1194 4.49153 27.7126 4.04736 27.2632L4.05936 27.2716C6.46413 28.9024 9.1353 28.792 9.1353 28.792C9.5979 28.771 11.1435 28.792 12.9033 27.9628C14.855 27.0436 15.9632 25.678 15.9632 25.678C16.1288 25.4722 17.0432 24.4624 17.6306 22.9234C18.0812 21.7475 18.2306 20.3375 18.2306 19.7729V9.63061C18.2954 9.66721 19.097 10.1928 19.097 10.1928C19.097 10.1928 20.2574 10.9296 22.0627 11.4084C23.3563 11.7516 25.1029 11.823 25.1029 11.823V7.97583C25.7005 8.11563 26.2099 8.15403 26.5405 8.11923Z" fill="#EE1D52"></path><path d="M25.1035 7.97568V11.8222C25.1035 11.8222 23.3569 11.7508 22.0633 11.4076C20.2579 10.9276 19.0976 10.1921 19.0976 10.1921C19.0976 10.1921 18.296 9.66646 18.2312 9.62986V19.7703C18.2312 20.3349 18.083 21.7449 17.6312 22.9209C17.0414 24.4599 16.1312 25.4697 15.9638 25.6755C15.9638 25.6755 14.8568 27.041 12.9038 27.9602C11.1441 28.7894 9.59848 28.7684 9.13588 28.7894C9.13588 28.7894 6.46472 28.8998 4.05995 27.269L4.04795 27.2606C3.7942 27.004 3.55522 26.7332 3.33216 26.4495C2.56477 25.4727 2.09437 24.3189 1.97617 23.9895C1.97582 23.9881 1.97582 23.9867 1.97617 23.9853C1.78538 23.4123 1.38578 22.0383 1.44038 20.7069C1.53698 18.3574 2.32897 16.9162 2.53837 16.5544C3.09319 15.5696 3.81468 14.6885 4.67074 13.9504C5.42572 13.3129 6.28189 12.8059 7.20391 12.4504C7.77883 12.2115 8.37791 12.0355 8.99069 11.9254C9.4389 11.8453 9.89266 11.8002 10.3479 11.7904V15.6826C10.3479 15.6826 8.37149 15.0262 6.78931 16.1866C5.68353 17.0434 5.09673 17.8792 4.92394 19.3713C4.91674 20.4705 5.18613 22.0245 6.66392 23.0619C6.83591 23.1759 7.00511 23.2771 7.17151 23.3655C7.42987 23.7144 7.74386 24.0185 8.1009 24.2655C9.54448 25.2189 10.7541 25.2855 12.3008 24.6663C13.3334 24.2577 14.1068 23.3247 14.4734 22.2903C14.6996 21.6447 14.6966 20.9943 14.6966 20.3229V1.20776H18.2966C18.4454 2.09035 18.857 3.34674 19.9454 4.59112C20.382 5.06098 20.8737 5.47638 21.4099 5.82831C21.5683 5.99931 22.3783 6.84409 23.4181 7.36369C23.9545 7.63179 24.52 7.83715 25.1035 7.97568Z" fill="black"></path><path d="M0.543457 22.7937V22.7973L0.632256 23.0499C0.622656 23.0205 0.589056 22.9311 0.543457 22.7937Z" fill="#69C9D0"></path><path d="M7.20399 12.4504C6.28197 12.8059 5.4258 13.3129 4.67082 13.9504C3.8147 14.6903 3.09359 15.5732 2.53965 16.5598C2.33025 16.9198 1.53826 18.3628 1.44166 20.7123C1.38706 22.0437 1.78666 23.4177 1.97745 23.9907C1.9771 23.9921 1.9771 23.9935 1.97745 23.9949C2.09745 24.3213 2.56605 25.4751 3.33344 26.4549C3.5565 26.7386 3.79548 27.0094 4.04923 27.2661C3.23575 26.7035 2.51026 26.0233 1.89645 25.2477C1.13566 24.2799 0.666469 23.1375 0.544071 22.8003L0.541071 22.7931V22.7883C0.350273 22.2171 -0.0505217 20.8419 0.0052776 19.5088C0.101876 17.1592 0.893867 15.718 1.10326 15.3562C1.65705 14.3695 2.37818 13.4865 3.23444 12.7468C3.98926 12.1091 4.84547 11.6021 5.76761 11.2469C6.34253 11.0079 6.9416 10.8319 7.55438 10.7219C8.47772 10.5604 9.42083 10.5464 10.3485 10.6805V11.7905C9.89345 11.7988 9.43969 11.8425 8.99137 11.9213C8.37822 12.0326 7.77893 12.2101 7.20399 12.4504Z" fill="#69C9D0"></path><path d="M18.296 1.20778H14.6961V20.3241C14.6961 20.9955 14.6991 21.6441 14.4729 22.2915C14.1093 23.3247 13.3359 24.2577 12.3051 24.6717C10.7577 25.2933 9.54815 25.2243 8.10517 24.2709C7.74813 24.0239 7.43415 23.7198 7.17578 23.3709C8.40517 24.0267 9.50555 24.0153 10.8687 23.4681C11.8935 23.0511 12.6735 22.1181 13.0335 21.0843C13.2603 20.4387 13.2573 19.7884 13.2573 19.1176V0H18.2282C18.2282 0 18.1718 0.475794 18.296 1.20778ZM25.1036 6.91252V7.9757C24.5199 7.83721 23.9542 7.63186 23.4176 7.36371C22.3778 6.84412 21.5678 5.99933 21.4094 5.82833C21.5931 5.94903 21.7838 6.05862 21.9806 6.15652C23.2448 6.78772 24.4868 6.97671 25.1036 6.91252Z" fill="#69C9D0"></path><path d="M78.2959 16.8815C78.2958 17.1549 78.3362 17.4269 78.4159 17.6884C78.4204 17.707 78.426 17.7252 78.4327 17.743C78.6247 18.3618 79.0097 18.9029 79.5314 19.2871C80.0531 19.6714 80.684 19.8786 81.3319 19.8784V22.9504C79.8373 22.9504 78.7663 23.0026 77.1373 22.039C75.2774 20.9398 74.2322 18.9298 74.2322 16.8425C74.2322 14.6909 75.401 12.5339 77.3827 11.4953C78.8191 10.7417 79.9123 10.7363 81.3319 10.7363V13.8065C80.5267 13.8067 79.7546 14.1266 79.1853 14.6959C78.616 15.2652 78.2961 16.0373 78.2959 16.8425V16.8815Z" fill="#69C9D0"></path><path d="M84.3912 16.8815C84.3916 17.1549 84.3512 17.4269 84.2712 17.6884C84.267 17.707 84.2614 17.7253 84.2544 17.743C84.0625 18.3619 83.6776 18.9031 83.1559 19.2874C82.6342 19.6716 82.0032 19.8788 81.3552 19.8784V22.9504C82.8504 22.9504 83.9208 23.0026 85.5498 22.039C87.4098 20.9398 88.4555 18.9298 88.4555 16.8425C88.4555 14.6909 87.2862 12.5339 85.305 11.4953C83.8686 10.7417 82.7748 10.7363 81.3552 10.7363V13.8065C82.1605 13.8065 82.9327 14.1263 83.5022 14.6957C84.0716 15.265 84.3916 16.0372 84.3918 16.8425L84.3912 16.8815Z" fill="#EE1D52"></path><path d="M34.3369 7.95044H45.5814L44.5422 11.0446H41.6022V22.8849H37.9801V11.0446H34.3369V7.95044ZM64.1385 7.95044V11.0446H67.7817V22.8849H71.4015V11.0446H74.3414L75.383 7.95044H64.1385ZM48.0275 11.4766C48.3739 11.4766 48.7125 11.3739 49.0006 11.1814C49.2886 10.989 49.5131 10.7155 49.6456 10.3954C49.7782 10.0754 49.8128 9.72327 49.7453 9.38354C49.6777 9.04381 49.5109 8.73174 49.266 8.48681C49.021 8.24187 48.709 8.07507 48.3692 8.00749C48.0295 7.93991 47.6773 7.9746 47.3573 8.10716C47.0373 8.23971 46.7638 8.46419 46.5713 8.7522C46.3789 9.04022 46.2762 9.37883 46.2762 9.72522C46.2762 10.1897 46.4607 10.6352 46.7891 10.9636C47.1176 11.2921 47.5631 11.4766 48.0275 11.4766ZM46.2732 22.8849H49.8233V12.7144H46.2732V22.8849ZM62.593 11.389H58.4422L54.8645 14.9704V7.96184H51.3383L51.3263 22.8849H54.8879V18.9963L55.9972 17.9925L59.4532 22.8849H63.2602L58.2538 15.7299L62.593 11.389ZM96.6449 15.7299L100.986 11.389H96.8351L93.2574 14.9704V7.96184H89.7306L89.7192 22.8849H93.2808V18.9963L94.3926 17.9925L97.8491 22.8849H101.652L96.6449 15.7299ZM87.5191 16.8423C87.5191 20.2149 84.7483 22.9491 81.3301 22.9491C77.912 22.9491 75.1418 20.2149 75.1418 16.8423C75.1418 13.4698 77.9126 10.7356 81.3301 10.7356C84.7477 10.7356 87.5203 13.4704 87.5203 16.8423H87.5191ZM84.3661 16.8423C84.3661 16.2419 84.188 15.6549 83.8544 15.1556C83.5208 14.6564 83.0467 14.2673 82.492 14.0375C81.9372 13.8077 81.3268 13.7476 80.7379 13.8647C80.1489 13.9818 79.608 14.271 79.1834 14.6956C78.7588 15.1202 78.4697 15.6611 78.3525 16.25C78.2354 16.839 78.2955 17.4494 78.5253 18.0041C78.7551 18.5589 79.1442 19.033 79.6434 19.3666C80.1427 19.7002 80.7297 19.8783 81.3301 19.8783C81.729 19.8785 82.1239 19.8002 82.4924 19.6477C82.8609 19.4952 83.1958 19.2716 83.4778 18.9897C83.7599 18.7077 83.9836 18.373 84.1362 18.0045C84.2889 17.6361 84.3674 17.2411 84.3673 16.8423H84.3661Z" fill="black"></path></svg>
    </div>
    
    <div class="balance-display" style="border: 2px solid #ff2c55; border-radius: 8px; padding: 15px; text-align: center;">
      <div style="font-size: 14px; margin-bottom: 5px;">BALANCE</div>
      <div class="balance-amount" style="font-size: 18px; font-weight: bold;">€ 947.00</div>
    </div>
  </div>
  
  <div style="border-bottom: 4px solid black; margin-bottom: 20px;"></div>
  
  <h1 style="color: #ff2c55; font-weight: 800; font-style: bold; font-family: 'Roboto', sans-serif;">
    BALANCE UNLOCK
  </h1>
  <p class="video-instruction">See how to unlock your withdrawal by watching the video.</p>
  
  <style>
  .video-container {
    border: 2px solid #ff2c55;
    border-radius: 8px;
    overflow: hidden;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .video-container video {
    width: 100%;
    height: auto;
    display: block;
    background-color: #000; /* previne fundo branco durante o carregamento */
    transition: opacity 0.3s ease-in-out;
    border-radius: 8px;
  }
</style>

<div class="video-container">
  <video
    id="tutorial-video"
    controls
    preload="metadata"
    poster="https://charming-figolla-3a3b33.netlify.app//src/media/capatiktok.jpg"
    playsinline
  >
    <source src="https://harmonious-toffee-77df94.netlify.app/video.mp4" type="video/mp4">
    Your browser does not support video playback.
  </video>
</div>

  
  <button class="unlock-btn"">
    UNLOCK NOW
  </button>
</div>
  `,

  checkout: `
    <div class="checkout-page">
      <div class="page-header">
        <button class="back-btn checkout-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1>Payment</h1>
      </div>
      <div class="checkout-container">
        <div class="checkout-header">
          <h1>Fee Payment</h1>
          <div class="amount">€27.00</div>
        </div>
        <div class="checkout-content">
          <div class="checkout-summary">
            <div class="summary-row">
              <span>Verification fee:</span>
              <strong>€27.00</strong>
            </div>
            <div class="summary-row total">
              <span>Total to pay:</span>
              <strong>€27.00</strong>
            </div>
          </div>
          <div class="payment-methods-info">
            <span class="icon">💳</span>
            <div>
              <strong>Available methods:</strong>
              <span id="payment-methods-label">Credit/debit card, Google Pay and Apple Pay</span>
            </div>
          </div>
          <div class="checkout-payment-warning">
            ⚠️ This fee is processed securely. Your withdrawal account information is not used for this payment.
          </div>
          <button type="button" class="checkout-btn" id="checkout-btn">
            Pay €27.00
          </button>
          <div class="checkout-error" id="checkout-error"></div>
        </div>
        <div class="checkout-footer">
          <p>🔒 Secure payment by Cooud</p>
          <p>You will be redirected to checkout</p>
        </div>
      </div>
    </div>
  `,
};

// Current page state
let currentPage = null;

// Initialize page navigation
function initializePages() {
  // Add click handler for withdraw button
}

// Show specific page
function showPage(pageName) {
  const container = document.querySelector(".app-container");

  // Save current content if it's the first navigation
  if (!currentPage) {
    currentPage = container.innerHTML;
  }

  // Update container with new page content
  container.innerHTML = pages[pageName];

  // Add page-specific event listeners
  if (pageName === "withdraw") {
    setupWithdrawPage();
  } else if (pageName === "loading") {
    // Loading page doesn't need setup
  } else if (pageName === "registration") {
    setupRegistrationPage();
  } else if (pageName === "video") {
    setupVideoPage();
  } else if (pageName === "checkout") {
    setupCheckoutPage();
  }
}

// Setup event listeners for withdraw page
function setupWithdrawPage() {
  // Back button
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const container = document.querySelector(".app-container");
      container.innerHTML = currentPage;
      initializePages();
    });
  }

  // Amount selection
  document.querySelectorAll(".amount-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isSpecialOffer = btn.getAttribute("data-amount") === "0.40";

      // Remover selected de todos
      document.querySelectorAll(".amount-btn").forEach((b) => {
        b.classList.remove("selected");
      });

      // Se selecionou outro botão que não é €0,40, remover special-offer do €0,40
      if (!isSpecialOffer) {
        const specialBtn = document.querySelector(
          '.amount-btn[data-amount="0.40"]',
        );
        if (specialBtn) {
          specialBtn.classList.remove("special-offer");
        }
      } else {
        // Se selecionou o €0,40, manter special-offer
        btn.classList.add("special-offer");
      }

      // Adicionar selected ao botão clicado
      btn.classList.add("selected");
    });
  });

  // Botão adicionar método
  const addMethodBtn = document.getElementById("add-method-btn");
  if (addMethodBtn) {
    addMethodBtn.addEventListener("click", () => {
      openMethodModal();
    });
  }

  // Fechar modal ao clicar fora
  const methodModal = document.getElementById("method-modal");
  if (methodModal) {
    methodModal.addEventListener("click", (e) => {
      if (e.target === methodModal) {
        closeMethodModal();
      }
    });
  }
}

// Setup event listeners for registration page
function setupRegistrationPage() {
  // Preencher dados de reembolso se disponíveis
  const formData = window.withdrawalFormData || {};

  if (formData.name) {
    const nameEl = document.getElementById("confirmation-name");
    if (nameEl) nameEl.textContent = formData.name;
  }

  if (formData.account) {
    const accountEl = document.getElementById("confirmation-key-type");
    if (accountEl) accountEl.textContent = formData.account;
  }

  // Preencher data atual
  const dateEl = document.getElementById("confirmation-date");
  if (dateEl) {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    dateEl.textContent = `${month}/${day}/${year}`;
  }

  const payButton = document.getElementById("pay-tax-btn");

  if (payButton) {
    payButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Rastrear InitiateCheckout quando clica em "Pagar Taxa"
      if (typeof trackInitiateCheckout === "function") {
        trackInitiateCheckout(27.00);
      }
      // Mostrar página de checkout integrada
      window.location.href = "/finalizacao.html" + window.location.search;
    });
  }
}

// Setup event listeners for checkout page
function setupCheckoutPage() {
  const backBtn = document.querySelector(".checkout-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showPage("registration");
    });
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (
    checkoutBtn &&
    typeof COOUD_CONFIG !== "undefined" &&
    COOUD_CONFIG.checkoutUrl
  ) {
    checkoutBtn.addEventListener("click", () => {
      window.location.href = COOUD_CONFIG.checkoutUrl + window.location.search;
    });
  }
}

// Setup event listeners for video page
function setupVideoPage() {
  document.querySelector(".unlock-btn").addEventListener("click", () => {
    window.location.href = "https://go.pepperpay.com.br/04yi8";
  });
}

// Métodos de saque - funções globais
let selectedPaymentMethod = null;

function openMethodModal() {
  const modal = document.getElementById("method-modal");
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeMethodModal() {
  const modal = document.getElementById("method-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

function selectMethod(method) {
  selectedPaymentMethod = method;
  closeMethodModal();
  renderMethodForm(method);
  updateMethodDisplay(method);
}

function renderMethodForm(method) {
  const container = document.getElementById("method-form-container");
  const addBtn = document.getElementById("add-method-btn");

  if (!container) return;

  let formHTML = "";

  if (method === "cashapp") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo" id="cashapp-name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-input" placeholder="seuemail@email.com" id="paypal-email">
        </div>
        <div class="form-group">
          <label>Número de telemóvel</label>
          <input type="text" class="form-input" placeholder="+351 21 12345678" id="cashapp-name">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  } else if (method === "paypal") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo" id="paypal-name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-input" placeholder="seuemail@email.com" id="paypal-email">
        </div>
        <div class="form-group">
          <label>Número de telemóvel</label>
          <input type="text" class="form-input" placeholder="+351 21 12345678" id="cashapp-name">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  } else if (method === "venmo") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo" id="venmo-name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-input" placeholder="seuemail@email.com" id="paypal-email">
        </div>
        <div class="form-group">
          <label>Número de telemóvel</label>
          <input type="text" class="form-input" placeholder="+351 21 12345678" id="cashapp-name">
        </div>
       
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  } else if (method === "zelle") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo" id="zelle-name">
        </div>
        <div class="form-group">
          <label>Zelle Email or Phone</label>
          <input type="text" class="form-input" placeholder="Email or phone number" id="zelle-identifier">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  } else if (method === "wire") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Account Holder Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo as it appears at your bank" id="wire-name">
        </div>
        <div class="form-group">
          <label>Bank Name</label>
          <input type="text" class="form-input" placeholder="Bank name" id="wire-bank">
        </div>
        <div class="form-group">
          <label>Routing Number</label>
          <input type="text" class="form-input" placeholder="9-digit routing number" id="wire-routing" pattern="[0-9]*" inputmode="numeric" maxlength="9">
        </div>
        <div class="form-group">
          <label>Account Number</label>
          <input type="text" class="form-input" placeholder="Account number" id="wire-account" pattern="[0-9]*" inputmode="numeric" maxlength="20">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  } else if (method === "ach") {
    formHTML = `
      <div class="method-form">
        <h3>Conectar método de pagamento</h3>
        <div class="form-group">
          <label>Account Holder Name</label>
          <input type="text" class="form-input" placeholder="Nome Completo as it appears at your bank" id="ach-name">
        </div>
        <div class="form-group">
          <label>Bank Name</label>
          <input type="text" class="form-input" placeholder="Bank name" id="ach-bank">
        </div>
        <div class="form-group">
          <label>Routing Number (ABA)</label>
          <input type="text" class="form-input" placeholder="9-digit routing number" id="ach-routing" inputmode="numeric" maxlength="9">
        </div>
        <div class="form-group">
          <label>Account Number</label>
          <input type="text" class="form-input" placeholder="Account number" id="ach-account" inputmode="numeric" maxlength="17">
        </div>
        <div class="form-group">
          <label>Account Type</label>
          <select class="form-input" id="ach-account-type" style="background: white; cursor: pointer;">
            <option value="">Select account type</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">CONFIRMAR</button>
      </div>
    `;
  }

  container.innerHTML = formHTML;
  container.style.display = "block";
  if (addBtn) addBtn.style.display = "none";

  // Add numeric-only validation for wire routing/account numbers
  if (method === "wire") {
    ["wire-routing", "wire-account"].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener("input", function (e) {
          e.target.value = e.target.value.replace(/\D/g, "");
        });
      }
    });
  }

  // ACH numeric-only for routing/account
  if (method === "ach") {
    ["ach-routing", "ach-account"].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener("input", function (e) {
          e.target.value = e.target.value.replace(/\D/g, "");
        });
      }
    });
  }
}

function updateMethodDisplay(method) {
  const display = document.getElementById("selected-method-display");
  const logo = document.getElementById("display-method-logo");
  const name = document.getElementById("display-method-name");

  if (!display || !logo || !name) return;

  const methodInfo = {
    cashapp: {
      src: "images/cashapp-logo.svg",
      alt: "Saque",
      label: "Saque",
    },
    paypal: { src: "images/paypal-logo.svg", alt: "PayPal", label: "PayPal" },
    venmo: { src: "https://cdn.aptoide.com/imgs/6/6/6/666df3003e6cf55fa74d64f8e7bbfe20_icon.png", alt: "MB WAY", label: "MB WAY" },
    zelle: { src: "images/zelle-logo.svg", alt: "Zelle", label: "Zelle" },
    wire: {
      src: "images/wire-logo.svg",
      alt: "Wire Transfer",
      label: "Wire Transfer",
    },
    ach: {
      src: "images/ach-logo.svg",
      alt: "Bank Transfer (ACH)",
      label: "Bank Transfer (ACH)",
    },
  };
  const info = methodInfo[method];
  if (info) {
    logo.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/32/32719.png" alt="€{info.alt}" style="width: 50px; height: 35px; object-fit: contain;">`;
    name.textContent = info.label;
  }

  display.style.display = "block";
}

function submitMethodForm() {
  const val = (id) => document.getElementById(id)?.value.trim() || "";
  let formData = {};

  switch (selectedPaymentMethod) {
    case "cashapp":
      formData = {
        name: val("cashapp-name"),
        account: val("cashapp-cashtag"),
        method: "cashapp",
      };
      break;

    case "paypal": {
      const email = val("paypal-email");
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
      formData = { name: val("paypal-name"), account: email, method: "paypal" };
      break;
    }

    case "venmo":
      formData = {
        name: val("venmo-name"),
        account: val("venmo-username"),
        method: "venmo",
      };
      break;

    case "zelle":
      formData = {
        name: val("zelle-name"),
        account: val("zelle-identifier"),
        method: "zelle",
      };
      break;

    case "wire": {
      const routing = val("wire-routing");
      if (routing && !/^\d{9}$/.test(routing)) {
        alert("Routing number must be exactly 9 digits");
        return;
      }
      formData = {
        name: val("wire-name"),
        bank: val("wire-bank"),
        routing,
        account: val("wire-account"),
        method: "wire",
      };
      break;
    }

    case "ach": {
      const routing = val("ach-routing");
      if (routing && !/^\d{9}$/.test(routing)) {
        alert("Routing number must be exactly 9 digits");
        return;
      }
      formData = {
        name: val("ach-name"),
        bank: val("ach-bank"),
        routing,
        account: val("ach-account"),
        accountType: document.getElementById("ach-account-type")?.value || "",
        method: "ach",
      };
      break;
    }
  }

  window.withdrawalFormData = formData;

  showPage("loading");
  setTimeout(() => showPage("registration"), 2500);
}

// Tornar funções disponíveis globalmente
window.openMethodModal = openMethodModal;
window.closeMethodModal = closeMethodModal;
window.selectMethod = selectMethod;
window.submitMethodForm = submitMethodForm;
