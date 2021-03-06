/// <reference path="./_references.ts"/>

window.jsCommon = window.jsCommon || {};
window.powerbi = window.powerbi || {};
window.debug = window.debug || {};
window.InJs = window.InJs || {};

// require("../VisualsContracts/module.ts");
// require("../VisualsCommon/module.ts");

require("./typedefs/typedefs.ts");
require("./semanticQuery/sqExprVisitor.ts");
require("./types/enumType.ts");
require("./types/fill.ts");
require("./types/fillRule.ts");
require("./types/image.ts");
require("./types/paragraphs.ts");
require("./types/structuralType.ts");
require("./types/valueType.ts");
require("./contracts/dataShapeBinding.ts");
require("./contracts/dataShapeBindingDataReduction.ts");
require("./contracts/federatedConceptualSchema.ts");
require("./contracts/selector.ts");
require("./contracts/query.ts");
require("./contracts/queryProjection.ts");
require("./contracts/visualData.ts");
require("./formatting/dateTimeSequence.ts");
require("./formatting/displayUnitSystem.ts");
require("./formatting/numericSequence.ts");
require("./formatting/numericSequenceRange.ts");
require("./formatting/valueFormatter.ts");
require("./dataView/colorAllocator.ts");
require("./dataView/compiledDataViewMapping.ts");
require("./dataView/dataRoleHelper.ts");
require("./dataView/dataViewCategoricalReader.ts");
require("./dataView/dataViewConcatenateCategoricalColumns.ts");
require("./dataView/dataViewMappingVisitor.ts");
require("./dataView/dataViewMatrixProjectionOrder.ts");
require("./dataView/dataViewNormalizeValues.ts");
require("./dataView/dataViewObject.ts");
require("./dataView/dataViewObjectDefinition.ts");
require("./dataView/dataViewObjectDescriptor.ts");
require("./dataView/dataViewObjectEvaluationUtils.ts");
require("./dataView/dataViewObjectEvaluator.ts");
require("./dataView/dataViewCategoricalEvalGrouped.ts");
require("./dataView/dataViewPivotCategorical.ts");
require("./dataView/dataViewPivotMatrix.ts");
require("./dataView/dataViewSelfCrossJoin.ts");
require("./dataView/dataViewPivotCategoricalToPrimaryGroups.ts");
require("./dataView/dataViewRemoveSelects.ts");
require("./dataView/dataViewTransform.ts");
require("./displayNameGetter.ts");
require("./dataReader/dataReader.ts");
require("./iFormattingService.ts");
require("./semanticQuery/exprPatterns/fieldExprPattern.ts");
require("./dataView/dataViewAnalysis.ts");
require("./dataView/dataViewRoleWildcard.ts");
require("./dataView/dataViewScopeIdentity.ts");
require("./dataView/dataViewScopeWildcard.ts");
require("./dataView/rules/colorAllocatorCache.ts");
require("./dataView/rules/evalContext.ts");
require("./dataView/dataViewRegression.ts");
require("./dataView/dataViewSelectTransform.ts");
require("./dataView/rules/categoricalEvalContext.ts");
require("./dataView/rules/tableEvalContext.ts");
require("./dataView/rules/ruleEvaluation.ts");
require("./dataView/rules/colorRuleEvaluation.ts");
require("./dataView/utils/dataViewMatrixUtils.ts");
require("./dataView/utils/dataViewMetadataColumnUtils.ts");
require("./contracts/conceptualSchema.ts");
require("./dataView/scriptResultUtil.ts");
require("./segmentation/dataViewMerger.ts");
require("./semanticQuery/sqExprRewriter.ts");
require("./semanticQuery/exprPatterns/equalsToInRewriter.ts");
require("./semanticQuery/exprPatterns/filterScopeIdsCollector.ts");
require("./semanticQuery/exprPatterns/scopeIdentityExtractor.ts");
require("./semanticQuery/primitiveValueEncoding.ts");
require("./semanticQuery/sqAggregationOperations.ts");
require("./semanticQuery/sqHierarchyExprUtils.ts");
require("./semanticQuery/sqExprGroupUtils.ts");
require("./semanticQuery/sqExpr.ts");
require("./semanticQuery/sqExprUtils.ts");
require("./semanticQuery/semanticQueryRewriter.ts");
require("./semanticQuery/sqFrom.ts");
require("./semanticQuery/semanticQuery.ts");
require("./semanticQuery/SQFilter.ts");
require("./dataView/dataViewBuilder.ts");
require("./dataView/rules/staticEvalContext.ts");
require("./dataView/rules/matrixEvalContext.ts");
require("./services/formattingService.ts");
require("./services/serialization/sqExprShortSerializer.ts");
require("./selection/selectionId.ts");
