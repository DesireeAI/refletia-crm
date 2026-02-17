# Epic: Rebranding Complete - Twenty to Refletia Transformation

**Epic ID:** REFLECT-001  
**Created:** 2026-02-16  
**Created By:** @pm (Morgan)  
**Status:** Ready for Story Development  
**Priority:** High  

---

## Epic Goal

Transformar completamente a identidade visual do sistema Twenty para Refletia, implementando nova paleta de cores e substituindo elementos de marca enquanto mantendo toda a funcionalidade existente intacta.

---

## Epic Description

### Existing System Context
- **Current relevant functionality:** Sistema CRM/ERP completo com frontend React moderno
- **Technology stack:** React 18, TypeScript, Emotion, Vite, monorepo structure
- **Integration points:** `packages/twenty-front/`, `packages/twenty-ui/`, temas globais, componentes compartilhados

### Enhancement Details
- **What's being added/changed:** Rebranding completo de marca e cores
- **How it integrates:** Modificação sistemática de temas, componentes e assets
- **Success criteria:** Sistema visualmente Refletia com 100% funcionalidade preservada

---

## Stories

### Story 1: Theme System Overhaul - Refletia Color Palette
**Status:** Ready for Development  
**Executor:** @ux-design-expert  
**Quality Gate:** @dev  
**Quality Gate Tools:** [accessibility_validation, color_contrast_check, theme_consistency]

**Description:** Implementar nova paleta de cores Refletia no sistema de temas

**Acceptance Criteria:**
- Nova paleta de cores implementada em variáveis CSS/Emotion
- Tema global atualizado com cores Refletia
- Componentes base usando novas cores
- Validação WCAG AA para contraste
- Testes de consistência de cores passando

**Quality Gates:**
- **Pre-Commit:** Validação de contraste WCAG, consistência de cores
- **Pre-PR:** Revisão de acessibilidade, testes跨组件

**Focus:** Variáveis CSS/Emotion, tema global, componentes base

---

### Story 2: Brand Elements Replacement - Twenty to Refletia
**Status:** Ready for Development  
**Executor:** @dev  
**Quality Gate:** @architect  
**Quality Gate Tools:** [text_content_validation, asset_integration, brand_consistency]

**Description:** Substituir todos os textos "Twenty" por "Refletia" e atualizar logos

**Acceptance Criteria:**
- Todos os textos "Twenty" substituídos por "Refletia"
- Logo Twenty substituído por logo Refletia em todos os locais
- Favicon atualizado
- Meta tags atualizadas
- Assets de marca configurados

**Quality Gates:**
- **Pre-Commit:** Validação de conteúdo, verificação de assets
- **Pre-PR:** Revisão de consistência de marca, testes de UI

**Focus:** Textos estáticos, logos, favicons, meta tags

---

### Story 3: Component Visual Refresh - Complete UI Update
**Status:** Ready for Development  
**Executor:** @ux-design-expert  
**Quality Gate:** @dev  
**Quality Gate Tools:** [component_validation, visual_regression, responsive_design]

**Description:** Atualizar todos os componentes visuais para usar novo tema e marca

**Acceptance Criteria:**
- Todos os componentes UI usando novo tema Refletia
- Layouts consistentes com nova identidade visual
- Navegação atualizada
- Design system consistente
- Testes visuais passando
- Responsividade mantida

**Quality Gates:**
- **Pre-Commit:** Validação de componentes, testes visuais
- **Pre-PR:** Revisão de design system, testes responsivos

**Focus:** Componentes UI, layouts, páginas, navegação

---

## Refletia Color Palette

```css
/* Primary Colors */
--reflect-azul-escuro: #521262;
--reflect-rosa-vibrante: #edb069;
--reflect-amarelo-dourado: #e2ab2a;
--reflect-amarelo-terroso: #d9ae89;
--reflect-roxo-profundo: #541463;

/* Secondary Colors */
--reflect-rosa-empoeirado: #b17c69;
--reflect-marrom-avermelhado: #9b694d;
--reflect-roxo-acinzentado: #743e5a;
--reflect-lilas-suave: #a46c8c;
--reflect-roxo-escuro: #844a63;

/* Accent Colors */
--reflect-roxo-vibrante: #a020f0;
--reflect-roxo-terroso: #804a58;
--reflect-rosa-terroso: #a67162;
--reflect-amarelo-mostarda: #d2b069;
--reflect-amarelo-claro: #f3ea99;
--reflect-roxo-escuro-intenso: #993399;
--reflect-marrom-avermelhado-2: #986354;
```

---

## Compatibility Requirements

- [ ] APIs GraphQL permanecem inalteradas
- [ ] Funcionalidade existente 100% preservada
- [ ] Performance mantida ou melhorada
- [ ] Responsividade em todos os dispositivos

---

## Risk Mitigation

### Primary Risk
Quebra de consistência visual ou regressão em componentes existentes

### Mitigation Strategy
- Implementação incremental com testes automáticos de regressão visual
- Feature flags para rollout seguro
- Testes automatizados em cada stage

### Rollback Plan
- Versionamento de temas e capacidade de reverter para tema anterior
- Backup de assets e configurações
- Procedimento de rollback documentado

---

## Quality Assurance Strategy

### CodeRabbit Validation
- Todas as stories incluem revisão de código e padrões
- Validação automática de acessibilidade
- Testes de regressão visual

### Specialized Expertise
- **@ux-design-expert:** Consistência visual e acessibilidade
- **@dev:** Integração técnica e performance
- **@architect:** Padrões de arquitetura e consistência

### Quality Gates Aligned with Risk
- **MEDIUM RISK:** Pre-Commit + Pre-PR validation para todas as stories
- Testes automatizados de regressão
- Validação humana de design

---

## Definition of Done

- [ ] Todas as stories completadas com acceptance criteria met
- [ ] Funcionalidade existente verificada através de testes
- [ ] Pontos de integração funcionando corretamente
- [ ] Documentação atualizada apropriadamente
- [ ] Sem regressão em features existentes
- [ ] Sistema Refletia visualmente consistente
- [ ] Performance mantida ou melhorada
- [ ] Acessibilidade WCAG AA compliance

---

## Dependencies

### External Dependencies
- Logo Refletia assets (fornecido pelo usuário)
- Brand guidelines documentação (se disponível)

### Internal Dependencies
- Story 1 deve ser completada antes de Story 3
- Story 2 pode ser executada em paralelo com Story 1

---

## Timeline Estimate

- **Story 1:** 2-3 dias (Theme System)
- **Story 2:** 1-2 dias (Brand Elements)
- **Story 3:** 3-4 dias (Component Refresh)
- **Total Estimated:** 6-9 dias

---

## Success Metrics

- **Visual:** 100% de elementos visuais usando marca Refletia
- **Functional:** 0 regressões em funcionalidade existente
- **Performance:** <5% impacto em performance de carregamento
- **Accessibility:** 100% WCAG AA compliance
- **User Satisfaction:** Positive feedback on visual refresh

---

## Next Steps

1. **Story Manager Review:** Aprovar estrutura e escopo das stories
2. **Asset Preparation:** Organizar logo e assets Refletia
3. **Development:** Iniciar com Story 1 (Theme System)
4. **Testing:** Executar testes de regressão em cada story
5. **Deployment:** Rollout incremental com feature flags

---

## Story Manager Handoff

Please develop detailed user stories for this brownfield epic. Key considerations:

- This is a enhancement to an existing system running React 18, TypeScript, Emotion
- Integration points: `packages/twenty-front/`, `packages/twenty-ui/`, theme system, component library
- Existing patterns to follow: Current theme architecture, component patterns, asset management
- Critical compatibility requirements: APIs GraphQL unchanged, 100% functionality preserved
- Each story must include verification that existing functionality remains intact

The epic should maintain system integrity while delivering complete visual transformation from Twenty to Refletia brand.

---

**Last Updated:** 2026-02-16  
**Document Version:** 1.0
